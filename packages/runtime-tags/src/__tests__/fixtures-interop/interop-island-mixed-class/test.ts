import type { TestConfig } from "../../main.test";

function clickTags(container: Element) {
  (container.querySelector("#tags") as HTMLButtonElement).click();
}
function clickClass(container: Element) {
  (container.querySelector("#class") as HTMLButtonElement).click();
}

// An interactive Tags API page renders one inert (server only) Class API child
// and one stateful Class API child. The inert child ships no client code, but
// the stateful child must still hydrate via the Marko 5 runtime, so Marko 5
// (and the compat layer) is still required.
export const config: TestConfig = {
  steps: [{}, clickTags, clickClass, clickTags],
};
