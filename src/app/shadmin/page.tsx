'use client';
import { useState } from "react";
import Link from "next/link";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }
        setError("");
        setLoading(true);
        // Simulate admin login API call
        setTimeout(() => {
            setLoading(false);
            // Dummy success logic would redirect to admin dashboard
            console.log("Logged in to admin with email!");
        }, 1500);
    };

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
                    <span style={styles.logoText}>SahiHai Admin</span>
                </div>

                <Link href="/" style={styles.backBtn}>
                    <svg fill="currentColor" width="18" height="18" viewBox="0 0 24 24">
                        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
                    </svg>
                    Back to Home
                </Link>

                {/* Header */}
                <div style={styles.header}>
                    <h1 style={styles.heading}>Admin Portal</h1>
                    <p style={styles.subtext}>Enter your admin credentials to continue.</p>
                </div>

                <form onSubmit={handleSubmit} style={styles.formContainer}>
                    {/* Email */}
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Admin Email Address</label>
                        <input
                            type="email"
                            placeholder="admin@sahihai.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div style={styles.inputGroup}>
                        <div style={styles.labelRow}>
                            <label style={styles.label}>Password</label>
                            <span style={styles.forgotLink}>Forgot password?</span>
                        </div>
                        <div style={styles.pwdWrapper}>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={styles.input}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={styles.eyeBtn}
                                tabIndex={-1}
                            >
                                {showPassword ? (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aab4c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                        <line x1="1" y1="1" x2="23" y2="23" />
                                    </svg>
                                ) : (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aab4c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {error && <div style={styles.errorBox}>{error}</div>}

                    {/* Submit */}
                    <button
                        type="submit"
                        style={{
                            ...styles.submitBtn,
                            opacity: email && password ? 1 : 0.6,
                            cursor: email && password && !loading ? "pointer" : "not-allowed"
                        }}
                        disabled={!email || !password || loading}
                    >
                        {loading ? "Authenticating..." : "Sign In to Admin"}
                    </button>
                </form>

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
        marginBottom: 24,
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
    backBtn: {
        background: "none",
        border: "none",
        color: "#7a8599",
        fontSize: 14,
        fontWeight: 500,
        cursor: "pointer",
        padding: 0,
        marginBottom: 24,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "inherit",
        transition: "color 0.2s",
        textDecoration: "none",
    },
    header: {
        marginBottom: 24,
    },
    heading: {
        fontSize: 26,
        fontWeight: 800,
        color: "#1a1a2e",
        margin: "0 0 6px",
        letterSpacing: "-0.6px",
    },
    subtext: {
        fontSize: 14,
        color: "#7a8599",
        margin: 0,
        lineHeight: 1.5,
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        marginBottom: 12,
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
    },
    labelRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    label: {
        fontSize: 13,
        fontWeight: 600,
        color: "#374151",
    },
    forgotLink: {
        fontSize: 13,
        fontWeight: 500,
        color: "var(--blue)",
        cursor: "pointer",
    },
    pwdWrapper: {
        position: "relative",
        display: "flex",
        alignItems: "center",
    },
    input: {
        width: "100%",
        padding: "13px 14px",
        borderRadius: 12,
        borderWidth: "1.5px",
        borderStyle: "solid",
        borderColor: "#e8ecf4",
        fontSize: 14,
        color: "#1a1a2e",
        outline: "none",
        fontFamily: "inherit",
        background: "#fafbff",
        boxSizing: "border-box",
        transition: "border-color 0.15s, box-shadow 0.15s",
    },
    eyeBtn: {
        position: "absolute",
        right: 14,
        top: "50%",
        transform: "translateY(-50%)",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        display: "flex",
        alignItems: "center",
    },
    errorBox: {
        background: "#fef2f2",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#fecaca",
        borderRadius: 10,
        padding: "10px 14px",
        fontSize: 13,
        color: "#ef4444",
        fontWeight: 500,
    },
    submitBtn: {
        width: "100%",
        padding: "14px",
        borderRadius: 12,
        background: "var(--blue)",
        color: "#fff",
        border: "none",
        fontSize: 15,
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "background 0.2s, opacity 0.2s",
        marginTop: 8,
    }
};
