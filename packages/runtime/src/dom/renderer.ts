import { Scope, ScopeOffsets } from "../common/types";
import { DOMMethods, staticNodeMethods } from "./dom";
import { createScope, runWithScope } from "./scope";
import { WalkCodes, walk, trimWalkString } from "./walker";
import { queue, run } from "./queue";

const enum NodeType {
  Element = 1,
  Text = 3,
  Comment = 8,
  DocumentFragment = 11,
}

export type Renderer = {
  ___template: string;
  ___walks: string | undefined;
  ___render: RenderFn | undefined;
  ___clone: () => Node;
  ___size: number;
  ___hasUserEffects: 0 | 1;
  ___sourceNode: Node | undefined;
  ___domMethods: DOMMethods | undefined;
  ___dynamicStartNodeMethod: ((this: Scope) => Node & ChildNode) | undefined;
  ___dynamicStartNodeOffset: number | undefined;
  ___dynamicEndNodeMethod: ((this: Scope) => Node & ChildNode) | undefined;
  ___dynamicEndNodeOffset: number | undefined;
};

type Input = Record<string, unknown>;
type RenderFn = () => void;
type DynamicInputFn<I extends Input> = (input: I) => void;
type RenderResult<I extends Input> = Node & {
  update: (input: I) => void;
  destroy: () => void;
};

export function initRenderer(renderer: Renderer, scope: Scope) {
  const dom = renderer.___clone();
  scope[ScopeOffsets.START_NODE] =
    dom.nodeType === NodeType.DocumentFragment ? dom.firstChild! : dom;
  scope[ScopeOffsets.END_NODE] =
    dom.nodeType === NodeType.DocumentFragment ? dom.lastChild! : dom;
  walk(scope[ScopeOffsets.START_NODE] as Node, renderer.___walks!, scope);
  if (renderer.___render) {
    runWithScope(renderer.___render, ScopeOffsets.BEGIN_DATA, scope);
  }
  if (renderer.___dynamicStartNodeMethod) {
    scope.___getFirstNode = renderer.___dynamicStartNodeMethod;
    scope[ScopeOffsets.START_NODE] = renderer.___dynamicStartNodeOffset!;
  }
  if (renderer.___dynamicEndNodeMethod) {
    scope.___getLastNode = renderer.___dynamicEndNodeMethod;
    scope[ScopeOffsets.END_NODE] = renderer.___dynamicEndNodeOffset!;
  }
  return dom;
}

export function createRenderFn<I extends Input>(
  template: string,
  walks: string,
  render?: RenderFn,
  size?: number,
  dynamicInput?: DynamicInputFn<I>,
  hasUserEffects?: 0 | 1,
  domMethods?: DOMMethods,
  dynamicStartNodeMethod?: (this: Scope) => Node & ChildNode,
  dynamicStartNodeOffset?: number,
  dynamicEndNodeMethod?: (this: Scope) => Node & ChildNode,
  dynamicEndNodeOffset?: number
) {
  const renderer = createRenderer(
    template,
    walks,
    render,
    size,
    hasUserEffects,
    domMethods,
    dynamicStartNodeMethod,
    dynamicStartNodeOffset,
    dynamicEndNodeMethod,
    dynamicEndNodeOffset
  );
  return (input: I): RenderResult<I> => {
    const scope = createScope(size!, domMethods!);
    const dom = initRenderer(renderer, scope) as RenderResult<I>;

    if (dynamicInput) {
      queue(dynamicInput, -1, input, scope, ScopeOffsets.BEGIN_DATA);
    }

    run();

    dom.update = (newInput: I) => {
      if (dynamicInput) {
        queue(dynamicInput, -1, newInput, scope, ScopeOffsets.BEGIN_DATA);
        run();
      }
    };

    dom.destroy = () => {
      // TODO
    };

    return dom;
  };
}

export function createRenderer<R extends RenderFn>(
  template: string,
  walks?: string,
  render?: R,
  size = 0,
  hasUserEffects: 0 | 1 = 0,
  domMethods: DOMMethods = staticNodeMethods,
  dynamicStartNodeMethod?: (this: Scope) => Node & ChildNode,
  dynamicStartNodeOffset?: number,
  dynamicEndNodeMethod?: (this: Scope) => Node & ChildNode,
  dynamicEndNodeOffset?: number
): Renderer {
  return {
    ___template: template,
    ___walks: walks && trimWalkString(walks),
    ___render: render,
    ___clone: _clone,
    ___size: size,
    ___hasUserEffects: hasUserEffects,
    ___sourceNode: undefined,
    ___domMethods: domMethods,
    ___dynamicStartNodeMethod: dynamicStartNodeMethod,
    ___dynamicStartNodeOffset: dynamicStartNodeOffset,
    ___dynamicEndNodeMethod: dynamicEndNodeMethod,
    ___dynamicEndNodeOffset: dynamicEndNodeOffset,
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
