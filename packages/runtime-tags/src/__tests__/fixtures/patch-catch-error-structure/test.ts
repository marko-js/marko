import type { TestConfig } from "../../main.test";

const error = (message: string, status: number, items: string[]) =>
  Object.assign(new Error(message, { cause: { dsn: "SECRET_dsn" } }), {
    status,
    items,
  });

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A `@catch` a patch creates from its renderer: its setup mounts once, and
// the structure its error selects arrives as the patch's entries.
export const config: TestConfig = {
  patches: true,
  // A patch re-renders a caught `<try>` from the server, which recovers;
  // a client render keeps its `@catch`.
  skip_csr: true,
  steps: [
    {},
    { error: error("SHOWN_a", 404, ["SHOWN_x", "SHOWN_y"]) },
    click,
    { error: error("SHOWN_b", 500, ["SHOWN_z"]) },
    {},
  ],
};
