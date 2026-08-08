import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Server-selected structure inside body content inside client-owned
// structure: the selection and the text both ride fills through the
// content boundary.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, title: "a" },
    click,
    { show: false, title: "a" },
    { show: true, title: "b" },
    click,
  ],
};
