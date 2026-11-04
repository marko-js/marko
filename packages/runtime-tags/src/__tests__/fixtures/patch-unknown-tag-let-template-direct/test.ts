import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A template passed straight into a tag analysis cannot resolve, whose template
// holds it in a `<let>`: the page registers it for the seed.
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
