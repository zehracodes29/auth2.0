import { useState } from "react";

type Step = "landing" | "details" | "password" | "success";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  origin: string;
  businessType: string;
  password: string;
  confirmPassword: string;
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

function InputField({
  placeholder,
  value,
  onChange,
  type = "text",
  style: extraStyle,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  style?: React.CSSProperties;
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
        ...extraStyle,
      }}
    />
  );
}

function PasswordField({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...styles.input,
          paddingRight: 44,
          borderColor: focused ? "var(--blue)" : "#e8ecf4",
          boxShadow: focused ? "0 0 0 3px rgba(59,110,248,0.1)" : "none",
        }}
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        style={styles.eyeBtn}
        tabIndex={-1}
      >
        {show ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aab4c8" strokeWidth="2">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aab4c8" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </button>
    </div>
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

function StrengthBar({ password }: { password: string }) {
  const getStrength = () => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  };
  const strength = getStrength();
  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  const colors = ["#e8ecf4", "#ef4444", "#f59e0b", "#3b82f6", "#22c55e"];

  if (!password) return null;

  return (
    <div style={{ marginTop: 8, marginBottom: 4 }}>
      <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 3,
              borderRadius: 4,
              background: i <= strength ? colors[strength] : "#e8ecf4",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
      <span style={{ fontSize: 11, color: colors[strength], fontWeight: 600 }}>
        {labels[strength]}
      </span>
    </div>
  );
}

