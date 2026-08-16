import React from 'react';
import { Database, FileCode, Table, Binary, Server, BarChart2, Code2, Layers, Globe, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap = {
  FileCode: FileCode,
  Database: Database,
  Table: Table,
  Binary: Binary,
  Server: Server,
  BarChart2: BarChart2,
  Code2: Code2,
  Layers: Layers,
  Globe: Globe
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0B1120] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[#22D3EE] text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Data Engineering tools and technologies prioritized based on my learning path and practical project work.
          </p>
        </div>

        {/* Skill Category Stack */}
        <div className="space-y-10">
          {skillCategories.map((group, idx) => {
            const isPrimaryGroup = group.isPrimary;

            return (
              <div
                key={group.category}
                className={`rounded-2xl p-6 sm:p-8 transition-all ${
                  isPrimaryGroup
                    ? 'bg-gradient-to-r from-[#111827] via-slate-900 to-cyan-950/40 border-2 border-cyan-500/40 shadow-xl shadow-cyan-950/30'
                    : 'bg-[#111827]/70 border border-slate-800'
                }`}
              >
                {/* Group Title Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${isPrimaryGroup ? 'bg-[#22D3EE] animate-pulse' : 'bg-slate-500'}`} />
                    <h3 className={`text-xl sm:text-2xl font-bold ${isPrimaryGroup ? 'text-slate-100' : 'text-slate-300'}`}>
                      {group.category}
                    </h3>
                  </div>

                  {isPrimaryGroup && (
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-[#22D3EE] text-xs font-mono font-bold uppercase tracking-wider border border-cyan-500/30">
                      Primary Priority Stack
                    </span>
                  )}
                </div>

                {/* Skill Cards Grid - Clean Cards without fake percentage bars */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {group.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || FileCode;

                    return (
                      <div
                        key={skill.name}
                        className={`p-4 rounded-xl flex flex-col items-center text-center transition-all duration-300 group hover:-translate-y-1 ${
                          isPrimaryGroup
                            ? 'bg-[#0B1120]/90 border border-cyan-500/25 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10'
                            : 'bg-[#0B1120]/60 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${
                          isPrimaryGroup 
                            ? 'bg-cyan-950/60 text-[#22D3EE] border border-cyan-500/30' 
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <span className="text-base font-bold text-slate-100 group-hover:text-[#22D3EE] transition-colors">
                          {skill.name}
                        </span>

                        <span className="text-[11px] font-mono text-slate-400 mt-1">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
