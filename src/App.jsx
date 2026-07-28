import { useState, useMemo } from "react";
import { COLORS, INITIAL_PRODUCTS, newId } from "./data.js";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LoginPage from "./components/LoginPage.jsx";
import CategoryPage from "./components/CategoryPage.jsx";
import ProductPage from "./components/ProductPage.jsx";
import CartPage from "./components/CartPage.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";
import ConfirmationPage from "./components/ConfirmationPage.jsx";
import AdminPage from "./components/AdminPage.jsx";

export default function App() {
  // --- auth ---
  const [user, setUser] = useState(null); // { email, isAdmin }
  const [loginForm, setLoginForm] = useState({ email: "" });
  const [loginError, setLoginError] = useState("");

  // --- catalog / navigation ---
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [view, setView] = useState("login");
  const [selectedId, setSelectedId] = useState(null);

  // --- cart / checkout ---
  const [cart, setCart] = useState({});
  const [orderNumber, setOrderNumber] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", address: "", village: "", payment: "cod" });
  const [checkoutError, setCheckoutError] = useState("");

  // --- admin ---
  const [adminEditingId, setAdminEditingId] = useState(null);
  const [adminForm, setAdminForm] = useState(null);
  const [adminError, setAdminError] = useState("");

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .filter(([, qty]) => qty > 0)
        .map(([id, qty]) => ({ product: products.find((p) => p.id === id), qty }))
        .filter((i) => i.product),
    [cart, products]
  );
  const subtotal = cartItems.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const delivery = subtotal > 0 && subtotal < 800 ? 60 : 0;
  const total = subtotal + delivery;
  const selectedProduct = products.find((p) => p.id === selectedId);

  function goTo(v) {
    setView(v);
    window.scrollTo(0, 0);
  }

  // --- auth handlers ---
  function handleLogin(e) {
    e.preventDefault();
    const email = loginForm.email.trim();
    if (!email) {
      setLoginError("Enter your email to continue.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setLoginError("Enter a valid email address.");
      return;
    }
    if (email.toLowerCase() === "admin@tfm.com") {
      setUser({ email, isAdmin: true });
      setLoginError("");
      goTo("admin");
    } else {
      setUser({ email, isAdmin: false });
      setLoginError("");
      goTo("seeds");
    }
  }
  function handleLogout() {
    setUser(null);
    setCart({});
    setLoginForm({ email: "" });
    goTo("login");
  }

  // --- cart handlers ---
  function addToCart(id) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }
  function setQty(id, qty) {
    setCart((prev) => ({ ...prev, [id]: Math.max(0, qty) }));
  }
  function removeFromCart(id) {
    setCart((prev) => {
      const n = { ...prev };
      delete n[id];
      return n;
    });
  }
  function openProduct(id) {
    setSelectedId(id);
    goTo("product");
  }

  // --- checkout handler ---
  function placeOrder(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address || !form.village) {
      setCheckoutError("Please fill in all delivery details before placing your order.");
      return;
    }
    setCheckoutError("");
    const num = "TFM-" + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(num);
    setProducts((prev) => prev.map((p) => (cart[p.id] ? { ...p, stock: Math.max(0, p.stock - cart[p.id]) } : p)));
    setCart({});
    goTo("confirmation");
  }

  // --- admin handlers ---
  function startAddProduct() {
    setAdminEditingId("new");
    setAdminError("");
    setAdminForm({ id: newId(), category: "seeds", name: "", unit: "", price: "", stock: "", rating: 4.5, blurb: "", detail: "" });
  }
  function startEditProduct(p) {
    setAdminEditingId(p.id);
    setAdminError("");
    setAdminForm({ ...p });
  }
  function cancelAdminForm() {
    setAdminEditingId(null);
    setAdminForm(null);
    setAdminError("");
  }
  function saveAdminForm(e) {
    e.preventDefault();
    if (!adminForm.name || !adminForm.unit || !adminForm.blurb || !adminForm.detail || adminForm.price === "" || adminForm.stock === "") {
      setAdminError("Please fill in every field before saving.");
      return;
    }
    const cleaned = { ...adminForm, price: Number(adminForm.price) || 0, stock: Number(adminForm.stock) || 0, rating: Number(adminForm.rating) || 4.5 };
    setProducts((prev) => {
      const exists = prev.some((p) => p.id === cleaned.id);
      return exists ? prev.map((p) => (p.id === cleaned.id ? cleaned : p)) : [...prev, cleaned];
    });
    cancelAdminForm();
  }
  function deleteProduct(id) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div style={{ background: COLORS.paper, minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <Header user={user} cartCount={cartCount} goTo={goTo} handleLogout={handleLogout} />

      {view === "login" && (
        <LoginPage loginForm={loginForm} setLoginForm={setLoginForm} loginError={loginError} handleLogin={handleLogin} />
      )}

      {(view === "seeds" || view === "fertilizers" || view === "equipment") && (
        <CategoryPage catId={view} products={products} onAdd={addToCart} onSelect={openProduct} goTo={goTo} />
      )}

      {view === "product" && <ProductPage product={selectedProduct} onAdd={addToCart} goTo={goTo} />}

      {view === "cart" && (
        <CartPage cartItems={cartItems} setQty={setQty} removeFromCart={removeFromCart} subtotal={subtotal} delivery={delivery} total={total} goTo={goTo} />
      )}

      {view === "checkout" && (
        <CheckoutPage
          form={form}
          setForm={setForm}
          checkoutError={checkoutError}
          placeOrder={placeOrder}
          subtotal={subtotal}
          delivery={delivery}
          total={total}
          cartItems={cartItems}
        />
      )}

      {view === "confirmation" && <ConfirmationPage orderNumber={orderNumber} goTo={goTo} />}

      {view === "admin" && user?.isAdmin && (
        <AdminPage
          products={products}
          adminEditingId={adminEditingId}
          adminForm={adminForm}
          setAdminForm={setAdminForm}
          adminError={adminError}
          startAddProduct={startAddProduct}
          startEditProduct={startEditProduct}
          cancelAdminForm={cancelAdminForm}
          saveAdminForm={saveAdminForm}
          deleteProduct={deleteProduct}
        />
      )}

      <Footer user={user} />
    </div>
  );
}
