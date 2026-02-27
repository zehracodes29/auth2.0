export default function Mission() {
    return (
        <div style={styles.container}>
            {/* Label/Badge */}
            <div style={styles.badgeWrap}>
                <span style={styles.badge}>Our Mission</span>
            </div>

            {/* Main Statement */}
            <h2 style={styles.heading}>
                Building the definitive trust infrastructure for the modern internet.
            </h2>

            {/* Description */}
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
