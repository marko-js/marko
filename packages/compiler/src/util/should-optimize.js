export default function shouldOptimize() {
  return process.env.MARKO_DEBUG
    ? process.env.MARKO_DEBUG === "false" || process.env.MARKO_DEBUG === "0"
    : process.env.NODE_ENV && process.env.NODE_ENV !== "development";
}
