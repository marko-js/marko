import type { TestConfig } from "../../main.test";

// The `<server-note>` Class API child is presentational and receives only
// static input, so it stays server-only: it renders to static HTML and its
// (and the compat layer's) client runtime is dropped from the browser
// bundle. Client-only render omits it, so client rendering is skipped.
export const config: TestConfig = {
  skip_csr: true,
  steps: [
    {},
    (c: Element) => (c.querySelector("#m6") as HTMLButtonElement).click(),
  ],
};
