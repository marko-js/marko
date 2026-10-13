import type { TestConfig } from "../../main.test";

// A constant `<textarea>` body and `<select value>` beside a patched hole.
export const config: TestConfig = {
  patches: true,
  steps: [{ note: "a" }, { note: "b" }],
};
