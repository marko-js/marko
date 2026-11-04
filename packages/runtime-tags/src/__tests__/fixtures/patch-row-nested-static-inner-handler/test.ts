import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// A nested static loop's handler reads the inner and outer row params.
export const config: TestConfig = {
  patches: true,
  steps: [{ rows: [1] }, { rows: [1, 2] }, nth(".r", 3), nth(".r", 0)],
};
