import type { TestConfig } from "../../main.test";
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` rendered directly inside client-owned structure: its
// server reads fill like reads in that structure.
export const config: TestConfig = {
  persisted: true,
  steps: [{ x: "a" }, { x: "b" }, click, { x: "c" }],
};
