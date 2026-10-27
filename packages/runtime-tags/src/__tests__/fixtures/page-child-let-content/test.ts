import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const user = (name: string) => ({ name, passwordHash: "SECRET_" + name });

export const config: TestConfig = {
  equivalent: false,
  steps: [{ user: user("SHOWN_a") }, { user: user("SHOWN_b") }, click],
};
