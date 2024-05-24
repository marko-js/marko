import {
  type Accessor,
  AccessorChar,
  NodeType,
  WalkCode,
  type Scope,
} from "../common/types";
import { setConditionalRendererOnlyChild } from "./control-flow";
import { attrs } from "./dom";
import { bindRenderer, createScope } from "./scope";
import {
  CLEAN,
  DIRTY,
  MARK,
  type IntersectionSignal,
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
  newScope._ = renderer.___owner || ownerScope;
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
    const renderer = scope[
      nodeAccessor + AccessorChar.ConditionalRenderer
    ] as Renderer;

    if (!renderer || renderer === renderBody || attrsOrOp === DIRTY) {
      return;
    }

    const childScope = scope[nodeAccessor + AccessorChar.ConditionalScope];

    if (attrsOrOp === MARK || attrsOrOp === CLEAN) {
      return renderer.___args?.(childScope, attrsOrOp);
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
    } else if (renderer.___args) {
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
  };
}

export function createRenderer(
  template: string,
  walks?: string,
  setup?: SetupFn,
  closureSignals?: IntersectionSignal[],
  hasUserEffects: 0 | 1 = 0,
  args?: ValueSignal,
): Renderer {
  return {
    ___template: template,
    ___walks: walks && /* @__PURE__ */ trimWalkString(walks),
    ___setup: setup,
    ___clone: _clone,
    ___closureSignals: new Set(closureSignals),
    ___hasUserEffects: hasUserEffects,
    ___sourceNode: undefined,
    ___args: args,
    ___owner: undefined,
  };
}

function _clone(this: Renderer) {
  let sourceNode: Node | null | undefined = this.___sourceNode;
  if (!sourceNode) {
    if (MARKO_DEBUG && this.___template === undefined) {
      throw new Error(
        "The renderer does not have a template to clone: " +
          JSON.stringify(this),
      );
    }
    const walks = this.___walks;
    // TODO: there's probably a better way to determine if nodes will be inserted before/after the parsed content
    // and therefore we need to put it in a document fragment, even though only a single node results from the parse
    const ensureFragment =
      walks &&
      walks.length < 4 &&
      walks.charCodeAt(walks.length - 1) !== WalkCode.Get;
    this.___sourceNode = sourceNode = parse(
      this.___template,
      ensureFragment as boolean,
    );
  }
  return sourceNode.cloneNode(true);
}

const doc = document;
const parser = /* @__PURE__ */ doc.createElement("template");

function parse(template: string, ensureFragment?: boolean) {
  let node: Node | null;
  parser.innerHTML = template;
  const content = parser.content;

  if (
    ensureFragment ||
    (node = content.firstChild) !== content.lastChild ||
    (node && node.nodeType === NodeType.Comment)
  ) {
    node = doc.createDocumentFragment();
    node.appendChild(content);
  } else if (!node) {
    node = doc.createTextNode("");
  }

  return node as Node & { firstChild: ChildNode; lastChild: ChildNode };
}
