export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 w-full py-12 px-8 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-screen-2xl mx-auto">
        
        <div className="text-on-surface-variant font-mono text-xs uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Sai Lakshman. Built with precision.
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
            <a 
              href="https://github.com/imSai-py" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary-container transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/sai-lakshman-390b08295/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://x.com/Sai_lak_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary-container transition-colors"
            >
              Twitter
            </a>
        </div>
        
        <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></span>
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter">System Status: Operational</span>
        </div>
        
      </div>
    </footer>
  )
}
