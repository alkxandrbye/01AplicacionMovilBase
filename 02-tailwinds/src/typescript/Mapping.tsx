import React from "react";
import { Search, ShoppingCart } from "lucide-react";

// 📦 Arreglo de productos bien estructurado
const products = [
  {
    id: 1,
    name: "Césped Natural",
    price: "$48",
    imageSrc: "https://images.pexels.com/photos/1169124/pexels-photo-1169124.jpeg",
  },
  {
    id: 2,
    name: "Maceta Decorativa",
    price: "$35",
    imageSrc: "https://images.pexels.com/photos/6897669/pexels-photo-6897669.jpeg",
  },
  {
    id: 3,
    name: "Muelle de Madera",
    price: "$120",
    imageSrc: "https://images.pexels.com/photos/276224/pexels-photo-276224.jpeg",
  },
  {
    id: 4,
    name: "Silla Moderna",
    price: "$60",
    imageSrc: "https://www.miplastihogar.com/cdn/shop/products/sidneynegra1_900x.jpg?v=1643219496",
  },
  {
    id: 5,
    name: "Sofá de Cuero",
    price: "$450",
    imageSrc: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
  },
  {
    id: 6,
    name: "Smart TV 55”",
    price: "$700",
    imageSrc: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg",
  },
  {
    id: 7,
    name: "Auriculares Bluetooth",
    price: "$99",
    imageSrc: "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg",
  },
  {
    id: 8,
    name: "Laptop de Trabajo",
    price: "$1200",
    imageSrc: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg",
  },
  {
    id: 9,
    name: "Estante con Libros",
    price: "$250",
    imageSrc: "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg",
  },
  {
    id: 10,
    name: "Café en Taza",
    price: "$85",
    imageSrc: "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg",
  },
];

// 🟡 Barra de navegación 
const Navbar = () => {
  return (
    <nav className="bg-yellow-400 p-4 flex items-center justify-between w-full shadow-md">
      {/* 🏷 Logo */}
      <h1 className="text-2xl font-bold text-blue-900">Mercado Libre</h1>

      {/* 🔎 Barra de búsqueda */}
      <div className="flex items-center bg-white rounded-lg px-3 py-2 w-2/5 shadow-sm">
        <input
          type="text"
          placeholder="Buscar productos, marcas y más..."
          className="w-full outline-none text-gray-700 px-2"
        />
        <Search className="text-gray-500" />
      </div>

      {/* 🔘 Botones y carrito */}
      <div className="flex items-center space-x-6">
        <button className="text-sm font-semibold hover:text-blue-700 transition">Crea tu cuenta</button>
        <button className="text-sm font-semibold hover:text-blue-700 transition">Ingresa</button>
        <ShoppingCart className="text-gray-900 hover:text-blue-700 transition" />
      </div>
    </nav>
  );
};

// 🛍️ Grid de productos 
const ProductGrid = () => {
  return (
    <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 p-4 bg-white shadow-md rounded-lg text-center transition-transform transform hover:scale-105"
        >
          <img
            src={product.imageSrc}
            alt={product.name}
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h2 className="text-lg font-semibold capitalize h-10 flex items-center justify-center text-black">
            {product.name}
          </h2>
          <p className="text-gray-600 font-bold">{product.price}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition">
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
};

// 🌍 Componente principal
const App = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col items-center">
      <Navbar />
      <ProductGrid />
    </div>
  );
};

export default App;
