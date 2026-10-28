import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A native tag's body beside an unrelated `<await>`: the patch renders the body
// itself, so no fill of what it reads should ship.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: false, note: "a", p: resolveAfter("x", 1) },
    navigate(() => ({ on: false, note: "b", p: resolveAfter("y", 1) })),
    { on: false, note: "c", p: "z" },
  ],
};
