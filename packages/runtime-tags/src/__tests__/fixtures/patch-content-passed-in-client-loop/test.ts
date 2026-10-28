import type { TestConfig } from "../../main.test";

const add = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button.add")!.click();

// Content a known tag passes on inside client-state structure takes the owner's
// later values: no patch renders where its instances are.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, add, { label: "c" }],
};
