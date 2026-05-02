import React from "react";

const verdictColor = (verdict) => {
  if (verdict === "OK")                return "text-green-400";
  if (verdict === "WRONG_ANSWER")      return "text-red-400";
  if (verdict === "TIME_LIMIT_EXCEEDED") return "text-yellow-400";
  if (verdict === "RUNTIME_ERROR")     return "text-orange-400";
  return "text-gray-400";
};

const verdictLabel = (verdict) => {
  const map = {
    OK:                    "Accepted",
    WRONG_ANSWER:          "Wrong Answer",
    TIME_LIMIT_EXCEEDED:   "TLE",
    RUNTIME_ERROR:         "Runtime Error",
    MEMORY_LIMIT_EXCEEDED: "MLE",
    COMPILATION_ERROR:     "CE",
  };
  return map[verdict] || verdict;
};

const langLabel = (lang) => {
  const map = {
    "GNU G++17 7.3.0":  "C++17",
    "GNU G++20 13.2":   "C++20",
    "Python 3.8.12":    "Python",
    "Java 11.0.6":      "Java",
    "PyPy 3":           "PyPy",
  };
  return map[lang] || lang;
};

function CFRecentSubmissions({ recentSubmissions }) {
  if (!recentSubmissions || recentSubmissions.length === 0)
    return (
      <div className="flex flex-col gap-3">
        <p className="space-grotesk text-xl text-gray-400">Recent Submissions</p>
        <p className="text-gray-500 text-sm">No submissions yet</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-3">
      <p className="space-grotesk text-xl text-gray-400">Recent Submissions</p>
      <div className="flex flex-col gap-2">
        {recentSubmissions.slice(0, 5).map((s, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center py-2 border-b border-gray-800"
          >
            <span className="text-white text-sm truncate w-1/2">
              {s.problem.name}
            </span>
            <span className={`text-xs font-semibold ${verdictColor(s.verdict)}`}>
              {verdictLabel(s.verdict)}
            </span>
            <span className="text-gray-500 text-xs px-2 py-1 bg-gray-800 rounded">
              {langLabel(s.programmingLanguage)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CFRecentSubmissions;