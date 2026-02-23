import { useState } from "react";

type Step = "landing" | "details" | "phone" | "otp";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  origin: string;
  businessType: string;
}

const BUSINESS_TYPES = [
  { value: "", label: "Select business type" },
  { value: "retailer", label: "🛍️  Retailer" },
  { value: "pg_owner", label: "🏠  PG Owner" },
  { value: "landlord", label: "🔑  Landlord / Property Owner" },
  { value: "hotel", label: "🏨  Hotel / Hospitality" },
  { value: "restaurant", label: "🍽️  Restaurant / Café" },
  { value: "salon", label: "💇  Salon / Spa" },
  { value: "clinic", label: "🏥  Clinic / Healthcare" },
  { value: "freelancer", label: "💻  Freelancer / Consultant" },
  { value: "ngo", label: "🤝  NGO / Non-profit" },
  { value: "other", label: "🏢  Other" },
];

const COUNTRIES = [
  { code: "IN", name: "India", dial: "+91" },
  { code: "US", name: "United States", dial: "+1" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "AE", name: "UAE", dial: "+971" },
  { code: "SG", name: "Singapore", dial: "+65" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "NL", name: "Netherlands", dial: "+31" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "NZ", name: "New Zealand", dial: "+64" },
];

function Label({ text, optional }: { text: string; optional?: boolean }) {
  return (
    <div style={styles.labelRow}>
      <span style={styles.label}>{text}</span>
      {optional && <span style={styles.optionalTag}>optional</span>}
    </div>
  );
}

function Input({
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...styles.input,
        borderColor: focused ? "var(--blue)" : "#e8ecf4",
        boxShadow: focused ? "0 0 0 3px rgba(59,110,248,0.1)" : "none",
      }}
    />
  );
}

function SelectField({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...styles.select,
        borderColor: focused ? "var(--blue)" : "#e8ecf4",
        boxShadow: focused ? "0 0 0 3px rgba(59,110,248,0.1)" : "none",
        color: value ? "#1a1a2e" : "#aab4c8",
      }}
    >
      {children}
    </select>
  );
}

export default function SignupPage() {
  const [step, setStep] = useState<Step>("landing");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    origin: "IN",
    businessType: "",
  });

  const setField = (key: keyof FormData) => (val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const detailsValid =
    form.firstName.trim().length > 0 &&
    form.lastName.trim().length > 0 &&
    form.phone.length >= 7 &&
    form.origin !== "" &&
    form.businessType !== "";

  const progressStep =
    step === "landing" ? 0 : step === "details" ? 1 : step === "phone" ? 2 : 3;

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logo}>
          <div style={styles.logoIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-5 12v-1c0-3.309 2.691-6 6-6h-1c-3.309 0-6 2.691-6 6v1h1zm10 0v-1c0-3.309-2.691-6-6-6h1c3.309 0 6 2.691 6 6v1h-1z" />
            </svg>
          </div>
          <span style={styles.logoText}>SahiHai</span>
        </div>

        {/* Progress bar */}
        {step !== "landing" && (
          <div style={styles.progressWrap}>
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                style={{
                  ...styles.progressStep,
                  background: progressStep >= s ? "var(--blue)" : "#e8ecf4",
                  flex: s === 2 ? 2 : 1,
                }}
              />
            ))}
          </div>
        )}

        {/* ── LANDING ── */}
        {step === "landing" && (
          <div style={styles.content}>
            <h1 style={styles.heading}>Create your account</h1>
            <p style={styles.subtext}>Smarter identity verification, built for you.</p>

            <button style={styles.googleBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>

            <div style={styles.divider}>
              <div style={styles.dividerLine} />
              <span style={styles.dividerText}>or sign up with</span>
              <div style={styles.dividerLine} />
            </div>

            <div style={styles.methodRow}>
              <button style={styles.methodBtn}>
                <span style={{ fontSize: 16 }}>📧</span>
                Email
              </button>
              <button
                style={{ ...styles.methodBtn, ...styles.methodBtnActive }}
                onClick={() => setStep("details")}
              >
                <span style={{ fontSize: 16 }}>📱</span>
                Phone
              </button>
            </div>

            <p style={styles.footer}>
              Already have an account? <span style={styles.link}>Sign in</span>
            </p>
          </div>
        )}

        {/* ── DETAILS ── */}
        {step === "details" && (
          <div style={styles.content}>
            <button style={styles.back} onClick={() => setStep("landing")}>← Back</button>
            <h1 style={styles.heading}>Your details</h1>
            <p style={styles.subtext}>Tell us a bit about yourself to get started.</p>

            {/* Name row */}
            <div style={styles.row}>
              <div style={{ flex: 1 }}>
                <Label text="First name" />
                <Input placeholder="Riya" value={form.firstName} onChange={setField("firstName")} />
              </div>
              <div style={{ flex: 1 }}>
                <Label text="Last name" />
                <Input placeholder="Sharma" value={form.lastName} onChange={setField("lastName")} />
              </div>
            </div>

            <Label text="Email address" optional />
            <Input
              type="email"
              placeholder="riya@example.com"
              value={form.email}
              onChange={setField("email")}
            />

            <Label text="Phone number" />
            <div style={styles.phoneRow}>
              <select
                value={form.countryCode}
                onChange={(e) => setField("countryCode")(e.target.value)}
                style={styles.countrySelect}
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code + c.dial} value={c.dial}>
                    {c.dial} ({c.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={form.phone}
                onChange={(e) =>
                  setField("phone")(e.target.value.replace(/\D/g, "").slice(0, 12))
                }
                style={{ ...styles.input, flex: 1, marginBottom: 0 }}
              />
            </div>

            <Label text="Country of origin" />
            <SelectField value={form.origin} onChange={setField("origin")}>
              <option value="" disabled>Select country</option>
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>{c.name}</option>
              ))}
            </SelectField>

            <Label text="Business type" />
            <SelectField value={form.businessType} onChange={setField("businessType")}>
              {BUSINESS_TYPES.map((b) => (
                <option key={b.value} value={b.value} disabled={b.value === ""}>
                  {b.label}
                </option>
              ))}
            </SelectField>

            <button
              style={{
                ...styles.primaryBtn,
                marginTop: 20,
                opacity: detailsValid ? 1 : 0.5,
                cursor: detailsValid ? "pointer" : "not-allowed",
              }}
              disabled={!detailsValid}
              onClick={() => setStep("phone")}
            >
              Continue →
            </button>

            <p style={styles.footer}>
              Already have an account? <span style={styles.link}>Sign in</span>
            </p>
          </div>
        )}

        {/* ── PHONE CONFIRM ── */}
        {step === "phone" && (
          <div style={styles.content}>
            <button style={styles.back} onClick={() => setStep("details")}>← Back</button>
            <h1 style={styles.heading}>Confirm &amp; send code</h1>
            <p style={styles.subtext}>
              We'll send a verification code to{" "}
              <strong style={{ color: "#1a1a2e" }}>
                {form.countryCode} {form.phone}
              </strong>
            </p>

            <div style={styles.summaryCard}>
              <div style={styles.summaryRow}>
                <span style={styles.summaryKey}>Name</span>
                <span style={styles.summaryVal}>{form.firstName} {form.lastName}</span>
              </div>
              {form.email && (
                <div style={styles.summaryRow}>
                  <span style={styles.summaryKey}>Email</span>
                  <span style={styles.summaryVal}>{form.email}</span>
                </div>
              )}
              <div style={styles.summaryRow}>
                <span style={styles.summaryKey}>Country</span>
                <span style={styles.summaryVal}>
                  {COUNTRIES.find((c) => c.code === form.origin)?.name}
                </span>
              </div>
              <div style={{ ...styles.summaryRow, border: "none" }}>
                <span style={styles.summaryKey}>Business</span>
                <span style={styles.summaryVal}>
                  {BUSINESS_TYPES.find((b) => b.value === form.businessType)?.label.replace(/^[\S]+\s+/, "")}
                </span>
              </div>
            </div>

            <button style={styles.primaryBtn} onClick={() => setStep("otp")}>
              Send Verification Code
            </button>

            <p style={styles.footer}>
              Already have an account? <span style={styles.link}>Sign in</span>
            </p>
          </div>
        )}

        {/* ── OTP ── */}
        {step === "otp" && (
          <div style={styles.content}>
            <button style={styles.back} onClick={() => setStep("phone")}>← Back</button>
            <h1 style={styles.heading}>Enter OTP</h1>
            <p style={styles.subtext}>
              6-digit code sent to{" "}
              <strong style={{ color: "#1a1a2e" }}>
                {form.countryCode} {form.phone}
              </strong>
            </p>

            <div style={styles.otpRow}>
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  style={{
                    ...styles.otpBox,
                    borderColor: digit ? "var(--blue)" : "#e2e8f0",
                    background: digit ? "#eef2ff" : "#fff",
                  }}
                />
              ))}
            </div>

            <button
              style={{
                ...styles.primaryBtn,
                opacity: otp.every((d) => d) ? 1 : 0.5,
                cursor: otp.every((d) => d) ? "pointer" : "not-allowed",
              }}
              disabled={!otp.every((d) => d)}
            >
              Verify &amp; Create Account
            </button>

            <p style={{ ...styles.footer, marginTop: 4 }}>
              Didn't receive it?{" "}
              <span style={styles.link} onClick={() => setStep("phone")}>
                Resend code
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  bg: {
    minHeight: "100vh",
    background: "#f0f4ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    padding: "24px 16px",
  },
  card: {
    background: "#fff",
    borderRadius: 24,
    padding: "36px 40px",
    width: "100%",
    maxWidth: 480,
    boxShadow: "0 8px 40px rgba(59,110,248,0.08), 0 1px 3px rgba(0,0,0,0.04)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 24,
  },
  logoIcon: {
    width: 36,
    height: 36,
    background: "var(--blue)",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontWeight: 700,
    fontSize: 18,
    color: "#1a1a2e",
    letterSpacing: "-0.3px",
  },
  progressWrap: {
    display: "flex",
    gap: 6,
    marginBottom: 28,
    borderRadius: 8,
    overflow: "hidden",
  },
  progressStep: {
    height: 4,
    borderRadius: 8,
    transition: "background 0.3s",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontSize: 24,
    fontWeight: 800,
    color: "#1a1a2e",
    margin: "0 0 6px",
    letterSpacing: "-0.5px",
  },
  subtext: {
    fontSize: 14,
    color: "#7a8599",
    margin: "0 0 20px",
    lineHeight: 1.5,
  },
  googleBtn: {
    width: "100%",
    padding: "13px 20px",
    borderRadius: 12,
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: "#e8ecf4",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    fontSize: 15,
    fontWeight: 500,
    color: "#1a1a2e",
    cursor: "pointer",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "20px 0",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    background: "#edf0f7",
  },
  dividerText: {
    fontSize: 13,
    color: "#aab4c8",
    whiteSpace: "nowrap",
  },
  methodRow: {
    display: "flex",
    gap: 10,
    marginBottom: 24,
  },
  methodBtn: {
    flex: 1,
    padding: "13px",
    borderRadius: 12,
    border: "none",
    background: "#f4f6fc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontSize: 14,
    fontWeight: 500,
    color: "#4a5568",
    cursor: "pointer",
  },
  methodBtnActive: {
    background: "#eef2ff",
    color: "var(--blue)",
    outline: "1.5px solid #c7d4fd",
  },
  footer: {
    fontSize: 13,
    color: "#7a8599",
    textAlign: "center",
    margin: "8px 0 0",
  },
  link: {
    color: "var(--blue)",
    fontWeight: 600,
    cursor: "pointer",
  },
  back: {
    background: "none",
    border: "none",
    color: "#7a8599",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
    padding: 0,
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  row: {
    display: "flex",
    gap: 12,
  },
  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
    marginTop: 14,
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: "#374151",
  },
  optionalTag: {
    fontSize: 11,
    color: "#aab4c8",
    background: "#f4f6fc",
    borderRadius: 6,
    padding: "2px 6px",
    fontWeight: 500,
  },
  input: {
    width: "100%",
    padding: "12px 14px",
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
    marginBottom: 2,
  },
  select: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: "#e8ecf4",
    fontSize: 14,
    background: "#fafbff",
    outline: "none",
    fontFamily: "inherit",
    cursor: "pointer",
    boxSizing: "border-box",
    transition: "border-color 0.15s, box-shadow 0.15s",
    marginBottom: 2,
  },
  phoneRow: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    marginBottom: 2,
  },
  countrySelect: {
    padding: "12px 10px",
    borderRadius: 12,
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: "#e8ecf4",
    fontSize: 13,
    color: "#1a1a2e",
    background: "#fafbff",
    cursor: "pointer",
    outline: "none",
    fontFamily: "inherit",
    flexShrink: 0,
  },
  primaryBtn: {
    width: "100%",
    padding: "14px",
    borderRadius: 12,
    border: "none",
    background: "var(--blue)",
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    marginBottom: 16,
    transition: "background 0.2s",
    fontFamily: "inherit",
  },
  summaryCard: {
    background: "#f8faff",
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: "#e8ecf4",
    borderRadius: 14,
    padding: "4px 16px",
    marginBottom: 20,
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #edf0f7",
    gap: 12,
  },
  summaryKey: {
    fontSize: 13,
    color: "#7a8599",
    fontWeight: 500,
    flexShrink: 0,
  },
  summaryVal: {
    fontSize: 13,
    color: "#1a1a2e",
    fontWeight: 600,
    textAlign: "right",
  },
  otpRow: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
    marginBottom: 24,
  },
  otpBox: {
    width: 46,
    height: 52,
    borderRadius: 12,
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
    color: "#1a1a2e",
    outline: "none",
    transition: "border-color 0.15s, background 0.15s",
    fontFamily: "inherit",
  },
};