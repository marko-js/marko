import {
  UpstreamSignalOrValue,
  UpstreamRawValue,
  createSource,
  createComputation,
  createPropertyComputation,
  createPropertyEffect,
  createEffect,
  set,
  dynamicKeys,
  beginBatch,
  endBatch
} from "./signals";
import { Fragment, removeFragment } from "./fragments";
import { conditional } from "./control-flow";
import {
  walker,
  walk,
  walkAndGetText,
  detachedWalk,
  WalkCodes
} from "./walker";

const enum NodeType {
  Element = 1,
  Text = 3,
  Comment = 8,
  DocumentFragment = 11
}

type HydrateFunction = (...args: UpstreamSignalOrValue[]) => void;
export interface Renderer<H extends HydrateFunction = HydrateFunction> {
  ___input?: string[];
  ___clone: () => Node;
  ___hydrate?: H;
  ___walks?: string;
  ___template?: string;
  ___sourceNode?: Node;
}

export let currentFragment: Fragment | undefined;
export interface ComponentFragment<Input> extends DocumentFragment {
  rerender: (input: Input) => void;
  destroy: () => void;
}

const doc = document;
const parser = doc.createElement("template");

export function createRenderFn<H extends HydrateFunction>(
  template: Renderer["___template"],
  walks: Renderer["___walks"],
  inputProps?: Renderer["___input"],
  hydrate?: H
) {
  type Input = UpstreamRawValue<Parameters<H>[0]>;
  const renderer = createRenderer(
    template!,
    walks,
    inputProps,
    hydrate,
    (input: Input) => {
      let container: ComponentFragment<Input> | null = null;
      let asyncPlaceholder: Text;

      const init = beginBatch();
      const fragment = beginFragment(renderer);
      const inputSource = dynamicKeys(
        createSource(input) as any,
        renderer.___input!
      );
      createEffect(
        () => {
          if (container) {
            asyncPlaceholder.replaceWith(fragment.___dom!);
          } else {
            container = fragment.___dom as ComponentFragment<Input>;
          }
        },
        0,
        1
      );
      finishFragment(fragment, renderer, inputSource);
      endBatch(init);

      if (!container) {
        container = doc.createDocumentFragment() as ComponentFragment<Input>;
        container.appendChild((asyncPlaceholder = doc.createTextNode("")));
      }

      container.rerender = (newInput: Input) => {
        const update = beginBatch();
        set(inputSource, newInput);
        endBatch(update);
      };

      container.destroy = () => removeFragment(fragment);

      return container;
    }
  );
  return renderer;
}

export function createRenderer<T, H extends HydrateFunction>(
  template: string,
  walks?: Renderer["___walks"],
  input?: Renderer["___input"],
  hydrate?: H,
  target: T = hydrate || walks || ({} as any)
) {
  const renderer = target as T & Renderer<H>;
  renderer.___template = template;
  renderer.___walks = walks;
  renderer.___input = input;
  renderer.___hydrate = hydrate;
  renderer.___clone = _clone;
  return renderer;
}

function _clone(this: Renderer) {
  let sourceNode: Node | null | undefined = this.___sourceNode;
  if (!sourceNode) {
    if (this.___template === undefined) {
      throw new Error("Debug Error");
    }
    const walks = this.___walks;
    // TODO: there's probably a better way to determine if nodes will be inserted before/after the parsed content
    // and therefore we need to put it in a document fragment, even though only a single nodee is parts
    const ensureFragment =
        !!walks &&
        (walks.charCodeAt(0) === WalkCodes.Before ||
          walks.charCodeAt(0) === WalkCodes.Replace ||
          walks.charCodeAt(walks.length - 2) ===
            WalkCodes.After) /* 2nd to last because last will be Over */;
    this.___sourceNode = sourceNode = parse(this.___template, ensureFragment);
  }
  return sourceNode.cloneNode(true);
}

function parse(template: string, ensureFragment?: boolean) {
  let node: Node | null;
  parser.innerHTML = template;
  const content = parser.content;

  if (ensureFragment || (node = content.firstChild) !== content.lastChild) {
    node = doc.createDocumentFragment();
    node.appendChild(content);
  } else if (!node) {
    node = doc.createTextNode("");
  }

  return node as Node & { firstChild: ChildNode; lastChild: ChildNode };
}

export function createFragment(
  renderer: Renderer,
  parentFragment = currentFragment,
  ...input: UpstreamSignalOrValue[]
) {
  const fragment = beginFragment(renderer, parentFragment);
  finishFragment(fragment, renderer, ...input);
  return fragment;
}

function beginFragment(renderer: Renderer, parentFragment = currentFragment) {
  const fragment = new Fragment();
  const clone = renderer.___clone();
  const isFragment = isDocumentFragment(clone);

  fragment.___firstRef = fragment.___lastRef = fragment;
  fragment.___firstChild = isFragment ? clone.firstChild! : clone;
  fragment.___lastChild = isFragment ? clone.lastChild! : clone;
  fragment.___parentFragment = parentFragment;
  fragment.___cachedFragment = currentFragment;
  fragment.___dom = clone;

  return (currentFragment = fragment);
}

