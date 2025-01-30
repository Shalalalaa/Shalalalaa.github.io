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

const BlogGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className="bg-[#698C64] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition"
        >
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <span className="text-[#D94A3D] text-sm font-bold">{post.category}</span>
            <h2 className="text-lg font-semibold mt-2 text-white">{post.title}</h2>
            <button className="mt-4 px-4 py-2 bg-[#F2B90F] text-black rounded-md hover:bg-[#F2B366]">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
