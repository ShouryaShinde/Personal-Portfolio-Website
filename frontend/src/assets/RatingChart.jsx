import React, { useRef, useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts";

function RatingChart({ contestdata }) {
  const chartRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(400);

  useEffect(() => {
    if (!chartRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setChartWidth(entries[0].contentRect.width);
    });
    observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  if (!contestdata || contestdata.length === 0)
    return <p className="text-gray-400 text-sm">No contest data</p>;

  const dates   = contestdata.map((c) => new Date(c.contest.startTime * 1000));
  const title   = contestdata.map((c) => c.contest.title);
  const ratings = contestdata.map((c) => Math.round(c.rating));
  const solved  = contestdata.map((c) => c.problemsSolved);

  return (
    <div className="flex flex-col gap-3" ref={chartRef}>
      <p className="space-grotesk text-xl text-gray-400">Rating Progress</p>
      <LineChart
        xAxis={[{
          label: "Date",
          data: dates,
          scaleType: "point",
          valueFormatter: (val) =>
            new Date(val).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
        }]}
        yAxis={[{
          label: "Rating",
          min: Math.min(...ratings) - 50,
          max: Math.max(...ratings) + 50,
        }]}
        series={[{
          data: ratings,
          label: "Contest Rating",
          color: "#FFD900",
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
                <span style={{ color: "#FFD900", fontWeight: 600 }}>{title[i]}</span>
                <span>Rating : <b>{ratings[i]}</b></span>
                <span>Solved : <b>{solved[i]} / 4</b></span>
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
          "& .MuiChartsAxis-root .MuiChartsAxis-tick":      { stroke: "#888 !important" },
          "& .MuiChartsLabel-root": { fill: "#fff !important", color: "#fff !important" },
          backgroundColor: "#111",
          borderRadius: "10px",
          padding: "8px",
        }}
      />
    </div>
  );
}

export default RatingChart;