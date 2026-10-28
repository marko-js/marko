import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// Created rows render a dynamic tag the caller's state chooses, fed the row's item.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a", tags: ["x"] },
    { show: true, label: "a", tags: ["x", "y"] },
    nth(".c"),
    { show: true, label: "b", tags: ["y", "z"] },
    nth(".c"),
  ],
};
