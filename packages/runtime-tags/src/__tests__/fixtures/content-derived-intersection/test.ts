import type { TestConfig } from "../../main.test";
const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(selector)!.click();
// patch-content-derived-intersection without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a" },
    click(".k"),
    { label: "b" },
    click(".t"),
    click(".t"),
    { label: "c" },
  ],
};
