import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
};

// Content resumed with its closures keeps them on a page that binds other
// content by its shell.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    toggle,
    toggle,
    { show: true, label: "c" },
    { show: true, native: true, label: "d" },
    { show: true, label: "e" },
    toggle,
    toggle,
  ],
};
