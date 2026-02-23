'use client';
import { useState } from "react";

export default function EmailLogin({ onBack }: { onBack: () => void }) {
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
        // Simulate login API call
        setTimeout(() => {
            setLoading(false);
            // Dummy success logic would redirect here
            console.log("Logged in with email!");
        }, 1500);
    };

    return (
        <>
            <button style={styles.backBtn} onClick={onBack}>
                <svg fill="currentColor" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
                </svg>
                Back
            </button>

            <div style={styles.header}>
                <h1 style={styles.heading}>Sign in with Email</h1>
                <p style={styles.subtext}>Enter your credentials to access your account.</p>
            </div>

            <form onSubmit={handleSubmit} style={styles.formContainer}>
                {/* Email */}
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email Address</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
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
                    {loading ? "Signing in..." : "Sign In"}
                </button>
            </form>

            {/* Footer note */}
            <p style={styles.footerNote}>
                Don't have an account?{" "}
                <a href="/signup" style={styles.footerLink}>Sign up</a>
            </p>
        </>
    );
}

const styles: Record<string, React.CSSProperties> = {
    backBtn: {
        background: "none",
        border: "none",
        color: "#7a8599",
        fontSize: 14,
        fontWeight: 500,
        cursor: "pointer",
        padding: 0,
        marginBottom: 24,
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "inherit",
        transition: "color 0.2s",
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
        marginBottom: 24,
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
    },
    footerNote: {
        fontSize: 13,
        color: "#7a8599",
        textAlign: "center",
        margin: 0,
    },
    footerLink: {
        color: "var(--blue)",
        fontWeight: 600,
        textDecoration: "none",
    },
};
