import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client-owned `in=` loop over a state object: entries grow client
// side and the filled server value stays fresh in every entry.
export const config: TestConfig = {
  persisted: true,
  steps: [{ note: "n1" }, click, { note: "n2" }],
};
