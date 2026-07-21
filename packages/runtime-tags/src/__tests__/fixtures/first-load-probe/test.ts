import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// Non-persisted twin of persisted-first-load-probe: the size delta between
// the two dom bundles is the per-page first-load cost of the persisted
// feature for this shape (interactive page with a settled boundary).
export const config: TestConfig = {
  equivalent: false,
  steps: [{ title: "First", recs: [{ id: 1, name: "one" }] }, flush],
};
