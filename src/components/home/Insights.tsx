"use client";

import React from "react";
import Link from "next/link";

export default function Insights() {
  const styles = `
    .insights-section {
      padding: 100px 24px;
      background: var(--background);
      text-align: center;
    }

    .insights-header {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(32px, 4vw, 40px);
      color: var(--text);
      margin-bottom: 12px;
    }

    .insights-sub {
      font-size: 16px;
      color: var(--text-muted);
      margin-bottom: 60px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .insights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto 50px;
    }

    .insight-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 20px;
      overflow: hidden;
      text-align: left;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 20px rgba(0,0,0,0.02);
      display: flex;
      flex-direction: column;
    }

    .insight-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(37,99,235,0.08);
      border-color: var(--blue-pale);
    }

    .card-visual {
      background: var(--blue-light);
      height: 220px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px;
      position: relative;
      border-bottom: 1px solid var(--blue-pale);
    }
    
    .card-content {
      padding: 30px;
      background: white;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .card-label {
      color: var(--blue);
      font-size: 12.5px;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      font-weight: 700;
      margin-bottom: 14px;
      display: inline-block;
    }

    .card-title {
      color: var(--text);
      font-size: 20px;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 16px;
      letter-spacing: -0.3px;
    }

    .btn-solid {
      display: inline-flex;
      align-items: center;
      padding: 14px 32px;
      background: var(--blue);
      color: white;
      border-radius: 12px;
      font-weight: 600;
      font-size: 15px;
      text-decoration: none;
      transition: all 0.2s;
      box-shadow: 0 4px 14px rgba(37,99,235,0.25);
    }
    
    .btn-solid:hover {
      background: var(--blue-dark);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(37,99,235,0.35);
    }
  `;

  return (
    <section className="insights-section">
      <style>{styles}</style>
      <h2 className="insights-header">SahiHai Insights</h2>
      <p className="insights-sub">Discover our most popular SahiHai resources and learn how to scale your verification process while staying compliant.</p>

      <div className="insights-grid">
        {/* Card 1 */}
        <Link href="#" style={{ textDecoration: 'none' }}>
          <div className="insight-card">
            <div className="card-visual">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <rect x="25" y="25" width="50" height="50" rx="12" fill="white" stroke="var(--blue)" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="14" fill="var(--blue-pale)" stroke="var(--blue)" strokeWidth="2" />
                <path d="M44 50l4 4 8-8" stroke="var(--blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="card-content">
              <span className="card-label">Success Story</span>
              <h3 className="card-title">How we helped scale onboarding to 10M+ users seamlessly.</h3>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="#" style={{ textDecoration: 'none' }}>
          <div className="insight-card">
            <div className="card-visual">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <rect x="20" y="30" width="60" height="40" rx="8" fill="white" stroke="var(--blue)" strokeWidth="2" />
                <rect x="30" y="40" width="16" height="20" rx="4" fill="var(--blue-pale)" />
                <line x1="55" y1="45" x2="70" y2="45" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" />
                <line x1="55" y1="55" x2="65" y2="55" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="card-content">
              <span className="card-label">Guide</span>
              <h3 className="card-title">5 Reasons why it's time to upgrade your KYC solution.</h3>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link href="#" style={{ textDecoration: 'none' }}>
          <div className="insight-card">
            <div className="card-visual">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M30 20 h40 a8 8 0 0 1 8 8 v44 a8 8 0 0 1 -8 8 h-40 a8 8 0 0 1 -8 -8 v-44 a8 8 0 0 1 8 -8 z" fill="white" stroke="var(--blue)" strokeWidth="2" />
                <circle cx="50" cy="40" r="12" fill="var(--blue-pale)" />
                <path d="M40 65 h20 M45 75 h10" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="card-content">
              <span className="card-label">Report</span>
              <h3 className="card-title">2026 Trends in Identity Verification & Fraud Prevention.</h3>
            </div>
          </div>
        </Link>
      </div>

      <Link href="/services" className="btn-solid">See All Posts</Link>
    </section>
  );
}
