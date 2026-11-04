import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const user = (name: string) => ({ name, passwordHash: "SECRET_" + name });

// A child a flush creates runs the handler reading its assigned `<let>`'s
// member, though only that member arrives, not a seed of the `<let>`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, user: user("SHOWN_ab") },
    { show: true, user: user("SHOWN_abcdef") },
    click,
  ],
};
