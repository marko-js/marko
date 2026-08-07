import type { TestConfig } from "../../main.test";

const add = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".add")!.click();
};
const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A hole intersecting fill, item, and outer state: every writer path
// repaints it, including items created after the last fill write.
export const config: TestConfig = {
  persisted: true,
  steps: [{ note: "n1" }, inc, { note: "n2" }, add, { note: "n3" }],
};
