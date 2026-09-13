import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A dynamic body the child renders inside ITS OWN client-owned branch: the
// child publishes the fact, so the body delivers as a fill (no direct write).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", note: "x" },
    { title: "b", note: "y" },
    click,
    { title: "c", note: "z" },
    click,
    { title: "d", note: "w" },
  ],
};
