import React from 'react';
import { Database, GraduationCap, Compass, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0B1120] relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>Background & Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-16 bg-[#22D3EE] mx-auto rounded-full" />
        </div>

        {/* About Content Card with Glassmorphism */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden shadow-xl">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            
            {/* Paragraph 1 */}
            <p className="flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-[#22D3EE] shrink-0 mt-1" />
              <span>
                I am a second-year BSc (Hons) in Information Technology undergraduate at the University of Kelaniya, currently studying in the Department of Industrial Management, Faculty of Science.
              </span>
            </p>

            {/* Paragraph 2 - Strongest Visual Emphasis on Data Engineering */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/50 via-slate-900 to-blue-950/40 border-l-4 border-l-[#22D3EE] border-t border-r border-b border-cyan-500/20 shadow-md">
              <div className="flex items-center gap-2 text-[#22D3EE] font-mono text-xs uppercase font-bold tracking-wider mb-2">
                <Database className="w-4 h-4" />
                <span>Primary Career Interest</span>
              </div>
              <p className="text-slate-100 font-medium">
                My main career interest is <strong className="text-[#22D3EE] font-semibold">Data Engineering</strong>, with a particular interest in how data can be collected, processed, transformed, stored, and made available for analysis and decision-making.
              </p>
            </div>

            {/* Paragraph 3 */}
            <p>
              Through academic and personal projects, I am developing my knowledge of data, databases, ETL processes, analytics, and software development. I am also interested in Data Analytics and Data Science as related areas that strengthen my understanding of working with data.
            </p>

            {/* Paragraph 4 */}
            <p className="text-slate-200 font-medium pt-2 border-t border-slate-800/80">
              My goal is to continue developing practical Data Engineering skills and build a strong foundation for a future career in the field.
            </p>

          </div>

          {/* Quick Academic Meta Badges */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
              <span>University of Kelaniya</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4F7CFF]" />
              <span>Faculty of Science</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Dept of Industrial Management</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
