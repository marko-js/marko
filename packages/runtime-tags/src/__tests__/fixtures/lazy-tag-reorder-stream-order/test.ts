import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// Two instances of the same lazy module share one ready stream. The first
// renders inside a reordered (out of order) <try> section that flushes
// before the second, main-flow instance. Its ready batch is emitted as a
// slot reservation (an unsatisfiable dependency marker, `[1]`) in the
// ordered main-stream script plus an in-place fill inside the reorder
// script. The second instance's later `push` — which references bindings
// from the first batch (the shared object) — can therefore never be
// processed ahead of it, even though the fill itself only executes once
// the reordered content arrives in the browser.
export const config: TestConfig = {
  steps: [{}, flush, flush, wait, clickReordered, clickStreamed, wait],
  equivalent: false,
};

function clickReordered(container: Element) {
  container.querySelector<HTMLButtonElement>(".reordered")!.click();
}

function clickStreamed(container: Element) {
  container.querySelector<HTMLButtonElement>(".streamed")!.click();
}
