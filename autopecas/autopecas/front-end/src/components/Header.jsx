import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ cartCount, user }) => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
    window.location.reload();
  };

  return (
    <header>
      <div>
        <Link to="/">Retro Auto Peças</Link>
      </div>
      <nav>
        <Link to="/">Produtos</Link>
        {user && <Link to="/cart">Carrinho ({cartCount})</Link>}{" "}
        <button className="button-nav" onClick={user ? handleLogout : null}>
          {user ? <Link>Logout</Link> : <Link to="/login">Login</Link>}
        </button>
      </nav>
    </header>
  );
};

export default Header;
