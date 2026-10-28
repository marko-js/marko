import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter, resolveAfter, wait } from "../../utils/resolve";

const seen: unknown[] = [];
const record = (reason: unknown) => seen.push(reason);
const listen = () => {
  seen.length = 0;
  process.on("unhandledRejection", record);
};
const noneUnhandled = () => {
  process.off("unhandledRejection", record);
  assert.deepEqual(seen, []);
};

// The body reads only the client's value, so no patch awaits the server's copy;
// its rejection is still handled.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { label: "a", promise: resolveAfter("a") },
    listen,
    wait,
    navigate(rejecting),
    wait,
    wait,
    noneUnhandled,
  ],
};

function rejecting() {
  return { label: "b", promise: rejectAfter(new Error("server copy")) };
}
