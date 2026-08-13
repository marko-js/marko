import type { TestConfig } from "../../main.test";

// Every read here runs after its tag is initialized — a function body, a class
// member body, or a change handler — so none of them is a tag variable cycle.
export const config: TestConfig = {
  skip_html: true,
};
