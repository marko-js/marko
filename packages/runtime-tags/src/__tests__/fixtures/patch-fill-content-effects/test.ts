import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Server values joined with client state in several closures of content a
// tag renders: a patch filling one re-runs each effect reading it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", title: "x" },
    click,
    { label: "b", title: "y" },
    click,
    { label: "c", title: "y" },
  ],
};
