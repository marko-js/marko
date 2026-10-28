import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")?.click();

export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click, { label: "c" }],
};
