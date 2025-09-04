import {
  RENDER_BODY_ID,
  RENDERER_REGISTER_ID,
  SET_SCOPE_REGISTER_ID,
} from "../common/compat-meta";
import type { BranchScope } from "../common/types";
import { patchDynamicTag } from "./control-flow";
import { toInsertNode } from "./dom";
import { prepareEffects, queueEffect, runEffects } from "./queue";
import {
  _content_branch,
  createAndSetupBranch,
  type Renderer,
} from "./renderer";
import { _resume, getRegisteredWithScope } from "./resume";
import { destroyBranch } from "./scope";
const classIdToBranch = new Map<string, BranchScope>();

export const compat = {
  patchDynamicTag,
  queueEffect,
  init(warp10Noop: any) {
    _resume(SET_SCOPE_REGISTER_ID, (branch: BranchScope & { m5c: string }) => {
      classIdToBranch.set(branch.m5c, branch);
    });

    _resume(RENDER_BODY_ID, warp10Noop);
  },
  registerRenderer(fn: any) {
    _resume(RENDERER_REGISTER_ID, fn);
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
    if (this.effects) {
      runEffects(this.effects);
    }
  },
  runComponentDestroy(this: any) {
    if (this.scope) {
      destroyBranch(this.scope);
    }
  },
  resolveRegistered(
    value: any,
    $global: { runtimeId: string; renderId: string },
  ) {
    if (Array.isArray(value) && typeof value[0] === "string") {
      return getRegisteredWithScope(
        value[0],
        value.length === 2 &&
          (self as any)[$global.runtimeId]?.[$global.renderId]?.s[value[1]],
      );
    }

    return value;
  },
  createRenderer(
    params: NonNullable<Renderer["___params"]>,
    clone: () => { startNode: ChildNode; endNode: ChildNode },
  ) {
    const renderer = _content_branch(0, 0, 0, params);
    renderer.___clone = (branch) => {
      const cloned = clone();
      branch.___startNode = cloned.startNode;
      branch.___endNode = cloned.endNode;
    };
    return renderer;
  },
  render(out: any, component: any, renderer: Renderer, args: any) {
    let branch: BranchScope | undefined = component.scope;
    let created: 0 | 1 = 0;

    if (!branch && (branch = classIdToBranch.get(component.id)!)) {
      component.scope = branch;
      classIdToBranch.delete(component.id);
    }

    if (typeof args[0] === "object" && "renderBody" in args[0]) {
      const input = args[0];
      const normalizedInput = (args[0] = {} as any);
      for (const key in input) {
        normalizedInput[key === "renderBody" ? "content" : key] = input[key];
      }
    }

    component.effects = prepareEffects(() => {
      if (!branch) {
        created = 1;
        out.global.___nextScopeId ||= 0;
        branch = component.scope = createAndSetupBranch(
          out.global,
          renderer,
          renderer.___owner,
          document.body,
        );
      }

      renderer.___params?.(branch, (renderer as any)._ ? args[0] : args);
    });

    if (created) {
      return toInsertNode(branch.___startNode, branch.___endNode);
    }
  },
};
