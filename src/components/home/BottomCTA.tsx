"use client";

import React from "react";
import Link from "next/link";

export default function BottomCTA() {
    const styles = `
    .bottom-cta-section {
      padding: 120px 24px 160px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .cta-illustration {
      width: 100%;
      max-width: 600px;
      height: 300px;
      margin-bottom: 40px;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="100" fill="%23DBEAFE"/><circle cx="450" cy="100" r="80" fill="%23FCE7F3"/><rect x="250" y="50" width="100" height="200" rx="20" fill="white" stroke="%232563EB" stroke-width="4"/><path d="M270 80h60M270 110h40M270 140h50" stroke="%2394A3B8" stroke-width="4" stroke-linecap="round"/><circle cx="300" cy="200" r="16" fill="%2310B981"/><path d="M294 200l4 4 8-8" stroke="white" stroke-width="3" stroke-linecap="round" fill="none"/></svg>') center/contain no-repeat;
    }

    .cta-heading {
      font-size: 24px;
      color: var(--text);
      max-width: 600px;
      margin: 0 auto 32px;
      line-height: 1.5;
      font-weight: 500;
    }

    .btn-cta {
      display: inline-flex;
      padding: 16px 40px;
      background: var(--blue);
      color: white;
      border-radius: 12px;
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;
      transition: all 0.2s;
      box-shadow: 0 4px 20px rgba(37,99,235,0.3);
    }
    
    .btn-cta:hover {
      background: var(--blue-dark);
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(37,99,235,0.4);
    }
  `;

    return (
        <section className="bottom-cta-section">
            <style>{styles}</style>
            <div className="cta-illustration" />
            <h2 className="cta-heading">
                Identity verification, sanction screening, and business verification made easy.
            </h2>
            <Link href="/signup" className="btn-cta">Get Started</Link>
        </section>
    );
}
