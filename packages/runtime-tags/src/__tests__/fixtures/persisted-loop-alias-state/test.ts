import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Aliases of the loop item (a destructured grain, a plain alias) joined
// with state resolve to seeded item grains, so growth constructs.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: [{ id: "a", name: "A" }] },
    click,
    {
      items: [
        { id: "a", name: "A!" },
        { id: "b", name: "B" },
      ],
    },
    click,
  ],
};
