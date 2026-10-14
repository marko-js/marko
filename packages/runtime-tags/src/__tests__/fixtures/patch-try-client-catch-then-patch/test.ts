import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client error shows the `@catch`; later patches keep it, writing none of
// the body's values into it, while the param it reads updates.
export const config: TestConfig = {
  patches: true,
  steps: [{ message: "a" }, click, { message: "b" }, click, { message: "c" }],
};
