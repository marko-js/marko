import type { TestConfig } from "../../main.test";

const clickFlip = (container: Element) =>
  (container.querySelector("button.flip") as HTMLButtonElement).click();

const rows = [
  { id: 1, label: "a" },
  { id: 2, label: "b" },
  { id: 3, label: "c" },
];

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { rows, selected: 2 },
    clickFlip,
    clickFlip,
    { rows, selected: 3 },
    { rows: [{ id: 4, label: "d" }, ...rows], selected: 4 },
  ],
};
