import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Child is shown on first render, so _lazy_renderer fires and the import
// starts. Before it resolves, the toggle hides the child, destroying the
// branch scope. The subsequent wait lets the import resolve; the queued
// render checks branch[AccessorProp.Destroyed] and returns early instead
// of crashing or trying to render into the destroyed branch.
export const config: TestConfig = {
  steps: [{}, click, wait],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
