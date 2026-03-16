"use client";

import { PieChart as RechartsPieChart, Pie, ResponsiveContainer, Legend, Tooltip, LabelList } from "recharts";
import { mockPieData } from "@/data/mockData";

const COLORS = ["#4cceac", "#70d8bd", "#868dfb", "#e2726e", "#eed312"];

export default function PieChart() {
  const data = Array.isArray(mockPieData) ? mockPieData : [];
  const total = data.reduce((s, d) => s + (d.value ?? 0), 0);
  const dataWithFill = data.map((entry, i) => ({
    ...entry,
    fill: COLORS[i % COLORS.length],
  }));

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
          data={dataWithFill}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          nameKey="label"
        >
          <LabelList
            formatter={(...args: unknown[]) => {
              const props = args[2] as { percent?: number } | undefined;
              return `${((props?.percent ?? 0) * 100).toFixed(0)}%`;
            }}
          />
        </Pie>
        <Tooltip
          contentStyle={{ backgroundColor: "#1f2a40", border: "none", borderRadius: 8, color: "#fff" }}
          formatter={(value, name) => [
            `${typeof value === "number" ? value : 0} (${total ? (((typeof value === "number" ? value : 0) / total) * 100).toFixed(1) : 0}%)`,
            String(name ?? ""),
          ]}
        />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}
