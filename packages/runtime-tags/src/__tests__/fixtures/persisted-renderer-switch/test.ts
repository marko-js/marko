import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A fed renderer switching between tag names, a template the page
// registers, and `undefined`, at a server-owned and a client-owned site.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { kind: "div" },
    { kind: "banner" },
    click,
    { kind: "span" },
    click,
    { kind: "banner" },
    { kind: undefined },
  ],
};
