import type { Scope } from "../common/types";
import { createScope } from "./scope";
import { WalkCodes, walk, trimWalkString } from "./walker";
import { queue, run } from "./queue";

const enum NodeType {
  Element = 1,
  Text = 3,
  Comment = 8,
  DocumentFragment = 11,
}

export type Renderer<S extends Scope = Scope> = {
  ___template: string;
  ___walks: string | undefined;
  ___render: RenderFn<S> | undefined;
  ___clone: () => Node;
  ___size: number;
  ___hasUserEffects: 0 | 1;
  ___sourceNode: Node | undefined;
  ___dynamicStartNodeOffset: number | undefined;
  ___dynamicEndNodeOffset: number | undefined;
};

type Input = Record<string, unknown>;
type RenderFn<S extends Scope = Scope> = (scope: S) => void;
type DynamicInputFn<S extends Scope, I extends Input> = (
  scope: S,
  input: I
) => void;
type RenderResult<I extends Input> = Node & {
  update: (input: I) => void;
  destroy: () => void;
};

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
  if (renderer.___render) {
    renderer.___render(scope);
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
  render?: RenderFn<S>,
  size?: number,
  dynamicInput?: DynamicInputFn<S, I>,
  hasUserEffects?: 0 | 1,
  dynamicStartNodeOffset?: number,
  dynamicEndNodeOffset?: number
) {
  const renderer = createRenderer<S>(
    template,
    walks,
    render,
    size,
    hasUserEffects,
    dynamicStartNodeOffset,
    dynamicEndNodeOffset
  );
  return (input: I): RenderResult<I> => {
    const scope = createScope(size!) as S;
    const dom = initRenderer(renderer, scope) as RenderResult<I>;

    if (dynamicInput) {
      queue(scope, dynamicInput, -1, input);
    }

    run();

    dom.update = (newInput: I) => {
      if (dynamicInput) {
        queue(scope, dynamicInput, -1, newInput);
        run();
      }
    };

    dom.destroy = () => {
      // TODO
    };

    return dom;
  };
}

export function createRenderer<S extends Scope>(
  template: string,
  walks?: string,
  render?: RenderFn<S>,
  size = 0,
  hasUserEffects: 0 | 1 = 0,
  dynamicStartNodeOffset?: number,
  dynamicEndNodeOffset?: number
): Renderer<S> {
  return {
    ___template: template,
    ___walks: walks && trimWalkString(walks),
    ___render: render,
    ___clone: _clone,
    ___size: size,
    ___hasUserEffects: hasUserEffects,
    ___sourceNode: undefined,
    ___dynamicStartNodeOffset: dynamicStartNodeOffset,
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
