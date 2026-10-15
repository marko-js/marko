import type { TestConfig } from "../../main.test";

const error = (id: string) =>
  new Error("SHOWN_message" + id, { cause: { dsn: "SECRET_dsn" + id } });

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A dynamic tag a `@catch` renders reads a member of its error, the page's
// state and a param, as a patch throws, throws into the other tag, recovers
// and throws.
export const config: TestConfig = {
  patches: true,
  // A patch re-renders a caught `<try>` from the server, which recovers;
  // a client render keeps its `@catch`.
  skip_csr: true,
  steps: [
    { large: true, label: "a" },
    { large: true, error: error("1"), label: "b" },
    { large: false, error: error("2"), label: "c" },
    { large: false, label: "d" },
    click,
    { large: true, error: error("3"), label: "e" },
  ],
};
