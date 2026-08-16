import React, { useState } from 'react';
import { Award, FileCheck, Calendar, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { certificatesList } from '../data/certificates';
import CertificateModal from './CertificateModal';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 bg-[#0B1120] relative border-t border-slate-800/80 data-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[#22D3EE] text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Certifications & <span className="text-gradient">Learning</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Formal credentials and academic certificates verifying technical foundational knowledge.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {certificatesList.map((cert, idx) => {
            const isPrimary = cert.isPrimary;

            return (
              <div
                key={cert.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPrimary
                    ? 'bg-gradient-to-br from-[#111827] via-slate-900 to-cyan-950/50 border-2 border-cyan-500/50 shadow-xl shadow-cyan-950/40 lg:scale-105'
                    : 'bg-[#111827]/70 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-md font-mono text-xs font-bold ${
                      isPrimary 
                        ? 'bg-cyan-500/20 text-[#22D3EE] border border-cyan-500/30' 
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      0{idx + 1} — {cert.badge}
                    </span>

                    {isPrimary && (
                      <span className="text-[10px] uppercase font-mono font-extrabold text-cyan-300 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-400/40">
                        Primary Credential
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${isPrimary ? 'text-slate-100' : 'text-slate-200'}`}>
                    {cert.title}
                  </h3>

                  {/* Issuer details */}
                  <div className="space-y-1 text-sm font-medium text-slate-300 mb-4">
                    <p className="text-[#22D3EE] font-semibold flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      {cert.issuer} {cert.platform && `• ${cert.platform}`}
                    </p>
                    {cert.department && (
                      <p className="text-xs text-slate-400">{cert.department}</p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Footer date & Modal trigger */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-[#22D3EE]" />
                    <span>{cert.completedDate || cert.issuedDate || cert.term}</span>
                  </div>

                  {cert.pdfUrl && (
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1 text-[#22D3EE] hover:underline font-semibold"
                    >
                      <span>View PDF</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Certificate Modal Viewer */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
