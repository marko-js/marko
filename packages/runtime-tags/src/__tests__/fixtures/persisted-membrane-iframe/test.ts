import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// An `<iframe>` holds a whole embedded document even with no bindings, so
// its branch must classify nucleus (a `control` cause) rather than ship as a
// replaceable region — asserted by the snapshots (construct id + shell).
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { embed: true, $global: { persisted: true } },
    navigate({ embed: true, $global: { persisted: true } }),
  ],
};
