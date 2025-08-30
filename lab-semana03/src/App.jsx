import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Componente de producto
function Producto({ nombre, precio }) {
  return (
    <div className="producto">
      <h2>{nombre}</h2>
      <p>Precio: S/. {precio}</p>
    </div>
  );
}

// Página de inicio
function Home() {
  return (
    <div className="pagina">
      <h1>Bienvenido a la tienda 🛒</h1>
      <p>Explora nuestro catálogo y encuentra lo que buscas.</p>
    </div>
  );
}

// Página de catálogo
function Catalogo() {
  return (
    <div className="pagina">
      <h1>Catálogo de Productos</h1>
      <div className="catalogo">
        <Producto nombre="Galleta Oreo" precio={2} />
        <Producto nombre="Chocolate Sublime" precio={3} />
        <Producto nombre="Gaseosa Inka Cola" precio={10} />
      </div>
    </div>
  );
}

// Página de carrito
function Carrito() {
  return (
    <div className="pagina">
      <h1>Tu carrito está vacío 🛍️</h1>
      <p>Agrega productos desde el catálogo.</p>
    </div>
  );
}

// Menú de navegación
function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/catalogo">Catálogo</Link>
      <Link to="/carrito">Carrito</Link>
    </nav>
  );
}

// App principal
export default function App() {
  return (
    <div>
      <NavBar />
      <div className="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </div>
    </div>
  );
}
