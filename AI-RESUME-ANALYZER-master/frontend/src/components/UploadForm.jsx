import { useState, useRef } from "react";
import axios from "axios";

const UploadForm = ({ setResult }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a resume");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        formData
      );
      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Error analyzing resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div 
        className={`relative flex flex-col items-center justify-center w-full min-h-[300px] p-8 border-2 border-dashed rounded-3xl transition-all duration-300 ease-out bg-slate-900/40 backdrop-blur-md overflow-hidden ${
          dragActive 
            ? 'border-blue-500 bg-blue-500/10 scale-[1.02]' 
            : 'border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/60'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.docx"
          className="hidden"
          onChange={handleChange}
        />

        <div className="flex flex-col items-center z-10 pointer-events-none">
          {/* Fixed Size Icon Container */}
          <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700/50 shadow-inner group transition-transform duration-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`w-10 h-10 text-blue-500 transition-transform duration-500 ${file ? 'scale-110 text-green-400' : 'group-hover:scale-110'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {file ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              )}
            </svg>
          </div>

          <h3 className="text-xl font-medium text-white mb-2">
            {file ? "Resume Uploaded" : "Drop your resume here"}
          </h3>
          <p className="text-slate-400 text-sm font-light mb-6">
            Supported formats: PDF, DOCX (Max 10MB)
          </p>

          {file ? (
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-full shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-200">
                {file.name.length > 25 ? file.name.substring(0, 25) + "..." : file.name}
              </span>
            </div>
          ) : (
            <span className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-full text-sm font-medium transition-colors text-white pointer-events-auto cursor-pointer shadow-md">
              Browse Files
            </span>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          disabled={loading || !file}
          className={`relative overflow-hidden group px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] ${
            loading || !file 
              ? 'bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-700' 
              : 'bg-blue-600 hover:bg-blue-500 text-white hover:-translate-y-1 hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)]'
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-5 w-5 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Analyzing Document...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span>Initialize Analysis</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          )}
        </button>
      </div>
    </form>
  );
};

export default UploadForm;



