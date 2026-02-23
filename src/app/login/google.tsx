'use client';
import { useState, useEffect } from "react";

export default function GoogleLogin({ onBack }: { onBack: () => void }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate Google OAuth flow
        const timer = setTimeout(() => {
            setLoading(false);
            // Dummy success logic would redirect here
            console.log("Logged in with Google!");
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <button style={styles.backBtn} onClick={onBack}>
                <svg fill="currentColor" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
                </svg>
                Cancel
            </button>

            <div style={styles.centerContainer}>
                {loading ? (
                    <>
                        <div style={styles.googleRing}>
                            <svg width="40" height="40" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                        </div>
                        <h1 style={styles.heading}>Connecting to Google</h1>
                        <p style={styles.subtext}>Please authorize SahiHai in the popup window.</p>
                    </>
                ) : (
                    <>
                        <div style={styles.successRing}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h1 style={styles.heading}>Successfully Authenticated</h1>
                        <p style={styles.subtext}>Redirecting to dashboard...</p>
                    </>
                )}
            </div>
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
    centerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingTop: 16,
        paddingBottom: 24,
    },
    googleRing: {
        width: 80,
        height: 80,
        borderRadius: "50%",
        background: "#f4f6fc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        boxShadow: "0 0 0 8px #f8faff",
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    successRing: {
        width: 80,
        height: 80,
        borderRadius: "50%",
        background: "#10B981",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        boxShadow: "0 0 0 8px rgba(16, 185, 129, 0.2)",
    },
    heading: {
        fontSize: 22,
        fontWeight: 800,
        color: "#1a1a2e",
        margin: "0 0 8px",
        letterSpacing: "-0.5px",
    },
    subtext: {
        fontSize: 14,
        color: "#7a8599",
        margin: 0,
        lineHeight: 1.5,
    },
};
