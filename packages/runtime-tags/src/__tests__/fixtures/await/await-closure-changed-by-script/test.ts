import type { TestConfig } from "../../../main.test";
import { flush } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// The delay lets the root `<script>`'s flush finish before the body streams,
// so the body resumes after `n` changed and its `<let>` keeps its initial value.
export const config: TestConfig = {
  // The server renders the awaited body before the client-only script changes
  // `n`, and a `<let>` keeps its first value.
  skip_settled: true,
  equivalent: false,
  steps: [
    {},
    () => new Promise((r) => setTimeout(r, 50)),
    flush,
    click("button"),
  ],
};
