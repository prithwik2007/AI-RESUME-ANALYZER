const ResultCard = ({ title, content }) => {
  return (
    <div className="relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-slate-700/50 shadow-xl overflow-hidden group">
      
      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Decorative Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative z-10 flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          {title}
        </h2>
        
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
          Analysis Complete
        </div>
      </div>

      <div className="relative z-10 bg-slate-950/50 rounded-2xl p-6 border border-slate-800 shadow-inner overflow-x-auto">
        <pre className="whitespace-pre-wrap text-sm md:text-base leading-relaxed text-slate-300 font-mono">
          {content}
        </pre>
      </div>
    </div>
  );
};

export default ResultCard;


