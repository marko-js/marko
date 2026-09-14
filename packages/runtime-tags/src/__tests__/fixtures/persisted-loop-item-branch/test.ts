import type { TestConfig } from "../../main.test";

// A branch inside a keyed loop item: items a patch adds construct with the
// item's shell, then the branch's own.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: [{ id: "a", children: [] }] },
    {
      items: [
        { id: "a", children: [] },
        { id: "b", children: ["x"] },
      ],
    },
    {
      items: [
        { id: "b", children: ["x", "y"] },
        { id: "c", children: [] },
      ],
    },
  ],
};
