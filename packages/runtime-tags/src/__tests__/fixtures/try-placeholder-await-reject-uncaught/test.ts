import type { TestConfig } from "../../main.test";
import { after, flushRAF, throws, wait } from "../../utils/resolve";

// With no `@catch` the rejection escapes its flush, yet its count still
// completes, so the sibling value ends `@placeholder` once it settles.
export const config: TestConfig = {
  skip_ssr: true,
  steps: [{}, flushRAF, throws(() => after(1)()), wait],
};
