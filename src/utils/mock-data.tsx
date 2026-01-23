import type { PracticeSummary } from "../types/model";

export const practiceSummarys: PracticeSummary[] = [
  {
    id: "1",
    name: "Evercare Dentals",
    city: "Thunder Bay",
    country: "Canada",
    newPatientsThisMonth: 9,
    appointmentRequests: 16,
    conversionRate: 18.5,
    monthlyTrend: [10, 12, 8, 15, 18, 20],
  },
  {
    id: "2",
    name: "Clinton Dental Clinic",
    city: "Ottawa",
    country: "Canada",
    newPatientsThisMonth: 12,
    appointmentRequests: 31,
    conversionRate: 18.5,
    monthlyTrend: [20, 22, 15, 32, 40, 50],
  },
  {
    id: "3",
    name: "Alliston Dental Clinic",
    city: "Ontario",
    country: "Canada",
    newPatientsThisMonth: 32,
    appointmentRequests: 46,
    conversionRate: 18.5,
    monthlyTrend: [45, 40, 36, 50, 60, 38],
  },
];
