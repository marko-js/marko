import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An `<await>` body a flush creates mounts a stateful child.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, promise: Promise.resolve("x") },
    { show: true, promise: Promise.resolve("y") },
    click,
  ],
};
