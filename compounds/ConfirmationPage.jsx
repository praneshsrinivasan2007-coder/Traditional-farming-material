import { Check } from "lucide-react";
import { COLORS } from "../data.js";
import Stamp from "./Stamp.jsx";

export default function ConfirmationPage({ orderNumber, goTo }) {
  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: "64px 24px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stamp size={120} color={COLORS.sage}>
          <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Check size={22} /> CONFIRMED
          </span>
        </Stamp>
      </div>
      <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 600, color: COLORS.ink, margin: "22px 0 10px" }}>Your order is in.</h1>
      <p style={{ color: COLORS.inkSoft, marginBottom: 6 }}>Order number</p>
      <p style={{ fontFamily: "'Special Elite', monospace", fontSize: 18, color: COLORS.barn, marginBottom: 22 }}>{orderNumber}</p>
      <p style={{ color: COLORS.inkSoft, fontSize: 14, lineHeight: 1.6, marginBottom: 28 }}>
        We'll confirm delivery timing by phone. Most orders reach the village within three to five days depending on the season's roads.
      </p>
      <button onClick={() => goTo("seeds")} style={{ background: COLORS.barn, color: COLORS.card, border: "none", borderRadius: 3, padding: "13px 26px", fontWeight: 700, cursor: "pointer" }}>
        Continue shopping
      </button>
    </div>
  );
}
