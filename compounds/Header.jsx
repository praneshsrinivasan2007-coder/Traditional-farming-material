import { Leaf, ShoppingCart, LogOut } from "lucide-react";
import { COLORS } from "../data.js";

export default function Header({ user, cartCount, goTo, handleLogout }) {
  if (!user) return null;
  return (
    <header style={{ background: COLORS.soil, position: "sticky", top: 0, zIndex: 40 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => goTo(user.isAdmin ? "admin" : "seeds")}>
          <Leaf size={22} color={COLORS.gold} />
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 19, color: COLORS.paper }}>
            Traditional Farming Material
          </span>
        </div>
        {!user.isAdmin && (
          <nav className="tfm-nav-links" style={{ display: "flex", gap: 26, alignItems: "center" }}>
            <button className="tfm-link" onClick={() => goTo("seeds")}>Seeds</button>
            <button className="tfm-link" onClick={() => goTo("fertilizers")}>Fertilizers</button>
            <button className="tfm-link" onClick={() => goTo("equipment")}>Equipment</button>
          </nav>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {user.isAdmin && <span style={{ color: COLORS.gold, fontSize: 13, fontWeight: 600 }}>Admin panel</span>}
          {!user.isAdmin && (
            <button
              onClick={() => goTo("cart")}
              style={{ position: "relative", background: "transparent", border: `1.5px solid ${COLORS.gold}`, borderRadius: 3, padding: "8px 12px", color: COLORS.paper, display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontWeight: 600, fontSize: 13 }}
            >
              <ShoppingCart size={16} color={COLORS.gold} />
              Cart
              {cartCount > 0 && (
                <span style={{ background: COLORS.barn, color: COLORS.paper, borderRadius: 999, fontSize: 11, padding: "1px 6px", fontWeight: 700 }}>
                  {cartCount}
                </span>
              )}
            </button>
          )}
          <button onClick={handleLogout} title="Log out" style={{ background: "none", border: "none", color: COLORS.paper, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600 }}>
            <LogOut size={16} color={COLORS.gold} />
            <span className="tfm-nav-links">Log out</span>
          </button>
        </div>
      </div>
    </header>
  );
}
