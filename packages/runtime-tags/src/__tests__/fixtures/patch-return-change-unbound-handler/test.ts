import type { TestConfig } from "../../main.test";

const pickB = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".mode")!.click();
};

// A `<return>` handler a caller passes as a plain value: the server writes it as
// the marked write its entries depend on, which the child's module must link.
export const config: TestConfig = {
  patches: true,
  steps: [{ a: "x", b: "y" }, pickB, { a: "x2", b: "y2" }],
};
