import type { TestConfig } from "../../main.test";

// A static list whose items hold a hole: the items link (an enclosing
// construct needs their text), so the marker resumes and each patch
// re-ships the constant item text.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "Store" }, { title: "Store!" }],
};
