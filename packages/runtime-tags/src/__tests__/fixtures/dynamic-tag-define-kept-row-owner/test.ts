import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { card: true, label: "a", tags: ["x"] },
    click,
    { card: true, label: "c", tags: ["y", "z"] },
    click,
    { card: false, label: "d", tags: ["z"] },
    click,
  ],
};
