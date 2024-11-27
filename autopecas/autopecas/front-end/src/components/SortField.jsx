import React, { useState } from "react";
import "./SortField.css";

const SortFilter = ({ onSortChange }) => {
  const [sort, setSort] = useState("");

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSort(selectedSort);
    onSortChange(selectedSort); 
  };

  return (
    <div className="sort-filter">
      <label htmlFor="sort">Ordenar por:</label>
      <select id="sort" value={sort} onChange={handleSortChange}>
        <option value="">Selecione</option>
        <option value="asc">Menor Preço</option>
        <option value="desc">Maior Preço</option>
      </select>
    </div>
  );
};

export default SortFilter;
