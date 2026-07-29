import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// An effect-free stable-loop row is a value group of its own: once the
// parent <ul> group's claim hits, a changed row arrives as a bare
// completion-line dispatch that must resolve through the row's group anchor.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        groups: [{ id: "g", views: { a: "a", b: "a" } }],
      },
    },
    navigate({
      $global: {
        persisted: true,
        groups: [{ id: "g", views: { a: "b", b: "a" } }],
      },
    }),
    navigate({
      $global: {
        persisted: true,
        groups: [{ id: "g", views: { a: "b", b: "b" } }],
      },
    }),
  ],
};
