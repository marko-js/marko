import type { TestConfig } from "../../main.test";

// A child hands its caller's content to the renderer it is handed, which shows
// it by a server value: the patch creates the content.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { x: 1, y: "y" },
    { x: 2, y: "y" },
    { x: 1, y: "z" },
  ],
};
