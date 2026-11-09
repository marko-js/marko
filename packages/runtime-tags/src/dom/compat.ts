import { RENDER_BODY_ID, SET_SCOPE_REGISTER_ID } from "../common/compat-meta";
import { setClassAPIRenderer } from "../common/helpers";
import {
  AccessorProp,
  type BranchScope,
  RendererProp,
  type Scope,
} from "../common/types";
import {
  prepareEffects,
  queueEffect,
  queueRender,
  rendering,
  runEffects,
} from "./queue";
import { _content, createAndSetupBranch, type Renderer } from "./renderer";
import { _resumed, getRegisteredWithScope, init } from "./resume";
import { destroyBranch } from "./scope";
const classIdToBranch = new Map<string, BranchScope>();
// Injected by the class runtime (runtime-dom.js); revives a serialized
// class-method event reference, which only the class side can resolve.
let classEventResolver: ((value: unknown, scope: Scope) => unknown) | undefined;
// Keyed by the render handle, the one object reachable from both sides of the
// interop boundary, and released with the render when an embedded render is destroyed.
const scopesByRender = new WeakMap<object, Record<string, Scope>>();
const getRenderScopes = ($global: Record<string, unknown>) => {
  // The class runtime can hydrate before this runtime has resumed (init order
  // is bundler-controlled); force the resume so its scopes are registered.
  init($global.runtimeId as string);
  const render = (self as any)[$global.runtimeId as string]?.[
    $global.renderId as string
  ];
  let scopes = render && scopesByRender.get(render);
  if (render && !scopes) {
    scopesByRender.set(render, (scopes = {}));
  }
  return scopes as Record<string, Scope> | undefined;
};

