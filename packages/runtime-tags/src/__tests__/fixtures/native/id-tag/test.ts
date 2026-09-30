import type { TestConfig } from "../../../main.test";

export const config: TestConfig = {
  // Ids mint in a different order inside a host's branch.
  skip_wrapped: true,
  equivalent: false,
  steps: [{}, { z: undefined }, { z: "explicit" }, { z: undefined }],
};
