import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const productsController = (req: IncomingMessage, res: ServerResponse) => {
    // /Product -> GET, PUT, POST

    const url = req.url
    const method = req.method

    if (url === "/products" && method === "GET") {

        const products = [
            {
                id: 1,
                name: "Product-1",
                price: 30,
            },
            {
                id: 2,
                name: "Product-2",
                price: 50,
            }
        ];

        productService();

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Products retrived successfully", data: products, }))

    }


};

export default productsController;