import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
};

// A `<define>` body's function captures its param, which its call passes no client
// state, under client state: the client's call keeps it, so no patch writes it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "A", x: true },
    { a: "B", x: true },
    toggle,
    { a: "C", x: true },
    toggle,
  ],
};
