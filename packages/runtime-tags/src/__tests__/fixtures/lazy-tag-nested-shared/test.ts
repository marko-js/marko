import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// An object created in a lazy loaded parent is serialized by both the
// parent's scope and a nested lazy child's scope. The value must be bound
// by the parent's resume stream and referenced (not duplicated) by the
// child's, which waits for the parent's stream before processing.
export const config: TestConfig = {
  steps: [{}, wait, wait, clickChild, clickGrand],
  equivalent: false,
};

function clickChild(container: Element) {
  container.querySelector<HTMLButtonElement>(".child")!.click();
}

function clickGrand(container: Element) {
  container.querySelector<HTMLButtonElement>(".grand")!.click();
}
