import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import {
  AccessorProp,
  type BranchScope,
  type MountedTemplate,
  type Scope,
  type Template,
  type TemplateInput,
} from "../common/types";
import { insertChildNodes } from "./dom";
import { prepareEffects, runEffects } from "./queue";
import { _content, createBranch, type Renderer } from "./renderer";
import { _resume } from "./resume";
import { removeAndDestroyBranch } from "./scope";
import { _var_change, type Signal } from "./signals";

export const _template = (
  id: string,
  template: string | 0,
  walks?: string | 0,
  setup?: ((scope: Scope) => void) | 0,
  inputSignal?: Signal<unknown>,
): Template => {
  const renderer = _content(
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

  return _resume(id, renderer);
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
      runtimeId: DEFAULT_RUNTIME_ID,
      renderId: DEFAULT_RENDER_ID,
      ...$global,
    };

    if (MARKO_DEBUG) {
      if (!String($global.runtimeId).match(/^[_$a-z][_$a-z0-9]*$/i)) {
        throw new Error(
          `Invalid runtimeId: "${$global.runtimeId}". The runtimeId must be a valid JavaScript identifier.`,
        );
      }

      if (!String($global.renderId).match(/^[_$a-z][_$a-z0-9]*$/i)) {
        throw new Error(
          `Invalid renderId: "${$global.renderId}". The renderId must be a valid JavaScript identifier.`,
        );
      }
    }
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

  let curValue: unknown;
  const args = this.___params;
  const effects = prepareEffects(() => {
    branch = createBranch(
      $global as any as Scope["$global"],
      this,
      undefined,
      parentNode,
    );

    branch[AccessorProp.TagVariable] = (newValue: unknown) => {
      curValue = newValue;
    };
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
    get value() {
      return curValue;
    },
    set value(newValue) {
      _var_change(branch, newValue);
    },
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
