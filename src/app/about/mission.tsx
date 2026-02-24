import Link from "next/link";

export default function Mission() {
    return (
        <div style={styles.container}>
            {/* Label/Badge */}
            <div style={styles.badgeWrap}>
                <span style={styles.badge}>Our Mission</span>
            </div>

            {/* Main Statement */}
            <h2 style={styles.heading}>
                Empowering businesses with
                <span style={styles.highlight}> seamless identity verification.</span>
            </h2>

            {/* Description */}
            <div style={styles.contentWrap}>
                <p style={styles.paragraph}>
                    At SahiHai, we believe that trust is the foundation of every successful digital interaction. In a world where digital fraud is constantly evolving, businesses need robust, reliable, and swift verification systems to protect both themselves and their users.
                </p>
                <p style={styles.paragraph}>
                    Our mission is to democratize access to enterprise-grade identity verification. By combining advanced AI, comprehensive global data sources, and an uncompromising focus on user experience, we are building the definitive trust infrastructure for the modern internet. We make it easy to be secure, so you can focus on building what matters.
                </p>
            </div>

            {/* Stats/Metrics */}
            <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                    <div style={styles.statNumber}>180+</div>
                    <div style={styles.statLabel}>Countries Covered</div>
                </div>
                <div style={styles.statCard}>
                    <div style={styles.statNumber}>99.9%</div>
                    <div style={styles.statLabel}>Uptime SLA</div>
                </div>
                <div style={styles.statCard}>
                    <div style={styles.statNumber}>&lt;2s</div>
                    <div style={styles.statLabel}>Avg Processing Time</div>
                </div>
            </div>

            {/* Link to full Mission page */}
            <div style={styles.btnWrap}>
                <Link href="/mission" style={styles.missionBtn}>
                    Read Our Full Mission
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 24,
        height: "100%",
    },
    badgeWrap: {
        display: "flex",
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
        margin: 0,
        lineHeight: 1.15,
        letterSpacing: "-0.8px",
    },
    highlight: {
        color: "var(--blue)",
    },
    contentWrap: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        marginTop: 8,
    },
    paragraph: {
        fontSize: 16,
        color: "#5c677d",
        margin: 0,
        lineHeight: 1.7,
    },
    statsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: 16,
        marginTop: 24,
    },
    statCard: {
        background: "#fff",
        padding: "20px",
        borderRadius: 16,
        border: "1px solid #e8ecf4",
        boxShadow: "0 4px 12px rgba(59,110,248,0.03)",
        display: "flex",
        flexDirection: "column",
        gap: 4,
    },
    statNumber: {
        fontSize: 28,
        fontWeight: 800,
        color: "var(--blue)",
        letterSpacing: "-1px",
    },
    statLabel: {
        fontSize: 13,
        fontWeight: 600,
        color: "#7a8599",
    },
    btnWrap: {
        marginTop: 16,
    },
    missionBtn: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 24px",
        background: "var(--blue)",
        color: "#fff",
        borderRadius: 12,
        fontSize: 15,
        fontWeight: 600,
        textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
        boxShadow: "0 4px 14px rgba(59,110,248,0.25)",
    },
};