export const compat = {
  setClassAPIRenderer,
  queueEffect,
  init(warp10Noop: any) {
    _resumed[SET_SCOPE_REGISTER_ID] = (scope: Scope & { m5c?: string }) => {
      getRenderScopes(scope[AccessorProp.Global]!)![scope[AccessorProp.Id]] =
        scope;
      if (scope.m5c) {
        classIdToBranch.set(scope.m5c, scope as BranchScope);
      }
      // Revive any bridged class-method event references in this resumed scope.
      if (classEventResolver) {
        for (const key in scope) {
          const resolved = classEventResolver(scope[key], scope);
          if (resolved !== scope[key]) {
            scope[key] = resolved;
          }
        }
      }
    };

    _resumed[RENDER_BODY_ID] = warp10Noop;
  },
  setClassEventResolver(fn: (value: unknown, scope: Scope) => unknown) {
    classEventResolver = fn;
  },
  resumeClassFunction(id: string, build: (scope: Scope) => unknown) {
    _resumed[id] = build;
  },
  getScope($global: Record<string, unknown>, scopeId: unknown) {
    return getRenderScopes($global)?.[scopeId as string];
  },
  // Data may carry a renderer's id key, but not its clone.
  isRenderer(value: any) {
    return (
      RendererProp.Id in value &&
      typeof value[RendererProp.Clone] === "function"
    );
  },
  getGlobal(scope: Scope) {
    return scope[AccessorProp.Global];
  },
  getStartNode(branch: any) {
    return branch[AccessorProp.StartNode];
  },
  getEndNode(branch: any) {
    return branch[AccessorProp.EndNode];
  },
  setScopeNodes(branch: any, startNode: Node, endNode: Node) {
    branch[AccessorProp.StartNode] = startNode;
    branch[AccessorProp.EndNode] = endNode;
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
        // Misses naturally for scope-less values (no/null scope id).
        getRenderScopes($global)?.[value[1]],
        value[0],
      );
    }

    return value;
  },
  createRenderer(id: string, clone: CloneNodes) {
    const renderer = _content("", 0)();
    renderer[RendererProp.Id] = id;
    renderer[RendererProp.Clone] = cloneBranch(clone);
    return renderer;
  },
  // A Class template is keyed by itself and renders from a dynamic tag's input, or
  // from none as a native tag's content, as a Tags template does.
  createTemplate(render: ClassRender, clone: CloneNodes) {
    const create = createClassRenderer(render, clone);
    return (template: any, renderer: unknown) => {
      const templateRenderer = create(template, renderer);
      (templateRenderer as any)._ = templateRenderer;
      return templateRenderer;
    };
  },
  // All Class content shares one key, so a Class parent's rerender renders its new content
  // in the branch the last rendered.
  createContent(render: ClassRender, clone: CloneNodes) {
    const create = createClassRenderer(render, clone);
    return (content: unknown) => {
      const renderer = create(RENDER_BODY_ID, content);
      renderer[RendererProp.LocalClosures] = renderer[RendererProp.Setup];
      return renderer;
    };
  },
  render(out: any, component: any, renderer: Renderer, args: any) {
    // A rerendering class parent may hydrate before this runtime has resumed;
    // resume first so the branch this render should adopt is registered.
    init(out.global.runtimeId);
    let branch: BranchScope | undefined = component.scope;
    let created: 0 | 1 = 0;

    if (!branch && (branch = classIdToBranch.get(component.id)!)) {
      component.scope = branch;
      classIdToBranch.delete(component.id);
    }

    if (args[0] && typeof args[0] === "object" && "renderBody" in args[0]) {
      const input = args[0];
      const normalizedInput = (args[0] = {} as any);
      for (const key in input) {
        normalizedInput[key === "renderBody" ? "content" : key] = input[key];
      }
    }

    const renderBranch = (_?: never) => {
      if (!branch) {
        created = 1;
        // The insertion point is still virtual here, so a template rooted at a
        // bare foreign child (`<circle>`, not `<svg>`) clones as XHTML.
        branch = component.scope = createAndSetupBranch(
          out.global,
          renderer,
          renderer[RendererProp.Owner],
          document.body,
        );
      }

      renderer[RendererProp.LocalClosures]?.(branch);
      renderer[RendererProp.Params]?.(
        branch,
        (renderer as any)._ ? args[0] : args,
      );
    };
    // A tags parent re-rendering this class component is mid-run; that run
    // flushes this render and its effects.
    component.effects = rendering
      ? renderBranch()
      : prepareEffects(renderBranch);

    if (created) {
      return (
        branch[AccessorProp.StartNode].parentNode ||
        branch[AccessorProp.StartNode]
      );
    }
  },
};

type CloneNodes = () => { startNode: ChildNode; endNode: ChildNode };
type ClassScope = Scope & { m5b?: unknown; m5a?: unknown };
type ClassRender = (branch: ClassScope, value: unknown, input: unknown) => void;

// Renders the value and input a branch was last given, once per update; signal key 0
// is free without a template. Params gives the value too: a resumed branch skips setup.
function createClassRenderer(render: ClassRender, clone: CloneNodes) {
  const renderBranch = (branch: ClassScope) =>
    render(branch, branch.m5b, branch.m5a);
  const create = _content("", 0);
  const cloneClass = cloneBranch(clone);
  return (id: string, value: unknown) => {
    const renderer = create();
    renderer[RendererProp.Id] = id;
    renderer[RendererProp.Clone] = cloneClass;
    renderer[RendererProp.Setup] = (branch: ClassScope) => {
      if (branch.m5b !== value) {
        branch.m5b = value;
        queueRender(branch, renderBranch, 0);
      }
    };
    renderer[RendererProp.Params] = (branch: ClassScope, input: unknown) => {
      branch.m5b = value;
      branch.m5a = input;
      queueRender(branch, renderBranch, 0);
    };
    return renderer;
  };
}

function cloneBranch(clone: CloneNodes): Renderer[typeof RendererProp.Clone] {
  return (branch) => {
    const cloned = clone();
    branch[AccessorProp.StartNode] = cloned.startNode;
    branch[AccessorProp.EndNode] = cloned.endNode;
  };
}
