import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

/**
 * CustomDialog component
 * Accessible, custom dialogue modal with backdrop-blur and keyboard control.
 */
export default function CustomDialog({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-lg',
  className = '',
}) {
  const dialogRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      {/* Backdrop with smooth blur */}
      <div 
        className="fixed inset-0 bg-petrol-950/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Dialog Window */}
      <div 
        ref={dialogRef}
        className={`relative z-10 w-full ${maxWidth} bg-white rounded-3xl shadow-2xl border border-slate-200 transform-gpu animate-in fade-in zoom-in-95 duration-200 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dialog Header */}
        <div className="px-6 sm:px-8 pt-5 pb-4 border-b border-slate-100 flex items-start justify-between bg-slate-50/60 rounded-t-3xl">
          <div>
            {title && (
              <h3 id="dialog-title" className="font-heading text-xl font-bold tracking-tight text-slate-900">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors -mr-1"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Dialog Content */}
        <div className="p-6 sm:p-8 font-sans">
          {children}
        </div>
      </div>
    </div>
  );
}
