import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, Play, Cpu, AlertTriangle, CheckCircle, Code, RefreshCw } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive'>('overview');

  // Interactive state for IoT telemetry
  const [sensorTemp, setSensorTemp] = useState(42.5);
  const [anomalyCount, setAnomalyCount] = useState(0);

  // Interactive state for xCompiler
  const [codeSample, setCodeSample] = useState(`fn calculate_risk(temp: Float) -> String {\n  if temp > 45.0 {\n    return "CRITICAL";\n  }\n  return "NOMINAL";\n}`);
  const [astTokens, setAstTokens] = useState<string[]>([]);

  // Interactive state for Poruta Classifier
  const [manifestText, setManifestText] = useState("Shipped 500 units of semiconductor microcontrollers, integrated circuit packages, silicon wafers from Tokyo port.");
  const [classificationResult, setClassificationResult] = useState<{ hsCode: string; category: string; confidence: number } | null>(null);

  useEffect(() => {
    if (project?.id === 'thermaguard') {
      const interval = setInterval(() => {
        const delta = (Math.random() - 0.48) * 1.5;
        setSensorTemp((prev) => {
          const next = parseFloat((prev + delta).toFixed(1));
          if (next > 46.0) {
            setAnomalyCount((c) => c + 1);
          }
          return next;
        });
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [project]);

  useEffect(() => {
    if (project?.id === 'xcompiler' && codeSample) {
      // Simple mock lexer
      const tokens = codeSample
        .replace(/[{}(),;]/g, ' $& ')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 16);
      setAstTokens(tokens);
    }
  }, [codeSample, project]);

  if (!project) return null;

  const handleRunClassifier = () => {
    if (!manifestText) return;
    setClassificationResult(null);
    setTimeout(() => {
      setClassificationResult({
        hsCode: "8542.31.00",
        category: "Electronic Integrated Circuits - Processors & Controllers",
        confidence: 0.984
      });
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="bg-[#111317] border border-[#2D3139] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal Bar */}
        <div className="sticky top-0 bg-[#111317]/95 backdrop-blur border-b border-[#2D3139] px-6 py-4 flex justify-between items-center z-10">
          <div>
            <span className="font-code-label text-xs text-[#10b981] uppercase">{project.category}</span>
            <h2 className="font-headline text-2xl font-bold text-white">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#999999] hover:text-white rounded bg-[#1A1D23] border border-[#2D3139] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-[#2D3139] bg-[#1A1D23] px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`font-code-label text-xs py-3 px-4 border-b-2 font-medium cursor-pointer transition-colors ${
              activeTab === 'overview'
                ? 'border-[#10b981] text-[#10b981]'
                : 'border-transparent text-[#999999] hover:text-white'
            }`}
          >
            System Overview &amp; Architecture
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`font-code-label text-xs py-3 px-4 border-b-2 font-medium cursor-pointer transition-colors flex items-center gap-1.5 ${
              activeTab === 'interactive'
                ? 'border-[#10b981] text-[#10b981]'
                : 'border-transparent text-[#999999] hover:text-white'
            }`}
          >
            <Play className="w-3 h-3 text-[#10b981]" />
            Live System Playground
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {activeTab === 'overview' ? (
            <>
              {/* Image banner */}
              <div className="relative rounded-lg overflow-hidden border border-[#2D3139] h-56">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent"></div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="font-headline text-lg font-bold text-white">System Concept</h3>
                <p className="font-body text-sm text-[#999999] leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-code-label text-xs bg-[#1A1D23] text-[#cbd5e1] px-3 py-1 rounded border border-[#2D3139]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Architecture Details Box */}
              {project.architectureDetails && (
                <div className="bg-[#1A1D23] p-5 rounded-lg border border-[#2D3139] space-y-4">
                  <h4 className="font-code-label text-xs text-[#10b981] uppercase tracking-wider font-bold flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    Architecture Specifications
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-code-label">
                    <div>
                      <span className="text-[#999999] block mb-1">Key Highlighting Metric:</span>
                      <span className="text-white bg-[#111317] p-2 rounded block border border-[#2D3139]">
                        {project.architectureDetails.keyHighlight}
                      </span>
                    </div>

                    <div>
                      <span className="text-[#999999] block mb-1">Benchmarked Performance:</span>
                      <span className="text-[#10b981] bg-[#111317] p-2 rounded block border border-[#2D3139]">
                        {project.architectureDetails.performance}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#999999] font-code-label text-xs block mb-2">Core Component Stack:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.architectureDetails.components.map((comp) => (
                        <span
                          key={comp}
                          className="font-code-label text-[11px] bg-[#111317] text-[#e2e2e8] px-2.5 py-1 rounded border border-[#2D3139]"
                        >
                          • {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Live Interactive Tab */
            <div className="space-y-6">
              {project.id === 'thermaguard' && (
                <div className="bg-[#000000] p-6 rounded-lg border border-[#2D3139] space-y-4 font-code-label">
                  <div className="flex justify-between items-center border-b border-[#2D3139] pb-3">
                    <div className="flex items-center gap-2 text-[#10b981]">
                      <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                      <span className="text-xs font-bold">ESP32 Sensor Telemetry Stream</span>
                    </div>
                    <span className="text-xs text-[#999999]">MQTT Port 1883</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 my-4">
                    <div className="p-4 bg-[#1A1D23] rounded border border-[#2D3139]">
                      <span className="text-xs text-[#999999] block">Core Thermal Sensor</span>
                      <span className={`text-3xl font-extrabold ${sensorTemp > 45.0 ? 'text-[#ffb4ab]' : 'text-[#10b981]'}`}>
                        {sensorTemp}°C
                      </span>
                    </div>
                    <div className="p-4 bg-[#1A1D23] rounded border border-[#2D3139]">
                      <span className="text-xs text-[#999999] block">Anomalies Detected</span>
                      <span className="text-3xl font-extrabold text-[#b9f1ff]">{anomalyCount}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#111317] rounded text-xs text-[#999999]">
                    Status: {sensorTemp > 45.0 ? <span className="text-[#ffb4ab] font-bold">Alert: Thermal threshold exceeded. Actuating cooling loop...</span> : <span className="text-[#10b981]">Nominal: Sensor variance within expected parameters.</span>}
                  </div>
                </div>
              )}

              {project.id === 'xcompiler' && (
                <div className="bg-[#000000] p-5 rounded-lg border border-[#2D3139] space-y-4 font-code-label">
                  <label className="text-xs text-[#10b981] block font-bold">Compiler Code Input:</label>
                  <textarea
                    value={codeSample}
                    onChange={(e) => setCodeSample(e.target.value)}
                    rows={4}
                    className="w-full bg-[#111317] text-[#10b981] p-3 rounded border border-[#2D3139] focus:outline-none text-xs resize-none"
                  ></textarea>

                  <div className="space-y-2">
                    <span className="text-xs text-[#999999] block">Generated Token Stream (Lexer Output):</span>
                    <div className="flex flex-wrap gap-2">
                      {astTokens.map((tok, idx) => (
                        <span key={idx} className="bg-[#1A1D23] text-[#b9f1ff] px-2 py-1 rounded text-[11px] border border-[#2D3139]">
                          &lt;{tok}&gt;
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'poruta' && (
                <div className="bg-[#000000] p-5 rounded-lg border border-[#2D3139] space-y-4 font-code-label">
                  <label className="text-xs text-[#10b981] block font-bold">Test Manifest Document Input:</label>
                  <textarea
                    value={manifestText}
                    onChange={(e) => setManifestText(e.target.value)}
                    rows={3}
                    className="w-full bg-[#111317] text-white p-3 rounded border border-[#2D3139] focus:outline-none text-xs resize-none"
                  ></textarea>
                  <button
                    onClick={handleRunClassifier}
                    className="bg-[#10b981] text-black px-4 py-2 rounded text-xs font-bold hover:bg-[#34d399] transition-colors cursor-pointer"
                  >
                    Run AI Classification
                  </button>

                  {classificationResult && (
                    <div className="p-4 bg-[#1A1D23] rounded border border-[#10b981] space-y-2 text-xs">
                      <div className="flex justify-between text-[#10b981] font-bold">
                        <span>Predicted Tariff HS Code: {classificationResult.hsCode}</span>
                        <span>Confidence: {(classificationResult.confidence * 100).toFixed(1)}%</span>
                      </div>
                      <p className="text-[#999999]">{classificationResult.category}</p>
                    </div>
                  )}
                </div>
              )}

              {(project.id === 'sheltrise' || project.id === 'pathos') && (
                <div className="bg-[#000000] p-6 rounded-lg border border-[#2D3139] text-center font-code-label space-y-4">
                  <div className="w-12 h-12 bg-[#10b981]/20 text-[#10b981] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-white text-base font-bold">Interactive Demo Ready</h4>
                  <p className="text-xs text-[#999999] max-w-md mx-auto">
                    {project.id === 'sheltrise'
                      ? 'Simulates multi-tenant ticket routing with WebSocket updates and automated Stripe billing integrations.'
                      : 'Simulates the browser windowing shell with interactive widgets.'}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#1A1D23] px-6 py-4 border-t border-[#2D3139] flex justify-between items-center">
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-code-label text-xs bg-[#111317] text-white px-4 py-2 rounded border border-[#2D3139] hover:border-[#28e98c] transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-[#28e98c]" />
                GitHub Repository
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="font-code-label text-xs bg-[#28e98c] text-black px-5 py-2 rounded font-bold hover:bg-[#59ffa3] transition-colors cursor-pointer"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};
