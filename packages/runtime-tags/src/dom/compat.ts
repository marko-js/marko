import {
  RENDERER_REGISTER_ID,
  SET_SCOPE_REGISTER_ID,
} from "../common/compat-meta";
import type { Scope } from "../dom";
import { patchConditionals } from "./control-flow";
import { prepareEffects, queueEffect, runEffects } from "./queue";
import {
  createRenderer,
  createScopeWithRenderer,
  type Renderer,
} from "./renderer";
import { getRegisteredWithScope, register } from "./resume";
import { withScope } from "./scope";
import { CLEAN, DIRTY, MARK } from "./signals";
const classIdToScope = new Map<string, Scope>();

export const compat = {
  patchConditionals,
  queueEffect,
  init() {
    register(SET_SCOPE_REGISTER_ID, (scope: Scope & { m5c: string }) => {
      classIdToScope.set(scope.m5c, scope);
    });
  },
  registerRenderer(fn: any) {
    register(RENDERER_REGISTER_ID, fn);
  },
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
  resolveRegistered(
    value: any,
    {
      runtimeId,
      componentIdPrefix,
    }: { runtimeId: string; componentIdPrefix: string },
  ) {
    if (Array.isArray(value) && typeof value[0] === "string") {
      return getRegisteredWithScope(
        value[0],
        value.length === 2 &&
          (window as any)[runtimeId]?.[
            componentIdPrefix === "s" ? "_" : componentIdPrefix
          ]?.___scopeLookup[value[1]],
      );
    }

    return value;
  },
  createRenderer(
    setup: Renderer["___setup"],
    clone: Renderer["___clone"],
    args: Renderer["___args"],
  ) {
    const renderer = createRenderer(
      "",
      undefined,
      setup,
      undefined,
      args && (() => args),
    );
    renderer.___clone = clone;
    return renderer;
  },
  render(out: any, component: any, renderer: Renderer, input: any) {
    let scope: Scope = component.scope;

    if (!scope) {
      scope = classIdToScope.get(component.id)!;
      if (scope) {
        component.scope = scope;
        classIdToScope.delete(component.id);
      }
    }

    const args = renderer.___args || noop;
    let existing = false;

    component.effects = prepareEffects(() => {
      const missingScope = !scope;
      scope ||= component.scope ||= createScopeWithRenderer(
        renderer,
        out.global,
      );
      withScope(scope, () => {
        if (missingScope) {
          const closures = renderer.___closureSignals;
          if (closures) {
            for (const signal of closures) {
              signal(CLEAN);
            }
          }
        } else {
          args(MARK);
          existing = true;
        }
        args(input);
      });
    });

    if (!existing) {
      return scope.___startNode === scope.___endNode
        ? scope.___startNode
        : scope.___startNode.parentNode;
    }
  },
};

function noop() {}
