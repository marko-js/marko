import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// An `<await>` in a `<define>` every call passes the same constant promise: no
// patch leaves it to the client, so a patch settles it, created or live.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, wait, { show: true }, wait, wait],
};
