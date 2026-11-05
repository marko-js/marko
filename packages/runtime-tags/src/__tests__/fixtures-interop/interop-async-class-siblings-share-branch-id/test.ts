import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  (document.querySelector("#toggle") as HTMLButtonElement).click();
}

// Class children settling asynchronously render no scope of their own, so
// each must still claim its own branch id for the client to resume.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
  steps: [{}, toggle],
};
