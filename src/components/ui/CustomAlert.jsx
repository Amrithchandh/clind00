import React from 'react';
import { CheckCircle2, AlertTriangle, Info, XCircle, X } from 'lucide-react';

/**
 * CustomAlert component
 * Custom dialogue/alert box with status colors, icons, and dismissal.
 */
export default function CustomAlert({
  type = 'info', // 'success' | 'warning' | 'error' | 'info'
  title,
  children,
  onClose,
  className = '',
}) {
  const styles = {
    success: {
      wrapper: "bg-emerald-50/90 border-emerald-200 text-emerald-950",
      icon: CheckCircle2,
      iconColor: "text-emerald-600",
      titleColor: "text-emerald-900",
    },
    warning: {
      wrapper: "bg-amber-50/90 border-amber-200 text-amber-950",
      icon: AlertTriangle,
      iconColor: "text-amber-600",
      titleColor: "text-amber-900",
    },
    error: {
      wrapper: "bg-rose-50/90 border-rose-200 text-rose-950",
      icon: XCircle,
      iconColor: "text-rose-600",
      titleColor: "text-rose-900",
    },
    info: {
      wrapper: "bg-sky-50/90 border-sky-200 text-sky-950",
      icon: Info,
      iconColor: "text-sky-600",
      titleColor: "text-sky-900",
    },
  };

  const currentStyle = styles[type] || styles.info;
  const Icon = currentStyle.icon;

  return (
    <div
      role="alert"
      className={`rounded-xl border p-4 shadow-sm flex items-start gap-3 transition-all duration-200 ${currentStyle.wrapper} ${className}`}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${currentStyle.iconColor}`} />
      
      <div className="flex-1 text-left">
        {title && (
          <h4 className={`text-xs font-bold font-display tracking-wide uppercase mb-1 ${currentStyle.titleColor}`}>
            {title}
          </h4>
        )}
        <div className="text-xs leading-relaxed opacity-90">
          {children}
        </div>
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 p-1 -mr-1 -mt-1 rounded-md transition-colors"
          aria-label="Dismiss alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
