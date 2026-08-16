import React from 'react';
import { Database, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { projects } from '../data/projects';
import { LinkedinIcon, GithubIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070C16] border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F7CFF] to-[#22D3EE] flex items-center justify-center text-slate-950">
                <Database className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-slate-100 tracking-tight">
                {personalInfo.displayName}
              </span>
            </div>

            <p className="text-sm font-semibold text-[#22D3EE] font-mono">
              {personalInfo.mainTitle}
            </p>

            <p className="text-xs text-slate-400 font-mono">
              Data Engineering • Data Analytics • Data Science
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-[#22D3EE] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-[#22D3EE] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personalInfo.links.email}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-[#22D3EE] transition-colors"
              aria-label="Contact Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-[#22D3EE] transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs font-mono text-slate-500">
          <p>© 2026 {personalInfo.displayName}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
