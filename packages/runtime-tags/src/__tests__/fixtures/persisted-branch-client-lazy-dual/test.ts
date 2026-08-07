import type { TestConfig } from "../../main.test";

// Two deep client-owned positions reading one server value: independent
// lazy joins would dispatch each renderer to EVERY subscribed scope
// (cross-rendering values), so a second lazy join fails closed until a
// shared indexed composite exists.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
