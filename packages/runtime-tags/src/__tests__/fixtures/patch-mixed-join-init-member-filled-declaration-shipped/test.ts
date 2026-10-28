import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The same, with the tag also rendered by the client, which ships the value's
// declaration: its fill must mark the change as the joins' fills do.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, x: "a" },
    click,
    { show: true, x: "b" },
    click,
    { show: true, x: "c" },
  ],
};
