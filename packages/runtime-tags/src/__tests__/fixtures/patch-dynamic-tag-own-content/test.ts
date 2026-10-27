import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLElement>(selector)!.click();

// Content bound to the dynamic tag's own scope, rendered with input: a
// patch must keep the live branch (and its local state).
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a" },
    click("em"),
    { show: true, label: "b" },
    click("button"),
  ],
};
