import type { TestConfig } from "../../main.test";

// The page resumes only the children: a tag variable from input alone writes
// no registration the page's own module would have to load.
export const config: TestConfig = { steps: [{ a: 1 }] };
