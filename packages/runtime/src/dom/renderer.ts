import type { Accessor, Scope, ScopeContext } from "../common/types";
import type { Signal } from "./signals";
import { createScope } from "./scope";
import { setContext } from "../common/context";
import { WalkCodes, walk, trimWalkString } from "./walker";
import { queueHydrate, runHydrate } from "./queue";
import { DOMFragment, singleNodeFragment } from "./fragment";

const enum NodeType {
  Element = 1,
  Text = 3,
  Comment = 8,
  DocumentFragment = 11,
}

export type Renderer<S extends Scope = Scope> = {
  ___template: string;
  ___walks: string | undefined;
  ___setup: SetupFn<S> | undefined;
  ___closureSignals: Signal[];
  ___clone: () => Node;
  ___hasUserEffects: 0 | 1;
  ___sourceNode: Node | undefined;
  ___dynamicStartNodeOffset: Accessor | undefined;
  ___dynamicEndNodeOffset: Accessor | undefined;
  ___attrs: Signal | undefined;
  ___owner: Scope | undefined;
};

type Input = Record<string, unknown>;
type SetupFn<S extends Scope = Scope> = (scope: S) => void;
type RenderResult<I extends Input> = {
  update: (input: I) => void;
  destroy: () => void;
};

export function createScopeWithRenderer<S extends Scope = Scope>(
  renderer: Renderer<S>,
  context: ScopeContext,
  ownerScope?: Scope
) {
  setContext(context);
  const newScope = createScope(context as ScopeContext) as S;
  newScope._ = renderer.___owner || ownerScope;
  newScope.___renderer = renderer as Renderer;
  initRenderer<S>(renderer, newScope);
  for (const signal of renderer.___closureSignals) {
    signal.___subscribe?.(newScope);
  }
  setContext(null);
  return newScope;
}

export function initContextProvider(
  scope: Scope,
  scopeAccessor: number,
  valueAccessor: number,
  contextKey: string,
  renderer: Renderer,
  fragment: DOMFragment = singleNodeFragment
) {
  const node: Node = scope[scopeAccessor];
  const newScope = createScopeWithRenderer(
    renderer,
    {
      ...scope.___context,
      [contextKey]: [scope, valueAccessor],
    },
    scope
  );

  fragment.___insertBefore(newScope, node.parentNode!, node.nextSibling);

  for (const signal of renderer.___closureSignals) {
    signal.___notify(newScope, true);
  }
}

export function initRenderer<S extends Scope = Scope>(
  renderer: Renderer<S>,
  scope: S
) {
  const dom = renderer.___clone();
  walk(
    dom.nodeType === NodeType.DocumentFragment
      ? dom.firstChild!
      : (dom as ChildNode),
    renderer.___walks!,
    scope
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
  if (renderer.___dynamicStartNodeOffset !== undefined) {
    scope.___startNode = renderer.___dynamicStartNodeOffset;
  }
  if (renderer.___dynamicEndNodeOffset !== undefined) {
    scope.___endNode = renderer.___dynamicEndNodeOffset;
  }
  return dom;
}

export function createRenderFn<I extends Input, S extends Scope>(
  template: string,
  walks: string,
  setup?: SetupFn<S>,
  attrs?: Signal,
  closureSignals?: Signal[],
  dynamicStartNodeOffset?: number,
  dynamicEndNodeOffset?: number
) {
  const renderer = createRenderer<S>(
    template,
    walks,
    setup,
    closureSignals,
    0,
    dynamicStartNodeOffset,
    dynamicEndNodeOffset
  );
  return Object.assign((input: I, element: Element): RenderResult<I> => {
    const scope = createScope() as S;
    queueHydrate(scope, () => {
      element.replaceChildren(dom);
    });
    const dom = initRenderer(renderer, scope);

    if (attrs) {
      attrs.___apply(scope, input);
    }

    runHydrate();

    return {
      update: (newInput: I) => {
        if (attrs) {
          attrs.___mark(scope);
          attrs.___apply(scope, newInput);
          runHydrate();
        }
      },
      destroy: () => {
        // TODO
      },
    };
  }, renderer);
}

export function createRenderer<S extends Scope>(
  template: string,
  walks?: string,
  setup?: SetupFn<S>,
  closureSignals: Signal[] = [],
  hasUserEffects: 0 | 1 = 0,
  dynamicStartNodeOffset?: Accessor,
  dynamicEndNodeOffset?: Accessor
): Renderer<S> {
  return {
    ___template: template,
    ___walks: walks && /* @__PURE__ */ trimWalkString(walks),
    ___setup: setup,
    ___clone: _clone,
    ___closureSignals: closureSignals,
    ___hasUserEffects: hasUserEffects,
    ___sourceNode: undefined,
    ___dynamicStartNodeOffset: dynamicStartNodeOffset,
    ___dynamicEndNodeOffset: dynamicEndNodeOffset,
    ___attrs: undefined,
    ___owner: undefined,
  };
}

function _clone(this: Renderer) {
  let sourceNode: Node | null | undefined = this.___sourceNode;
  if (!sourceNode) {
    if (MARKO_DEBUG && this.___template === undefined) {
      throw new Error(
        "The renderer does not have a template to clone: " +
          JSON.stringify(this)
      );
    }
    const walks = this.___walks;
    // TODO: there's probably a better way to determine if nodes will be inserted before/after the parsed content
    // and therefore we need to put it in a document fragment, even though only a single node results from the parse
    const ensureFragment =
      walks &&
      walks.length < 4 &&
      walks.charCodeAt(walks.length - 1) !== WalkCodes.Get;
    this.___sourceNode = sourceNode = parse(
      this.___template,
      ensureFragment as boolean
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
