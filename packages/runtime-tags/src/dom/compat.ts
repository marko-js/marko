import { patchConditionals } from "./control-flow";
import { prepare, queueEffect, runEffects } from "./queue";
import {
  createRenderer,
  createScopeWithRenderer,
  type Renderer,
} from "./renderer";
import { getRegisteredWithScope, register, scopeLookup } from "./resume";
import { CLEAN, DIRTY, MARK } from "./signals";

export const compat = {
  register,
  patchConditionals,
  queueEffect,
  isOp(value: any) {
    return value === MARK || value === CLEAN || value === DIRTY;
  },
  isRenderer(renderer: any) {
    return renderer.___clone !== undefined;
  },
  getStartNode(scope: any) {
    return scope.___startNode;
  },
  setScopeNodes(scope: any, startNode: Node, endNode: Node) {
    scope.___startNode = startNode;
    scope.___endNode = endNode;
  },
  runComponentEffects(this: any) {
    runEffects(this.effects);
  },
  resolveRenderer(renderer: any) {
    if (renderer && typeof renderer === "object") {
      if (Array.isArray(renderer)) {
        const [registerId, scopeId] = renderer;
        const scope = scopeLookup[scopeId];
        return getRegisteredWithScope(registerId, scope);
      }

      if (renderer.___clone) {
        return renderer;
      }
    }
  },
  createRenderer(
    setup: Renderer["___setup"],
    clone: Renderer["___clone"],
    args: Renderer["___args"],
  ) {
    const renderer = createRenderer("", undefined, setup, undefined, 1, args);
    renderer.___clone = clone;
    return renderer;
  },
  render(
    isHydrate: boolean,
    out: any,
    component: any,
    renderer: Renderer,
    input: any,
  ) {
    const args = renderer.___args || noop;
    let existing = false;
    let scope: any = isHydrate
      ? (component.scope =
          scopeLookup[(out.global.componentIdToScopeId as any)[component.id]])
      : component.scope;

    component.effects = prepare(() => {
      if (!scope) {
        scope = component.scope = createScopeWithRenderer(renderer, out.global);
        const closures = renderer.___closureSignals;
        if (closures) {
          for (const signal of closures) {
            signal(component.scope, CLEAN);
          }
        }
      } else {
        args(scope, MARK);
        existing = true;
      }
      args(scope, input);
    });

    if (!existing) {
      return scope.___startNode === scope.___endNode
        ? scope.___startNode
        : scope.___startNode.parentNode;
    }
  },
};

function noop() {}
