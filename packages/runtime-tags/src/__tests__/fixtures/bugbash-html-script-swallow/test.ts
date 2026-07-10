import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  // "<!--" followed by "<script" inside script content puts the HTML parser
  // in the script-data double-escaped state; the real closing </script> no
  // longer closes the element and the rest of the page is swallowed.
  equivalent: false,
  steps: [{ code: "<!--<script>" }],
};
