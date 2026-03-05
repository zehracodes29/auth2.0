"use client";

import React from "react";

export default function HowItWorks() {
    const styles = `
    .hiw-section {
      padding: 100px 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .hiw-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .hiw-title {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(32px, 4vw, 44px);
      color: var(--text);
      margin-bottom: 16px;
    }

    .hiw-subtitle {
      font-size: 18px;
      color: var(--text-muted);
      max-width: 600px;
      margin: 0 auto;
    }

    .steps-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      position: relative;
    }

    /* Connecting line for desktop */
    @media (min-width: 901px) {
      .steps-container::before {
        content: '';
        position: absolute;
        top: 40px;
        left: 50px;
        right: 50px;
        height: 2px;
        background: var(--blue-pale);
        z-index: 0;
      }
    }

    .step-card {
      position: relative;
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 30px 24px;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      z-index: 1; /* Above connecting line */
    }

    .step-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(37,99,235,0.08);
      border-color: var(--blue-pale);
    }

    .step-number {
      width: 50px;
      height: 50px;
      background: var(--blue-light);
      border: 2px solid var(--blue);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'DM Serif Display', serif;
      font-size: 24px;
      color: var(--blue);
      margin: 0 auto 24px;
      position: relative;
    }

    .step-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 12px;
    }

    .step-desc {
      font-size: 15px;
      color: var(--text-muted);
      line-height: 1.5;
    }

    @media (max-width: 900px) {
      .steps-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .steps-container {
        grid-template-columns: 1fr;
      }
    }
  `;

    const steps = [
        {
            num: "1",
            title: "Submit Details",
            desc: "User easily uploads their ID document and a quick selfie in a frictionless flow.",
        },
        {
            num: "2",
            title: "Automated Checks",
            desc: "Our AI systems immediately analyze the document for authenticity and match the face.",
        },
        {
            num: "3",
            title: "Background Screening",
            desc: "Simultaneous checks against AML, PEP, and global watchlists to ensure full compliance.",
        },
        {
            num: "4",
            title: "Instant Decision",
            desc: "Receive a clear 'pass' or 'fail' result in seconds, allowing good users in instantly.",
        }
    ];

    return (
        <section className="hiw-section">
            <style>{styles}</style>
            <div className="hiw-header">
                <h2 className="hiw-title">How It Works</h2>
                <p className="hiw-subtitle">A seamless four-step verification process built for speed and security.</p>
            </div>

            <div className="steps-container">
                {steps.map((step) => (
                    <div key={step.num} className="step-card">
                        <div className="step-number">{step.num}</div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-desc">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
