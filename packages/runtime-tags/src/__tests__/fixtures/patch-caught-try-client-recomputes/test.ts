import type { TestConfig } from "../../main.test";

// Two tries whose `@catch` reads its error, one caught by the document and one
// by a patch: no later patch pairs either, so the client recomputes their
// error joined with a param and a child's tag variable as the params change.
export const config: TestConfig = {
  patches: true,
  steps: [
    { early: true, label: "a", count: 1 },
    { early: true, late: true, label: "a", count: 1 },
    { early: true, late: true, label: "b", count: 1 },
    { early: true, late: true, label: "b", count: 2 },
  ],
};