function finishFragment(
  fragment: Fragment,
  renderer: Renderer,
  ...input: UpstreamSignalOrValue[]
) {
  detachedWalk(fragment.___firstChild, renderer, ...input);
  currentFragment = fragment.___cachedFragment;
}

export function isDocumentFragment(node: Node): node is DocumentFragment {
  return node.nodeType === NodeType.DocumentFragment;
}

export function render(renderer: Renderer, ...input: UpstreamSignalOrValue[]) {
  const clone = renderer.___clone();
  detachedWalk(clone, renderer, ...input);
  walk(clone);
}

export function attr(name: string, value: UpstreamSignalOrValue) {
  const data = createComputation(normalizeAttrValue, value, 1);
  const el = walker.currentNode as Element;
  if (el.nodeType !== NodeType.Element) {
    throw new Error("Debug Error");
  }
  createEffect(_data => setAttr(el, name, _data), data, 1);
}

export function attrs(
  attributes: UpstreamSignalOrValue<Record<string, unknown> | null | undefined>
) {
  let previousAttrs: UpstreamRawValue<typeof attributes>;
  const el = walker.currentNode as Element;
  if (el.nodeType !== NodeType.Element) {
    throw new Error("Debug Error");
  }
  createEffect(
    nextAttrs => {
      if (previousAttrs) {
        for (const name in previousAttrs) {
          if (!(nextAttrs && name in nextAttrs)) {
            el.removeAttribute(name);
          }
        }
      }
      // https://jsperf.com/object-keys-vs-for-in-with-closure/194
      for (const name in nextAttrs) {
        if (!(previousAttrs && nextAttrs[name] === previousAttrs[name])) {
          if (name !== "renderBody") {
            setAttr(el, name, normalizeAttrValue(nextAttrs[name]));
          }
        }
      }
      previousAttrs = nextAttrs;
    },
    attributes,
    1
  );
}

export function html(value: UpstreamSignalOrValue<string>) {
  conditional(
    createComputation(
      _value => {
        const node = parse(_value);
        return {
          ___clone: () => node
        };
      },
      value,
      1
    )
  );
}

export function prop(name: string, value: UpstreamSignalOrValue, node?: Node) {
  createPropertyEffect(node || walker.currentNode, name, value);
}

export function props(properties) {
  let previousProps: UpstreamRawValue<typeof properties>;
  const node = walker.currentNode;
  createEffect(
    nextProps => {
      if (nextProps) {
        for (const name in previousProps) {
          if (!(name in nextProps)) {
            node[name] = undefined;
          }
        }
      }
      // https://jsperf.com/object-keys-vs-for-in-with-closure/194
      for (const name in nextProps) {
        node[name] = nextProps[name];
      }
      previousProps = nextProps;
    },
    properties,
    1
  );
}

export function text(value: UpstreamSignalOrValue) {
  prop(
    "data",
    createComputation(normalizeTextData, value, 1),
    walkAndGetText()
  );
}

export function textContent(value: UpstreamSignalOrValue) {
  prop("textContent", createComputation(normalizeTextData, value, 1));
}

export function innerHTML(value: UpstreamSignalOrValue) {
  prop("innerHTML", value);
}

export function dynamicTag(
  tag: UpstreamSignalOrValue<string | Renderer>,
  input: UpstreamSignalOrValue<Record<string, unknown>>,
  renderBody?: Renderer
) {
  const renderFns = new Map();

  return conditional(
    createComputation(
      _tag => {
        let nextRenderer = renderFns.get(_tag);
        if (!nextRenderer) {
          if (typeof _tag === "string") {
            nextRenderer = {
              ___clone: () => doc.createElement(_tag),
              ___walks: dynamicElWalks,
              ___hydrate: dynamicElHydrate
            };
          } else if (_tag) {
            nextRenderer = _tag;
          } else {
            nextRenderer = renderBody;
          }
          renderFns.set(_tag, nextRenderer);
        }
        return nextRenderer;
      },
      tag,
      1
    ),
    input
  );
}

// TODO: we don't want String.fromCharCode in the actual code.
// Need to determine best way to keep this readable, but becomes a string literal on build
const dynamicElWalks =
  String.fromCharCode(WalkCodes.Get) +
  String.fromCharCode(WalkCodes.Inside) +
  String.fromCharCode(WalkCodes.Over);
function dynamicElHydrate(
  input: UpstreamSignalOrValue<Record<string, unknown>>
) {
  walk();
  attrs(input);
  dynamicTag(
    createPropertyComputation("renderBody", input) as UpstreamSignalOrValue<
      Renderer
    >,
    {}
  );
}

function setAttr(element: Element, name: string, value: string | undefined) {
  if (value) {
    element.setAttribute(name, value);
  } else {
    element.removeAttribute(name);
  }
}

function normalizeAttrValue(value: unknown) {
  return value == null || value === false ? undefined : value + "";
}

function normalizeTextData(value: unknown) {
  return value == null ? "" : value + "";
}
