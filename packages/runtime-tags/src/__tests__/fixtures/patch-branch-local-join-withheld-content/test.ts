import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// A branch local joins a server input in a written hole and renders in content
// the caller may withhold: the local's own fill reaches it under its own key.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "p", y: "q", show: true },
    { x: "r", y: "s", show: true },
    click("button.m"),
    click("button.n"),
    { x: "t", y: "u", show: true },
    click("button.m"),
    { x: "v", y: "w", show: true },
    click("button.m"),
  ],
};
