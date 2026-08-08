import type { TestConfig } from "../../main.test";

// A client arrow whose body calls through a local alias could invoke a
// server function (here via a param default): the fact stays off.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
