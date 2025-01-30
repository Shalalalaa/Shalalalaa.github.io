import { FaUsers, FaChartPie, FaDollarSign, FaCoins } from "react-icons/fa";

const statistics = [
  { icon: <FaUsers />, label: "Packed Pegments", value: "359", color: "text-green-500" },
  { icon: <FaChartPie />, label: "Unique Participants", value: "742", color: "text-yellow-500" },
  { icon: <FaDollarSign />, label: "Raised Capital", value: "17M", color: "text-blue-500" },
  { icon: <FaCoins />, label: "Initial Market Cap", value: "32M", color: "text-purple-500" },
];

export const Data = () => {
  return (
    <div className="flex flex-col space-y-6 p-8">
      {statistics.map((stat, index) => (
        <div key={index} className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
          <span className="text-3xl text-white">{stat.icon}</span>
          <div>
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
