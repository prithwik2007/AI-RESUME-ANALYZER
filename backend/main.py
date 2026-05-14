import os
import shutil

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from resume_parser import (
    extract_text_from_pdf,
    extract_text_from_docx,
)

from gemini_service import (
    analyze_resume,
    generate_interview_questions,
)

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


UPLOAD_FOLDER = "uploads"

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


@app.get("/")
def home():
    return {"message": "Resume Analyzer API Running"}


@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    resume_text = ""

    if file.filename.endswith(".pdf"):
        resume_text = extract_text_from_pdf(file_path)

    elif file.filename.endswith(".docx"):
        resume_text = extract_text_from_docx(file_path)

    else:
        return {"error": "Unsupported file format"}

    analysis = analyze_resume(resume_text)

    interview_questions = generate_interview_questions(resume_text)

    return {
        "resume_text": resume_text,
        "analysis": analysis,
        "interview_questions": interview_questions,
    }