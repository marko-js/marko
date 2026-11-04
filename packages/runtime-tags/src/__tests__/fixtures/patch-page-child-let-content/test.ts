import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const user = (name: string) => ({ name, passwordHash: "SECRET_" + name });

// A resumed child holding content in its `<let>` serializes nothing a
// created one's seed would need.
export const config: TestConfig = {
  patches: true,
  steps: [{ user: user("SHOWN_a") }, { user: user("SHOWN_b") }, click],
};
