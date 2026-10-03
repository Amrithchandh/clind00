import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * CustomButton component
 * High-performance, animated interactive button with variants and loading state.
 */
export default function CustomButton({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'brand' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-sans font-semibold transition-all duration-200 focus:outline-none select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
    md: "text-xs font-bold font-mono tracking-wider uppercase px-5 py-2.5 rounded-xl gap-2",
    lg: "text-sm font-semibold px-7 py-3.5 rounded-xl gap-2.5 shadow-md",
  };

  const variantStyles = {
    primary: "bg-petrol-900 hover:bg-petrol-800 text-white shadow-sm hover:shadow-md border border-petrol-800",
    secondary: "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-2xs hover:border-slate-400",
    brand: "bg-brand-600 hover:bg-brand-500 text-white shadow-sm hover:shadow-brand-500/20 border border-brand-500",
    outline: "bg-transparent hover:bg-slate-100 text-slate-700 border border-slate-300",
    ghost: "bg-transparent hover:bg-slate-100/70 text-slate-700 border border-transparent",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
      {!loading && Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
}
