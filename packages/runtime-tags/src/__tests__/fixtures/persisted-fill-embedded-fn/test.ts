import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A bound function EMBEDDED in a composite fill value has no rebind
// entry: the serializer poisons the frame and the patch navigates.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [{ title: "a" }, click, { title: "b" }],
};
