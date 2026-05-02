import React, { useRef, useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts";

function CFRatingChart({ ratingHistory }) {
  const chartRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(400);

  useEffect(() => {
    if (!chartRef.current) return;
    const observer = new ResizeObserver(entries => {
      setChartWidth(entries[0].contentRect.width);
    });
    observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  if (!ratingHistory || ratingHistory.length === 0)
    return (
      <div className="flex flex-col gap-3">
        <p className="space-grotesk text-xl text-gray-400">Rating Progress</p>
        <p className="text-gray-500 text-sm">No contest history yet</p>
      </div>
    );

  const dates   = ratingHistory.map(r => new Date(r.ratingUpdateTimeSeconds * 1000));
  const ratings = ratingHistory.map(r => r.newRating);
  const contests = ratingHistory.map(r => r.contestName);

  return (
    <div className="flex flex-col gap-3" ref={chartRef}>
      <p className="space-grotesk text-xl text-gray-400">Rating Progress</p>
      <LineChart
        xAxis={[{
          data: dates,
          scaleType: "point",
          valueFormatter: (val) =>
            new Date(val).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        }]}
        yAxis={[{
          label: "Rating",
          min: Math.min(...ratings) - 50,
          max: Math.max(...ratings) + 50,
        }]}
        series={[{
          data: ratings,
          label: "Rating",
          color: "#1F8ACB",
          showMark: true,
          curve: "monotoneX",
          valueFormatter: (val) => `${val}`,
        }]}
        slots={{
          itemContent: (slotProps) => {
            const i = slotProps.itemData.dataIndex;
            return (
              <div style={{
                padding: "8px 12px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                fontSize: "13px",
                color: "#fff",
              }}>
                <span style={{ color: "#1F8ACB", fontWeight: 600 }}>{contests[i]}</span>
                <span>Rating : <b>{ratings[i]}</b></span>
              </div>
            );
          },
        }}
        width={chartWidth}
        height={300}
        sx={{
          "& .MuiChartsAxis-root .MuiChartsAxis-tickLabel": { fill: "#aaa !important" },
          "& .MuiChartsAxis-root .MuiChartsAxis-line":      { stroke: "#888 !important" },
          "& .MuiChartsAxis-left .MuiChartsAxis-label":     { fill: "#fff !important" },
          "& .MuiChartsAxis-bottom .MuiChartsAxis-label":   { fill: "#fff !important" },
          "& .MuiChartsLabel-root": { fill: "#fff !important", color: "#fff !important" },
          backgroundColor: "#111",
          borderRadius: "10px",
          padding: "8px",
        }}
      />
    </div>
  );
}

export default CFRatingChart;