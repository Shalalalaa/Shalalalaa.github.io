"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 fixed top-0 bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#E3B23C]">My Portfolio</h1>

        {/* 导航菜单 */}
        <ul className="flex space-x-8 text-white font-medium">
          {[
            { name: "Home", link: "/" },
            { name: "Portfolio", link: "/Portfolio" },
            { name: "Blog", link: "/Blog" },
            { name: "About", link: "/About" },
            { name: "Contact", link: "/Contact" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className="hover:text-[#E3B23C] transition cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

