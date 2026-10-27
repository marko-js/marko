import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client choice whose candidates capture apart from the live function also passed:
// the call's record keeps the choice's captures.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a", other: "x" },
    { title: "b", other: "x" },
    click,
    { title: "b", other: "y" },
    { title: "c", other: "y" },
    click,
    { title: "d", other: "z" },
  ],
};
