export interface KnowledgeChunk {
  id: string;
  category: 'Experience' | 'Projects' | 'Education' | 'Skills' | 'Certifications' | 'Volunteer' | 'Contact';
  title: string;
  keywords: string[];
  content: string;
}

export const RAG_KNOWLEDGE_BASE: KnowledgeChunk[] = [
  // --- CONTACT & BIO ---
  {
    id: 'bio-contact',
    category: 'Contact',
    title: 'Descartes Tuyishime Overview & Hiring Status',
    keywords: [
      'descartes', 'tuyishime', 'bio', 'overview', 'contact', 'email', 'phone',
      'hire', 'hiring', 'job', 'role', 'status', 'location', 'poughkeepsie', 'nyc',
      'remote', 'new grad', 'software engineer', 'swe', 'linkedin', 'github', 'website',
      'availability', 'resume', 'full-time', 'backend', 'fullstack', 'ai'
    ],
    content: `Descartes Tuyishime is a Software Engineer & AI Developer graduating in May 2025 with a B.S. in Computer Science (minors in Math, IT, and Information Systems) from Marist College. He brings software engineering internship experience from Microsoft and Google. He is based in Poughkeepsie, NY (open to NYC and remote full-time positions) and actively interviewing for New Grad Software Engineer roles in backend, full-stack, systems, and AI engineering. Contact: Email: tuyishime.descartes@outlook.com | Secondary: tuyishime.descartes@gmail.com | Website: tdescartes.dev | GitHub: github.com/tdescartes | LinkedIn: linkedin.com/in/tdescartes.`
  },

  // --- EXPERIENCES ---
  {
    id: 'microsoft-internship',
    category: 'Experience',
    title: 'Microsoft - Software Engineer Intern',
    keywords: [
      'microsoft', 'redmond', 'typespec', 'azure', 'function', 'eleventy',
      'swagger', 'openapi', 'c#', '.net', 'intern', 'experience', 'cloud', 'cicd', 'pipelines'
    ],
    content: `At Microsoft (Software Engineer Intern, May-Aug 2022 in Redmond, WA): Engineered a TypeSpec Azure Function prototype automating API definition-to-deployment conversion, reducing manual deployment steps for cloud APIs. Developed and deployed the official TypeSpec developer documentation website using Eleventy, Node.js, and Azure Pipelines CI/CD. Created OpenAPI-to-Swagger UI conversion features in the TypeSpec Playground for in-browser API testing.`
  },
  {
    id: 'google-sprint',
    category: 'Experience',
    title: 'Google - Software Engineering Fellow',
    keywords: [
      'google', 'software product sprint', 'sprint', 'java', 'gcp', 'app engine',
      'datastore', 'oauth', 'fellow', 'intern', 'cloud', 'note-taking'
    ],
    content: `At Google (Software Engineering Fellow - Software Product Sprint, May-Aug 2021): Selected for Google's 10-week Software Product Sprint. Collaborated with a cross-functional engineering team to build a full-stack Note-Taking web application using Java, JavaScript, GCP App Engine, Google Cloud Datastore, and OAuth 2.0 authentication following Agile software practices.`
  },
  {
    id: 'marist-webdev',
    category: 'Experience',
    title: 'Marist College - Student Web Developer',
    keywords: [
      'marist', 'marist magazine', 'liferay', 'portlet', 'java', 'bootstrap',
      'jquery', 'web developer', 'qa', 'cross-browser'
    ],
    content: `At Marist College (Student Web Developer, Jun 2021 – Feb 2022): Developed static web pages and Java portlets (Liferay, Bootstrap, jQuery) for Marist Magazine, improving user experience for 10,000+ monthly visitors and performing cross-browser QA testing across iOS, Android, Windows, and macOS.`
  },
  {
    id: 'marist-tutor',
    category: 'Experience',
    title: 'Marist College - Academic Tutor',
    keywords: [
      'marist', 'tutor', 'academic', 'calculus', 'math 241', 'data analytics',
      'data 220', 'python', 'cmpt 120', 'accommodation', 'student-athletes'
    ],
    content: `At Marist College (Academic Tutor, Oct 2020 – Feb 2022): Tutored student-athletes and accommodation students at the Academic Learning Center in Calculus [MATH 241], Intro to Data Analytics [DATA 220], and Python Programming [CMPT 120].`
  },
  {
    id: 'marist-helpdesk',
    category: 'Experience',
    title: 'Marist College - IT Help Desk Operator',
    keywords: [
      'marist', 'help desk', 'it support', 'hdp', 'ticketing', 'systems admin',
      'hardware', 'network', 'end-users', 'printers', 'computer labs'
    ],
    content: `At Marist College (IT Help Desk Operator, Dec 2019 – Sep 2020): Handled telephone support and ticketing using the Help Desk Processor (HDP) system for 6,000+ campus end-users (students, staff, vendors). Maintained computer labs, printers, hardware inventory, and lab attendance.`
  },
  {
    id: 'ihaha-klab-rwanda',
    category: 'Experience',
    title: 'Rwanda Tech Internships (IHAHA Technologies & kLab.rw)',
    keywords: [
      'ihaha', 'klab', 'rwanda', 'kigali', 'marketing', 'photoshop', 'av systems',
      'startup', 'incubator', 'partnerships'
    ],
    content: `Early Career in Rwanda: Worked at IHAHA Technologies (May-Jun 2019) as Digital Marketing & Media Intern conducting e-commerce research and Photoshop asset editing. Worked at kLab.rw (Apr-Jun 2019) as Tech Ecosystem Intern managing startup incubator communications, AV systems for tech events, and partner research.`
  },
  {
    id: 'bridge2rwanda-asyv',
    category: 'Experience',
    title: 'Bridge2Rwanda & Agahozo Shalom Youth Village',
    keywords: [
      'bridge2rwanda', 'b2r', 'scholar', 'agahozo shalom', 'asyv', 'computer technician',
      'workstations', 'windows', 'partitioning', 'imaging'
    ],
    content: `Bridge2Rwanda & AGY: Served as Recruitment Team Intern at Bridge2Rwanda (Dec 2018 – Mar 2019), managing candidate data for B2R Scholars Group 9 (selected as 1 of 28 scholars out of 1,000+ applicants). Worked as Computer Technician at Agahozo Shalom Youth Village (Nov-Dec 2016) repairing 100+ workstations, partitioning drives, imaging OS files, and setting up file security.`
  },

  // --- EDUCATION ---
  {
    id: 'education-marist',
    category: 'Education',
    title: 'Marist College - BS Computer Science & Minors',
    keywords: [
      'education', 'marist', 'college', 'degree', 'bs', 'bachelor', 'computer science',
      'data analytics', 'graduation', 'may 2025', 'coursework', 'algorithms', 'operating systems',
      'ai', 'databases', 'quantum', 'data mining', 'machine learning', 'minors', 'math'
    ],
    content: `Education: Pursuing B.S. in Computer Science at Marist College (Expected Graduation: May 2025) with Minors in Mathematics, Information Technology, and Information Systems. Key Coursework: Data Structures & Algorithms, Operating Systems, Computer Organization & Architecture, Database Management (3NF/BCNF, SQL), Internetworking, Quantum Algorithms, Data Mining & Predictive Analysis, Machine Learning, and Probability & Statistics.`
  },

  // --- PROJECTS ---
  {
    id: 'project-poruta',
    category: 'Projects',
    title: 'Poruta - AI Customs Clearance & Tariff Platform',
    keywords: [
      'poruta', 'customs', 'tariff', 'hs code', 'triton', 'ocr', 'qdrant',
      'vector', 'celery', 'redis', 'grpc', 'shipping', 'manifest', 'pytorch',
      'fastapi', 'next.js', 'minio', 'mongodb', 'postgresql'
    ],
    content: `Poruta (AI Customs Declaration & Tariff Classification Platform): Automates multi-language shipping manifest processing, tariff classification, and tax calculations. Built with NVIDIA Triton OCR via gRPC, Qdrant vector search reranking, PyTorch, FastAPI, Next.js, and Celery task queues over Redis across GPU workers, achieving sub-second extraction and 94.8%+ classification accuracy.`
  },
  {
    id: 'project-sheltrise',
    category: 'Projects',
    title: 'SheltRise - Multi-Tenant Property Management SaaS',
    keywords: [
      'sheltrise', 'property', 'management', 'saas', 'bedrock', 'rag', 'stripe',
      'landingai', 'ade', 's3', 'tenant', 'lease', 'billing', 'fastapi', 'react',
      'posthog', 'postgresql'
    ],
    content: `SheltRise (Multi-Tenant Property Management SaaS): Engineered a full-stack real estate platform with React, FastAPI, and PostgreSQL. Features an AI Lease Assistant powered by AWS Bedrock RAG (sub-100ms API response time), S3 presigned URL image pipeline, automated Stripe API rent billing, LandingAI ADE document parsing, and PostHog analytics.`
  },
  {
    id: 'project-thermaguard',
    category: 'Projects',
    title: 'ThermaGuard ESP32 - Industrial Thermal Monitoring System',
    keywords: [
      'thermaguard', 'esp32', 'freertos', 'uart', 'crc-8', 'binary protocol',
      'mqtt', 'kalman filter', 'iot', 'hardware', 'thermal', 'c++', 'oled', 'watchdog'
    ],
    content: `ThermaGuard (ESP32 Industrial IoT Monitoring System): Built a dual-core FreeRTOS embedded node in C++ (Core 0 serial ingestion, Core 1 OLED rendering). Features a custom 7-byte binary UART packet protocol with CRC-8 checksums (yielding 83% bandwidth reduction vs JSON and sub-10ms metric latency), real-time MQTT telemetry, hardware watchdog auto-recovery, and predictive Kalman filtering.`
  },
  {
    id: 'project-xcompiler',
    category: 'Projects',
    title: 'xCompiler - 6502 BNF Grammar Compiler',
    keywords: [
      'xcompiler', 'compiler', '6502', 'bnf', 'lexer', 'parser', 'ast',
      'bytecode', 'typescript', 'recursive descent', 'finite automata', 'symbol table'
    ],
    content: `xCompiler (6502 BNF Grammar Compiler): Custom multi-pass compiler built in TypeScript featuring a Finite Automata Lexer -> Recursive Descent Parser -> Token Validation -> Symbol Table Builder -> 6502 Bytecode Emitter, achieving a 50,000+ tokens/sec parse rate.`
  },
  {
    id: 'project-pathos',
    category: 'Projects',
    title: 'PathOS - Browser Operating System Simulator',
    keywords: [
      'pathos', 'browser os', 'round robin', 'cpu scheduling', 'virtual file system',
      'vfs', 'windowing', 'desktop', 'z-index', 'typescript', 'sessionstorage'
    ],
    content: `PathOS (Browser OS Simulator): Interactive browser desktop OS simulation built with TypeScript, featuring Round-Robin CPU scheduling, SessionStorage virtual filesystem (VFS), virtual memory swapping, 60fps window rendering, and a floating z-index desktop window manager.`
  },
  {
    id: 'project-egrep',
    category: 'Projects',
    title: 'EGREP Parser - Extended Regex Search Engine',
    keywords: [
      'egrep', 'regex', 'parser', 'nfa', 'dfa', 'thompson', 'powerset', 'python', 'automata'
    ],
    content: `EGREP Parser: High-performance extended regular expression search engine in Python. Implements Thompson's NFA construction and Powerset DFA conversion for linear-time O(n) text scanning and pattern matching.`
  },

  // --- SKILLS & CERTIFICATIONS ---
  {
    id: 'tech-stack',
    category: 'Skills',
    title: 'Technical Skills & Framework Stack',
    keywords: [
      'skill', 'stack', 'language', 'python', 'typescript', 'javascript', 'c++',
      'c', 'java', 'c#', '.net', 'sql', 'go', 'react', 'next.js', 'node.js', 'express',
      'django', 'fastapi', 'pytorch', 'tensorflow', 'aws', 'azure', 'gcp', 'docker',
      'kubernetes', 'linux', 'git', 'grpc', 'rest', 'celery', 'redis', 'triton',
      'qdrant', 'postgresql', 'mongodb', 'minio'
    ],
    content: `Technical Stack: Languages: Python, TypeScript, JavaScript, C++, C, Java, C#, SQL, Go. Cloud & Frameworks: React, Next.js, Node.js, Express, FastAPI, Django, PyTorch, TensorFlow, AWS (Bedrock, S3), Azure, GCP, Docker, Kubernetes, Linux, Git, gRPC, REST, Celery, Redis, Triton, Qdrant, PostgreSQL, MongoDB, MinIO.`
  },
  {
    id: 'certifications-awards',
    category: 'Certifications',
    title: 'Professional Certifications & Specializations',
    keywords: [
      'certif', 'certification', 'credential', 'agentic ai', 'document ai',
      'machine learning', 'deep learning', 'ibm', 'devops', 'udacity', 'coursera'
    ],
    content: `Certifications: Agentic AI (DeepLearning.AI), Document AI: From OCR to Agentic Doc Extraction (DeepLearning.AI), Machine Learning Specialization (DeepLearning.AI/Coursera), Deep Learning Specialization (DeepLearning.AI/Coursera), IBM DevOps & Software Engineering Professional Certificate, Udacity Front End Web Development Nanodegree.`
  },

  // --- VOLUNTEER & HUMANITARIAN ---
  {
    id: 'volunteer-work',
    category: 'Volunteer',
    title: 'Volunteer Work & Mentorship (Acts4Rwanda & COVID-19 Relief)',
    keywords: [
      'volunteer', 'mentor', 'acts4rwanda', 'rwanda', 'covid-19', 'health center',
      'rubona', 'humanitarian', 'community'
    ],
    content: `Volunteer Experience: Educational Mentor & Volunteer Tutor at Acts4Rwanda (May 2018 – May 2019), mentoring 30+ former homeless children and tutoring Math and Science for school re-entry. COVID-19 Surveillance Assistant at Marist College (Mar-Jun 2021). Data Entry Assistant at Rubona Health Center (Jan-Nov 2016).`
  }
];

