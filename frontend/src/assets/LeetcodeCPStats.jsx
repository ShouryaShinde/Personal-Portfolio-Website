import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CPstatscard from "./CPstatscard";
import LeetcodeIcon from "../images/LeetcodeLogo.png";

function LeetcodeCPStats() {
  const [numcontest, setNum] = useState(0);
  const [rating, setRating] = useState(0);
  const [globalRank, setRank] = useState(0);
  const [contests, setContests] = useState([]);
  const [topPercentage, setPercent] = useState(0);
  const [submissionCalendar, setCalendar] = useState([]);
  const [badges, setBadges] = useState([]); 
  const [recentSubmissions, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const vercel = await axios.get(
          "https://leetcode-api-faisalshohag.vercel.app/ShouryaShinde",
        );

        const raw = vercel.data.submissionCalendar;
        const heatmap = Object.entries(raw).map(([timestamp, count]) => ({
          date: new Date(parseInt(timestamp) * 1000)
            .toISOString()
            .split("T")[0],
          count: count,
        }));
        setCalendar(heatmap);
        setRecent(vercel.data.recentSubmissions);
      } catch (err) {
        console.error("Heatmap API failed:", err.message);
      }

      try {
        // --- API 2: alfa-leetcode (contest + badges, cached) ---
        const cached = sessionStorage.getItem("leetcodeContest");

        if (cached) {
          const data = JSON.parse(cached);
          setNum(data.contestAttend);
          setRating(Math.round(data.contestRating));
          setRank(data.contestGlobalRanking);
          setContests(data.contestParticipation);
          setPercent(data.contestTopPercentage);
          setBadges(data.badges);
        } else {
          const [contestRes, badgesRes] = await Promise.all([
            axios.get(
              "https://alfa-leetcode-api.onrender.com/ShouryaShinde/contest",
            ),
            axios.get(
              "https://alfa-leetcode-api.onrender.com/ShouryaShinde/badges",
            ),
          ]);

          const toCache = {
            ...contestRes.data,
            badges: badgesRes.data.badges,
          };
          sessionStorage.setItem("leetcodeContest", JSON.stringify(toCache));

          setNum(contestRes.data.contestAttend);
          setRating(Math.round(contestRes.data.contestRating));
          setRank(contestRes.data.contestGlobalRanking);
          setContests(contestRes.data.contestParticipation);
          setPercent(contestRes.data.contestTopPercentage);
          setBadges(badgesRes.data.badges);
          
        }
      } catch (err) {
        console.error("Contest/Badges API failed:", err.message);
      }

      setLoading(false);
    };

    fetchStats();
  }, []);

  if (loading) return <p className="text-white m-10">Loading...</p>;
  if (error) return <p className="text-red-400 m-10">{error}</p>;

  return (
    <div>
      <CPstatscard
        title="Leetcode Stats"
        src={LeetcodeIcon}
        lineColor1="#FFFFFF"
        lineColor2="#FFD900"
        className="w-11/12 mx-auto my-10"
        rating={rating}
        rank={globalRank}
        topPercentage={topPercentage}
        contests={numcontest}
        contestdata={contests}
        badges={badges}
        submissionCalendar={submissionCalendar}
        recentSubmissions={recentSubmissions}
      />
    </div>
  );
}

export default LeetcodeCPStats;
