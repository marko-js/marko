import type { TestConfig } from "../../main.test";

// Server-only class/style values normalize on the server and patch as
// plain attr entries, including removal when the value normalizes empty.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { theme: "light", accent: { color: "red" }, on: true },
    { theme: ["dark", { compact: true }], accent: { color: "red" }, on: true },
    { theme: ["dark", { compact: false }], accent: undefined, on: false },
    { theme: undefined, accent: "color:blue", on: true },
  ],
};
