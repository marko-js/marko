import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A template a dynamic tag's known template renders only by name: each patch
// sends its shell, so the page registers none of its code.
export const config: TestConfig = {
  patches: true,
  steps: [
    { framed: true, label: "a" },
    click,
    { framed: true, label: "b" },
    { framed: false, label: "c" },
    { framed: true, label: "d" },
  ],
};
