import { ArrowLeft, Star } from "lucide-react";
import { COLORS, CATEGORY_META, formatINR } from "../data.js";

export default function ProductPage({ product, onAdd, goTo }) {
  if (!product) return null;
  const meta = CATEGORY_META[product.category];
  const Icon = meta.icon;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 64px" }}>
      <button
        onClick={() => goTo(product.category)}
        style={{ background: "none", border: "none", display: "flex", alignItems: "center", gap: 6, color: COLORS.inkSoft, fontSize: 13.5, cursor: "pointer", marginBottom: 22, padding: 0 }}
      >
        <ArrowLeft size={15} /> Back to {meta.label.toLowerCase()}
      </button>
      <div className="tfm-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
        <div style={{ background: COLORS.card, border: `1px solid ${COLORS.line}`, borderRadius: 4, aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={72} color={meta.color} strokeWidth={1.2} />
        </div>
        <div>
          <span style={{ fontFamily: "'Special Elite', monospace", fontSize: 12, color: meta.color, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {meta.tag}
          </span>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 600, color: COLORS.ink, margin: "8px 0 6px" }}>
            {product.name}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 5, color: COLORS.goldDark, fontSize: 13, marginBottom: 16 }}>
            <Star size={14} fill={COLORS.goldDark} strokeWidth={0} />
            {product.rating} rating from returning growers
          </div>
          <p style={{ fontSize: 15, color: COLORS.inkSoft, lineHeight: 1.65, marginBottom: 22 }}>{product.detail}</p>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 600, color: COLORS.ink }}>{formatINR(product.price)}</div>
          <div style={{ fontSize: 13, color: COLORS.inkSoft, marginBottom: 22 }}>
            {product.stock > 0 ? `${product.unit} · ${product.stock} in stock` : "Out of stock"}
          </div>
          <button
            disabled={product.stock <= 0}
            onClick={() => onAdd(product.id)}
            style={{ background: product.stock <= 0 ? COLORS.line : COLORS.barn, color: COLORS.card, border: "none", borderRadius: 3, padding: "14px 30px", fontWeight: 700, fontSize: 15, cursor: product.stock <= 0 ? "not-allowed" : "pointer" }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
