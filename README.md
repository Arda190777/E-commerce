# ShopReact

**A React storefront for product discovery and shopping-cart interactions.**

ShopReact consumes the Fake Store API and demonstrates reusable components, client routing, asynchronous product loading and state-driven cart updates.

## Features

- Product catalogue and product detail views.
- Search by name and category filtering.
- Add items, adjust quantities and review the cart total in a drawer.
- Dark mode and Material UI components.
- Loading states for remote product data.

**Stack:** React 19 · JavaScript · Vite 7 · React Router · Material UI · Axios

## Run locally

Use Node.js 24 and npm.

```powershell
git clone https://github.com/Arda190777/E-commerce.git
cd E-commerce
npm ci
npm run dev
```

Open the URL printed by Vite, normally http://localhost:5173. Product browsing needs access to the external Fake Store API.

## Quality and build

```powershell
npm run lint
npm run build
npm run preview
```

No automated test script is currently configured. This is a storefront demo; checkout, payment processing and order fulfillment are outside its current scope.

## Code map

- [Components](src/components): header, product cards, catalogue/detail and loading UI.
- [Pages](src/pages) and [router configuration](src/config): page composition and navigation.
- [App entry](src/App.jsx): shared application wiring.

The repository does not currently include a standalone license file.
