import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The app shape (a layout chain, lazily loaded pages) with a draft whose
// source derives from a global, read in a `<try>` body and beside a server
// value in an `<await>` body. Entering the page creates both boundaries
// with their closure inits and seeds the draft and the act through their
// fill registrations; a guess shows at once, the patch's
// re-fed derivation confirms it for free, and a later patch shows through.
export const config: TestConfig = {
  patches: true,
  steps: [
    { page: 0, $global: { params: { page: 1 }, total: 90 } },
    wait,
    { page: 1, $global: { params: { page: 1 }, total: 90 } },
    wait,
    click,
    { page: 1, $global: { params: { page: 2 }, total: 90 } },
    { page: 1, $global: { params: { page: 5 }, total: 90 } },
    { page: 0, $global: { params: { page: 5 }, total: 90 } },
    { page: 1, $global: { params: { page: 3 }, total: 90 } },
    wait,
    click,
  ],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>(".next")!.click();
}
