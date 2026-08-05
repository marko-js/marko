import type { TestConfig } from "../../main.test";

// Root state read two branch levels deep is a dynamic closure the INIT
// cannot render yet: the inner shell drops, pairing still patches, and
// diverging to the inner branch rejects the patch (a document navigation).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", outer: true, inner: false },
    { title: "Store!", outer: true, inner: false },
    { title: "Store!", outer: true, inner: true },
  ],
};
