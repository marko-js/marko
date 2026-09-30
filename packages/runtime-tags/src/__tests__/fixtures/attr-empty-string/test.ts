import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// A reactive attribute whose value is "" must render as a present (bare)
// attribute, matching SSR, rather than being removed on the client. Toggling
// moves it between "" and "set" to exercise the update path in both directions.
export const config: TestConfig = {
  steps: [{}, click("button"), click("button")],
};
