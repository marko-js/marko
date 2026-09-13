import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A rest grain of the loop item joined with state: the item partial writes
// the rest object like any server-owned local, so growth constructs.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: [{ id: "a", x: 1 }] },
    click,
    {
      items: [
        { id: "a", x: 1, y: 2 },
        { id: "b", z: 3 },
      ],
    },
    click,
  ],
};
