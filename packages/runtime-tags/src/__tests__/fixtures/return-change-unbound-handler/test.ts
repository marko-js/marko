import type { TestConfig } from "../../main.test";

const pickB = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".mode")!.click();
};

// patch-return-change-unbound-handler without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ a: "x", b: "y" }, pickB, { a: "x2", b: "y2" }],
};
