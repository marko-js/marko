import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created `<await>` body passes a function capturing its value to a child's
// `<let>`: the flush seeds the value ahead of what the body creates.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    click,
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
