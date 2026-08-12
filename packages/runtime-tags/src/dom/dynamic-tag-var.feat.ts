import { DYNAMIC_TAG_VAR_REGISTER_ID } from "../common/meta";
import { AccessorProp, type Scope } from "../common/types";
import { installDynamicTagVar } from "./control-flow";
import { _resume } from "./resume";
import { _el_read } from "./signals";

// `BranchEndNativeTag` puts the element on the branch before effects run, so a
// resumed variable reads the same way a static `<div/el>` one does.
const elementGetter = (branch: Scope) => () =>
  MARKO_DEBUG
    ? _el_read(branch[AccessorProp.StartNode])
    : branch[AccessorProp.StartNode];

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program with a tag variable on a dynamic tag.
installDynamicTagVar((branch) =>
  branch[AccessorProp.TagVariable]!(elementGetter(branch)),
);

_resume(DYNAMIC_TAG_VAR_REGISTER_ID, elementGetter);
