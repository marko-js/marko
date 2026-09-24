import type { TestConfig } from "../../main.test";

const open = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.open")!.click();
};

// A static content shell reaches a child a flush creates: its slot rides
// the flush in-band, and the child's client branch renders it.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, open, { show: true }, open],
};
