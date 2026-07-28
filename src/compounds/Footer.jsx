import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { COLORS } from "../data.js";

export default function Footer({ user }) {
  if (!user) return null;
  return (
    <footer style={{ background: COLORS.soil, color: COLORS.paper, padding: "40px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 28 }}>
        <div style={{ maxWidth: 320 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <Leaf size={18} color={COLORS.gold} />
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600 }}>Traditional Farming Material</span>
          </div>
          <p style={{ fontSize: 13, color: "#C9BBA0", lineHeight: 1.6 }}>
            Traditional seed, organic manures, and hand tools, sold the way village markets have always sold them &mdash; honestly, and built to last.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13.5 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Phone size={14} color={COLORS.gold} /> +91 98765 43210</span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Mail size={14} color={COLORS.gold} /> hello@traditionalfarmingmaterial.example</span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}><MapPin size={14} color={COLORS.gold} /> Serving villages across the district</span>
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: "28px auto 0", borderTop: "1px solid #4A3624", paddingTop: 16, fontSize: 12, color: "#9C8A6D" }}>
        &copy; {new Date().getFullYear()} Traditional Farming Material. All seed sold subject to seasonal availability.
      </div>
    </footer>
  );
}
