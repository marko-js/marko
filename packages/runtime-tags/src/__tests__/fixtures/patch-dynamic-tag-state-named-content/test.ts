import type { TestConfig } from "../../main.test";

const reset = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".reset")) {
    b.click();
  }
};

// A tag client state names renders its content as the client's on the page too,
// so the content subscribes to what it reads and a patch's fill reaches it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { bs: [1], note: "a" },
    reset,
    { bs: [1, 2], note: "b" },
    reset,
    { bs: [2], note: "c" },
  ],
};
