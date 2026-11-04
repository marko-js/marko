import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A fill joining an intersection whose members share a source runs in that
// source's pass, so its fill needs no `_or`.
export const config: TestConfig = {
  patches: true,
  steps: [{ item: { price: 10 } }, { item: { price: 20 } }, click],
};
