import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child a flush creates renders its caller's content inside content its own
// child holds in a `<let>`: both seed by id.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
