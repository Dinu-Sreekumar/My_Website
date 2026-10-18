import type { Project, SkillCategory, Experience, Education, Certification } from '../types/index';

export const personalInfo = {
  name: "Dinu Sreekumar",
  roleTitle: "Systems Programmer & Generative AI Developer",
  subTitle: "MCA Candidate @ CUSAT · Full-Stack & Edge ML Engineer",
  bio: "Aspiring Software Engineer and Data Analyst with an extensive background in Systems Programming, Distributed & Federated AI, and Full-Stack Engineering. Experienced in building high-volume, low-latency applications with Python, Next.js, FastAPI, and Google Gemini.",
  avatar: "https://avatars.githubusercontent.com/u/173590361?s=400&u=2facae97cc3b03c02d76a63b6bc71e35dcf96623&v=4",
  location: "Kochi, Kerala, India",
  phone: "+91 7907428815",
  email: "dinusrewkumar@gmail.com",
  github: "https://github.com/Dinu-Sreekumar",
  linkedin: "https://linkedin.com/in/dinu-sreekumar",
  availabilityStatus: "Open for Software Engineering & AI / Data Roles",
  stats: [
    { label: "Built Projects", value: "12+" },
    { label: "Certifications", value: "15+" },
    { label: "BCA Aggregate", value: "8.4 CGPA" },
    { label: "CLI Target Speed", value: "<5 ms" },
  ]
};

export const educationsData: Education[] = [
  {
    id: "mca-cusat",
    degree: "Master of Computer Applications (MCA)",
    institution: "Cochin University of Science and Technology (CUSAT)",
    period: "August 2026 – Expected May 2028",
    location: "Kochi, Kerala",
    score: "Semester 1 (In Progress)",
    status: "Current",
    highlights: [
      "Advanced Systems & Operating System Internals",
      "Distributed Computing & Edge Intelligence",
      "High-Performance Database Architectures"
    ]
  },
  {
    id: "bca-christ",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Christ College (Autonomous)",
    period: "August 2023 – April 2026",
    location: "Irinjalakuda, Kerala",
    score: "8.4 CGPA (84% Aggregate)",
    status: "Completed",
    highlights: [
      "Ranked in top quartile with 8.4 CGPA",
      "Specialized coursework in OOP, Data Structures, Machine Learning, and Web Technologies",
      "Awarded Distinction in academic and technical events"
    ]
  },
  {
    id: "class-xii",
    degree: "Senior Secondary (CBSE Class XII - Science)",
    institution: "Saraswathi Vidya Niketan Public School",
    period: "March 2023",
    location: "Elamakkara, Kochi",
    score: "90.4%",
    status: "Completed",
    highlights: ["Excellence in Computer Science and Mathematics"]
  },
  {
    id: "class-x",
    degree: "Secondary School (CBSE Class X)",
    institution: "Saraswathi Vidya Niketan Public School",
    period: "2021",
    location: "Elamakkara, Kochi",
    score: "88.4%",
    status: "Completed"
  }
];

