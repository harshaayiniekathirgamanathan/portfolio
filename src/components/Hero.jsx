import React from 'react';
import { ArrowRight, Database, Mail, Sparkles, Terminal, Cpu, Workflow } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import profilePhoto from '../assets/profile-photo.jpg';
import { LinkedinIcon, GithubIcon } from './Icons';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center data-grid-pattern overflow-hidden">
      
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium shadow-md shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <Terminal className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>IT Undergraduate</span>
            </div>

            {/* Main Greeting Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
                Hi, I'm <span className="text-gradient">{personalInfo.displayName}</span>
              </h1>
              
              {/* Main Professional Title */}
              <div className="pt-2">
                <div className="inline-block relative">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#4F7CFF] to-cyan-300 font-mono tracking-tight">
                    {personalInfo.mainTitle}
                  </h2>
                  <div className="h-1 w-full bg-gradient-to-r from-[#22D3EE] to-[#4F7CFF] rounded-full mt-1.5 opacity-80" />
                </div>
              </div>
            </div>

            {/* Supporting & Secondary Lines */}
            <div className="space-y-3 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-200">
                {personalInfo.heroSubtitle}
              </p>
              <p className="text-sm sm:text-base text-slate-400 flex items-center gap-2 font-mono">
                <Workflow className="w-4 h-4 text-[#22D3EE] shrink-0" />
                <span>{personalInfo.heroSecondaryLine}</span>
              </p>
            </div>

            {/* Clean Supporting Areas Tags */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3.5 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-[#22D3EE] font-semibold flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" />
                Data Engineering
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400">
                Data Analytics
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400">
                Data Science
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4F7CFF] to-[#22D3EE] text-slate-950 font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 text-slate-200 font-semibold text-sm hover:text-white border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all shadow-md hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-4 h-4 text-[#22D3EE]" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Direct Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <a 
                href={personalInfo.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#22D3EE] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a 
                href={personalInfo.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#22D3EE] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a 
                href={`mailto:${personalInfo.links.email}`}
                className="flex items-center gap-1.5 hover:text-[#22D3EE] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>{personalInfo.links.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Uploaded Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[320px] mx-auto lg:mr-4">
              
              {/* Outer decorative ring / glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#22D3EE] via-[#4F7CFF] to-cyan-500 opacity-40 blur-xl animate-pulse-glow" />
              
              {/* Image Card Frame */}
              <div className="relative rounded-2xl bg-[#111827]/90 p-3 border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 backdrop-blur-md">
                
                {/* Photo container with exact aspect ratio & thin glow border */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] max-h-[380px] w-full border border-slate-700/80 group">
                  <img
                    src={profilePhoto}
                    alt="Harshaayinie Kathirgamanathan"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent opacity-50" />
                </div>

                {/* Floating Academic Status Badge */}
                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-[#0B1120]/95 border border-blue-500/40 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                  <Cpu className="w-3 h-3 text-[#4F7CFF]" />
                  <span className="text-[11px] font-mono font-semibold text-slate-200">
                    BSc IT • 2nd Year
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
