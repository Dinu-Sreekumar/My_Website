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
    { label: "Tech Stack", value: "20+ Tools" },
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
    fileUrl: "/certificates/mycaptain-genai-competency.pdf",
    fileType: "pdf",
    skills: ["NLP", "AI Agents", "Automation Tools", "Generative AI Workflow"]
  },
  {
    id: "it-specialist-da",
    title: "IT Specialist – Data Analytics",
    issuer: "Pearson VUE / Certiport",
    category: "Generative AI & Data Science",
    scoreOrDistinction: "Proctored & Verified Industry Credential",
    highlight: true,
    fileUrl: "/certificates/data-analytics-certiport.pdf",
    fileType: "pdf",
    skills: ["Data Analytics", "Statistical Analysis", "Data Manipulation", "EDA"]
  },
  {
    id: "azure-ai-900",
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    category: "Generative AI & Data Science",
    scoreOrDistinction: "Official Microsoft Certified Credential",
    highlight: true,
    fileUrl: "/certificates/azure-ai-900.pdf",
    fileType: "pdf",
    skills: ["Azure Machine Learning", "Computer Vision", "NLP", "Conversational AI"]
  },
  {
    id: "nptel-ml",
    title: "NPTEL Elite Certification: Introduction to Machine Learning",
    issuer: "IIT Kharagpur",
    category: "Generative AI & Data Science",
    scoreOrDistinction: "Elite Certification (Score: 64%)",
    highlight: true,
    fileUrl: "/certificates/nptel-machine-learning-iitkgp.pdf",
    fileType: "pdf",
    skills: ["Supervised Learning", "Optimization", "Model Evaluation", "Statistical ML"]
  },
  {
    id: "nptel-ds",
    title: "NPTEL Certification: Data Science for Engineers",
    issuer: "IIT Madras",
    category: "Generative AI & Data Science",
    scoreOrDistinction: "National Course Certification",
    highlight: false,
    fileUrl: "/certificates/nptel-data-science-iitm.pdf",
    fileType: "pdf",
    skills: ["Linear Algebra", "Data Preprocessing", "Hypothesis Testing"]
  },
  {
    id: "openshift-do101",
    title: "Introduction to OpenShift Applications (DO101)",
    issuer: "Red Hat Training",
    category: "Cloud & DevOps",
    scoreOrDistinction: "Official Red Hat Credential",
    highlight: true,
    fileUrl: "/certificates/redhat-openshift-do101.pdf",
    fileType: "pdf",
    skills: ["Kubernetes", "Red Hat OpenShift", "Container Deployments", "Cloud-Native"]
  },
  {
    id: "ict-react",
    title: "Front End Application with React",
    issuer: "ICT Academy of Kerala",
    category: "Development",
    scoreOrDistinction: "Certified Front-End Specialist",
    highlight: true,
    fileUrl: "/certificates/react-ict-academy.pdf",
    fileType: "pdf",
    skills: ["React.js", "State Architecture", "Modern JavaScript", "Component Patterns"]
  },
  {
    id: "python-mycaptain",
    title: "Python Programming Competency",
    issuer: "MyCaptain",
    category: "Development",
    scoreOrDistinction: "Awarded Letter of Appreciation for Outstanding Performance",
    highlight: false,
    fileUrl: "/certificates/mycaptain-python-competency.pdf",
    fileType: "pdf",
    skills: ["Python OOP", "Automation", "Backend Logic", "Scripting"]
  },
  {
    id: "pearson-mepro",
    title: "Pearson MePro Level 10 (English Proficiency)",
    issuer: "Pearson",
    category: "Proficiency",
    scoreOrDistinction: "Badge Verified - Maximum Level 10",
    highlight: true,
    fileUrl: "/certificates/pearson-mepro-english.pdf",
    fileType: "pdf",
    skills: ["Executive Technical English", "Cross-Functional Communication"]
  },
  {
    id: "devops-networkz",
    title: "Workshop on DevOps with Cloud Computing",
    issuer: "Networkz Systems",
    category: "Cloud & DevOps",
    highlight: false,
    fileUrl: "/certificates/devops-networkz.jpg",
    fileType: "image",
    skills: ["CI/CD Pipelines", "Docker Basics", "Cloud Architecture"]
  },
  {
    id: "aws-infosys",
    title: "Deploying Cloud-Native AWS Components",
    issuer: "Infosys Springboard",
    category: "Cloud & DevOps",
    highlight: false,
    fileUrl: "/certificates/aws-cloud-native.pdf",
    fileType: "pdf",
    skills: ["AWS Core Services", "Serverless", "Cloud Infrastructure"]
  },
  {
    id: "cybersec-networkz",
    title: "Workshop on Cyber Security",
    issuer: "Networkz Systems",
    category: "Productivity & Security",
    highlight: false,
    fileUrl: "/certificates/cyber-security-networkz.jpg",
    fileType: "image",
    skills: ["Network Security", "Threat Modeling", "Vulnerability Probing"]
  },
  {
    id: "mos-excel",
    title: "Microsoft Office Specialist: Excel Associate",
    issuer: "Microsoft",
    category: "Productivity & Security",
    scoreOrDistinction: "Office 2019 Certified",
    highlight: false,
    fileUrl: "/certificates/microsoft-excel-associate.pdf",
    fileType: "pdf",
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
    "title": "AI, Machine Learning & LLMs",
    "skills": [
      {
        "name": "Google Gemini",
        "category": "AI & LLMs",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81\"/></svg>"
      },
      {
        "name": "Flower (Federated Learning)",
        "category": "Federated AI",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><circle cx=\"12\" cy=\"12\" r=\"2.8\"/><circle cx=\"12\" cy=\"3\" r=\"2.5\"/><circle cx=\"12\" cy=\"21\" r=\"2.5\"/><circle cx=\"3\" cy=\"12\" r=\"2.5\"/><circle cx=\"21\" cy=\"12\" r=\"2.5\"/><circle cx=\"5.6\" cy=\"5.6\" r=\"2.5\"/><circle cx=\"18.4\" cy=\"5.6\" r=\"2.5\"/><circle cx=\"5.6\" cy=\"18.4\" r=\"2.5\"/><circle cx=\"18.4\" cy=\"18.4\" r=\"2.5\"/></svg>"
      },
      {
        "name": "TensorFlow",
        "category": "Deep Learning",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z\"/></svg>"
      },
      {
        "name": "PyTorch",
        "category": "Deep Learning",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z\"/></svg>"
      },
      {
        "name": "Scikit-Learn",
        "category": "Machine Learning",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M15.601 5.53c-1.91.035-3.981.91-5.63 2.56-2.93 2.93-2.083 8.53-1.088 9.525.805.804 6.595 1.843 9.526-1.088a9.74 9.74 0 0 0 .584-.643c.043-.292.205-.66.489-1.106a1.848 1.848 0 0 1-.537.176c-.144.265-.37.55-.676.855-.354.335-.607.554-.76.656a.795.795 0 0 1-.437.152c-.35 0-.514-.308-.494-.924-.22.316-.425.549-.612.7a.914.914 0 0 1-.578.224c-.194 0-.36-.09-.496-.273a1.03 1.03 0 0 1-.193-.507 4.016 4.016 0 0 1-.726.583c-.224.132-.47.197-.74.197-.3 0-.543-.096-.727-.288a.978.978 0 0 1-.257-.524v.004c-.3.276-.564.48-.79.611a1.295 1.295 0 0 1-.649.197.693.693 0 0 1-.571-.275c-.145-.183-.218-.43-.218-.739 0-.464.101-1.02.302-1.67.201-.65.445-1.25.733-1.797l.842-.312a.21.21 0 0 1 .06-.013c.063 0 .116.047.157.14.04.095.061.221.061.38 0 .451-.104.888-.312 1.31-.207.422-.532.873-.974 1.352-.018.23-.027.388-.027.474 0 .193.036.345.106.458.071.113.165.169.282.169a.71.71 0 0 0 .382-.13c.132-.084.333-.26.602-.523.028-.418.187-.798.482-1.142.324-.38.685-.569 1.08-.569.206 0 .37.054.494.16a.524.524 0 0 1 .186.417c0 .458-.486.829-1.459 1.114.088.43.32.646.693.646a.807.807 0 0 0 .417-.117c.129-.076.321-.243.575-.497.032-.252.118-.495.259-.728.182-.3.416-.544.701-.73.285-.185.537-.278.756-.278.276 0 .47.127.58.381l.677-.374h.186l-.292.971c-.15.488-.226.823-.226 1.004 0 .19.067.285.202.285.086 0 .181-.045.285-.137.104-.092.25-.232.437-.42v.001c.143-.155.274-.32.392-.494-.19-.084-.285-.21-.285-.375 0-.17.058-.352.174-.545.116-.194.275-.29.479-.29.172 0 .258.088.258.265 0 .139-.05.338-.149.596.367-.04.687-.32.961-.842l.228-.01c1.059-2.438.828-5.075-.83-6.732-1.019-1.02-2.408-1.5-3.895-1.471zm4.725 8.203a8.938 8.938 0 0 1-1.333 2.151 1.09 1.09 0 0 0-.012.147c0 .168.047.309.14.423.092.113.206.17.34.17.296 0 .714-.264 1.254-.787-.001.04-.003.08-.003.121 0 .146.012.368.036.666l.733-.172c0-.2.003-.357.01-.474.01-.157.033-.33.066-.517.02-.11.07-.216.152-.315l.186-.216a5.276 5.276 0 0 1 .378-.397c.062-.055.116-.099.162-.13a.26.26 0 0 1 .123-.046c.055 0 .083.035.083.106 0 .07-.052.236-.156.497-.194.486-.292.848-.292 1.084 0 .175.046.314.136.418a.45.45 0 0 0 .358.155c.365 0 .803-.269 1.313-.808v-.381c-.361.426-.623.64-.784.64-.109 0-.163-.067-.163-.2 0-.1.065-.316.195-.65.19-.486.285-.836.285-1.048a.464.464 0 0 0-.112-.319.36.36 0 0 0-.282-.127c-.165 0-.354.077-.567.233-.213.156-.5.436-.863.84.053-.262.165-.622.335-1.08l-.809.156a6.54 6.54 0 0 0-.399 1.074c-.04.156-.07.316-.092.48a7.447 7.447 0 0 1-.49.45.38.38 0 0 1-.229.08.208.208 0 0 1-.174-.082.352.352 0 0 1-.064-.222c0-.1.019-.214.056-.343.038-.13.12-.373.249-.731l.308-.849zm-17.21-2.927c-.863-.016-1.67.263-2.261.854-1.352 1.352-1.07 3.827.631 5.527 1.7 1.701 4.95 1.21 5.527.632.467-.466 1.07-3.827-.631-5.527-.957-.957-2.158-1.465-3.267-1.486zm12.285.358h.166v.21H15.4zm.427 0h.166v.865l.46-.455h.195l-.364.362.428.684h-.198l-.357-.575-.164.166v.41h-.166zm1.016 0h.166v.21h-.166zm.481.122h.166v.288h.172v.135h-.172v.717c0 .037.006.062.02.075.012.013.037.02.074.02a.23.23 0 0 0 .078-.01v.141a.802.802 0 0 1-.136.014.23.23 0 0 1-.15-.043.15.15 0 0 1-.052-.123v-.79h-.141v-.136h.141zm-3.562.258c.081 0 .15.012.207.038.057.024.1.061.13.11s.045.106.045.173h-.176c-.006-.111-.075-.167-.208-.167a.285.285 0 0 0-.164.041.134.134 0 0 0-.06.117c0 .035.015.065.045.088.03.024.08.044.15.06l.16.039a.47.47 0 0 1 .224.105c.047.046.07.108.07.186a.3.3 0 0 1-.052.175.327.327 0 0 1-.152.116.585.585 0 0 1-.226.041c-.136 0-.24-.03-.309-.088-.069-.059-.105-.149-.109-.269h.176c.004.037.01.065.017.084a.166.166 0 0 0 .034.054c.044.043.112.065.204.065a.31.31 0 0 0 .177-.045.139.139 0 0 0 .067-.119.116.116 0 0 0-.038-.09.287.287 0 0 0-.124-.055l-.156-.038a1.248 1.248 0 0 1-.159-.05.359.359 0 0 1-.098-.061.22.22 0 0 1-.058-.083.32.32 0 0 1-.016-.108c0-.096.036-.174.109-.232a.45.45 0 0 1 .29-.087zm1.035 0a.46.46 0 0 1 .202.043.351.351 0 0 1 .187.212.577.577 0 0 1 .023.126h-.168a.256.256 0 0 0-.078-.168.242.242 0 0 0-.17-.06.248.248 0 0 0-.155.05.306.306 0 0 0-.1.144.662.662 0 0 0-.034.224.58.58 0 0 0 .035.214.299.299 0 0 0 .101.135.261.261 0 0 0 .157.048c.142 0 .227-.084.256-.252h.167a.519.519 0 0 1-.065.22.35.35 0 0 1-.146.138.464.464 0 0 1-.216.048.448.448 0 0 1-.246-.066.441.441 0 0 1-.161-.192.703.703 0 0 1-.057-.293c0-.085.01-.163.032-.233a.522.522 0 0 1 .095-.182.403.403 0 0 1 .15-.117.453.453 0 0 1 .191-.04zm.603.03h.166v1.046H15.4zm1.443 0h.166v1.046h-.166zm-5.05.618c-.08 0-.2.204-.356.611-.155.407-.308.977-.459 1.71.281-.312.509-.662.683-1.05.175-.387.262-.72.262-.999a.455.455 0 0 0-.036-.197c-.025-.05-.056-.075-.093-.075zm4.662 1.797c-.221 0-.431.188-.629.563-.197.376-.296.722-.296 1.038 0 .12.029.216.088.29a.273.273 0 0 0 .223.111c.221 0 .43-.188.625-.565.196-.377.294-.725.294-1.043a.457.457 0 0 0-.083-.29.269.269 0 0 0-.222-.104zm-2.848.007c-.146 0-.285.11-.417.333-.133.222-.2.51-.2.866.566-.159.849-.452.849-.881 0-.212-.077-.318-.232-.318Z\"/></svg>"
      },
      {
        "name": "OpenCV",
        "category": "Computer Vision",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11.8992.8525C8.735.8525 6.17 3.4175 6.17 6.5817c0 2.102 1.1321 3.9398 2.8198 4.9366l1.6412-2.7849c.0411-.0699.0176-.1593-.0495-.2048-.6233-.4227-1.0328-1.137-1.0328-1.947 0-1.298 1.0524-2.3504 2.3505-2.3504 1.2981 0 2.3505 1.0524 2.3505 2.3505 0 .8098-.4095 1.5242-1.0328 1.947-.0671.0454-.0907.1348-.0495.2047l1.6414 2.785c1.6878-.9969 2.8199-2.8346 2.8199-4.9367 0-3.1642-2.5653-5.7292-5.7295-5.7292zm-6.17 10.8366C2.565 11.6891 0 14.2541 0 17.4183c0 3.1642 2.565 5.7292 5.7292 5.7292 3.1798 0 5.8074-2.6995 5.7275-5.8762H8.2313c-.0847 0-.1513.0717-.1519.1564-.0082 1.266-1.0644 2.3411-2.3502 2.3411-1.2981 0-2.3505-1.0524-2.3505-2.3505 0-1.2982 1.0524-2.3505 2.3505-2.3505.34 0 .663.0724.9547.2022.0713.0318.1566.0077.1962-.0595l1.6464-2.7935c-.8273-.4636-1.7815-.7279-2.7973-.7279zm15.4424.7614l-1.6366 2.7878c-.041.07-.0172.1594.05.2048.624.4217 1.0348 1.1354 1.0363 1.9452.0022 1.298-1.0483 2.352-2.3465 2.3542-1.298.0023-2.3523-1.0482-2.3545-2.3462-.0015-.8098.4068-1.5248 1.0294-1.9486.067-.0457.0905-.1353.0492-.2051l-1.6464-2.7818c-1.6859.9998-2.8146 2.8394-2.811 4.9415.0056 3.1641 2.575 5.7248 5.7393 5.7192 3.1641-.0054 5.7246-2.575 5.7192-5.7392-.0037-2.1022-1.139-3.938-2.8284-4.9318z\"/></svg>"
      },
      {
        "name": "MediaPipe",
        "category": "Computer Vision",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2.182 0C1 0 .037.94.002 2.114L0 2.182v6.545a2.182 2.182 0 0 0 4.364 0V2.182A2.182 2.182 0 0 0 2.182 0Zm6.545 0c-1.182 0-2.145.94-2.18 2.114l-.002.068v13.09a2.182 2.182 0 0 0 4.364 0V2.183A2.182 2.182 0 0 0 8.727 0Zm6.546 0a2.182 2.182 0 0 0-2.182 2.182 2.182 2.182 0 0 0 2.182 2.182 2.182 2.182 0 0 0 2.182-2.182A2.182 2.182 0 0 0 15.273 0Zm6.545 0c-1.182 0-2.145.94-2.18 2.114l-.002.068v19.636a2.182 2.182 0 0 0 4.364 0V2.182A2.182 2.182 0 0 0 21.818 0Zm-6.545 6.545c-1.183 0-2.145.94-2.181 2.114l-.001.068v13.091a2.182 2.182 0 0 0 4.364 0V8.728a2.182 2.182 0 0 0-2.182-2.183zM2.182 13.091c-1.182 0-2.145.94-2.18 2.114L0 15.273v6.545a2.182 2.182 0 0 0 4.364 0v-6.545a2.182 2.182 0 0 0-2.182-2.182zm6.545 6.545a2.182 2.182 0 0 0-2.182 2.182A2.182 2.182 0 0 0 8.727 24a2.182 2.182 0 0 0 2.182-2.182 2.182 2.182 0 0 0-2.182-2.182Z\"/></svg>"
      },
      {
        "name": "RAG & Genkit",
        "category": "Generative AI",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/></svg>"
      }
    ]
  },
  {
    "title": "Full-Stack & Systems Programming",
    "skills": [
      {
        "name": "Python",
        "category": "Languages",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z\"/></svg>"
      },
      {
        "name": "TypeScript",
        "category": "Languages",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\"/></svg>"
      },
      {
        "name": "JavaScript",
        "category": "Languages",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\"/></svg>"
      },
      {
        "name": "C Language",
        "category": "Systems",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z\"/></svg>"
      },
      {
        "name": "Next.js (App Router)",
        "category": "Full-Stack",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z\"/></svg>"
      },
      {
        "name": "React (18/19)",
        "category": "Frontend",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\"/></svg>"
      },
      {
        "name": "FastAPI",
        "category": "Backend",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z\"/></svg>"
      },
      {
        "name": "Flask",
        "category": "Backend",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M7.172 20.36c-.914-.72-1.89-1.41-2.556-2.38-1.402-1.712-2.482-3.694-3.22-5.777-.446-1.355-.6-2.808-1.174-4.11-.602-.944.103-1.978 1.138-2.28.46-.087 1.272-.522.293-.211-.878.644-.963-.585-.063-.662.615-.082.84-.585.63-1.037-.66-.43 1.6-.903.463-1.544C1.5 1.08 4.34.835 3.64 2.285 3.473 3.4 5.624 2.08 5.125 3.368c.507.619 1.9.14 1.865 1.009.74.05.993.672 1.687.72.72.325 2.022.58 2.266 1.39-.713.566-2.364-1.165-2.443.398.215 2.31.16 4.689 1.004 6.888.4 1.332 1.37 2.38 2.244 3.418.837 1.016 1.971 1.73 3.127 2.333 1.014.478 2.107.795 3.213.994.448-.343 1.24-1.617 1.938-1.08.033.604-1.388 1.263-.067 1.196.776-.234 1.314.6 1.953-.152.588.697 2.446-.446 2.027.98-.566.364-1.392.144-1.959.646-.935-.467-1.68.418-2.715.306a19.86 19.86 0 01-3.484.29c-1.912-.15-3.865-.214-5.684-.88-1.024-.297-2.023-.881-2.924-1.464zm1.615.7c1 .432 1.978.888 3.074 1.026 1.74.24 3.537.614 5.283.274-.79-.357-1.608.14-2.395-.255-.944.203-1.957-.052-2.917-.177-1.092-.486-2.27-.82-3.291-1.452-1.277-.466.66.598 1.005.685.798.453-.877-.233-1.114-.421-.668-.375-.754-.297-.066.084.139.08.276.166.42.235zm-1.904-1.346c.97.359-.004-.682-.45-.622-.196-.341-.751-.557-.36-.74-.704.244-.737-.93-1.07-.763-.744-.235-.29-1.07-1.176-1.58-.081-.54-.882-1.008-1.138-1.822-.113-.416-.905-1.613-.418-.5.414 1.072 1.143 1.99 1.75 2.907.47.873 1.027 1.786 1.885 2.33.29.278.568.703.977.79zM4.09 16.647c.033-.146.177.317 0 0zm3.954 3.497c.215-.096-.31-.12 0 0zm.526.192c-.054-.265-.24.148 0 0zm.66.275c.312-.3-.484-.188 0 0zm1.127.63c.191-.282-.61-.107 0 0zM8.19 19.728c.487-.315-.63-.004 0 0zm.494.246c-.014-.166-.176.075 0 0zm2.47 1.542c.397.25 2.32.55 1.115.103-.2.042-2.23-.574-1.116-.103zm-3.921-3.054c-.04-.167-.616-.185 0 0zm1.15.67c.3-.21-.621-.16 0 0zm.966.593c.43-.162-.696-.163 0 0zm-2.584-1.773c.466.358 1.88.046.714-.213-.53-.283-1.727-.476-.912.17zm3.24 1.978c.193-.33-.815-.19 0 0zm-.984-.783c1.14.323-.958-.72-.281-.118l.15.068.13.05zm1.973 1.14c1.08.01-.975-.147 0 0zm-4.644-2.96c-.042-.2-.266.018 0 0zm6.47 3.985c.028-.363-.353.27 0 0zm-4.63-2.856c-.064-.191-.336-.008 0 0zm-1.738-1.254c.62-.037-.848-.273 0 0zm-2.06-1.332c-.077-.297-.674-.534 0 0zm5.407 3.435c-.114-.13-.054.028 0 0zm3.366 2.065c-.01-.197-.183.075 0 0zm-3.664-2.373c.06-.255-.528-.077 0 0zm-2.506-1.592c.46-.05-.74-.311 0 0zm4.241 2.637c.718-.285-.7-.14 0 0zM9.03 18.545c.827.106-.985-.563-.181-.06zm2.876 1.768c.773-.462.518 1.082 1.311.13.782-.57-.675.707.29.103.696-.467 1.726.22 2.376.445.468-.023.923.405 1.403.145.923-.25-1.806-.37-1.09-.81-.845.245-1.47-.294-1.885-.835-.948-.22-2.044-.703-2.517-1.542-.192-.315.28.044-.166-.47-.57-.508-.856-1.085-1.24-1.702-.457-.244-.51-.963-.557-.024.004-.593-.553-.992-.688-.826-.002-.571.595-.285.176-.707-.09-.592-.386-1.21-.475-1.877-.138-.322-.02-1.011-.473-.282-.165.77-.055-.947.202-.38.337-.58-.12-.51-.14-.43.22-.488.14-1.18-.057-.916.117-.517.185-1.902-.175-1.656.218-.54.414-2.473-.534-1.736-.384.005-1.048.14-1.363.296.986.543-.1.196-.5.11-.052.502-.45.285-.946.29.793.098-.386.81-.841.534-.59.282.51.987.012 1.205.06.328-.905-.12-.83.64-.573-.241-.078.9.209.514.975.264.686.866.71 1.437-.158.333-.784-.783-.14-.731-.507-.827-.561-.3-.984.085-.1.028 1.079.547.34.803.65.1.668.67.8 1.03.39.407.31-.45.779.04-.296-.436-1.567-1.228-.544-.974-.005-.44-.185-.793.129-.784.31-.562-.325 1.387.375.672.193-.085.24-.563.59.045.505.498.182.858-.531.403.127.433.954.587.799 1.265.165.595.395.376.596.342.158.578.247.153.255-.123.72.155.552.58.778.88.497.224-.712-1.522.142-.526.898.81.337 1.15-.47 1.02.51-.041.675.69 1.313.664.582.277.975 1.34-.027.897-.348-.313-1.58-.7-.573-.104.929.43 1.665.688 2.561 1.227.64.458.918.982 1.16 1.086-.538.257-1.623-.206-.817-.348-.503-.091-1.068-.345-.587.28.41.343 1.45.306 1.637.345-.159.348-.43.376.006.403-.486.26.156.3.201.448zm-.994-2.808c-.296-.31-.373-.89-.053-.385.164.066.525.947.053.385zm3.238 2.057c.185-.011.006.14 0 0zm-3.706-2.816c-.01-.468.107.36 0 0zm-.322-.433c-.372-.72.47.204 0 0zm-3.9-2.692c.219-.06.108.374 0 0zm3.104 1.682c.134-.504.158.424 0 0zm-2.192-1.525c-.155-.278.323.26 0 0zm1.882.604c-.352-.79.25-.432.078.13zM5.77 12.217c-.158-.26-.418-1.02-.334-1.252.076.378.804 1.627.357.518-.494-.93.59.302.702.534.05.23-.305-.063-.064.478-.44-.617-.26.34-.661-.278zm-1.003-.691c.04-.603.23.413 0 0zm.45.155c.216-.455.366.634 0 0zm-1.084-.84c-.374-.37-.644-.713.017-.23.255.01-.566-.778.06-.25.66.12.327 1.082-.077.48zm.57-.015c.217-.215.115.212 0 0zm.35.113c-.328-.617.4.258 0 0zm-.697-.667c-1.086-.966 1.365.506.177.18zm3.11 1.808c-.47-.282-.123-1.984.037-.82.457-.148-.025.6.315.594-.053.473-.206.643-.35.226zm1.15.68c.048-.513.099.35 0 0zm-.2-.198c.054-.22.007.258 0 0zM4.57 9.955c-.697-.963 2.027.973.447.244-.165-.043-.364-.06-.447-.244zm2.216 1.175c-.066-.81.147.134 0 0zm1.682 1.079c.13-.462.01.305 0 0zM4.676 9.587c.415-.088 1.718.729.52.234-.132-.148-.416-.08-.52-.234zm3.56 1.775c.044-.83.248-.495.002.118zM4.985 9.299c.169-.248-.45-1.12.089-.313.232.185.672.31.283.387.61.539-.15.146-.372-.074zm3.075 1.804c.117-.944.103.553 0 0zM4.632 8.427c.129-.055.068.172 0 0zm.802.478c.206-.434.38.483 0 0zm2.263 1.259c-.002-.167.043.242 0 0zm-.131-.29c-.314-.776.292.41 0 0zm-.193-.51c-.053-.32.18.404 0 0zm.314-.51c-.216-.38.272-1.673.326-.87-.227.625-.065.975.093.136.293-.66-.063 1.303-.42.735zm.322-1.923c.094-.115.02.139 0 0zM7.47 17.544c-.128-.111.016.07 0 0zm1.11.56c.615.16.612-.095.055-.17-.3-.28-1.246-.575-.4-.035.057.142.235.139.344.206zM6.389 16.65c.34.253 1.28.719.484.096.269-.312-.514-.478-.254-.686-.66-.404-.52-.368-.058-.356-.794-.354.114-.328.07-.51-.305-.06-1.52-.54-.804.04-.726-.37-.173.138-.392.084-.743-.202.66.565-.118.375.425.337 1.146.864.18.357-.128.183.69.46.892.6zm1.16.667c1.41.454-.691-.556 0 0zm5.94 3.598c.02-.28-.193.24 0 0zm.611.257c.325-.315.013.503.54-.077.005-.415-.017-.66-.606-.156-.162.09-.234.473.066.233zm-9.692-6.087c-.1-.393-.7-.39 0 0zm.652.428c-.242-.402-.864-.364 0 0zm3.71 2.237c.362.32 1.662.236.44.04-.182-.27-1.151-.204-.44-.04zm5.097 3.149c.558-.468-.54.208 0 0zm1.16.796c.003-.15-.24.066 0 0zm.001-.21c.617-.654-.598.039 0 0zM2.805 13.743c-.526-.75-.327-1.088-.835-1.7-.096-.47-.87-1.533-.4-.406.43.659.558 1.679 1.235 2.106zm12.03 7.534c1.135-.734-.466-.32 0 0zm.866.34c.57-.488-.36-.102 0 0zM4.215 14.255c.163-.242-.42-.031 0 0zm11.305 7.129c.551-.355-.126-.3-.1.032zm-7.47-4.71c-.02-.24-.291.02 0 0zm.46.267c-.145-.297-.224.047 0 0zm7.894 4.684c.705-.51-.428-.098-.148.096zm-.27-.13c.574-.482-.607.213 0 0zm1.38.918c.386-.258-.469-.083 0 0zM4.57 14.08c.517.116 2.066 1.274 1.152.08-.468-.138-.187-1.283-.665-1.08.32.535.264.763-.41.426-.845-.413-.474.204-.31.374-.224.052.299.196.233.2zm-2.356-1.86c.092-.383-.853-2.107-.446-.864.146.26.13.754.446.864zm4.324 2.666c-.266-.223-.013-.032 0 0zm.656.152c0-.405-.725-.164 0 0zm5.681 3.583c-.108-.278-.428-.006 0 0zm.273.199c-.04-.155-.157.03 0 0zM15.4 20.24c.216-.16-.27-.02 0 0zM3.39 12.52c.62-.24-.664-.17 0 0zm8.984 5.662c-.007-.401-.395.1 0 0zm-9.23-6.231c.399-.135-.367-.09 0 0zm1.156.56c-.007-.133-.122.05 0 0zm14.09 8.64c.512-.104 1.678.26 1.866-.136-.62-.015-2.15-.438-2.222.1l.136.023.22.013zM4.667 12.603c.009-.407-.317-.015 0 0zM1.63 10.495c-.138-.775-.525-.118 0 0zm.724.182c.009-.25-.663-.224 0 0zm.414.203c-.12-.097-.094.122 0 0zm2.605 1.67c.122-.112-.29-.083 0 0zm-2.88-2.128c-.07-.585-.84-.088 0 0zm-1.486-.964c-.02-.27-.144.102 0 0zm.22-.167c-.035-.32-.19.04 0 0zm1.22.729c.518-.203-.94-.42-.104-.04zm16.334 10.089c.33-.303-.42-.094 0 0zm1.974 1.023c.132-.392-.334.05 0 0zM2.573 9.38c.055-.38-.41.075 0 0zM.837 8.218c-.093-.535-.08-1.474.812-1.156-1.191.236.824 1.48.57.498.5.024.98-.296.716.19.987-.11 1.67-.964 2.624-.845.742-.098 1.554-.172 2.354-.471.658-.048 1.29-.756.93-1.175-.896-.076-1.835.036-2.827.233-1.098.228-2.096.662-3.205.849-1.08.145.217.4-.092.456-.564.196.672.328-.073.534-.46-.088-.94-.246-.743-.73-1.035.133-1.945.563-1.127 1.616h.06zm2.494-1.27c.243-.894 1.3.735.398.118-.108-.08-.285-.146-.398-.12zm.047-.434c.35-.26.186.146 0 0zm.445.008c.032-.411 1.018.218.163.148zm.608-.245c.222-.26.064.23 0 0zm.156-.104c.37-.444 2.095-.283.832-.043-.338-.255-.598.15-.832.043zm2.25-.347c-.055-1.214 1.119.432 0 0zm.64-.004c.233-.612.906-.245.108-.123.017.065-.024.316-.108.123zM2.322 9.067c.697-.427-.741-.37 0 0zm.515.144c.245-.26-.531-.106 0 0zm-1.52-1.08c.399-.305-.471-.116 0 0zm20.602 12.89c.012-.355-.304.16 0 0zm-2.093-1.43c.06-.408-.27.037 0 0zm2.67 1.568c.557 0 1.688-.173.475-.173-.19.03-1.109.024-.476.173zM3.29 8.959c.45-.03.706-.497-.087-.47-1.23-.127 1.084.42-.158.264-.167.11.236.237.245.207zm.398.202c-.048-.29-.14.154 0 0zm.47-1.257c.197-.243-.27-.065 0 0zm-1.5-2.508c.806-.274 1.907-.581 2.287.135-.387-.466-.156-.924.21-.243.516.689.775-.313.438-.545.383.476.819.7.257.03.61-.734-1.223.097-1.64.088-.2.09-2.071.477-1.551.535zm.472-.903c.46-.347 1.588.206.864-.345-.07-.062-1.586.418-.864.345zm1.674.069c.538.013-.231-.722.409-.39-.105-.343-.746-.407-1.06-.544-.176.314.36.938.65.934zm-1.38-1.52c.186-.252-.326.128 0 0zm.684.164c.866-.115-.22-.373-.174-.01zm-1.277-1c-.61-.796 1.146.134.527-.7-.522-.415-1.023.468-.527.7zm7.824 4.215c.28-.496-1.155-.668-.188-.175.09.03.07.21.188.175z\"/></svg>"
      },
      {
        "name": "Socket.IO",
        "category": "Real-Time",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11.9362.0137a12.1694 12.1694 0 00-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 013.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 00-3.6318-.018z\"/></svg>"
      },
      {
        "name": "Flutter",
        "category": "Mobile UI",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z\"/></svg>"
      },
      {
        "name": "Dart",
        "category": "Languages",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z\"/></svg>"
      },
      {
        "name": "Tailwind CSS",
        "category": "Styling",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z\"/></svg>"
      },
      {
        "name": "HTML5 & CSS3",
        "category": "Web",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z\"/></svg>"
      }
    ]
  },
  {
    "title": "Systems, Networking & DevOps",
    "skills": [
      {
        "name": "Linux (POSIX, procfs)",
        "category": "Systems",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z\"/></svg>"
      },
      {
        "name": "Kali Linux",
        "category": "Security Testing",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12.778 5.943s-1.97-.13-5.327.92c-3.42 1.07-5.36 2.587-5.36 2.587s5.098-2.847 10.852-3.008zm7.351 3.095l.257-.017s-1.468-1.78-4.278-2.648c1.58.642 2.954 1.493 4.021 2.665zm.42.74c.039-.068.166.217.263.337.004.024.01.039-.045.027-.005-.025-.013-.032-.013-.032s-.135-.08-.177-.137c-.041-.057-.049-.157-.028-.195zm3.448 8.479s.312-3.578-5.31-4.403a18.277 18.277 0 0 0-2.524-.187c-4.506.06-4.67-5.197-1.275-5.462 1.407-.116 3.087.643 4.73 1.408-.007.204.002.385.136.552.134.168.648.35.813.445.164.094.691.43 1.014.85.07-.131.654-.512.654-.512s-.14.003-.465-.119c-.326-.122-.713-.49-.722-.511-.01-.022-.015-.055.06-.07.059-.049-.072-.207-.13-.265-.058-.058-.445-.716-.454-.73-.009-.016-.012-.031-.04-.05-.085-.027-.46.04-.46.04s-.575-.283-.774-.893c.003.107-.099.224 0 .469-.3-.127-.558-.344-.762-.88-.12.305 0 .499 0 .499s-.707-.198-.82-.85c-.124.293 0 .469 0 .469s-1.153-.602-3.069-.61c-1.283-.118-1.55-2.374-1.43-2.754 0 0-1.85-.975-5.493-1.406-3.642-.43-6.628-.065-6.628-.065s6.45-.31 11.617 1.783c.176.785.704 2.094.989 2.723-.815.563-1.733 1.092-1.876 2.97-.143 1.878 1.472 3.53 3.474 3.58 1.9.102 3.214.116 4.806.942 1.52.84 2.766 3.4 2.89 5.703.132-1.709-.509-5.383-3.5-6.498 4.181.732 4.549 3.832 4.549 3.832zM12.68 5.663l-.15-.485s-2.484-.441-5.822-.204C3.37 5.211 0 6.38 0 6.38s6.896-1.735 12.68-.717Z\"/></svg>"
      },
      {
        "name": "Docker",
        "category": "DevOps",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z\"/></svg>"
      },
      {
        "name": "SQLite (WAL)",
        "category": "Databases",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z\"/></svg>"
      },
      {
        "name": "Git",
        "category": "DevOps",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187\"/></svg>"
      },
      {
        "name": "GitHub",
        "category": "DevOps",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/></svg>"
      },
      {
        "name": "GNU Bash & Shell",
        "category": "Systems",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M21.038,4.9l-7.577-4.498C13.009,0.134,12.505,0,12,0c-0.505,0-1.009,0.134-1.462,0.403L2.961,4.9 C2.057,5.437,1.5,6.429,1.5,7.503v8.995c0,1.073,0.557,2.066,1.462,2.603l7.577,4.497C10.991,23.866,11.495,24,12,24 c0.505,0,1.009-0.134,1.461-0.402l7.577-4.497c0.904-0.537,1.462-1.529,1.462-2.603V7.503C22.5,6.429,21.943,5.437,21.038,4.9z M15.17,18.946l0.013,0.646c0.001,0.078-0.05,0.167-0.111,0.198l-0.383,0.22c-0.061,0.031-0.111-0.007-0.112-0.085L14.57,19.29 c-0.328,0.136-0.66,0.169-0.872,0.084c-0.04-0.016-0.057-0.075-0.041-0.142l0.139-0.584c0.011-0.046,0.036-0.092,0.069-0.121 c0.012-0.011,0.024-0.02,0.036-0.026c0.022-0.011,0.043-0.014,0.062-0.006c0.229,0.077,0.521,0.041,0.802-0.101 c0.357-0.181,0.596-0.545,0.592-0.907c-0.003-0.328-0.181-0.465-0.613-0.468c-0.55,0.001-1.064-0.107-1.072-0.917 c-0.007-0.667,0.34-1.361,0.889-1.8l-0.007-0.652c-0.001-0.08,0.048-0.168,0.111-0.2l0.37-0.236 c0.061-0.031,0.111,0.007,0.112,0.087l0.006,0.653c0.273-0.109,0.511-0.138,0.726-0.088c0.047,0.012,0.067,0.076,0.048,0.151 l-0.144,0.578c-0.011,0.044-0.036,0.088-0.065,0.116c-0.012,0.012-0.025,0.021-0.038,0.028c-0.019,0.01-0.038,0.013-0.057,0.009 c-0.098-0.022-0.332-0.073-0.699,0.113c-0.385,0.195-0.52,0.53-0.517,0.778c0.003,0.297,0.155,0.387,0.681,0.396 c0.7,0.012,1.003,0.318,1.01,1.023C16.105,17.747,15.736,18.491,15.17,18.946z M19.143,17.859c0,0.06-0.008,0.116-0.058,0.145 l-1.916,1.164c-0.05,0.029-0.09,0.004-0.09-0.056v-0.494c0-0.06,0.037-0.093,0.087-0.122l1.887-1.129 c0.05-0.029,0.09-0.004,0.09,0.056V17.859z M20.459,6.797l-7.168,4.427c-0.894,0.523-1.553,1.109-1.553,2.187v8.833 c0,0.645,0.26,1.063,0.66,1.184c-0.131,0.023-0.264,0.039-0.398,0.039c-0.42,0-0.833-0.114-1.197-0.33L3.226,18.64 c-0.741-0.44-1.201-1.261-1.201-2.142V7.503c0-0.881,0.46-1.702,1.201-2.142l7.577-4.498c0.363-0.216,0.777-0.33,1.197-0.33 c0.419,0,0.833,0.114,1.197,0.33l7.577,4.498c0.624,0.371,1.046,1.013,1.164,1.732C21.686,6.557,21.12,6.411,20.459,6.797z\"/></svg>"
      },
      {
        "name": "Scapy & Raw Sockets",
        "category": "Networking",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/></svg>"
      }
    ]
  },
  {
    "title": "Data Science, Analytics & Cloud",
    "skills": [
      {
        "name": "Pandas",
        "category": "Data Analysis",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z\"/></svg>"
      },
      {
        "name": "NumPy",
        "category": "Numerical ML",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M10.315 4.876L6.3048 2.8517l-4.401 2.1965 4.1186 2.0683zm1.8381.9277l4.2045 2.1223-4.3622 2.1906-4.125-2.0718zm5.6153-2.9213l4.3193 2.1658-3.863 1.9402-4.2131-2.1252zm-1.859-.9329L12.021 0 8.1742 1.9193l4.0068 2.0208zm-3.0401 16.7443V24l4.7107-2.3507-.0053-5.3085zm4.7037-4.2057l-.0052-5.2528-4.6985 2.3356v5.2546zm5.6553-.9845v5.327l-4.0178 2.0052-.0029-5.3028zm0-1.8626V6.4214l-4.0253 2.001.0034 5.2633zM11.2062 11.571L8.0333 9.9756v6.895s-3.8804-8.2564-4.2399-8.998c-.0463-.0957-.2371-.2007-.2858-.2262C2.8118 7.2812.773 6.2485.773 6.2485V18.43l2.8204 1.5076v-6.3674s3.8392 7.3775 3.878 7.458c.0389.0807.4245.8582.8362 1.1314.5485.363 2.8992 1.7766 2.8992 1.7766z\"/></svg>"
      },
      {
        "name": "Matplotlib",
        "category": "Visualization",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z\"/></svg>"
      },
      {
        "name": "Streamlit",
        "category": "Data Apps",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M16.673 11.32l6.862-3.618c.233-.136.554.12.442.387L20.463 17.1zm-8.556-.229l3.473-5.187c.203-.328.578-.316.793-.028l7.886 11.75zm-3.375 7.25c-.28 0-.835-.284-.993-.716l-3.72-9.46c-.118-.331.139-.614.48-.464l19.474 10.306c-.149.147-.453.337-.72.334z\"/></svg>"
      },
      {
        "name": "Google Cloud Platform",
        "category": "Cloud",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z\"/></svg>"
      },
      {
        "name": "Microsoft Azure (AI-900)",
        "category": "Cloud",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684\"/></svg>"
      },
      {
        "name": "Amazon Web Services (AWS)",
        "category": "Cloud",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z\"/></svg>"
      },
      {
        "name": "Red Hat OpenShift",
        "category": "Cloud Native",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M21.665,11.812c-0.11-1.377-0.476-2.724-1.08-3.966L24,6.599c-0.268-0.556-0.585-1.092-0.943-1.595 l-1.601,0.583c-3.534-4.95-10.412-6.098-15.363-2.565c-3.144,2.244-4.883,5.972-4.582,9.823l1.604-0.584 c0.051,0.615,0.153,1.224,0.305,1.822L0,15.335c0.338,1.339,0.922,2.604,1.721,3.731l1.812-0.659 c3.526,4.95,10.398,6.106,15.349,2.58c1.555-1.107,2.796-2.6,3.599-4.332c0.802-1.715,1.144-3.61,0.991-5.497L21.665,11.812z M16.925,9.177c0.687,1.227,0.998,2.629,0.895,4.032l1.809-0.657c-0.063,0.856-0.282,1.694-0.646,2.471 c-1.67,3.584-5.928,5.138-9.514,3.472c-0.782-0.365-1.491-0.87-2.092-1.49l-1.813,0.66c-0.979-1.01-1.64-2.285-1.903-3.667 l3.426-1.242c-0.121-0.624-0.159-1.262-0.111-1.896H6.97l-1.604,0.583c0.294-3.932,3.72-6.881,7.652-6.587 c0.868,0.065,1.716,0.288,2.504,0.658V5.508c0.778,0.364,1.483,0.867,2.082,1.483l1.599-0.582c0.002,0.002,0.004,0.003,0.006,0.005 c0.441,0.454,0.82,0.965,1.128,1.518L16.925,9.177z\"/></svg>"
      },
      {
        "name": "VS Code",
        "category": "Tooling",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z\"/></svg>"
      },
      {
        "name": "Jupyter Notebook",
        "category": "Data Science",
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M7.157 22.201A1.784 1.799 0 0 1 5.374 24a1.784 1.799 0 0 1-1.784-1.799 1.784 1.799 0 0 1 1.784-1.799 1.784 1.799 0 0 1 1.783 1.799zM20.582 1.427a1.415 1.427 0 0 1-1.415 1.428 1.415 1.427 0 0 1-1.416-1.428A1.415 1.427 0 0 1 19.167 0a1.415 1.427 0 0 1 1.415 1.427zM4.992 3.336A1.047 1.056 0 0 1 3.946 4.39a1.047 1.056 0 0 1-1.047-1.055A1.047 1.056 0 0 1 3.946 2.28a1.047 1.056 0 0 1 1.046 1.056zm7.336 1.517c3.769 0 7.06 1.38 8.768 3.424a9.363 9.363 0 0 0-3.393-4.547 9.238 9.238 0 0 0-5.377-1.728A9.238 9.238 0 0 0 6.95 3.73a9.363 9.363 0 0 0-3.394 4.547c1.713-2.04 5.004-3.424 8.772-3.424zm.001 13.295c-3.768 0-7.06-1.381-8.768-3.425a9.363 9.363 0 0 0 3.394 4.547A9.238 9.238 0 0 0 12.33 21a9.238 9.238 0 0 0 5.377-1.729 9.363 9.363 0 0 0 3.393-4.547c-1.712 2.044-5.003 3.425-8.772 3.425Z\"/></svg>"
      }
    ]
  }
];
