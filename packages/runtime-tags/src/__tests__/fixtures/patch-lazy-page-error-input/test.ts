import type { TestConfig } from "../../main.test";

// An app's error page (a lazy page in its branch) rendering a server
// `Error`: the page writes neither the error nor its `cause`.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    {
      page: 2,
      error: new Error("SHOWN_fetch failed", {
        cause: new Error("SECRET_connect 10.1.2.3:5432"),
      }),
    },
    { page: 1 },
    {
      page: 2,
      error: new Error("SHOWN_again", { cause: { dsn: "SECRET_dsn" } }),
    },
  ],
};
