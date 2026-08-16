import React from 'react';
import { ExternalLink, Database, Workflow, Clock, CheckCircle, ChevronRight, Layers, Sparkles, Cpu } from 'lucide-react';
import { projects } from '../data/projects';
import { GithubIcon } from './Icons';

export default function Projects() {
  const featuredProject = projects.find(p => p.id === 'ecommerce-etl');
  const healthcareProject = projects.find(p => p.id === 'ai-healthcare-platform');
  const webProject = projects.find(p => p.id === 'task-management');

  return (
    <section id="projects" className="py-20 bg-[#0B1120] relative border-t border-slate-800/80 data-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-[#22D3EE] text-xs font-mono font-semibold">
            <Workflow className="w-3.5 h-3.5" />
            <span>Practical Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Developing practical skills in data engineering, ETL data pipelines, analytics, and software development.
          </p>
        </div>

        {/* 01. PRIMARY FEATURED PROJECT: E-commerce Sales Data Pipeline */}
        {featuredProject && (
          <div className="mb-12">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#111827] via-[#0F172A] to-cyan-950/50 border-2 border-cyan-500/50 p-6 sm:p-10 shadow-2xl shadow-cyan-950/50 overflow-hidden group">
              
              {/* Top Accent glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Badges & Header info */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-lg bg-cyan-950 text-[#22D3EE] border border-cyan-400/50 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    {featuredProject.badge}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 font-mono text-xs font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {featuredProject.status}
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-800/60 font-semibold">
                  ★ Primary Data Engineering Project
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 mb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 group-hover:text-[#22D3EE] transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-slate-300 text-base sm:text-lg max-w-4xl leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>

              {/* Pipeline Architecture Diagram Flow */}
              {featuredProject.pipelineFlow && (
                <div className="mb-8 p-5 rounded-2xl bg-[#0B1120]/90 border border-cyan-500/30">
                  <p className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-[#22D3EE]" />
                    ETL Pipeline Flow Architecture
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
                    {featuredProject.pipelineFlow.map((step, idx) => (
                      <React.Fragment key={step}>
                        <div className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-medium hover:border-cyan-400 transition-colors">
                          {step}
                        </div>
                        {idx < featuredProject.pipelineFlow.length - 1 && (
                          <ChevronRight className="w-4 h-4 text-[#22D3EE] shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Power BI Dashboard Screenshot */}
              {featuredProject.screenshot && (
                <div className="mb-8 rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#0B1120] shadow-2xl">
                  <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-300 font-semibold flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
                      {featuredProject.screenshotCaption}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                      Power BI Dashboard
                    </span>
                  </div>
                  <div className="relative group max-h-[420px] overflow-hidden">
                    <img
                      src={featuredProject.screenshot}
                      alt="E-commerce Sales Dashboard Screenshot"
                      className="w-full h-auto object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>
              )}

              {/* Highlights & Key Features */}
              <div className="mb-8">
                <h4 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider mb-3">
                  Technical Highlights & Pipeline Concepts
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
                  {featuredProject.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {featuredProject.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4F7CFF] to-[#22D3EE] text-slate-950 font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              </div>

            </div>
          </div>
        )}

        {/* DATA ENGINEERING & SUPPORTING PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 02. AI-POWERED HEALTHCARE DATA PLATFORM (DATA ENGINEERING / AI) */}
          {healthcareProject && (
            <div className="rounded-2xl bg-gradient-to-br from-[#111827] to-[#0F172A] border border-cyan-500/30 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 shadow-xl">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-cyan-950 text-[#22D3EE] border border-cyan-500/40 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    {healthcareProject.badge}
                  </span>

                  <span className="px-3 py-1 rounded-lg bg-amber-950/80 text-amber-300 border border-amber-500/40 font-mono text-xs font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {healthcareProject.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 hover:text-[#22D3EE] transition-colors">
                  {healthcareProject.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {healthcareProject.description}
                </p>

                {/* Pipeline Flow */}
                {healthcareProject.pipelineFlow && (
                  <div className="mb-6 p-3.5 rounded-xl bg-[#0B1120]/90 border border-cyan-500/20">
                    <p className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider mb-2">
                      Healthcare ETL Architecture (In Progress)
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-300">
                      {healthcareProject.pipelineFlow.map((step, sIdx) => (
                        <React.Fragment key={step}>
                          <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700">
                            {step}
                          </span>
                          {sIdx < healthcareProject.pipelineFlow.length - 1 && (
                            <span className="text-slate-500">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                <div className="mb-6">
                  <ul className="space-y-2 text-xs text-slate-300">
                    {healthcareProject.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {healthcareProject.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={healthcareProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#22D3EE]" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          )}

          {/* 03. TASK MANAGEMENT SYSTEM (SUPPORTING WEB PROJECT) */}
          {webProject && (
            <div className="rounded-2xl bg-[#111827]/70 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-md">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-mono text-xs font-semibold">
                    {webProject.badge}
                  </span>

                  <span className="px-3 py-1 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 font-mono text-xs font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {webProject.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 hover:text-slate-200 transition-colors">
                  {webProject.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {webProject.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <ul className="space-y-2 text-xs text-slate-400">
                    {webProject.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {webProject.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                <a
                  href={webProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                  <span>View on GitHub</span>
                </a>

                {webProject.liveDemo && (
                  <a
                    href={webProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#22D3EE]" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
