import React from 'react';
import { GitFork, Cpu, Database, BarChart3, ArrowRight, Layers, Workflow } from 'lucide-react';
import { focusAreas } from '../data/personalInfo';
import CurrentlyLearning from './CurrentlyLearning';

const iconMap = {
  GitFork: GitFork,
  Cpu: Cpu,
  Database: Database,
  BarChart3: BarChart3
};

export default function DataEngineeringFocus() {
  return (
    <section id="focus" className="py-20 bg-[#0B1120] relative border-t border-slate-800/80 data-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-[#22D3EE] text-xs font-mono font-semibold">
            <Workflow className="w-3.5 h-3.5" />
            <span>Core Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Data Engineering <span className="text-gradient-de">Focus</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Key areas where I am actively building practical skills as an Information Technology undergraduate.
          </p>
        </div>

        {/* Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {focusAreas.map((area, idx) => {
            const IconComponent = iconMap[area.icon] || Database;
            const isCore = area.tag === 'Core Focus';

            return (
              <div
                key={area.id}
                className={`relative rounded-xl p-6 transition-all duration-300 group hover:-translate-y-1.5 ${
                  isCore 
                    ? 'bg-[#111827]/90 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10' 
                    : 'bg-[#111827]/60 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Core Focus Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isCore 
                      ? 'bg-gradient-to-br from-cyan-950 to-blue-950 text-[#22D3EE] border border-cyan-500/40' 
                      : 'bg-slate-800/80 text-slate-300 border border-slate-700'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    isCore 
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {area.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-[#22D3EE] transition-colors">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {area.description}
                </p>

                {/* Bottom indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>0{idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently Learning Section Component */}
        <CurrentlyLearning />

      </div>
    </section>
  );
}
