import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// The server's copy of a client's promise pends in a nested `@placeholder` try,
// beside an await the patch fills that pends too: only the outer shell ships.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    {
      title: Promise.resolve("t1"),
      note: Promise.resolve("n1"),
      label: "a",
      promise: Promise.resolve("a"),
    },
    wait,
    navigate(slowCopy, betweenFlushes),
    wait,
  ],
};

function slowCopy() {
  return {
    title: Promise.resolve("t2"),
    note: resolveAfter("n2"),
    label: "b",
    promise: resolveAfter("SECRET_server"),
  };
}

function betweenFlushes() {}
