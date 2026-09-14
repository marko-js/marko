import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Server-selected structure inside `<@catch>` content renders client-side
// with the boundary, its selector and hole delivered as fills.
export const config: TestConfig = {
  persisted: true,
  skip_fresh_render: true,
  steps: [
    { promise: Promise.resolve(), detail: "a" },
    { promise: Promise.resolve(), detail: "b" },
    click,
    { promise: Promise.reject(new Error("x")), detail: "c" },
  ],
};
