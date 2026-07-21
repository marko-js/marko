import type { TestConfig } from "../../main.test";
import { after, flush, wait } from "../../utils/resolve";

// Two writes supersede the await while its first load is still pending
// (the placeholder showing, the server still streaming in the ssr
// variants). Each hold keeps the outside text at its displayed value, and
// the reveal still happens exactly once: the newest promise's resolution
// commits the content and every held update atomically.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, after(3), flush, wait, wait],
};
