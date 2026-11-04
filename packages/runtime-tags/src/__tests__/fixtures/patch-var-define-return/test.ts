import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A tag var a `<define>` body returns from its params: the template writes it
// where no body's scope reason is in scope, so no body group gates the write.
export const config: TestConfig = {
  patches: true,
  steps: [{ b: 1 }, click, { b: 2 }, click, { b: 3 }],
};