export const experiencesData: Experience[] = [
  {
    id: "zephyrus-techfest",
    role: "Web Developer & Event Coordinator",
    organization: "Zephyrus 7.0 Techfest",
    period: "Aug 2025 – Sep 2025",
    location: "Christ College, Irinjalakuda",
    type: "Work",
    githubUrl: "https://github.com/Dinu-Sreekumar/Zephyrus7.0-Coding",
    points: [
      "Architected 'Zephyrus', a secure live coding competition platform using Next.js (App Router) and TypeScript capable of handling live execution for 50+ concurrent participants.",
      "Integrated Google Genkit backend to execute Python/C code against test inputs with instant, automated feedback to participants.",
      "Engineered strict sandboxed validation logic, session locks, and anti-cheat mechanisms ensuring absolute system integrity during the live event.",
      "Managed the full software development lifecycle from initial architecture to live operational monitoring."
    ],
    skills: ["Next.js (App Router)", "TypeScript", "Google Genkit", "Python", "Anti-Cheat Systems", "TailwindCSS"]
  },
  {
    id: "zoople-internship",
    role: "Flutter App Development Intern",
    organization: "Zoople Technologies",
    period: "Apr 2025 – May 2025",
    location: "Kochi, Kerala",
    type: "Internship",
    points: [
      "Engineered adaptive layout containers and responsive screen partitions in Flutter for seamless rendering across desktop and mobile viewports.",
      "Built reusable, modular UI widgets—including interactive navigation bars, slide-out drawers, and styled web layouts—adhering to clean widget-tree hierarchy.",
      "Applied core Object-Oriented Programming (OOP) principles in Dart (encapsulation, inheritance, modular state structures) to write maintainable front-end code."
    ],
    skills: ["Flutter", "Dart", "OOP", "Mobile Development", "Responsive Layouts", "Widget Trees"]
  },
  {
    id: "event-coordination-robotics",
    role: "Event Coordinator & Inker Robotics Expo Volunteer",
    organization: "Christ College Techfest & Inker Robotics",
    period: "Sep 2025",
    location: "Irinjalakuda, Kerala",
    type: "Leadership",
    points: [
      "Led the technical execution of the college Techfest, managing participant registration, live scoring, and event logistics.",
      "Managed venue setup and provided technical support for a large-scale robotics exhibition at Christ College in collaboration with Inker Robotics."
    ],
    skills: ["Technical Leadership", "Logistics", "Live Event Operations", "Public Coordination"]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "genai-mycaptain",
    title: "Generative AI Competency",
    issuer: "MyCaptain",
    category: "Generative AI & Data Science",
    scoreOrDistinction: "Distinction: Letter of Recommendation from Co-Founder & Letter of Appreciation",
    highlight: true,
    skills: ["NLP", "AI Agents", "Automation Tools", "Generative AI Workflow"]
  },
  {
    id: "it-specialist-da",
    title: "IT Specialist – Data Analytics",
    issuer: "Pearson VUE / Certiport",
    category: "Generative AI & Data Science",
    scoreOrDistinction: "Proctored & Verified Industry Credential",
    highlight: true,
    skills: ["Data Analytics", "Statistical Analysis", "Data Manipulation", "EDA"]
  },
  {
    id: "azure-ai-900",
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    category: "Generative AI & Data Science",
    scoreOrDistinction: "Official Microsoft Certified Credential",
    highlight: true,
    skills: ["Azure Machine Learning", "Computer Vision", "NLP", "Conversational AI"]
  },
  {
    id: "nptel-ml",
    title: "NPTEL Elite Certification: Introduction to Machine Learning",
    issuer: "IIT Kharagpur",
    category: "Generative AI & Data Science",
    scoreOrDistinction: "Elite Certification (Score: 64%)",
    highlight: true,
    skills: ["Supervised Learning", "Optimization", "Model Evaluation", "Statistical ML"]
  },
  {
    id: "nptel-ds",
    title: "NPTEL Certification: Data Science for Engineers",
    issuer: "IIT Madras",
    category: "Generative AI & Data Science",
    scoreOrDistinction: "National Course Certification",
    highlight: false,
    skills: ["Linear Algebra", "Data Preprocessing", "Hypothesis Testing"]
  },
  {
    id: "openshift-do101",
    title: "Introduction to OpenShift Applications (DO101)",
    issuer: "Red Hat Training",
    category: "Cloud & DevOps",
    scoreOrDistinction: "Official Red Hat Credential",
    highlight: true,
    skills: ["Kubernetes", "Red Hat OpenShift", "Container Deployments", "Cloud-Native"]
  },
  {
    id: "ict-react",
    title: "Front End Application with React",
    issuer: "ICT Academy of Kerala",
    category: "Development",
    scoreOrDistinction: "Certified Front-End Specialist",
    highlight: true,
    skills: ["React.js", "State Architecture", "Modern JavaScript", "Component Patterns"]
  },
  {
    id: "python-mycaptain",
    title: "Python Programming Competency",
    issuer: "MyCaptain",
    category: "Development",
    scoreOrDistinction: "Awarded Letter of Appreciation for Outstanding Performance",
    highlight: false,
    skills: ["Python OOP", "Automation", "Backend Logic", "Scripting"]
  },
  {
    id: "pearson-mepro",
    title: "Pearson MePro Level 10 (English Proficiency)",
    issuer: "Pearson",
    category: "Proficiency",
    scoreOrDistinction: "Badge Verified - Maximum Level 10",
    highlight: true,
    skills: ["Executive Technical English", "Cross-Functional Communication"]
  },
  {
    id: "devops-networkz",
    title: "Workshop on DevOps with Cloud Computing",
    issuer: "Networkz Systems",
    category: "Cloud & DevOps",
    highlight: false,
    skills: ["CI/CD Pipelines", "Docker Basics", "Cloud Architecture"]
  },
  {
    id: "aws-infosys",
    title: "Deploying Cloud-Native AWS Components",
    issuer: "Infosys Springboard",
    category: "Cloud & DevOps",
    highlight: false,
    skills: ["AWS Core Services", "Serverless", "Cloud Infrastructure"]
  },
  {
    id: "cybersec-networkz",
    title: "Workshop on Cyber Security",
    issuer: "Networkz Systems",
    category: "Productivity & Security",
    highlight: false,
    skills: ["Network Security", "Threat Modeling", "Vulnerability Probing"]
  },
  {
    id: "mos-excel",
    title: "Microsoft Office Specialist: Excel Associate",
    issuer: "Microsoft",
    category: "Productivity & Security",
    scoreOrDistinction: "Office 2019 Certified",
    highlight: false,
    skills: ["Advanced Excel", "Formulas & Pivot Tables", "Data Analysis"]
  }
];

