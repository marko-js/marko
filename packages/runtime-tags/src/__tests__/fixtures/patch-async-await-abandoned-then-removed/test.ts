import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A response is abandoned while its await pends under a `@placeholder`; the
// next one removes the await's branch, which releases its count.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: true, label: "one", a: Promise.resolve("a1") },
    navigate(
      () => ({ show: true, label: "two", a: resolveAfter("a2", 2) }),
      () => "abandon",
    ),
    { show: false, label: "three" },
  ],
};
