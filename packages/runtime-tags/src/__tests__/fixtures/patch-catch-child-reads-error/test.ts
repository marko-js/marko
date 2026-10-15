import type { TestConfig } from "../../main.test";

const error = (id: string) =>
  new Error("SHOWN_message" + id, { cause: { dsn: "SECRET_dsn" + id } });

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A child a `@catch` renders reads a member of its error, the page's state
// and a param, as a patch throws, throws again, recovers and throws.
export const config: TestConfig = {
  patches: true,
  // A patch re-renders a caught `<try>` from the server, which recovers;
  // a client render keeps its `@catch`.
  skip_csr: true,
  steps: [
    { label: "a" },
    { error: error("1"), label: "b" },
    { error: error("2"), label: "c" },
    { label: "d" },
    click,
    { error: error("3"), label: "e" },
  ],
};
