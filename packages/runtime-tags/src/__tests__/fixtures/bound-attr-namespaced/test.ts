import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  // `<use>` has no controllable attribute, so this pins only that the bound name keeps its prefix.
  steps: [{ href: "#a" }],
};
