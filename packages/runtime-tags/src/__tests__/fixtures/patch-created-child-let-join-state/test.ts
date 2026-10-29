import type { TestConfig } from "../../main.test";

const set = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
};

// A hole joining a `<let>` and a `<let>` nothing assigns renders in a child a
// patch creates: the server renders the hole, and the join runs only once assigned.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    set,
    { show: true, label: "c" },
  ],
};
