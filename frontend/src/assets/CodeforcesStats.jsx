import React, { useState, useEffect } from "react";
import axios from "axios";
import CFstatscard from "./CFstatscard";
import CodeforcesIcon from "../images/CodeForcesLogo.png";

function CodeforcesStats() {
  const [profile, setProfile] = useState(null);
  const [ratingHistory, setRatingHistory] = useState([]);
  const [recentSubmissions, setRecent] = useState([]);
  const [heatmap, setHeatmap] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [profileRes, ratingRes, statusRes] = await Promise.all([
          axios.get("https://codeforces.com/api/user.info?handles=ShouryaShinde"),
          axios.get("https://codeforces.com/api/user.rating?handle=ShouryaShinde"),
          axios.get("https://codeforces.com/api/user.status?handle=ShouryaShinde&count=100"),
        ]);
        setProfile(profileRes.data.result[0]);
        setRatingHistory(ratingRes.data.result);
        setRecent(statusRes.data.result.slice(0, 5));
        const dayCount = {};
        statusRes.data.result.forEach(s => {
          const date = new Date(s.creationTimeSeconds * 1000)
            .toISOString().split("T")[0];
          dayCount[date] = (dayCount[date] || 0) + 1;
        });
        const heatmapData = Object.entries(dayCount).map(([date, count]) => ({
          date, count
        }));
        setHeatmap(heatmapData);

      } catch (err) {
        console.error("Codeforces API failed:", err.message);
      }

      setLoading(false);
    };

    fetchStats();
  }, []);

  if (loading) return <p className="text-white m-10">Loading Codeforces stats...</p>;

  return (
    <div>
      <CFstatscard
        title="Codeforces Stats"
        src={CodeforcesIcon}
        lineColor1="#1F8ACB"
        lineColor2="#FF3333"
        className="w-11/12 mx-auto my-10"
        profile={profile}
        ratingHistory={ratingHistory}
        recentSubmissions={recentSubmissions}
        heatmap={heatmap}
      />
    </div>
  );
}

export default CodeforcesStats;