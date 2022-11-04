import { Scope, HydrateSymbols, AccessorChars } from "../common/types";
import type { Renderer } from "./renderer";
import {
  bind as bindFunction,
  bindRenderer,
  bindSignal,
  getOwnerScope,
} from "./scope";
import type { Signal } from "./signals";

type HydrateFn<S extends Scope = Scope> = (scope: S) => void;

const registeredObjects = new Map<string, HydrateFn | Signal | Renderer>();
const SCOPE_ID_MULTIPLIER = 2 ** 16;

export function register<T>(id: string, obj: T): T {
  registeredObjects.set(id, obj as any);
  return obj;
}

const doc = document;

export function init(runtimeId = "M" /* [a-zA-Z0-9]+ */) {
  const runtimeLength = runtimeId.length;
  const hydrateVar = runtimeId + HydrateSymbols.VAR_HYDRATE;
  // TODO: check if this is a fakeArray
  // and warn in dev that there are conflicting runtime ids
  const initialHydration = (window as any)[hydrateVar];
  const walker = doc.createTreeWalker(doc, 128 /** NodeFilter.SHOW_COMMENT */);

  let currentScope: Scope;
  let currentNode: Node;
  const scopeLookup: Record<number, Scope> = {};
  const getScope = (id: number) =>
    scopeLookup[id] ??
    (scopeLookup[id] = {
      ___id: id * SCOPE_ID_MULTIPLIER,
    } as Scope);
  const stack: number[] = [];
  const fakeArray = { push: hydrate };
  const bind = (registryId: string, scope: Scope) => {
    const obj = registeredObjects.get(registryId);
    if (!scope) {
      return obj;
    } else if ((obj as Renderer).___template) {
      return bindRenderer(scope, obj as Renderer);
    } else if ((obj as Signal).___mark) {
      return bindSignal(scope, obj as Signal);
    } else {
      return bindFunction(scope, obj as HydrateFn);
    }
  };

  Object.defineProperty(window, hydrateVar, {
    get() {
      return fakeArray;
    },
  });

  if (initialHydration) {
    for (let i = 0; i < initialHydration.length; i += 2) {
      hydrate(initialHydration[i], initialHydration[i + 1]);
    }
  }

  function hydrate(
    scopesFn: (
      b: typeof bind,
      s: typeof scopeLookup,
      ...rest: unknown[]
    ) => Record<string, Scope>,
    calls: Array<string | number>
  ) {
    if (doc.readyState !== "loading") {
      walker.currentNode = doc;
    }

    const scopes = scopesFn?.(bind, scopeLookup);

    /**
     * Loop over all the new hydration scopes and see if a previous walk
     * had to create a dummy scope to store Nodes of interest.
     * If so merge them and set/replace the scope in the scopeLookup.
     */
    for (const scopeIdAsString in scopes) {
      const scopeId = parseInt(scopeIdAsString);
      const scope = scopes[scopeId];
      const storedScope = scopeLookup[scopeId];

      if (storedScope !== scope) {
        if (storedScope) {
          scopeLookup[scopeId] = Object.assign(scope, storedScope);
        } else {
          scope.___id = scopeId * SCOPE_ID_MULTIPLIER;
          scopeLookup[scopeId] = scope;
        }
        if (currentScope === storedScope) {
          currentScope = scope;
        }
      }
    }

    while ((currentNode = walker.nextNode()!)) {
      const nodeValue = currentNode.nodeValue;
      if (nodeValue?.startsWith(`${runtimeId}`)) {
        const token = nodeValue[runtimeLength];
        const data = parseInt(nodeValue.slice(runtimeLength + 1));
        if (token === HydrateSymbols.NODE) {
          const node = currentNode.nextSibling;
          // currentNode.parentNode!.removeChild(currentNode);
          // TODO: only do this for a certain type of HydrateSymbols.NODE marker
          const scopeId = parseInt(
            nodeValue.slice(nodeValue.lastIndexOf(" ") + 1)
          );
          const scope = getScope(scopeId);
          scope[data] = node;
        } else if (token === HydrateSymbols.SECTION_START) {
          if (currentScope) {
            stack.push(currentScope.___id);
          }
          currentScope = getScope(data);
          currentScope.___startNode = currentNode as ChildNode;
        } else if (token === HydrateSymbols.SECTION_END) {
          const scopeId = parseInt(
            nodeValue.slice(nodeValue.lastIndexOf(" ") + 1)
          );
          if (scopeId * SCOPE_ID_MULTIPLIER < currentScope.___id) {
            currentScope.___endNode = (
              currentNode as ChildNode
            ).previousSibling!;
            currentScope = scopeLookup[stack.pop() as number]!;
          }
          const scope = getScope(scopeId);
          scope[data] = currentNode;
        } else if (token === HydrateSymbols.SECTION_SINGLE_NODES_END) {
          const scopeId = parseInt(nodeValue.slice(nodeValue.indexOf(" ") + 1));
          const scope = getScope(scopeId);
          scope[data] = currentNode;
          // https://jsben.ch/dR7uk
          const childScopeIds = JSON.parse(
            "[" + nodeValue.slice(nodeValue.lastIndexOf(" ") + 1) + "]"
          );
          for (let i = childScopeIds.length - 1; i >= 0; i--) {
            const childScope = getScope(childScopeIds[i]);
            while (
              (currentNode = currentNode.previousSibling!).nodeType ===
              8 /* Node.COMMENT_NODE */
            );
            childScope.___startNode = childScope.___endNode =
              currentNode as ChildNode;
          }
        } else if (MARKO_DEBUG) {
          throw new Error("MALFORMED MARKER: " + nodeValue);
        }
      }
    }

    for (let i = 0; i < calls.length; i += 2) {
      (registeredObjects.get(calls[i] as string) as HydrateFn)!(
        scopeLookup[calls[i + 1] as number]!
      );
    }
  }
}

export function hydrateSubscription(
  signal: Signal,
  ownerLevel: number,
  ownerValueAccessor: string | number
) {
  const ownerMarkAccessor = ownerValueAccessor + AccessorChars.MARK;
  const ownerSubscribersAccessor =
    ownerValueAccessor + AccessorChars.SUBSCRIBERS;

  return (subscriberScope: Scope) => {
    const ownerScope = getOwnerScope(subscriberScope, ownerLevel);
    const boundSignal = bindSignal(subscriberScope, signal);
    const ownerMark = ownerScope[ownerMarkAccessor];
    (ownerScope[ownerSubscribersAccessor] ??= new Set()).add(boundSignal);

    // TODO: if the mark is not undefined, it means the value was updated clientside
    // before this subscriber was flushed.
    if (ownerMark === 0) {
      // the value has finished updating
      // we should trigger an update to `signal`
    } else if (ownerMark >= 1) {
      // the value is queued for update
      // we should mark `signal` and let it be updated when the owner is updated
    }
    ``;
  };
}
