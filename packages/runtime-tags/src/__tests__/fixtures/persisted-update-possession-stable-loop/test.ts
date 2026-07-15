import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// The inner list is stable, but its repeated dynamic hops are request-derived.
// Change one row at a time so a colliding bare site id would misidentify the
// unchanged row. The request-derived outer loop also ensures this follows the
// same resumed root path as a real persisted page.
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
