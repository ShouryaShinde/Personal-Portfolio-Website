import React from "react";

const statusColor = (status) => {
  if (status === "Accepted") return "text-green-400";
  if (status === "Wrong Answer") return "text-red-400";
  if (status === "Time Limit Exceeded") return "text-yellow-400";
  if (status === "Runtime Error") return "text-orange-400";
  return "text-gray-400";
};

const langLabel = (lang) => {
  const map = { cpp: "C++", javascript: "JS", mysql: "SQL", python3: "Py", java: "Java" };
  return map[lang] || lang;
};

function RecentSubmissions({ recentSubmissions }) {
  if (!recentSubmissions || recentSubmissions.length === 0)
    return <p className="text-gray-400 text-sm">No recent submissions</p>;

  return (
    <div className="flex flex-col gap-3">
      <p className="space-grotesk text-xl text-gray-400">Recent Submissions</p>
      <div className="flex flex-col gap-2">
        {recentSubmissions.slice(0, 5).map((s, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center py-2 border-b border-gray-800"
          >
            <span className="text-white text-sm truncate w-1/2">{s.title}</span>
            <span className={`text-xs font-semibold ${statusColor(s.statusDisplay)}`}>
              {s.statusDisplay}
            </span>
            <span className="text-gray-500 text-xs px-2 py-1 bg-gray-800 rounded">
              {langLabel(s.lang)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentSubmissions;