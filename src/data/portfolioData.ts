export interface SkillItem {
  name: string;
  category: 'Languages' | 'AI / Data' | 'Development' | 'Tools';
  percentage: number;
  icon: string;
  level: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  role?: string;
  image: string;
  tags: string[];
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  status: 'Completed' | 'In Active Dev' | 'Prototype';
  emoji: string;
}

export interface LabExperiment {
  id: string;
  title: string;
  tag: 'AI' | 'WEB' | 'ANDROID' | 'GAME' | 'PYTHON';
  description: string;
  status: string;
  demoType: 'jarvis-assistant' | 'sos-shake' | 'budget-calc' | 'radar-game';
  highlights: string[];
}

export interface AboutCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  heroIntro: string;
  college: string;
  collegeShort: string;
  branch: string;
  year: string;
  location: string;
  email: string;
  phone: string;
  instagram: string;
  instagramUrl: string;
  twitter: string;
  github: string;
  linkedin: string;
  website: string;
  avatarUrl: string;
  aboutBadge: string;
  headline: string;
  description: string;
  aboutCards: AboutCard[];
  skills: SkillItem[];
  projects: ProjectItem[];
  labExperiments: LabExperiment[];
  services: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
  }[];
}

export const initialPortfolioData: PortfolioData = {
  name: "Sanak Tekawade",
  title: "AI & Data Science Engineering Student · Developer · Builder",
  tagline: "AI & Data Science Engineering Student · Developer · Builder",
  heroIntro: "I build AI-powered applications, websites, and interactive digital experiences.",
  college: "D.Y. Patil College of Engineering and Innovation, Talegaon, Pune",
  collegeShort: "DYPCOEI, Pune",
  branch: "Artificial Intelligence & Data Science (AIDS)",
  year: "2nd Year B.Tech",
  location: "Talegaon Dabhade, Pune, Maharashtra, India",
  email: "sanaktekwade135@gmail.com",
  phone: "9096117716",
  instagram: "sanaktekawade",
  instagramUrl: "https://www.instagram.com/sanaktekawade",
  twitter: "sanaktekawade",
  github: "https://github.com/sanaktekawade",
  linkedin: "https://www.linkedin.com/in/sanak-tekawade-36491b397?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  website: "sanaktekawade.dev",
  avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
  aboutBadge: "Profile // Academic Overview",
  headline: "Engineering Intelligent Systems & High-Performance Interactive Software",
  description: "2nd Year AI & Data Science student at D.Y. Patil College of Engineering and Innovation, Talegaon, Pune. Passionate about machine learning, autonomous desktop AI assistants (JARVIS), women safety emergency systems (Safe Shield), full-stack web applications, and interactive 3D games.",
  
  aboutCards: [
    {
      id: "academics",
      title: "B.Tech AI & Data Science",
      subtitle: "2nd Year Undergraduate",
      description: "Pursuing Bachelor of Technology in AI & Data Science at D.Y. Patil College of Engineering and Innovation (DYPCOEI), Talegaon, Pune. Building strong mathematical & computational foundations.",
      icon: "graduation"
    },
    {
      id: "interests",
      title: "Core Engineering Interests",
      subtitle: "AI · Web · Android · Games",
      description: "Passionate across multidisciplinary tech: Machine Learning algorithms, desktop AI automation (JARVIS), women safety mobile architectures (Safe Shield), full-stack web development, and 3D game mechanics in Unreal Engine.",
      icon: "cpu"
    },
    {
      id: "learning",
      title: "What I'm Learning & Building",
      subtitle: "Deep Learning & Production Apps",
      description: "Actively engineering Python automation agents that launch applications and dispatch messages, training neural networks, exploring LLM prompt flows, and prototyping safety-first Android applications.",
      icon: "code"
    },
    {
      id: "career",
      title: "Career Goal & Vision",
      subtitle: "AI Solutions Architect",
      description: "Dedicated to solving high-stakes human challenges by delivering resilient, intelligent software, production-grade AI pipelines, and accessible digital platforms.",
      icon: "target"
    }
  ],

  skills: [
    // Languages
    { name: "Python", category: "Languages", percentage: 95, icon: "python", level: "Advanced", description: "OS Automation, PyAutoGUI, App Launching, PyWhatKit, Data structures, NumPy, Pandas, Scikit-Learn." },
    { name: "C++", category: "Languages", percentage: 88, icon: "cpp", level: "Proficient", description: "Object-oriented programming, STL, memory management, algorithms." },
    { name: "Java / Kotlin", category: "Languages", percentage: 86, icon: "java", level: "Proficient", description: "Android app architecture, OOP principles, asynchronous programming." },
    { name: "JavaScript / TS", category: "Languages", percentage: 92, icon: "javascript", level: "Advanced", description: "ES6+, TypeScript type safety, async/await, DOM APIs." },

    // AI / Data
    { name: "Python Automation & JARVIS", category: "AI / Data", percentage: 95, icon: "api", level: "Mastery", description: "Desktop process management, opening applications, voice command execution, automated message dispatching." },
    { name: "Machine Learning", category: "AI / Data", percentage: 90, icon: "ml", level: "Advanced", description: "Supervised/unsupervised algorithms, classification, regression, model tuning." },
    { name: "Data Science", category: "AI / Data", percentage: 88, icon: "datascience", level: "Proficient", description: "Exploratory data analysis, statistical modeling, feature engineering." },
    { name: "Generative AI & LLMs", category: "AI / Data", percentage: 92, icon: "genai", level: "Advanced", description: "LLM integration, Prompt engineering, embeddings, multimodal models." },

    // Development
    { name: "HTML5 & CSS3", category: "Development", percentage: 96, icon: "html", level: "Mastery", description: "Semantic markup, modern layout models, responsive grid systems." },
    { name: "React & Next.js", category: "Development", percentage: 92, icon: "react", level: "Advanced", description: "Modern functional components, hooks, state management, Vite bundler." },
    { name: "Android Dev (Safe Shield)", category: "Development", percentage: 89, icon: "android", level: "Proficient", description: "Native Android Studio, Activities, Services, Sensor APIs, SOS Background Services, XML & Compose." },
    { name: "Firebase & Cloud", category: "Development", percentage: 90, icon: "firebase", level: "Advanced", description: "Firestore real-time DB, Auth, Cloud Storage, Security Rules." },

    // Tools
    { name: "Git & GitHub", category: "Tools", percentage: 92, icon: "git", level: "Advanced", description: "Version control, branching workflows, PRs, collaborative repos." },
    { name: "VS Code & IDEs", category: "Tools", percentage: 95, icon: "vscode", level: "Mastery", description: "Custom configurations, debugging, extensions, terminal integration." },
    { name: "Figma UI/UX", category: "Tools", percentage: 89, icon: "figma", level: "Proficient", description: "Wireframing, UI prototyping, design systems, vector layouts." },
    { name: "Android Studio", category: "Tools", percentage: 88, icon: "androidstudio", level: "Proficient", description: "SDK management, emulator debugging, Gradle builds, profiler." },
    { name: "Unity Engine", category: "Tools", percentage: 82, icon: "unity", level: "Intermediate", description: "C# scripting, physics engine, UI canvas, particle effects." },
    { name: "Unreal Engine", category: "Tools", percentage: 84, icon: "unreal", level: "Intermediate", description: "Blueprints visual scripting, Lumen lighting, 3D world building." },
  ],

  projects: [
    {
      id: "ai-secure-patch",
      title: "AI-Secure-patch-generator",
      emoji: "🔒",
      category: "AI & Cybersecurity",
      tagline: "Autonomous Vulnerability Scanner & Automated AI Security Patch Generator",
      description: "An intelligent cybersecurity and DevSecOps system that performs static and semantic AST vulnerability analysis (identifying SQLi, XSS, Buffer Overflows, RCE, IDOR, and memory leaks) and autonomously generates validated, non-breaking security patches using generative AI models.",
      problem: "Software vulnerabilities frequently remain unpatched in production codebases for months because manual security audits and manual patch authoring are slow and error-prone.",
      solution: "Engineered an AI-driven automated security pipeline that parses abstract syntax trees (AST), flags vulnerabilities with CVSS scores, synthesizes verified diff patches, and validates regression test suites in isolated sandbox containers.",
      role: "Cybersecurity & AI Engineer",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
      tags: ["Cybersecurity", "DevSecOps", "Python", "LLMs", "AST Analysis", "Vulnerability Patching"],
      features: [
        "Automated AST parsing and CVE vulnerability detection across Python, C++, Java, and JavaScript",
        "Generative AI-powered security diff patch synthesizer producing zero-breakage code fixes",
        "Automated sandbox verification executing regression test suites to guarantee code integrity",
        "CVSS 3.1 severity rating calculator with actionable remediation advisory reports",
        "CI/CD and CLI integration to automatically intercept vulnerable PRs before merging"
      ],
      technologies: ["Python", "Tree-sitter AST", "Generative AI / LLMs", "Bandit", "Docker Sandbox", "FastAPI"],
      githubUrl: "https://github.com/sanaktekawade/AI-Secure-patch-generator",
      liveDemoUrl: "#lab",
      status: "In Active Dev"
    },
    {
      id: "jarvis-ai",
      title: "JARVIS AI Desktop Assistant",
      emoji: "🤖",
      category: "AI & Desktop Automation",
      tagline: "Autonomous Voice & Command Assistant to Open Applications and Send Messages",
      description: "A Python-based intelligent desktop assistant inspired by JARVIS that performs automated system tasks: launching installed software applications, automating browser navigation, sending WhatsApp and email messages, searching the web, and speaking responses via natural voice synthesis.",
      problem: "Repetitive manual workflows like opening multiple tools, searching documentation, and dispatching regular messages take significant daily time.",
      solution: "Engineered an intelligent voice and CLI command dispatcher with natural language intent recognition that interacts with the OS layer to launch apps (Chrome, VS Code, Spotify, Notepad, Calculator, Terminal), send scheduled messages, and execute automation scripts hands-free.",
      role: "Lead Python AI & Automation Engineer",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      tags: ["Python", "SpeechRecognition", "PyTTSX3", "PyAutoGUI", "PyWhatKit", "OS Subprocess"],
      features: [
        "Open any system application (VS Code, Chrome, Spotify, Calculator, Command Prompt, Discord) via voice or text",
        "Automated instant & scheduled message dispatch (WhatsApp, Email dispatches, SMS notifications)",
        "Real-time voice recognition (STT) and dynamic neural speech synthesis feedback (TTS)",
        "Live web searching, Wikipedia summary retrieval, and YouTube video playback triggers",
        "System control: volume tuning, battery and CPU telemetry readouts, tab management, and shutdown timers"
      ],
      technologies: ["Python 3", "SpeechRecognition", "pyttsx3", "pywhatkit", "pyautogui", "subprocess", "BeautifulSoup4"],
      githubUrl: "https://github.com/sanaktekawade/jarvis-ai-assistant",
      liveDemoUrl: "#lab",
      status: "In Active Dev"
    },
    {
      id: "safe-shield",
      title: "SAFE SHIELD",
      emoji: "🛡️",
      category: "Women Safety & Android System",
      tagline: "Women Safety Emergency Alert, Hardware SOS Trigger & Real-Time Tracking System",
      description: "A mission-critical women safety Android emergency response platform engineered to protect women in hazardous situations with rapid, discreet activation triggers, live GPS sharing, and emergency dispatch.",
      problem: "In dangerous or fast-escalating distress situations, women cannot unlock phones, type messages, or place regular phone calls.",
      solution: "Engineered a women safety emergency system that triggers instant SOS broadcasts via discreet hardware shake or volume gestures with live GPS coordinates, continuous audio capture, automated SMS dispatch to emergency contacts, and loud siren alerts.",
      role: "Lead Android Architect & Safety Systems Engineer",
      image: "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=1000&q=80",
      tags: ["Android", "Women Safety", "Kotlin", "Firebase", "Google Maps", "Hardware Sensors"],
      features: [
        "Dedicated Women Safety Architecture: Discreet Shake / Power Button SOS Trigger without unlocking phone",
        "Automated continuous live GPS location broadcast via SMS and Cloud push to guardians",
        "Nearest emergency contact auto-dialing & police station mapping with live route guidance",
        "Local high-decibel siren and high-frequency audio recording for immediate deterrence & evidence archival",
        "Offline SMS dispatch fallback when cellular data connection is unavailable"
      ],
      technologies: ["Kotlin", "Android Studio", "Google Maps SDK", "Firebase Realtime DB", "SMS Gateway API", "SensorManager"],
      githubUrl: "https://github.com/sanaktekawade/safe-shield-emergency",
      liveDemoUrl: "#lab",
      status: "Completed"
    },
    {
      id: "student-money",
      title: "Student Money Management System",
      emoji: "💰",
      category: "Full-Stack Web App",
      tagline: "Smart Expense Tracking & Budget Optimization Platform for College Students",
      description: "A tailored financial planning platform designed specifically around student lifestyles, hostel budgets, canteen splits, and monthly stipends.",
      problem: "College students frequently overspend in early weeks, lose track of micro-expenses, and lack straightforward tools to forecast end-of-month allowances.",
      solution: "Created an interactive dashboard featuring daily burn rate warnings, automated split-bill calculators, category budget caps, and visual financial analytics.",
      role: "Full-Stack Developer & UI Designer",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Firebase"],
      features: [
        "Student-centric dashboard with visual daily allowance burn rate",
        "Smart expense categorization (Mess, Stationery, Travel, Subscriptions)",
        "Peer-to-peer bill splitting with instant QR code payment triggers",
        "Predictive end-of-month balance estimator using basic regression math",
        "One-click monthly PDF ledger statement generation for parents/personal review"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Firebase Auth & Firestore"],
      githubUrl: "https://github.com/sanaktekawade/student-money-manager",
      liveDemoUrl: "#lab",
      status: "Completed"
    },
    {
      id: "night-after-9",
      title: "Night After 9",
      emoji: "👻",
      category: "3D Game Development",
      tagline: "Atmospheric Psychological Horror Game Project",
      description: "A first-person survival horror game set in a locked-down institute after 9:00 PM, featuring dynamic sound design and adaptive AI entity behaviors.",
      problem: "Many indie horror games rely solely on cheap jump scares rather than psychological dread, reactive atmospheric soundscapes, and unpredictable enemy AI.",
      solution: "Designed a spatial tension engine where lights react to player heartbeat, battery management dictates survival, and AI entities hunt based on player acoustic footprint.",
      role: "Game Systems Programmer & Sound Designer",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80",
      tags: ["Unreal Engine", "C++", "3D Audio", "AI Behavior Tree", "Blender"],
      features: [
        "Dynamic volumetric lighting with raytraced flashlight battery degradation",
        "Acoustic AI perception system tracking player footsteps and door physics",
        "Interactive puzzles requiring facility blueprint navigation and electrical repairs",
        "Atmospheric spatial audio soundscape engineered for 3D surround headsets",
        "Multiple narrative branches depending on time taken to escape the wing"
      ],
      technologies: ["Unreal Engine 5", "C++", "Behavior Trees", "Blender 3D", "FMOD Audio"],
      githubUrl: "https://github.com/sanaktekawade/night-after-9-horror",
      liveDemoUrl: "#lab",
      status: "In Active Dev"
    },
    {
      id: "hybrid-inventory",
      title: "Hybrid Inventory Manager",
      emoji: "📦",
      category: "Enterprise Software",
      tagline: "Smart Stock Control, Barcode Scanner & Multi-Tier Warehouse System",
      description: "A resilient stock and asset tracking system engineered for university laboratories, manufacturing units, and retail shops.",
      problem: "Physical labs and small businesses lose valuable equipment due to un-synced manual spreadsheets and lack of automated low-stock warnings.",
      solution: "Constructed an automated cloud-first inventory tracker with camera barcode scanning, role-based clearance permissions, and automated purchase requests.",
      role: "Backend Architect & Frontend Engineer",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "Firebase", "Barcode API", "Role Auth"],
      features: [
        "Live camera-based barcode / QR code scanning for instant SKU identification",
        "Multi-tier Role Based Access Control (Admin, Lab Manager, Student/Worker)",
        "Automated email notifications when critical chemical/hardware supplies drop below threshold",
        "Detailed audit ledger timestamping every item check-out and return",
        "Full CSV / Excel export and import with validation checksums"
      ],
      technologies: ["React", "Tailwind CSS", "Firebase Firestore", "ZXing Barcode API", "Express.js"],
      githubUrl: "https://github.com/sanaktekawade/hybrid-inventory-manager",
      liveDemoUrl: "#lab",
      status: "Completed"
    }
  ],

  labExperiments: [
    {
      id: "jarvis-assistant",
      title: "JARVIS AI // App Launcher & Message Dispatch Engine",
      tag: "AI",
      description: "Interactive simulation of the JARVIS AI program: execute voice/CLI commands to launch desktop applications, dispatch messages, and control OS routines.",
      status: "Interactive Assistant Sandbox",
      demoType: "jarvis-assistant",
      highlights: ["App Launching Pipeline", "Message Dispatch Routing", "Voice/Text Command Parsing"]
    },
    {
      id: "sos-sim",
      title: "Safe Shield // Women Safety Emergency Alert Simulator",
      tag: "ANDROID",
      description: "Dedicated Women Safety emergency system simulation: test hardware shake sensitivity triggers, GPS location broadcast packets, and emergency contact dispatches.",
      status: "Women Safety Simulation",
      demoType: "sos-shake",
      highlights: ["Women Safety SOS Protocol", "Shake Accelerometer Spike", "Instant GPS Telemetry Dump"]
    },
    {
      id: "budget-sim",
      title: "Student Daily Allowance & Burn Rate Forecaster",
      tag: "WEB",
      description: "Test dynamic monthly stipend inputs to forecast end-of-month survival curve and canteen budgets.",
      status: "Live Calculator",
      demoType: "budget-calc",
      highlights: ["Visual Burn Rate", "Meal Cap Estimator", "Savings Curve"]
    },
    {
      id: "radar-sim",
      title: "Night After 9 // Acoustic Radar Canvas",
      tag: "GAME",
      description: "Interactive 2D acoustic radar visualizing entity detection, player flashlight cone, and pulse echo.",
      status: "Playable Canvas Demo",
      demoType: "radar-game",
      highlights: ["Flashlight Cone Raycast", "Sound Pulse Waves", "Entity AI Patrol"]
    }
  ],

  services: [
    {
      id: "ai-engineering",
      title: "AI & Desktop Automation Systems",
      description: "Building intelligent Python automation assistants (JARVIS), predictive models, API integrations, and generative AI features tailored for modern productivity.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "JARVIS Automation", "Machine Learning", "Generative AI"],
    },
    {
      id: "web-dev",
      title: "Full-Stack Web Development",
      description: "Engineering blazing-fast, responsive web applications using React, TypeScript, Tailwind CSS, and cloud backends.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    },
    {
      id: "app-game",
      title: "Women Safety Apps & Interactive Systems",
      description: "Crafting hardware-connected Android safety systems (Safe Shield) and immersive 3D gameplay prototypes in Unreal Engine.",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      tags: ["Android Studio", "Women Safety", "Kotlin", "Unreal Engine"],
    },
  ],
};
