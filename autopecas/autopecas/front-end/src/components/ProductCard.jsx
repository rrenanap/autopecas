import React, { useState } from "react";
import "./ProductCard.css";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity }); 
  };

  return (
    <div className="product-card">
      <img src={product.imagemUrl} alt={product.nome} />
      <h3>{product.nome}</h3>
      <p>{product.descricao}</p>
      <p>
        <strong>R$ {product.preco.toFixed(2)}</strong>
      </p>
      <div className="card-footer">
        <div className="quantity-controls">
          <button onClick={decreaseQuantity} className="quantity-button">
            -
          </button>
          <span className="quantity-value">{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-button">
            +
          </button>
        </div>

        <button onClick={handleAddToCart} className="add-to-cart-button">
          Adicionar <FaCartPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
