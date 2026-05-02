import React from "react";
import CFRatingChart from "./CFRatingChart";
import CFRecentSubmissions from "./CFRecentSubmissions";
import HeatmapDisplay from "./HeatmapDisplay";

function CFstatscard(props) {
  const { profile } = props;

  const registrationDate = profile
    ? new Date(profile.registrationTimeSeconds * 1000)
        .toLocaleDateString("en-US", { month: "short", year: "numeric" })
    : "N/A";

  return (
    <div
      className={`statscard ${props.className}`}
      style={{
        "--line-color-1": props.lineColor1,
        "--line-color-2": props.lineColor2,
      }}
    >
      <div className="statscontent flex flex-col gap-6 p-6">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-4">
            <a href="https://codeforces.com/profile/ShouryaShinde">
              <img
                src={profile?.avatar}
                className="h-12 w-12 rounded-full"
                alt="avatar"
              />
            </a>
            <div>
              <h1 className="card-title space-grotesk text-2xl">
                {props.title}
              </h1>
              <p className="text-gray-400 text-sm">
                Member since {registrationDate}
              </p>
            </div>
          </div>
          <a href="https://codeforces.com/profile/ShouryaShinde">
            <img src={props.src} className="h-16" alt={props.title} />
          </a>
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-1">
            <p className="space-grotesk text-xl text-gray-400">Rating</p>
            <span className="smooch-sans text-3xl text-amber-50">
              {profile?.rating ?? "Unrated"}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="space-grotesk text-xl text-gray-400">Max Rating</p>
            <span className="smooch-sans text-2xl text-amber-50">
              {profile?.maxRating ?? "Unrated"}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="space-grotesk text-xl text-gray-400">Rank</p>
            <span className="smooch-sans text-2xl text-amber-50 capitalize">
              {profile?.rank ?? "Unranked"}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="space-grotesk text-xl text-gray-400">Contribution</p>
            <span className="smooch-sans text-2xl text-amber-50">
              {profile?.contribution ?? 0}
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <div className="w-1/2">
            <CFRatingChart ratingHistory={props.ratingHistory} />
          </div>
          <div className="w-[1px] h-auto bg-gray-700 my-2" />
          <div className="w-1/2">
            <CFRecentSubmissions recentSubmissions={props.recentSubmissions} />
          </div>
        </div>
        <HeatmapDisplay submissionCalendar={props.heatmap} />

      </div>
    </div>
  );
}

export default CFstatscard;