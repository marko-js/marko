import type { TestConfig } from "../../main.test";

// An unassigned `<let>` read only as text stays a hole: no client code.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { v: "a", w: "1" },
    { v: "b", w: "2" },
  ],
};
