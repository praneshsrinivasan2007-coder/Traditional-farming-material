import { Minus, Plus, X } from "lucide-react";
import { COLORS, CATEGORY_META, formatINR } from "../data.js";

export default function CartPage({ cartItems, setQty, removeFromCart, subtotal, delivery, total, goTo }) {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "36px 24px 64px" }}>
      <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 30, fontWeight: 600, color: COLORS.ink, margin: "0 0 24px" }}>Your cart</h1>
      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "48px 0" }}>
          <p style={{ color: COLORS.inkSoft, marginBottom: 20 }}>Nothing here yet.</p>
          <button onClick={() => goTo("seeds")} style={{ background: COLORS.barn, color: COLORS.card, border: "none", borderRadius: 3, padding: "12px 24px", fontWeight: 700, cursor: "pointer" }}>
            Go to the shop
          </button>
        </div>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
            {cartItems.map(({ product, qty }) => (
              <div
                key={product.id}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: COLORS.card, border: `1px solid ${COLORS.line}`, borderLeft: `4px solid ${CATEGORY_META[product.category].color}`, borderRadius: 4, padding: "14px 18px", gap: 12, flexWrap: "wrap" }}
              >
                <div style={{ flex: "1 1 180px" }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600, color: COLORS.ink }}>{product.name}</div>
                  <div style={{ fontSize: 12.5, color: COLORS.inkSoft }}>{product.unit}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <button onClick={() => setQty(product.id, qty - 1)} style={{ width: 28, height: 28, border: `1px solid ${COLORS.line}`, background: "none", borderRadius: 3, cursor: "pointer" }}>
                    <Minus size={13} style={{ margin: "auto" }} />
                  </button>
                  <span style={{ minWidth: 22, textAlign: "center", fontWeight: 600 }}>{qty}</span>
                  <button onClick={() => setQty(product.id, qty + 1)} style={{ width: 28, height: 28, border: `1px solid ${COLORS.line}`, background: "none", borderRadius: 3, cursor: "pointer" }}>
                    <Plus size={13} style={{ margin: "auto" }} />
                  </button>
                </div>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, minWidth: 80, textAlign: "right" }}>{formatINR(product.price * qty)}</div>
                <button onClick={() => removeFromCart(product.id)} style={{ background: "none", border: "none", color: COLORS.barn, cursor: "pointer" }} aria-label="Remove item">
                  <X size={17} />
                </button>
              </div>
            ))}
          </div>
          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.line}`, borderRadius: 4, padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 8 }}><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 12, color: COLORS.inkSoft }}><span>Delivery</span><span>{delivery === 0 ? "Free" : formatINR(delivery)}</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 600, borderTop: `1px solid ${COLORS.line}`, paddingTop: 12 }}><span>Total</span><span>{formatINR(total)}</span></div>
            <button onClick={() => goTo("checkout")} style={{ width: "100%", marginTop: 18, background: COLORS.barn, color: COLORS.card, border: "none", borderRadius: 3, padding: "14px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
              Proceed to checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
