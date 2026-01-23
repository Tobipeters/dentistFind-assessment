import type React from "react";

interface IMetricProps {
  label: string;
  value: number;
  suffix?: string;
}

export const MetricCard: React.FC<IMetricProps> = ({
  label,
  value,
  suffix,
}) => {
  const metricLevel =
    value >= 20 ? "success" : value < 10 ? "danger" : "default";

  const accentStyle = {
    success: "text-green-600",
    danger: "text-red-600",
    default: "text-gray-900",
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg flex flex-col gap-1">
      <p className="text-sm text-gray-500">{label}</p>

      <div
        className={`flex items--baseline gap-1 text-xl lg:text-2xl font-semibold ${accentStyle[metricLevel]}`}
      >
        <span>{value} </span>
        {suffix && <span className="text-base font-medium">{suffix}</span>}
      </div>
    </div>
  );
};
