import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// Created rows from the caller's items join each item with another caller value from state.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    nth(".l"),
    nth(".bb"),
    { show: true },
    nth(".t"),
  ],
};
