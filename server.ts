import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check API
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "Portfolio" });
  });

  // AI Chat API route proxying Gemini API server-side securely
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `You are the AI Assistant for Descartes Tuyishime's interactive portfolio website (tdescartes.dev). 
Descartes is a Software Engineer & AI Developer who graduated with a B.S. in Computer Science & Data Science from Marist College (May 2025). He is open to full-time Software Engineer roles in full-stack, backend, or AI/ML engineering.

Work Experience Summary:
- Microsoft (Jun-Aug 2022, Redmond WA): Software Engineer Intern. Engineered a TypeSpec Azure Function prototype automating API definition-to-deployment conversion, developed & deployed the TypeSpec developer documentation website using Eleventy, integrated Azure Pipelines CI/CD, and created OpenAPI-to-Swagger UI conversion in the TypeSpec Playground.
- Google (May-Aug 2021): Software Engineering Fellow (Software Product Sprint). Built a full-stack note-taking app with Java, JavaScript, GCP App Engine, Datastore, and OAuth 2.0 authentication.
- Marist College (Jun 2021 - Feb 2022): Student Web Developer. Developed web pages and Java portlets (Liferay, Bootstrap, jQuery) for Marist Magazine serving 10,000+ monthly visitors.
- Marist College (Oct 2020 - Feb 2022): Academic Tutor. Tutored Calculus, Data Analytics, and Python programming at the Academic Learning Center.
- Marist College (Dec 2019 - Sep 2020): IT Help Desk Operator. Phone and ticketing IT support for 6,000+ campus users and lab management.
- IHAHA Technologies (May-Jun 2019, Rwanda): Digital marketing research & Photoshop media asset design.
- kLab.rw (Apr-Jun 2019, Rwanda): Event operations, startup incubation communications, and partner research.
- Bridge2Rwanda (Dec 2018 - Mar 2019, Rwanda): Scholar recruitment team intern managing applicant data. Selected as 1 of 28 scholars from 1,000+ applicants.
- Agahozo Shalom Youth Village (Nov-Dec 2016, Rwanda): Computer Technician repairing 100+ workstations and configuring OS security.

Featured Systems & Engineering Projects:
1. SheltRise (Aug 2025 - Present): Property management SaaS with AI Lease Assistant powered by AWS Bedrock RAG, S3 image pipeline, Stripe API payments, and LandingAI ADE document parsing.
2. Poruta (Oct 2025 - Present): AI customs clearance platform automating document processing, tariff classification, and tax calculations using NVIDIA Triton OCR (gRPC), Qdrant vector search reranking, and Celery task queues over Redis.
3. ThermaGuard ESP32 (Feb-Mar 2026): Embedded monitoring system using dual-core FreeRTOS, custom 7-byte binary packet protocol over UART with CRC-8 checksums (83% bandwidth reduction vs JSON), and hardware watchdog.
4. xCompiler (Jan-May 2025): 6502 BNF grammar compiler with Finite Automata lexer, Recursive Descent parser, and bytecode emitter in TypeScript.
5. PathOS (Sep-Dec 2023): Browser operating system simulation with Round-Robin CPU scheduling and virtual filesystem.

Certifications: Agentic AI (DeepLearning.AI), Document AI: From OCR to Agentic Doc Extraction (DeepLearning.AI), Machine Learning & Deep Learning Specializations (Coursera/DeepLearning.AI), IBM DevOps Professional Certificate, Udacity Front End Nanodegree.

Contact info: tuyishime.descartes@outlook.com | tuyishime.descartes@gmail.com | tdescartes.dev | github.com/tdescartes | linkedin.com/in/tdescartes

Answer the user's question concisely, professionally, and accurately in 1-3 sentences as Descartes' AI assistant.

User Question: ${message}`
                }
              ]
            }
          ]
        });

        const reply = response.text || "Descartes is a Software Engineer & AI Developer with experience at Microsoft, Google, and Marist College. Reach out at tuyishime.descartes@outlook.com!";
        return res.json({ reply });
      } else {
        // Smart response when GEMINI_API_KEY is placeholder
        return res.json({
          reply: `Descartes is a Software Engineer & AI Developer (BS Computer Science & Data Analytics, Marist '25) with engineering experience at Microsoft (C#/.NET/Azure), Google (GCP/Java), and Marist College. Contact him at tuyishime.descartes@outlook.com!`
        });
      }
    } catch (err) {
      console.error("Chat API error:", err);
      return res.json({
        reply: `Descartes Tuyishime is a Software Engineer & AI Developer graduating in May 2025 from Marist College with experience at Microsoft and Google.`
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
