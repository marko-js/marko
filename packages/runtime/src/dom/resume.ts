import { Scope, ResumeSymbols, AccessorChars } from "../common/types";
import type { Renderer } from "./renderer";
import { bindFunction, bindRenderer } from "./scope";
import type { IntersectionSignal, ValueSignal } from "./signals";

type RegisteredFn<S extends Scope = Scope> = (scope: S) => void;

const registeredObjects = new Map<
  string,
  RegisteredFn | ValueSignal | Renderer
>();
const doc = document;

export function register<T>(id: string, obj: T): T {
  registeredObjects.set(id, obj as any);
  return obj;
}

export function init(runtimeId = "M" /* [a-zA-Z0-9]+ */) {
  const runtimeLength = runtimeId.length;
  const resumeVar = runtimeId + ResumeSymbols.VAR_RESUME;
  // TODO: check if this is a fakeArray
  // and warn in dev that there are conflicting runtime ids
  const initialHydration = (window as any)[resumeVar];
  const walker = doc.createTreeWalker(doc, 128 /** NodeFilter.SHOW_COMMENT */);

  let currentScopeId: number;
  let currentNode: Node & ChildNode;
  const scopeLookup: Record<number, Scope> = {};
  const getScope = (id: number) =>
    scopeLookup[id] ?? (scopeLookup[id] = {} as Scope);
  const stack: number[] = [];
  const fakeArray = { push: resume };
  const bind = (registryId: string, scope: Scope) => {
    const obj = registeredObjects.get(registryId);
    if (!scope) {
      return obj;
    } else if ((obj as Renderer).___template) {
      return bindRenderer(scope, obj as Renderer);
    } else {
      return bindFunction(scope, obj as RegisteredFn);
    }
  };

  Object.defineProperty(window, resumeVar, {
    get() {
      return fakeArray;
    },
  });

  if (initialHydration) {
    for (let i = 0; i < initialHydration.length; i += 2) {
      resume(initialHydration[i], initialHydration[i + 1]);
    }
  }

  function resume(
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
        scopeLookup[scopeId] = Object.assign(scope, storedScope);
      }
    }

    while ((currentNode = walker.nextNode() as ChildNode)) {
      const nodeValue = currentNode.nodeValue;
      if (nodeValue?.startsWith(`${runtimeId}`)) {
        const token = nodeValue[runtimeLength];
        const scopeId = parseInt(nodeValue.slice(runtimeLength + 1));
        const scope = getScope(scopeId);
        const data = nodeValue.slice(nodeValue.indexOf(" ") + 1);

        if (token === ResumeSymbols.NODE) {
          scope[data] = currentNode.previousSibling;
        } else if (token === ResumeSymbols.SECTION_START) {
          stack.push(currentScopeId);
          currentScopeId = scopeId;
          scope.___startNode = currentNode;
        } else if (token === ResumeSymbols.SECTION_END) {
          scope[data] = currentNode;
          if (scopeId < currentScopeId) {
            const currScope = scopeLookup[currentScopeId];
            const currParent = currentNode.parentNode!;
            const startNode = currScope.___startNode as Node;
            if (currParent !== startNode.parentNode) {
              currParent.prepend(startNode);
            }
            currScope.___endNode = currentNode.previousSibling!;
            currentScopeId = stack.pop()!;
          }
        } else if (token === ResumeSymbols.SECTION_SINGLE_NODES_END) {
          scope[
            MARKO_DEBUG ? data.slice(0, data.indexOf(" ")) : parseInt(data)
          ] = currentNode;
          // https://jsben.ch/dR7uk
          const childScopeIds = JSON.parse(
            "[" + data.slice(data.indexOf(" ") + 1) + "]"
          );
          for (let i = childScopeIds.length - 1; i >= 0; i--) {
            const childScope = getScope(childScopeIds[i]);
            // TODO: consider whether the single node optimization
            // should only apply to elements which means could
            // use previousElementSibling instead of a while loop
            while (
              (currentNode = currentNode.previousSibling!).nodeType ===
              8 /* Node.COMMENT_NODE */
            );
            // TODO: consider only setting ___startNode?
            childScope.___startNode = childScope.___endNode = currentNode;
          }
        } else if (MARKO_DEBUG) {
          throw new Error("MALFORMED MARKER: " + nodeValue);
        }
      }
    }

    for (let i = 0; i < calls.length; i += 2) {
      (registeredObjects.get(calls[i + 1] as string) as RegisteredFn)(
        scopeLookup[calls[i] as number]!
      );
    }
  }
}

export function resumeSubscription(
  signal: IntersectionSignal,
  ownerValueAccessor: string | number,
  getOwnerScope = (scope: Scope) => scope._!
) {
  const ownerMarkAccessor = ownerValueAccessor + AccessorChars.MARK;
  const ownerSubscribersAccessor =
    ownerValueAccessor + AccessorChars.SUBSCRIBERS;

  return (subscriberScope: Scope) => {
    const ownerScope = getOwnerScope(subscriberScope);
    const boundSignal = bindFunction(subscriberScope, signal);
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
  };
}
