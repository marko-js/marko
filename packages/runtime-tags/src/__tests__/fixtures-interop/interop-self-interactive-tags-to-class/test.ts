import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// A Class API component with its own interactivity but no event handler from
// the Tags API parent must still hydrate after SSR (`classHydration: "self"`).
export const config: TestConfig = {
  steps: [{}, click("#class-api"), click("#class-api")],
};
