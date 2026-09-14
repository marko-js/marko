import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Server-selected structure nested inside a client-selected branch: the
// outer selection stays client-side; the inner test and title fill.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { inner: true, title: "a" },
    { inner: false, title: "b" },
    click,
    { inner: true, title: "c" },
    click,
    { inner: true, title: "d" },
  ],
};
