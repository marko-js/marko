import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A fill read through a conditional-then-loop chain delivers to every
// live item scope while client state stays live.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, items: ["a", "b"], suffix: "x" },
    click,
    { show: true, items: ["a", "b"], suffix: "y" },
    click,
  ],
};
