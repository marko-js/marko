import type { TestConfig } from "../../main.test";

const click = (selector: string) => (container: Document) => {
  container.querySelector<HTMLButtonElement>(selector)!.click();
};

// A `@catch` a patch creates joins its error with its own state and a param
// its caller passes client state, which the client renders, then and later.
export const config: TestConfig = {
  patches: true,
  steps: [
    {},
    click(".rename"),
    { error: new Error("SHOWN_x", { cause: { dsn: "SECRET_dsn" } }) },
    click(".inc"),
    click(".rename"),
  ],
};
