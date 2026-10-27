import type { TestConfig } from "../../main.test";

const error = (id: string) =>
  new Error("SHOWN_message" + id, {
    cause: { code: "SHOWN_code" + id, dsn: "SECRET_dsn" + id },
  });

// A `@catch` reading its error: a patch ships only the members its code
// reads, never the `Error` or the rest of its `cause`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { promise: Promise.resolve("ok") },
    {
      promise: new Promise<never>((_, reject) =>
        setTimeout(() => reject(error("1")), 10),
      ),
      error: error("2"),
    },
  ],
};
