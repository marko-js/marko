import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server value read inside a child's client-selected branch delivers as
// a fill: hidden or shown, the branch renders the latest patched title.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a" },
    { title: "b" },
    click,
    { title: "c" },
    click,
    { title: "d" },
  ],
};
