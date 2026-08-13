import { Project, ExperienceItem, EducationItem, CompetencyCategory, CertificationItem, VolunteerItem } from '../types';

export const PERSONAL_INFO = {
  name: "Descartes Tuyishime",
  shortName: "Descartes",
  title: "Seeking New Grad Software Engineer Roles (Ex-Microsoft & Google Intern)",
  headline: "New Grad Software Engineer | Ex-Microsoft & Google Intern | Seeking Full-Time 2025/2026 Roles",
  tagline: "Marist College CS Graduate (May 2025) with software engineering intern experience at Microsoft and Google. Actively seeking full-time New Grad Software Engineer roles in backend, full-stack, systems, or AI/ML.",
  bioParagraphs: [
    "I am a Computer Science graduate from Marist College ('25) with software engineering internship experience at Microsoft and Google.",
    "I specialize in backend, full-stack, and AI engineering—building production API tooling, intelligent document parsing systems, and high-throughput backend services. Core stack: Python, TypeScript, React, FastAPI, AWS, and PostgreSQL."
  ],
  projectCount: "10+",
  heroImage: "/avatar_anime_nerdy.jpg",
  email: "tuyishime.descartes@outlook.com",
  secondaryEmail: "tuyishime.descartes@gmail.com",
  website: "https://tdescartes.dev",
  github: "https://github.com/tdescartes",
  linkedin: "https://www.linkedin.com/in/tdescartes/",
  twitter: "https://twitter.com/descartestuyi",
  location: "Poughkeepsie, NY 12601"
};

