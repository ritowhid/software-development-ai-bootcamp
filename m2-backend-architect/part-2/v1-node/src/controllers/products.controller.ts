import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/product.service";
import type { IProduct } from "../types/product";
import { bodyParser } from '../utils/parseBody';
import { sendResponse } from "../utils/sendResponse";

const productsController = async (req: IncomingMessage, res: ServerResponse) => {
    // /Product -> GET, PUT, POST
    const url = req.url
    const method = req.method
    // console.log(url); -> /products/1 -> []
    const urlParams = url?.split("/")
    // console.log(urlParams); ["","products", "1"]
    const id = urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null
    // console.log(id);

    // Get => All Products
    if (url === "/products" && method === "GET") {
        try {
            const products = productService();
            return sendResponse(res, true, 200, "Products retrived successfully", products);
        } catch (error) {
            return sendResponse(res, false, 500, "Internal server error");
        }

        // Get => Single Products
    } else if (method === "GET" && id !== null) {
        try {
            const products = productService(); // [{},{},{}]
            const product = products.find((p: IProduct) => p.id === id);
            if (!product) {
                return sendResponse(res, false, 404, "Product not found");
            }
            return sendResponse(res, true, 200, "Product retrived successfully", product);
        } catch (error) {
            return sendResponse(res, false, 500, "Internal server error");
        }


        // POST => Create Product
    } else if (method === "POST" && url === "/products") {
        try {
            // "abcd" => "a", "b", "c" => "abc"
            const body = await bodyParser(req);
            // console.log(body);
            const newProduct = {
                id: Date.now(),
                ...body,
            };
            // console.log(newProduct);
            const products = productService(); // [{},{}]
            products.push(newProduct); //[{},{},{new}]
            createProduct(products);
            return sendResponse(res, true, 201, "Product created successfully", newProduct);
        } catch (error) {
            return sendResponse(res, false, 500, "Internal server error");
        }

        // PUT => Update Product
    } else if (method === "PUT" && id !== null) {
        try {
            const body = await bodyParser(req);
            const products = productService();
            const index = products.findIndex((p: IProduct) => p.id === id);
            // console.log(index);
            if (index < 0) {
                return sendResponse(res, false, 404, "Product Not Found")
            }
            // product => [{},{}]
            // product[1] => {}
            // console.log(products[index]);

            products[index] = { id: products[index].id, ...body };
            createProduct(products);

            return sendResponse(res, true, 200, "Products updated successfully", products[index]);

        } catch (error) {
            return sendResponse(res, false, 500, "Internal server error");
        }

        // DELETE => Delete Product
    } else if (method === "DELETE" && id !== null) {
        try {
            const products = productService(); // [{},{}]
            const index = products.findIndex((p: IProduct) => p.id === id);
            if (index < 0) {
                return sendResponse(res, false, 404, "Product Not Found")
            }
            products.splice(index, 1);
            createProduct(products);
            return sendResponse(res, true, 200, "Products deleted successfully")
        } catch (error) {
            return sendResponse(res, false, 500, "Internal server error");
        }
    }
};

export default productsController;