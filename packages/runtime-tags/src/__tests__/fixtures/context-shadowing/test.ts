import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}],
  // The inner sibling instance shares its branch with the trailing
  // consumer, which client-side (branch based) resolution cannot
  // distinguish; the keyed `<for>` instances below are the supported
  // client-side shape.
  skip_csr: true,
};
