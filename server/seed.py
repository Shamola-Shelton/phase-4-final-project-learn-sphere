from app import create_app
from models import db, User, Course, Module
from flask_bcrypt import Bcrypt

app = create_app()
bcrypt = Bcrypt(app)

with app.app_context():
    print("🔄 Resetting database...")
    db.drop_all()
    db.create_all()

    # Create a teacher
    teacher_pw = bcrypt.generate_password_hash("teacher123").decode("utf-8")
    teacher = User(username="teacher1", email="teacher@example.com", password_hash=teacher_pw, role="teacher")
    db.session.add(teacher)
    db.session.commit()

    # --- 1. Data Science Fundamentals ---
    data_science = Course(
        title="Data Science Fundamentals",
        description="Learn the basics of data science, from data collection to machine learning.",
        category="Data Science",
        creator_id=teacher.id
    )
    db.session.add(data_science)
    db.session.commit()

    ds_modules = [
        {
            "title": "Introduction to Data Science",
            "type": "notes",
            "content": {
                "notes": "Data Science is the field of using data ...",
                "auto_summary": "Data Science = using data to find insights and make decisions."
            }
        },
        {
            "title": "Data Collection & Cleaning",
            "type": "notes",
            "content": {
                "notes": "Data collection is the first step ...",
                "auto_summary": "Collect data, then clean it to make it accurate and usable."
            }
        },
        {
            "title": "Exploratory Data Analysis (EDA)",
            "type": "notes",
            "content": {
                "notes": "EDA is about understanding hidden patterns ...",
                "auto_summary": "EDA = explore data with stats and graphs to see patterns."
            }
        },
        {
            "title": "Data Visualization",
            "type": "notes",
            "content": {
                "notes": "Visualization turns numbers into charts ...",
                "auto_summary": "Visualization = show data with charts to make it easy to understand."
            }
        },
        {
            "title": "Machine Learning Basics",
            "type": "quiz",
            "content": {
                "notes": "Machine Learning teaches computers to learn ...",
                "auto_summary": "ML = making computers learn from data automatically.",
                "quiz": [
                    {"q": "What are the three key parts of Data Science?", "options": ["Biology", "Programming"], "answer": "Programming, Statistics, Domain Knowledge"},
                    {"q": "Why is data cleaning important?", "options": ["To make analysis accurate", "To delete files"], "answer": "To make analysis accurate"},
                    {"q": "What does EDA stand for?", "options": ["Exploratory Data Analysis", "Extra Data Application"], "answer": "Exploratory Data Analysis"},
                ]
            }
        }
    ]
    for m in ds_modules:
        db.session.add(Module(course_id=data_science.id, title=m["title"], type=m["type"], content=m["content"]))

    # --- 2. Web Development Bootcamp ---
    web_dev = Course(
        title="Web Development Bootcamp",
        description="Learn frontend, backend, and fullstack web development.",
        category="Web Development",
        creator_id=teacher.id
    )
    db.session.add(web_dev)
    db.session.commit()

    web_modules = [
        {"title": "Introduction to Web Development", "type": "notes", "content": {"notes": "Web dev has frontend and backend...", "auto_summary": "Frontend + backend working together."}},
        {"title": "HTML Basics", "type": "notes", "content": {"notes": "HTML gives structure ...", "auto_summary": "HTML = skeleton of web pages."}},
        {"title": "CSS Styling", "type": "notes", "content": {"notes": "CSS makes sites beautiful...", "auto_summary": "CSS = design & layout."}},
        {"title": "JavaScript Basics", "type": "notes", "content": {"notes": "JS adds interactivity...", "auto_summary": "JS = interactivity."}},
        {"title": "Final Quiz", "type": "quiz", "content": {"quiz": [
            {"q": "What does HTML stand for?", "options": ["HyperText Markup Language", "Home Tool"], "answer": "HyperText Markup Language"},
            {"q": "What is CSS used for?", "options": ["Designing pages", "Database storage"], "answer": "Designing pages"},
            {"q": "What does JS add?", "options": ["Interactivity", "Structure"], "answer": "Interactivity"},
        ]}}
    ]
    for m in web_modules:
        db.session.add(Module(course_id=web_dev.id, title=m["title"], type=m["type"], content=m["content"]))

    # --- 3. Cybersecurity Essentials ---
    cyber = Course(
        title="Cybersecurity Essentials",
        description="Protect data, networks, and systems from attacks.",
        category="Cybersecurity",
        creator_id=teacher.id
    )
    db.session.add(cyber)
    db.session.commit()

    cyber_modules = [
        {"title": "Introduction to Cybersecurity", "type": "notes", "content": {"notes": "Cybersecurity protects...", "auto_summary": "Protecting systems & data."}},
        {"title": "Threats & Attacks", "type": "notes", "content": {"notes": "Malware, phishing, ransomware...", "auto_summary": "Threats = malware, phishing, ransomware."}},
        {"title": "Network Security", "type": "notes", "content": {"notes": "Firewalls, VPNs...", "auto_summary": "Network security tools."}},
        {"title": "Final Quiz", "type": "quiz", "content": {"quiz": [
            {"q": "What does CIA triad mean?", "options": ["Confidentiality, Integrity, Availability"], "answer": "Confidentiality, Integrity, Availability"},
            {"q": "What is phishing?", "options": ["Tricking users", "Encrypting data"], "answer": "Tricking users"},
        ]}}
    ]
    for m in cyber_modules:
        db.session.add(Module(course_id=cyber.id, title=m["title"], type=m["type"], content=m["content"]))

    # --- 4. Mobile App Development ---
    mobile = Course(
        title="Mobile App Development",
        description="Learn to build Android and iOS apps.",
        category="Mobile Development",
        creator_id=teacher.id
    )
    db.session.add(mobile)
    db.session.commit()

    mobile_modules = [
        {"title": "Introduction to Mobile Apps", "type": "notes", "content": {"notes": "Native, hybrid, web apps...", "auto_summary": "Apps = native, web, hybrid."}},
        {"title": "App Platforms", "type": "notes", "content": {"notes": "Android vs iOS...", "auto_summary": "Android (open), iOS (Apple)."}},
        {"title": "App Tools", "type": "notes", "content": {"notes": "Android Studio, Xcode...", "auto_summary": "Tools for dev."}},
        {"title": "Final Quiz", "type": "quiz", "content": {"quiz": [
            {"q": "Which company develops Android?", "options": ["Google", "Apple"], "answer": "Google"},
            {"q": "What tool for iOS dev?", "options": ["Xcode", "Android Studio"], "answer": "Xcode"},
        ]}}
    ]
    for m in mobile_modules:
        db.session.add(Module(course_id=mobile.id, title=m["title"], type=m["type"], content=m["content"]))

    # --- 5. Programming Fundamentals ---
    prog = Course(
        title="Programming Fundamentals",
        description="Learn variables, functions, OOP, and logic.",
        category="Programming",
        creator_id=teacher.id
    )
    db.session.add(prog)
    db.session.commit()

    prog_modules = [
        {"title": "Introduction to Programming", "type": "notes", "content": {"notes": "Programming = giving instructions...", "auto_summary": "Writing code to instruct computers."}},
        {"title": "Variables & Data Types", "type": "notes", "content": {"notes": "int, float, string, bool...", "auto_summary": "Variables store data."}},
        {"title": "Control Structures", "type": "notes", "content": {"notes": "if-else, loops...", "auto_summary": "Decision making + loops."}},
        {"title": "Final Quiz", "type": "quiz", "content": {"quiz": [
            {"q": "What is programming?", "options": ["Writing instructions for computers", "Fixing hardware"], "answer": "Writing instructions for computers"},
            {"q": "What control structure is for decisions?", "options": ["If-Else", "Loop"], "answer": "If-Else"},
        ]}}
    ]
    for m in prog_modules:
        db.session.add(Module(course_id=prog.id, title=m["title"], type=m["type"], content=m["content"]))

    db.session.commit()
    print("✅ Database seeded with courses, modules, and quizzes!")