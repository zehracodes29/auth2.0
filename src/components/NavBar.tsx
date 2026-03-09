"use client";

import Link from "next/link";
import React from "react";

export default function NavBar() {
    const styles = `
    /* ─── Nav ─── */
    .global-nav {
      position: sticky;
      top: 0;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 52px;
      animation: fadeDown 0.6s cubic-bezier(0.22,1,0.36,1) both;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }
    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 11px;
      text-decoration: none;
    }
    .logo-icon {
      width: 40px; height: 40px;
      /* If var(--blue) is unavaiable from globals, use fallback. Assuming globals has it */
      background: var(--blue, #2563EB);
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 14px rgba(37,99,235,0.32);
      transition: transform 0.2s ease;
    }
    .logo:hover .logo-icon { transform: rotate(-6deg) scale(1.05); }
    .logo-name {
      font-family: 'DM Serif Display', serif;
      font-size: 22px;  
      color: var(--text, #1E293B);
      letter-spacing: -0.3px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2px;
      background: rgba(239,246,255,0.85);
      backdrop-filter: blur(10px);
      border: 1px solid var(--blue-pale, #eff6ff);
      border-radius: 100px;
      padding: 5px 8px;
    }
    .nav-links a {
      padding: 7px 16px;
      border-radius: 100px;
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      color: var(--text-muted, #64748B);
      transition: all 0.18s ease;
    }
    .nav-links a:hover { color: var(--blue, #2563EB); background: white; }
    
    .login-btn {
      background: var(--blue-dark, #1e40af) !important;
      color: white !important;
      font-weight: 600 !important;
    }
    .login-btn:hover { 
      background: var(--blue, #2563EB) !important; 
      color: white !important;
    }

    @media (max-width: 640px) {
      .global-nav { padding: 16px 22px; }
      .nav-links { display: none; }
    }
  `;

    return (
        <>
            <style>{styles}</style>
            <nav className="global-nav">
                <Link href="/" className="logo">
                    <div className="logo-icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path
                                d="M11 2C7.5 2 5 4.5 5 7.5c0 1.4.6 2.7 1.5 3.6L4.5 13c-.4.4-.4.9 0 1.2l1.3 1.3c.4.4.9.4 1.2 0l1.3-1.3c.7.3 1.6.5 2.5.5h1.4c.9 0 1.8-.2 2.5-.5l1.3 1.3c.4.4.9.4 1.2 0l1.3-1.3c.4-.4.4-.9 0-1.2l-2-2.1c.9-.9 1.5-2.2 1.5-3.6C17 4.5 14.5 2 11 2z"
                                fill="white"
                            />
                            <circle cx="11" cy="16.5" r="4" fill="white" />
                        </svg>
                    </div>
                    <span className="logo-name">SahiHai</span>
                </Link>

                <div className="nav-links">
                    <Link href="/about">About</Link>
                    <Link href="/services">Solutions</Link>
                    {/* <Link href="#">Pricing</Link> */}
                    <Link href="/contact">Contact</Link>
                    <Link href="/login" className="login-btn">Login</Link>

                </div>
            </nav>
        </>
    );
}
