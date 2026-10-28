import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// Created rows of a static array: a handler reads the row's index.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: false }, { show: true }, nth(".r", 1), nth(".r", 0)],
};
