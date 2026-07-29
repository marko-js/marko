import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button:not(.log)")!.click();

class Opaque {
  id = 2;
}

// A patch key the response omits reads as "unchanged", so a request-derived
// value the serializer cannot express has to fail the whole patch — the
// client then falls back to a document load rather than reporting success
// over the stale value.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  // The failure is the server's: a client render never serializes.
  skip_csr: true,
  steps: [
    {
      $global: { persisted: true },
      label: "first",
      detail: { id: 1 },
    },
    clickCount,
    navigate(
      {
        $global: { persisted: true },
        label: "second",
        detail: new Opaque(),
      },
      { expectError: true },
    ),
  ],
};
