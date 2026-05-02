import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../Heatmapdisplay.css"; 

function HeatmapDisplay({ submissionCalendar }) {
  if (!submissionCalendar || submissionCalendar.length === 0)
    return <p className="text-gray-400 text-sm">No submission data</p>;
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);

  return (
    <div className="flex flex-col gap-3">
      <p className="space-grotesk text-xl text-gray-400">Submissions</p>
      <CalendarHeatmap
        startDate={startDate}
        endDate={new Date()}
        values={submissionCalendar} 
        classForValue={(value) => {
          if (!value || value.count === 0) return "color-empty";
          if (value.count <= 2)  return "color-scale-1";
          if (value.count <= 5)  return "color-scale-2";
          if (value.count <= 9)  return "color-scale-3";
          return "color-scale-4";
        }}
        showWeekdayLabels={true}
      />
    </div>
  );
}

export default HeatmapDisplay;