# LearnSphere

**LearnSphere** is a gamified learning platform built for the Phase 4 final project by Shamola Shelton, Felona, and Lauren. It connects students and teachers through interactive courses, reviews, real-time chat, and gamification features like leaderboards and avatar customization. The app uses a Flask backend, React frontend, and SQLite database, deployed on Vercel.

- **GitHub**: [https://github.com/Shamola-Shelton/phase-4-final-project-learn-sphere](https://github.com/Shamola-Shelton/phase-4-final-project-learn-sphere)
- **Deployed**: [https://phase-4-final-project-learn-sphere-eta.vercel.app](https://phase-4-final-project-learn-sphere-eta.vercel.app/)
## Features

- **Authentication**: Secure signup/login with Formik/Yup validation for student and teacher roles.
- **Course Management**: Browse, enroll, and view courses with modules (notes, videos, quizzes).
- **Reviews**: Full CRUD (create, read, update, delete) for course feedback with ratings and comments.
- **Real-Time Chat**: Collaborative messaging using SocketIO.
- **Auto-Summarizer**: Summarizes module content with TextBlob.
- **Leaderboard**: Displays user points using Chart.js bar charts.
- **Avatar Customization**: Personalize profiles with color and style options.

## Technical Stack

- **Frontend**: React, React Router, Formik, Yup, Chart.js, SocketIO-client.
- **Backend**: Flask, Flask-SQLAlchemy, Flask-Migrate (Alembic), Flask-RESTful, Flask-Bcrypt, Flask-SocketIO, TextBlob, Faker.
- **Database**: SQLite with:
  - Two one-to-many relationships: User → Reviews, Course → Modules.
  - One many-to-many relationship: Users ↔ Courses via Enrollments.
- **Deployment**: Vercel (serverless Flask backend, static React frontend).

## Project Structure

```
phase-4-final-project-learnsphere/
├── Pipfile
├── README.md
├── client/
│ ├── package.json
│ ├── tailwind.config.js
│ ├── public/
│ │ ├── index.html
│ │ ├── favicon.ico
│ │ ├── logo192.png
│ │ ├── logo512.png
│ │ ├── manifest.json
│ │ └── robots.txt
│ ├── src/
│ │ ├── index.js
│ │ ├── index.css
│ │ ├── api.js
│ │ ├── components/
│ │ │ ├── Navbar.js
│ │ │ ├── SignUp.js
│ │ │ ├── Login.js
│ │ │ ├── CourseCard.js
│ │ │ ├── ModuleContent.js
│ │ │ ├── ReviewForm.js
│ │ │ ├── Chat.js
│ │ │ ├── AutoSummarizer.js
│ │ │ └── AvatarCustomizer.js
│ │ ├── pages/
│ │ │ ├── Home.js
│ │ │ ├── Courses.js
│ │ │ ├── CourseDetail.js
│ │ │ ├── Profile.js
│ │ │ └── Leaderboard.js
│ │ └── App.js
├── server/
│ ├── app.py
│ ├── config.py
│ ├── models.py
│ ├── seed.py
│ ├── instance/
│ │ └── app.db
│ ├── migrations/
│ │ ├── alembic.ini
│ │ ├── env.py
│ │ ├── script.py.mako
│ │ └── versions/
│ │ └── create_tables.py
│ └── resources/
│ ├── user.py
│ ├── course.py
│ ├── review.py
│ ├── enrollment.py
│ ├── module.py
│ └── summarizer.py
```

## Setup Instructions

### Prerequisites

- Python 3.8.13
- Node.js 16.x or higher
- Git
- Pipenv (`pip install pipenv`)

### Backend Setup

1. **Navigate to project root**:
   ```bash
   cd ~/Development/Code/phase-4/phase-4-final-project-learnsphere
   ```
2. **Install dependencies**:
   ```bash
   pipenv install
   pipenv shell
   ```
3. **Initialize database**:
   ```bash
   cd server
   export FLASK_APP=app.py
   flask db init
   flask db upgrade
   python seed.py
   ```
4. **Verify database**:
   ```bash
   sqlite3 instance/app.db
   SELECT * FROM users;
   SELECT * FROM courses;
   .exit
   ```
   - Expect: 5 users, 3 courses, reviews, enrollments, modules.

### Frontend Setup

1. **Navigate to client directory**:
   ```bash
   cd ../client
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Compile Tailwind CSS**:
   ```bash
   npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
   ```

### Running the App

1. **Backend** (Terminal 1):
   ```bash
   cd server
   pipenv shell
   export FLASK_APP=app.py
   python app.py
   ```
   - Test: `curl http://localhost:5555` (expect `{"message": "LearnSphere Server Running"}`).
2. **Frontend** (Terminal 2):
   ```bash
   cd ../client
   npm start
   ```
   - Opens `http://localhost:3000`.

### Testing the App

- Visit `http://localhost:3000`.
- **Signup**: Navigate to `/signup` (e.g., `username: testuser`, `email: test@example.com`, `password: password123`, `role: student`).
- **Login**: Use same credentials at `/login`.
- **Courses**: Browse `/courses`, enroll, and view details (`/courses/1`).
- **Reviews**: Submit/edit/delete reviews on course pages.
- **Chat**: Test real-time messaging at `/chat` in multiple tabs.
- **Leaderboard**: View user points at `/leaderboard`.
- **Auto-Summarizer**: Summarize module content on course detail pages.
- **API Tests**:
  ```bash
  curl -X POST http://localhost:5555/api/signup -H "Content-Type: application/json" -d '{"username":"testuser","email":"test@example.com","password":"password123","role":"student"}'
  curl http://localhost:5555/api/courses
  ```

## Deployment on Vercel

- **Setup**:
  - Connected GitHub repo to Vercel.
