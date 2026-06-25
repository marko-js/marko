import type { TestConfig } from "../../main.test";

// A Class API component with its own interactivity but no event handler from
// the Tags API parent must still hydrate after SSR (`classHydration: "self"`).
function clickClass(container: Element) {
  (container.querySelector("#class-api") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickClass, clickClass],
};
