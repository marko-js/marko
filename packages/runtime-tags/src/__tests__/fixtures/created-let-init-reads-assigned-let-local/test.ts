import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// The plain twin of patch-created-let-init-reads-assigned-let-local: the client renders
// each input.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, a: "a" },
    { show: true, a: "b" },
    click,
    { show: true, a: "c" },
  ],
};
