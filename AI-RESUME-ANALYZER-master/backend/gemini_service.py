import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=api_key)

model = genai.GenerativeModel("gemini-2.5-flash")


def analyze_resume(resume_text):

    prompt = f"""
    Analyze this resume and provide:

    1. Resume Strengths
    2. Weaknesses
    3. Missing Skills
    4. ATS Optimization Suggestions
    5. Projects Improvement Suggestions
    6. Overall Resume Score out of 100

    Resume:

    {resume_text}
    """

    response = model.generate_content(prompt)

    return response.text



def generate_interview_questions(resume_text):

    prompt = f"""
    Based on this resume, generate:

    1. Technical Interview Questions
    2. HR Interview Questions
    3. Project-Based Questions
    4. Scenario-Based Questions

    Resume:

    {resume_text}
    """

    response = model.generate_content(prompt)

    return response.text