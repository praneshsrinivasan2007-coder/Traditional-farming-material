import { Plus, Pencil, Trash2, PackageSearch } from "lucide-react";
import { COLORS, CATEGORY_META, CATEGORY_ORDER, inputStyle, labelStyle, formatINR } from "../data.js";

export default function AdminPage({
  products,
  adminEditingId,
  adminForm,
  setAdminForm,
  adminError,
  startAddProduct,
  startEditProduct,
  cancelAdminForm,
  saveAdminForm,
  deleteProduct,
}) {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 24px 64px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, flexWrap: "wrap", gap: 12 }}>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 30, fontWeight: 600, color: COLORS.ink, margin: 0 }}>Product admin</h1>
        <button onClick={startAddProduct} style={{ background: COLORS.barn, color: COLORS.card, border: "none", borderRadius: 3, padding: "11px 20px", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
          <Plus size={16} /> Add product
        </button>
      </div>
      <p style={{ color: COLORS.inkSoft, fontSize: 13.5, marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
        <PackageSearch size={15} /> {products.length} products across all categories. Changes apply immediately to the storefront for this session.
      </p>

      {adminEditingId && (
        <div style={{ background: COLORS.card, border: `1px solid ${COLORS.line}`, borderRadius: 6, padding: 22, marginBottom: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="tfm-split">
          <div style={{ gridColumn: "1 / -1" }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 18, margin: "0 0 4px" }}>
              {adminEditingId === "new" ? "Add a new product" : "Edit product"}
            </h3>
          </div>
          <div>
            <label style={labelStyle}>Name</label>
            <input value={adminForm.name} onChange={(e) => setAdminForm({ ...adminForm, name: e.target.value })} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Category</label>
            <select value={adminForm.category} onChange={(e) => setAdminForm({ ...adminForm, category: e.target.value })} style={inputStyle}>
              {CATEGORY_ORDER.map((c) => (
                <option key={c} value={c}>{CATEGORY_META[c].label}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Price (₹)</label>
            <input type="number" min="0" value={adminForm.price} onChange={(e) => setAdminForm({ ...adminForm, price: e.target.value })} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Stock quantity</label>
            <input type="number" min="0" value={adminForm.stock} onChange={(e) => setAdminForm({ ...adminForm, stock: e.target.value })} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Unit (e.g. "5 kg sack")</label>
            <input value={adminForm.unit} onChange={(e) => setAdminForm({ ...adminForm, unit: e.target.value })} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Rating</label>
            <input type="number" step="0.1" min="0" max="5" value={adminForm.rating} onChange={(e) => setAdminForm({ ...adminForm, rating: e.target.value })} style={inputStyle} />
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={labelStyle}>Short description (shown on product cards)</label>
            <input value={adminForm.blurb} onChange={(e) => setAdminForm({ ...adminForm, blurb: e.target.value })} style={inputStyle} />
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={labelStyle}>Full description (shown on product page)</label>
            <textarea rows={3} value={adminForm.detail} onChange={(e) => setAdminForm({ ...adminForm, detail: e.target.value })} style={{ ...inputStyle, resize: "vertical" }} />
          </div>
          {adminError && <p style={{ color: COLORS.barn, fontSize: 13, margin: 0, gridColumn: "1 / -1" }}>{adminError}</p>}
          <div style={{ gridColumn: "1 / -1", display: "flex", gap: 10 }}>
            <button type="button" onClick={saveAdminForm} style={{ background: COLORS.barn, color: COLORS.card, border: "none", borderRadius: 3, padding: "11px 22px", fontWeight: 700, cursor: "pointer" }}>
              Save product
            </button>
            <button type="button" onClick={cancelAdminForm} style={{ background: "none", border: `1px solid ${COLORS.line}`, borderRadius: 3, padding: "11px 22px", fontWeight: 600, cursor: "pointer", color: COLORS.inkSoft }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.line}`, borderRadius: 6, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
            <thead>
              <tr style={{ background: COLORS.paperDark, textAlign: "left" }}>
                {["Name", "Category", "Price", "Stock", ""].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", fontWeight: 700, color: COLORS.inkSoft, borderBottom: `1px solid ${COLORS.line}` }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} style={{ borderBottom: `1px solid ${COLORS.line}` }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600, color: COLORS.ink }}>{p.name}</td>
                  <td style={{ padding: "10px 14px" }}>
                    <span style={{ color: CATEGORY_META[p.category].color, fontWeight: 600 }}>{CATEGORY_META[p.category].label}</span>
                  </td>
                  <td style={{ padding: "10px 14px" }}>{formatINR(p.price)}</td>
                  <td style={{ padding: "10px 14px", color: p.stock <= 10 ? COLORS.barn : COLORS.inkSoft, fontWeight: p.stock <= 10 ? 700 : 400 }}>
                    {p.stock}{p.stock <= 10 ? " (low)" : ""}
                  </td>
                  <td style={{ padding: "10px 14px", display: "flex", gap: 10 }}>
                    <button onClick={() => startEditProduct(p)} title="Edit" style={{ background: "none", border: "none", cursor: "pointer", color: COLORS.sageDark }}>
                      <Pencil size={16} />
                    </button>
                    <button onClick={() => deleteProduct(p.id)} title="Delete" style={{ background: "none", border: "none", cursor: "pointer", color: COLORS.barn }}>
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
