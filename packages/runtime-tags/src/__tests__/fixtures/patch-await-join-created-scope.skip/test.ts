import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Navigating a patch into this page creates its `<try>/<await>` body from
// scratch. The `<span class="limit">` reads `page` (a `<draft>` derived from
// `$global.params.page`) joined with `limit` (derived from the awaited
// `$global.total`) in one expression. The await body's closures run before
// the patch seeds the draft, so the join fires once with a stale `page` and
// is never re-fed once the seed lands.
export const config: TestConfig = {
  patches: true,
  steps: [
    { page: 0, $global: { params: { page: 1 }, total: 90 } },
    wait,
    { page: 1, $global: { params: { page: 1 }, total: 90 } },
    wait,
  ],
};
