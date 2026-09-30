import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

const rows = [
  { id: 1, label: "a" },
  { id: 2, label: "b" },
  { id: 3, label: "c" },
];

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { rows, selected: 2 },
    click("button.flip"),
    click("button.flip"),
    { rows, selected: 3 },
    { rows: [{ id: 4, label: "d" }, ...rows], selected: 4 },
  ],
};
