import type { TestConfig } from "../../main.test";

// A dynamic `type=` on a controllable input: the type attribute and the
// control value patch together.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { kind: "text", value: "a" },
    { kind: "text", value: "b" },
    { kind: "number", value: "3" },
    { kind: "text", value: "c" },
  ],
};
