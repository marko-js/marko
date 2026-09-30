import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// Same as lazy-tag-nested-shared, but the lazy modules finish loading in
// reverse order (the nested grand-child before its parent). The
// grand-child's resume data references the parent's stream, so it must
// halt at its dependency marker until the parent module is ready.
export const config: TestConfig = {
  steps: [{}, wait, wait, click(".child"), click(".grand")],
  equivalent: false,
  load_order: ["grand-child.marko.load.mjs", "child.marko.load.mjs"],
};
