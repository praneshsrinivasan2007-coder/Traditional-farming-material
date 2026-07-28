import { COLORS, inputStyle, labelStyle, formatINR } from "../data.js";

const FIELDS = [
  ["name", "Full name", "text"],
  ["phone", "Phone number", "tel"],
  ["address", "Delivery address", "text"],
  ["village", "Village / town", "text"],
];

const PAYMENT_OPTIONS = [
  ["cod", "Cash on delivery"],
  ["upi", "UPI"],
  ["card", "Debit / credit card"],
];

export default function CheckoutPage({ form, setForm, checkoutError, placeOrder, subtotal, delivery, total, cartItems }) {
  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "36px 24px 64px" }}>
      <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 30, fontWeight: 600, color: COLORS.ink, margin: "0 0 24px" }}>Checkout</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {FIELDS.map(([key, label, type]) => (
          <div key={key}>
            <label style={labelStyle}>{label}</label>
            <input type={type} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} style={inputStyle} />
          </div>
        ))}
        <div>
          <label style={{ ...labelStyle, marginBottom: 8 }}>Payment method</label>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {PAYMENT_OPTIONS.map(([val, label]) => (
              <label
                key={val}
                style={{ display: "flex", alignItems: "center", gap: 10, border: `1px solid ${COLORS.line}`, borderRadius: 3, padding: "10px 13px", background: form.payment === val ? COLORS.paperDark : COLORS.card, cursor: "pointer", fontSize: 14 }}
              >
                <input type="radio" name="payment" checked={form.payment === val} onChange={() => setForm({ ...form, payment: val })} />
                {label}
              </label>
            ))}
          </div>
        </div>
        <div style={{ background: COLORS.card, border: `1px solid ${COLORS.line}`, borderRadius: 4, padding: 16, marginTop: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 6 }}><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 6, color: COLORS.inkSoft }}><span>Delivery</span><span>{delivery === 0 ? "Free" : formatINR(delivery)}</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600 }}><span>Total</span><span>{formatINR(total)}</span></div>
        </div>
        {checkoutError && <p style={{ color: COLORS.barn, fontSize: 13, margin: 0 }}>{checkoutError}</p>}
        <button
          type="button"
          onClick={placeOrder}
          disabled={cartItems.length === 0}
          style={{ background: cartItems.length === 0 ? COLORS.line : COLORS.barn, color: COLORS.card, border: "none", borderRadius: 3, padding: "14px", fontWeight: 700, fontSize: 15, cursor: cartItems.length === 0 ? "not-allowed" : "pointer" }}
        >
          Place order
        </button>
      </div>
    </div>
  );
}
