import { enable as enableControlFlow } from "./control-flow";
import { enable as enableControllables } from "./controllable";
import { enable as enableWrites } from "./dom";
import { enableRenderEffectQueue, held } from "./queue";

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program containing `<try>`, `<await>`, or lazy loading.
// Each module's `enable` patches its render-effect helpers with the queueing
// variant, so writes and structural changes wait for the commit at the end of
// the drain; apps without client async keep direct, branch-free helpers.
enableRenderEffectQueue();
enableWrites(held);
enableControllables(held);
enableControlFlow(held);