/**
 * RAG Context Retriever Function
 */
export function retrieveRagContext(query: string, maxChunks = 4): string {
  if (!query || !query.trim()) {
    return RAG_KNOWLEDGE_BASE.map((c) => c.content).slice(0, 3).join('\n\n');
  }

  const q = query.toLowerCase();

  if (q.includes('microsoft') || q.includes('redmond') || q.includes('typespec') || q.includes('eleventy') || q.includes('swagger')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'microsoft-internship')!.content;
  }

  if (q.includes('google') || q.includes('product sprint') || q.includes('sprint') || q.includes('app engine') || q.includes('datastore')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'google-sprint')!.content;
  }

  if (q.includes('marist') || q.includes('college') || q.includes('graduat') || q.includes('degree') || q.includes('school') || q.includes('gpa') || q.includes('coursework')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'education-marist')!.content + "\n\n" + RAG_KNOWLEDGE_BASE.find(c => c.id === 'marist-webdev')!.content;
  }

  if (q.includes('sheltrise') || q.includes('property') || q.includes('tenant') || q.includes('bedrock') || q.includes('stripe')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'project-sheltrise')!.content;
  }

  if (q.includes('poruta') || q.includes('customs') || q.includes('tariff') || q.includes('triton') || q.includes('qdrant')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'project-poruta')!.content;
  }

  if (q.includes('thermaguard') || q.includes('esp32') || q.includes('freertos') || q.includes('uart') || q.includes('crc') || q.includes('iot')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'project-thermaguard')!.content;
  }

  if (q.includes('xcompiler') || q.includes('compiler') || q.includes('6502') || q.includes('parser') || q.includes('lexer')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'project-xcompiler')!.content;
  }

  if (q.includes('pathos') || q.includes('browser os') || q.includes('virtual file system') || q.includes('round robin')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'project-pathos')!.content;
  }

  if (q.includes('egrep') || q.includes('regex') || q.includes('automata') || q.includes('dfa') || q.includes('nfa')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'project-egrep')!.content;
  }

  if (q.includes('stack') || q.includes('skill') || q.includes('language') || q.includes('python') || q.includes('typescript') || q.includes('c++') || q.includes('java') || q.includes('golang')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'tech-stack')!.content;
  }

  if (q.includes('certif') || q.includes('devops') || q.includes('deeplearning')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'certifications-awards')!.content;
  }

  if (q.includes('volunteer') || q.includes('acts4rwanda') || q.includes('covid') || q.includes('mentor')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'volunteer-work')!.content;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('job') || q.includes('role') || q.includes('location') || q.includes('reach') || q.includes('work') || q.includes('resume')) {
    return RAG_KNOWLEDGE_BASE.find(c => c.id === 'bio-contact')!.content;
  }

  const qTokens = q.split(/\W+/).filter((t) => t.length > 2);

  const scored = RAG_KNOWLEDGE_BASE.map((chunk) => {
    let score = 0;
    for (const token of qTokens) {
      if (chunk.keywords.some((k) => k.includes(token) || token.includes(k))) {
        score += 3;
      }
      if (chunk.content.toLowerCase().includes(token)) {
        score += 1;
      }
    }
    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const topChunks = scored
    .slice(0, maxChunks)
    .filter((s) => s.score > 0)
    .map((s) => s.chunk.content);

  if (topChunks.length > 0) {
    return topChunks.join('\n\n');
  }

  return RAG_KNOWLEDGE_BASE.map((c) => c.content).slice(0, 3).join('\n\n');
}

/**
 * Conversational RAG Answer Synthesizer
 * Converts raw RAG chunks into warm, human-like answers formatted for chat.
 * Dynamically adapts phrasing based on specific entities (languages, companies, projects, intent).
 */
export function synthesizeRagAnswer(query: string): string {
  if (!query || !query.trim()) {
    return `Hello! I am Descartes' AI Assistant. Ask me anything about his software engineering background, Microsoft & Google internships, Marist College degree, or featured projects like SheltRise, Poruta, and ThermaGuard!`;
  }

  const q = query.toLowerCase();

  // Greetings
  if (/\b(hi|hello|hey|greetings|howdy|sup)\b/i.test(q)) {
    return `Hello! I'm Descartes' portfolio AI assistant. Feel free to ask about his internships at Microsoft and Google, his projects (SheltRise, Poruta, ThermaGuard), technical skills, or job availability!`;
  }

  // Specific Technology Queries
  if (q.includes('c++') || q.includes('cpp') || q.includes('cplusplus')) {
    return `Yes! Descartes is proficient in C++. He used C++ to build ThermaGuard ESP32, an embedded thermal monitoring system running dual-core FreeRTOS with a custom 7-byte binary UART packet protocol and predictive Kalman filtering.`;
  }

  if (q.includes('python') || q.includes('pytorch') || q.includes('tensorflow') || q.includes('fastapi') || q.includes('django')) {
    return `Python is one of Descartes' core languages! He uses Python extensively for FastAPI backends, PyTorch ML models, NVIDIA Triton document OCR pipelines in Poruta, and data analytics workflows.`;
  }

  if (q.includes('typescript') || q.includes('javascript') || q.includes('react') || q.includes('next.js') || q.includes('node')) {
    return `TypeScript and React are central to Descartes' engineering work. He built xCompiler (a 6502 BNF compiler parsing 50k+ tokens/sec) and PathOS in TypeScript, and developed React/Next.js platforms for SheltRise and Poruta.`;
  }

  if ((q.includes('java') && !q.includes('script')) || q.includes('gcp') || q.includes('app engine') || q.includes('datastore') || q.includes('liferay')) {
    return `Descartes has extensive Java experience. He built full-stack GCP App Engine apps at Google during his Software Engineering Fellowship, and developed Java portlets and web services for Marist Magazine.`;
  }

  if (q.includes('aws') || q.includes('bedrock') || q.includes('rag') || q.includes('s3') || q.includes('azure') || q.includes('docker') || q.includes('kubernetes')) {
    return `Descartes works with AWS (Bedrock RAG, S3 presigned URLs), Azure (Functions, Pipelines CI/CD), Docker, and GCP. At Microsoft, he engineered TypeSpec Azure Functions, and built AWS Bedrock RAG pipelines for SheltRise!`;
  }

  if (q.includes('c#') || q.includes('.net') || q.includes('csharp')) {
    return `Yes! Descartes used C# and .NET during his Software Engineer Internship at Microsoft in Redmond, WA, engineering Azure Function prototypes for cloud API tooling.`;
  }

  // Location & Hiring Status
  if (q.includes('locate') || q.includes('location') || q.includes('relocat') || q.includes('city') || q.includes('poughkeepsie') || q.includes('nyc') || q.includes('seattle')) {
    return `Descartes is based in Poughkeepsie, NY 12601 and is open to full-time New Grad software engineering roles in NYC, Seattle, or Remote!`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('job') || q.includes('role') || q.includes('reach') || q.includes('work') || q.includes('resume') || q.includes('available')) {
    return `Descartes is based in Poughkeepsie, NY 12601 (open to NYC and remote full-time positions) and is actively interviewing for New Grad Software Engineering roles in backend, full-stack, systems, or AI! Reach him directly at tuyishime.descartes@outlook.com or connect at linkedin.com/in/tdescartes.`;
  }

  // Specific Experience & Internship Queries
  if (q.includes('microsoft') || q.includes('redmond') || q.includes('typespec') || q.includes('eleventy') || q.includes('swagger')) {
    return `During his Software Engineer Internship at Microsoft in Redmond, WA (Summer 2022), Descartes engineered a TypeSpec Azure Function prototype automating API definition-to-deployment. He also built and deployed the official TypeSpec developer documentation website using Eleventy & Azure Pipelines CI/CD, and created OpenAPI-to-Swagger UI conversion in the TypeSpec Playground!`;
  }

  if (q.includes('google') || q.includes('product sprint') || q.includes('sprint')) {
    return `At Google (Summer 2021), Descartes was selected as a Software Engineering Fellow in Google's Software Product Sprint. He developed a full-stack web application using Java, JavaScript, GCP App Engine, Google Cloud Datastore, and OAuth 2.0 authentication.`;
  }

  if (q.includes('marist') || q.includes('college') || q.includes('graduat') || q.includes('degree') || q.includes('school') || q.includes('gpa') || q.includes('coursework') || q.includes('minor')) {
    return `Descartes is graduating in May 2025 from Marist College with a Bachelor of Science in Computer Science and Minors in Mathematics, Information Technology, and Information Systems. His coursework includes Data Structures & Algorithms, Operating Systems, AI, Database Management, Data Mining, Quantum Algorithms, and Machine Learning. At Marist, he also served as Student Web Developer for Marist Magazine (10,000+ monthly visitors), Academic Tutor in Calculus & Python, and IT Help Desk Operator!`;
  }

  // Specific Project Queries
  if (q.includes('sheltrise') || q.includes('property') || q.includes('tenant') || q.includes('lease')) {
    return `SheltRise is a multi-tenant property management SaaS platform engineered by Descartes with React, FastAPI, and PostgreSQL. It features an AI Lease Assistant powered by AWS Bedrock RAG (sub-100ms response time), S3 presigned URL image pipeline, automated Stripe API billing, and LandingAI ADE document parsing for automated lease intake.`;
  }

  if (q.includes('poruta') || q.includes('customs') || q.includes('tariff') || q.includes('triton') || q.includes('qdrant')) {
    return `Poruta is an intelligent customs clearance platform that automates document processing and tariff classification for international shipping manifests. It utilizes NVIDIA Triton OCR via gRPC, Qdrant vector search reranking, and Celery task queues over Redis across GPU workers to achieve sub-second extraction and over 94.8% classification accuracy.`;
  }

  if (q.includes('thermaguard') || q.includes('esp32') || q.includes('freertos') || q.includes('uart') || q.includes('crc') || q.includes('iot')) {
    return `ThermaGuard is an industrial thermal monitoring system built with dual-core ESP32 microcontrollers in C++. It features a custom 7-byte binary packet protocol over UART with CRC-8 checksums (yielding 83% bandwidth reduction vs JSON and sub-10ms metric latency), OLED display driver, hardware watchdog recovery, real-time MQTT telemetry, and predictive Kalman filtering.`;
  }

  if (q.includes('egrep') || q.includes('regex') || q.includes('thompson') || q.includes('powerset')) {
    return `EGREP Parser is a high-performance extended regular expression search engine built in Python. It constructs Thompson's NFA state machines and converts them to Powerset DFAs for linear-time O(n) text scanning and pattern matching.`;
  }

  if (q.includes('xcompiler') || q.includes('6502') || q.includes('compiler') || q.includes('bnf') || q.includes('ast')) {
    return `xCompiler is a custom 6502 BNF grammar compiler built in TypeScript. It implements a multi-pass pipeline: Finite Automata Lexer -> Recursive Descent Parser -> Token Validation -> Symbol Table Builder -> 6502 Bytecode Emitter, compiling at over 50,000 tokens/sec.`;
  }

  if (q.includes('pathos') || q.includes('browser os') || q.includes('round robin') || q.includes('vfs')) {
    return `PathOS is an interactive browser desktop operating system simulation created by Descartes in TypeScript. It features Round-Robin CPU scheduling, a SessionStorage virtual filesystem (VFS), virtual memory swapping, 60fps window rendering, and a floating z-index window manager shell.`;
  }

  // Skills & Certifications Queries
  if (q.includes('stack') || q.includes('skill') || q.includes('language') || q.includes('tool')) {
    return `Descartes' technical stack includes Python, TypeScript, JavaScript, C++, C, Java, C#, SQL, and Go. On the framework and cloud side, he builds with React/Next.js, Node.js, Express, FastAPI, Django, PyTorch, TensorFlow, AWS (Bedrock, S3), Azure, GCP, Docker, Kubernetes, Linux, Git, gRPC, REST, Celery, Redis, Triton, Qdrant, PostgreSQL, MongoDB, and MinIO.`;
  }

  if (q.includes('certif') || q.includes('credential') || q.includes('deeplearning') || q.includes('devops')) {
    return `Descartes holds certifications in Agentic AI (DeepLearning.AI), Document AI: From OCR to Agentic Doc Extraction (DeepLearning.AI), Machine Learning Specialization (DeepLearning.AI/Coursera), Deep Learning Specialization (DeepLearning.AI/Coursera), IBM DevOps Professional Certificate, and Udacity Front End Nanodegree.`;
  }

  if (q.includes('volunteer') || q.includes('acts4rwanda') || q.includes('covid') || q.includes('mentor')) {
    return `Descartes has a rich background in community service: He served as an Educational Mentor at Acts4Rwanda mentoring 30+ former homeless children, a COVID-19 Surveillance Assistant at Marist College, and a Data Entry Assistant at Rubona Health Center in Rwanda!`;
  }

  // Location & Hiring Status
  if (q.includes('location') || q.includes('relocat') || q.includes('city') || q.includes('poughkeepsie') || q.includes('nyc') || q.includes('seattle')) {
    return `Descartes is based in Poughkeepsie, NY 12601 and is open to full-time New Grad software engineering roles in NYC, Seattle, or Remote!`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('job') || q.includes('role') || q.includes('reach') || q.includes('work') || q.includes('resume')) {
    return `Descartes is based in Poughkeepsie, NY 12601 (open to NYC and remote full-time positions) and is actively interviewing for New Grad Software Engineering roles in backend, full-stack, systems, or AI! Reach him directly at tuyishime.descartes@outlook.com or connect at linkedin.com/in/tdescartes.`;
  }

  return `Descartes Tuyishime is a Software Engineer & AI Developer graduating in May 2025 from Marist College (BS Computer Science & Data Analytics) with engineering internship experience at Microsoft and Google. He specializes in full-stack SaaS, AI systems, and embedded microcontrollers. Feel free to ask about his projects (SheltRise, Poruta, ThermaGuard, xCompiler, PathOS), tech stack, or experience!`;
}
