import app from "./server"; // zakładam, że Twój Express jest w `server.js`
import { createServer } from "http";

// Handler Vercel
export default function handler(req, res) {
  const server = createServer(app);
  server.emit("request", req, res);
}
