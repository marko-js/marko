import type { TestConfig } from "../../main.test";

// A method call on `input` collapses to a whole-bag read, which never
// promotes to a fill: the body read fails closed, not shipping the bag.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
