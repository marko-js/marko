import { ResumeSymbol, type Scope } from "../common/types";
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

export function getRegisteredWithScope(registryId: string, scope: Scope) {
  const obj = registeredObjects.get(registryId);
  if (!scope) {
    return obj;
  } else if ((obj as Renderer).___template) {
    return bindRenderer(scope, obj as Renderer);
  } else {
    return bindFunction(scope, obj as RegisteredFn);
  }
}

export const scopeLookup = {} as Record<number | string, Scope>;

export function init(runtimeId = ResumeSymbol.DefaultRuntimeId) {
  const runtimeLength = runtimeId.length;
  const resumeVar = runtimeId + ResumeSymbol.VarResume;
  const initialHydration = (window as any)[resumeVar];

  if (MARKO_DEBUG) {
    if (!runtimeId.match(/^[_$a-z][_$a-z0-9]*$/i)) {
      throw new Error(
        `Invalid runtimeId: "${runtimeId}". The runtimeId must be a valid JavaScript identifier.`,
      );
    }

    if (initialHydration && !Array.isArray(initialHydration)) {
      throw new Error(
        "Marko tried to initialize multiple times. It could be that there are multiple instances of Marko running on the page.",
      );
    }
  }

  const walker = doc.createTreeWalker(doc, 128 /** NodeFilter.SHOW_COMMENT */);
  let currentScopeId: number;
  let currentNode: Node & ChildNode;
  // const scopeLookup: Record<number, Scope> = {};
  const getScope = (id: number) =>
    scopeLookup[id] ?? (scopeLookup[id] = {} as Scope);
  const stack: number[] = [];
  const fakeArray = { push: resume };

  if (initialHydration) {
    for (let i = 0; i < initialHydration.length; i += 2) {
      resume(initialHydration[i], initialHydration[i + 1]);
    }
  } else {
    (window as any)[resumeVar] = fakeArray;
  }

  function resume(
    scopesFn:
      | null
      | ((
          b: typeof getRegisteredWithScope,
          s: typeof scopeLookup,
          ...rest: unknown[]
        ) => Record<string, Scope>),
    calls: Array<string | number>,
  ) {
    // TODO: Can be refactored/removed when adding runtimeId and componentIdPrefix
    /**
     * Necessary for injecting content into an existing document (e.g. microframe)
     */
    if (doc.readyState !== "loading") {
      walker.currentNode = doc;
    }

    if (scopesFn) {
      const scopes = scopesFn(getRegisteredWithScope, scopeLookup);
      scopeLookup.$global ||= scopes.$global || {};

      /**
       * Loop over all the new hydration scopes and see if a previous walk
       * had to create a dummy scope to store Nodes of interest.
       * If so merge them and set/replace the scope in the scopeLookup.
       */
      for (const scopeIdAsString in scopes) {
        if (scopeIdAsString === "$global") continue;
        const scopeId = parseInt(scopeIdAsString);
        const scope = scopes[scopeId];
        const storedScope = scopeLookup[scopeId];
        scope.$global = scopes.$global;
        if (storedScope !== scope) {
          scopeLookup[scopeId] = Object.assign(scope, storedScope) as Scope;
        }
      }
    }

    while ((currentNode = walker.nextNode() as ChildNode)) {
      const nodeValue = currentNode.nodeValue!;
      if (nodeValue.startsWith(runtimeId)) {
        const token = nodeValue[runtimeLength];
        const scopeId = parseInt(nodeValue.slice(runtimeLength + 1));
        const scope = getScope(scopeId);
        const data = nodeValue.slice(nodeValue.indexOf(" ") + 1);

        if (token === ResumeSymbol.Node) {
          scope[data] = currentNode.previousSibling;
        } else if (token === ResumeSymbol.SectionStart) {
          stack.push(currentScopeId);
          currentScopeId = scopeId;
          scope.___startNode = currentNode;
        } else if (token === ResumeSymbol.SectionEnd) {
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
        } else if (token === ResumeSymbol.SectionSingleNodesEnd) {
          scope[
            MARKO_DEBUG ? data.slice(0, data.indexOf(" ")) : parseInt(data)
          ] = currentNode;
          // https://jsben.ch/dR7uk
          const childScopeIds = JSON.parse(
            "[" + data.slice(data.indexOf(" ") + 1) + "]",
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
        }
      }
    }

    for (let i = 0; i < calls.length; i += 2) {
      (registeredObjects.get(calls[i + 1] as string) as RegisteredFn)(
        scopeLookup[calls[i] as number]!,
      );
    }
  }
}

export function registerSubscriber(
  id: string,
  signal: IntersectionSignal,
  // ownerValueAccessor: string | number,
  // getOwnerScope = (scope: Scope) => scope._!
) {
  register(id, signal.___subscribe!);
  return signal;

  // TODO: we need to handle the async case - DO NOT REMOVE UNTIL WE DO
  // const ownerMarkAccessor = ownerValueAccessor + AccessorChars.MARK;
  // const ownerSubscribersAccessor =
  //   ownerValueAccessor + AccessorChars.SUBSCRIBERS;

  // register(id, (subscriberScope: Scope) => {
  //   const ownerScope = getOwnerScope(subscriberScope);
  //   const boundSignal = bindFunction(subscriberScope, signal);
  //   const ownerMark = ownerScope[ownerMarkAccessor];
  //   (ownerScope[ownerSubscribersAccessor] ??= new Set()).add(boundSignal);

  //   // TODO: if the mark is not undefined, it means the value was updated clientside
  //   // before this subscriber was flushed.
  //   if (ownerMark === 0) {
  //     // the value has finished updating
  //     // we should trigger an update to `signal`
  //   } else if (ownerMark >= 1) {
  //     // the value is queued for update
  //     // we should mark `signal` and let it be updated when the owner is updated
  //   }
  // });
}
