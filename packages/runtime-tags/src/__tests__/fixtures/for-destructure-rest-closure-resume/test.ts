import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    {
      items: [
        { id: 1, extra: "x" },
        { id: 2, extra: "y" },
      ],
      lists: [
        ["a", "b"],
        ["c", "d"],
      ],
    },
    click("#toggle"),
    click("#toggle"),
  ],
};
