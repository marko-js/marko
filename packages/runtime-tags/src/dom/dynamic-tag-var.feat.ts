import { AccessorProp } from "../common/types";
import { installDynamicTagVar } from "./control-flow";
import { createBranchRenders, installBranchRenders } from "./queue";
import { _el_read } from "./signals";

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program with a read dynamic tag variable or any lazy one.
installBranchRenders();
installDynamicTagVar((scope, branch, scopeKey, renderer) => {
  branch[AccessorProp.BranchRenders] = createBranchRenders(scope, scopeKey);
  // A native branch has no renderer to call `_return`.
  if (typeof renderer === "string") {
    branch[AccessorProp.TagVariable]!(() =>
      MARKO_DEBUG
        ? _el_read(branch[AccessorProp.StartNode])
        : branch[AccessorProp.StartNode],
    );
  }
});
