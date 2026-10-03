import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

/**
 * CustomSelect component
 * Accessible, custom-styled dropdown replacing native select elements.
 */
export default function CustomSelect({
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  disabled = false,
  className = "",
  size = "md", // 'sm' | 'md'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Normalize options to object format { value, label }
  const formattedOptions = options.map((opt) => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt };
    }
    return opt;
  });

  const selectedOption = formattedOptions.find((opt) => opt.value === value);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (disabled) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currentIndex = formattedOptions.findIndex((opt) => opt.value === value);
        const nextIndex = (currentIndex + 1) % formattedOptions.length;
        onChange(formattedOptions[nextIndex].value);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currentIndex = formattedOptions.findIndex((opt) => opt.value === value);
        const prevIndex = (currentIndex - 1 + formattedOptions.length) % formattedOptions.length;
        onChange(formattedOptions[prevIndex].value);
      }
    }
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs rounded-lg",
    md: "px-3.5 py-2.5 text-xs rounded-lg",
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between text-left bg-white border transition-all duration-150 ${sizeClasses[size]} ${
          isOpen
            ? 'border-brand-500 ring-2 ring-brand-500/20 shadow-sm'
            : 'border-slate-300 hover:border-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'
        } ${disabled ? 'opacity-50 cursor-not-allowed bg-slate-50' : 'cursor-pointer'}`}
      >
        <span className={`truncate ${selectedOption ? 'text-slate-900 font-medium' : 'text-slate-400'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ml-2 ${
            isOpen ? 'rotate-180 text-brand-600' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu Popup */}
      {isOpen && (
        <div 
          role="listbox"
          className="absolute z-50 left-0 right-0 mt-1.5 bg-white border border-slate-200/90 rounded-xl shadow-xl overflow-hidden py-1.5 animate-in fade-in zoom-in-95 duration-150 max-h-60 overflow-y-auto"
        >
          {formattedOptions.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`px-3.5 py-2 text-xs flex items-center justify-between cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-brand-50 text-brand-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex flex-col">
                  <span>{opt.label}</span>
                  {opt.subtitle && (
                    <span className="text-[10px] text-slate-400 font-normal mt-0.5">{opt.subtitle}</span>
                  )}
                </div>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-brand-600 flex-shrink-0 ml-2" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
