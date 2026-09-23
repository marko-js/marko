import { withBranches } from "../common/helpers";
import { DYNAMIC_TAG_SCRIPT_REGISTER_ID } from "../common/meta";
import { dynamicTagScript } from "./control-flow";
import { _resumed } from "./resume";

// Injected for a dynamic tag with a spread or handler: the effect the writer
// puts on its native branch, which needs branch visits even when resume-only.
_resumed[DYNAMIC_TAG_SCRIPT_REGISTER_ID] = withBranches(dynamicTagScript);