export default function EmailSignupPage() {
  const [step, setStep] = useState<Step>("landing");
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    origin: "IN",
    businessType: "",
    password: "",
    confirmPassword: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const setField = (key: keyof FormData) => (val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const progressStep =
    step === "landing" ? 0 : step === "details" ? 1 : step === "password" ? 2 : 3;

  const detailsValid =
    form.firstName.trim().length > 0 &&
    form.lastName.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.origin !== "" &&
    form.businessType !== "";

  const handlePasswordContinue = () => {
    if (form.password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }
    setPasswordError("");
    setStep("success");
  };

  const passwordValid =
    form.password.length >= 8 &&
    form.password === form.confirmPassword &&
    agreed;
  console.log("email.tsx");

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
        {step !== "landing" && step !== "success" && (
          <div style={styles.progressWrap}>
            {[1, 2].map((s) => (
              <div
                key={s}
                style={{
                  ...styles.progressStep,
                  background: progressStep >= s ? "var(--blue)" : "#e8ecf4",
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
              <button
                style={{ ...styles.methodBtn, ...styles.methodBtnActive }}
                onClick={() => setStep("details")}
              >
                <span style={{ fontSize: 16 }}>📧</span>
                Email
              </button>
              <button style={styles.methodBtn}>
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

            <div style={styles.row}>
              <div style={{ flex: 1 }}>
                <Label text="First name" />
                <InputField placeholder="Riya" value={form.firstName} onChange={setField("firstName")} />
              </div>
              <div style={{ flex: 1 }}>
                <Label text="Last name" />
                <InputField placeholder="Sharma" value={form.lastName} onChange={setField("lastName")} />
              </div>
            </div>

            <Label text="Email address" />
            <InputField
              type="email"
              placeholder="riya@example.com"
              value={form.email}
              onChange={setField("email")}
            />

            <Label text="Phone number" optional />
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
              <InputField
                type="tel"
                placeholder="Enter phone number"
                value={form.phone}
                onChange={(v) => setField("phone")(v.replace(/\D/g, "").slice(0, 12))}
                style={{ flex: 1, marginBottom: 0 }}
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
              onClick={() => setStep("password")}
            >
              Continue →
            </button>

            <p style={styles.footer}>
              Already have an account? <span style={styles.link}>Sign in</span>
            </p>
          </div>
        )}

        {/* ── PASSWORD ── */}
        {step === "password" && (
          <div style={styles.content}>
            <button style={styles.back} onClick={() => setStep("details")}>← Back</button>
            <h1 style={styles.heading}>Set a password</h1>
            <p style={styles.subtext}>
              Creating account for <strong style={{ color: "#1a1a2e" }}>{form.email}</strong>
            </p>

            <Label text="Password" />
            <PasswordField
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={(v) => {
                setField("password")(v);
                setPasswordError("");
              }}
            />
            <StrengthBar password={form.password} />

            <Label text="Confirm password" />
            <PasswordField
              placeholder="Re-enter your password"
              value={form.confirmPassword}
              onChange={(v) => {
                setField("confirmPassword")(v);
                setPasswordError("");
              }}
            />

            {/* Match indicator */}
            {form.confirmPassword.length > 0 && (
              <div style={{ marginTop: 6, marginBottom: 2, display: "flex", alignItems: "center", gap: 6 }}>
                {form.password === form.confirmPassword ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 500 }}>Passwords match</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span style={{ fontSize: 12, color: "#ef4444", fontWeight: 500 }}>Passwords don't match</span>
                  </>
                )}
              </div>
            )}

            {passwordError && (
              <div style={styles.errorBox}>{passwordError}</div>
            )}

            {/* Password hints */}
            <div style={styles.hintBox}>
              {[
                { rule: form.password.length >= 8, text: "At least 8 characters" },
                { rule: /[A-Z]/.test(form.password), text: "One uppercase letter" },
                { rule: /[0-9]/.test(form.password), text: "One number" },
                { rule: /[^A-Za-z0-9]/.test(form.password), text: "One special character" },
              ].map((h) => (
                <div key={h.text} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: h.rule ? "#22c55e" : "#d1d5db",
                      transition: "background 0.2s",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 12, color: h.rule ? "#374151" : "#9ca3af" }}>{h.text}</span>
                </div>
              ))}
            </div>

            {/* Terms */}
            <div style={styles.checkRow} onClick={() => setAgreed((a) => !a)}>
              <div style={{ ...styles.checkbox, borderColor: agreed ? "var(--blue)" : "#d1d5db", background: agreed ? "var(--blue)" : "#fff" }}>
                {agreed && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span style={styles.checkLabel}>
                I agree to the{" "}
                <span style={styles.link} onClick={(e) => e.stopPropagation()}>Terms of Service</span>
                {" "}and{" "}
                <span style={styles.link} onClick={(e) => e.stopPropagation()}>Privacy Policy</span>
              </span>
            </div>

            <button
              style={{
                ...styles.primaryBtn,
                marginTop: 20,
                opacity: passwordValid ? 1 : 0.5,
                cursor: passwordValid ? "pointer" : "not-allowed",
              }}
              disabled={!passwordValid}
              onClick={handlePasswordContinue}
            >
              Create Account
            </button>

            <p style={styles.footer}>
              Already have an account? <span style={styles.link}>Sign in</span>
            </p>
          </div>
        )}

        {/* ── SUCCESS ── */}
        {step === "success" && (
          <div style={{ ...styles.content, alignItems: "center", textAlign: "center", paddingTop: 12 }}>
            <div style={styles.successRing}>
              <div style={styles.successCircle}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            <h1 style={{ ...styles.heading, marginTop: 20, textAlign: "center" }}>
              Welcome, {form.firstName}! 🎉
            </h1>
            <p style={{ ...styles.subtext, textAlign: "center", marginBottom: 24 }}>
              Your SahiHai account has been created successfully. We've sent a confirmation to{" "}
              <strong style={{ color: "#1a1a2e" }}>{form.email}</strong>.
            </p>

            <div style={styles.successSummary}>
              <div style={styles.summaryRow}>
                <span style={styles.summaryKey}>Name</span>
                <span style={styles.summaryVal}>{form.firstName} {form.lastName}</span>
              </div>
              <div style={styles.summaryRow}>
                <span style={styles.summaryKey}>Email</span>
                <span style={styles.summaryVal}>{form.email}</span>
              </div>
              <div style={styles.summaryRow}>
                <span style={styles.summaryKey}>Country</span>
                <span style={styles.summaryVal}>{COUNTRIES.find((c) => c.code === form.origin)?.name}</span>
              </div>
              <div style={{ ...styles.summaryRow, border: "none" }}>
                <span style={styles.summaryKey}>Business</span>
                <span style={styles.summaryVal}>
                  {BUSINESS_TYPES.find((b) => b.value === form.businessType)?.label.replace(/^[\S]+\s+/, "")}
                </span>
              </div>
            </div>

            <button style={{ ...styles.primaryBtn, marginTop: 0 }}>
              Go to Dashboard →
            </button>
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
  },
  progressStep: {
    flex: 1,
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
    lineHeight: 1.6,
  },
  googleBtn: {
    width: "100%",
    padding: "13px 20px",
    borderRadius: 12,
    border: "1.5px solid #e8ecf4",
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
  eyeBtn: {
    position: "absolute",
    right: 14,
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  hintBox: {
    background: "#f8faff",
    border: "1px solid #edf0f7",
    borderRadius: 10,
    padding: "12px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginTop: 10,
    marginBottom: 4,
  },
  errorBox: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    borderRadius: 10,
    padding: "10px 14px",
    fontSize: 13,
    color: "#ef4444",
    fontWeight: 500,
    marginTop: 8,
  },
  checkRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    cursor: "pointer",
    marginTop: 14,
    userSelect: "none",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: "1.5px",
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: 1,
    transition: "background 0.15s, border-color 0.15s",
  },
  checkLabel: {
    fontSize: 13,
    color: "#4a5568",
    lineHeight: 1.5,
  },
  successRing: {
    width: 88,
    height: 88,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #eef2ff, #dbeafe)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  successCircle: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "var(--blue)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 20px rgba(59,110,248,0.3)",
  },
  successSummary: {
    background: "#f8faff",
    border: "1.5px solid #e8ecf4",
    borderRadius: 14,
    padding: "4px 16px",
    marginBottom: 20,
    width: "100%",
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
};