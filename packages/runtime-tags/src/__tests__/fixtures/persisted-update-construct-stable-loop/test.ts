import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// The inner list is stable but its repeated dynamic hops are request-derived:
// changing one row at a time catches a colliding bare anchor id.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        groups: [{ id: "group", views: { one: "a", two: "a" } }],
      },
    },
    navigate({
      $global: {
        persisted: true,
        groups: [{ id: "group", views: { one: "b", two: "a" } }],
      },
    }),
    navigate({
      $global: {
        persisted: true,
        groups: [{ id: "group", views: { one: "b", two: "b" } }],
      },
    }),
  ],
};
