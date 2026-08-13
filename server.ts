import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { retrieveRagContext, synthesizeRagAnswer } from "./src/data/ragKnowledgeBase";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check API
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "Portfolio" });
  });

  // RAG-Powered AI Chat API Route
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message || !message.trim()) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Step 1: Perform RAG Context Retrieval
      const retrievedContext = retrieveRagContext(message);

      // Step 2: Check for valid Gemini API key
      const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || process.env.API_KEY;

      if (apiKey && apiKey !== "MY_GEMINI_API_KEY" && !apiKey.startsWith("MY_GEMINI") && apiKey.trim() !== "") {
        try {
          const ai = new GoogleGenAI({ apiKey });
          const modelsToTry = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash"];

          for (const modelName of modelsToTry) {
            try {
              const response = await ai.models.generateContent({
                model: modelName,
                contents: `You are the official AI Assistant for Descartes Tuyishime's portfolio website (tdescartes.dev). Answer the user's question accurately and warmly in 1-3 sentences using ONLY the retrieved context below.

[RETRIEVED CONTEXT]:
${retrievedContext}

[USER QUESTION]:
${message}`
              });

              if (response && response.text && response.text.trim()) {
                return res.json({ reply: response.text.trim() });
              }
            } catch (modelErr: any) {
              console.warn(`[Gemini API] Model ${modelName} attempt failed:`, modelErr?.message || modelErr);
            }
          }
        } catch (apiErr: any) {
          console.warn("[Gemini API] Client initialization failed:", apiErr?.message || apiErr);
        }
      } else {
        console.log("[RAG Engine] Running with local Knowledge Base (No active Gemini API key configured in .env)");
      }

      // Step 3: Conversational RAG Synthesis (when API key is absent or API is unreachable)
      return res.json({
        reply: synthesizeRagAnswer(message)
      });

    } catch (err) {
      console.error("Chat API error:", err);
      return res.json({
        reply: "Descartes Tuyishime is a Software Engineer & AI Developer graduating in May 2025 from Marist College with internship experience at Microsoft and Google. Reach out at tuyishime.descartes@outlook.com!"
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
