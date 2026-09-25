import { PendingRenderProp } from "../common/types";
import { renderCatch } from "./control-flow";
import { installCatch, type PendingRender } from "./queue";

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program containing a `<try>` with a `@catch`.
installCatch((runRender) => (render: PendingRender) => {
  try {
    runRender(render);
  } catch (error) {
    renderCatch(render[PendingRenderProp.Scope], error);
  }
});
