import type { TestConfig } from "../../main.test";

const click = (n: number) => (document: Document) => {
  document.querySelectorAll("button")[n].click();
};

// A tag body's param that its renderer feeds from client state stays the client's
// through patches, in rows the client added and renamed.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a" },
    click(1),
    click(0),
    { title: "b" },
    click(1),
    { title: "c" },
  ],
};
