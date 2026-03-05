"use client";

import React from "react";
import Link from "next/link";

export default function VerificationTypes() {
    const styles = `
    .vtypes-section {
      padding: 100px 24px;
      background: var(--blue-light);
      margin: 40px 0;
    }

    .vtypes-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .vtypes-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .vtypes-title {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(32px, 4vw, 44px);
      color: var(--text);
      margin-bottom: 16px;
    }

    .vtypes-subtitle {
      font-size: 18px;
      color: var(--text-muted);
      max-width: 600px;
      margin: 0 auto;
    }

    .vtypes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 30px;
    }

    .vtype-card {
      background: var(--white);
      border-radius: 24px;
      padding: 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }

    .vtype-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 4px;
        background: var(--blue);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    .vtype-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(37,99,235,0.08);
    }

    .vtype-card:hover::before {
        transform: scaleX(1);
    }

    .vtype-icon-wrapper {
      width: 60px;
      height: 60px;
      background: var(--blue-pale);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      color: var(--blue);
    }

    .vtype-title {
      font-size: 22px;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 16px;
    }

    .vtype-desc {
      font-size: 15px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 30px;
      flex-grow: 1;
    }

    .vtype-list {
        list-style: none;
        padding: 0;
        margin: 0 0 30px 0;
    }

    .vtype-list li {
        font-size: 14px;
        color: var(--text);
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .vtype-list li::before {
        content: "✓";
        color: var(--success);
        font-weight: bold;
    }

    .vtype-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--blue);
        font-weight: 600;
        font-size: 15px;
        text-decoration: none;
        transition:ギャップ 0.2s ease;
    }

    .vtype-link:hover {
        gap: 12px;
    }

  `;

    return (
        <section className="vtypes-section">
            <style>{styles}</style>
            <div className="vtypes-container">
                <div className="vtypes-header">
                    <h2 className="vtypes-title">Comprehensive Verification</h2>
                    <p className="vtypes-subtitle">Everything you need to onboard users securely and comply with global regulations.</p>
                </div>

                <div className="vtypes-grid">
                    {/* Identity Verification */}
                    <div className="vtype-card">
                        <div className="vtype-icon-wrapper">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <h3 className="vtype-title">Identity Verification</h3>
                        <p className="vtype-desc">Verify individuals globally with AI-powered document mapping and biometric matching.</p>
                        <ul className="vtype-list">
                            <li>Aadhaar Verification</li>
                            <li>PAN Verification</li>
                            <li>Voter ID / DL Verification</li>
                            <li>Face Match / Liveness</li>
                        </ul>
                        <Link href="/services" className="vtype-link">Explore Identity <span>→</span></Link>
                    </div>

                    {/* Business Verification */}
                    <div className="vtype-card">
                        <div className="vtype-icon-wrapper">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="3" y1="9" x2="21" y2="9"></line>
                                <line x1="9" y1="21" x2="9" y2="9"></line>
                            </svg>
                        </div>
                        <h3 className="vtype-title">Business Verification (KYB)</h3>
                        <p className="vtype-desc">Onboard corporate clients securely by verifying company details and ultimate beneficial owners.</p>
                        <ul className="vtype-list">
                            <li>Company Registration Check</li>
                            <li>GST Verification</li>
                            <li>Director Verification</li>
                            <li>UBO Identification</li>
                        </ul>
                        <Link href="/services" className="vtype-link">Explore KYB <span>→</span></Link>
                    </div>

                    {/* Screening & Checks */}
                    <div className="vtype-card">
                        <div className="vtype-icon-wrapper">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <h3 className="vtype-title">AML & Screening</h3>
                        <p className="vtype-desc">Protect your business by screening individuals and entities against global sanctions and watchlists.</p>
                        <ul className="vtype-list">
                            <li>Sanctions Screening</li>
                            <li>PEP Screening</li>
                            <li>Adverse Media Checks</li>
                            <li>Court Record Checks</li>
                        </ul>
                        <Link href="/services" className="vtype-link">Explore AML <span>→</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
