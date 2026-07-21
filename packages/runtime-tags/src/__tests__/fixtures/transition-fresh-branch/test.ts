import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function clickInc(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")!.click();
}

function clickShow(container: Element) {
  container.querySelector<HTMLButtonElement>("#show")!.click();
}

// A branch mounted by unrelated state mid-transition renders eagerly but
// must show the old value for entangled signals: the span appears with
// `late: 0` while `count` is transitioning, then updates to the new value
// with the rest of the commit.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, clickInc, clickShow, wait],
};
