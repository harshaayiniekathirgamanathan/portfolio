import React from 'react';
import { BookOpen, Sparkles, Database, Workflow, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function CurrentlyLearning() {
  const learningTopics = personalInfo.currentlyLearning || [
    "Data Engineering",
    "ETL",
    "Data Pipelines",
    "SQL",
    "Python",
    "Data Processing",
    "Databases"
  ];

  return (
    <div className="pt-8 pb-4">
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-lg relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-[#22D3EE] shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                Currently Learning & Exploring
                <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-ping" />
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Actively expanding practical technical capabilities in Data Engineering concepts.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {learningTopics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs font-mono font-medium hover:border-cyan-400 hover:text-[#22D3EE] transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
