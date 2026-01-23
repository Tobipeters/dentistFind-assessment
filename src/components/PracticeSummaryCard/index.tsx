import type React from "react";
import type { PracticeSummary } from "../../types/model";
import { MetricCard, StatusIndicator, TrendChart } from "./components";

interface IPracticeSummaryProps {
  practice: PracticeSummary;
}

export const PracticeSummaryCard: React.FC<IPracticeSummaryProps> = ({
  practice,
}) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 rounded-xl border border-gray-200 bg-white p-6 transition shadow-sm hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="">
          <h3 className="text-xl lg:text-lg font-semibold text-gray-900">
            {practice.name}
          </h3>
          <p className="text-sm text-gray-500">
            {practice.city}, {practice.country}
          </p>
        </div>

        <StatusIndicator variant="success" />
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <MetricCard label="New patient" value={practice.newPatientsThisMonth} />
        <MetricCard label="Appointment" value={practice.appointmentRequests} />
        <MetricCard
          label="Conversion rate"
          value={practice.conversionRate}
          suffix="%"
        />
        <MetricCard label="Show rate" value={2} suffix="%" />
      </div>

      {/* TrendChart */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-700 font-medium">Last 6 months</p>
        <TrendChart data={practice.monthlyTrend} />
      </div>

      {/* Recommendation */}
      <div className="border-t border-gray-200 pt-4">
        <h6 className="text-sm text-gray-700 font-medium mb-2">
          Recommendation
        </h6>

        <ul className="flex flex-col gap-2 list-disc pl-4 text-xs text-gray-600">
          <li>Consider increasing ad budget on top-performering channels</li>
          <li>Optimize mobile landing page</li>
        </ul>
      </div>
    </div>
  );
};
