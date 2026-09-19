import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A sync throw inside a patched `<try>` body renders `@catch`, as a
// document does; the next patch takes the body back.
export const config: TestConfig = {
  patches: true,
  steps: [
    { message: "ok" },
    click,
    { message: "x", boom: true },
    click,
    { message: "back" },
  ],
};
