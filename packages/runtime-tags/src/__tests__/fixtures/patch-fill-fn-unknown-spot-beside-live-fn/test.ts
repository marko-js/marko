import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Server-bound arrows a computed key or an index past a spread holds, beside a
// live bind: each registration carries its captures, so none goes stale.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a", key: "fmt", pre: [] },
    { title: "b", key: "fmt", pre: [] },
    click,
    { title: "c", key: "fmt", pre: [] },
    click,
  ],
};
