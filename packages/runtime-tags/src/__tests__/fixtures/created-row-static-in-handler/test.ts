import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// Created rows of a static object's entries: a handler reads the value.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: false }, { show: true }, nth(".r", 1)],
};
