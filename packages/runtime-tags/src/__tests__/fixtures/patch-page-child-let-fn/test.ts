import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const user = (name: string) => ({ name, passwordHash: "SECRET_" + name });

// A resumed child's `<let>` holding a function registers nothing its
// captures would serialize.
export const config: TestConfig = {
  patches: true,
  steps: [{ user: user("SHOWN_a") }, click, { user: user("SHOWN_b") }],
};
