import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLElement>(selector)!.click();
};

// An effect reading only a page input, beside an intersection of it with state, in
// an `<await>` body: a patch changing the input re-runs the effect.
export const config: TestConfig = {
  patches: true,
  // `<let>` state outlives the patches, unlike a fresh render's.
  skip_fresh_render: true,
  steps: [
    { show: true, items: [1, 2], a: "a1", b: "a1b" },
    { show: true, items: [1, 2], a: "a2", b: "a2b" },
    click(".n"),
    wait,
    { show: true, items: [1, 2], a: "a5", b: "a5b" },
    { show: true, items: [1, 2], a: "a6", b: "a6b" },
  ],
};
