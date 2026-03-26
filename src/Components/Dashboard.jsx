import React, { useState } from "react";

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [search, setSearch] = useState(""); // ✅ added

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-4 md:px-6 py-3 flex justify-between items-center top-0 z-50">
        <h1 className="text-xl font-bold">Techugo</h1>
        <div className="bg-white px-3 py-1 rounded flex items-center w-40 md:w-auto">
          <span className="text-gray-500 mr-2">🔍</span>
          <input
            type="text"
            placeholder="Search..."
            value={search} // ✅ added
            onChange={(e) => setSearch(e.target.value)} // ✅ added
            className="outline-none cursor-pointer text-black w-full text-sm"
          />
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-gray-900 text-white transition-all duration-300
                ${showSidebar ? "w-52 p-5" : "w-16 p-5"}`}
        >
          <div className="flex justify-between items-center mb-5">
            {showSidebar && (
              <h2 className="text-lg cursor-pointer font-semibold">Menu</h2>
            )}
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="bg-blue-600 px-2 py-1 rounded hover:bg-blue-500"
            >
              ☰
            </button>
          </div>

          <ul className="space-y-2">
            {["Dashboard", "Profile", "Settings"].map((item) => (
              <li
                key={item}
                className="px-3 py-2 rounded-md cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:bg-blue-600 transition truncate"
              >
                {showSidebar ? item : ""}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-8 flex flex-col flex-wrap justify-center items-center gap-6">
          {[1, 2, 3, 4]
            .filter((item) =>
              `card ${item}`
                .toLowerCase()
                .includes(search.toLowerCase())
            ) // ✅ added filter
            .map((item) => (
              <div
                key={item}
                className="bg-gray-100 p-5 rounded-lg shadow-md flex-1 hover:shadow-xl hover:-translate-y-1 transition max-w-md w-full md:w-[48%] lg:w-[23%] flex flex-col justify-between h-72"
              >
                <h2 className="text-center font-semibold mb-3">
                  Card {item}
                </h2>

                <div className="h-24 bg-gray-50 rounded mb-4">
                  This is a simple card component with a title and some
                  placeholder text.
                </div>
                <button className="w-full py-2 rounded text-white font-medium bg-amber-600 hover:bg-amber-700 active:scale-95 transition">
                  Click
                </button>
              </div>
            ))}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-3 text-sm">
        Footer Content - &copy; 2024 Techugo. All rights reserved.
      </footer>
    </div>
  );
}