export const COMPETENCY_CATEGORIES: CompetencyCategory[] = [
  {
    title: "AI / ML & NLP",
    icon: "memory",
    skills: ["AWS Bedrock & RAG", "NVIDIA Triton & Qdrant", "Document AI / OCR", "PyTorch / LangChain"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: "cloud",
    skills: ["AWS & Azure", "Docker & Kubernetes", "Google Cloud Platform", "CI/CD & Celery / Redis"]
  },
  {
    title: "Languages",
    icon: "terminal",
    skills: ["Python", "TypeScript / JavaScript", "Java & C++ / C", "SQL & Go"]
  },
  {
    title: "Frameworks & DBs",
    icon: "hub",
    skills: ["FastAPI & Next.js", "React.js & Django", "PostgreSQL & MongoDB", "REST & gRPC APIs"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "microsoft",
    role: "Software Engineer Intern",
    company: "Microsoft",
    location: "Redmond, WA (On-site)",
    period: "May 2022 – Aug 2022",
    description: "Built TypeSpec Cloud API tooling used in production, including automated deployment functions and public developer platform infrastructure.",
    bullets: [
      "Engineered a TypeSpec Azure Function Prototype that automates API definition-to-deployment conversion, reducing manual deployment steps for the TypeSpec team.",
      "Developed and deployed the TypeSpec developer documentation website using Eleventy, enabling its public release to the developer community.",
      "Integrated CI/CD Azure Pipelines for automated website deployment and added the TypeSpec Playground for interactive in-browser API testing.",
      "Implemented OpenAPI-to-Swagger UI conversion feature on the TypeSpec Playground, allowing developers to test APIs without leaving the browser."
    ],
    technologies: ["TypeSpec", "TypeScript", "C#", "Azure Functions", "Azure Pipelines", "Eleventy", "OpenAPI / Swagger"]
  },
  {
    id: "google-fellow",
    role: "Software Engineering Fellow",
    company: "Google",
    location: "Remote (Software Product Sprint)",
    period: "May 2021 – Aug 2021",
    description: "Designed and shipped full-stack cloud applications utilizing Google Cloud Platform infrastructure in a cross-functional team.",
    bullets: [
      "Collaborated with a cross-functional team to design and ship a full-stack Note-Taking web application using Java, JavaScript, HTML, and CSS over 10 weeks.",
      "Leveraged Google Cloud Platform APIs including App Engine and Datastore for backend infrastructure.",
      "Implemented user authentication using OAuth 2.0 and built both front-end and back-end components for the user profile view.",
      "Practiced industry best practices: Git/GitHub collaboration, code reviews, distributed development, and iterative UI design.",
      "Designed a personal portfolio website as part of the onboarding track."
    ],
    technologies: ["Java", "JavaScript", "Google Cloud App Engine", "Datastore", "OAuth 2.0", "Git / GitHub"]
  },
  {
    id: "marist-webdev",
    role: "Student Web Developer",
    company: "Marist College",
    location: "Poughkeepsie, NY",
    period: "Jun 2021 – Feb 2022",
    description: "Developed and maintained full-stack web applications and Java portlets for campus web services.",
    bullets: [
      "Developed static web pages and Java portlets for the Marist Magazine site using HTML, CSS, JavaScript, and Java (Liferay, Bootstrap, jQuery).",
      "Conducted cross-browser and cross-device quality assurance testing (Chrome, Firefox, Safari, Edge on iOS, Windows, Android, macOS).",
      "Improved user experience for 10,000+ monthly visitors through bug reporting and iterative fixes.",
      "Updated and maintained developer and user documentation."
    ],
    technologies: ["Java", "Liferay", "JavaScript", "Bootstrap", "jQuery", "HTML/CSS"]
  },
  {
    id: "marist-tutor",
    role: "Academic Tutor",
    company: "Marist College",
    location: "Poughkeepsie, NY",
    period: "Oct 2020 – Feb 2022",
    description: "Tutored computer science, mathematics, and data analytics subjects for student-athletes and accommodation students.",
    bullets: [
      "Worked at Marist College Academic Learning Center as Tutor for students from Office of Accommodation and Student-Athlete Center.",
      "Assisted students with core concepts in Calculus [MATH 241], Intro to Data Analytics [DATA 220], and Python Programming [CMPT 120].",
      "Prepared students for upcoming examinations and provided studying strategies."
    ],
    technologies: ["Python", "Data Analytics", "Calculus", "Computer Science"]
  },
  {
    id: "marist-helpdesk",
    role: "Information Technology Help Desk Operator",
    company: "Marist College",
    location: "Poughkeepsie, NY",
    period: "Dec 2019 – Sep 2020",
    description: "Provided campus-wide IT infrastructure support and system administration for 6,000+ end-users.",
    bullets: [
      "Created support tickets using the Help Desk Processor (HDP) ticketing system to accurately document files.",
      "Provided support via telephone for over 6,000 end-users including students, staff, administration, and vendors.",
      "Maintained records of communication transactions, technical problems, and remedial actions taken.",
      "Maintained computer labs and printers on campus, recording inventory transactions and lab attendance."
    ],
    technologies: ["IT Support", "Help Desk (HDP)", "Systems Admin", "Network Troubleshooting"]
  },
  {
    id: "ihaha",
    role: "Digital Marketing & Media Intern",
    company: "IHAHA Technologies",
    location: "Kigali, Rwanda",
    period: "May 2019 – Jun 2019",
    description: "Conducted market research and digital media asset editing for online marketing initiatives.",
    bullets: [
      "Conducted research on online marketing trends in Rwanda.",
      "Utilized Adobe Photoshop and editing applications to polish visual assets for the company website.",
      "Documented and photographed new product inventory in storage facilities."
    ],
    technologies: ["Adobe Photoshop", "Digital Marketing", "Inventory Management"]
  },
  {
    id: "klab",
    role: "Tech Ecosystem Intern",
    company: "kLab.rw",
    location: "Kigali, Rwanda",
    period: "Apr 2019 – Jun 2019",
    description: "Facilitated tech startup communications, event operations, and partnership research.",
    bullets: [
      "Eased communication between management, incubators, and interns.",
      "Organized technology events and ensured smooth execution by setting up venues and audio/visual systems.",
      "Conducted research on potential strategic corporate partners and presented findings to management."
    ],
    technologies: ["Event Operations", "AV Systems", "Partnership Research"]
  },
  {
    id: "b2r",
    role: "Recruitment Team Intern",
    company: "Bridge2Rwanda",
    location: "Kigali, Rwanda",
    period: "Dec 2018 – Mar 2019",
    description: "Managed candidate application data and scholar selection operations.",
    bullets: [
      "Collaborated with the recruitment team to evaluate applications and select B2R Scholars Group 9.",
      "Protected application data security through organized spreadsheet management.",
      "Scheduled group and individual candidate interviews and invited candidates via phone and email."
    ],
    technologies: ["Data Management", "Candidate Evaluation", "Google Workspace"]
  },
  {
    id: "asyv",
    role: "Computer Technician",
    company: "Agahozo Shalom Youth Village",
    location: "Rwamagana, Rwanda",
    period: "Nov 2016 – Dec 2016",
    description: "Provided hardware repair, OS deployment, and system maintenance for 100+ workstations.",
    bullets: [
      "Repaired 100+ computers via Windows installation, formatting, hard-drive partitioning, and system imaging.",
      "Built mechanisms to prevent unauthorized users from damaging operating system files."
    ],
    technologies: ["Windows OS", "Disk Partitioning", "System Imaging", "Hardware Repair"]
  }
];

export const EDUCATION: EducationItem = {
  institution: "Marist College",
  degree: "Bachelor of Science — Computer Science",
  expectedGraduation: "August 2019 – May 2025 · Poughkeepsie, NY",
  details: "Major in Computer Science. Minors in Mathematics, Information Technology, and Information Systems.",
  courses: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Organization & Architecture",
    "Database Management",
    "Internetworking",
    "Quantum Algorithms",
    "Data Mining & Predictive Analysis",
    "Machine Learning",
    "Probability & Statistics"
  ]
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Agentic AI",
    issuer: "DeepLearning.AI",
    date: "Jun 2026",
    url: "https://learn.deeplearning.ai/certificates/9b603f23-26df-4845-b3dd-a064f6a7097d"
  },
  {
    title: "Document AI: From OCR to Agentic Doc Extraction",
    issuer: "DeepLearning.AI",
    date: "Mar 2026",
    url: "https://learn.deeplearning.ai/accomplishments/1d1f6187-5afb-4edc-8960-88a14a6c8384"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    date: "Coursera Completed"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    date: "Coursera Completed"
  },
  {
    title: "IBM DevOps & Software Engineering Professional Certificate",
    issuer: "IBM / Coursera",
    date: "Coursera Completed"
  },
  {
    title: "Front End Web Development Nanodegree",
    issuer: "Udacity",
    date: "Udacity Certified"
  }
];

