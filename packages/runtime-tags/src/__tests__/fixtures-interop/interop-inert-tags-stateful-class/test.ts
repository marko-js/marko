import type { TestConfig } from "../../main.test";

function clickClass(container: Element) {
  (container.querySelector("#class") as HTMLButtonElement).click();
}

// An inert Tags API root renders a stateful Class API child. The Tags root
// ships no client runtime, but the class component must still hydrate and
// update on its own (via the Marko 5 runtime).
export const config: TestConfig = {
  steps: [{}, clickClass, clickClass],
};
