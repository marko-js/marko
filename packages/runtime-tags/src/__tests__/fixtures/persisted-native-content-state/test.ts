import type { TestConfig } from "../../main.test";

// Client state feeding `content=` on a native tag stays closed: the entry
// would clobber the client's selection.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
