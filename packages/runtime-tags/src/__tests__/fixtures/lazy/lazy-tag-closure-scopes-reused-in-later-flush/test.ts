import type { TestConfig } from "../../../main.test";
import { flush, wait } from "../../../utils/resolve";

export const config: TestConfig = {
  // The resumed page runs its script after the in-order await streams in; the
  // client runs it before the await resolves.
  skip_settled: true,
  equivalent: false,
  steps: [{}, flush, clickBody, wait],
};

function clickBody(document: Document) {
  document.body.click();
}
