# Traditional Farming Material

A storefront for traditional seeds, organic fertilizers, and farming equipment,
built with React + Vite.

## Project structure

```
src/
  data.js                 Colors, category info, product catalog, helpers
  App.jsx                 Main app: holds all state, wires pages together
  main.jsx                Entry point
  index.css               Global styles + fonts
  components/
    Header.jsx             Top nav bar
    Footer.jsx              Footer
    LoginPage.jsx           Email-only sign-in
    CategoryPage.jsx        Seeds / Fertilizers / Equipment listing
    ProductCard.jsx         Product grid card
    ProductPage.jsx         Single product detail page
    CartPage.jsx            Shopping cart
    CheckoutPage.jsx        Delivery + payment form
    ConfirmationPage.jsx    Order confirmation screen
    AdminPage.jsx           Admin product management (add/edit/delete, stock)
    Stamp.jsx                Decorative rubber-stamp badge
    CategoryPill.jsx         Category filter pill (unused by default nav, kept for reuse)
```

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Building for deployment

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy to Netlify, Vercel,
GitHub Pages, or any static host.

## How it works (important notes)

- **Login** only asks for an email — any email signs you in as a customer.
  Signing in with `admin@tfm.com` takes you to the admin panel instead.
- **No real backend.** Products, cart, and orders all live in React state.
  Refreshing the page resets everything. To persist data you'd need a real
  database (e.g. Supabase, Firebase, or your own API).
- **No real payments.** Checkout is simulated — no payment gateway is wired
  up. To take real payments you'd need a backend and a provider like
  Razorpay or Stripe.
- **Admin panel** lets you add, edit, and delete products, and see stock
  levels (items with 10 or fewer in stock are flagged as low). Changes only
  apply for the current browser session.
