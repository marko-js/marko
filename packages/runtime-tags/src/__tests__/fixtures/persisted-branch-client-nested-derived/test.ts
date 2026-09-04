import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Root deriveds select and fill nested structure: both ship computed
// values, so the inner branch re-selects and the text stays fresh.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a" },
    click,
    { title: "b" },
    { title: "hide" },
    { title: "c" },
  ],
};
