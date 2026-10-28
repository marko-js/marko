import type { TestConfig } from "../../main.test";

// A <define> body renders the content its template is handed, with its own
// param as an attribute: the caller's group decides the renderer there too.
export const config: TestConfig = {
  patches: true,
  steps: [{ y: "y" }, { y: "y" }, { y: "z" }],
};
