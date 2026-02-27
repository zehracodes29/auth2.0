
export default function MainPage() {
  const styles = `
    /* ─── Background ─── */
    .bg {
      position: fixed;
      inset: 0;
      z-index: 0;
      overflow: hidden;
      pointer-events: none;
    }

    .bg::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
      background-size: 48px 48px;
      mask-image: radial-gradient(ellipse 90% 90% at 50% 40%, black 30%, transparent 100%);
    }

    .bg-glow-tr {
      position: absolute;
      top: -140px; right: -140px;
      width: 660px; height: 660px;
      background: radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 70%);
      animation: glowDrift 9s ease-in-out infinite alternate;
    }
    .bg-glow-bl {
      position: absolute;
      bottom: -100px; left: -80px;
      width: 560px; height: 560px;
      background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
      animation: glowDrift 11s ease-in-out infinite alternate-reverse;
    }
    @keyframes glowDrift {
      from { transform: translate(0,0) scale(1); }
      to   { transform: translate(28px, 18px) scale(1.09); }
    }

    /* Decorative removed in favor of hero image */

    /* ─── Nav ─── */
    nav {
      position: relative;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 26px 52px;
      animation: fadeDown 0.6s cubic-bezier(0.22,1,0.36,1) both;
    }
    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 11px;
      text-decoration: none;
    }
    .logo-icon {
      width: 40px; height: 40px;
      background: var(--blue);
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 14px rgba(37,99,235,0.32);
      transition: transform 0.2s ease;
    }
    .logo:hover .logo-icon { transform: rotate(-6deg) scale(1.05); }
    .logo-name {
      font-family: 'DM Serif Display', serif;
      font-size: 22px;
      color: var(--text);
      letter-spacing: -0.3px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2px;
      background: rgba(239,246,255,0.85);
      backdrop-filter: blur(10px);
      border: 1px solid var(--blue-pale);
      border-radius: 100px;
      padding: 5px 8px;
    }
    .nav-links a {
      padding: 7px 16px;
      border-radius: 100px;
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      color: var(--text-muted);
      transition: all 0.18s ease;
    }
    .nav-links a:hover { color: var(--blue); background: white; }

    /* ─── Hero Section ─── */
    .hero {
      position: relative;
      z-index: 1;
      min-height: calc(100vh - 92px);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      padding: 40px 52px 100px;
      max-width: 1400px;
      margin: 0 auto;
      gap: 60px;
    }
    .hero-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 600px;
    }
    .hero-visual {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      animation: riseIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s both;
    }
    .hero-visual img {
      width: 100%;
      max-width: 650px;
      height: auto;
      border-radius: 20px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--blue-light);
      border: 1px solid var(--blue-pale);
      border-radius: 100px;
      padding: 7px 16px;
      font-size: 11.5px;
      font-weight: 600;
      color: var(--blue);
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin-bottom: 32px;
      animation: riseIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both;
    }
    .badge-dot {
      width: 7px; height: 7px;
      background: var(--success);
      border-radius: 50%;
      box-shadow: 0 0 0 2px rgba(16,185,129,0.25);
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 2px rgba(16,185,129,0.25); }
      50%       { box-shadow: 0 0 0 5px rgba(16,185,129,0.1); }
    }

    h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(40px, 5.5vw, 68px);
      line-height: 1.06;
      letter-spacing: -2px;
      color: var(--text);
      max-width: 100%;
      margin-bottom: 24px;
      animation: riseIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both;
    }
    h1 em {
      font-style: italic;
      color: var(--blue);
      position: relative;
    }

    .hero-sub {
      font-size: 17px;
      line-height: 1.7;
      color: var(--text-muted);
      max-width: 500px;
      margin-bottom: 48px;
      font-weight: 400;
      animation: riseIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both;
    }

    @keyframes riseIn {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ─── The Two Buttons ─── */
    .cta-group {
      display: flex;
      align-items: center;
      gap: 14px;
      animation: riseIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.45s both;
      flex-wrap: wrap;
    }

    .btn-signup {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 17px 36px;
      background: var(--blue);
      color: white;
      border: 2px solid transparent;
      border-radius: 15px;
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      position: relative;
      overflow: hidden;
      transition: all 0.24s cubic-bezier(0.22,1,0.36,1);
      box-shadow:
        0 6px 24px rgba(37,99,235,0.38),
        0 2px 8px rgba(37,99,235,0.2),
        inset 0 1px 0 rgba(255,255,255,0.15);
    }
    .btn-signup::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(140deg, rgba(255,255,255,0.2) 0%, transparent 55%);
    }
    .btn-signup:hover {
      background: var(--blue-dark);
      transform: translateY(-3px) scale(1.02);
      box-shadow:
        0 12px 36px rgba(37,99,235,0.45),
        0 4px 14px rgba(37,99,235,0.28);
    }
    .btn-signup:active { transform: translateY(-1px) scale(1); }
    .btn-signup .arr {
      display: flex;
      align-items: center;
      transition: transform 0.22s ease;
    }
    .btn-signup:hover .arr { transform: translateX(4px); }

    .btn-services {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 17px 36px;
      background: var(--blue-light);
      color: var(--blue);
      border: 1.5px solid var(--blue-pale);
      border-radius: 15px;
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.24s cubic-bezier(0.22,1,0.36,1);
    }
    .btn-services:hover {
      background: var(--blue);
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(37,99,235,0.2);
      border-color: var(--blue);
    }
    .btn-services:active { transform: translateY(-1px); }

    .btn-login {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 17px 36px;
      background: white;
      color: var(--text);
      border: 1.5px solid var(--border);
      border-radius: 15px;
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.24s cubic-bezier(0.22,1,0.36,1);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .btn-login:hover {
      border-color: var(--blue);
      color: var(--blue);
      background: var(--blue-light);
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(37,99,235,0.12);
    }
    .btn-login:active { transform: translateY(-1px); }

    /* ─── Trusted ─── */
    .trusted-bar {
      margin-top: 68px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      animation: riseIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both;
    }
    .trusted-label {
      font-size: 10.5px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1.4px;
      color: #CBD5E1;
    }
    .trusted-logos {
      display: flex;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .trusted-logos span {
      font-size: 13.5px;
      font-weight: 700;
      color: #94A3B8;
      letter-spacing: 0.3px;
      transition: color 0.2s ease;
    }
    .trusted-logos span:hover { color: var(--blue-mid); cursor: default; }

    /* ─── Stats ─── */
    .stats {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: center;
      border-top: 1px solid var(--border);
      animation: riseIn 0.7s ease 0.75s both;
    }
    .stat {
      flex: 1;
      max-width: 220px;
      text-align: center;
      padding: 28px 24px;
      border-right: 1px solid var(--border);
      transition: background 0.2s ease;
    }
    .stat:last-child { border-right: none; }
    .stat:hover { background: var(--blue-light); }
    .stat-num {
      font-family: 'DM Serif Display', serif;
      font-size: 30px;
      color: var(--blue);
      letter-spacing: -1px;
      line-height: 1;
    }
    .stat-desc {
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 5px;
      font-weight: 500;
    }

    @media (max-width: 900px) {
      .hero {
        flex-direction: column;
        text-align: center;
        padding: 40px 24px 80px;
        gap: 40px;
      }
      .hero-content {
        align-items: center;
      }
      h1 { font-size: clamp(38px, 8vw, 60px); }
      .hero-sub { margin-left: auto; margin-right: auto; }
      .cta-group { justify-content: center; }
    }

    @media (max-width: 640px) {
      nav { padding: 20px 22px; }
      .nav-links { display: none; }
      .cta-group { flex-direction: column; width: 100%; }
      .btn-signup, .btn-login, .btn-services { width: 100%; justify-content: center; }
      .stats { flex-wrap: wrap; }
      .stat { border-right: none; border-bottom: 1px solid var(--border); max-width: 100%; }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      {/* Background layer */}
      <div className="bg">
        <div className="bg-glow-tr" />
        <div className="bg-glow-bl" />
      </div>

      {/* Nav */}
      <nav>
        <a href="/" className="logo">
          <div className="logo-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 2C7.5 2 5 4.5 5 7.5c0 1.4.6 2.7 1.5 3.6L4.5 13c-.4.4-.4.9 0 1.2l1.3 1.3c.4.4.9.4 1.2 0l1.3-1.3c.7.3 1.6.5 2.5.5h1.4c.9 0 1.8-.2 2.5-.5l1.3 1.3c.4.4.9.4 1.2 0l1.3-1.3c.4-.4.4-.9 0-1.2l-2-2.1c.9-.9 1.5-2.2 1.5-3.6C17 4.5 14.5 2 11 2z" fill="white" />
              <circle cx="11" cy="16.5" r="4" fill="white" />
            </svg>
          </div>
          <span className="logo-name">SahiHai</span>
        </a>

        <div className="nav-links">
          <a href="/about">About</a>
          <a href="/services">Solutions</a>
          <a href="#">Pricing</a>
          <a href="/login">Login</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="hero">
        <div className="hero-content">
          <h1>
            There's a <em>better</em> way<br />
            to verify your<br />
            customers.
          </h1>

          <p className="hero-sub">
            Smarter anti-fraud and compliance solutions for fast-growing businesses. Verify in seconds, not days.
          </p>

          {/* THE TWO BUTTONS */}
          <div className="cta-group">
            <a href="/signup" className="btn-signup">
              Get Started — It's Free
              <span className="arr">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path d="M3.5 8.5h10M9.5 4.5l4 4-4 4" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <a href="/services" className="btn-services">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              Our Services
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://cdn.dribbble.com/userupload/42004457/file/original-9292f9cf4c847a14062116cc50889287.gif"
            alt="Hero visualization"
          />
        </div>
      </main>

      {/* Stats strip */}
      <div className="stats">
        <div className="stat">
          <div className="stat-num">99.8%</div>
          <div className="stat-desc">Verification accuracy</div>
        </div>
        <div className="stat">
          <div className="stat-num">&lt; 2s</div>
          <div className="stat-desc">Average verify time</div>
        </div>
        <div className="stat">
          <div className="stat-num">180+</div>
          <div className="stat-desc">Countries supported</div>
        </div>
        <div className="stat">
          <div className="stat-num">50M+</div>
          <div className="stat-desc">Identities verified</div>
        </div>
      </div>
    </>
  );
}