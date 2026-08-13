import React, { useState } from 'react';
import { X, Code, Copy, Check, FileCode } from 'lucide-react';

interface CodeInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeInspectorModal: React.FC<CodeInspectorModalProps> = ({ isOpen, onClose }) => {
  const [activeFile, setActiveFile] = useState<'architecture' | 'compiler' | 'poruta' | 'cpp'>('architecture');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const codeSnippets: Record<string, string> = {
    architecture: `// System Architecture Manifest - Portfolio
import { SystemArchitecture, MachineLearningPipeline } from '@cybernetic/core';

export const DescartesSystem: SystemArchitecture = {
  engineer: "Descartes Tuyishime",
  role: "Software Engineer & AI Developer",
  institution: "Marist College",
  expectedGraduation: "May 2025",
  
  stack: {
    languages: ["TypeScript", "Python", "C++", "Java", "SQL"],
    frameworks: ["React", "Next.js", "Express", "FastAPI", "Django"],
    ai_ml: ["PyTorch", "TensorFlow", "LangChain", "Transformers"],
    cloud: ["Azure", "AWS", "Docker", "Kubernetes", "Linux"]
  },

  projects: [
    { name: "ThermaGuard", domain: "IoT / Hardware", pingMs: 12 },
    { name: "Poruta", domain: "AI / Customs NLP", accuracy: 0.948 },
    { name: "xCompiler", domain: "Systems / Compiler", tokensPerSec: 50000 }
  ]
};`,
    compiler: `// xCompiler - Pratt Operator Precedence Parser
export class Parser {
  private tokens: Token[];
  private current: number = 0;

  public parseAST(): AbstractSyntaxTree {
    const statements: ASTNode[] = [];
    while (!this.isAtEnd()) {
      statements.push(this.parseStatement());
    }
    return new ASTNode("Program", statements);
  }

  private parseStatement(): ASTNode {
    if (this.match("FN")) return this.parseFunctionDeclaration();
    if (this.match("LET")) return this.parseVariableDeclaration();
    return this.parseExpressionStatement();
  }
}`,
    poruta: `# Poruta Customs Classifier - PyTorch Transformer
import torch
from transformers import AutoModelForSequenceClassification, AutoTokenizer

class PorutaCustomsModel(torch.nn.Module):
    def __init__(self, num_hs_codes=1200):
        super().__init__()
        self.encoder = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")
        self.classifier = torch.nn.Linear(768, num_hs_codes)

    def forward(self, input_ids, attention_mask):
        outputs = self.encoder(input_ids=input_ids, attention_mask=attention_mask)
        return self.classifier(outputs.logits)`,
    cpp: `// ThermaGuard ESP32 Dual Core MQTT Telemetry
#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);
WiFiClient espClient;
PubSubClient mqttClient(espClient);

void setup() {
  Serial.begin(115200);
  dht.begin();
  WiFi.begin("SSID", "PASSWORD");
  mqttClient.setServer("mqtt.thermaguard.internal", 1883);
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeFile]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className="bg-[#111317] border border-[#2D3139] rounded-xl max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col relative shadow-2xl text-left font-code-label"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1A1D23] px-6 py-4 border-b border-[#2D3139] flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#28e98c]">
            <Code className="w-5 h-5" />
            <span className="font-bold text-sm">CODE_INSPECTOR_AST</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#999999] hover:text-white rounded hover:bg-[#111317] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* File Tabs */}
        <div className="flex border-b border-[#2D3139] bg-[#0c0e12] px-4 overflow-x-auto">
          <button
            onClick={() => setActiveFile('architecture')}
            className={`text-xs py-2.5 px-4 flex items-center gap-1.5 cursor-pointer border-b-2 font-medium whitespace-nowrap ${
              activeFile === 'architecture' ? 'border-[#28e98c] text-[#28e98c]' : 'border-transparent text-[#999999]'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            descartes.config.ts
          </button>
          <button
            onClick={() => setActiveFile('compiler')}
            className={`text-xs py-2.5 px-4 flex items-center gap-1.5 cursor-pointer border-b-2 font-medium whitespace-nowrap ${
              activeFile === 'compiler' ? 'border-[#28e98c] text-[#28e98c]' : 'border-transparent text-[#999999]'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            xCompiler.ts
          </button>
          <button
            onClick={() => setActiveFile('poruta')}
            className={`text-xs py-2.5 px-4 flex items-center gap-1.5 cursor-pointer border-b-2 font-medium whitespace-nowrap ${
              activeFile === 'poruta' ? 'border-[#28e98c] text-[#28e98c]' : 'border-transparent text-[#999999]'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            poruta_classifier.py
          </button>
          <button
            onClick={() => setActiveFile('cpp')}
            className={`text-xs py-2.5 px-4 flex items-center gap-1.5 cursor-pointer border-b-2 font-medium whitespace-nowrap ${
              activeFile === 'cpp' ? 'border-[#28e98c] text-[#28e98c]' : 'border-transparent text-[#999999]'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            thermaguard.cpp
          </button>
        </div>

        {/* Code Content View */}
        <div className="flex-1 p-6 bg-[#000000] overflow-y-auto relative">
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 bg-[#1A1D23] text-[#28e98c] border border-[#2D3139] px-3 py-1.5 rounded text-xs flex items-center gap-1.5 hover:border-[#28e98c] cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy Code'}
          </button>
          <pre className="text-xs text-[#28e98c] font-mono leading-relaxed whitespace-pre-wrap">
            <code>{codeSnippets[activeFile]}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="bg-[#1A1D23] px-6 py-3 border-t border-[#2D3139] flex justify-between items-center text-xs text-[#999999]">
          <span>Format: UTF-8 | TypeScript / Python / C++</span>
          <button
            onClick={onClose}
            className="bg-[#28e98c] text-black px-4 py-1.5 rounded font-bold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
