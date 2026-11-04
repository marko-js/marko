import type { TestConfig } from "../../main.test";

const s = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.s")!.click();
};
const p = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.p")!.click();
};

// patch-tag-for-in-state-fn-call without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { obj: { p: 1, q: 2 }, sel: "p", prefix: "a" },
    s,
    { obj: { p: 1, q: 2 }, sel: "q", prefix: "a" },
    { obj: { p: 1, q: 2 }, sel: "q", prefix: "b" },
    s,
    { obj: { p: 1, q: 2 }, sel: "p", prefix: "b", dyn: true },
    p,
    { obj: { p: 1, q: 2 }, sel: "q", prefix: "c", dyn: true },
    p,
    s,
  ],
};
