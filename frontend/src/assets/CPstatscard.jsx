import React from "react";
import BadgesDisplay from "./BadgesDisplay";
import HeatmapDisplay from "./HeatmapDisplay";
import RatingChart from "./RatingChart";
import RecentSubmissions from "./RecentSubmissions";

function CPstatscard(props) {
  return (
    <div
      className={`statscard ${props.className}`}
      style={{
        "--line-color-1": props.lineColor1,
        "--line-color-2": props.lineColor2,
      }}
    >
      <div className="statscontent flex flex-col gap-6 p-6">

        {/* Header */}
        <div className="flex flex-row justify-between items-center">
          <h1 className="card-title space-grotesk text-2xl">{props.title}</h1>
          <img src={props.src} className="h-16" alt={props.title} />
        </div>

        {/* Stats row */}
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-1">
            <p className="space-grotesk text-xl text-gray-400">Contest Rating</p>
            <span className="smooch-sans text-3xl text-amber-50">{parseInt(props.rating)}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="space-grotesk text-xl text-gray-400">Global Rank</p>
            <span className="smooch-sans text-2xl text-amber-50">{props.rank}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="space-grotesk text-xl text-gray-400">Top %</p>
            <span className="smooch-sans text-2xl text-amber-50">{props.topPercentage}%</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="space-grotesk text-xl text-gray-400">Attended</p>
            <span className="smooch-sans text-2xl text-amber-50">{props.contests}</span>
          </div>
        </div>

        {/* Chart + Badges side by side */}
        <div className="flex flex-row gap-6">
          <div className="w-1/2">
            <RatingChart contestdata={props.contestdata} />
          </div>
          <div className="w-[1px] bg-gray-700 my-2" />
          <div className="w-1/2 flex flex-col">
            <BadgesDisplay badges={props.badges} />
            <div className="mt-6">
            <RecentSubmissions recentSubmissions={props.recentSubmissions} />
            </div>
          </div>
        </div>

        {/* Heatmap full width */}
        <HeatmapDisplay submissionCalendar={props.submissionCalendar} />

      </div>
    </div>
  );
}

export default CPstatscard;