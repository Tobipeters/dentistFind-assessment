import type React from "react";

interface IChartProps {
  data: number[];
}

export const TrendChart: React.FC<IChartProps> = ({ data }) => {
  const maxValue = Math.max(...data);

  return (
    <div className="flex items-end h-20 gap-2 rounded-md bg-gray-50 p-2">
      {data.map((value, id) => {
        const heightPercent = maxValue ? (value / maxValue) * 100 : 0;

        return (
          <div
            key={id}
            className="w-full rounded-sm bg-indigo-500"
            style={{
              height: `${heightPercent}%`,
            }}
          ></div>
        );
      })}
    </div>
  );
};
