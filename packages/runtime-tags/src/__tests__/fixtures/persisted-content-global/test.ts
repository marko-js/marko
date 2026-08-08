import type { TestConfig } from "../../main.test";

// A `content=` renderer fed to a content-consuming child at a
// server-owned call site rejects AT THE SITE: a server-owned instance
// would poison (navigate) every patch, so the compiler says so instead.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
