import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A dynamic body fed to a child inside client-owned structure: the hole
// delivers as a fill, on the paired branch and after a client toggle.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { open: true, title: "a", note: "x" },
    { open: true, title: "b", note: "y" },
    click,
    { open: true, title: "c", note: "z" },
    click,
    { open: true, title: "d", note: "w" },
  ],
};
