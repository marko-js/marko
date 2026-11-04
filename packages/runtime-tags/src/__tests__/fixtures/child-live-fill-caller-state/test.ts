import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// patch-child-live-fill-caller-state without patches.
export const config: TestConfig = {
  // A client render of an unchanged input renders nothing; the server renders each.
  equivalent: false,
  steps: [{}, click(".show"), {}, click(".s"), {}],
};
