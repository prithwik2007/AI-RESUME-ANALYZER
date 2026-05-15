import { useState } from "react";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen relative text-slate-100 selection:bg-brand-glow selection:text-white pb-20">
      
      {/* Animated Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-20">
        {/* Header section */}
        <header className="text-center mb-16 animate-slide-up opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs font-medium text-blue-400 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Gemini AI Engine
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent pb-2">
            Resume Analyzer
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Elevate your career trajectory. Our neural engine analyzes your professional profile to extract deep insights, optimize for ATS, and generate strategic interview roadmaps.
          </p>
        </header>

        {/* Main Content Area */}
        <main className="space-y-8">
          <section className="animate-slide-up opacity-0 delay-100">
            <UploadForm setResult={setResult} />
          </section>

          {result && (
            <div className="space-y-6 animate-slide-up opacity-0 delay-200">
              <ResultCard 
                title="Intelligence Core Analysis" 
                content={result.analysis} 
              />
              <ResultCard 
                title="Strategic Interview Roadmap" 
                content={result.interview_questions} 
              />
            </div>
          )}
        </main>

        <footer className="mt-20 text-center text-sm text-slate-500 font-light border-t border-slate-800/50 pt-8 animate-slide-up opacity-0 delay-300">
          © {new Date().getFullYear()} AI Resume Analyzer • Powered by advanced language models
        </footer>
      </div>
    </div>
  );
}

export default App;