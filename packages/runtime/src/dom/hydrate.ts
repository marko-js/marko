import { Scope, ScopeOffsets, HydrateSymbols } from "../common/types";
import { runWithScope } from "./scope";

type HydrateFn = () => void;

const fnsById: Record<string, HydrateFn> = {};

export function register<F extends HydrateFn>(id: string, fn: F) {
  fnsById[id] = fn;
  return fn;
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
  let currentOffset: number;
  let currentNode: Node;
  const scopeLookup: Map<string, Scope> = new Map();
  const stack: Array<string | number> = [];
  const fakeArray = { push: hydrate };

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
    scopes: Record<string, Scope>,
    calls: Array<string | number>
  ) {
    if (doc.readyState !== "loading") {
      walker.currentNode = doc;
    }

    /**
     * Loop over all the new hydration scopes and see if a previous walk
     * had to create a dummy scope to store Nodes of interest.
     * If so merge them and set/replace the scope in the scopeLookup.
     */
    for (const scopeId in scopes) {
      const scope = scopes[scopeId];
      const storedScope = scopeLookup.get(scope[ScopeOffsets.ID]);

      if (storedScope !== scope) {
        if (storedScope) {
          Object.assign(scope, storedScope);
        }
        scopeLookup.set(scope[ScopeOffsets.ID], scope);
        if (currentScope === storedScope) {
          currentScope = scope;
        }
      }
    }

    while ((currentNode = walker.nextNode()!)) {
      const nodeValue = currentNode.nodeValue;
      if (nodeValue?.startsWith(`${runtimeId}`)) {
        const token = nodeValue[runtimeLength];
        const data = nodeValue.slice(runtimeLength + 1);
        if (token === HydrateSymbols.SCOPE_OFFSET) {
          // eslint-disable-next-line no-constant-condition
          if ("MARKO_DEBUG") {
            const [offset, scopeId, index] = data.split(" ");
            if (scopeId !== currentScope[ScopeOffsets.ID]) {
              throw new Error("INVALID_MARKER_NESTING: " + nodeValue);
            }
            if (parseInt(offset) + currentOffset !== parseInt(index)) {
              throw new Error("SCOPE_OFFSET_MISMATCH: " + nodeValue);
            }
          }
          const offset = parseInt(data);
          const node = currentNode.nextSibling;
          // currentNode.parentNode!.removeChild(currentNode);
          currentScope[(currentOffset += offset)] = node;
        } else if (token === HydrateSymbols.SCOPE_START) {
          if (currentScope) {
            stack.push(currentScope[ScopeOffsets.ID] as string, currentOffset);
          }
          currentScope = scopeLookup.get(data)!;
          currentOffset = 0;
          if (!currentScope) {
            scopeLookup.set(data, (currentScope = [data] as unknown as Scope));
          }
          currentScope[ScopeOffsets.START_NODE] = currentNode;
        } else if (token === HydrateSymbols.SCOPE_END) {
          // eslint-disable-next-line no-constant-condition
          if ("MARKO_DEBUG") {
            if (data !== currentScope[ScopeOffsets.ID]) {
              throw new Error("SCOPE_END_MISMATCH: " + nodeValue);
            }
          }
          currentScope[ScopeOffsets.END_NODE] = currentNode;
          currentOffset = stack.pop() as number;
          currentScope = scopeLookup.get(stack.pop() as string)!;
          // eslint-disable-next-line no-constant-condition
        } else if ("MARKO_DEBUG") {
          throw new Error("MALFORMED MARKER: " + nodeValue);
        }
      }
    }

    for (let i = 0; i < calls.length; i += 3) {
      runWithScope(
        fnsById[calls[i]]!,
        calls[i + 1] as number,
        scopeLookup.get(calls[i + 2] as string)
      );
    }
  }
}
