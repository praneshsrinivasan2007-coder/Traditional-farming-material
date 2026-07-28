import { Leaf, Mail } from "lucide-react";
import { COLORS, inputStyle, labelStyle } from "../data.js";

export default function LoginPage({ loginForm, setLoginForm, loginError, handleLogin }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 400 }}>
        <div style={{ textAlign: "center", marginBottom: 26 }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <Leaf size={26} color={COLORS.barn} />
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 22, color: COLORS.ink }}>
              Traditional Farming Material
            </span>
          </div>
          <p style={{ color: COLORS.inkSoft, fontSize: 14 }}>Sign in to browse seed, feed, and tools.</p>
        </div>
        <div style={{ background: COLORS.card, border: `1px solid ${COLORS.line}`, borderRadius: 6, padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={labelStyle}>Email address</label>
            <div style={{ position: "relative" }}>
              <Mail size={15} color={COLORS.inkSoft} style={{ position: "absolute", left: 12, top: 13 }} />
              <input
                type="text"
                inputMode="email"
                autoCapitalize="none"
                autoCorrect="off"
                placeholder="you@gmail.com"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                onKeyDown={(e) => { if (e.key === "Enter") handleLogin(e); }}
                style={{ ...inputStyle, paddingLeft: 36 }}
              />
            </div>
          </div>
          {loginError && <p style={{ color: COLORS.barn, fontSize: 13, margin: 0 }}>{loginError}</p>}
          <button
            type="button"
            onClick={handleLogin}
            style={{ background: COLORS.barn, color: COLORS.card, border: "none", borderRadius: 3, padding: "13px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}
          >
            Sign in
          </button>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, textAlign: "center", margin: 0 }}>
            Any email signs you in as a customer.<br />
            Admin demo login: <b>admin@tfm.com</b>
          </p>
        </div>
      </div>
    </div>
  );
}
