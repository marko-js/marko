import type { TestConfig } from "../../main.test";

const pickLast = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:last-of-type")!.click();
};

// A `<let>` whose initial value reads input, read only by a loop's rows: the scope a
// patch creates takes the server's initial value, a document's renders it in place.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, i: 0 },
    { show: false, i: 0 },
    { show: true, i: 1 },
    pickLast,
    { show: true, i: 0 },
  ],
};
