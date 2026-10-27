import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A `@catch` a patch creates seeds its own `<let>` from the error, and its
// handler updates it.
export const config: TestConfig = {
  patches: true,
  steps: [
    {},
    { error: new Error("SHOWN_message", { cause: { dsn: "SECRET_dsn" } }) },
    click,
    click,
  ],
};
