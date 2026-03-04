"use client";

import React from "react";

export default function TrustedBy() {
    const styles = `
    .trusted-section {
      padding: 60px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--background);
      border-top: 1px solid var(--border);
    }
    
    .trusted-title {
      font-size: 14px;
      font-weight: 500;
      color: var(--text-muted);
      margin-bottom: 30px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .trusted-logos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
      opacity: 0.6;
      transition: opacity 0.3s ease;
    }
    
    .trusted-logos:hover {
      opacity: 1;
    }

    .company-logo {
      height: 30px;
      filter: grayscale(100%);
      transition: filter 0.3s ease, transform 0.3s ease;
    }

    .company-logo:hover {
      filter: grayscale(0%);
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .trusted-logos { gap: 24px; }
      .company-logo { height: 24px; }
    }
  `;

    return (
        <section className="trusted-section">
            <style>{styles}</style>
            <div className="trusted-title">Trusted by</div>
            <div className="trusted-logos">
                {/* Placeholders matching screenshot style */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Charles_Schwab_Corporation_logo.svg" alt="Schwab" className="company-logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Coinbase_Logo_2013.svg" alt="Coinbase" className="company-logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Citrix_logo_2016.svg" alt="Citrix" className="company-logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/BBVA_2019.svg" alt="BBVA" className="company-logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Brex_logo.svg" alt="Brex" className="company-logo" />
            </div>
        </section>
    );
}
