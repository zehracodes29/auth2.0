export default function ContactInfo() {
    return (
        <div style={styles.container}>
            {/* Header */}
            <div style={styles.header}>
                <h2 style={styles.heading}>Get in touch</h2>
                <p style={styles.subtext}>
                    Have questions or need assistance? We're here to help. Reach out to us through any of the channels below.
                </p>
            </div>

            <div style={styles.infoList}>
                {/* Address */}
                <div style={styles.infoItem}>
                    <div style={styles.iconWrap}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div>
                        <h3 style={styles.label}>Office Address</h3>
                        <p style={styles.value}>xyz , Lucknow , TC 22xxxx</p>
                    </div>
                </div>

                {/* Email */}
                <div style={styles.infoItem}>
                    <div style={styles.iconWrap}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </div>
                    <div>
                        <h3 style={styles.label}>Email Address</h3>
                        <p style={styles.value}>support@sahihai.com</p>
                    </div>
                </div>

                {/* Phone */}
                <div style={styles.infoItem}>
                    <div style={styles.iconWrap}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                            <line x1="12" y1="18" x2="12.01" y2="18" />
                        </svg>
                    </div>
                    <div>
                        <h3 style={styles.label}>Phone Number</h3>
                        <p style={styles.value}>+91 98xxxxxxxx</p>
                    </div>
                </div>

                {/* Hours */}
                <div style={styles.infoItem}>
                    <div style={styles.iconWrap}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <div>
                        <h3 style={styles.label}>Business Hours</h3>
                        <p style={styles.value}>Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 32,
        height: "100%",
    },
    header: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
    },
    heading: {
        fontSize: 28,
        fontWeight: 800,
        color: "#1a1a2e",
        margin: 0,
        letterSpacing: "-0.6px",
    },
    subtext: {
        fontSize: 15,
        color: "#7a8599",
        margin: 0,
        lineHeight: 1.6,
    },
    infoList: {
        display: "flex",
        flexDirection: "column",
        gap: 24,
    },
    infoItem: {
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
    },
    iconWrap: {
        width: 44,
        height: 44,
        borderRadius: 12,
        background: "#f0f4ff",
        color: "var(--blue)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },
    label: {
        fontSize: 14,
        fontWeight: 700,
        color: "#1a1a2e",
        margin: "0 0 4px",
    },
    value: {
        fontSize: 14,
        color: "#5c677d",
        margin: 0,
        lineHeight: 1.5,
    },
};
