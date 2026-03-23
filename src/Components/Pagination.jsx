import React from "react";
import { useState } from "react";

const Pagination = () => {
  const mockData = [];

  for (let i = 1; i <= 30; i++) {
    mockData.push({
      id: i,
      title: "Card " + i,
      desc: "This is a sample description about page  " + i,
    });
  }

  const ITEMS_PER_PAGE = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const current_Page_Data = mockData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Pagination buttons

  const buttons = [];
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
      <button
        key={i}
        className={currentPage === i ? "active" : ""}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>,
    );
  }

  return (
    <div className="container">
      <div className="card-container">
        {current_Page_Data.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="pagination-buttons">
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {buttons}

        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
