import { AccessorProp, RendererProp } from "../common/types";
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
  } else if (
    // A lazy known tag passes no renderer: the compiler checks its `<return>`.
    MARKO_DEBUG &&
    renderer &&
    !(renderer[RendererProp.Setup] || renderer[RendererProp.Params])?.[
      RendererProp.Returns
    ]
  ) {
    throw new Error(
      `A dynamic tag with a [tag variable](https://markojs.com/docs/reference/language#tag-variables) rendered \`${renderer[RendererProp.Id]}\`, which does not [\`<return>\`](https://markojs.com/docs/reference/core-tag#return) a value. Add a \`<return>\` to it, or remove the variable.`,
    );
  }
});
