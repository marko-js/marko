import { ResumeSymbol, type Scope } from "../common/types";
import type { Renderer } from "./renderer";
import { bindRenderer } from "./scope";
import type { IntersectionSignal, SignalOp, ValueSignal } from "./signals";

interface Renders {
  (renderId: string): Render | RenderData;
  [renderId: string]: Render | RenderData;
}
interface RenderData {
  // RuntimeID + ResumeID
  i: string;
  // Marked nodes to visit
  v: Comment[];
  // Effect calls.
  e?: (string | number)[];
  // Scopes
  s?: ((ctx: object) => Record<number | string, Scope>)[];
  // Indicates that the render is done.
  d?: 1;
  w(): void;
}
type RegisteredFn<S extends Scope = Scope> = (scope: S) => void;

const registeredValues: Record<string, unknown> = {};

class Render implements RenderData {
  declare i: string;
  declare v: Comment[];
  declare e?: (string | number)[];
  declare s?: ((ctx: object) => Record<number | string, Scope>)[];
  private declare ___currentScopeId: number;
  private declare ___data: RenderData;
  private declare ___renders: Renders;
  private declare ___runtimeId: string;
  private declare ___renderId: string;
  private ___scopeStack: number[] = [];
  private ___scopeLookup: Record<number | string, Scope> = {};
  private ___serializeContext: Record<string, unknown> = {
    _: registeredValues,
  };
  constructor(renders: Renders, runtimeId: string, renderId: string) {
    this.___renders = renders;
    this.___runtimeId = runtimeId;
    this.___renderId = renderId;
    this.___data = renders[renderId] as RenderData;
    this.___resume();
  }
  w() {
    this.___data.w();
    this.___resume();
  }
  ___resume() {
    const data = this.___data;
    const serializeContext = this.___serializeContext;
    const scopeLookup = this.___scopeLookup;
    const visits = data.v;

    if (visits.length) {
      const commentPrefix = data.i;
      const commentPrefixLen = commentPrefix.length;
      data.v = [];

      for (const visit of visits) {
        const commentText = visit.data!;
        const token = commentText[commentPrefixLen];
        const scopeId = parseInt(commentText.slice(commentPrefixLen + 1));
        const scope = (scopeLookup[scopeId] ??= {} as Scope);
        const data = commentText.slice(commentText.indexOf(" ") + 1);

        if (token === ResumeSymbol.Node) {
          scope[data] = visit.previousSibling;
        } else if (token === ResumeSymbol.SectionStart) {
          this.___scopeStack.push(this.___currentScopeId);
          this.___currentScopeId = scopeId;
          scope.___startNode = visit;
        } else if (token === ResumeSymbol.SectionEnd) {
          scope[data] = visit;
          if (scopeId < this.___currentScopeId) {
            const currScope = scopeLookup[this.___currentScopeId];
            const currParent = visit.parentNode!;
            const startNode = currScope.___startNode as Node;
            if (currParent !== startNode.parentNode) {
              currParent.prepend(startNode);
            }
            currScope.___endNode = visit.previousSibling!;
            this.___currentScopeId = this.___scopeStack.pop()!;
          }
        } else if (token === ResumeSymbol.SectionSingleNodesEnd) {
          scope[
            MARKO_DEBUG ? data.slice(0, data.indexOf(" ")) : parseInt(data)
          ] = visit;
          // https://jsben.ch/dR7uk
          const childScopeIds = JSON.parse(
            "[" + data.slice(data.indexOf(" ") + 1) + "]",
          );
          let curNode: ChildNode = visit;
          for (let i = childScopeIds.length - 1; i >= 0; i--) {
            const childScope = (scopeLookup[childScopeIds[i]] ??= {} as Scope);
            // TODO: consider whether the single node optimization
            // should only apply to elements which means could
            // use previousElementSibling instead of a while loop
            while (
              (curNode = curNode.previousSibling!).nodeType ===
              8 /* Node.COMMENT_NODE */
            );
            // TODO: consider only setting ___startNode?
            childScope.___startNode = childScope.___endNode = curNode;
          }
        }
      }
    }

    const serializedScopes = data.s;
    if (serializedScopes) {
      data.s = [];

      for (const deserializeScopes of serializedScopes) {
        const scopes = deserializeScopes(serializeContext);
        let { $global } = scopeLookup;

        if (!$global) {
          scopeLookup.$global = $global = scopes.$ || {};
          $global.runtimeId = this.___runtimeId;
          $global.renderId = this.___renderId;
        }

        for (const scopeId in scopes) {
          if (scopeId !== "$") {
            const scope = scopes[scopeId];
            const prevScope = scopeLookup[scopeId];
            scope.$global = $global;
            if (prevScope !== scope) {
              scopeLookup[scopeId] = Object.assign(scope, prevScope) as Scope;
            }
          }
        }
      }
    }

    const effects = data.e;
    if (effects) {
      data.e = [];
      for (let i = 0; i < effects.length; i += 2) {
        (registeredValues[effects[i + 1] as string] as RegisteredFn)(
          scopeLookup[effects[i] as number],
        );
      }
    }

    if (data.d) {
      delete this.___renders[this.___renderId];
    }
  }
}

export function register<T>(id: string, obj: T): T {
  registeredValues[id] = obj;
  return obj;
}

export function registerBoundSignal<T extends ValueSignal>(
  id: string,
  signal: T,
): T {
  registeredValues[id] = (scope: Scope) => (valueOrOp: unknown | SignalOp) =>
    signal(scope, valueOrOp);
  return signal;
}

export function registerRenderer(id: string, renderer: Renderer) {
  registeredValues[id] = (scope: Scope) => bindRenderer(scope, renderer);
  return renderer;
}

export function getRegisteredWithScope(id: string, scope?: Scope) {
  const val = registeredValues[id];
  if (scope) {
    if (val) {
      if ((val as Renderer).___template) {
        return bindRenderer(scope, val as Renderer);
      }

      return (val as RegisteredFn)(scope);
    }
  }

  return val;
}

export function init(runtimeId = ResumeSymbol.DefaultRuntimeId) {
  if (MARKO_DEBUG) {
    if (!runtimeId.match(/^[_$a-z][_$a-z0-9]*$/i)) {
      throw new Error(
        `Invalid runtimeId: "${runtimeId}". The runtimeId must be a valid JavaScript identifier.`,
      );
    }
  }

  const resumeRender = ((renderId: string) =>
    (resumeRender[renderId] = renders![renderId] =
      new Render(renders!, runtimeId, renderId))) as Renders;
  let renders: Renders | undefined;

  if ((window as any)[runtimeId] as Renders | undefined) {
    setRenders((window as any)[runtimeId] as Renders);
  } else {
    Object.defineProperty(window, runtimeId, {
      configurable: true,
      set: setRenders,
    });
  }

  function setRenders(v: Renders) {
    if (MARKO_DEBUG) {
      if (renders) {
        throw new Error(
          "Marko tried to initialize multiple times. It could be that there are multiple instances of Marko running on the page.",
        );
      }
    }

    renders = v;
    for (const renderId in v) {
      resumeRender(renderId);
    }

    Object.defineProperty(window, runtimeId, {
      configurable: true,
      value: resumeRender,
    });
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
