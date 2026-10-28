import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A response still streaming its await is superseded, not aborted: the next
// `patch()` stops it at once, and that response removes the await's branch.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: true, label: "one", a: Promise.resolve("a1") },
    navigate(
      () => ({ show: true, label: "two", a: resolveAfter("a2", 2) }),
      () => "supersede",
    ),
    { show: false, label: "three" },
  ],
};
