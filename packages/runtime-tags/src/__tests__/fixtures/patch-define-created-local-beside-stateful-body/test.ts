import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const inc = (document: Document) => {
  document.querySelectorAll<HTMLButtonElement>("button")[1]!.click();
};

// A created branch passes a stateful body its own `<const>` and `<let>`: each
// inits from the shell, and the `<let>` keeps its client changes.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, open: true, label: "a" },
    { show: true, open: true, label: "b" },
    inc,
    click,
    { show: true, open: true, label: "c" },
    { show: false, open: true, label: "d" },
    { show: true, open: true, label: "e" },
  ],
};
