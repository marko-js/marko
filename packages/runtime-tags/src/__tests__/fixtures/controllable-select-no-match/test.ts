import type { TestConfig } from "../../main.test";

// A controlled `<select>` whose `value` matches no `<option>` is a mistake: a
// single select always forces one option selected, so the browser falls back
// to the first option and the controlled value cannot round-trip through SSR
// resume (the server serializes which option is selected, not the value). Both
// the HTML (server) and DOM (client) runtimes emit a `MARKO_DEBUG`
// `console.error`, captured under `## Console`. The warning only exists in
// debug builds, so the optimized build is skipped, and because the unmatched
// value resumes differently than it renders on the client the SSR and CSR
// outputs are not equivalent.
export const config: TestConfig = {
  skip_optimize: true,
  equivalent: false,
};
