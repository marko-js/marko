import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { show: false, items: [{ text: "a" }] },
    { show: true, items: [{ text: "b" }, { text: "c" }] },
    (d: Document) => d.querySelector<HTMLButtonElement>("button")!.click(),
    { show: true, items: [{ text: "d" }, { text: "e" }] },
  ],
};
