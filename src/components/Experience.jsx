import React from 'react';
import { Users, Award, Calendar, Building2 } from 'lucide-react';
import { experienceList } from '../data/certificates';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0B1120] relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[#22D3EE] text-xs font-mono">
            <Users className="w-3.5 h-3.5" />
            <span>Extracurricular & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Experience & <span className="text-gradient">Leadership</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Developing teamwork, communication, and organizational capabilities beyond technical projects.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experienceList.map((exp, idx) => (
            <div
              key={exp.id}
              className="rounded-2xl bg-[#111827]/80 border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-all duration-300 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#22D3EE] shrink-0 mt-1">
                  <Building2 className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#22D3EE] font-semibold uppercase tracking-wider">
                    {exp.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {exp.organization}
                  </h3>
                  <p className="text-slate-300 font-medium text-base">
                    {exp.role}
                  </p>
                </div>
              </div>

              {/* Term Badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono shrink-0">
                <Calendar className="w-4 h-4 text-[#22D3EE]" />
                <span>{exp.term}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
