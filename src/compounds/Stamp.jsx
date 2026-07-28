import { COLORS } from "../data.js";

export default function Stamp({ children, size = 84, color = COLORS.barn }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `2px solid ${color}`,
        outline: `1px solid ${color}`,
        outlineOffset: "3px",
        color,
        fontFamily: "'Special Elite', monospace",
        fontSize: size * 0.13,
        letterSpacing: "0.04em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        lineHeight: 1.15,
        padding: size * 0.14,
        transform: "rotate(-8deg)",
        opacity: 0.85,
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}
