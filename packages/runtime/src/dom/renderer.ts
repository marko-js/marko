import { Conditional, Loop } from "./control-flow";
import { DOMMethods } from "./dom";
import { createScope, Scope, cleanScopes } from "./scope";
import { WalkCodes, detachedWalk } from "./walker";

const enum NodeType {
  Element = 1,
  Text = 3,
  Comment = 8,
  DocumentFragment = 11
}

export type Renderer = {
  ___template: string;
  ___walks: string | undefined;
  ___hydrate: HydrateFn | undefined;
  ___clone: () => Node;
  ___size: number;
  ___hasUserEffects: 0 | 1;
  ___sourceNode: Node | undefined;
  ___domMethods: DOMMethods | undefined;
  ___dynamicStartNodeOffset: number | undefined;
  ___dynamicEndNodeOffset: number | undefined;
};

type Input = Record<string, unknown>;
type HydrateFn =
  | ((scope: Scope) => void)
  | ((scope: Scope, offset: number) => void)
  | ((scope: Scope, parentScope: Scope, parentOffset: number) => void)
  | ((scope: Scope, parentScopesAndOffsets: Array<Scope | number>) => void);
type DynamicInputFn<I extends Input> = (
  input: I,
  scope: Scope,
  offset: number
) => void;
type RenderResult = Node & {
  update: (input: Input) => void;
  destroy: () => void;
};

export function initRenderer(
  renderer: Renderer,
  scope: Scope,
  parentScopeOrScopes?: number | Scope | Array<Scope | number>,
  parentOffset?: number
) {
  const dom = renderer.___clone();
  // TODO: handle dynamic start/end nodes
  scope.___startNode =
    dom.nodeType === NodeType.DocumentFragment ? dom.firstChild! : dom;
  scope.___endNode =
    dom.nodeType === NodeType.DocumentFragment ? dom.lastChild! : dom;
  detachedWalk(
    scope.___startNode,
    renderer,
    scope,
    parentScopeOrScopes,
    parentOffset
  );
  if (renderer.___dynamicStartNodeOffset !== undefined) {
    scope.___startNode = scope[renderer.___dynamicStartNodeOffset] as
      | Conditional
      | Loop;
  }
  if (renderer.___dynamicEndNodeOffset !== undefined) {
    scope.___endNode = scope[renderer.___dynamicEndNodeOffset] as
      | Conditional
      | Loop;
  }
  return dom;
}

export function createRenderFn<I extends Input>(
  template: string,
  walks: string,
  hydrate?: HydrateFn,
  size?: number,
  dynamicInput?: DynamicInputFn<I>,
  domMethods?: DOMMethods,
  hasUserEffects?: 0 | 1,
  dynamicStartNodeOffset?: number,
  dynamicEndNodeOffset?: number
) {
  const renderer = createRenderer(
    template,
    walks,
    hydrate,
    size,
    domMethods,
    hasUserEffects,
    dynamicStartNodeOffset,
    dynamicEndNodeOffset
  );
  return (input: I): RenderResult => {
    const scope = createScope(size!, domMethods!);
    const dom = initRenderer(renderer, scope, 0) as RenderResult;
    dynamicInput && dynamicInput(input, scope, 0);
    cleanScopes();

    dom.update = (newInput: I) => {
      dynamicInput && dynamicInput(newInput, scope, 0);
      cleanScopes();
    };

    dom.destroy = () => {
      // TODO
    };

    return dom;
  };
}

export function createRenderer<H extends HydrateFn>(
  template: string,
  walks?: string,
  hydrate?: H,
  size?: number,
  domMethods?: DOMMethods,
  hasUserEffects?: 0 | 1,
  dynamicStartNodeOffset?: number,
  dynamicEndNodeOffset?: number
): Renderer {
  return {
    ___template: template,
    ___walks: walks,
    ___hydrate: hydrate,
    ___clone: _clone,
    ___size: size || 0,
    ___hasUserEffects: hasUserEffects || 0,
    ___sourceNode: undefined,
    ___domMethods: domMethods,
    ___dynamicStartNodeOffset: dynamicStartNodeOffset,
    ___dynamicEndNodeOffset: dynamicEndNodeOffset
  };
}

function _clone(this: Renderer) {
  let sourceNode: Node | null | undefined = this.___sourceNode;
  if (!sourceNode) {
    if ("MARKO_DEBUG" && this.___template === undefined) {
      throw new Error(
        "The renderer does not have a template to clone: " +
          JSON.stringify(this)
      );
    } else {
      // TODO: remove branch if https://github.com/microsoft/TypeScript/issues/41503
      this.___template = this.___template!;
    }
    const walks = this.___walks;
    // TODO: there's probably a better way to determine if nodes will be inserted before/after the parsed content
    // and therefore we need to put it in a document fragment, even though only a single nodee is parts
    const ensureFragment =
      !!walks &&
      (walks.charCodeAt(0) === WalkCodes.Before ||
        walks.charCodeAt(0) === WalkCodes.Replace ||
        walks.charCodeAt(walks.length - 2) ===
          WalkCodes.After); /* 2nd to last because last will be Over */
    this.___sourceNode = sourceNode = parse(this.___template, ensureFragment);
  }
  return sourceNode.cloneNode(true);
}

const doc = document;
const parser = doc.createElement("template");

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
