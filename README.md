# ShopReact

A simple e-commerce web app I built with React. You can browse products, search by name, filter by category, and add items to a shopping cart.

## Features

- Browse products loaded from [Fake Store API](https://fakestoreapi.com)
- Search products by name
- Filter by category
- Add products to cart and adjust quantities
- Cart drawer with total price
- Dark mode toggle

## Tech Stack

- React (useState, useEffect)
- React Router
- Material UI
- Axios

## How to Run

```bash
git clone https://github.com/Arda190777/E-commerce.git
cd E-commerce
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Product.jsx
│   ├── ProductList.jsx
│   ├── ProductDetails.jsx
│   └── Loading.jsx
├── pages/
│   └── Home.jsx
├── config/
│   └── RouterConfig.jsx
├── CSS/
│   ├── Header.css
│   └── Product.css
├── App.jsx
└── main.jsx
```

## License

MIT
