"use client";

/**
 * World map choropleth (Nivo ResponsiveChoropleth) for geography data.
 */
import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "@/lib/theme";
import { mockGeographyData as data } from "@/data/mockData";
import { geoFeatures } from "@/data/mockGeoFeatures";

interface GeographyChartProps {
  isDashboard?: boolean;
}

const features = Array.isArray(geoFeatures?.features) ? geoFeatures.features : [];

export default function GeographyChart({
  isDashboard = false,
}: GeographyChartProps) {
  const theme = useTheme();
  const mode = theme?.palette?.mode ?? "dark";
  const colors = tokens(mode as "light" | "dark");
  if (features.length === 0) {
    return (
      <div className="flex h-full min-h-[400px] items-center justify-center text-token-grey-400">
        Map data unavailable
      </div>
    );
  }
  return (
    <ResponsiveChoropleth
      data={data ?? []}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          legend: { text: { fill: colors.grey[100] } },
          ticks: {
            line: { stroke: colors.grey[100], strokeWidth: 1 },
            text: { fill: colors.grey[100] },
          },
        },
        legends: { text: { fill: colors.grey[100] } },
      }}
      features={features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
}
