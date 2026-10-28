import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const user = (name: string) => ({ name, passwordHash: "SECRET_" + name });

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", rows: [{ id: 1, user: user("SHOWN_a") }] },
    {
      label: "b",
      rows: [
        { id: 1, user: user("SHOWN_a") },
        { id: 2, user: user("SHOWN_b") },
      ],
    },
    click,
  ],
};
