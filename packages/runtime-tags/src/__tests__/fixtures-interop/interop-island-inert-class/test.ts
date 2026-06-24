import type { TestConfig } from "../../main.test";

function clickTags(container: Element) {
  (container.querySelector("#tags") as HTMLButtonElement).click();
}

// An interactive Tags API page renders an inert (server only) Class API child.
// The page hydrates its own interactivity through the Marko 6 runtime, but the
// inert class child has no client behavior, so no Marko 5 runtime should ship.
export const config: TestConfig = {
  steps: [{}, clickTags, clickTags],
};
