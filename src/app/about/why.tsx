import styles from './why.module.css';

export default function WhySahihai() {
    return (
        <section className={styles.section}>
            <p className={styles.eyebrow}>Why choose us</p>
            <h2 className={styles.headline}>Built for trust,<br /><span>designed for scale.</span></h2>

            <div className={styles.grid}>

                {/* Card 1: Bank-Grade Security */}
                <div className={`${styles.card} ${styles.card1}`}>
                    <div className={styles.progressBar}></div>
                    <span className={styles.cardNumber}>01</span>
                    <div className={styles.iconWrap}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                    </div>
                    <h3 className={styles.cardTitle}>Bank-Grade Security</h3>
                    <p className={styles.cardDesc}>Your data is protected with AES-256 encryption, zero-knowledge architecture, and SOC 2 Type II compliance — the same standard trusted by global financial institutions.</p>
                    <span className={styles.tag}>256-bit Encrypted</span>
                </div>

                {/* Card 2: Seamless Integration */}
                <div className={`${styles.card} ${styles.card2}`}>
                    <div className={styles.progressBar}></div>
                    <span className={styles.cardNumber}>02</span>
                    <div className={styles.iconWrap}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                        </svg>
                    </div>
                    <h3 className={styles.cardTitle}>Seamless Integration</h3>
                    <p className={styles.cardDesc}>Connect with your existing stack in minutes — REST APIs, webhooks, and native plugins for 200+ platforms. No friction, no rewrites, just plug in and go.</p>
                    <span className={styles.tag}>200+ Integrations</span>
                </div>

                {/* Card 3: AI-Powered Accuracy */}
                <div className={`${styles.card} ${styles.card3}`}>
                    <div className={styles.progressBar}></div>
                    <span className={styles.cardNumber}>03</span>
                    <div className={styles.iconWrap}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 0 2h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1 0-2h1a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2z" />
                            <path d="M9 14h.01M15 14h.01M9.5 17.5a3.5 3.5 0 0 0 5 0" />
                        </svg>
                    </div>
                    <h3 className={styles.cardTitle}>AI-Powered Accuracy</h3>
                    <p className={styles.cardDesc}>Our models are trained on domain-specific data, delivering 99.4% accuracy out of the box. Continuously learning, always improving — intelligence that works as hard as you do.</p>
                    <span className={styles.tag}>99.4% Accuracy</span>
                </div>

            </div>
        </section>
    );
}