export const projectsData: Project[] = [
  {
    id: "devdesk-ecosystem",
    name: "DevDesk Local Ecosystem",
    tagline: "Linux Developer Productivity & Low-Latency Diagnostic Suite",
    description: "A zero-cloud, POSIX-compliant Linux CLI suite (vault, netwatch, workpulse) featuring direct-to-disk SQLite Write-Ahead Logging (WAL) for sub-5ms local execution alongside optional loopback FastAPI daemons. Incorporates raw non-blocking TCP socket scanners and unprivileged Linux procfs attribution probes, packaged as standalone x86_64 binaries.",
    highlights: [
      "<5 ms local execution using direct SQLite WAL storage without cloud dependencies",
      "Non-blocking raw TCP socket scanners and unprivileged procfs (psutil) attribution probes",
      "300 ms fail-silent HTTP peer client correlating Pomodoro sprints with ports and code snippets",
      "Packaged as standalone x86_64 Linux binaries via PyInstaller with automated Bash installers"
    ],
    skills: ["Python", "POSIX Linux", "SQLite WAL", "FastAPI", "Sockets & Networking", "procfs", "PyInstaller", "Bash"],
    category: "systems-ai",
    categoryLabel: "Systems & Linux",
    tier: "Tier 1: Flagship",
    badge: "Flagship Systems",
    featured: true,
    githubUrl: "https://github.com/Dinu-Sreekumar/devdesk-ecosystem",
    images: [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
    ],
    videoUrl: "/devdesk-demo.mp4",
    carouselConfig: {
      autoplayDelay: 4500
    }
  },
  {
    id: "argus-fl",
    name: "Argus-FL: Edge Packet-Inspection Federated IDS",
    tagline: "Live Edge Packet-Inspection Federated Learning Intrusion Detection System",
    description: "Architected a multi-node Federated Learning system using the Flower (flwr) framework and TensorFlow 2.x to collaboratively train intrusion detection models across distributed IoT edge nodes without exposing raw network traffic. Engineered a live packet inspection pipeline using NFStream and Scapy with deep learning inference, paired with a React 19 / Flask-SocketIO command center.",
    highlights: [
      "Decentralized privacy-preserving federated training across IoT edge nodes using Flower (flwr)",
      "Dual-engine live packet inspection via NFStream & Scapy detecting SYN/UDP floods & Slowloris",
      "Real-time React 19 command center with Flask-SocketIO streaming live Accuracy & F1-Scores",
      "Simulated cyber attack stress-testing using Kali Linux tools (hping3, nmap)"
    ],
    skills: ["Federated Learning", "Flower (flwr)", "TensorFlow 2.x", "NFStream", "Scapy", "React 19", "Flask-SocketIO", "Docker"],
    category: "security-fl",
    categoryLabel: "Federated AI & Security",
    tier: "Tier 1: Flagship",
    badge: "Edge AI & Security",
    featured: true,
    githubUrl: "https://github.com/Dinu-Sreekumar/Argus-FL",
    images: [
      "/argus-fl/Dashboard.png",
      "/argus-fl/HomePage.png",
      "/argus-fl/Sentry.png",
      "/argus-fl/Login.png"
    ],
    carouselConfig: {
      autoplayDelay: 4500
    }
  },
  {
    id: "zephyrus-platform",
    name: "Zephyrus 7.0: Live Coding Competition Platform",
    tagline: "High-Volume Coding Platform with Sandboxed AI Evaluation",
    description: "Architected a secure live coding competition platform using Next.js (App Router) and TypeScript capable of handling live execution for 50+ concurrent participants during the university techfest. Integrated a Google Genkit backend to execute Python/C code against test inputs with instant feedback, anti-cheat mechanisms, and strict validation logic.",
    highlights: [
      "Next.js App Router and TypeScript platform handling 50+ concurrent live coders",
      "Automated Google Genkit AI backend evaluating Python and C code submissions in real time",
      "Strict anti-cheat validation, sandboxed execution verification, and live score telemetry"
    ],
    skills: ["Next.js (App Router)", "TypeScript", "Google Genkit", "Python", "TailwindCSS", "PostgreSQL"],
    category: "fullstack-genai",
    categoryLabel: "Full-Stack & GenAI",
    tier: "Tier 1: Flagship",
    badge: "Production System",
    featured: true,
    githubUrl: "https://github.com/Dinu-Sreekumar/Zephyrus7.0-Coding",
    images: [
      "https://raw.githubusercontent.com/Dinu-Sreekumar/Zephyrus7.0-Coding/main/images/welcome_screen.png"
    ],
    carouselConfig: {
      autoplayDelay: 4000
    }
  },
  {
    id: "fl-poisoning-defense",
    name: "DetectionGuard: Adversarial FL Benchmark",
    tagline: "Adversarial Federated Learning Poisoning Defense & Resilience Benchmark",
    description: "Full-stack adversarial research benchmark evaluating robust aggregation algorithms (Trimmed Mean vs FedAvg) against malicious gradient poisoning using the CICIDS2017 cybersecurity dataset. Developed a real-time 'Cyberpunk' styled analytical dashboard using React 18 and Recharts, fully containerized via Docker.",
    highlights: [
      "Benchmarked Trimmed Mean vs FedAvg defenses under malicious gradient manipulation",
      "Trained against CICIDS2017 cybersecurity dataset for adversarial resilience",
      "Real-time Cyberpunk telemetry dashboard built with React 18, Recharts, and Docker"
    ],
    skills: ["Federated Learning", "Adversarial ML", "Trimmed Mean", "React 18", "Recharts", "Docker", "Python"],
    category: "security-fl",
    categoryLabel: "Federated AI & Security",
    tier: "Tier 1: Flagship",
    badge: "AI Security Research",
    featured: true,
    githubUrl: "https://github.com/Dinu-Sreekumar/FL-Poisoning-Defense-System",
    images: [
      "https://raw.githubusercontent.com/Dinu-Sreekumar/FL-Poisoning-Defense-System/main/assets/simulation_result.png"
    ],
    carouselConfig: {
      autoplayDelay: 4000
    }
  },
  {
    id: "smart-student-management",
    name: "Smart Student Management (RAG-Integrated)",
    tagline: "Conversational NL Database Querying Powered by Gemini 2.5 Flash",
    description: "An AI-powered academic management platform enabling users to query live student databases using conversational natural language prompts ('Who has the highest GPA?'). Features a dynamic SQLite RAG pipeline that analyzes records on the fly, automated JSON bulk migration, and CSV persistence.",
    highlights: [
      "Zero-SQL natural language queries converted into database insights with Gemini 2.5 Flash",
      "Dynamic Retrieval-Augmented Generation (RAG) directly analyzing live SQLite records",
      "Automated JSON migration pipelines and instant CSV reporting"
    ],
    skills: ["Google Gemini 2.5 Flash", "RAG Pipeline", "Streamlit", "SQLite", "Python", "Data Persistence"],
    category: "fullstack-genai",
    categoryLabel: "Generative AI & RAG",
    tier: "Tier 1: Flagship",
    badge: "Gemini RAG",
    featured: true,
    githubUrl: "https://github.com/Dinu-Sreekumar/streamlit-gemini-student-management-system",
    images: [
      "https://raw.githubusercontent.com/Dinu-Sreekumar/streamlit-gemini-student-management-system/main/screenshots/student_records_view.png",
      "https://raw.githubusercontent.com/Dinu-Sreekumar/streamlit-gemini-student-management-system/main/screenshots/ai_advisor_chat.png",
      "https://raw.githubusercontent.com/Dinu-Sreekumar/streamlit-gemini-student-management-system/main/screenshots/json_import_ui.png"
    ],
    carouselConfig: {
      autoplayDelay: 4000
    }
  },
  {
    id: "bulk-resume-analyzer",
    name: "AI-Powered Bulk Resume Analyzer",
    tagline: "Automated Multi-PDF Resume Parsing & Candidate Entity Extraction",
    description: "AI recruitment automation tool ingesting multiple candidate PDF resumes concurrently to extract structured entities (Skills, Education, Experience) via Gemini 2.5 Flash. Generates executive candidate evaluations, core strengths analysis, and direct CSV export for recruiters.",
    highlights: [
      "Concurrent multi-document PDF ingestion and structured JSON schema extraction",
      "Automated candidate ranking, strengths evaluation, and recruiter-ready CSV exports",
      "Streamlit UI with drag-and-drop document processing"
    ],
    skills: ["Google Gemini 2.5 Flash", "NLP", "PDF Ingestion", "Streamlit", "Python"],
    category: "fullstack-genai",
    categoryLabel: "Generative AI & NLP",
    tier: "Tier 1: Flagship",
    badge: "GenAI Automation",
    featured: false,
    githubUrl: "https://github.com/Dinu-Sreekumar/Bulk-Resume-Analyzer-using-AI",
    images: [
      "https://raw.githubusercontent.com/Dinu-Sreekumar/Bulk-Resume-Analyzer-using-AI/main/ui_screenshot.png"
    ],
    carouselConfig: {
      autoplayDelay: 4000
    }
  },
  {
    id: "customer-churn-prediction",
    name: "Customer Churn Prediction Model",
    tagline: "End-to-End Machine Learning Pipeline & Feature Importance Analysis",
    description: "Comprehensive data science workflow to predict telecom customer attrition, performing exploratory data analysis (EDA), median imputation, and categorical feature encoding. Trained Random Forest Classifiers and evaluated classification performance via ROC-AUC and feature importance.",
    highlights: [
      "Rigorous EDA, data cleaning, and categorical encoding on telecom dataset",
      "Random Forest classification validated with ROC-AUC curves and confusion matrices",
      "Identified primary churn drivers through feature importance attribution"
    ],
    skills: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "ROC-AUC"],
    category: "data-science",
    categoryLabel: "Data Science & ML",
    tier: "Tier 2: Data Science",
    badge: "Machine Learning",
    featured: false,
    githubUrl: "https://github.com/Dinu-Sreekumar/Customer-Churn-Prediction",
    images: [
      "https://github.com/Dinu-Sreekumar/Customer-Churn-Prediction/blob/main/screenshots/model_performance_metrics.png?raw=true",
      "https://github.com/Dinu-Sreekumar/Customer-Churn-Prediction/blob/main/screenshots/confusion_matrix_plot.png?raw=true",
      "https://github.com/Dinu-Sreekumar/Customer-Churn-Prediction/blob/main/screenshots/feature_importance_plot.png?raw=true"
    ],
    carouselConfig: {
      autoplayDelay: 4000
    }
  },
  {
    id: "ocr-pytesseract",
    name: "Optical Character Recognition (OCR) Web App",
    tagline: "Document Digitization Engine with Cross-Platform Path Resolution",
    description: "Interactive document processing web application using Streamlit and Tesseract OCR converting uploaded raster images into editable text and searchable PDFs. Implements automated OS-level binary path detection across Windows and Linux environments.",
    highlights: [
      "Digitizes image inputs into raw editable text and formatted PDF outputs",
      "Dynamic OS-level path resolution configuring Tesseract across Windows & Linux"
    ],
    skills: ["Python", "Streamlit", "Tesseract OCR", "PyPDF2", "Computer Vision"],
    category: "data-science",
    categoryLabel: "Computer Vision & OCR",
    tier: "Tier 2: Data Science",
    badge: "OCR & Vision",
    featured: false,
    githubUrl: "https://github.com/Dinu-Sreekumar/OCR-using-pytesseract",
    images: [
      "https://raw.githubusercontent.com/Dinu-Sreekumar/OCR-using-pytesseract/main/assets/OCR%20UI.png"
    ],
    carouselConfig: {
      autoplayDelay: 4000
    }
  },
  {
    id: "ai-web-scraper",
    name: "AI-Powered Web Scraper",
    tagline: "Semantic Scraping with Natural Language Extraction Prompts",
    description: "Intelligent web scraping pipeline leveraging Google Gemini to interpret natural language extraction instructions and pull structured JSON schemas from unstructured web pages. Features a BeautifulSoup4 preprocessing layer to strip DOM noise and reduce token consumption.",
    highlights: [
      "Natural language prompt-to-schema extraction from arbitrary web pages",
      "DOM preprocessing layer reducing token consumption and LLM latency"
    ],
    skills: ["Python", "Google Gemini API", "BeautifulSoup4", "Streamlit"],
    category: "fullstack-genai",
    categoryLabel: "Web Scraping & AI",
    tier: "Tier 1: Flagship",
    badge: "LLM Extraction",
    featured: false,
    githubUrl: "https://github.com/Dinu-Sreekumar/Web-Scrapper-using-GeminiAPI",
    images: [
      "https://raw.githubusercontent.com/Dinu-Sreekumar/Web-Scrapper-using-GeminiAPI/main/assets/ui_example.png",
      "https://raw.githubusercontent.com/Dinu-Sreekumar/Web-Scrapper-using-GeminiAPI/main/assets/response_example.png"
    ],
    carouselConfig: {
      autoplayDelay: 4000
    }
  },
  {
    id: "virtual-piano",
    name: "Virtual Piano with Hand Tracking",
    tagline: "Real-Time Computer Vision Musical Instrument with MediaPipe",
    description: "Interactive computer vision application using OpenCV and MediaPipe to track 21 hand landmarks and map spatial finger gestures to musical notes. Low-latency audio trigger system allows playing an instrument smoothly via standard webcam interaction.",
    highlights: [
      "21-landmark real-time hand tracking with MediaPipe",
      "Low-latency gesture-to-sound trigger system via webcam"
    ],
    skills: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    category: "systems-ai",
    categoryLabel: "Computer Vision",
    tier: "Tier 3: Foundations",
    badge: "Gesture Tech",
    featured: false,
    githubUrl: "https://github.com/Dinu-Sreekumar/Virtual-Piano",
    images: [
      "https://github.com/Dinu-Sreekumar/Virtual-Piano/blob/main/Screenshot/piano_code1.png?raw=true",
      "https://github.com/Dinu-Sreekumar/Virtual-Piano/blob/main/Screenshot/piano_code2.png?raw=true"
    ],
    videoUrl: "/piano-demo.mp4",
    carouselConfig: {
      autoplayDelay: 4000
    }
  },
  {
    id: "python-finance-tracker",
    name: "Lightweight CLI Expense Logger",
    tagline: "Foundational Personal Finance Analytics Utility",
    description: "Built a lightweight personal finance utility using Pandas for tabular data manipulation and Matplotlib for plotting income-versus-expense trends, utilizing flat CSV files for rapid local storage and spend category breakdowns.",
    highlights: [
      "Tabular transaction logging and category budgeting with Pandas",
      "Distribution charts and financial trend visualization using Matplotlib and Seaborn"
    ],
    skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "CSV"],
    category: "data-science",
    categoryLabel: "Data Analysis",
    tier: "Tier 3: Foundations",
    badge: "Finance Analytics",
    featured: false,
    githubUrl: "https://github.com/Dinu-Sreekumar/Python-Finance-Tracker",
    images: [
      "https://github.com/Dinu-Sreekumar/Python-Finance-Tracker/blob/main/screenshots/monthly_summary_bar_chart.png?raw=true",
      "https://github.com/Dinu-Sreekumar/Python-Finance-Tracker/blob/main/screenshots/expense_pie_chart.png?raw=true"
    ],
    carouselConfig: {
      autoplayDelay: 4000
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "AI, Machine Learning & LLMs",
    skills: [
      { name: "Google Gemini & Genkit", category: "AI & ML", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>` },
      { name: "Federated Learning (Flower)", category: "AI & ML", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 7l3 3m4 0l3-3m-3 7l3 3m-7-3l-3 3" stroke="currentColor" strokeWidth="2"/></svg>` },
      { name: "TensorFlow & Keras", category: "AI & ML", level: "Proficient", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l7 3.9v7.8l-7 3.9-7-3.9V8.1l7-3.9z"/></svg>` },
      { name: "Scikit-Learn", category: "AI & ML", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="7" cy="12" r="5"/><circle cx="17" cy="12" r="5" fillOpacity="0.6"/></svg>` },
      { name: "OpenCV & MediaPipe", category: "AI & ML", level: "Proficient", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="7" r="4"/><circle cx="7" cy="16" r="4"/><circle cx="17" cy="16" r="4"/></svg>` },
      { name: "RAG & LLM Agents", category: "AI & ML", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z"/><circle cx="19" cy="16" r="3"/></svg>` }
    ]
  },
  {
    title: "Full-Stack & Systems Programming",
    skills: [
      { name: "Python", category: "Languages", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14,7.5A2.86,2.86,0,0,1,22,10.36h0v3.78A2.86,2.86,0,0,1,19.14,17H12c0,.39.32,1,.71,1H17v1.68a2.86,2.86,0,0,1-2.86,2.86H9.86A2.86,2.86,0,0,1,7,19.64H7V15.89A2.85,2.85,0,0,1,9.86,13h5.25A2.85,2.85,0,0,0,18,10.18V7.5h1.18M14.86,19.29c-.4,0-.72.3-.72.89s.32.71.72.71a.71.71,0,0,0,.71-.71c0-.59-.32-.89-.71-.89m-10-1.79A2.86,2.86,0,0,1,2,14.64V10.86A2.86,2.86,0,0,1,4.86,8H12c0-.39-.32-1-.71-1H7V5.36A2.86,2.86,0,0,1,9.86,2.5h4.28A2.86,2.86,0,0,1,17,5.36V9.11A2.85,2.85,0,0,1,14.14,12H8.89A2.85,2.85,0,0,0,6,14.82V17.5H4.86M9.14,5.71c.4,0,.72-.3,.72-.89s-.32-.71-.72-.71-.71.12-.71.71S8.75,5.71,9.14,5.71Z"/></svg>` },
      { name: "TypeScript & JavaScript", category: "Languages", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm10.5 13.5v-7h2v5.2c.5.5 1.2.7 1.9.7 1.2 0 1.9-.6 1.9-1.6 0-1.2-.9-1.6-2.1-2.1-1.8-.7-3.1-1.4-3.1-3.3 0-1.8 1.4-3.1 3.4-3.1 1.4 0 2.5.5 3.3 1.3l-1.2 1.4c-.6-.6-1.3-.9-2.1-.9-1 0-1.6.5-1.6 1.3 0 .9.7 1.3 2 1.8 1.9.7 3.2 1.5 3.2 3.5 0 2-1.5 3.3-3.7 3.3-1.6 0-2.9-.6-3.8-1.5z"/></svg>` },
      { name: "C & Systems", category: "Languages", level: "Proficient", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-7.07 17.07l1.41-1.41A8 8 0 1 1 20 12h2A10 10 0 0 0 12 2z"/></svg>` },
      { name: "Next.js (App Router)", category: "Full-Stack", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.5 14.5L9 8v8.5H7.5V7.5h1.8l7.2 8.5v-8.5H18v9z"/></svg>` },
      { name: "React 18 / 19", category: "Full-Stack", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="1.5"/></svg>` },
      { name: "FastAPI & Flask", category: "Full-Stack", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 9v11l9 2 9-2V9l-9-7zm0 3.5l6 4.7v7.6l-6 1.3-6-1.3v-7.6l6-4.7z"/><path d="M11 9h2v6h-2z"/></svg>` },
      { name: "Flutter & Dart", category: "Mobile", level: "Proficient", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2L5 11l3 3 9-9h-3zm-5 12l-4 4 4 4h3l-4-4 4-4H9zm5 0l-3 3 3 3h3l-3-3 3-3h-3z"/></svg>` },
      { name: "Tailwind CSS", category: "Styling", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-3 0-5 2-6 5 2-1 4-1 5 0 1 1 2 2 4 2 3 0 5-2 6-5-2 1-4 1-5 0-1-1-2-2-4-2zm-6 7c-3 0-5 2-6 5 2-1 4-1 5 0 1 1 2 2 4 2 3 0 5-2 6-5-2 1-4 1-5 0-1-1-2-2-4-2z"/></svg>` }
    ]
  },
  {
    title: "Systems, Networking & DevOps",
    skills: [
      { name: "Linux (POSIX, procfs)", category: "Systems", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 2 6 5 6 9v3c0 3 2 5 6 5s6-2 6-5V9c0-4-2-7-6-7zm-3 8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM7 18c0 2 2 4 5 4s5-2 5-4H7z"/></svg>` },
      { name: "SQLite Write-Ahead Logging (WAL)", category: "Databases", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>` },
      { name: "Docker & Containers", category: "DevOps", level: "Proficient", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 13c-.4-.1-.8 0-1.1.2-.4-.8-1.2-1.2-2.1-1.2h-.4c-.4-1.2-1.5-2-2.8-2h-3.6V8h3V5h-3V2h-3v3H6v3h3v2H4c-.6 0-1 .4-1 1 0 1.1.9 2 2 2v2c0 2.2 1.8 4 4 4h7c3.3 0 6-2.7 6-6z"/></svg>` },
      { name: "NFStream & Scapy", category: "Networking", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v4H4zm0 6h16v4H4zm0 6h16v4H4z"/><circle cx="7" cy="6" r="1"/><circle cx="7" cy="12" r="1"/><circle cx="7" cy="18" r="1"/></svg>` },
      { name: "Raw Socket Programming", category: "Networking", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><path d="M9 12h6" stroke="currentColor" strokeWidth="2"/></svg>` },
      { name: "PyInstaller & Standalone Binaries", category: "DevOps", level: "Proficient", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l8 4.5v11L12 22l-8-4.5v-11L12 2zm0 2.3L6 7.7v8.6l6 3.4 6-3.4V7.7l-6-3.4z"/></svg>` },
      { name: "Git & GitHub Actions", category: "DevOps", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.8 9.8 0 0 1 5.2 0c1.9-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>` },
      { name: "Bash & POSIX Shell", category: "Systems", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2l4 4-4 4-1.4-1.4L9.2 12 6.6 9.4 8 8zm6 7h4v2h-4v-2z"/></svg>` }
    ]
  },
  {
    title: "Data Science, Analytics & Cloud",
    skills: [
      { name: "Pandas & NumPy", category: "Data Science", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="4" height="16"/><rect x="10" y="8" width="4" height="12"/><rect x="16" y="2" width="4" height="18"/></svg>` },
      { name: "Matplotlib & Seaborn", category: "Data Science", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 20h16v2H2V2h2v18zm3-4l4-5 4 3 5-7 1.4 1.4-6.4 9-4-3-3 3.6L7 16z"/></svg>` },
      { name: "Streamlit", category: "Data Apps", level: "Advanced", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 19h20L12 2zm0 4.5l6.5 11H5.5L12 6.5z"/></svg>` },
      { name: "Google Cloud Platform", category: "Cloud", level: "Proficient", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.4 10a7 7 0 0 0-13.4-1.8A5 5 0 0 0 6 18h13a4 4 0 0 0 .4-8z"/></svg>` },
      { name: "Microsoft Azure (AI-900)", category: "Cloud", level: "Proficient", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2l-7 12h5l-2 8 9-13h-5l3-7z"/></svg>` },
      { name: "Red Hat OpenShift", category: "Cloud", level: "Proficient", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 6v12M6 12h12"/></svg>` }
    ]
  }
];