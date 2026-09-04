import type { TestConfig } from "../../main.test";

// A function from the request keying a client-owned loop cannot serialize,
// exactly as without persisted pages.
export const config: TestConfig = {
  persisted: true,
  error_html: true,
  // Only the debug serializer reports the function; optimize emits a bind
  // the frame commit rejects.
  skip_optimize: true,
  steps: [{ key: (item: string) => item }],
};
