import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// Created rows from the caller's items join each item with a server value.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, b: "m" },
    { show: true, b: "m" },
    nth(".l"),
    { show: true, b: "n" },
    nth(".t"),
  ],
};
