# 🛒 ShopReact

A modern single-page e-commerce storefront built with React and Vite,
featuring a full shopping experience from browsing to checkout.

## ✨ Features

- 🏪 Product catalogue with dynamic rendering
- 🔍 Individual product detail pages
- 🛒 Persistent shopping cart with quantity management
- 💳 Mock checkout flow with order confirmation
- 🔄 Client-side routing with React Router v6
- 📦 Reusable component library

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | JavaScript |
| Routing | React Router v6 |
| Build Tool | Vite |
| Styling | CSS3 |
| Linting | ESLint |

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
git clone https://github.com/Arda190777/E-commerce.git
cd E-commerce
npm install
npm run dev
```

Then open your browser at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure
src/
├── components/
│   ├── Navbar/
│   ├── ProductCard/
│   └── Cart/
├── pages/
│   ├── Home/
│   ├── ProductDetail/
│   ├── Cart/
│   └── Checkout/
├── App.jsx
└── main.jsx
