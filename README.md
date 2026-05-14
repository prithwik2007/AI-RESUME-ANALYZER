# AI Resume Analyzer

AI-powered Resume Analyzer built using React, FastAPI, and Gemini AI. Users can upload resumes in PDF/DOCX format to receive ATS optimization suggestions, resume improvement feedback, missing skill recommendations, and AI-generated interview questions based on their skills and projects.

---

## Features

* Resume upload (PDF/DOCX)
* AI resume analysis using Gemini AI
* ATS optimization suggestions
* Skill gap detection
* Resume improvement recommendations
* Technical & HR interview questions
* Modern responsive UI

---

## Tech Stack

### Frontend

* React
* Tailwind CSS
* Axios
* Vite

### Backend

* FastAPI
* Python

### AI

* Google Gemini API

---

## Installation

### Clone Repository

```bash
git clone https://github.com/prithwik2007/AI-RESUME-ANALYZER
cd resume-analyzer
```

---

### Backend Setup

```bash
cd backend

python -m venv venv

venv\\Scripts\\activate

pip install -r requirements.txt

uvicorn main:app --reload or python -m uvicorn main:app --reload
```

---

### Frontend Setup

```bash
cd frontend(new terminal)

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

## Project Structure

```txt
resume-analyzer/
│
├── backend/
│   ├── main.py
│   ├── gemini_service.py
│   ├── resume_parser.py
│   └── requirements.txt
│
└── frontend/
    ├── src/
    └── package.json
```

---

## Future Improvements

* Resume score visualization
* Job description matching
* AI mock interview
* Authentication system
* Resume history dashboard
* AI cover letter generator

---

## Author

Rithwik
