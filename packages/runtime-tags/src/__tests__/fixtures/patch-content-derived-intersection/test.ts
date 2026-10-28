import type { TestConfig } from "../../main.test";
const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(selector)!.click();
// Content derives a local from a closure the patch fills, read with state in
// one intersection: the closure's own fill re-derives it, also once re-created.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a" },
    click(".k"),
    { label: "b" },
    click(".t"),
    click(".t"),
    { label: "c" },
  ],
};
