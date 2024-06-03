import React from "react";
import Carrito from "./Carrito"; // Asumiendo que Carrito es otro componente de React

function Navbar({
  cartItems,
  removeFromCart,
  toggleCart,
  showCart,
  setShowCart,
  clearCartHandler,
}) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          Cervezas llicapilsen
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item">
              <a href="/" className="nav-link active smoothScroll">
                <strong>Inicio</strong>
              </a>
            </li>

            <li className="nav-item">
              <a href="/productos" className="nav-link active smoothScroll">
                <strong>Productos</strong>
              </a>
            </li>

            <li className="nav-item">
              <a href="/register" className="nav-link active smoothScroll">
                <strong>Registrarse</strong>
              </a>
            </li>

            <li className="nav-item">
              <a href="/login" className="nav-link active smoothScroll">
                <strong>Login</strong>
              </a>
            </li>

            <li className="nav-item">
              <Carrito
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                toggleCart={toggleCart}
                showCart={showCart}
                setShowCart={setShowCart}
                clearCart={clearCartHandler}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
