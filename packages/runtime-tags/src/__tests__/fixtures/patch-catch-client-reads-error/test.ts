import type { TestConfig } from "../../main.test";

const error = (id: string) =>
  new Error("SHOWN_message" + id, {
    cause: { code: "SHOWN_code" + id, dsn: "SECRET_dsn" + id },
  });

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A `@catch` whose handler and script read members of its error: a patch
// ships those members, as the document writes them, and nothing else of it.
export const config: TestConfig = {
  patches: true,
  // A patch re-renders a caught `<try>` from the server, which recovers;
  // a client render keeps its `@catch`.
  skip_csr: true,
  steps: [{ error: error("1") }, click, {}, { error: error("2") }, click],
};
