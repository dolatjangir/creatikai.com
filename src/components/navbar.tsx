"use client";

import React, { useState } from "react";
import { Home, ArrowRight, Sparkles, Menu, X } from "lucide-react";

// Define strict types for our navigation items
interface NavItem {
  label: string;
  icon?: React.ReactNode;
  href: string;
}

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: "Home", icon: <Home className="w-4 h-4" />, href: "#" },
    { label: "Tasks", href: "#" },
    { label: "Scan", href: "#" },
    { label: "Payments", href: "#" },
    { label: "Profile", href: "#" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 px-4 py-6 md:px-8 flex justify-center">
      {/* Main Navbar Container */}
      <nav className="w-full max-w-6xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-full border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-4 md:px-8 py-3 flex items-center justify-between transition-all duration-300 relative">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-2.5 group cursor-pointer select-none">
          <div className="relative flex items-center justify-center">
            {/* Custom SVG replicating the stylized "C" logo */}
            {/* <svg 
              className="w-8 h-8 text-indigo-600 transition-transform duration-300 group-hover:scale-105" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8C19.2 8 21.95 9.88 23.2 12.6" 
                stroke="currentColor" 
                strokeWidth="4.5" 
                strokeLinecap="round"
              />
              <circle cx="16" cy="16" r="2.5" fill="currentColor" />
            </svg> */}
            <img width={40} src="/creatikai-logo.png"/>
            {/* Top right tiny sparkle on Logo */}
            <Sparkles className="w-3 h-3 text-indigo-400 absolute -top-1 -right-1 opacity-80" />
          </div>
          
          <span className="font-bold text-lg md:text-xl tracking-tight text-slate-900 dark:text-white">
            Creatik <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">AI</span>
          </span>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-50/50 dark:bg-slate-900/30 p-1 rounded-full">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.label;
            return (
              <div key={item.label} className="flex items-center">
                <button
                  onClick={() => setActiveTab(item.label)}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full flex items-center gap-2 cursor-pointer outline-none
                    ${isActive 
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40 shadow-sm" 
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }
                  `}
                >
                  {item.icon && <span className="opacity-90">{item.icon}</span>}
                  <span>{item.label}</span>

                  {/* Active bottom accent bar */}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </button>

                {/* Subtle Vertical Divider between tabs (except after the last item) */}
                {index < navItems.length - 1 && (
                  <div className="h-4 w-[1px] bg-slate-200/80 dark:bg-slate-700 mx-1" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side: CTA Button + Desktop Sparkles */}
        <div className="hidden md:flex items-center relative pr-4">
          <button className="relative group overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm px-6 py-2.5 rounded-full flex items-center gap-2 shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-98 transition-all duration-200 cursor-pointer">
            <span>Do</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          {/* Exact reproduction of the floating pink/purple magical sparkles on the top right edge */}
          <div className="absolute -top-3 -right-2 pointer-events-none flex gap-1 select-none">
            <Sparkles className="w-4 h-4 text-purple-300/70 animate-pulse" />
            <Sparkles className="w-3 h-3 text-indigo-300/50 transform translate-y-3 -translate-x-1" />
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl p-5 md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200 z-40">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    setActiveTab(item.label);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left font-medium text-sm rounded-xl flex items-center gap-3 transition-colors
                    ${isActive 
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30" 
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    }
                  `}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="h-[1px] bg-slate-100 dark:bg-slate-800 my-1" />

          {/* Mobile CTA Button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/10">
            <span>Do</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}