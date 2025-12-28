import React from 'react';
import { ArrowRight, LayoutGrid, TrendingUp, MoreVertical } from 'lucide-react';

interface HeroProps {
  openContact: () => void;
  openProjects: () => void;
}

const Hero: React.FC<HeroProps> = ({ openContact, openProjects }) => {
  return (
    <section className="relative pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />
      
      {/* Background Gradient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-900/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-blob" />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-blob" 
        style={{ animationDelay: '2s' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-glass border border-border backdrop-blur-sm hover:bg-surface/50 transition-colors">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-blue-600 dark:text-blue-200 tracking-wide">NOW ACCEPTING NEW PROJECTS</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight text-main">
            We Build <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 animate-pulse-slow">
              Digital Products
            </span> <br className="hidden md:block" />
            That Scale
          </h1>

          <p className="text-sm md:text-lg text-muted max-w-xl leading-relaxed">
            Transforming ideas into high-performance web & mobile solutions for modern businesses. We design for the future, today.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={openContact}
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 hover:-translate-y-1"
            >
              Get a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={openProjects}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-main border border-border hover:bg-glass transition-all hover:-translate-y-1 bg-transparent"
            >
              <LayoutGrid size={20} />
              View Projects
            </button>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background bg-surface flex items-center justify-center overflow-hidden hover:translate-y-[-2px] transition-transform">
                   <img src={`https://picsum.photos/100/100?random=${i}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-main text-xs md:text-base">500+</p>
              <p className="text-[10px] md:text-sm text-muted">Projects Delivered</p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Elements */}
        <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
          <div className="absolute top-20 right-10 z-20 animate-float">
            <div className="bg-card/80 backdrop-blur-xl border border-border p-6 rounded-2xl w-64 shadow-2xl hover:border-purple-500/30 transition-colors">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <div className="flex items-center gap-2 text-green-500 dark:text-green-400 text-sm font-semibold mb-1">
                            <TrendingUp size={16} />
                            Growth
                        </div>
                        <div className="text-3xl font-bold text-main">+128%</div>
                    </div>
                </div>
                <div className="h-2 w-full bg-glass rounded-full overflow-hidden relative">
                    <div className="h-full bg-gradient-to-r from-green-400 to-emerald-600 w-[80%] rounded-full absolute top-0 left-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full animate-shimmer" />
                </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] z-10">
            <div className="bg-[#1E1E2E] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-float-simple hover:shadow-purple-900/20 transition-shadow duration-500 text-gray-300">
                <div className="bg-[#1E1E2E] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                    <div className="flex gap-4">
                        <div className="text-gray-600 select-none flex flex-col text-right">
                            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                        </div>
                        <div>
                            <p><span className="text-purple-400">const</span> <span className="text-yellow-400">future</span> = <span className="text-purple-400">await</span> <span className="text-blue-400">build</span>(<span className="text-green-400">'scale'</span>);</p>
                            <p className="text-gray-500">// Launching next big thing...</p>
                            <p><span className="text-purple-400">if</span> (<span className="text-blue-300">success</span>) {'{'}</p>
                            <p className="pl-4"><span className="text-blue-400">celebrate</span>();</p>
                            <p>{'}'}</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="absolute bottom-20 left-0 animate-float-delayed z-20">
            <div className="bg-card/90 backdrop-blur-md border border-border p-4 rounded-2xl w-56 shadow-2xl hover:border-purple-500/30 transition-colors text-main">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse-slow" />
                    <MoreVertical size={16} className="text-muted" />
                </div>
                <div className="space-y-2 mb-4">
                    <div className="h-2 w-3/4 bg-glass rounded-full" />
                    <div className="h-2 w-1/2 bg-glass rounded-full" />
                </div>
                <button 
                  onClick={openContact}
                  className="w-full py-2 bg-glass hover:bg-surface-hover border border-border rounded-lg text-xs font-medium transition-colors hover:text-purple-500 text-main bg-transparent"
                >
                    Connect
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;