"use client";

import React from "react";
import Link from "next/link";

export default function RightLeftSection() {
    const styles = `
    .split-reverse {
      padding: 100px 24px;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 60px;
      flex-direction: row-reverse;
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

    .abstract-graphic-2 {
      width: 100%;
      max-width: 500px;
      height: 400px;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="80" width="300" height="240" rx="32" fill="%231E293B"/><circle cx="160" cy="200" r="40" fill="none" stroke="%232563EB" stroke-width="8"/><circle cx="160" cy="200" r="16" fill="%232563EB"/><path d="M240 160h80M240 200h100M240 240h60" stroke="%23475569" stroke-width="8" stroke-linecap="round"/><circle cx="360" cy="160" r="6" fill="%2310B981"/></svg>') center/contain no-repeat;
    }

    @media (max-width: 900px) {
      .split-reverse {
        flex-direction: column;
        text-align: center;
        gap: 40px;
        padding: 60px 24px;
      }
      .split-content { max-width: 100%; }
    }
  `;

    return (
        <section className="split-reverse">
            <style>{styles}</style>
            <div className="split-content">
                <h2 className="split-header">Happiness from customer to compliance officer.</h2>
                <p className="split-desc">
                    Your users deserve the best experience without compromising security or compliance. SahiHai products are designed to both accelerate the customer journey and automate back-end compliance reviews.
                </p>
                <Link href="/services" className="btn-primary">Explore Products</Link>
            </div>
            <div className="split-visual">
                <div className="abstract-graphic-2" />
            </div>
        </section>
    );
}
