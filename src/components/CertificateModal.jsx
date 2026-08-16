import React from 'react';
import { X, ExternalLink, Download, Award } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#111827] rounded-2xl border border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0B1120]">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-[#22D3EE]" />
            <div>
              <h3 className="text-base font-bold text-slate-100">{cert.title}</h3>
              <p className="text-xs font-mono text-slate-400">{cert.issuer} • {cert.completedDate}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / PDF Viewer */}
        <div className="p-4 flex-1 overflow-auto min-h-[400px] bg-slate-950 flex items-center justify-center">
          {cert.pdfUrl ? (
            <iframe
              src={cert.pdfUrl}
              title={cert.title}
              className="w-full h-full min-h-[500px] rounded-lg border border-slate-800"
            />
          ) : (
            <div className="text-center p-8 text-slate-400">
              <p className="text-sm font-mono">Certificate preview document attached to records.</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#0B1120] flex items-center justify-between">
          <span className="text-xs font-mono text-cyan-400">{cert.badge}</span>
          
          {cert.pdfUrl && (
            <a
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#4F7CFF] to-[#22D3EE] text-slate-950 text-xs font-bold hover:opacity-95"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open PDF in New Tab</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
