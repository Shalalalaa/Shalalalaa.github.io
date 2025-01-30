"use client"
import { Data } from "./Statistic/Data";
import { InteractivePieChart } from "./Statistic/InteractivePieChart";

const StatisticsSection = () => {
  return (
    <section className="flex justify-center items-center bg-gray-900 text-white p-10">
      {/* 左侧数据面板 */}
      <div className="w-1/3">
        <Data />
      </div>

      {/* 右侧饼图 */}
      <div className="w-2/3 flex justify-center">
        <InteractivePieChart />
      </div>
    </section>
  );
};

export default StatisticsSection;
