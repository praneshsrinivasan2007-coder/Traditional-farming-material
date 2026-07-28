import { ArrowLeft, ArrowRight } from "lucide-react";
import { COLORS, CATEGORY_META, CATEGORY_ORDER, CATEGORY_INTRO } from "../data.js";
import ProductCard from "./ProductCard.jsx";

export default function CategoryPage({ catId, products, onAdd, onSelect, goTo }) {
  const intro = CATEGORY_INTRO[catId];
  const meta = CATEGORY_META[catId];
  const list = products.filter((p) => p.category === catId);
  const idx = CATEGORY_ORDER.indexOf(catId);
  const prevCat = CATEGORY_ORDER[idx - 1];
  const nextCat = CATEGORY_ORDER[idx + 1];

  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "36px 24px 30px" }}>
      <span style={{ fontFamily: "'Special Elite', monospace", fontSize: 12, color: meta.color, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {meta.tag}
      </span>
      <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 600, color: COLORS.ink, margin: "8px 0 10px" }}>
        {intro.title}
      </h1>
      <p style={{ fontSize: 15, color: COLORS.inkSoft, maxWidth: 640, lineHeight: 1.6, marginBottom: 28 }}>{intro.text}</p>
      <div className="tfm-grid">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} onSelect={onSelect} onAdd={onAdd} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 40, paddingTop: 24, borderTop: `1px solid ${COLORS.line}`, flexWrap: "wrap", gap: 14 }}>
        {prevCat ? (
          <button onClick={() => goTo(prevCat)} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: `1.5px solid ${COLORS.ink}`, borderRadius: 3, padding: "11px 20px", fontWeight: 600, cursor: "pointer", color: COLORS.ink }}>
            <ArrowLeft size={15} /> {CATEGORY_META[prevCat].label}
          </button>
        ) : (
          <span />
        )}
        {nextCat ? (
          <button onClick={() => goTo(nextCat)} style={{ display: "flex", alignItems: "center", gap: 8, background: COLORS.barn, color: COLORS.card, border: "none", borderRadius: 3, padding: "11px 20px", fontWeight: 700, cursor: "pointer" }}>
            Next: {CATEGORY_META[nextCat].label} <ArrowRight size={15} />
          </button>
        ) : (
          <button onClick={() => goTo("cart")} style={{ display: "flex", alignItems: "center", gap: 8, background: COLORS.barn, color: COLORS.card, border: "none", borderRadius: 3, padding: "11px 20px", fontWeight: 700, cursor: "pointer" }}>
            Go to cart <ArrowRight size={15} />
          </button>
        )}
      </div>
    </div>
  );
}
