import type { TestConfig } from "../../main.test";

// The child section is otherwise param-only and the parent passes constants,
// but an assignment still needs the serialized change handler after resume.
export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
