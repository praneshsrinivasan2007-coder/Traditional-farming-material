import { COLORS, CATEGORY_META } from "../data.js";

export default function CategoryPill({ id, active, onClick }) {
  const meta = CATEGORY_META[id];
  const Icon = meta.icon;
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "9px 16px",
        borderRadius: 999,
        border: `1.5px solid ${active ? meta.color : COLORS.line}`,
        background: active ? meta.color : "transparent",
        color: active ? COLORS.card : COLORS.inkSoft,
        fontWeight: 600,
        fontSize: 14,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      <Icon size={16} />
      {meta.label}
    </button>
  );
}
