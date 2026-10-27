import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-tag-for-in-state-child with an effect reading `input.b`: its fill reaches the
// created row's client-state join only through the closure's subscribers.
export const config: TestConfig = {
  patches: true,
  steps: [
    { obj: { p: 1, q: 2 }, sel: "p", b: "x" },
    click,
    { obj: { p: 3, q: 4 }, sel: "q", b: "y" },
    { obj: { p: 3, q: 4 }, sel: "q", b: "z" },
    click,
    { obj: { p: 3, q: 4 }, sel: "q", b: "w" },
  ],
};
