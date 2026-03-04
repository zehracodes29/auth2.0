"use client";

import React from "react";
import Link from "next/link";

export default function LeftRightSection() {
    const styles = `
    .split-section {
      padding: 100px 24px;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 60px;
    }

    .split-content {
      flex: 1;
      max-width: 500px;
    }

    .split-visual {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .split-header {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(32px, 4vw, 44px);
      line-height: 1.1;
      color: var(--text);
      margin-bottom: 24px;
      letter-spacing: -0.5px;
    }

    .split-desc {
      font-size: 18px;
      line-height: 1.6;
      color: var(--text-muted);
      margin-bottom: 36px;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
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

    .btn-primary:hover {
      background: var(--blue-dark);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(37,99,235,0.35);
    }

    /* Abstract Illustration Graphic */
    .abstract-graphic {
      width: 100%;
      max-width: 500px;
      height: 400px;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg"><circle cx="250" cy="200" r="150" fill="%23DBEAFE"/><rect x="180" y="150" width="140" height="100" rx="16" fill="white" stroke="%232563EB" stroke-width="4"/><path d="M220 180h60M220 200h40" stroke="%2364748B" stroke-width="4" stroke-linecap="round"/><circle cx="280" cy="200" r="4" fill="%2310B981"/><path d="M100 300 Q250 100 400 300" stroke="%232563EB" stroke-width="2" fill="none" stroke-dasharray="4 4"/></svg>') center/contain no-repeat;
    }

    @media (max-width: 900px) {
      .split-section {
        flex-direction: column;
        text-align: center;
        gap: 40px;
        padding: 60px 24px;
      }
      .split-content { max-width: 100%; }
    }
  `;

    return (
        <section className="split-section">
            <style>{styles}</style>
            <div className="split-content">
                <h2 className="split-header">High growth problems, easily solved.</h2>
                <p className="split-desc">
                    SahiHai is tailored for high-growth businesses. Providing identity verification with no compromise options, fast response times, reliable data, and battle-tested infrastructure.
                </p>
                <Link href="/contact" className="btn-primary">Contact Sales</Link>
            </div>
            <div className="split-visual">
                <div className="abstract-graphic" />
            </div>
        </section>
    );
}
