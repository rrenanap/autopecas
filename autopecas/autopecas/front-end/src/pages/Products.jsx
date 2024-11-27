import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";
import SortFilter from "../components/SortField";
import { FaSearch } from "react-icons/fa";

const Products = ({ addToCart }) => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState(""); 
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    setSearch(searchQuery);
  };

  const sortedProducts = () => {
    let sorted = [...products]; 
    if (sort === "asc") {
      sorted.sort((a, b) => a.preco - b.preco); 
    } else if (sort === "desc") {
      sorted.sort((a, b) => b.preco - a.preco); 
    }
    return sorted;
  };

  const filteredProducts = sortedProducts()
    .filter((product) => (filter ? product.category === filter : true))
    .filter((product) =>
      product.nome.toLowerCase().includes(search.toLowerCase())
    );

  const handleSortChange = (sortOption) => {
    setSort(sortOption); 
  };

  useEffect(() => {
    fetch("http://localhost:8081/api/produto") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Falha ao carregar os produtos");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="products-page">
      <div className="filters-search">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
        <SortFilter onSortChange={handleSortChange} />
      </div>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.oid}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
