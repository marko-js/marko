import type { TestConfig } from "../../main.test";

// Reads through a `<const>` alias land on its root, but the server output
// still names the alias, and an alias of an alias names that alias.
export const config: TestConfig = {
  steps: [
    { user: { name: "Ada" } },
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
