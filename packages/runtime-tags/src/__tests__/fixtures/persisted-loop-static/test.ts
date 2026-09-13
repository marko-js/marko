import type { TestConfig } from "../../main.test";

// A STATIC list whose item content is input-driven: the patch targets the
// loop's items, so the loop marker must resume even though the list
// itself can never change.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", note: "new" },
    { title: "Store!", note: "sale" },
  ],
};
