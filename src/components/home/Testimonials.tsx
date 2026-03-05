"use client";

import React from "react";

export default function Testimonials() {
    const styles = `
    .testimonials-section {
      padding: 100px 24px;
      background: var(--blue-light);
      margin-top: 40px;
    }

    .t-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .t-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .t-title {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(32px, 4vw, 44px);
      color: var(--text);
      margin-bottom: 16px;
    }

    .t-subtitle {
      font-size: 18px;
      color: var(--text-muted);
      max-width: 600px;
      margin: 0 auto;
    }

    .t-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 30px;
    }

    .t-card {
      background: var(--white);
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      position: relative;
    }

    .t-quote-icon {
      position: absolute;
      top: 30px;
      right: 30px;
      color: var(--blue-pale);
      opacity: 0.5;
    }

    .t-text {
      font-size: 17px;
      line-height: 1.6;
      color: var(--text);
      margin-bottom: 30px;
      font-style: italic;
    }

    .t-author {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .t-avatar {
      width: 50px;
      height: 50px;
      background: var(--blue-pale);
      border-radius: 50%;
      overflow: hidden;
    }

    .t-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .t-name {
      font-weight: 700;
      color: var(--text);
      font-size: 16px;
      margin-bottom: 4px;
    }

    .t-role {
      font-size: 14px;
      color: var(--text-muted);
    }
  `;

    const testimonials = [
        {
            text: "\"SahiHai totally transformed our onboarding process. We reduced manual verification times by 80% and saw a 3x increase in successful conversions in the first month.\"",
            name: "John Doe",
            role: "Founder, Fintech Startup",
            avatar: "https://i.pravatar.cc/100?img=33"
        },
        {
            text: "\"The API integration was seamless. We were able to start screening new users against global watchlists within hours, ensuring we stay perfectly compliant.\"",
            name: "Jane Smith",
            role: "Risk Management, Crypto Exchange",
            avatar: "https://i.pravatar.cc/100?img=47"
        },
        {
            text: "\"Customer support has been incredibly responsive. Their tailored business verification approach helped us approve corporate clients far quicker than before.\"",
            name: "Michael Roe",
            role: "VP Operations, SaaS Platform",
            avatar: "https://i.pravatar.cc/100?img=11"
        }
    ];

    return (
        <section className="testimonials-section">
            <style>{styles}</style>
            <div className="t-container">
                <div className="t-header">
                    <h2 className="t-title">Trusted by leading companies</h2>
                    <p className="t-subtitle">See how our compliance infrastructure scales high-growth businesses.</p>
                </div>

                <div className="t-grid">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="t-card">
                            <svg className="t-quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="t-text">{t.text}</p>
                            <div className="t-author">
                                <div className="t-avatar"><img src={t.avatar} alt={t.name} /></div>
                                <div>
                                    <div className="t-name">{t.name}</div>
                                    <div className="t-role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
