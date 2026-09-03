import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// The outer body writes nothing before going async and the stateful content
// sits in an inner placeholder body that is reordered out of the outer chunk
// chain. Its writes still count for the outer boundary, so the outer catch
// slot arrives at settle (see the html snapshot) and the body resumes.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, flush, wait, click],
};
