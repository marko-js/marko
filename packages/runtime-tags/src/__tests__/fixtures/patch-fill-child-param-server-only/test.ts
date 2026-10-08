import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const data = (q: string, ids: string[]) => ({
  $global: { data: { q, items: ids.map((id) => ({ id })) } },
});

// A row's item fills (the client joins it with `hovered`), while its child's
// `href` reads a server-only `$global` value: the patch writes that param.
export const config: TestConfig = {
  patches: true,
  steps: () => [data("a", ["1", "2"]), navigate(() => data("b", ["3"]))],
};
