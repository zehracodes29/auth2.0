'use client';

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            // Simulate API call
            setTimeout(() => {
                setLoading(false);
                setSuccess(true);
                setFormData({ name: "", email: "", phone: "", message: "" });
                // Clear success message after 3 seconds
                setTimeout(() => setSuccess(false), 3000);
            }, 1500);
        }
    };

    return (
        <div style={styles.card}>
            {success ? (
                <div style={styles.successState}>
                    <div style={styles.successIcon}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>
                    <h3 style={styles.successHeading}>Message Sent!</h3>
                    <p style={styles.successText}>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={styles.formContainer}>
                    <div style={styles.row}>
                        {/* Name */}
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                style={{ ...styles.input, ...(errors.name ? styles.inputError : {}) }}
                            />
                            {errors.name && <span style={styles.errorText}>{errors.name}</span>}
                        </div>

                        {/* Phone */}
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+1 (555) 000-0000"
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ ...styles.input, ...(errors.phone ? styles.inputError : {}) }}
                            />
                            {errors.phone && <span style={styles.errorText}>{errors.phone}</span>}
                        </div>
                    </div>

                    {/* Email */}
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ ...styles.input, ...(errors.email ? styles.inputError : {}) }}
                        />
                        {errors.email && <span style={styles.errorText}>{errors.email}</span>}
                    </div>

                    {/* Message */}
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Your Message</label>
                        <textarea
                            name="message"
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            style={{ ...styles.input, ...styles.textarea, ...(errors.message ? styles.inputError : {}) }}
                        />
                        {errors.message && <span style={styles.errorText}>{errors.message}</span>}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        style={{
                            ...styles.submitBtn,
                            opacity: loading ? 0.7 : 1,
                            cursor: loading ? "not-allowed" : "pointer"
                        }}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            )}
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    card: {
        background: "#fff",
        borderRadius: 24,
        padding: "36px",
        boxShadow: "0 12px 48px rgba(59,110,248,0.06), 0 2px 6px rgba(0,0,0,0.03)",
        width: "100%",
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
    },
    row: {
        display: "flex",
        gap: 20,
        flexWrap: "wrap",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        flex: "1 1 calc(50% - 10px)",
        minWidth: 200,
    },
    label: {
        fontSize: 13,
        fontWeight: 600,
        color: "#374151",
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
    textarea: {
        resize: "vertical",
        minHeight: 100,
    },
    inputError: {
        borderColor: "#fecaca",
        background: "#fef2f2",
    },
    errorText: {
        fontSize: 12,
        color: "#ef4444",
        marginTop: 2,
        fontWeight: 500,
    },
    submitBtn: {
        width: "100%",
        padding: "15px",
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
    successState: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 0",
        minHeight: 350,
    },
    successIcon: {
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "#ecfdf5",
        color: "#10b981",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    successHeading: {
        fontSize: 24,
        fontWeight: 800,
        color: "#1a1a2e",
        margin: "0 0 8px",
    },
    successText: {
        fontSize: 15,
        color: "#6b7280",
        margin: 0,
        maxWidth: 280,
        lineHeight: 1.5,
    },
};
