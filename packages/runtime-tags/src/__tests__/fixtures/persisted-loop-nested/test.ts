import type { TestConfig } from "../../main.test";

const growOuter = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".o")!.click();
};
const growInner = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".i")!.click();
};

// Client-owned loops nest when both lists are live state; the fill
// reaches every cell at the inner depth across growth on both axes.
export const config: TestConfig = {
  persisted: true,
  steps: [{ note: "n1" }, growOuter, { note: "n2" }, growInner, { note: "n3" }],
};
