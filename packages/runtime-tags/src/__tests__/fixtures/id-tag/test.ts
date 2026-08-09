import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, { z: undefined }, { z: "explicit" }, { z: undefined }],
};
