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
// the structure its error selects arrives as the patch's entries; a patch
// rendering the body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [
    {},
    { error: error("SHOWN_a", 404, ["SHOWN_x", "SHOWN_y"]) },
    click,
    { error: error("SHOWN_b", 500, ["SHOWN_z"]) },
    {},
  ],
};
