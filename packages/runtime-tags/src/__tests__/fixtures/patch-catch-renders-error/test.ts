import type { TestConfig } from "../../main.test";

// A `@catch` rendering its error, whole or one member, with no client code
// reading it: the patch fills the text and ships no part of the error or its
// `cause`, as a document does.
export const config: TestConfig = {
  patches: true,
  steps: [
    {},
    {
      error: new Error("SHOWN_message", { cause: { dsn: "SECRET_dsn" } }),
    },
  ],
};
