'use client';

import Link from "next/link";

export default function ServicesPage() {
    const styles = `
    /* ─── Global & Background ─── */
    .services-bg {
        min-height: 100vh;
        background: var(--background);
        font-family: var(--font-sans), 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        color: var(--foreground);
        position: relative;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
    }

    .bg-pattern {
        position: fixed;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background-image:
            linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px);
        background-size: 48px 48px;
        mask-image: radial-gradient(ellipse 90% 90% at 50% 10%, black 20%, transparent 100%);
    }

    .blob-top {
        position: absolute;
        top: -150px;
        right: -100px;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
        pointer-events: none;
        z-index: 0;
        animation: floatBlob 10s ease-in-out infinite alternate;
    }

    .blob-bottom {
        position: absolute;
        bottom: -200px;
        left: -150px;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%);
        pointer-events: none;
        z-index: 0;
        animation: floatBlob 12s ease-in-out infinite alternate-reverse;
    }

    @keyframes floatBlob {
        from { transform: translate(0, 0) scale(1); }
        to { transform: translate(30px, -20px) scale(1.05); }
    }

    /* ─── Navigation ─── */
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 48px;
        position: relative;
        z-index: 10;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        box-sizing: border-box;
        animation: fadeDown 0.6s cubic-bezier(0.22,1,0.36,1) both;
    }

    .logo-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
    }

    .logo-icon {
        width: 32px;
        height: 32px;
        background: var(--blue, #2563EB);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(37,99,235,0.3);
        transition: transform 0.2s;
    }

    .logo-wrap:hover .logo-icon {
        transform: scale(1.05) rotate(-5deg);
    }

    .logo-text {
        font-weight: 700;
        font-size: 18px;
        color: var(--text, #0F172A);
        letter-spacing: -0.4px;
        font-family: 'DM Serif Display', serif;
    }

    .back-link {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--text-muted, #64748B);
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        transition: color 0.2s;
        padding: 8px 16px;
        border-radius: 100px;
        background: rgba(255,255,255,0.5);
        border: 1px solid var(--border);
        backdrop-filter: blur(10px);
    }

    .back-link:hover {
        color: var(--blue, #2563EB);
        background: white;
        border-color: var(--blue-pale, #DBEAFE);
    }

    /* ─── Layout ─── */
    .content-container {
        position: relative;
        z-index: 1;
        max-width: 1100px;
        margin: 0 auto;
        padding: 20px 24px 80px;
        width: 100%;
        box-sizing: border-box;
    }

    /* ─── Hero ─── */
    .services-hero {
        text-align: center;
        padding: 40px 0 60px;
        animation: riseIn 0.8s cubic-bezier(0.22,1,0.36,1) both;
    }

    .hero-badge {
        display: inline-block;
        background: var(--blue-light, #EFF6FF);
        color: var(--blue, #2563EB);
        font-size: 12px;
        font-weight: 700;
        padding: 6px 14px;
        border-radius: 100px;
        margin-bottom: 20px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        border: 1px solid var(--blue-pale, #DBEAFE);
    }

    .services-title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(36px, 5vw, 56px);
        line-height: 1.1;
        letter-spacing: -1.5px;
        color: var(--text, #0F172A);
        margin-bottom: 16px;
    }

    .services-title span {
        color: var(--blue, #2563EB);
        font-style: italic;
    }

    .services-subtitle {
        font-size: 18px;
        color: var(--text-muted, #64748B);
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
    }

    /* ─── Grid ─── */
    .services-grid {
        display: flex;
        flex-direction: column;
        gap: 80px;
        margin-top: 40px;
    }

    /* ─── Service Card Row ─── */
    .service-row {
        display: flex;
        gap: 48px;
        align-items: center;
        animation: riseIn 0.8s cubic-bezier(0.22,1,0.36,1) both;
        animation-fill-mode: both;
    }

    .service-row:nth-child(even) {
        flex-direction: row-reverse;
    }

    /* Delay animations */
    .service-row:nth-child(1) { animation-delay: 0.1s; }
    .service-row:nth-child(2) { animation-delay: 0.2s; }
    .service-row:nth-child(3) { animation-delay: 0.3s; }

    .service-info {
        flex: 1;
        min-width: 320px;
    }
    
    .service-visual {
        flex: 1;
        min-width: 320px;
        display: flex;
        justify-content: center;
        position: relative;
    }

    .service-type {
        font-weight: 700;
        color: var(--blue, #2563EB);
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1.5px;
        margin-bottom: 12px;
        display: block;
    }

    .service-name {
        font-size: 32px;
        font-weight: 700;
        color: var(--text, #0F172A);
        margin-bottom: 16px;
        letter-spacing: -0.5px;
    }

    .service-desc {
        font-size: 16px;
        line-height: 1.6;
        color: var(--text-muted, #64748B);
        margin-bottom: 24px;
    }

    /* Features/Use Cases */
    .use-cases {
        list-style: none;
        padding: 0;
        margin: 0 0 32px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .use-cases li {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        font-size: 15px;
        color: var(--text, #0F172A);
        font-weight: 500;
    }

    .use-cases li::before {
        content: url('data:image/svg+xml;utf8,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" rx="10" fill="%2310B981" fill-opacity="0.1"/><path d="M14 7L8.5 12.5L6 10" stroke="%2310B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        width: 20px;
        height: 20px;
        flex-shrink: 0;
    }

    .pricing-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 20px;
        background: white;
        border: 1.5px solid var(--border, #E2E8F0);
        border-radius: 12px;
        font-size: 15px;
        font-weight: 600;
        color: var(--text, #0F172A);
        box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }

    .pricing-val {
        color: var(--blue, #2563EB);
        font-size: 18px;
        font-weight: 700;
    }

    /* ─── Mockup / Visuals ─── */
    .mockup-card {
        background: white;
        border: 1px solid var(--border, #E2E8F0);
        border-radius: 20px;
        padding: 24px;
        width: 100%;
        max-width: 400px;
        box-shadow: 0 20px 40px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04);
        position: relative;
        transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
        transition: transform 0.4s ease;
    }

    .service-row:nth-child(even) .mockup-card {
        transform: perspective(1000px) rotateY(5deg) rotateX(2deg);
    }

    .service-row:hover .mockup-card {
        transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-5px);
    }

    .mockup-card::before {
        content: '';
        position: absolute;
        inset: -1px;
        background: linear-gradient(135deg, var(--blue-pale) 0%, transparent 50%, var(--border) 100%);
        border-radius: 20px;
        z-index: -1;
        opacity: 0.5;
    }

    .m-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--border);
        padding-bottom: 16px;
        margin-bottom: 16px;
    }

    .m-title {
        font-weight: 700;
        font-size: 14px;
        color: var(--text);
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .m-status {
        background: #D1FAE5;
        color: #059669;
        font-size: 10px;
        font-weight: 700;
        padding: 4px 8px;
        border-radius: 100px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .m-body {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .m-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
    }

    .m-label {
        font-size: 12px;
        color: var(--text-muted);
        font-weight: 500;
    }

    .m-val {
        font-size: 13px;
        font-weight: 600;
        color: var(--text);
    }

    .m-skeleton {
        height: 16px;
        background: #F1F5F9;
        border-radius: 4px;
        width: 120px;
        animation: pulseBg 2s infinite ease-in-out;
    }
    
    .m-skeleton.short { width: 80px; }
    .m-skeleton.long { width: 150px; }

    @keyframes pulseBg {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    .m-photo {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        background: #E2E8F0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
    }

    .m-photo svg {
        width: 30px;
        height: 30px;
        color: #94A3B8;
    }

    /* ─── CTA Section ─── */
    .cta-section {
        margin-top: 100px;
        text-align: center;
        padding: 60px 40px;
        background: linear-gradient(180deg, rgba(239,246,255,0) 0%, rgba(239,246,255,1) 100%);
        border-radius: 30px;
        border: 1px solid var(--border);
        box-shadow: 0 20px 40px rgba(37,99,235,0.05);
        animation: riseIn 0.8s ease 0.4s both;
    }

    .cta-title {
        font-family: 'DM Serif Display', serif;
        font-size: 36px;
        color: var(--text);
        margin-bottom: 16px;
    }

    .cta-desc {
        font-size: 16px;
        color: var(--text-muted);
        max-width: 500px;
        margin: 0 auto 32px;
    }

    .btn-primary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 16px 32px;
        background: var(--blue, #2563EB);
        color: white;
        border-radius: 14px;
        font-weight: 600;
        font-size: 16px;
        text-decoration: none;
        transition: all 0.2s;
        box-shadow: 0 4px 14px rgba(37,99,235,0.3);
    }

    .btn-primary:hover {
        background: var(--blue-dark, #1D4ED8);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(37,99,235,0.4);
    }

    /* Animations */
    @keyframes fadeDown {
        from { opacity: 0; transform: translateY(-14px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes riseIn {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    /* Responsive */
    @media (max-width: 768px) {
        .service-row, .service-row:nth-child(even) {
            flex-direction: column;
            gap: 40px;
        }
        .nav-header { padding: 20px; }
        .services-title { font-size: 32px; }
        .services-grid { gap: 60px; }
        .cta-section { padding: 40px 20px; }
    }
    `;

    return (
        <div className="services-bg">
            <style>{styles}</style>

            <div className="bg-pattern" />
            <div className="blob-top" />
            <div className="blob-bottom" />

            <nav className="nav-header">
                <Link href="/" className="logo-wrap">
                    <div className="logo-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-5 12v-1c0-3.309 2.691-6 6-6h-1c-3.309 0-6 2.691-6 6v1h1zm10 0v-1c0-3.309-2.691-6-6-6h1c3.309 0 6 2.691 6 6v1h-1z" />
                        </svg>
                    </div>
                    <span className="logo-text">SahiHai</span>
                </Link>
                <Link href="/" className="back-link">
                    <svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24">
                        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
                    </svg>
                    Back
                </Link>
            </nav>

            <main className="content-container">
                <div className="services-hero">
                    <div className="hero-badge">Our Solutions</div>
                    <h1 className="services-title">Identity verification made <span>simple.</span></h1>
                    <p className="services-subtitle">
                        Fast, secure, and fully compliant background checks tailored for Indian identities. Choose the validation you need and onboard users with confidence.
                    </p>
                </div>

                <div className="services-grid">
                    {/* Aadhaar Setup */}
                    <section className="service-row">
                        <div className="service-info">
                            <span className="service-type">Core Identity</span>
                            <h2 className="service-name">Aadhaar Verification</h2>
                            <p className="service-desc">
                                Instantly verify individuals against the UIDAI database. Ensure the highest level of trust by confirming demographic data securely and accurately using OTP or XML offline KYC.
                            </p>
                            <ul className="use-cases">
                                <li>Customer onboarding (eKYC)</li>
                                <li>Employee background screening</li>
                                <li>Financial compliance & lending</li>
                            </ul>
                            <div className="pricing-badge">
                                <span>Starts from</span>
                                <span className="pricing-val">₹4.50</span>
                                <span>/ check</span>
                            </div>
                        </div>
                        <div className="service-visual">
                            <div className="mockup-card">
                                <div className="m-header">
                                    <div className="m-title">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2" /></svg>
                                        Aadhaar Check
                                    </div>
                                    <div className="m-status">Verified</div>
                                </div>
                                <div className="m-body">
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginBottom: '4px' }}>
                                        <div className="m-photo">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        </div>
                                        <div>
                                            <div className="m-val" style={{ marginBottom: '4px' }}>XXXX XXXX 1234</div>
                                            <div className="m-skeleton"></div>
                                        </div>
                                    </div>
                                    <div className="m-row">
                                        <span className="m-label">Name Match</span>
                                        <span className="m-val" style={{ color: '#059669' }}>100%</span>
                                    </div>
                                    <div className="m-row">
                                        <span className="m-label">DOB Match</span>
                                        <span className="m-val">Yes</span>
                                    </div>
                                    <div className="m-row">
                                        <span className="m-label">Address</span>
                                        <div className="m-skeleton long"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Voter ID Setup */}
                    <section className="service-row">
                        <div className="service-info">
                            <span className="service-type">Electoral Identity</span>
                            <h2 className="service-name">Voter ID Verification</h2>
                            <p className="service-desc">
                                Cross-reference EPIC (Electors Photo Identity Card) numbers with the Election Commission's database. Ideal as a secondary identity check or for demographic validation.
                            </p>
                            <ul className="use-cases">
                                <li>Age verification</li>
                                <li>Alternative identity proofing</li>
                                <li>Address confirmation</li>
                            </ul>
                            <div className="pricing-badge">
                                <span>Starts from</span>
                                <span className="pricing-val">₹3.00</span>
                                <span>/ check</span>
                            </div>
                        </div>
                        <div className="service-visual">
                            <div className="mockup-card">
                                <div className="m-header">
                                    <div className="m-title">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8" cy="10" r="2" /><line x1="14" y1="8" x2="20" y2="8" /><line x1="14" y1="12" x2="20" y2="12" /></svg>
                                        Voter ID Check
                                    </div>
                                    <div className="m-status">Verified</div>
                                </div>
                                <div className="m-body">
                                    <div className="m-row">
                                        <span className="m-label">EPIC No.</span>
                                        <span className="m-val">ABC1234567</span>
                                    </div>
                                    <div className="m-row">
                                        <span className="m-label">Name</span>
                                        <div className="m-skeleton"></div>
                                    </div>
                                    <div className="m-row">
                                        <span className="m-label">Assembly Constituency</span>
                                        <div className="m-skeleton long"></div>
                                    </div>
                                    <div className="m-row">
                                        <span className="m-label">Part Name</span>
                                        <div className="m-skeleton"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* DL Setup */}
                    <section className="service-row">
                        <div className="service-info">
                            <span className="service-type">Transport & Mobility</span>
                            <h2 className="service-name">Driving License Check</h2>
                            <p className="service-desc">
                                Authenticate driving licenses instantly through official transport ministry records. Crucial for companies dealing with riders, drivers, or vehicle rentals.
                            </p>
                            <ul className="use-cases">
                                <li>Delivery partner onboarding</li>
                                <li>Vehicle rental authorization</li>
                                <li>Logistics hiring</li>
                            </ul>
                            <div className="pricing-badge">
                                <span>Starts from</span>
                                <span className="pricing-val">₹5.00</span>
                                <span>/ check</span>
                            </div>
                        </div>
                        <div className="service-visual">
                            <div className="mockup-card">
                                <div className="m-header">
                                    <div className="m-title">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h10" /><path d="M7 11h10" /><path d="M7 15h6" /></svg>
                                        Driving License
                                    </div>
                                    <div className="m-status">Active</div>
                                </div>
                                <div className="m-body">
                                    <div className="m-row">
                                        <span className="m-label">DL Number</span>
                                        <span className="m-val">MH12 201800XXXX</span>
                                    </div>
                                    <div className="m-row">
                                        <span className="m-label">Status</span>
                                        <span className="m-val" style={{ color: '#059669' }}>Valid</span>
                                    </div>
                                    <div className="m-row">
                                        <span className="m-label">Vehicle Class</span>
                                        <span className="m-val">MCWG, LMV</span>
                                    </div>
                                    <div className="m-row">
                                        <span className="m-label">Valid Till</span>
                                        <span className="m-val">Oct 2038</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* CTA */}
                <div className="cta-section">
                    <h2 className="cta-title">Ready to secure your business?</h2>
                    <p className="cta-desc">
                        Integrate our APIs in minutes. No complex paperwork. Start verifying your first 100 users for free.
                    </p>
                    <Link href="/signup" className="btn-primary">
                        Create an Account
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
            </main>
        </div>
    );
}