export const VOLUNTEER_EXPERIENCES: VolunteerItem[] = [
  {
    role: "COVID-19 Surveillance Student Assistant",
    organization: "Marist College",
    period: "Mar 2021 – Jun 2021",
    category: "Humanitarian Relief",
    bullets: [
      "Instructed students, staff, and Marist affiliates on COVID-19 testing protocols.",
      "Registered barcodes and distributed test tubes at the campus testing site."
    ]
  },
  {
    role: "Educational Mentor & Volunteer Tutor",
    organization: "Acts4Rwanda",
    period: "May 2018 – May 2019",
    category: "Poverty Alleviation",
    bullets: [
      "Mentored 30+ former homeless children, helping restore stability through structured educational tutoring and mentorship.",
      "Tutored Math and Science to prepare children for re-entry into the formal school system."
    ]
  },
  {
    role: "Data Entry Assistant",
    organization: "Rubona Health Center",
    period: "Jan 2016 – Nov 2016",
    category: "Health & Records",
    bullets: [
      "Assisted healthcare staff with patient record indexing and healthcare data entry."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "poruta",
    title: "Poruta",
    category: "AI / Machine Learning",
    categoryLabel: "AI / Machine Learning",
    description: "AI-powered customs clearance platform automating document processing, tariff classification, and tax calculation for international trade.",
    longDescription: "Poruta processes complex multi-language manifest invoices using NVIDIA Triton (gRPC) for document OCR, HS code classification, and LLM reranking via Qdrant vector search. Orchestrates Celery task queues over Redis to chain OCR, extraction, and classification stages across GPU workers, backed by PostgreSQL, MongoDB, and MinIO object storage.",
    tags: ["Next.js", "FastAPI", "NVIDIA Triton", "Qdrant", "PyTorch", "Celery/Redis"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUiDyh3TJEC7R-bzTzO5lDjvxqUU2M-ODH1Tez947aHH8gfVBWQzpfa3yFfRZ1mBa8Qdh1umnrRCBO15z0VQUFlBpcv9iMDq6Ac21gUXCKUfmqHqAWEMu3cod_tMooPWJes3ZLmnbiwAlnFR8FSqtI1cLqB4oLiAcPR4D8-pJsURjTDljELULWX4D1zRcEJQG7rjG42kRWXSA1It9QybS_9yWU6AG4pV1c3wezadQrd2VZoftWZKG0",
    imageAlt: "Abstract visualization of an artificial intelligence network analyzing logistics and customs data.",
    featured: true,
    gridSpan: "large",
    icon: "smart_toy",
    githubUrl: "https://github.com/tdescartes/aidp-resilient-inference",
    demoUrl: "#demo-poruta",
    architectureDetails: {
      components: ["NVIDIA Triton (gRPC) Pipeline", "Qdrant Vector Search Reranker", "Celery GPU Task Queues", "PostgreSQL + MongoDB + MinIO"],
      performance: "Sub-second multi-stage extraction & 94.8% HS Code Accuracy",
      keyHighlight: "Orchestrated asynchronous Celery task pipelines across GPU workers for multi-stage OCR and tariff classification."
    },
    demoType: "customs-classifier"
  },
  {
    id: "sheltrise",
    title: "SheltRise",
    category: "Full-Stack SaaS / AI",
    categoryLabel: "Full-Stack SaaS / AI",
    description: "Property management SaaS platform built to automate tenant management, leasing, rent collection, and maintenance tracking.",
    longDescription: "SheltRise streamlines property operations with an AI Lease Assistant powered by AWS Bedrock RAG, allowing tenants to query leases in natural language. Features an S3 presigned URL image pipeline, Stripe rent processing, LandingAI ADE document generation, and PostHog product analytics.",
    tags: ["React", "FastAPI", "PostgreSQL", "AWS Bedrock", "Stripe API", "PostHog"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2rhvTIQi_FtO2ExinetmEa9zXx5dHjgsinqweyZIYhL4h0oP6HiIvYQGYU9aSQE2XdfCq716CSvS_j7PNTzRRIp1hqyCyLOFAfccLYdNV-LxxD0wWtZUHBIBf-kLhi8S7iIA34yZtVZZXTi13-juCY84Ajfn1IcN87qi37zGCOsERxZ6hkaTcD9TvEO_R4RAv0Kasz8AbncaVtfHp7b_RcCM0CsS0V8e53VX884RHSQu456sV7wFR",
    imageAlt: "Modern architectural wireframe blending into a finished digital UI for property management.",
    featured: true,
    gridSpan: "standard",
    icon: "domain",
    githubUrl: "https://github.com/tdescartes/sheltrise",
    demoUrl: "#demo-sheltrise",
    architectureDetails: {
      components: ["React (TypeScript) SPA", "FastAPI Backend Engine", "AWS Bedrock RAG Pipeline", "Stripe API & ReportLab PDF"],
      performance: "Sub-100ms API response time with AWS Bedrock RAG",
      keyHighlight: "Built natural language lease query agent using AWS Bedrock and RAG, plus automated LandingAI ADE parsing."
    },
    demoType: "tenant-tickets"
  },
  {
    id: "thermaguard",
    title: "ThermaGuard ESP32",
    category: "Hardware / Embedded",
    categoryLabel: "Hardware / Embedded",
    description: "Real-time ESP32 embedded monitoring system tracking CPU, memory, and thermal metrics with zero host overhead.",
    longDescription: "ThermaGuard monitors thermal variance across sensor clusters in real-time. Built with dual-core FreeRTOS (Core 0 serial ingestion, Core 1 OLED rendering), custom 7-byte binary packet protocol with CRC-8 checksums over UART (83% bandwidth reduction vs JSON), and hardware watchdog auto-recovery.",
    tags: ["ESP32", "FreeRTOS", "C++", "Python", "UART / I2C", "CRC-8"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7DcVoKTgjePSAI7cHHnzIqDgyfR0yOtbH11O6zrvHRh1Bzr6-lUuLa6Yq4eFgD4guCTm8gT6y3EkSYNTNnRfyA1PpCyjjC822dBEX4C08IVL88ucc8pdCHt6bCSwjVeO2-_bv3JKkuhdgHUx7cEM2d6xO_LU5ZMEr-gS0ZWaxPbhlG84Qh-NmrjxatCZIzcEOiBdy6I7SNYkIiluqOZDi46oaJIjfFpkzXXfElwCmMPWNvsDKwfFs",
    imageAlt: "Hardware dashboard showing temperature graphs and IoT sensor data in a dark mode UI with bright green accents.",
    featured: true,
    gridSpan: "standard",
    icon: "memory",
    githubUrl: "https://github.com/tdescartes/thermaguard-esp32",
    demoUrl: "#demo-thermaguard",
    architectureDetails: {
      components: ["ESP32 Dual-Core FreeRTOS Node", "Custom 7-byte UART Packet Protocol", "OLED Driver & Hardware Watchdog", "Delta-T Thermal Compute Engine"],
      performance: "Sub-10ms metric latency & 83% bandwidth reduction vs JSON",
      keyHighlight: "Engineered custom 7-byte binary protocol with CRC-8 checksums over UART for ultra-lightweight telemetry."
    },
    demoType: "iot-telemetry"
  },
  {
    id: "xcompiler",
    title: "xCompiler — 6502",
    category: "Systems Programming",
    categoryLabel: "Systems Programming",
    description: "A compiler for a BNF grammar targeting the 6502 microprocessor architecture, built from scratch in TypeScript.",
    longDescription: "xCompiler implements a complete multi-pass compiler lifecycle: Finite Automata Lexer -> Recursive Descent Parser -> Token Validation -> Symbol Table Builder -> 6502 Bytecode Emitter.",
    tags: ["TypeScript", "6502 Assembly", "Finite Automata", "Recursive Descent"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8Fw0vZQMp0No9ar0IzYpF-Y8UoGUWCbEYEEdHVNn1accC4voE1d-jNDkIWYrZOJb21xLIMzGzB_EZQJ95DDyaFcMDK0jQSS7OFDW9Jkn561W4BC2SYIF-H90jUSpaW5FqX8iTASXPwvS4_Sr9Ee-f-DZu4Q6bTQ7S1KVCboN7QWzvSNsVZHoN1lcver1-na0W_2TNqUsp_PJ4Y5ZkQkOV2uT9E7DYLflVDdifltfZCEV-2BRAVugP",
    imageAlt: "Abstract representation of code compiling, glowing lines of code transforming into binary data structures on a dark terminal background.",
    featured: true,
    gridSpan: "large",
    icon: "code_blocks",
    githubUrl: "https://github.com/tdescartes/xCompiler",
    demoUrl: "#demo-xcompiler",
    architectureDetails: {
      components: ["Finite Automata Lexer", "Recursive Descent Parser", "6502 Code Emitter", "CST / AST Visualizer"],
      performance: "50,000+ tokens/sec parse rate with comprehensive error diagnostics",
      keyHighlight: "Multi-pass compilation generating valid 6502 opcodes from BNF grammar."
    },
    demoType: "compiler-ast"
  },
  {
    id: "pathos",
    title: "PathOS",
    category: "Web Application",
    categoryLabel: "Web Application",
    description: "A fully browser-based operating system simulation built in TypeScript with real-time process visualization.",
    longDescription: "PathOS brings desktop-class multitasking to the browser with Round-Robin CPU scheduling, custom HTML5 Session Storage file system, virtual memory swapping, and window stacking management.",
    tags: ["TypeScript", "DOM API", "Round-Robin CPU", "Session Storage FS"],
    image: "https://lh3.googleusercontent.com/aida/AP1WRLt6EmKwnPgzQ7YRiFDtrVU7pIBbxxTL3m9aCG7eF9Bby1OnPLUzeYn_GrK2fO2HxfjmGh8e3Vkqg24iDqNpoK3H5dbFXP1UOfO9oIfch85W9iY_ULhOK6Mw3ePHNodVTxfC5nKisSxmSYCKPVTvHfQ-h2Q-Q_zaOYM7yw8a9xazTYq5htfMaswoE7FPwoMuKXAaeFfYwwiju0Zpk0UyNSUEl5zD3LAFxBc8F084SspBWhMolH_fVsNLyg",
    imageAlt: "A stylized operating system desktop interface floating in a dark digital void.",
    featured: true,
    gridSpan: "standard",
    icon: "desktop_windows",
    githubUrl: "https://github.com/tdescartes/PathOS",
    demoUrl: "#demo-pathos",
    architectureDetails: {
      components: ["Round-Robin CPU Scheduler", "SessionStorage Virtual FS", "Virtual Memory Swapper", "Window Stacking Manager"],
      performance: "60fps window rendering & instant process state transitions",
      keyHighlight: "Simulated operating system architecture running entirely client-side."
    },
    demoType: "window-manager"
  },
  {
    id: "egrep-parser",
    title: "EGREP Parser",
    category: "Systems Programming",
    categoryLabel: "Systems Programming",
    description: "High-performance extended regular expression parser and search engine implemented in Python featuring NFA/DFA state machine evaluation.",
    longDescription: "EGREP-Parser constructs non-deterministic and deterministic finite automata from complex regex patterns to perform linear-time text scanning and matching.",
    tags: ["Python", "Automata", "Algorithms"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8Fw0vZQMp0No9ar0IzYpF-Y8UoGUWCbEYEEdHVNn1accC4voE1d-jNDkIWYrZOJb21xLIMzGzB_EZQJ95DDyaFcMDK0jQSS7OFDW9Jkn561W4BC2SYIF-H90jUSpaW5FqX8iTASXPwvS4_Sr9Ee-f-DZu4Q6bTQ7S1KVCboN7QWzvSNsVZHoN1lcver1-na0W_2TNqUsp_PJ4Y5ZkQkOV2uT9E7DYLflVDdifltfZCEV-2BRAVugP",
    imageAlt: "Abstract visualization of finite state machine nodes and state transitions.",
    featured: false,
    gridSpan: "standard",
    icon: "code_blocks",
    githubUrl: "https://github.com/tdescartes/EGREP-Parser",
    demoUrl: "#demo-egrep",
    architectureDetails: {
      components: ["Thompson's NFA Construction", "Powerset DFA Conversion", "Linear Scanner Engine"],
      performance: "O(n) linear matching execution time",
      keyHighlight: "Constructs state machines dynamically from extended regex tokens."
    },
    demoType: "compiler-ast"
  }
];
