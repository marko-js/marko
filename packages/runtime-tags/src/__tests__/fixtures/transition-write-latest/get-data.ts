import { resolveAfter } from "../../utils/resolve";

// Each call stamps its ordinal so snapshots prove how many promises were
// actually created (a skipped write must not re-fire the fetch).
let calls = 0;
export function getData(id: number) {
  return resolveAfter({ id, call: ++calls }, calls + 3);
}
