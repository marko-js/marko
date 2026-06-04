import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function clickParent(container: Element) {
  container.querySelector<HTMLButtonElement>(".parent")!.click();
}

function clickChild(container: Element) {
  container.querySelector<HTMLButtonElement>(".child")!.click();
}

// Parent passes its scope to a direct load child that has its own state.
// The child scope data must land in the load ready resume (M._.b), not the
// parent's main resume (M._.r), so the parent's serialize state only holds
// an empty placeholder reference to the child scope.
export const config: TestConfig = {
  steps: [{}, wait, clickParent, clickChild, wait],
  equivalent: false,
};
