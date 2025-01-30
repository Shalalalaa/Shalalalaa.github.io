"use client";
import { motion } from "framer-motion";

const roadmapData = [
  { date: "April 16, 2022", description: "Event 1 description..." },
  { date: "May 10, 2022", description: "Event 2 description..." },
  { date: "June 22, 2022", description: "Event 3 description..." },
  { date: "July 30, 2022", description: "Event 4 description..." },
];

const Roadmap = () => {
  return (
    <section className="flex flex-col items-center bg-gray-900 text-white py-12">
      <h2 className="text-3xl font-bold mb-8">Discover potential projects</h2>

      <div className="relative w-full max-w-3xl">
        {/* 时间线 */}
        <div className="absolute left-1/2 top-0 w-1 bg-green-500 h-full transform -translate-x-1/2"></div>

        {/* 事件列表 */}
        {roadmapData.map((event, index) => (
          <motion.div
            key={index}
            className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} w-full mb-8`}
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-1/2">
              {/* 时间点 */}
              <div className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>

              {/* 卡片 */}
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-green-500">
                <h3 className="text-green-400 font-semibold">{event.date}</h3>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
