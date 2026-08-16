import React from 'react';
import { GraduationCap, Building, Calendar, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Education() {
  const { education } = personalInfo;

  return (
    <section id="education" className="py-20 bg-[#0B1120] relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[#22D3EE] text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education <span className="text-gradient">& Studies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Undergraduate academic degree program at the University of Kelaniya.
          </p>
        </div>

        {/* Main Education Card */}
        <div className="relative rounded-2xl bg-[#111827] border border-cyan-500/30 p-8 sm:p-10 shadow-2xl overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-950 to-blue-950 border border-cyan-500/40 flex items-center justify-center text-[#22D3EE] shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono text-[#22D3EE] font-bold uppercase tracking-wider">
                  Degree Program
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-0.5">
                  {education.degree}
                </h3>
                <p className="text-lg text-slate-300 font-semibold mt-1">
                  {education.university}
                </p>
              </div>
            </div>

            {/* Academic Level Badge */}
            <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
              <span className="px-4 py-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-[#22D3EE] font-mono text-sm font-bold shadow-md">
                Current: {education.currentLevel}
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#22D3EE]" />
                Expected Graduation: {education.expectedGraduation}
              </span>
            </div>

          </div>

          {/* Department & Faculty Info */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300 text-sm">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <Building className="w-5 h-5 text-[#22D3EE] shrink-0" />
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase">Faculty</p>
                <p className="font-semibold text-slate-200">{education.faculty}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <BookOpen className="w-5 h-5 text-[#4F7CFF] shrink-0" />
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase">Department</p>
                <p className="font-semibold text-slate-200">{education.department}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
