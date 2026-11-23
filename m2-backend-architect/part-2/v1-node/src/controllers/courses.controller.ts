import type { IncomingMessage, ServerResponse } from "http";

const coursesController = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "This is Courses route!!!" }))
}

export default coursesController;