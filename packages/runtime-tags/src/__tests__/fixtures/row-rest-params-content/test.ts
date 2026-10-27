import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// A paired loop hands its rest params to content whose handler reads them; rows grow.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ to: 1 }, { to: 3 }, nth(".r", 2), nth(".r", 1)],
};
