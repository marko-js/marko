import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// `label` is read only by the `<script>`: the effect read must count for
// signal routing so the merge re-runs the script on navigation.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { label: "first", $global: { persisted: true } },
    navigate({ label: "second", $global: { persisted: true } }),
    navigate({ label: "third", $global: { persisted: true } }),
  ],
};
