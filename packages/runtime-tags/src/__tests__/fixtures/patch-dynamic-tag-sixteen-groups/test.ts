import type { TestConfig } from "../../main.test";

// A patch page's dynamic tag masks every group as server-fed, including
// one past the numeric mask's fifteen groups: each branch pairs and updates.
export const config: TestConfig = {
  patches: true,
  steps: [{ v: "a" }, { v: "" }, { v: "b" }],
};
