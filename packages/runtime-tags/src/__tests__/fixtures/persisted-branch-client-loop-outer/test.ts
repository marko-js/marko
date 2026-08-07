import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client-owned chain inside a server loop body: existing items patch
// (the note delivers as a fill into every live item), but the loop's
// shell drops, so growing the list rejects to navigation instead of
// constructing an item whose interior selection the server cannot know.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { items: ["x"], note: "n1" },
    click,
    { items: ["x"], note: "n2" },
    { items: ["x", "y"], note: "n2" },
  ],
};
