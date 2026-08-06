import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<const>` inside a branch derives during every render: patches update
// its downstream and constructs compute it from the shell's own setup.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, title: "Store" },
    click,
    { show: true, title: "Store?" },
    click,
    { show: false, title: "Store?" },
    { show: true, title: "Fresh" },
  ],
};
