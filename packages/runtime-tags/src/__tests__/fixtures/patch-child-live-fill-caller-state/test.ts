import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// A child's live-function fill whose own param its caller passes from its
// `<let>`: the fill never ships (its group is the client's), so nothing links for it.
export const config: TestConfig = {
  patches: true,
  steps: [{}, click(".show"), {}, click(".s"), {}],
};
