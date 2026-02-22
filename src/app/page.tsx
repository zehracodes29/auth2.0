export default function MainPage() {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=DM+Serif+Display:ital@0;1&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #2563EB;
      --blue-mid: #3B82F6;
      --blue-light: #EFF6FF;
      --blue-dark: #1D4ED8;
      --blue-pale: #DBEAFE;
      --text: #0F172A;
      --text-muted: #64748B;
      --border: #E2E8F0;
      --white: #FFFFFF;
      --success: #10B981;
    }

    html, body { height: 100%; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--white);
      color: var(--text);
      min-height: 100vh;
      overflow-x: hidden;
    }

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

    /* Ripple rings */
    .ripples {
      position: absolute;
      top: -80px; right: -80px;
      width: 780px; height: 780px;
    }
    .ripples circle {
      fill: none;
      stroke: var(--blue);
      stroke-width: 0.8;
      opacity: 0;
      transform-origin: 390px 390px;
      animation: ripple 6s ease-out infinite;
    }
    .ripples circle:nth-child(1) { animation-delay: 0s; }
    .ripples circle:nth-child(2) { animation-delay: 1.2s; }
    .ripples circle:nth-child(3) { animation-delay: 2.4s; }
    .ripples circle:nth-child(4) { animation-delay: 3.6s; }
    .ripples circle:nth-child(5) { animation-delay: 4.8s; }
    @keyframes ripple {
      0%   { r: 60;  opacity: 0.2; }
      100% { r: 390; opacity: 0; }
    }

    /* Fingerprint */
    .fingerprint {
      position: absolute;
      bottom: -40px; left: -40px;
      width: 300px; height: 300px;
      opacity: 0.055;
      animation: fpBreath 7s ease-in-out infinite;
    }
    @keyframes fpBreath {
      0%, 100% { opacity: 0.055; transform: scale(1); }
      50%       { opacity: 0.09;  transform: scale(1.04); }
    }

    /* Floating avatars */
    .avatar {
      position: absolute;
      border-radius: 50%;
      border: 3px solid var(--white);
      box-shadow: 0 4px 20px rgba(37,99,235,0.18), 0 1px 4px rgba(0,0,0,0.06);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      animation: floatBob ease-in-out infinite;
    }
    .avatar .check {
      position: absolute;
      bottom: -1px; right: -1px;
      width: 16px; height: 16px;
      background: var(--success);
      border-radius: 50%;
      border: 2px solid white;
      display: flex; align-items: center; justify-content: center;
      font-size: 8px; color: white; font-weight: 700;
    }
    .av1 { width: 56px; height: 56px; top: 22%; right: 11%; animation-duration: 7s;  animation-delay: 0s;   background: #DBEAFE; }
    .av2 { width: 46px; height: 46px; top: 45%; right: 5%;  animation-duration: 9s;  animation-delay: 1.8s; background: #EDE9FE; }
    .av3 { width: 50px; height: 50px; top: 68%; right: 13%; animation-duration: 8s;  animation-delay: 0.9s; background: #D1FAE5; }
    .av4 { width: 42px; height: 42px; top: 33%; left: 6%;   animation-duration: 10s; animation-delay: 2.2s; background: #FEF3C7; }
    @keyframes floatBob {
      0%, 100% { transform: translateY(0px) rotate(-1.5deg); }
      50%       { transform: translateY(-16px) rotate(1.5deg); }
    }

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
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 40px 24px 100px;
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
      font-size: clamp(46px, 7.5vw, 80px);
      line-height: 1.06;
      letter-spacing: -2.5px;
      color: var(--text);
      max-width: 780px;
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

    @media (max-width: 640px) {
      nav { padding: 20px 22px; }
      .nav-links { display: none; }
      .cta-group { flex-direction: column; width: 100%; }
      .btn-signup, .btn-login { width: 100%; justify-content: center; }
      .stats { flex-wrap: wrap; }
      .stat { border-right: none; border-bottom: 1px solid var(--border); max-width: 100%; }
      .av4 { display: none; }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      {/* Background layer */}
      <div className="bg">
        <div className="bg-glow-tr" />
        <div className="bg-glow-bl" />

        <svg className="ripples" viewBox="0 0 780 780" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(i => <circle key={i} cx="390" cy="390" r="60" />)}
        </svg>

        <svg className="fingerprint" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          {[54,46,38,30,22,14,6].map((r,i) => (
            <ellipse key={i} cx="60" cy="60" rx={r} ry={r+2.5} fill="none" stroke="#2563EB" strokeWidth="1.4"/>
          ))}
          <line x1="60" y1="2" x2="60" y2="14" stroke="#2563EB" strokeWidth="1.4"/>
          <line x1="60" y1="106" x2="60" y2="118" stroke="#2563EB" strokeWidth="1.4"/>
        </svg>

        <div className="avatar av1">👩‍💼<div className="check">✓</div></div>
        <div className="avatar av2">👨‍💻<div className="check">✓</div></div>
        <div className="avatar av3">👩‍🔬<div className="check">✓</div></div>
        <div className="avatar av4">🧑‍💼<div className="check">✓</div></div>
      </div>

      {/* Nav */}
      <nav>
        <a href="/" className="logo">
          <div className="logo-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 2C7.5 2 5 4.5 5 7.5c0 1.4.6 2.7 1.5 3.6L4.5 13c-.4.4-.4.9 0 1.2l1.3 1.3c.4.4.9.4 1.2 0l1.3-1.3c.7.3 1.6.5 2.5.5h1.4c.9 0 1.8-.2 2.5-.5l1.3 1.3c.4.4.9.4 1.2 0l1.3-1.3c.4-.4.4-.9 0-1.2l-2-2.1c.9-.9 1.5-2.2 1.5-3.6C17 4.5 14.5 2 11 2z" fill="white"/>
              <circle cx="11" cy="16.5" r="4" fill="white"/>
            </svg>
          </div>
          <span className="logo-name">SahiHai</span>
        </a>

        <div className="nav-links">
          <a href="#">Product</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="hero">

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
                <path d="M3.5 8.5h10M9.5 4.5l4 4-4 4" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          <a href="/login" className="btn-login">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <rect x="2.5" y="2.5" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M6.5 8.5h4M9 6l2.5 2.5L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Sign In
          </a>
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