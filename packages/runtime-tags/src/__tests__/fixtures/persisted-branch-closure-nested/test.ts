import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An inner branch reading the OUTER branch's let: the inner INIT renders
// from the outer scope's live value on construct, and constructing the
// outer chain paints the inner from its fresh seed.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", outer: true, inner: true },
    click,
    { title: "Store!", outer: true, inner: false },
    { title: "Store!", outer: true, inner: true },
    { title: "Store!", outer: false, inner: true },
    { title: "Store!", outer: true, inner: true },
  ],
};
