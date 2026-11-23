import type { IncomingMessage, ServerResponse } from "http";
import productsController from "../controllers/products.controller";
import coursesController from "../controllers/courses.controller";

const routeHandler = (req: IncomingMessage, res: ServerResponse) => {

    const url = req.url // "/" "/products", "/courses"
    const method = req.method // "GET", "POST"

    if (url === "/" && method === "GET") {
        // console.log("This is root route");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "This is root route!!!" }))
    }
    else if (url?.startsWith("/products")) {
        // /Product -> GET, PUT, POST
        productsController(req, res);
    }
    else if (url?.startsWith("/courses")) {
        coursesController(req, res);
    }
    else {
        // console.log("This route is not defined");
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "This route is not defined!!!" }))

    }
};

export default routeHandler;