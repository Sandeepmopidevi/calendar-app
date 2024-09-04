import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';

const Filter = () => {
  const { categoryFilter, setCategoryFilter } = useContext(EventContext);

  const handleFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="categoryFilter">Filter by category: </label>
      <select id="categoryFilter" value={categoryFilter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default Filter;
