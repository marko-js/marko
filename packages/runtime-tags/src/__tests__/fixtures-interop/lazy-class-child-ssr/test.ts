import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// Child is rendered unconditionally so it appears in the SSR output as a
// preserved empty fragment (<!--F#key--><!--F/-->). The browser must not
// discard that fragment boundary when morphdom hydrates; after the lazy load
// resolves the child renders into the preserved slot.
export const config: TestConfig = {
  steps: [{ value: 42 }, wait, click("#inc")],
  equivalent: false,
};
