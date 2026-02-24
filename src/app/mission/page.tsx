'use client';

import Link from "next/link";

export default function MissionPage() {
    return (
        <div style={styles.bg}>
            {/* Subtle background blobs */}
            <div style={styles.blob1} />
            <div style={styles.blob2} />

            {/* Navigation Header */}
            <div style={styles.navHeader}>
                <div style={styles.logoWrap}>
                    <div style={styles.logoIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-5 12v-1c0-3.309 2.691-6 6-6h-1c-3.309 0-6 2.691-6 6v1h1zm10 0v-1c0-3.309-2.691-6-6-6h1c3.309 0 6 2.691 6 6v1h-1z" />
                        </svg>
                    </div>
                    <span style={styles.logoText}>SahiHai</span>
                </div>
                <Link href="/about" style={styles.backLink}>
                    <svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24">
                        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
                    </svg>
                    Back to About
                </Link>
            </div>

            <div style={styles.container}>
                <div style={styles.card}>
                    <div style={styles.badgeWrap}>
                        <span style={styles.badge}>Our Mission</span>
                    </div>

                    <h1 style={styles.heading}>
                        Building the definitive trust infrastructure for the modern internet.
                    </h1>

                    <div style={styles.contentWrap}>
                        <p style={styles.paragraph}>
                            At SahiHai, we believe that trust is the foundation of every successful digital interaction. In a world where digital fraud is constantly evolving, businesses need robust, reliable, and swift verification systems to protect both themselves and their users.
                        </p>
                        <p style={styles.paragraph}>
                            Our vision goes beyond just verification. We are building an ecosystem where authentic identity is seamlessly verified without comprising privacy or user experience. The future of the digital economy depends on the ability to interact with absolute certainty.
                        </p>

                        <h3 style={styles.subheading}>Core Values</h3>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>
                                <strong>Security First:</strong> Protecting data is our highest priority, utilizing end-to-end encryption and compliance-first practices.
                            </li>
                            <li style={styles.listItem}>
                                <strong>User Centricity:</strong> Authentication shouldn't come at the cost of conversion. We strive for frictionless flows.
                            </li>
                            <li style={styles.listItem}>
                                <strong>Inclusivity:</strong> A global product serving global citizens, providing equitable access to services by recognizing diverse identity documents.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    bg: {
        minHeight: "100vh",
        background: "#f0f4ff",
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        position: "relative",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
    },
    blob1: {
        position: "absolute",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,110,248,0.06) 0%, transparent 70%)",
        top: -150,
        right: -100,
        pointerEvents: "none",
    },
    blob2: {
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,110,248,0.05) 0%, transparent 70%)",
        bottom: -150,
        left: -100,
        pointerEvents: "none",
    },
    navHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 48px",
        position: "relative",
        zIndex: 10,
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
    },
    logoWrap: {
        display: "flex",
        alignItems: "center",
        gap: 10,
    },
    logoIcon: {
        width: 32,
        height: 32,
        background: "var(--blue)",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(59,110,248,0.3)",
    },
    logoText: {
        fontWeight: 700,
        fontSize: 18,
        color: "#1a1a2e",
        letterSpacing: "-0.4px",
    },
    backLink: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        color: "#5c677d",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 14,
        transition: "color 0.2s",
    },
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px 80px",
        position: "relative",
        zIndex: 1,
        maxWidth: 800,
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
    },
    card: {
        background: "#fff",
        borderRadius: 24,
        padding: "54px",
        boxShadow: "0 12px 48px rgba(59,110,248,0.06), 0 2px 6px rgba(0,0,0,0.03)",
        width: "100%",
    },
    badgeWrap: {
        display: "flex",
        marginBottom: 24,
    },
    badge: {
        background: "#eef2ff",
        color: "var(--blue)",
        padding: "6px 14px",
        borderRadius: 100,
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.5px",
        textTransform: "uppercase",
    },
    heading: {
        fontSize: "clamp(32px, 5vw, 42px)",
        fontWeight: 800,
        color: "#1a1a2e",
        margin: "0 0 24px",
        lineHeight: 1.15,
        letterSpacing: "-0.8px",
    },
    contentWrap: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
    },
    paragraph: {
        fontSize: 16,
        color: "#5c677d",
        margin: 0,
        lineHeight: 1.7,
    },
    subheading: {
        fontSize: 22,
        fontWeight: 700,
        color: "#1a1a2e",
        marginTop: 24,
        marginBottom: 8,
    },
    list: {
        paddingLeft: 20,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 12,
    },
    listItem: {
        fontSize: 16,
        color: "#5c677d",
        lineHeight: 1.6,
    }
};
