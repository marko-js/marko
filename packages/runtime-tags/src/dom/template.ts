import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import type {
  BranchScope,
  MountedTemplate,
  Scope,
  Template,
  TemplateInput,
} from "../common/types";
import { insertChildNodes } from "./dom";
import { prepareEffects, runEffects } from "./queue";
import { createBranch, createContent, type Renderer } from "./renderer";
import { register } from "./resume";
import { removeAndDestroyBranch } from "./scope";
import type { Signal } from "./signals";

export const createTemplate = (
  id: string,
  template: string | 0,
  walks?: string | 0,
  setup?: ((scope: Scope) => void) | 0,
  inputSignal?: Signal<unknown>,
): Template => {
  const renderer = createContent(
    id,
    template,
    walks,
    setup,
    inputSignal,
  )() as unknown as Template;
  renderer.mount = mount;
  (renderer as any)._ = renderer; // This is added exclusively for the compat layer and also to differentiate a Template from a Renderer
  if (MARKO_DEBUG) {
    renderer.render = () => {
      throw new Error(
        `render() is not implemented for the DOM compilation of a Marko template`,
      );
    };
  }

  return register(id, renderer);
};

function mount(
  this: Template & Renderer,
  input: TemplateInput = {},
  reference: Node,
  position?: InsertPosition,
): MountedTemplate {
  let branch!: BranchScope;
  let parentNode = reference as ParentNode;
  let nextSibling: Node | null = null;
  let { $global } = input;
  if ($global) {
    ({ $global, ...input } = input);
    $global = {
      ___nextScopeId: 0,
      runtimeId: DEFAULT_RUNTIME_ID,
      renderId: DEFAULT_RENDER_ID,
      ...$global,
    };
  } else {
    $global = {
      ___nextScopeId: 0,
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

  const args = this.___params;
  const effects = prepareEffects(() => {
    branch = createBranch(
      $global as any as Scope["$global"],
      this,
      undefined,
      parentNode,
    );

    this.___setup?.(branch);
    args?.(branch, input);
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
            args(branch, newInput);
          }),
        );
      }
    },
    destroy() {
      removeAndDestroyBranch(branch);
    },
  };
}
