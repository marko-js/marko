import { AccessorProp } from "../common/types";
import { installDynamicTagVar } from "./control-flow";
import { createBranchRenders, installBranchRenders } from "./queue";
import { _el_read } from "./signals";

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program with a read tag variable on a dynamic tag.
installBranchRenders();
installDynamicTagVar((scope, branch, scopeOffsetAccessor, renderer) => {
  branch[AccessorProp.BranchRenders] = createBranchRenders(
    scope,
    scope[scopeOffsetAccessor],
  );
  // A native branch has no renderer to call `_return`.
  if (typeof renderer === "string") {
    branch[AccessorProp.TagVariable]!(() =>
      MARKO_DEBUG
        ? _el_read(branch[AccessorProp.StartNode])
        : branch[AccessorProp.StartNode],
    );
  }
});
