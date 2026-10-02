import type { TestConfig } from "../../main.test";

// A native tag variable nothing reads resolves nothing on the client, so its
// element takes no walk step or marker and its scope never serializes.
export const config: TestConfig = {
  steps: [{}],
};
