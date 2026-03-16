"use client";

import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { mockPieData } from "@/data/mockData";

const COLORS = ["#4cceac", "#70d8bd", "#868dfb", "#e2726e", "#eed312"];

export default function PieChart() {
  const data = Array.isArray(mockPieData) ? mockPieData : [];

  if (data.length === 0) {
    return (
      <div className="flex h-full min-h-[200px] items-center justify-center text-token-grey-500">
        No pie data
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          nameKey="label"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ backgroundColor: "#1f2a40", border: "none", borderRadius: 8 }}
        />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}
