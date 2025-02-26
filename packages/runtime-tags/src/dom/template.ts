import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import type {
  BranchScope,
  Template,
  TemplateInput,
  TemplateInstance,
} from "../common/types";
import { insertChildNodes } from "./dom";
import { prepareEffects, runEffects } from "./queue";
import { createBranch, createContent, type Renderer } from "./renderer";
import { register } from "./resume";
import { removeAndDestroyBranch } from "./scope";
import { MARK } from "./signals";

export const createTemplate = (
  ...contentArgs: Parameters<typeof createContent>
): Template => {
  const renderer = createContent(...contentArgs)() as unknown as Template;
  renderer.mount = mount;
  (renderer as any)._ = renderer; // This is added exclusively for the compat layer, maybe someday it can be removed.
  if (MARKO_DEBUG) {
    renderer.render = () => {
      throw new Error(
        `render() is not implemented for the DOM compilation of a Marko template`,
      );
    };
  }

  return register(contentArgs[0], renderer);
};

function mount(
  this: Template & Renderer,
  input: TemplateInput = {},
  reference: Node,
  position?: InsertPosition,
): TemplateInstance {
  let branch!: BranchScope;
  let parentNode = reference as ParentNode;
  let nextSibling: Node | null = null;
  let { $global } = input;
  if ($global) {
    ({ $global, ...input } = input);
    $global = {
      runtimeId: DEFAULT_RUNTIME_ID,
      renderId: DEFAULT_RENDER_ID,
      ...$global,
    };
  } else {
    $global = {
      runtimeId: DEFAULT_RUNTIME_ID,
      renderId: DEFAULT_RENDER_ID,
    };
  }
  /*
    <!-- beforebegin -->
    <reference>
      <!-- afterbegin -->
      foo
      <!-- beforeend --> // default
    </reference>
    <!-- afterend -->
  */
  switch (position) {
    case "beforebegin":
      parentNode = reference.parentNode!;
      nextSibling = reference;
      break;
    case "afterbegin":
      nextSibling = reference.firstChild;
      break;
    case "afterend":
      parentNode = reference.parentNode!;
      nextSibling = reference.nextSibling;
      break;
  }

  const args = this.___args;
  const effects = prepareEffects(() => {
    branch = createBranch($global, this, undefined, parentNode);
    args?.(branch, [input]);
  });

  insertChildNodes(
    parentNode,
    nextSibling,
    branch.___startNode,
    branch.___endNode,
  );
  runEffects(effects);

  return {
    update(newInput: unknown) {
      if (args) {
        runEffects(
          prepareEffects(() => {
            args(branch, MARK);
            args(branch, [newInput]);
          }),
        );
      }
    },
    destroy() {
      removeAndDestroyBranch(branch);
    },
  };
}
