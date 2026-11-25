import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/product.service";
import type { IProduct } from "../types/product";
import { bodyParser } from '../utils/parseBody';

const productsController = async (req: IncomingMessage, res: ServerResponse) => {
    // /Product -> GET, PUT, POST

    const url = req.url
    const method = req.method
    // console.log(url); -> /products/1 -> []
    const urlParams = url?.split("/")
    // console.log(urlParams); ["","products", "1"]
    const id = urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null
    // console.log(id);

    // Get All Products
    if (url === "/products" && method === "GET") {

        // const products = [
        //     {
        //         id: 1,
        //         name: "Product-1",
        //         price: 30,
        //     },
        //     {
        //         id: 2,
        //         name: "Product-2",
        //         price: 50,
        //     }
        // ];

        const products = productService();

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: "Products retrived successfully", data: products,
        }),
        );
    } else if (method === "GET" && id !== null) {
        const products = productService(); // [{},{},{}]
        const product = products.find((p: IProduct) => p.id === id);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: "Products retrived successfully", data: product,
        }),
        );
    } else if (method === "POST" && url === "/products") {
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

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: "Products created successfully",
            data: newProduct,
        }),
        );
    }
};

export default productsController;