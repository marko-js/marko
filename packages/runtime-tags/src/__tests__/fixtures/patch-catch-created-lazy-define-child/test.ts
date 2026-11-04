import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A `@catch` a patch creates renders a lazy child through a `<define>` body:
// the catch's registered renderer leaves the child out, so its shell ships.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [{ label: "a" }, { error: new Error("SHOWN_x"), label: "b" }, wait],
};
