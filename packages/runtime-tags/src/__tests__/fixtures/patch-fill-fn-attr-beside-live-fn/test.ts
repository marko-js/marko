import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A live function passed straight to a known child, its capture filled for a
// sibling: the fill marks the change, so the bind makes it anew (R166).
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a", flag: true },
    { title: "b", flag: true },
    click,
    { title: "c", flag: true },
    click,
  ],
};
