import GridPattern from "./GridPattern"

export default function GridBackground() {
  return (
    <div className="relative flex h-125 w-full items-center justify-center overflow-hidden rounded-lg bg-black">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className="
          mask-[radial-gradient(400px_circle_at_center,white,transparent)]
          inset-x-0 inset-y-[-30%]
          h-[200%]
          skew-y-12
        "
      />
    </div>
  )
}