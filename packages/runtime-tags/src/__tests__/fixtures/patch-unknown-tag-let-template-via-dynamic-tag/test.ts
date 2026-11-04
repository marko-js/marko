import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A template passed to a dynamic tag's known template, which hands it to a tag
// analysis cannot resolve that holds it in a `<let>`: the page registers it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { framed: false, label: "a" },
    { framed: true, label: "b" },
    { framed: true, label: "c" },
    click,
    { framed: true, label: "d" },
  ],
};
