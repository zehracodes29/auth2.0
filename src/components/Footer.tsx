"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
    const styles = `
    .site-footer {
      background: var(--text); /* Dark blue/slate color based on screenshot */
      color: white;
      padding: 80px 24px 40px;
      margin-top: -60px; /* Slight overlap with illustration curve if desired */
      border-radius: 60px 60px 0 0;
      position: relative;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      gap: 40px;
    }

    .footer-brand {
      max-width: 320px;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      text-decoration: none;
      color: white;
    }
    
    .footer-logo-icon {
      width: 36px; height: 36px;
      background: var(--blue);
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
    }

    .footer-brand-name {
      font-family: 'DM Serif Display', serif;
      font-size: 22px;
    }

    .brand-desc {
      font-size: 15px;
      line-height: 1.6;
      color: rgba(255,255,255,0.7);
      margin-bottom: 30px;
    }

    .footer-btn {
      display: inline-flex;
      padding: 10px 24px;
      background: var(--blue);
      color: white;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.2s;
      margin-right: 12px;
    }
    .footer-btn:hover { background: var(--blue-dark); }
    
    .footer-btn-outline {
      display: inline-flex;
      padding: 10px 24px;
      background: transparent;
      color: rgba(255,255,255,0.8);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s;
    }
    .footer-btn-outline:hover {
      background: rgba(255,255,255,0.1);
      color: white;
    }

    .footer-column h4 {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba(255,255,255,0.4);
      margin-bottom: 24px;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .footer-links a {
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      font-size: 14px;
      transition: color 0.2s;
    }

    .footer-links a:hover {
      color: white;
    }

    .footer-bottom {
      max-width: 1200px;
      margin: 80px auto 0;
      padding-top: 30px;
      border-top: 1px solid rgba(255,255,255,0.1);
      display: flex;
      justify-content: flex-end;
      gap: 16px;
    }

    .social-icon {
      width: 36px; height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255,255,255,0.6);
      transition: all 0.2s;
      text-decoration: none;
    }

    .social-icon:hover {
      background: var(--blue);
      color: white;
      transform: translateY(-2px);
    }

    @media (max-width: 900px) {
      .footer-container {
        grid-template-columns: repeat(2, 1fr);
      }
      .footer-brand {
        grid-column: 1 / -1;
        margin-bottom: 20px;
      }
    }
    
    @media (max-width: 600px) {
      .footer-container {
        grid-template-columns: 1fr;
      }
      .footer-bottom {
        justify-content: center;
      }
    }
  `;

    return (
        <footer className="site-footer">
            <style>{styles}</style>
            <div className="footer-container">

                <div className="footer-brand">
                    <Link href="/" className="footer-logo">
                        <div className="footer-logo-icon">
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                                <path d="M11 2C7.5 2 5 4.5 5 7.5c0 1.4.6 2.7 1.5 3.6L4.5 13c-.4.4-.4.9 0 1.2l1.3 1.3c.4.4.9.4 1.2 0l1.3-1.3c.7.3 1.6.5 2.5.5h1.4c.9 0 1.8-.2 2.5-.5l1.3 1.3c.4.4.9.4 1.2 0l1.3-1.3c.4-.4.4-.9 0-1.2l-2-2.1c.9-.9 1.5-2.2 1.5-3.6C17 4.5 14.5 2 11 2z" fill="white" />
                                <circle cx="11" cy="16.5" r="4" fill="white" />
                            </svg>
                        </div>
                        <span className="footer-brand-name">SahiHai</span>
                    </Link>
                    <p className="brand-desc">
                        Smarter identity verification and compliance for high growth businesses.
                    </p>
                    <div>
                        <Link href="/signup" className="footer-btn">Start for free</Link>
                        <Link href="/services" className="footer-btn-outline">Learn More</Link>
                    </div>
                </div>

                <div className="footer-column">
                    <h4>Products</h4>
                    <ul className="footer-links">
                        <li><Link href="#">Identity</Link></li>
                        <li><Link href="/services">Screening</Link></li>
                        <li><Link href="#">Business</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Company</h4>
                    <ul className="footer-links">
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Insights</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Support</h4>
                    <ul className="footer-links">
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="#">Help Center</Link></li>
                        <li><Link href="#">Status</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Legal</h4>
                    <ul className="footer-links">
                        <li><Link href="#">Terms</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <a href="#" className="social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                </a>
                <a href="#" className="social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" /></svg>
                </a>
            </div>
        </footer>
    );
}
