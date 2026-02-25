import React, { useEffect, useState } from "react"

export default function GridPattern({
  squares = [],
  cellSize = 40,
  className = "",
}) {
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 })

  useEffect(() => {
    const updateSize = () => {
      const cols = Math.ceil(window.innerWidth / cellSize) + 4
      const rows = Math.ceil(window.innerHeight / cellSize) + 4
      setGridSize({ rows, cols })
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [cellSize])

  const squareSet = new Set(squares.map(([x, y]) => `${x},${y}`))
  const grid = []

  for (let y = 0; y < gridSize.rows; y++) {
    for (let x = 0; x < gridSize.cols; x++) {
      const key = `${x},${y}`
      const isHighlighted = squareSet.has(key)

      grid.push(
        <div
          key={key}
          style={{
            width: cellSize,
            height: cellSize,
            borderRight: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            backgroundColor: isHighlighted
              ? "rgba(255,255,255,0.08)"
              : "transparent",
          }}
        />
      )
    }
  }

  return (
    <div
      className={`absolute inset-0 grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${gridSize.cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${gridSize.rows}, ${cellSize}px)`,
      }}
    >
      {grid}
    </div>
  )
}