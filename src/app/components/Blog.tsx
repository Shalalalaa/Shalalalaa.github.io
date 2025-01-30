"use client"
import React, { useState } from "react";
import BlogGrid from "./BlogGrid";
import BlogList from "./BlogList";

const Blog = () => {
  const [view, setView] = useState("grid");

  return (
    <section className="bg-black min-h-screen p-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* 标题部分 */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Discover Potential Projects</h1>
          <div>
            <button
              className={`px-4 py-2 mx-2 rounded-md ${view === "grid" ? "bg-[#D94A3D]" : "bg-gray-700"}`}
              onClick={() => setView("grid")}
            >
              Grid View
            </button>
            <button
              className={`px-4 py-2 mx-2 rounded-md ${view === "list" ? "bg-[#D94A3D]" : "bg-gray-700"}`}
              onClick={() => setView("list")}
            >
              List View
            </button>
          </div>
        </div>

        {/* Blog 视图切换 */}
        {view === "grid" ? <BlogGrid /> : <BlogList />}
      </div>
    </section>
  );
};

export default Blog;
