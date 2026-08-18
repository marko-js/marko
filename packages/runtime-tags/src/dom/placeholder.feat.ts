import { PLACEHOLDER_DISMISS_REGISTER_ID } from "../common/meta";
import { AccessorProp, type BranchScope } from "../common/types";
import { registeredValues } from "./resume";
import { destroyBranch } from "./scope";

// Injected for a `<try>` with an `@placeholder`: the effect the writer puts
// on a streamed body to end its stateful placeholder, live until then.
registeredValues[PLACEHOLDER_DISMISS_REGISTER_ID] = (
  tryBranch: BranchScope,
) => {
  if (tryBranch[AccessorProp.PlaceholderBranch]) {
    destroyBranch(tryBranch[AccessorProp.PlaceholderBranch]);
    tryBranch[AccessorProp.PlaceholderBranch] = 0;
  }
};
