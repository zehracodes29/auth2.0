export default function WhySahihai() {
    const reasons = [
        {
            title: "Bank-Grade Security",
            description: "We employ military-grade encryption and strictly adhere to global compliance standards (GDPR, SOC2) to ensure your users' data never falls into the wrong hands.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            )
        },
        {
            title: "Seamless Integration",
            description: "Our developer-first APIs and drop-in SDKs allow you to implement robust identity verification into your existing flows within hours, not weeks.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            )
        },
        {
            title: "AI-Powered Accuracy",
            description: "Leveraging advanced machine learning algorithms, our system can detect deepfakes, tampered documents, and synthetic identities with an industry-leading 99.8% precision rate.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            )
        }
    ];

    return (
        <div style={styles.card}>
            <h3 style={styles.heading}>Why Choose Sahihai?</h3>

            <div style={styles.grid}>
                {reasons.map((reason, idx) => (
                    <div key={idx} style={styles.featureItem}>
                        <div style={styles.iconWrap}>
                            {reason.icon}
                        </div>
                        <div style={styles.textContent}>
                            <h4 style={styles.title}>{reason.title}</h4>
                            <p style={styles.description}>{reason.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative Blob */}
            <div style={styles.decorativeBg} />
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    card: {
        background: "#fff",
        borderRadius: 24,
        padding: "40px",
        boxShadow: "0 12px 48px rgba(59,110,248,0.06), 0 2px 6px rgba(0,0,0,0.03)",
        width: "100%",
        position: "relative",
        overflow: "hidden",
    },
    heading: {
        fontSize: 24,
        fontWeight: 800,
        color: "#1a1a2e",
        margin: "0 0 32px 0",
        letterSpacing: "-0.4px",
        position: "relative",
        zIndex: 2,
    },
    grid: {
        display: "flex",
        flexDirection: "column",
        gap: 32,
        position: "relative",
        zIndex: 2,
    },
    featureItem: {
        display: "flex",
        gap: 20,
        alignItems: "flex-start",
    },
    iconWrap: {
        width: 48,
        height: 48,
        borderRadius: 14,
        background: "var(--blue)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 6px 16px rgba(37,99,235,0.25)",
    },
    textContent: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        paddingTop: 2,
    },
    title: {
        fontSize: 17,
        fontWeight: 700,
        color: "#1a1a2e",
        margin: 0,
    },
    description: {
        fontSize: 14,
        color: "#5c677d",
        margin: 0,
        lineHeight: 1.6,
    },
    decorativeBg: {
        position: "absolute",
        bottom: -80,
        right: -80,
        width: 250,
        height: 250,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,110,248,0.07) 0%, transparent 70%)",
        zIndex: 1,
        pointerEvents: "none",
    },
};
