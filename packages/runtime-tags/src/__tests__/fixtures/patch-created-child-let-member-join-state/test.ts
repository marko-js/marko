import type { TestConfig } from "../../main.test";

const set = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
};

// A hole joining a `<let>`'s member and another `<let>` renders in a child a patch
// creates. The server renders it, so the secret member stays unsent.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    set,
    { show: true, label: "c" },
  ],
};
