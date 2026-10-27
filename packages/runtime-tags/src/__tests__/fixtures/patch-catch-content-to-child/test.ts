import type { TestConfig } from "../../main.test";

const error = (id: string) =>
  new Error("SHOWN_message" + id, { cause: { dsn: "SECRET_dsn" + id } });

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A `@catch` passes content reading a member of its error, the page's state
// and a param to a child with no client code, which renders it: the first
// error a patch shows stays as later patches throw again, render the body or
// throw after a click, and the rest updates.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { label: "a" },
    { error: error("1"), label: "b" },
    { error: error("2"), label: "c" },
    { label: "d" },
    click,
    { error: error("3"), label: "e" },
  ],
};
