import { Star } from "lucide-react";
import { COLORS, CATEGORY_META, formatINR } from "../data.js";

export default function ProductCard({ product, onSelect, onAdd }) {
  const meta = CATEGORY_META[product.category];
  const outOfStock = product.stock <= 0;
  return (
    <div
      style={{
        background: COLORS.card,
        border: `1px solid ${COLORS.line}`,
        borderTop: `4px solid ${meta.color}`,
        borderRadius: 4,
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        cursor: "pointer",
        opacity: outOfStock ? 0.6 : 1,
      }}
      onClick={() => onSelect(product.id)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontFamily: "'Special Elite', monospace", fontSize: 11, color: meta.color, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {meta.tag}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 3, color: COLORS.goldDark, fontSize: 12 }}>
          <Star size={12} fill={COLORS.goldDark} strokeWidth={0} />
          {product.rating}
        </div>
      </div>
      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 600, color: COLORS.ink, margin: 0 }}>
        {product.name}
      </h3>
      <p style={{ fontSize: 13.5, color: COLORS.inkSoft, margin: 0, lineHeight: 1.5 }}>{product.blurb}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
        <div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 600, color: COLORS.ink }}>
            {formatINR(product.price)}
          </div>
          <div style={{ fontSize: 12, color: COLORS.inkSoft }}>{outOfStock ? "Out of stock" : product.unit}</div>
        </div>
        <button
          disabled={outOfStock}
          onClick={(e) => {
            e.stopPropagation();
            onAdd(product.id);
          }}
          style={{
            background: outOfStock ? COLORS.line : COLORS.soil,
            color: COLORS.paper,
            border: "none",
            borderRadius: 3,
            padding: "9px 14px",
            fontWeight: 600,
            fontSize: 13,
            cursor: outOfStock ? "not-allowed" : "pointer",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
