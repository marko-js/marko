import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// Created rows of static objects: a handler reads a member of the item.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, nth(".r", 1)],
};
