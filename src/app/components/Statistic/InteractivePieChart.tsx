import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { useState, useEffect } from "react";

const data = [
  { name: "Team", value: 27, color: "#8884d8" },
  { name: "Staking", value: 15, color: "#82ca9d" },
  { name: "Airdrops", value: 10, color: "#ffc658" },
  { name: "Liquidity", value: 12, color: "#d884d8" },
  { name: "Marketing", value: 10, color: "#4a94d8" },
  { name: "Private Sales", value: 26, color: "#a8d884" },
];

export const InteractivePieChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // 确保只在客户端渲染
  }, []);

  if (!isClient) return null;

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={90}
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={3}
        dataKey="value"
        onMouseEnter={(_, index) => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.color}
            style={{
              transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

