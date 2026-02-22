'use client';
import { useState, useEffect } from "react";
// Types
type SignupMethod = "email" | "phone" | null;
type Step = "choose" | "form" | "verify";

const BLUE_PRIMARY = "#2563EB";
const BLUE_LIGHT = "#EFF6FF";
const BLUE_MID = "#3B82F6";
const BLUE_DARK = "#1D4ED8";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --blue: ${BLUE_PRIMARY};
    --blue-light: ${BLUE_LIGHT};
    --blue-mid: ${BLUE_MID};
    --blue-dark: ${BLUE_DARK};
    --text: #0F172A;
    --text-muted: #64748B;
    --border: #E2E8F0;
    --white: #FFFFFF;
    --success: #10B981;
    --radius: 14px;
    --shadow: 0 4px 24px rgba(37,99,235,0.08), 0 1px 4px rgba(0,0,0,0.04);
    --shadow-lg: 0 16px 48px rgba(37,99,235,0.12), 0 4px 16px rgba(0,0,0,0.06);
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--white);
    color: var(--text);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Background ripples */
  .bg-ripple {
    position: fixed;
    top: 0; right: 0;
    width: 700px; height: 700px;
    pointer-events: none;
    z-index: 0;
  }

  .bg-ripple circle {
    fill: none;
    stroke: var(--blue);
    stroke-width: 1;
    opacity: 0;
    transform-origin: center;
    animation: rippleExpand 4s ease-out infinite;
  }
  .bg-ripple circle:nth-child(1) { animation-delay: 0s; }
  .bg-ripple circle:nth-child(2) { animation-delay: 0.8s; }
  .bg-ripple circle:nth-child(3) { animation-delay: 1.6s; }
  .bg-ripple circle:nth-child(4) { animation-delay: 2.4s; }

  @keyframes rippleExpand {
    0% { r: 80; opacity: 0.15; }
    100% { r: 340; opacity: 0; }
  }

  .fingerprint {
    position: fixed;
    top: -20px; left: -20px;
    width: 160px; height: 160px;
    opacity: 0.06;
    z-index: 0;
    animation: fpPulse 5s ease-in-out infinite;
  }
  @keyframes fpPulse {
    0%, 100% { opacity: 0.06; transform: scale(1); }
    50% { opacity: 0.1; transform: scale(1.04); }
  }

  /* Layout */
  .page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 24px;
  }

  .card {
    background: var(--white);
    border-radius: 24px;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border);
    width: 100%;
    max-width: 440px;
    padding: 40px;
    position: relative;
    z-index: 1;
    animation: cardIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(20px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* Logo */
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
  }
  .logo-icon {
    width: 36px; height: 36px;
    background: var(--blue);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo-name {
    font-family: 'DM Serif Display', serif;
    font-size: 20px;
    color: var(--text);
    letter-spacing: -0.3px;
  }

  /* Headings */
  h1 {
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.2;
    color: var(--text);
    margin-bottom: 6px;
  }
  .subtitle {
    font-size: 14px;
    color: var(--text-muted);
    margin-bottom: 28px;
    line-height: 1.5;
  }

  /* Social buttons */
  .social-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 20px;
    border-radius: var(--radius);
    border: 1.5px solid var(--border);
    background: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
    cursor: pointer;
    transition: all 0.18s ease;
    margin-bottom: 10px;
  }
  .social-btn:hover {
    border-color: var(--blue);
    background: var(--blue-light);
    color: var(--blue);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37,99,235,0.1);
  }
  .social-btn:active { transform: translateY(0); }

  /* Divider */
  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 20px 0;
  }
  .divider-line { flex: 1; height: 1px; background: var(--border); }
  .divider-text { font-size: 12px; color: var(--text-muted); font-weight: 500; }

  /* Method tabs */
  .method-tabs {
    display: flex;
    background: var(--blue-light);
    border-radius: 10px;
    padding: 4px;
    margin-bottom: 20px;
  }
  .tab-btn {
    flex: 1;
    padding: 9px;
    border: none;
    background: transparent;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.18s ease;
  }
  .tab-btn.active {
    background: var(--white);
    color: var(--blue);
    box-shadow: 0 2px 8px rgba(37,99,235,0.1);
  }

  /* Form inputs */
  .field {
    margin-bottom: 16px;
    animation: fieldIn 0.3s ease both;
  }
  @keyframes fieldIn {
    from { opacity: 0; transform: translateX(-8px); }
    to { opacity: 1; transform: translateX(0); }
  }

  label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.6px;
    margin-bottom: 6px;
  }

  input {
    width: 100%;
    padding: 13px 14px;
    border: 1.5px solid var(--border);
    border-radius: var(--radius);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: var(--text);
    background: var(--white);
    outline: none;
    transition: all 0.18s ease;
  }
  input:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
  }
  input::placeholder { color: #CBD5E1; }

  /* Row layout */
  .row { display: flex; gap: 12px; }
  .row .field { flex: 1; }

  /* Primary button */
  .btn-primary {
    width: 100%;
    padding: 14px;
    background: var(--blue);
    color: var(--white);
    border: none;
    border-radius: var(--radius);
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 8px;
    position: relative;
    overflow: hidden;
  }
  .btn-primary::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%);
  }
  .btn-primary:hover {
    background: var(--blue-dark);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(37,99,235,0.35);
  }
  .btn-primary:active { transform: translateY(0); }
  .btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  /* Password strength */
  .strength-bar {
    display: flex;
    gap: 4px;
    margin-top: 6px;
  }
  .strength-seg {
    flex: 1;
    height: 3px;
    border-radius: 2px;
    background: var(--border);
    transition: background 0.3s ease;
  }
  .strength-seg.weak { background: #EF4444; }
  .strength-seg.ok { background: #F59E0B; }
  .strength-seg.strong { background: var(--success); }

  /* Terms */
  .terms {
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
    margin-top: 16px;
    line-height: 1.5;
  }
  .terms a { color: var(--blue); text-decoration: none; }

  /* Sign in link */
  .signin-link {
    text-align: center;
    font-size: 13px;
    color: var(--text-muted);
    margin-top: 20px;
  }
  .signin-link a {
    color: var(--blue);
    font-weight: 600;
    text-decoration: none;
  }

  /* Success state */
  .success-screen {
    text-align: center;
    padding: 20px 0;
    animation: cardIn 0.4s ease both;
  }
  .success-icon {
    width: 72px; height: 72px;
    background: linear-gradient(135deg, #D1FAE5, #A7F3D0);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    animation: successPop 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  @keyframes successPop {
    from { transform: scale(0.5); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  /* Trust badges */
  .trusted {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 24px;
  }
  .trust-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--success);
  }

  /* Phone prefix */
  .phone-wrap {
    display: flex;
    gap: 0;
  }
  .phone-prefix {
    padding: 13px 12px;
    border: 1.5px solid var(--border);
    border-right: none;
    border-radius: var(--radius) 0 0 var(--radius);
    background: var(--blue-light);
    font-size: 14px;
    color: var(--text-muted);
    white-space: nowrap;
  }
  .phone-wrap input {
    border-radius: 0 var(--radius) var(--radius) 0;
    border-left: none;
  }
  .phone-wrap input:focus {
    border-color: var(--blue);
    border-left: 1.5px solid var(--blue);
  }

  /* Loading spinner */
  .spinner {
    width: 18px; height: 18px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
`;

function getPasswordStrength(pw: string): number {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw) && /[^a-zA-Z0-9]/.test(pw)) score++;
  return score;
}

export default function SignupPage() {
  const [method, setMethod] = useState<SignupMethod>(null);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", password: "", confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const pwStrength = getPasswordStrength(form.password);
  const strengthLabels = ["", "Weak", "Fair", "Strong"];

  const handleGoogleSignup = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email && method === "email" || !form.phone && method === "phone") return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 2000);
  };

  useEffect(() => {
    if (done) {
      const timer = setTimeout(() => {
        window.location.href = "/onboarding";
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [done]);

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <style>{styles}</style>

      {/* Background decorations */}
      <svg className="bg-ripple" viewBox="0 0 700 700">
        <circle cx="700" cy="0" r="80" />
        <circle cx="700" cy="0" r="80" />
        <circle cx="700" cy="0" r="80" />
        <circle cx="700" cy="0" r="80" />
      </svg>

      <svg className="fingerprint" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="50" rx="48" ry="48" fill="none" stroke="#2563EB" strokeWidth="1.2"/>
        <ellipse cx="50" cy="50" rx="38" ry="39" fill="none" stroke="#2563EB" strokeWidth="1.2"/>
        <ellipse cx="50" cy="50" rx="28" ry="30" fill="none" stroke="#2563EB" strokeWidth="1.2"/>
        <ellipse cx="50" cy="50" rx="18" ry="20" fill="none" stroke="#2563EB" strokeWidth="1.2"/>
        <ellipse cx="50" cy="50" rx="8" ry="10" fill="none" stroke="#2563EB" strokeWidth="1.2"/>
        <line x1="50" y1="2" x2="50" y2="18" stroke="#2563EB" strokeWidth="1.2"/>
        <line x1="50" y1="82" x2="50" y2="98" stroke="#2563EB" strokeWidth="1.2"/>
      </svg>

      <div className="page">
        <div className="card">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C7 2 4.5 4 4.5 6.5c0 1.2.5 2.3 1.3 3.1L4 11.5c-.3.3-.3.8 0 1.1l1.1 1.1c.3.3.8.3 1.1 0l1.1-1.1c.6.3 1.4.4 2.2.4h1c.8 0 1.6-.1 2.2-.4l1.1 1.1c.3.3.8.3 1.1 0l1.1-1.1c.3-.3.3-.8 0-1.1l-1.8-1.9c.8-.8 1.3-1.9 1.3-3.1C15.5 4 13 2 10 2z" fill="white"/>
                <circle cx="10" cy="14.5" r="3.5" fill="white"/>
              </svg>
            </div>
            <span className="logo-name">SahiHai</span>
          </div>

          {done ? (
            <div className="success-screen">
              <div className="success-icon">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M8 18l7 7 13-13" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1>You're verified!</h1>
              <p className="subtitle" style={{marginBottom: 0}}>
                Your identity has been confirmed.<br/>
                Redirecting to onboarding...
              </p>
              <div style={{marginTop: 20, display: "flex", justifyContent: "center"}}>
                <div className="spinner" style={{borderTopColor: BLUE_PRIMARY, border: `2px solid #E2E8F0`, borderTopWidth: 2}}></div>
              </div>
            </div>
          ) : (
            <>
              <h1>Create your account</h1>
              <p className="subtitle">Smarter identity verification, built for you.</p>

              {/* Google */}
              <button className="social-btn" onClick={handleGoogleSignup} disabled={loading}>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                  <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                Continue with Google 
              </button>

              <div className="divider">
                <div className="divider-line"/>
                <span className="divider-text">or sign up with</span>
                <div className="divider-line"/>
              </div>

              {/* Method tabs */}
              <div className="method-tabs">
                <button
                  className={`tab-btn ${method === "email" ? "active" : ""}`}
                  onClick={() => setMethod("email")}
                >
                  📧 Email
                </button>
                <button
                  className={`tab-btn ${method === "phone" ? "active" : ""}`}
                  onClick={() => setMethod("phone")}
                >
                  📱 Phone
                </button>
              </div>

              {method && (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="field" style={{animationDelay: "0ms"}}>
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder="Jane"
                        value={form.firstName}
                        onChange={update("firstName")}
                        required
                      />
                    </div>
                    <div className="field" style={{animationDelay: "50ms"}}>
                      <label>Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={update("lastName")}
                        required
                      />
                    </div>
                  </div>

                  {method === "email" ? (
                    <div className="field" style={{animationDelay: "100ms"}}>
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={update("email")}
                        required
                      />
                    </div>
                  ) : (
                    <div className="field" style={{animationDelay: "100ms"}}>
                      <label>Phone Number</label>
                      <div className="phone-wrap">
                        <div className="phone-prefix">🇮🇳 +91</div>
                        <input
                          type="tel"
                          placeholder="98765 43210"
                          value={form.phone}
                          onChange={update("phone")}
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="field" style={{animationDelay: "150ms"}}>
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Min. 8 characters"
                      value={form.password}
                      onChange={update("password")}
                      required
                    />
                    {form.password && (
                      <>
                        <div className="strength-bar">
                          {[1, 2, 3].map(i => (
                            <div
                              key={i}
                              className={`strength-seg ${
                                i <= pwStrength
                                  ? pwStrength === 1 ? "weak"
                                  : pwStrength === 2 ? "ok"
                                  : "strong"
                                  : ""
                              }`}
                            />
                          ))}
                        </div>
                        <div style={{fontSize: 11, color: pwStrength === 1 ? "#EF4444" : pwStrength === 2 ? "#F59E0B" : "#10B981", marginTop: 4}}>
                          {strengthLabels[pwStrength]}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="field" style={{animationDelay: "200ms"}}>
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Repeat password"
                      value={form.confirmPassword}
                      onChange={update("confirmPassword")}
                      required
                    />
                    {form.confirmPassword && form.password !== form.confirmPassword && (
                      <div style={{fontSize: 11, color: "#EF4444", marginTop: 4}}>Passwords don't match</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading || (!!form.confirmPassword && form.password !== form.confirmPassword)}
                  >
                    {loading ? <><span className="spinner"/>&nbsp;Verifying...</> : "Create Account →"}
                  </button>

                  <p className="terms">
                    By continuing, you agree to our{" "}
                    <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy</a>.
                  </p>
                </form>
              )}

              <p className="signin-link">
                Already have an account? <a href="/login">Sign in</a>
              </p>

            </>
          )}
        </div>
      </div>
    </>
  );
}