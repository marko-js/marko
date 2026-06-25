import type { TestConfig } from "../../main.test";

// A split Class API child whose input is reactively updated by its Tags API
// parent must be re-rendered in the browser by that parent.
function clickTags(container: Element) {
  (container.querySelector("#tags") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, clickTags, clickTags],
};
