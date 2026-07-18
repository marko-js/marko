import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { rows: [{ name: "Widget", price: "$3" }] },
    {
      rows: [
        { name: "Widget", price: "$3" },
        { name: "Gizmo", price: "$5" },
      ],
    },
  ],
};
