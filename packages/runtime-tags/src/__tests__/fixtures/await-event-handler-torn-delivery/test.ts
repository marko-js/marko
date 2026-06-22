import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// REGRESSION TEST for the streamed-resume event-binding crash.
//
// A <try>/<await> boundary whose streamed content binds an event handler.
// With `tear_stream: true` the chunk is delivered partially: the branch's
// markers arrive (so the boundary resumes and its effects are un-gated) but
// the element-resume marker is missing, so the node accessor is never walked.
//
// Before the fix, the event-binding effect ran against an undefined element
// and threw `TypeError: Cannot read properties of undefined (reading
// '$click')` in `_on`, aborting the rest of the resume pass — the crash that
// can surface intermittently with streamed <try>/<await> boundaries.
//
// After the fix (`_on` skips an unresolved element), resume completes: the
// element renders and the handler is simply left unbound rather than crashing
// the page. This test passes only with the fix in place.
export const config: TestConfig = {
  equivalent: false,
  tear_stream: true,
  steps: [{}, flush, wait],
};
