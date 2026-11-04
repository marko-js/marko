import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A body a state-sourced native spread renders: the client renders the
// spread, so no patch entry names the body.
export const config: TestConfig = {
  patches: true,
  steps: [
    { kind: "a", note: "x" },
    { kind: "b", note: "y" },
    click,
    { kind: "c", note: "z" },
  ],
};
