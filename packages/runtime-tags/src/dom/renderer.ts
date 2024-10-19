import {
  type Accessor,
  AccessorChar,
  NodeType,
  type Scope,
} from "../common/types";
import { setConditionalRendererOnlyChild } from "./control-flow";
import { attrs } from "./dom";
import { bindRenderer, createScope } from "./scope";
import {
  CLEAN,
  DIRTY,
  type IntersectionSignal,
  MARK,
  type SignalOp,
  type ValueSignal,
} from "./signals";
import { trimWalkString, walk } from "./walker";

export type Renderer = {
  ___template: string;
  ___walks: string | undefined;
  ___setup: SetupFn | undefined;
  ___closureSignals: Set<IntersectionSignal>;
  ___clone: () => Node;
  ___hasUserEffects: 0 | 1;
  ___sourceNode: Node | undefined;
  ___args: ValueSignal | undefined;
  ___owner: Scope | undefined;
};

export type RendererOrElementName =
  | Renderer
  | (string & Record<keyof Renderer, undefined>);

type SetupFn = (scope: Scope) => void;

export function createScopeWithRenderer(
  renderer: RendererOrElementName,
  $global: Scope["___global"],
  ownerScope?: Scope,
) {
  const newScope = createScope($global);
  newScope._ = newScope.___cleanupOwner = renderer.___owner || ownerScope;
  newScope.___renderer = renderer as Renderer;
  initRenderer(renderer, newScope);
  if (renderer.___closureSignals) {
    for (const signal of renderer.___closureSignals) {
      signal.___subscribe?.(newScope);
    }
  }
  return newScope;
}

export function initRenderer(renderer: RendererOrElementName, scope: Scope) {
  const dom =
    typeof renderer === "string"
      ? document.createElement(renderer)
      : renderer.___clone();
  walk(
    dom.nodeType === NodeType.DocumentFragment ? dom.firstChild! : dom,
    renderer.___walks ?? " ",
    scope,
  );
  scope.___startNode =
    dom.nodeType === NodeType.DocumentFragment
      ? dom.firstChild!
      : (dom as ChildNode);
  scope.___endNode =
    dom.nodeType === NodeType.DocumentFragment
      ? dom.lastChild!
      : (dom as ChildNode);
  if (renderer.___setup) {
    renderer.___setup(scope);
  }
  return dom;
}

export function dynamicTagAttrs(
  nodeAccessor: Accessor,
  renderBody?: Renderer,
  inputIsArgs?: boolean,
) {
  return (
    scope: Scope,
    attrsOrOp: (() => Record<string, unknown>) | SignalOp,
  ) => {
    type WithOptional<T, Keys extends string> = T extends T
      ? T & { [K in Exclude<Keys, keyof T>]?: never }
      : never;

    let renderer:
      | WithOptional<
          Renderer | { default: { _: Renderer } } | { _: Renderer },
          "default" | "_"
        >
      | string
      | undefined
      | null = scope[nodeAccessor + AccessorChar.ConditionalRenderer];

    if (!renderer || renderer === renderBody || attrsOrOp === DIRTY) {
      return;
    }

    const childScope = scope[nodeAccessor + AccessorChar.ConditionalScope];

    if (attrsOrOp === MARK || attrsOrOp === CLEAN) {
      return (renderer as Renderer).___args?.(childScope, attrsOrOp);
    }

    if (typeof renderer === "string") {
      // This will always be 0 because in dynamicRenderer we used WalkCodes.Get
      const elementAccessor = MARKO_DEBUG ? `#${renderer}/0` : 0;
      attrs(childScope, elementAccessor, attrsOrOp());
      setConditionalRendererOnlyChild(
        childScope,
        elementAccessor,
        renderBody && bindRenderer(scope, renderBody),
      );
    } else {
      renderer = renderer.default ? renderer.default._ : renderer._ || renderer;
      if (renderer.___args) {
        const attributes = attrsOrOp();
        renderer.___args(
          childScope,
          inputIsArgs
            ? attributes
            : [
                renderBody
                  ? {
                      ...attributes,
                      renderBody: bindRenderer(scope, renderBody),
                    }
                  : attributes,
              ],
        );
      }
    }
  };
}

export function createRenderer(
  template: string,
  walks?: string,
  setup?: SetupFn,
  getClosureSignals?: () => IntersectionSignal[],
  hasUserEffects: 0 | 1 = 0,
  getArgs?: () => ValueSignal,
): Renderer {
  let closureSignals: Set<IntersectionSignal> | undefined;
  const renderer: Renderer = {
    ___template: template,
    ___walks: walks && /* @__PURE__ */ trimWalkString(walks),
    ___setup: setup,
    ___clone: _clone,
    ___hasUserEffects: hasUserEffects,
    ___sourceNode: undefined,
    ___owner: undefined,
    ___args:
      getArgs &&
      ((scope, value) => (renderer.___args = getArgs())(scope, value)),
    get ___closureSignals() {
      return (closureSignals ??= new Set(getClosureSignals?.()));
    },
  };
  return renderer;
}

function _clone(this: Renderer) {
  return (this.___sourceNode ||= parse(this.___template)).cloneNode(true);
}

const fallback = document.createTextNode("");
const parser = /* @__PURE__ */ new Range();

function parse(template: string) {
  const content = parser.createContextualFragment(template);
  return (
    content.firstChild === content.lastChild
      ? content.firstChild || fallback
      : content
  ) as Node & { firstChild?: ChildNode; lastChild?: ChildNode };
}
