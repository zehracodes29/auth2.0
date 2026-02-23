'use client';
import { useState } from "react";

export default function PhoneLogin({ onBack }: { onBack: () => void }) {
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handlePhoneSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (phone.length < 10) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }
        setError("");
        setLoading(true);
        // Simulate sending OTP
        setTimeout(() => {
            setLoading(false);
            setStep("otp");
        }, 1200);
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const code = otp.join("");
        if (code.length < 6) {
            setError("Please enter the 6-digit code.");
            return;
        }
        setError("");
        setLoading(true);
        // Simulate verifying OTP
        setTimeout(() => {
            setLoading(false);
            // Dummy success logic would redirect here
            console.log("Logged in with phone!");
        }, 1500);
    };

    const updateOtp = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-advance logic (simplified)
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    return (
        <>
            <button style={styles.backBtn} onClick={step === "otp" ? () => setStep("phone") : onBack}>
                <svg fill="currentColor" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
                </svg>
                Back
            </button>

            <div style={styles.header}>
                <h1 style={styles.heading}>
                    {step === "phone" ? "Sign in with Phone" : "Verify your number"}
                </h1>
                <p style={styles.subtext}>
                    {step === "phone" ? "We'll send you a temporary login code." : `We sent a code to +91 ${phone}`}
                </p>
            </div>

            {step === "phone" ? (
                <form onSubmit={handlePhoneSubmit} style={styles.formContainer}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Phone Number</label>
                        <div style={styles.phoneWrapper}>
                            <div style={styles.countryCode}>+91</div>
                            <input
                                type="tel"
                                placeholder="00000 00000"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").substring(0, 10))}
                                style={{ ...styles.input, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftWidth: "1.5px" }}
                                required
                            />
                        </div>
                    </div>

                    {error && <div style={styles.errorBox}>{error}</div>}

                    <button
                        type="submit"
                        style={{
                            ...styles.submitBtn,
                            opacity: phone.length >= 10 ? 1 : 0.6,
                            cursor: phone.length >= 10 && !loading ? "pointer" : "not-allowed"
                        }}
                        disabled={phone.length < 10 || loading}
                    >
                        {loading ? "Sending Code..." : "Send Login Code"}
                    </button>
                </form>
            ) : (
                <form onSubmit={handleOtpSubmit} style={styles.formContainer}>
                    <div style={styles.otpContainer}>
                        {otp.map((digit, i) => (
                            <input
                                key={i}
                                id={`otp-${i}`}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => updateOtp(i, e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Backspace" && !digit && i > 0) {
                                        const prevInput = document.getElementById(`otp-${i - 1}`);
                                        if (prevInput) prevInput.focus();
                                    }
                                }}
                                style={styles.otpInput}
                            />
                        ))}
                    </div>

                    {error && <div style={styles.errorBox}>{error}</div>}

                    <button
                        type="submit"
                        style={{
                            ...styles.submitBtn,
                            opacity: otp.join("").length === 6 ? 1 : 0.6,
                            cursor: otp.join("").length === 6 && !loading ? "pointer" : "not-allowed"
                        }}
                        disabled={otp.join("").length < 6 || loading}
                    >
                        {loading ? "Verifying..." : "Verify & Sign In"}
                    </button>

                    <p style={{ ...styles.footerNote, marginTop: 16 }}>
                        Didn't receive code? <span style={styles.footerLink}>Resend</span>
                    </p>
                </form>
            )}
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
        marginBottom: 16,
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
    },
    label: {
        fontSize: 13,
        fontWeight: 600,
        color: "#374151",
    },
    phoneWrapper: {
        display: "flex",
        alignItems: "stretch",
    },
    countryCode: {
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        background: "#f4f6fc",
        borderWidth: "1.5px",
        borderStyle: "solid",
        borderColor: "#e8ecf4",
        borderRightWidth: 0,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        color: "#4a5568",
        fontSize: 14,
        fontWeight: 500,
    },
    input: {
        flex: 1,
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
    otpContainer: {
        display: "flex",
        gap: 8,
        justifyContent: "space-between",
    },
    otpInput: {
        width: "100%",
        aspectRatio: "1/1.1",
        textAlign: "center",
        fontSize: 20,
        fontWeight: 600,
        borderRadius: 12,
        borderWidth: "1.5px",
        borderStyle: "solid",
        borderColor: "#e8ecf4",
        color: "#1a1a2e",
        background: "#fafbff",
        outline: "none",
        transition: "all 0.15s",
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
        cursor: "pointer",
    },
};
