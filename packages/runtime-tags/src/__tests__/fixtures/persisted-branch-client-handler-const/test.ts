import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("main > button")!.click();
};
const read = (document: Document) => {
  document.querySelector<HTMLButtonElement>("main button:first-child")!.click();
};

// A handler inside client-owned structure capturing an alias of a server
// value reads the alias root, which the patch keeps current.
export const config: TestConfig = {
  persisted: true,
  // The handler leaves state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [{ title: "a" }, inc, inc, read, { title: "b" }, read],
};
