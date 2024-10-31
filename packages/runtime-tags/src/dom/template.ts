import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import type {
  Scope,
  Template,
  TemplateInput,
  TemplateInstance,
} from "../common/types";
import { prepare, runEffects, runSync } from "./queue";
import { initRenderer, type Renderer } from "./renderer";
import { register } from "./resume";
import { createScope, removeAndDestroyScope } from "./scope";
import { MARK } from "./signals";

export const createTemplate = (
  renderer: Renderer,
  templateId: string,
): Template => {
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
  let scope!: Scope, dom!: Node;
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
  const effects = prepare(() => {
    scope = createScope($global);
    dom = initRenderer(this, scope);
    if (args) {
      args(scope, [input]);
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
    case "afterbegin":
      reference.insertBefore(dom, reference.firstChild);
      break;
    case "afterend":
      reference.parentElement!.insertBefore(dom, reference.nextSibling);
      break;
    case "beforebegin":
      reference.parentElement!.insertBefore(dom, reference);
      break;
    default:
      reference.appendChild(dom);
      break;
  }

  runEffects(effects);

  return {
    update: (newInput: unknown) => {
      if (args) {
        runSync(() => {
          args(scope, MARK);
          args(scope, [newInput]);
        });
      }
    },
    destroy: () => {
      removeAndDestroyScope(scope);
    },
  };
}
