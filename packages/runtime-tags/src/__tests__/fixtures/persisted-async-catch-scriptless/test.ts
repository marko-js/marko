import type { TestConfig } from "../../main.test";

// A dynamic `@catch` on a scriptless page bundles nothing: the slot is a
// sentinel its rejection frame fills with server-rendered catch html.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { promise: Promise.resolve("ok") },
    {
      promise: new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("boom")), 10),
      ),
    },
  ],
};
