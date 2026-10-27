import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A page's body a layout renders whole at its root is never created, yet ships
// a shell and a seed (agent-feedback: ship content shells only where created).
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }],
};
