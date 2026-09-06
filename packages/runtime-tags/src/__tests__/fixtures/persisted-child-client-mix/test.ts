import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child attr mixing state with a fill re-applies on both writers:
// clicks recompute it and fill writes recompute it.
export const config: TestConfig = {
  persisted: true,
  steps: [{ suffix: "s1" }, click, { suffix: "s2" }, click],
};
