import { PLACEHOLDER_DISMISS_REGISTER_ID } from "../common/meta";
import { destroyResumedPlaceholder } from "./control-flow";
import { _resume } from "./resume";

// Injected for a `<try>` with an `@placeholder`: the effect the writer puts
// on a streamed body to end its stateful placeholder.
_resume(PLACEHOLDER_DISMISS_REGISTER_ID, destroyResumedPlaceholder);
