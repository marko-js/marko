import type { TestConfig } from "../../main.test";

// Content body with nested if/else: construct, pair, and swap arms with holes.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, title: "t", alt: false, note: "x" },
    { show: true, title: "t", alt: false, note: "x" },
    { show: true, title: "u", alt: false, note: "y" },
    { show: true, title: "u", alt: true, note: "y" },
    { show: true, title: "v", alt: true, note: "z" },
    { show: false, title: "v", alt: true, note: "z" },
    { show: true, title: "w", alt: false, note: "w" },
  ],
};
