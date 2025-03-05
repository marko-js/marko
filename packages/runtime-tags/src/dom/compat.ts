import {
  RENDER_BODY_ID,
  RENDERER_REGISTER_ID,
  SET_SCOPE_REGISTER_ID,
} from "../common/compat-meta";
import type { BranchScope } from "../common/types";
import { patchDynamicTag } from "./control-flow";
import { toInsertNode } from "./dom";
import { prepareEffects, queueEffect, runEffects } from "./queue";
import { createBranch, createRenderer, type Renderer } from "./renderer";
import { getRegisteredWithScope, register } from "./resume";
import { destroyBranch } from "./scope";
const classIdToBranch = new Map<string, BranchScope>();

export const compat = {
  patchDynamicTag,
  queueEffect,
  init(warp10Noop: any) {
    register(SET_SCOPE_REGISTER_ID, (branch: BranchScope & { m5c: string }) => {
      classIdToBranch.set(branch.m5c, branch);
    });

    register(RENDER_BODY_ID, warp10Noop);
  },
  registerRenderer(fn: any) {
    register(RENDERER_REGISTER_ID, fn);
  },
  isRenderer(renderer: any) {
    return renderer.___clone;
  },
  getStartNode(branch: any) {
    return branch.___startNode;
  },
  setScopeNodes(branch: any, startNode: Node, endNode: Node) {
    branch.___startNode = startNode;
    branch.___endNode = endNode;
  },
  runComponentEffects(this: any) {
    runEffects(this.effects);
  },
  runComponentDestroy(this: any) {
    if (this.scope) {
      destroyBranch(this.scope);
    }
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
    args: NonNullable<Renderer["___args"]>,
    clone: () => { startNode: ChildNode; endNode: ChildNode },
  ) {
    const renderer = createRenderer(0, 0, 0, () => args);
    renderer.___clone = (branch) => {
      const cloned = clone();
      branch.___startNode = cloned.startNode;
      branch.___endNode = cloned.endNode;
    };
    return renderer;
  },
  render(out: any, component: any, renderer: Renderer, args: any) {
    let branch: BranchScope = component.scope;

    if (!branch) {
      branch = classIdToBranch.get(component.id)!;
      if (branch) {
        component.scope = branch;
        classIdToBranch.delete(component.id);
      }
    }

    let existing = false;
    if (typeof args[0] === "object" && "renderBody" in args[0]) {
      const input = args[0];
      const normalizedInput = (args[0] = {} as any);
      for (const key in input) {
        normalizedInput[key === "renderBody" ? "content" : key] = input[key];
      }
    }

    component.effects = prepareEffects(() => {
      if (!branch) {
        out.global.___nextScopeId ||= 0;
        branch = component.scope = createBranch(
          out.global,
          renderer,
          renderer.___owner,
          document.body,
        );
        renderer.___setup && renderer.___setup(branch);
      } else {
        existing = true;
      }

      renderer.___args?.(branch, (renderer as any)._ ? args[0] : args);
    });

    if (!existing) {
      return toInsertNode(branch.___startNode, branch.___endNode);
    }
  },
};
