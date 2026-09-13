import type { TestConfig } from "../../main.test";

const count = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".c")!.click();
};

// A constant-fed, page-visible stateful child serializes FULLY (the
// client owns it after page render): its state resumes, not NaN.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, count, {}, count],
};
