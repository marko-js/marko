import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// Rows of a range from input: a handler reads the row's number; rows grow.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ n: 0 }, { n: 1 }, nth(".r", 1), { n: 2 }, nth(".r", 2)],
};
