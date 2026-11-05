import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The lazy child's only client code is an effect, so no scope carries the globals.
export const config: TestConfig = {
  steps: [{ $global: { brand: "Marko", serializedGlobals: ["brand"] } }, wait],
  equivalent: false,
};
