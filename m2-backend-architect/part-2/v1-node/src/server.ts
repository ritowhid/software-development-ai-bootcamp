import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    // console.log("Request: ", req);

    // console.log("Response: ", res);

    // console.log(req.url);
    // console.log(req.method);

    const url = req.url // "/" "/products", "/courses"
    const method = req.method // "GET", "POST"

    if (url === "/" && method === "GET") {
        // console.log("This is root route");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "This is root route!!!" }))
    }
    else if (url?.startsWith("/products")) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "This is Products route!!!" }))
    }
    else if (url?.startsWith("/courses")) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "This is Courses route!!!" }))
    }
    else {
        // console.log("This route is not defined");
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "This route is not defined!!!" }))

    }

},
);

server.listen(5000, () => {
    console.log("server is running successfully!");
})