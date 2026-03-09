"use client";

import React from "react";
import Link from "next/link";

export default function PricingPreview() {
    const styles = `
    .pricing-preview {
      padding: 100px 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .pricing-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .pricing-title {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(32px, 4vw, 44px);
      color: var(--text);
      margin-bottom: 16px;
    }

    .pricing-subtitle {
      font-size: 18px;
      color: var(--text-muted);
      max-width: 600px;
      margin: 0 auto;
    }

    .pricing-cards {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
    }

    .pricing-card {
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 40px;
      width: 100%;
      max-width: 380px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .pricing-card.popular {
      border-color: var(--blue);
      box-shadow: 0 12px 40px rgba(37,99,235,0.12);
    }

    .popular-badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--blue);
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .p-tier {
      font-size: 20px;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 8px;
    }

    .p-desc {
      font-size: 14px;
      color: var(--text-muted);
      margin-bottom: 24px;
      min-height: 42px;
    }

    .p-price {
      font-family: 'DM Serif Display', serif;
      font-size: 48px;
      color: var(--text);
      margin-bottom: 8px;
      display: flex;
      align-items: baseline;
    }

    .p-price span {
      font-family: 'DM Sans', sans-serif;
      font-size: 16px;
      color: var(--text-muted);
      margin-left: 8px;
    }

    .p-features {
      margin: 32px 0;
      padding: 0;
      list-style: none;
      flex-grow: 1;
    }

    .p-features li {
      font-size: 15px;
      color: var(--text);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .p-features li::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" fill="none" stroke="%2310B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>') no-repeat center;
    }

    .btn-pricing {
      display: block;
      width: 100%;
      padding: 16px;
      text-align: center;
      background: var(--blue-light);
      color: var(--blue);
      border: 1px solid var(--blue-pale);
      border-radius: 12px;
      font-weight: 600;
      font-size: 15px;
      text-decoration: none;
      transition: all 0.2s;
    }

    .pricing-card.popular .btn-pricing {
      background: var(--blue);
      color: white;
      border-color: var(--blue);
    }

    .btn-pricing:hover {
      background: var(--blue-dark);
      color: white;
      border-color: var(--blue-dark);
    }

  `;

    return (
        <section className="pricing-preview">
            <style>{styles}</style>
            <div className="pricing-header">
                <h2 className="pricing-title">Choose your verification plan</h2>
                <p className="pricing-subtitle">Flexible plans designed for businesses of all sizes. Get started with our affordable packages.</p>
            </div>

            <div className="pricing-cards">
                {/* Verifiseed */}
                <div className="pricing-card">
                    <h3 className="p-tier">Verifiseed</h3>
                    <p className="p-desc">1 verification • 30 days validity</p>
                    <div className="p-price">₹49</div>
                    <ul className="p-features">
                        <li>Basic KYC verification</li>
                        <li>Standard API access</li>
                        <li>Email support</li>
                        <li>Perfect for first-time users</li>
                    </ul>
                    <Link href="/signup" className="btn-pricing">Get Started</Link>
                </div>

                {/* VerifiPlus */}
                <div className="pricing-card">
                    <h3 className="p-tier">VerifiPlus</h3>
                    <p className="p-desc">10 verifications • 365 days validity</p>
                    <div className="p-price">₹449<span> (₹44.90/verification)</span></div>
                    <ul className="p-features">
                        <li>Advanced KYC & KYB checks</li>
                        <li>Priority API access</li>
                        <li>Dedicated support</li>
                        <li>Ideal for shopkeepers & property owners</li>
                    </ul>
                    <Link href="/signup" className="btn-pricing">Get Started</Link>
                </div>

                {/* VerifiPro - Recommended */}
                <div className="pricing-card popular">
                    <div className="popular-badge">Recommended</div>
                    <h3 className="p-tier">VerifiPro</h3>
                    <p className="p-desc">25 verifications • 365 days validity</p>
                    <div className="p-price">₹999<span> (₹44.90/verification)</span></div>
                    <ul className="p-features">
                        <li>Complete verification suite</li>
                        <li>Highest priority support</li>
                        <li>Advanced analytics dashboard</li>
                        <li>Best for growing businesses</li>
                    </ul>
                    <Link href="/contact" className="btn-pricing">Contact Sales</Link>
                </div>
            </div>
        </section>
    );
}
