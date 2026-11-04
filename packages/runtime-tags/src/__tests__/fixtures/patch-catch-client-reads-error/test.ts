import type { TestConfig } from "../../main.test";

const error = (id: string) =>
  new Error("SHOWN_message" + id, {
    cause: { code: "SHOWN_code" + id, dsn: "SECRET_dsn" + id },
  });

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A `@catch` whose handler and script read members of its error: the patch
// creating it ships those members, as a document writes them, and nothing
// else of it; later patches throwing again keep it, and one rendering the
// body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [{}, { error: error("1") }, click, { error: error("2") }, click, {}],
};
