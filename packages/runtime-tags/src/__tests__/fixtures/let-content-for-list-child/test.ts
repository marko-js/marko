import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")?.click();

// patch-let-content-for-list-child without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, { label: "b" }, click, { label: "c" }],
};
