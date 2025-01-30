import React from "react";

const blogPosts = [
  {
    title: "Metaverse and the Future of Banking",
    category: "Metaverse",
    image: "/images/metaverse1.jpg",
  },
  {
    title: "Tapping the Metaverse for Immersive Service",
    category: "Web 3.0",
    image: "/images/metaverse2.jpg",
  },
  {
    title: "JetSynergy invests $50M in Metaverse",
    category: "Crypto Tech",
    image: "/images/metaverse3.jpg",
  },
];

const categories = ["Metaverse", "Web 3.0", "Farming", "Crypto", "Staking"];

const BlogList = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* 左侧 Blog 列表 */}
      <div className="flex-1 space-y-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex bg-[#698C64] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition"
          >
            <img src={post.image} alt={post.title} className="w-1/3 h-32 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <span className="text-[#D94A3D] text-sm font-bold">{post.category}</span>
                <h2 className="text-lg font-semibold mt-2 text-white">{post.title}</h2>
              </div>
              <button className="mt-4 px-4 py-2 bg-[#F2B90F] text-black rounded-md hover:bg-[#F2B366]">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 右侧 分类和搜索 */}
      <div className="w-full md:w-1/3 bg-[#401D09] p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md bg-[#F2B366] text-black"
        />
        <h3 className="text-lg font-semibold mt-4 text-white">Categories</h3>
        <ul className="mt-2">
          {categories.map((cat, index) => (
            <li key={index} className="text-[#F2B90F] hover:underline cursor-pointer">
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
