'use client';
import { useState } from "react";

export default function LoginPage() {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  return (
    <div style={styles.bg}>
      {/* Subtle background blobs */}
      <div style={styles.blob1} />
      <div style={styles.blob2} />

      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoWrap}>
          <div style={styles.logoIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-5 12v-1c0-3.309 2.691-6 6-6h-1c-3.309 0-6 2.691-6 6v1h1zm10 0v-1c0-3.309-2.691-6-6-6h1c3.309 0 6 2.691 6 6v1h-1z" />
            </svg>
          </div>
          <span style={styles.logoText}>SahiHai</span>
        </div>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.heading}>Welcome back</h1>
          <p style={styles.subtext}>Sign in to continue to your account</p>
        </div>

        {/* Buttons */}
        <div style={styles.btnStack}>
          {/* Google */}
          <button
            style={{
              ...styles.socialBtn,
              ...(hoveredBtn === "google" ? styles.socialBtnHover : {}),
            }}
            onMouseEnter={() => setHoveredBtn("google")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <div style={styles.btnIconWrap}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <span style={styles.btnLabel}>Continue with Google</span>
            <div style={styles.btnArrow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Phone */}
          <button
            style={{
              ...styles.socialBtn,
              ...(hoveredBtn === "phone" ? styles.socialBtnHover : {}),
            }}
            onMouseEnter={() => setHoveredBtn("phone")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <div style={{ ...styles.btnIconWrap, background: "#eef2ff" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <span style={styles.btnLabel}>Continue with Phone</span>
            <div style={styles.btnArrow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Email */}
          <button
            style={{
              ...styles.socialBtn,
              ...(hoveredBtn === "email" ? styles.socialBtnHover : {}),
            }}
            onMouseEnter={() => setHoveredBtn("email")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <div style={{ ...styles.btnIconWrap, background: "#eef2ff" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <span style={styles.btnLabel}>Continue with Email</span>
            <div style={styles.btnArrow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div style={styles.divider}>
          <div style={styles.dividerLine} />
          <span style={styles.dividerText}>New to SahiHai?</span>
          <div style={styles.dividerLine} />
        </div>

        {/* Sign up CTA */}
        <button style={styles.signupBtn}>
          Create an account
        </button>

        {/* Footer note */}
        <p style={styles.footerNote}>
          By continuing, you agree to our{" "}
          <span style={styles.footerLink}>Terms</span> and{" "}
          <span style={styles.footerLink}>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  bg: {
    minHeight: "100vh",
    background: "#f0f4ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    padding: "24px 16px",
    position: "relative",
    overflow: "hidden",
  },
  blob1: {
    position: "absolute",
    width: 400,
    height: 400,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59,110,248,0.08) 0%, transparent 70%)",
    top: -80,
    right: -80,
    pointerEvents: "none",
  },
  blob2: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59,110,248,0.06) 0%, transparent 70%)",
    bottom: -60,
    left: -60,
    pointerEvents: "none",
  },
  card: {
    background: "#fff",
    borderRadius: 28,
    padding: "44px 44px 36px",
    width: "100%",
    maxWidth: 420,
    boxShadow: "0 12px 48px rgba(59,110,248,0.09), 0 2px 6px rgba(0,0,0,0.04)",
    position: "relative",
    zIndex: 1,
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 32,
  },
  logoIcon: {
    width: 38,
    height: 38,
    background: "var(--blue)",
    borderRadius: 11,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(59,110,248,0.3)",
  },
  logoText: {
    fontWeight: 700,
    fontSize: 19,
    color: "#1a1a2e",
    letterSpacing: "-0.4px",
  },
  header: {
    marginBottom: 32,
  },
  heading: {
    fontSize: 28,
    fontWeight: 800,
    color: "#1a1a2e",
    margin: "0 0 6px",
    letterSpacing: "-0.6px",
  },
  subtext: {
    fontSize: 14,
    color: "#7a8599",
    margin: 0,
  },
  btnStack: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 28,
  },
  socialBtn: {
    width: "100%",
    padding: "15px 18px",
    borderRadius: 14,
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: "#e8ecf4",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    gap: 14,
    cursor: "pointer",
    transition: "border-color 0.18s, box-shadow 0.18s, transform 0.15s",
    fontFamily: "inherit",
    textAlign: "left",
  },
  socialBtnHover: {
    borderColor: "#c7d4fd",
    boxShadow: "0 4px 16px rgba(59,110,248,0.1)",
    transform: "translateY(-1px)",
    background: "#fafbff",
  },
  btnIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    background: "#f8f9ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  btnLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: 500,
    color: "#1a1a2e",
    letterSpacing: "-0.1px",
  },
  btnArrow: {
    color: "#c0c8d8",
    display: "flex",
    alignItems: "center",
    transition: "color 0.2s",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    background: "#edf0f7",
  },
  dividerText: {
    fontSize: 13,
    color: "#aab4c8",
    whiteSpace: "nowrap",
  },
  signupBtn: {
    width: "100%",
    padding: "14px",
    borderRadius: 12,
    border: "1.5px solid #d0daff",
    background: "#eef2ff",
    color: "var(--blue)",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "background 0.18s",
    marginBottom: 20,
  },
  footerNote: {
    fontSize: 12,
    color: "#b0bac9",
    textAlign: "center",
    margin: 0,
    lineHeight: 1.6,
  },
  footerLink: {
    color: "var(--blue)",
    fontWeight: 500,
    cursor: "pointer",
  },
};