import { AccessorProp, type Scope } from "../common/types";
import { installDynamicTagVar } from "./control-flow";
import { _el_read } from "./signals";

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program with a tag variable on a dynamic tag.
installDynamicTagVar((branch: Scope) =>
  branch[AccessorProp.TagVariable]!(() =>
    MARKO_DEBUG
      ? _el_read(branch[AccessorProp.StartNode])
      : branch[AccessorProp.StartNode],
  ),
);
