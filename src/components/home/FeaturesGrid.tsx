"use client";

import React from "react";
import Link from "next/link";

export default function FeaturesGrid() {
    const styles = `
    .features-section {
      padding: 100px 24px;
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .features-header {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(32px, 4vw, 48px);
      color: var(--text);
      margin-bottom: 24px;
      line-height: 1.1;
    }

    .features-sub {
      font-size: 18px;
      color: var(--text-muted);
      max-width: 800px;
      margin: 0 auto 60px;
      line-height: 1.6;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .feature-card {
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 40px 30px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.02);
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(37,99,235,0.08);
      border-color: var(--blue-pale);
    }

    .f-icon {
      width: 64px;
      height: 64px;
      margin-bottom: 24px;
    }

    .f-title {
      font-size: 20px;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 16px;
    }

    .f-desc {
      font-size: 15px;
      color: var(--text-muted);
      margin-bottom: 30px;
      line-height: 1.5;
      flex-grow: 1;
    }

    .btn-outline {
      display: inline-block;
      padding: 12px 28px;
      background: transparent;
      color: var(--blue);
      border: 1.5px solid var(--blue);
      border-radius: 12px;
      font-weight: 600;
      font-size: 14px;
      text-decoration: none;
      transition: all 0.2s;
    }

    .btn-outline:hover {
      background: var(--blue);
      color: white;
      box-shadow: 0 4px 14px rgba(37,99,235,0.2);
    }
  `;

    return (
        <section className="features-section">
            <style>{styles}</style>
            <h2 className="features-header">A fresh approach to customer and business verification.</h2>
            <p className="features-sub">
                The right verification solution makes all your operations easier, more secure, and increases conversion rates. SahiHai's identity verification verifies your customers are who they claim to be, meeting compliance and stopping fraud.
            </p>

            <div className="features-grid">
                <div className="feature-card">
                    <svg className="f-icon" viewBox="0 0 64 64" fill="none">
                        <rect x="16" y="8" width="32" height="48" rx="4" stroke="var(--blue)" strokeWidth="2" />
                        <circle cx="32" cy="24" r="8" fill="var(--blue-light)" stroke="var(--blue)" strokeWidth="2" />
                        <line x1="24" y1="40" x2="40" y2="40" stroke="var(--blue)" strokeWidth="2" />
                        <line x1="24" y1="46" x2="32" y2="46" stroke="var(--blue)" strokeWidth="2" />
                    </svg>
                    <h3 className="f-title">Identity</h3>
                    <p className="f-desc">Verify people globally on the fly from anywhere.</p>
                    <Link href="/services" className="btn-outline">Learn More</Link>
                </div>

                <div className="feature-card">
                    <svg className="f-icon" viewBox="0 0 64 64" fill="none">
                        <path d="M32 12 L50 20 L50 36 C50 48 32 56 32 56 C32 56 14 48 14 36 L14 20 Z" fill="var(--blue-light)" stroke="var(--blue)" strokeWidth="2" />
                        <circle cx="32" cy="32" r="6" fill="var(--blue)" />
                        <path d="M22 32 C22 26 28 22 32 22 C36 22 42 26 42 32" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <h3 className="f-title">Screening</h3>
                    <p className="f-desc">Screen people and businesses against global watchlists & PEPs.</p>
                    <Link href="/services" className="btn-outline">Learn More</Link>
                </div>

                <div className="feature-card">
                    <svg className="f-icon" viewBox="0 0 64 64" fill="none">
                        <rect x="12" y="24" width="24" height="32" fill="var(--blue-light)" stroke="var(--blue)" strokeWidth="2" />
                        <rect x="28" y="12" width="24" height="44" fill="white" stroke="var(--blue)" strokeWidth="2" />
                        <rect x="34" y="20" width="4" height="4" fill="var(--blue)" />
                        <rect x="42" y="20" width="4" height="4" fill="var(--blue)" />
                        <rect x="34" y="28" width="4" height="4" fill="var(--blue)" />
                        <rect x="42" y="28" width="4" height="4" fill="var(--blue)" />
                        <rect x="18" y="32" width="4" height="4" fill="var(--blue)" />
                        <rect x="18" y="40" width="4" height="4" fill="var(--blue)" />
                        <rect x="34" y="44" width="12" height="12" stroke="var(--blue)" strokeWidth="2" />
                    </svg>
                    <h3 className="f-title">Business</h3>
                    <p className="f-desc">Verify businesses securely and eliminate manual reviews.</p>
                    <Link href="/services" className="btn-outline">Learn More</Link>
                </div>
            </div>
        </section>
    );
}
