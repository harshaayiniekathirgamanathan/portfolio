import React from 'react';
import { Mail, Download, Phone, Globe, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { LinkedinIcon, GithubIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0B1120] relative border-t border-slate-800/80 data-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Header */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#111827] via-slate-900 to-cyan-950/60 border border-cyan-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden text-center">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[#22D3EE] text-xs font-mono font-bold">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              Let's <span className="text-gradient">Connect</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              I'm interested in learning, building, collaborating, and exploring opportunities in Data Engineering and related areas.
            </p>

            {/* Contact Grid Links */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* LinkedIn */}
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 text-slate-200 hover:text-white flex flex-col items-center justify-center gap-2 group transition-all hover:-translate-y-1 shadow-md"
              >
                <LinkedinIcon className="w-6 h-6 text-[#22D3EE] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-bold text-[#22D3EE]">LinkedIn</span>
                <span className="text-[11px] text-slate-400 font-mono truncate max-w-full">
                  Harshaayinie Kathirgamanathan
                </span>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white flex flex-col items-center justify-center gap-2 group transition-all hover:-translate-y-1 shadow-md"
              >
                <GithubIcon className="w-6 h-6 text-[#22D3EE] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-bold text-slate-200">GitHub</span>
                <span className="text-[11px] text-slate-400 font-mono truncate max-w-full">
                  github.com/harshaayiniekathirgamanathan
                </span>
              </a>

              {/* Live Portfolio Link */}
              <a
                href={personalInfo.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white flex flex-col items-center justify-center gap-2 group transition-all hover:-translate-y-1 shadow-md"
              >
                <Globe className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-bold text-slate-200">Portfolio URL</span>
                <span className="text-[11px] text-cyan-300 font-mono truncate max-w-full">
                  portfolio-nu-one-dyspfrrf4q.vercel.app
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.links.email}`}
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white flex flex-col items-center justify-center gap-2 group transition-all hover:-translate-y-1 shadow-md"
              >
                <Mail className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-bold text-slate-200">Email</span>
                <span className="text-[11px] text-cyan-300 font-mono truncate max-w-full">
                  {personalInfo.links.email}
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.links.phone.replace(/\s+/g, '')}`}
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white flex flex-col items-center justify-center gap-2 group transition-all hover:-translate-y-1 shadow-md sm:col-span-2 lg:col-span-2"
              >
                <Phone className="w-6 h-6 text-[#22D3EE] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-bold text-slate-200">Phone</span>
                <span className="text-[11px] text-slate-300 font-mono">
                  {personalInfo.links.phone}
                </span>
              </a>

            </div>

            {/* CV Download CTA */}
            <div className="pt-6">
              <a
                href={personalInfo.links.cvPath}
                download="Harshaayinie-K-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#4F7CFF] to-[#22D3EE] text-slate-950 font-bold text-base hover:opacity-95 transition-all shadow-xl shadow-cyan-500/25 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
