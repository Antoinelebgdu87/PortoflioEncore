import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { getPortfolio, updatePortfolio } from "./routes/portfolio";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Portfolio API routes
  app.get("/api/portfolio", getPortfolio);
  app.post("/api/portfolio", updatePortfolio);

  return app;
}
