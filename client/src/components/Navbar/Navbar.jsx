import React from 'react'
import "./navbar.css"


export default function Navbar({ getSearch, getCategory, getFilteredProducts, resetFilter, category }) {
  return (
    <div>
      <div className="navbar">
        <div className="title">
          <h1>Big Basket</h1>
        </div>
        <div className="header">
          <div className="input">
            <div>
              <input
                type="text"
                name="course"
                placeholder="Enter Product name"
                onChange={(e) => getSearch(e)}
              />
            </div>
            <div>
              <select name="category" onChange={(e) => getCategory(e)} value={category}>
                <option value="All">All</option>
                <option value="vegetables">vegetables</option>
                <option value="Fruits">Fruits</option>
              </select>
            </div>
            <div style={{ boxShadow: "none" }}>
              <button onClick={getFilteredProducts}>
                Search
              </button>
              <button onClick={resetFilter} style={{ marginLeft: "10%" }}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
