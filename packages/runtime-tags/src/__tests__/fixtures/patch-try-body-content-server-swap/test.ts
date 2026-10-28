import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// The server swaps the content a `<try>` body renders: its tag takes the entry,
// and a client throw renders the current content in the `@catch`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { alt: false, label: "a" },
    { alt: true, label: "b" },
    click,
    { alt: false, label: "c" },
    click,
    { alt: true, label: "d" },
  ],
};
