// src/utils/coursesData.js

const coursesData = [
  {
    id: "1",
    title: "📘 Data Science Fundamentals",
    description: "Learn data analysis, visualization, and machine learning basics.",
    category: "Data Science",
    difficulty: "Beginner",
    duration: "6 weeks",
    rating: 4.8,
    studentsCount: 1200,
    instructor: "Dr. Ada Lovelace",
    thumbnail: "https://source.unsplash.com/600x400/?data,science",
    languages: ["Python", "SQL"],
    modules: [
      {
        id: "1",
        title: "Introduction to Data Science",
        type: "notes",
        notes: "Data Science is the field of using data to understand patterns, solve problems, and make better decisions. It combines programming, mathematics, and domain knowledge to process and interpret data. Data scientists follow a process that starts with collecting raw data, cleaning it, analyzing patterns, visualizing results, and finally drawing conclusions that can be applied in real life. It is widely used in industries like healthcare, finance, business, and artificial intelligence.",
        summary: "Data Science = using data to find insights and make decisions.",
        content: {
          notes: "Data Science is the field of using data to understand patterns, solve problems, and make better decisions. It combines programming, mathematics, and domain knowledge to process and interpret data. Data scientists follow a process that starts with collecting raw data, cleaning it, analyzing patterns, visualizing results, and finally drawing conclusions that can be applied in real life. It is widely used in industries like healthcare, finance, business, and artificial intelligence.",
          auto_summary: "Data Science = using data to find insights and make decisions."
        }
      },
      {
        id: "2",
        title: "Data Collection & Cleaning",
        type: "notes",
        notes: "Data collection is the first step in working with information, and it can come from databases, APIs, surveys, or files like CSV. However, raw data is often messy, so cleaning is needed to make it usable. Cleaning involves removing duplicates, handling missing values, fixing incorrect formats, and standardizing data. Clean data ensures that later analysis is accurate and meaningful, which is why this stage is very important in the data science workflow.",
        summary: "Collect data, then clean it to make it accurate and usable.",
        content: {
          notes: "Data collection is the first step in working with information, and it can come from databases, APIs, surveys, or files like CSV. However, raw data is often messy, so cleaning is needed to make it usable. Cleaning involves removing duplicates, handling missing values, fixing incorrect formats, and standardizing data. Clean data ensures that later analysis is accurate and meaningful, which is why this stage is very important in the data science workflow.",
          auto_summary: "Collect data, then clean it to make it accurate and usable."
        }
      },
      {
        id: "3",
        title: "Exploratory Data Analysis (EDA)",
        type: "notes",
        notes: "Exploratory Data Analysis is about understanding the hidden patterns and stories inside data before applying advanced methods. It involves calculating basic statistics like averages and ranges, and creating visualizations like histograms, scatter plots, or bar charts. The goal is to quickly spot trends, relationships, or anomalies in the dataset. This step helps guide which methods or models should be used in the next stages of data science.",
        summary: "EDA = explore data with stats and graphs to see patterns.",
        content: {
          notes: "Exploratory Data Analysis is about understanding the hidden patterns and stories inside data before applying advanced methods. It involves calculating basic statistics like averages and ranges, and creating visualizations like histograms, scatter plots, or bar charts. The goal is to quickly spot trends, relationships, or anomalies in the dataset. This step helps guide which methods or models should be used in the next stages of data science.",
          auto_summary: "EDA = explore data with stats and graphs to see patterns."
        }
      },
      {
        id: "4",
        title: "Data Visualization",
        type: "notes",
        notes: "Data visualization is the practice of turning numbers and statistics into clear, visual representations such as charts and graphs. Good visualization helps both technical and non-technical people understand complex data easily. Tools like Matplotlib, Seaborn, and Tableau allow data scientists to create bar charts, line graphs, heatmaps, and dashboards. This makes data-driven insights more powerful and easier to communicate to others.",
        summary: "Visualization = show data with charts to make it easy to understand.",
        content: {
          notes: "Data visualization is the practice of turning numbers and statistics into clear, visual representations such as charts and graphs. Good visualization helps both technical and non-technical people understand complex data easily. Tools like Matplotlib, Seaborn, and Tableau allow data scientists to create bar charts, line graphs, heatmaps, and dashboards. This makes data-driven insights more powerful and easier to communicate to others.",
          auto_summary: "Visualization = show data with charts to make it easy to understand."
        }
      },
      {
        id: "5",
        title: "Machine Learning Basics",
        type: "quiz",
        notes: "Machine Learning is a part of data science that focuses on teaching computers to learn from data without being explicitly programmed. It has three main types: supervised learning, where models predict outcomes from labeled data; unsupervised learning, which groups or clusters data; and reinforcement learning, where systems learn from feedback and trial-and-error. Common tools for machine learning include Scikit-learn, TensorFlow, and PyTorch.",
        summary: "ML = making computers learn from data automatically.",
        content: {
          notes: "Machine Learning is a part of data science that focuses on teaching computers to learn from data without being explicitly programmed. It has three main types: supervised learning, where models predict outcomes from labeled data; unsupervised learning, which groups or clusters data; and reinforcement learning, where systems learn from feedback and trial-and-error. Common tools for machine learning include Scikit-learn, TensorFlow, and PyTorch.",
          auto_summary: "ML = making computers learn from data automatically.",
          quiz: [
            { question: "What type of learning predicts labels in ML?", options: ["Unsupervised", "Reinforcement", "Supervised", "Random"], answer: "Supervised" },
            { question: "What is clustering used for in ML?", options: ["Predicting future values", "Grouping similar data", "Deleting duplicates", "Sorting files alphabetically"], answer: "Grouping similar data" },
            { question: "Which library is commonly used for ML in Python?", options: ["TensorFlow", "React", "Bootstrap", "Vue.js"], answer: "TensorFlow" }
          ]
        }
      }
    ],
    quiz: [
      { question: "What are the three key parts of Data Science?", options: ["Biology, Chemistry, Physics", "Programming, Statistics, Domain Knowledge", "HTML, CSS, JS", "Finance, Marketing, Medicine"], answer: "Programming, Statistics, Domain Knowledge" },
      { question: "Why is data cleaning important?", options: ["To make data colorful", "To make analysis accurate", "To delete files", "To create charts"], answer: "To make analysis accurate" },
      { question: "What does EDA stand for?", options: ["Easy Data Analysis", "Exploratory Data Analysis", "Essential Data Algorithms", "Expert Data Analytics"], answer: "Exploratory Data Analysis" },
      { question: "Which of these is a Machine Learning algorithm?", options: ["Linear Regression", "Word Processor", "Photoshop", "Browser"], answer: "Linear Regression" },
      { question: "Why do we use data visualization?", options: ["To confuse readers", "To communicate insights clearly", "To store data", "To delete information"], answer: "To communicate insights clearly" },
      { question: "Which chart is best for showing proportions?", options: ["Line chart", "Pie chart", "Histogram", "Scatter plot"], answer: "Pie chart" },
      { question: "Name a tool used for data visualization.", options: ["Photoshop", "Seaborn", "Excel Keyboard Shortcuts", "WhatsApp"], answer: "Seaborn" },
      { question: "Give one source where data can be collected.", options: ["Databases", "Music playlists", "Paintings", "Dreams"], answer: "Databases" }
    ]
  },
  {
    id: "2",
    title: "🌐 Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, and React to build full websites.",
    category: "Web Development",
    difficulty: "Intermediate",
    duration: "8 weeks",
    rating: 4.7,
    studentsCount: 2500,
    instructor: "Grace Hopper",
    thumbnail: "https://source.unsplash.com/600x400/?web,development",
    languages: ["HTML", "CSS", "JavaScript", "React"],
    modules: [
      {
        id: "1",
        title: "Introduction to Web Development",
        type: "notes",
        notes: "Web development is the process of building websites and web applications that people use daily. It consists of two main parts: the frontend, which is everything the user sees and interacts with, and the backend, which manages data, servers, and logic. Together, they form a complete system that makes websites both functional and attractive.",
        summary: "Web development = frontend + backend working together.",
        content: {
          notes: "Web development is the process of building websites and web applications that people use daily. It consists of two main parts: the frontend, which is everything the user sees and interacts with, and the backend, which manages data, servers, and logic. Together, they form a complete system that makes websites both functional and attractive.",
          auto_summary: "Web development = frontend + backend working together."
        }
      },
      {
        id: "2",
        title: "HTML Basics",
        type: "notes",
        notes: "HTML (HyperText Markup Language) is the foundation of web development. It provides the structure of web pages by using elements like headings, paragraphs, images, and links. Forms in HTML allow users to input data, such as filling out a login form or submitting feedback. Without HTML, web pages would not have any content or layout.",
        summary: "HTML = the structure or skeleton of web pages.",
        content: {
          notes: "HTML (HyperText Markup Language) is the foundation of web development. It provides the structure of web pages by using elements like headings, paragraphs, images, and links. Forms in HTML allow users to input data, such as filling out a login form or submitting feedback. Without HTML, web pages would not have any content or layout.",
          auto_summary: "HTML = the structure or skeleton of web pages."
        }
      },
      {
        id: "3",
        title: "CSS Styling",
        type: "notes",
        notes: "CSS (Cascading Style Sheets) is what makes web pages visually appealing. It allows developers to change colors, fonts, spacing, and layouts. With features like Flexbox and Grid, CSS makes it easier to design responsive pages that look good on both computers and mobile devices. It transforms plain HTML into attractive, user-friendly designs.",
        summary: "CSS = makes websites look beautiful and organized.",
        content: {
          notes: "CSS (Cascading Style Sheets) is what makes web pages visually appealing. It allows developers to change colors, fonts, spacing, and layouts. With features like Flexbox and Grid, CSS makes it easier to design responsive pages that look good on both computers and mobile devices. It transforms plain HTML into attractive, user-friendly designs.",
          auto_summary: "CSS = makes websites look beautiful and organized."
        }
      },
      {
        id: "4",
        title: "JavaScript Basics",
        type: "notes",
        notes: "JavaScript is the programming language that adds interactivity to websites. It makes it possible for buttons to react when clicked, for forms to validate input, and for dynamic changes to happen on a page without reloading. JavaScript also manipulates the Document Object Model (DOM), which is the structure of the webpage.",
        summary: "JavaScript = adds interactivity and logic to web pages.",
        content: {
          notes: "JavaScript is the programming language that adds interactivity to websites. It makes it possible for buttons to react when clicked, for forms to validate input, and for dynamic changes to happen on a page without reloading. JavaScript also manipulates the Document Object Model (DOM), which is the structure of the webpage.",
          auto_summary: "JavaScript = adds interactivity and logic to web pages."
        }
      },
      {
        id: "5",
        title: "Frontend Frameworks & Backend",
        type: "quiz",
        notes: "Frontend frameworks like React, Angular, and Vue simplify web development by providing reusable components and efficient ways to manage user interfaces. Backend development handles the behind-the-scenes work of web applications. It deals with servers, databases, and application logic. Languages like Node.js, Python, and PHP are commonly used for backend systems.",
        summary: "Frameworks = tools for faster development; Backend = server logic.",
        content: {
          notes: "Frontend frameworks like React, Angular, and Vue simplify web development by providing reusable components and efficient ways to manage user interfaces. Backend development handles the behind-the-scenes work of web applications. It deals with servers, databases, and application logic. Languages like Node.js, Python, and PHP are commonly used for backend systems.",
          auto_summary: "Frameworks = tools for faster development; Backend = server logic.",
          quiz: [
            { question: "Which of these is a frontend framework?", options: ["React", "Django", "MongoDB", "MySQL"], answer: "React" },
            { question: "What is the role of the backend in web development?", options: ["To handle design only", "To store and process data", "To change colors of web pages", "To create animations"], answer: "To store and process data" },
            { question: "Which of these is a backend language?", options: ["Node.js", "CSS", "HTML", "React"], answer: "Node.js" }
          ]
        }
      }
    ],
    quiz: [
      { question: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "High Text Making Language", "Hyperlinks and Text Marking Language"], answer: "HyperText Markup Language" },
      { question: "What is CSS mainly used for?", options: ["Adding logic", "Styling", "Data storage", "Machine Learning"], answer: "Styling" },
      { question: "What does JavaScript add to a website?", options: ["Styling", "Interactivity", "Structure", "Hosting"], answer: "Interactivity" },
      { question: "Which HTML tag is used to insert an image?", options: ["<img>", "<p>", "<h1>", "<form>"], answer: "<img>" },
      { question: "What is React commonly used for?", options: ["Backend logic", "Frontend user interfaces", "Database queries", "File storage"], answer: "Frontend user interfaces" }
    ]
  },
  {
    id: "3",
    title: "🔐 Cybersecurity Essentials",
    description: "Learn to secure systems, networks, and defend against cyber threats.",
    category: "Cyber Security",
    difficulty: "Advanced",
    duration: "10 weeks",
    rating: 4.9,
    studentsCount: 800,
    instructor: "Kevin Mitnick",
    thumbnail: "https://source.unsplash.com/600x400/?cyber,security",
    languages: ["Networking", "Linux"],
    modules: [
      {
        id: "1",
        title: "Introduction to Cybersecurity",
        type: "notes",
        notes: "Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access and attacks. Its core is often explained with the CIA Triad: Confidentiality (keeping data private), Integrity (keeping data accurate), and Availability (keeping systems accessible when needed). Without cybersecurity, individuals and organizations risk losing valuable information to hackers or malicious software.",
        summary: "Cybersecurity = protecting data and systems from attacks.",
        content: {
          notes: "Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access and attacks. Its core is often explained with the CIA Triad: Confidentiality (keeping data private), Integrity (keeping data accurate), and Availability (keeping systems accessible when needed). Without cybersecurity, individuals and organizations risk losing valuable information to hackers or malicious software.",
          auto_summary: "Cybersecurity = protecting data and systems from attacks."
        }
      },
      {
        id: "2",
        title: "Threats & Attacks",
        type: "notes",
        notes: "Cyber threats come in many forms, including malware (harmful software), phishing (tricking users to give up personal info), ransomware (locking files until payment), and denial-of-service attacks (overloading systems). Attackers may also use social engineering, which manipulates people instead of systems. Understanding these threats is the first step to building defenses.",
        summary: "Threats = malware, phishing, ransomware, DoS, and social engineering.",
        content: {
          notes: "Cyber threats come in many forms, including malware (harmful software), phishing (tricking users to give up personal info), ransomware (locking files until payment), and denial-of-service attacks (overloading systems). Attackers may also use social engineering, which manipulates people instead of systems. Understanding these threats is the first step to building defenses.",
          auto_summary: "Threats = malware, phishing, ransomware, DoS, and social engineering."
        }
      },
      {
        id: "3",
        title: "Network Security",
        type: "notes",
        notes: "Network security focuses on protecting the flow of data between devices. Firewalls act as barriers between trusted and untrusted networks, while VPNs encrypt data for secure communication. Intrusion Detection and Prevention Systems (IDS/IPS) monitor for suspicious activity. Strong network security ensures hackers cannot easily intercept or modify sensitive information.",
        summary: "Network security = tools like firewalls, VPNs, IDS to protect data.",
        content: {
          notes: "Network security focuses on protecting the flow of data between devices. Firewalls act as barriers between trusted and untrusted networks, while VPNs encrypt data for secure communication. Intrusion Detection and Prevention Systems (IDS/IPS) monitor for suspicious activity. Strong network security ensures hackers cannot easily intercept or modify sensitive information.",
          auto_summary: "Network security = tools like firewalls, VPNs, IDS to protect data."
        }
      },
      {
        id: "4",
        title: "Authentication & Best Practices",
        type: "quiz",
        notes: "Authentication ensures that only the right people can access a system. Common methods include strong passwords, biometrics, and multi-factor authentication (MFA). Best security practices include using strong passwords, enabling 2FA, keeping software updated, and being cautious with suspicious links and emails.",
        summary: "Authentication verifies users; best practices keep systems secure.",
        content: {
          notes: "Authentication ensures that only the right people can access a system. Common methods include strong passwords, biometrics, and multi-factor authentication (MFA). Best security practices include using strong passwords, enabling 2FA, keeping software updated, and being cautious with suspicious links and emails.",
          auto_summary: "Authentication verifies users; best practices keep systems secure.",
          quiz: [
            { question: "What does MFA stand for?", options: ["Multi-Factor Authentication", "Main Firewall Application", "Multiple File Access", "Multi-Function Antivirus"], answer: "Multi-Factor Authentication" },
            { question: "Which is a good security practice?", options: ["Using weak passwords", "Clicking unknown links", "Using 2FA", "Never updating software"], answer: "Using 2FA" },
            { question: "What is social engineering in cybersecurity?", options: ["Designing secure buildings", "Hacking networks directly", "Tricking people into giving access", "Encrypting company emails"], answer: "Tricking people into giving access" }
          ]
        }
      }
    ],
    quiz: [
      { question: "What is cybersecurity?", options: ["Protecting digital systems", "Creating games", "Designing websites", "Editing videos"], answer: "Protecting digital systems" },
      { question: "Which of these is a cyber threat?", options: ["Phishing", "HTML", "CSS", "Word"], answer: "Phishing" },
      { question: "What does a firewall do?", options: ["Protects networks", "Writes code", "Styles pages", "Encrypts text"], answer: "Protects networks" },
      { question: "What does encryption do?", options: ["Makes data unreadable", "Deletes data", "Saves data", "Copies data"], answer: "Makes data unreadable" },
      { question: "What does the CIA triad stand for?", options: ["Confidentiality, Integrity, Availability", "Cybersecurity, Internet, Access", "Code, Information, Authorization", "Confidential, Internal, Application"], answer: "Confidentiality, Integrity, Availability" }
    ]
  },
  {
    id: "4",
    title: "📱 Mobile App Development",
    description: "Create mobile applications for Android and iOS with React Native.",
    category: "Mobile Development",
    difficulty: "Intermediate",
    duration: "7 weeks",
    rating: 4.6,
    studentsCount: 1500,
    instructor: "Linus Torvalds",
    thumbnail: "https://source.unsplash.com/600x400/?mobile,app",
    languages: ["JavaScript", "React Native"],
    modules: [
      {
        id: "1",
        title: "Introduction to Mobile Apps",
        type: "notes",
        notes: "Mobile apps are software applications designed for smartphones and tablets. They can be native (built for a specific platform like Android or iOS), web apps (run in browsers), or hybrid apps (a mix of both). Mobile apps make devices more useful by providing services such as communication, shopping, education, and entertainment.",
        summary: "Mobile apps = native, web, or hybrid apps for phones.",
        content: {
          notes: "Mobile apps are software applications designed for smartphones and tablets. They can be native (built for a specific platform like Android or iOS), web apps (run in browsers), or hybrid apps (a mix of both). Mobile apps make devices more useful by providing services such as communication, shopping, education, and entertainment.",
          auto_summary: "Mobile apps = native, web, or hybrid apps for phones."
        }
      },
      {
        id: "2",
        title: "Mobile Platforms & Tools",
        type: "notes",
        notes: "The two most popular mobile platforms are Android and iOS. Android, developed by Google, is open-source and runs on many devices. iOS, developed by Apple, runs only on Apple devices. Developers use tools like Android Studio for Android, Xcode for iOS, and cross-platform frameworks like React Native and Flutter for both platforms.",
        summary: "Platforms = Android (Google) and iOS (Apple); Tools = Android Studio, Xcode, React Native.",
        content: {
          notes: "The two most popular mobile platforms are Android and iOS. Android, developed by Google, is open-source and runs on many devices. iOS, developed by Apple, runs only on Apple devices. Developers use tools like Android Studio for Android, Xcode for iOS, and cross-platform frameworks like React Native and Flutter for both platforms.",
          auto_summary: "Platforms = Android (Google) and iOS (Apple); Tools = Android Studio, Xcode, React Native."
        }
      },
      {
        id: "3",
        title: "UI Design & Security",
        type: "notes",
        notes: "A good UI makes apps easy and enjoyable to use. Design should focus on simplicity, consistency, and responsiveness. Mobile UI design often follows platform-specific guidelines (Material Design for Android, Human Interface Guidelines for iOS). Security is critical in app development to protect user data through encryption, secure coding practices, and strong authentication methods.",
        summary: "UI = simple, consistent design; Security = encryption and safe coding.",
        content: {
          notes: "A good UI makes apps easy and enjoyable to use. Design should focus on simplicity, consistency, and responsiveness. Mobile UI design often follows platform-specific guidelines (Material Design for Android, Human Interface Guidelines for iOS). Security is critical in app development to protect user data through encryption, secure coding practices, and strong authentication methods.",
          auto_summary: "UI = simple, consistent design; Security = encryption and safe coding."
        }
      },
      {
        id: "4",
        title: "App Deployment Quiz",
        type: "quiz",
        notes: "Once an app is developed, it must be deployed to app stores (Google Play or Apple App Store). Deployment requires meeting store guidelines and passing review processes. After launch, developers must maintain the app by fixing bugs, updating features, and ensuring compatibility with new devices and OS versions.",
        summary: "Deployment = publish in stores + maintain with updates.",
        content: {
          notes: "Once an app is developed, it must be deployed to app stores (Google Play or Apple App Store). Deployment requires meeting store guidelines and passing review processes. After launch, developers must maintain the app by fixing bugs, updating features, and ensuring compatibility with new devices and OS versions.",
          auto_summary: "Deployment = publish in stores + maintain with updates.",
          quiz: [
            { question: "Which company develops Android?", options: ["Apple", "Microsoft", "Google", "Samsung"], answer: "Google" },
            { question: "What tool is commonly used for iOS development?", options: ["Android Studio", "Xcode", "Eclipse", "React Native"], answer: "Xcode" },
            { question: "Which of the following is a cross-platform framework?", options: ["Xcode", "Flutter", "Android Studio", "Swift"], answer: "Flutter" }
          ]
        }
      }
    ],
    quiz: [
      { question: "What are mobile apps?", options: ["Software for smartphones", "Software for washing machines", "Desktop programs only", "TV channels"], answer: "Software for smartphones" },
      { question: "Which tool is used for mobile UI?", options: ["React Native", "Photoshop", "Word", "Excel"], answer: "React Native" },
      { question: "What is the backend for apps?", options: ["Stores and processes data", "Makes colors", "Adds animations", "Shows videos"], answer: "Stores and processes data" },
      { question: "Where are apps published?", options: ["Google Play / App Store", "Amazon only", "Twitter", "Email"], answer: "Google Play / App Store" },
      { question: "Which design guideline is used for Android apps?", options: ["Human Interface Guidelines", "Metro Design", "Material Design", "Carbon Design"], answer: "Material Design" }
    ]
  },
  {
    id: "5",
    title: "💻 Programming Fundamentals",
    description: "Understand the foundations of programming with Python.",
    category: "Programming",
    difficulty: "Beginner",
    duration: "5 weeks",
    rating: 4.5,
    studentsCount: 3000,
    instructor: "Bjarne Stroustrup",
    thumbnail: "https://source.unsplash.com/600x400/?programming,code",
    languages: ["Python"],
    modules: [
      {
        id: "1",
        title: "Introduction to Programming",
        type: "notes",
        notes: "Programming is the process of giving instructions to a computer so it can perform tasks. A program is written in a programming language, which provides rules (syntax) for writing code. Programming allows us to automate tasks, solve problems, and build applications like websites, games, and mobile apps.",
        summary: "Programming = writing instructions for computers using a language.",
        content: {
          notes: "Programming is the process of giving instructions to a computer so it can perform tasks. A program is written in a programming language, which provides rules (syntax) for writing code. Programming allows us to automate tasks, solve problems, and build applications like websites, games, and mobile apps.",
          auto_summary: "Programming = writing instructions for computers using a language."
        }
      },
      {
        id: "2",
        title: "Variables & Data Types",
        type: "notes",
        notes: "Variables are storage containers for data in a program. Different types of data include integers (numbers), floats (decimal numbers), strings (text), and booleans (true/false values). Choosing the right data type helps the program run efficiently and avoid errors.",
        summary: "Variables store data; data types = int, float, string, boolean.",
        content: {
          notes: "Variables are storage containers for data in a program. Different types of data include integers (numbers), floats (decimal numbers), strings (text), and booleans (true/false values). Choosing the right data type helps the program run efficiently and avoid errors.",
          auto_summary: "Variables store data; data types = int, float, string, boolean."
        }
      },
      {
        id: "3",
        title: "Control Structures & Functions",
        type: "notes",
        notes: "Control structures guide the flow of a program. Conditional statements (like if-else) let the program make decisions, while loops (like for and while) repeat actions until conditions are met. Functions are blocks of reusable code that perform specific tasks, making programs organized and reducing repetition.",
        summary: "Control structures = decisions and loops; Functions = reusable code blocks.",
        content: {
          notes: "Control structures guide the flow of a program. Conditional statements (like if-else) let the program make decisions, while loops (like for and while) repeat actions until conditions are met. Functions are blocks of reusable code that perform specific tasks, making programs organized and reducing repetition.",
          auto_summary: "Control structures = decisions and loops; Functions = reusable code blocks."
        }
      },
      {
        id: "4",
        title: "Programming Concepts Quiz",
        type: "quiz",
        notes: "Object-Oriented Programming (OOP) is a programming style based on objects, which group related data (attributes) and behaviors (methods). Key concepts include classes (blueprints for objects), inheritance (sharing features between classes), encapsulation (hiding details), and polymorphism (using one method in different ways). Debugging is the process of finding and fixing errors in code.",
        summary: "OOP = objects with classes and inheritance; Debugging = fixing code errors.",
        content: {
          notes: "Object-Oriented Programming (OOP) is a programming style based on objects, which group related data (attributes) and behaviors (methods). Key concepts include classes (blueprints for objects), inheritance (sharing features between classes), encapsulation (hiding details), and polymorphism (using one method in different ways). Debugging is the process of finding and fixing errors in code.",
          auto_summary: "OOP = objects with classes and inheritance; Debugging = fixing code errors.",
          quiz: [
            { question: "What does a variable do?", options: ["Stores data", "Deletes files", "Displays graphics", "Runs programs"], answer: "Stores data" },
            { question: "What is a function in programming?", options: ["A storage device", "A block of reusable code", "A data type", "A programming error"], answer: "A block of reusable code" },
            { question: "In OOP, what is a class?", options: ["A file type", "A blueprint for objects", "A loop", "A variable"], answer: "A blueprint for objects" }
          ]
        }
      }
    ],
    quiz: [
      { question: "What is programming?", options: ["Giving instructions to a computer", "Drawing pictures", "Writing books", "Designing clothes"], answer: "Giving instructions to a computer" },
      { question: "Which is a data type?", options: ["String", "Shirt", "Shoe", "Song"], answer: "String" },
      { question: "What do loops do?", options: ["Repeat tasks", "Delete tasks", "Draw images", "Sing songs"], answer: "Repeat tasks" },
      { question: "What are functions?", options: ["Reusable code blocks", "Errors", "Bugs", "Data"], answer: "Reusable code blocks" },
      { question: "What is debugging?", options: ["Fixing code errors", "Breaking computers", "Making apps slow", "Writing essays"], answer: "Fixing code errors" }
    ]
  }
];

export default coursesData;