import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  persisted: true,
  // Generated ids are per render: the patched page keeps its own numbering.
  skip_fresh_render: true,
  equivalent: false,
  steps: [{}, { z: undefined }, { z: "explicit" }, { z: undefined }],
};
