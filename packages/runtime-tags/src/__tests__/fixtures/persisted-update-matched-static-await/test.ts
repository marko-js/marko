import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const clickButton = (document: Document) =>
  document.querySelector("button")!.click();

// A matched parent whose settled `<await>` bodies carry no values: their
// resumed boundaries must still pair for update dispatch (the boundary
// linkage rides the resume markers regardless of the body's serialize
// reason under persisted builds).
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { title: "First", $global: { persisted: true } },
    flush,
    flush,
    clickButton,
    navigate({ title: "Second", $global: { persisted: true } }),
    clickButton,
    navigate({ title: "First", $global: { persisted: true } }),
  ],
};
