import type { TestConfig } from "../../main.test";

const s = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.s")!.click();
};
const p = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.p")!.click();
};

// A card's function, a closure with no fill, read in a row branch beside client
// state: the document decides its created subscriber per instance.
export const config: TestConfig = {
  patches: true,
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
