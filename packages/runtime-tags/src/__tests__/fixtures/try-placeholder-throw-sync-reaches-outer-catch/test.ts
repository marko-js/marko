import type { TestConfig } from "../../main.test";

// A `<try>` with only a `@placeholder` has no catch of its own, so a sync throw
// in its body renders the enclosing `@catch` in its place.
export const config: TestConfig = {};
