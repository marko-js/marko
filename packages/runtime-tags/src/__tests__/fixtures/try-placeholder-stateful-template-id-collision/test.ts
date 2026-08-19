import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(selector)!.click();

// Six templates, so the sixth's optimized id is the single letter `f`: the
// placeholder dismiss registration must not share it.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("button"), wait, flush, click("button"), click(".swap")],
};
