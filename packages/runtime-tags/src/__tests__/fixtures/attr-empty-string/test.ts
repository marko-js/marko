import type { TestConfig } from "../../main.test";

// A reactive attribute whose value is "" must render as a present (bare)
// attribute, matching SSR, rather than being removed on the client. Toggling
// moves it between "" and "set" to exercise the update path in both directions.
function toggle(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle],
};
