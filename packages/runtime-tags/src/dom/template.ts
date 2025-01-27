import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import type {
  BranchScope,
  Template,
  TemplateInput,
  TemplateInstance,
} from "../common/types";
import { prepareEffects, runEffects } from "./queue";
import { createRenderer, initRenderer, type Renderer } from "./renderer";
import { register } from "./resume";
import { createScope, removeAndDestroyBranch } from "./scope";
import { MARK } from "./signals";

export const createTemplate = (
  templateId: string,
  ...rendererArgs: Parameters<typeof createRenderer>
): Template => {
  const renderer = createRenderer(...rendererArgs);
  (renderer as unknown as Template).mount = mount;
  (renderer as unknown as any)._ = renderer; // This is added exclusively for the compat layer, maybe someday it can be removed.
  if (MARKO_DEBUG) {
    (renderer as unknown as Template).render = () => {
      throw new Error(
        `render() is not implemented for the DOM compilation of a Marko template`,
      );
    };
  }

  return register(templateId, renderer as unknown as Template);
};

function mount(
  this: Template & Renderer,
  input: TemplateInput = {},
  reference: ParentNode & Node,
  position?: InsertPosition,
): TemplateInstance {
  let branch!: BranchScope, dom!: Node;
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

  const args = this.___args;
  const effects = prepareEffects(() => {
    branch = createScope($global) as BranchScope;
    dom = initRenderer(this, branch);
    if (args) {
      args(branch, [input]);
    }
  });

  /*
    <!-- beforebegin -->
    <reference>
      <!-- afterbegin -->
      foo
      <!-- beforeend -->
    </reference>
    <!-- afterend -->
  */
  switch (position) {
    case "beforebegin":
      reference.parentNode!.insertBefore(dom, reference);
      break;
    case "afterbegin":
      reference.insertBefore(dom, reference.firstChild);
      break;
    case "afterend":
      reference.parentNode!.insertBefore(dom, reference.nextSibling);
      break;
    default:
      reference.appendChild(dom);
      break;
  }

  runEffects(effects);

  return {
    update: (newInput: unknown) => {
      if (args) {
        runEffects(
          prepareEffects(() => {
            args(branch, MARK);
            args(branch, [newInput]);
          }),
        );
      }
    },
    destroy: () => {
      removeAndDestroyBranch(branch);
    },
  };
}
