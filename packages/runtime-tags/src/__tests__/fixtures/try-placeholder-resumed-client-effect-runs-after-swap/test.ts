import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// Content the client creates in a `<try>` still streaming from the server
// runs its effects once the streamed content swaps in.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("#show"), flush, wait, click("#inner")],
};
