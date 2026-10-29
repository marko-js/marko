import type { TestConfig } from "../../main.test";

// A `<let>`'s template in rows: the client renders each row's tag with the
// patch's input.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", items: ["x"] },
    { label: "b", items: ["z", "x"] },
    { label: "c", items: ["x"] },
  ],
};
