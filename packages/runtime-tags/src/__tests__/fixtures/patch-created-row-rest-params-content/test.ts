import type { TestConfig } from "../../main.test";
const nth =
  (sel: string, i = 0) =>
  (d: Document) =>
    (d.querySelectorAll(sel)[i] as HTMLElement).click();
// A created loop hands its rest params to content whose handler reads them.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, nth(".r", 1), nth(".r", 0)],
};
