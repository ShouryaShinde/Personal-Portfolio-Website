import React from "react";

function GithubGrid() {
  return (
    <div className="bg-[#080808] border border-[#1f1e1e] rounded-md p-4 w-full scale-120 mr-20">
      
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm text-[#e6edf3] font-semibold space-grotesk">
          Github Contribution Activity
        </div>
        <div className="text-xs text-[#e6edf3] bg-[#000000] border border-[#1b1a1a] px-2 py-1 rounded-md font-mono">
          2025
        </div>
      </div>
      <div className="overflow-x-auto pb-2 flex justify-center">
        <img
          src="https://ghchart.rshah.org/40c463/ShouryaShinde"
          alt="Shourya's Github Chart"
          className="w-full"
          style={{ filter: "invert(1) hue-rotate(180deg)" }}
        />
      </div>

      <div className="flex justify-between items-center mt-4 pt-3 border-t border-[#18191a]">
        
        <a
          href="https://github.com/ShouryaShinde"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#7d8590] hover:text-[#58a6ff] flex items-center gap-1 space-grotesk"
        >
          Learn how we count contributions
        </a>

        <div className="flex items-center gap-1 text-xs text-[#7d8590]">
          <span className="space-grotesk">Less</span>
          <div className="w-2.5 h-2.5 bg-[#161b22]"></div>
          <div className="w-2.5 h-2.5 bg-[#0e4429]"></div>
          <div className="w-2.5 h-2.5 bg-[#006d32]"></div>
          <div className="w-2.5 h-2.5 bg-[#26a641]"></div>
          <div className="w-2.5 h-2.5 bg-[#39d353]"></div>
          <span className="space-grotesk">More</span>
        </div>

      </div>
    </div>
  );
}

export default GithubGrid;