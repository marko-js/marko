import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A native tag's `content` input the client renders itself takes the patch's value
// of what it reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { card: true, label: "a", tags: ["x"] },
    click,
    { card: false, label: "b", tags: ["x", "y"] },
    click,
    { card: false, label: "c", tags: ["y"] },
  ],
};
