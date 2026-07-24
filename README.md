<div align="center">

# 🤖 AI Code Reviewer

### AI-Powered Code Review Application using React, Express.js & Google Gemini AI

Analyze JavaScript code instantly with AI-generated reviews, issue detection, best practices, and optimized code suggestions.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![NodeJS](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![Google Gemini](https://img.shields.io/badge/Google-Gemini_AI-orange?logo=google)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-blue)

</div>

---

# 📑 Table of Contents

- Project Overview
- Problem Statement
- Solution
- Objectives
- Features
- System Architecture
- Request Flow
- Tech Stack
- Folder Structure
- Packages Used
- Installation & Setup
- Environment Variables
- Running the Project
- API Documentation
- Postman Testing
- Project Workflow
- Challenges Faced
- Lessons Learned
- Future Improvements
- Contribution Guide
- Author
- License

---

# 📖 Project Overview

AI Code Reviewer is a full-stack web application that leverages **Google Gemini AI** to perform intelligent code reviews.

Users can write or paste JavaScript code into an interactive editor, submit it for review, and instantly receive structured AI feedback containing:

- Code issues
- Explanation
- Best practices
- Improved code
- Suggestions for optimization

The project demonstrates frontend-backend communication, REST API development, third-party AI integration, prompt engineering, and modern React development.

---

# ❓ Problem Statement

Developers, especially beginners, often struggle to identify:

- Code smells
- Poor coding practices
- Bugs
- Readability issues
- Optimization opportunities

Manual code reviews require experienced developers and consume valuable development time.

---

# 💡 Solution

This application automates the initial code review process using **Google Gemini AI**.

Instead of manually reviewing code, developers can:

- Paste their code
- Click **Review**
- Receive an AI-generated review within seconds

The review is displayed in a clean Markdown interface with syntax-highlighted code snippets.

---

# 🎯 Objectives

- Build a real-world AI application
- Learn React + Express integration
- Understand REST API development
- Integrate Google Gemini AI
- Practice Prompt Engineering
- Create a portfolio-ready project

---

# ✨ Features

- 🤖 AI-powered code review
- 📝 Interactive code editor
- 🎨 Syntax highlighting
- 📖 Markdown formatted response
- ⚡ Fast REST API communication
- 🌙 Clean responsive interface
- 💡 AI-generated optimized code
- 🔍 Code issue detection
- 🚀 Modern React + Vite frontend

---

# 🏗️ System Architecture

```
                User
                  │
                  ▼
        React Frontend (Vite)
                  │
             Axios Request
                  │
                  ▼
          Express REST API
                  │
                  ▼
            AI Service Layer
                  │
                  ▼
        Google Gemini AI API
                  │
                  ▼
        AI Generated Response
                  │
                  ▼
       React Markdown Renderer
```

---

# 🔄 Request Flow

```
User

↓

Write Code

↓

Click Review

↓

Axios POST Request

↓

Express Route

↓

Controller

↓

AI Service

↓

Google Gemini API

↓

AI Review

↓

React Markdown

↓

Displayed to User
```

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Axios
- PrismJS
- React Markdown
- Rehype Highlight
- React Simple Code Editor

---

## Backend

- Node.js
- Express.js
- Google Generative AI SDK
- dotenv
- CORS

---

# 📂 Folder Structure

```
AI-Code-Reviewer
│
├── backend
│   ├── src
│   │   ├── controller
│   │   │      ai.controller.js
│   │   │
│   │   ├── routes
│   │   │      ai.route.js
│   │   │
│   │   ├── services
│   │   │      ai.service.js
│   │   │
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── vite.config.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 📦 Packages Used

## Frontend

| Package | Purpose |
|----------|----------|
| React | User Interface |
| Vite | Development Server |
| Axios | API Communication |
| PrismJS | Syntax Highlighting |
| React Markdown | Render AI Response |
| Rehype Highlight | Highlight Code Blocks |
| React Simple Code Editor | Code Editor |
| Highlight.js | Code Styling |

---

## Backend

| Package | Purpose |
|----------|----------|
| Express | REST API |
| Google Generative AI | Gemini Integration |
| dotenv | Environment Variables |
| CORS | Cross-Origin Requests |
| Axios | HTTP Client |

---

# ⚙ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Dolfiguleria78/ai-code-reviewer.git
```

```
cd ai-code-reviewer
```

---

## Install Frontend

```bash
cd frontend
npm install
```

---

## Install Backend

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

Create a file:

```
backend/.env
```

Add

```env
GOOGLE_GEMINI_KEY=YOUR_API_KEY
```

---

# ▶ Running the Project

## Backend

```bash
cd backend
npm start
```

Runs on

```
http://localhost:3000
```

---

## Frontend

```bash
cd frontend
npm run dev
```

Runs on

```
http://localhost:5173
```

---

# 📡 API Documentation

## Review Code

### Endpoint

```
POST /ai/get-review
```

---

### URL

```
http://localhost:3000/ai/get-review
```

---

### Headers

```
Content-Type : application/json
```

---

### Request Body

```json
{
  "code":"function sum(a,b){return a+b;}"
}
```

---

### Success Response

```text
Issues Found

Recommended Code

Best Practices

Summary
```

---

# 🧪 Testing with Postman

## Method

POST

---

## URL

```
http://localhost:3000/ai/get-review
```

---

## Body

```json
{
    "code":"function add(a,b){ return a+b; }"
}
```

---

# 📋 Project Workflow

### Step 1

User writes JavaScript code.

↓

### Step 2

React captures the code.

↓

### Step 3

Axios sends a POST request.

↓

### Step 4

Express receives the request.

↓

### Step 5

Controller validates input.

↓

### Step 6

AI Service forwards prompt to Gemini.

↓

### Step 7

Gemini generates review.

↓

### Step 8

Backend returns response.

↓

### Step 9

Frontend renders Markdown with syntax highlighting.

---

# 🧩 Challenges Faced

### Google Gemini Integration

- Configuring API authentication
- Designing prompts for structured AI responses

---

### Markdown Rendering

- Displaying AI responses with proper headings
- Rendering code blocks correctly

---

### Syntax Highlighting

- Integrating PrismJS with the editor
- Highlighting AI-generated code snippets

---

### Frontend–Backend Communication

- Managing Axios requests
- Handling CORS
- Parsing JSON responses

---

### Backend Architecture

- Separating routes, controllers, and services
- Improving maintainability

---

### Environment Variables

- Securing API keys using `.env`
- Preventing secrets from being committed using `.gitignore`

---

### GitHub Secret Scanning

- Encountered push protection after accidentally committing an API key.
- Removed the secret from Git history and secured the project before publishing.

---

### UI Design

- Building a clean split-screen interface
- Improving readability of Markdown output

---

# 📚 Lessons Learned

This project strengthened my understanding of:

- React component architecture
- REST API development
- Express.js
- Google Gemini AI Integration
- Prompt Engineering
- Axios
- Environment Variables
- Markdown Rendering
- Syntax Highlighting
- Git & GitHub Best Practices

---

# 🚀 Future Improvements

- MongoDB Integration (Convert to MERN)
- Review History
- Authentication
- Multiple Language Support
- Download Review as PDF
- Copy Review Button
- AI Code Quality Score
- Dark / Light Theme
- Save Favourite Reviews
- Code Execution Support

---

# 🤝 Contribution Guide

Contributions are welcome.

1. Fork the repository.

2. Create a new branch.

```
git checkout -b feature-name
```

3. Commit your changes.

```
git commit -m "Added feature"
```

4. Push

```
git push origin feature-name
```

5. Open a Pull Request.

---

# 👨‍💻 Author

## **Dolfi**

Passionate about AI, Full-Stack Development, and building impactful software solutions.

**GitHub**

https://github.com/Dolfiguleria78

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---

<div align="center">

### 🚀 Happy Coding!

Made by **Dolfi**

</div>