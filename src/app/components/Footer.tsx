"use client";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-6">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        {/* 社交链接 */}
        <div className="flex justify-center space-x-6 text-lg">
          {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="hover:text-[#E3B23C] transition"
            >
              {platform}
            </a>
          ))}
        </div>

        {/* 版权信息 */}
        <p className="text-sm">© 2025 Maria. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
