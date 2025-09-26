import datascience from "../images/datascience.jpeg";
import webdevelopment from "../images/webdevelopment.jpeg";
import cybersecurity from "../images/cybersecurity.jpeg";
import mobileappdevelopment from "../images/mobileappdevelopment.jpeg";
import programming from "../images/programming.jpeg";

const coursesData = [
  {
    id: "1",
    title: "Data Science Fundamentals",
    description: "Learn data analysis, visualization, and machine learning basics.",
    category: "Data Science",
    difficulty: "Beginner",
    duration: "6 weeks",
    instructor: "Dr. Ada Lovelace",
    thumbnail: datascience,
    modules: [
      {
        id: "1",
        title: "Introduction to Data Science",
        notes: "Data Science is the field of using data to understand patterns, solve problems, and make better decisions. It combines programming, mathematics, and domain knowledge to process and interpret data. Data scientists follow a process that starts with collecting raw data, cleaning it, analyzing patterns, visualizing results, and finally drawing conclusions that can be applied in real life. It is widely used in industries like healthcare, finance, business, and artificial intelligence.",
        auto_summary: "Data Science = using data to find insights and make decisions.",
        video: "https://youtu.be/FsSrzmRawUg?si=_2LJt1Pl83pxs-Tb",
        quiz: [
          {
            question: "What are the three key parts of Data Science?",
            options: ["Biology, Chemistry, Physics", "Programming, Statistics, Domain Knowledge", "HTML, CSS, JavaScript", "Finance, Marketing, Medicine"],
            answer: "Programming, Statistics, Domain Knowledge"
          },
          {
            question: "Why is data cleaning important?",
            options: ["To make data colorful", "To make analysis accurate", "To delete unnecessary files", "To create charts"],
            answer: "To make analysis accurate"
          },
          {
            question: "What does EDA stand for?",
            options: ["Exploratory Data Analysis", "Extra Data Application", "Example Data Approach", "External Data Access"],
            answer: "Exploratory Data Analysis"
          }
        ]
      },
      {
        id: "2",
        title: "Data Collection & Cleaning",
        notes: "Data collection is the first step in working with information, and it can come from databases, APIs, surveys, or files like CSV. However, raw data is often messy, so cleaning is needed to make it usable. Cleaning involves removing duplicates, handling missing values, fixing incorrect formats, and standardizing data. Clean data ensures that later analysis is accurate and meaningful, which is why this stage is very important in the data science workflow.",
        auto_summary: "Collect data, then clean it to make it accurate and usable.",
        video: "https://youtu.be/WpX2F2BS3Qc?si=DkUC_c3Is3BtSY7X",
        quiz: [
          {
            question: "Give one source where data can be collected.",
            options: ["Databases", "Music playlists", "Paintings", "Dreams"],
            answer: "Databases"
          }
        ]
      },
      {
        id: "3",
        title: "Exploratory Data Analysis (EDA)",
        notes: "Exploratory Data Analysis is about understanding the hidden patterns and stories inside data before applying advanced methods. It involves calculating basic statistics like averages and ranges, and creating visualizations like histograms, scatter plots, or bar charts. The goal is to quickly spot trends, relationships, or anomalies in the dataset. This step helps guide which methods or models should be used in the next stages of data science.",
        auto_summary: "EDA = explore data with stats and graphs to see patterns.",
        video: "https://youtu.be/QiqZliDXCCg?si=sD1Ja3t2WAsUZzwR",
        quiz: [
          {
            question: "Which chart is best for showing proportions?",
            options: ["Line chart", "Pie chart", "Histogram", "Scatter plot"],
            answer: "Pie chart"
          }
        ]
      },
      {
        id: "4",
        title: "Data Visualization",
        notes: "Data visualization is the practice of turning numbers and statistics into clear, visual representations such as charts and graphs. Good visualization helps both technical and non-technical people understand complex data easily. Tools like Matplotlib, Seaborn, and Tableau allow data scientists to create bar charts, line graphs, heatmaps, and dashboards. This makes data-driven insights more powerful and easier to communicate to others.",
        auto_summary: "Visualization = show data with charts to make it easy to understand.",
        video: "https://youtu.be/MiiANxRHSv4?si=JL8LFQi8wZ8LZ3vL",
        quiz: [
          {
            question: "Name a tool used for data visualization.",
            options: ["Photoshop", "Seaborn", "Excel Keyboard Shortcuts", "WhatsApp"],
            answer: "Seaborn"
          },
          {
            question: "Why do we use data visualization?",
            options: ["To make data harder to understand", "To create funny memes", "To communicate insights clearly", "To delete data"],
            answer: "To communicate insights clearly"
          }
        ]
      },
      {
        id: "5",
        title: "Machine Learning Basics",
        notes: "Machine Learning is a part of data science that focuses on teaching computers to learn from data without being explicitly programmed. It has three main types: supervised learning, where models predict outcomes from labeled data; unsupervised learning, which groups or clusters data; and reinforcement learning, where systems learn from feedback and trial-and-error. Common tools for machine learning include Scikit-learn, TensorFlow, and PyTorch.",
        auto_summary: "ML = making computers learn from data automatically.",
        video: "https://youtu.be/7eh4d6sabA0?si=SY4j7AA1aSgoHFmg",
        quiz: [
          {
            question: "What type of learning predicts labels in ML?",
            options: ["Unsupervised", "Reinforcement", "Supervised", "Random"],
            answer: "Supervised"
          },
          {
            question: "What is clustering used for in ML?",
            options: ["Predicting future values", "Grouping similar data", "Deleting duplicates", "Sorting files alphabetically"],
            answer: "Grouping similar data"
          },
          {
            question: "Which library is commonly used for ML in Python?",
            options: ["TensorFlow", "React", "Bootstrap", "Vue.js"],
            answer: "TensorFlow"
          }
        ]
      }
    ],
    quiz: [] // optional course-level quiz if needed
  },

  // Web Development Bootcamp
  {
    id: "2",
    title: "Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, and React to build full websites.",
    category: "Web Development",
    difficulty: "Intermediate",
    duration: "8 weeks",
    instructor: "Grace Hopper",
    thumbnail: webdevelopment,
    modules: [
      {
        id: "1",
        title: "Introduction to Web Development",
        notes: "Web development is the process of building websites and web applications that people use daily. It consists of two main parts: the frontend, which is everything the user sees and interacts with, and the backend, which manages data, servers, and logic. Together, they form a complete system that makes websites both functional and attractive.",
        auto_summary: "Web development = frontend + backend working together.",
        video: "https://www.youtube.com/watch?v=5YDVJaItmaY",
        quiz: [
          {
            question: "What does HTML stand for?",
            options: ["High Text Machine Language", "HyperText Markup Language", "Hyperlink and Text Manager", "Home Tool Markup Language"],
            answer: "HyperText Markup Language"
          }
        ]
      },
      {
        id: "2",
        title: "HTML Basics",
        notes: "HTML (HyperText Markup Language) is the foundation of web development. It provides the structure of web pages by using elements like headings, paragraphs, images, and links. Forms in HTML allow users to input data, such as filling out a login form or submitting feedback. Without HTML, web pages would not have any content or layout.",
        auto_summary: "HTML = the structure or skeleton of web pages.",
        video: "https://www.youtube.com/watch?v=FQdaUv95mR8&t=75s",
        quiz: [
          {
            question: "Which HTML tag is used to insert an image?",
            options: ["<img>", "<p>", "<h1>", "<form>"],
            answer: "<img>"
          }
        ]
      },
      {
        id: "3",
        title: "CSS Styling",
        notes: "CSS (Cascading Style Sheets) is what makes web pages visually appealing. It allows developers to change colors, fonts, spacing, and layouts. With features like Flexbox and Grid, CSS makes it easier to design responsive pages that look good on both computers and mobile devices. It transforms plain HTML into attractive, user-friendly designs.",
        auto_summary: "CSS = makes websites look beautiful and organized.",
        video: "https://www.youtube.com/watch?v=1PnVor36_40",
        quiz: [
          {
            question: "What is CSS mainly used for?",
            options: ["To create databases", "To design and style web pages", "To store information", "To write backend logic"],
            answer: "To design and style web pages"
          }
        ]
      },
      {
        id: "4",
        title: "JavaScript Basics",
        notes: "JavaScript is the programming language that adds interactivity to websites. It makes it possible for buttons to react when clicked, for forms to validate input, and for dynamic changes to happen on a page without reloading. JavaScript also manipulates the Document Object Model (DOM), which is the structure of the webpage.",
        auto_summary: "JavaScript = adds interactivity and logic to web pages.",
        video: "https://www.youtube.com/watch?v=xwKbtUP87Dk",
        quiz: [
          {
            question: "What does JavaScript add to a website?",
            options: ["Styling", "Interactivity", "Structure", "Hosting"],
            answer: "Interactivity"
          }
        ]
      },
      {
        id: "5",
        title: "Frontend Frameworks",
        notes: "Frontend frameworks like React, Angular, and Vue simplify web development by providing reusable components and efficient ways to manage user interfaces. Backend development handles the behind-the-scenes work of web applications. It deals with servers, databases, and application logic. Languages like Node.js, Python, and PHP are commonly used for backend systems.",
        auto_summary: "Frameworks = tools for faster and scalable frontend development.",
        video: "https://www.youtube.com/shorts/wUxARpEUQqo",
        quiz: [
          {
            question: "Which of these is a frontend framework?",
            options: ["React", "Django", "MongoDB", "MySQL"],
            answer: "React"
          }
        ]
      },
      {
        id: "6",
        title: "Backend Development",
        notes: "Backend development handles the behind-the-scenes work of web applications.",
        auto_summary: "Backend = server, database, and logic that power websites.",
        video: "https://www.youtube.com/watch?v=FQdaUv95mR8",
        quiz: [
          {
            question: "Which of these is a backend language?",
            options: ["Node.js", "CSS", "HTML", "React"],
            answer: "Node.js"
          },
          {
            question: "What is the role of the backend in web development?",
            options: ["To handle design only", "To store and process data", "To change colors of web pages", "To create animations"],
            answer: "To store and process data"
          }
        ]
      }
    ],
    quiz: [] // course-level quiz optional
  },

  // Cybersecurity Essentials
  {
    id: "3",
    title: "Cybersecurity Essentials",
    description: "Learn to secure systems, networks, and defend against cyber threats.",
    category: "Cyber Security",
    difficulty: "Advanced",
    duration: "10 weeks",
    instructor: "Kevin Mitnick",
    thumbnail: cybersecurity,
    modules: [
      {
        id: "1",
        title: "Introduction to Cybersecurity",
        notes: "Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access and attacks. Its core is often explained with the CIA Triad: Confidentiality (keeping data private), Integrity (keeping data accurate), and Availability (keeping systems accessible when needed). Without cybersecurity, individuals and organizations risk losing valuable information to hackers or malicious software.",
        auto_summary: "Cybersecurity = protecting data and systems from attacks.",
        video: "https://www.youtube.com/watch?v=ULGILG-ZhO0",
        quiz: [
          {
            question: "What does the CIA triad stand for?",
            options: ["Confidentiality, Integrity, Availability", "Cybersecurity, Internet, Access", "Code, Information, Authorization", "Confidential, Internal, Application"],
            answer: "Confidentiality, Integrity, Availability"
          }
        ]
      },
      {
        id: "2",
        title: "Threats & Attacks",
        notes: "Cyber threats come in many forms, including malware (harmful software), phishing (tricking users to give up personal info), ransomware (locking files until payment), and denial-of-service attacks (overloading systems). Attackers may also use social engineering, which manipulates people instead of systems. Understanding these threats is the first step to building defenses.",
        auto_summary: "Threats = malware, phishing, ransomware, DoS, and social engineering.",
        video: "https://www.youtube.com/watch?v=lpPmrg720R4",
        quiz: [
          {
            question: "Which of these is an example of malware?",
            options: ["Firewall", "Virus", "VPN", "Password"],
            answer: "Virus"
          },
          {
            question: "What is phishing?",
            options: ["A method of data encryption", "A trick to steal sensitive information", "A type of firewall", "A backup system"],
            answer: "A trick to steal sensitive information"
          }
        ]
      },
      {
        id: "3",
        title: "Network Security",
        notes: "Network security focuses on protecting the flow of data between devices...",
        auto_summary: "Network security = tools like firewalls, VPNs, IDS to protect data.",
        video: "https://www.youtube.com/watch?v=cNwEVYkx2Kk",
        quiz: [
          {
            question: "What does a firewall do?",
            options: ["Attacks other computers", "Protects a network from unauthorized access", "Stores passwords", "Repairs corrupted files"],
            answer: "Protects a network from unauthorized access"
          }
        ]
      },
      {
        id: "4",
        title: "Authentication & Access Control",
        notes: "Authentication ensures that only the right people can access a system...",
        auto_summary: "Authentication verifies users, access control limits permissions.",
        video: "https://www.youtube.com/watch?v=muujW_JlcuM",
        quiz: [
          {
            question: "What does MFA stand for?",
            options: ["Multi-Factor Authentication", "Main Firewall Application", "Multiple File Access", "Multi-Function Antivirus"],
            answer: "Multi-Factor Authentication"
          }
        ]
      }
    ],
    quiz: [] // optional course-level quiz
  },

  // Mobile App Development
  {
    id: "4",
    title: "Mobile App Development",
    description: "Create mobile applications for Android and iOS with React Native.",
    category: "Mobile Development",
    difficulty: "Intermediate",
    duration: "7 weeks",
    instructor: "Linus Torvalds",
    thumbnail: mobileappdevelopment,
    modules: [
      {
        id: "1",
        title: "Introduction to Mobile Apps",
        notes: "Mobile apps are software applications designed for smartphones and tablets.",
        auto_summary: "Mobile apps = native, web, or hybrid apps for phones.",
        video: "https://www.youtube.com/watch?v=yye7rSsiV6k",
        quiz: [
          {
            question: "Which type of app is built for a specific platform like iOS or Android?",
            options: ["Web app", "Native app", "Hybrid app", "Cloud app"],
            answer: "Native app"
          }
        ]
      },
      {
        id: "2",
        title: "Mobile App Platforms",
        notes: "The two most popular mobile platforms are Android and iOS.",
        auto_summary: "Mobile platforms = Android (open) and iOS (Apple).",
        video: "https://www.youtube.com/watch?v=UJ8kiUWLXJg",
        quiz: [
          {
            question: "Which company develops Android?",
            options: ["Apple", "Microsoft", "Google", "Samsung"],
            answer: "Google"
          }
        ]
      },
      {
        id: "3",
        title: "App Development Tools",
        notes: "Developers use specific tools to build apps.",
        auto_summary: "Tools = Android Studio, Xcode, React Native, Flutter.",
        video: "https://www.youtube.com/watch?v=RIX4ufelA58",
        quiz: [
          {
            question: "What tool is commonly used for iOS development?",
            options: ["Android Studio", "Xcode", "Eclipse", "React Native"],
            answer: "Xcode"
          },
          {
            question: "What is Flutter mainly used for?",
            options: ["Building native iOS apps only", "Building cross-platform apps", "Building databases", "Designing icons"],
            answer: "Building cross-platform apps"
          }
        ]
      },
      {
        id: "4",
        title: "User Interface (UI) Design",
        notes: "A good UI makes apps easy and enjoyable to use.",
        auto_summary: "UI = simple, consistent, clear design for usability.",
        video: "https://www.youtube.com/watch?v=2esQdKzRUCw",
        quiz: [
          {
            question: "Which design guideline is used for Android apps?",
            options: ["Material Design", "Cupertino Design", "Bootstrap", "Foundation"],
            answer: "Material Design"
          }
        ]
      }
    ],
    quiz: []
  }
];

export default coursesData;