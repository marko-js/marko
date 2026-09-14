import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An intersection of two server values inside body content: each member
// delivers through its own closure fill, joining at the shared render.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { a: "1", b: "x" },
    click,
    { a: "2", b: "y" },
    click,
    { a: "3", b: "z" },
    click,
  ],
};
