import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The plain twin of patch-catch-created-lazy-define-child: a `@catch` renders
// a lazy child through a `<define>` body.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, { error: new Error("SHOWN_x"), label: "b" }, wait],
};
