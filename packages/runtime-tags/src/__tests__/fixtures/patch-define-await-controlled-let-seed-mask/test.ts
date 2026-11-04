import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A controlled `<let>` seeded in an `<await>` of a `<define>` every call passes
// client state: its seed's mask packs the client's constant bit.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, wait, { show: true }, wait, wait],
};
