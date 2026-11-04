import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

export const config: TestConfig = {
  patches: true,
  equivalent: false,
  load_order: ["child.marko.load.mjs", "template.marko.page.mjs"],
  steps: [{ label: "a" }, { label: "b" }, click],
};
