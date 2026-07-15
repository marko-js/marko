import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// `label` is request-derived and read only by the `<script>`: without the
// effect read counting for signal routing, the merge would be a plain
// scope store and the script would never re-run -- the DOM writes it owns
// would rot across navigations.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { label: "first", $global: { persisted: true } },
    navigate({ label: "second", $global: { persisted: true } }),
    navigate({ label: "third", $global: { persisted: true } }),
  ],
};
