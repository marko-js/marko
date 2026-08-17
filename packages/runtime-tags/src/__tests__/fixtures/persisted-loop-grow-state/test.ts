import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A grown item's hole mixes the loop item with state: the item value is
// never seeded, so the shell drops and the growth rejects (fail closed).
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { title: "Store", items: ["a"] },
    click,
    { title: "Store!", items: ["a", "b"] },
    click,
  ],
};
