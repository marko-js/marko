import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A param passed through a child to a grandchild that reads it only as a
// branch test: the grandchild's own fill serves it, the parent never fills.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { flag: true, label: "a" },
    { flag: false, label: "b" },
    click,
    { flag: true, label: "c" },
    click,
    { flag: true, label: "d" },
  ],
};
