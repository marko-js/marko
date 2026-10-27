import type { TestConfig } from "../../main.test";

const error = (id: string) =>
  new Error("SHOWN_message" + id, { cause: { dsn: "SECRET_dsn" + id } });

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A dynamic tag a `@catch` renders reads a member of its error, the page's
// state and a param: the first error a patch shows stays as later patches
// switch the tag, render the body or throw again, and the rest updates.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { large: true, label: "a" },
    { large: true, error: error("1"), label: "b" },
    { large: false, error: error("2"), label: "c" },
    { large: false, label: "d" },
    click,
    { large: true, error: error("3"), label: "e" },
  ],
};
