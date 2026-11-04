import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const user = (name: string) => ({ name, passwordHash: "SECRET_" + name });

// Resumed rows holding content in a child's `<let>` serialize nothing a
// created row's seed would need.
export const config: TestConfig = {
  patches: true,
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
