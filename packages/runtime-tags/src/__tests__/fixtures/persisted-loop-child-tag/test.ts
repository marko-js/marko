import type { TestConfig } from "../../main.test";

// Loop items rendering a child tag: growth constructs the item shell with
// the child's template inside, and its partial paints the child.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: [{ id: 1, name: "one" }] },
    {
      items: [
        { id: 1, name: "one" },
        { id: 2, name: "two", hot: true },
      ],
    },
    { items: [{ id: 2, name: "two!" }] },
  ],
};
