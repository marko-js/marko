import {
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  ResumeSymbol,
  type Scope,
} from "../common/types";
import { removeChildNodes } from "./dom";
import { setParentBranch } from "./renderer";
import { getUpdateRoot } from "./resume";
import { removeAndDestroyBranch } from "./scope";
import { getDebugKey } from "./walker";

const HOP_SITE_PREFIX = MARKO_DEBUG ? "HopSite:" : "Z";
export const BOUNDARY_SITE_PREFIX = MARKO_DEBUG ? "BoundarySite:" : "T";

/**
 * Builds the possession echo sent with a persisted navigation. Dynamic-tag
 * renderer ids and pending try-boundary ids are keyed by compiler-stable site
 * ids; loop keys disambiguate repeated sites in keyed loops.
 */
export function _have(root: Scope | undefined = getUpdateRoot()): string {
  if (!root) return "";
  const prefix = AccessorPrefix.ConditionalRenderer;
  const possessed: Record<string, string> = {};
  const seen = new Set<Scope>();
  const stack: Scope[] = [root];
  let found: undefined | 1;
  while (stack.length) {
    const scope = stack.pop()!;
    if (seen.has(scope)) continue;
    seen.add(scope);
    for (const key in scope) {
      const value = scope[key];
      if (
        // Dynamic-tag hops echo a string renderer id; a structural `<if>`
        // echoes its numeric branch index the same way (same key prefix,
        // same `HopSite:` sibling stash -- see the html runtime's `_if`),
        // stringified so the server's possession compare (a JSON-decoded
        // string) matches either shape.
        (typeof value === "string" || typeof value === "number") &&
        key.length > prefix.length &&
        key.slice(0, prefix.length) === prefix
      ) {
        const siteId = scope[HOP_SITE_PREFIX + key.slice(prefix.length)];
        if (typeof siteId === "string") {
          found = 1;
          const loopKey = scope[AccessorProp.LoopKey];
          possessed[loopKey === undefined ? siteId : siteId + " " + loopKey] =
            "" + value;
        }
      } else if (
        typeof value === "string" &&
        key.length > BOUNDARY_SITE_PREFIX.length &&
        key.slice(0, BOUNDARY_SITE_PREFIX.length) === BOUNDARY_SITE_PREFIX
      ) {
        found = 1;
        const loopKey = scope[AccessorProp.LoopKey];
        possessed["!" + value + (loopKey === undefined ? "" : " " + loopKey)] =
          "1";
      } else if (value && typeof value === "object") {
        if (typeof (value as Scope)[AccessorProp.Id] === "number") {
          stack.push(value as Scope);
        } else if (value instanceof Set || Array.isArray(value)) {
          for (const child of value as Iterable<unknown>) {
            if (child && typeof child === "object") stack.push(child as Scope);
          }
        }
      }
    }
  }
  return found ? JSON.stringify(possessed) : "";
}

export interface FragmentContext {
  getScope(id: number): Scope;
  stamp(scope: Scope, id: number): boolean;
  adopt(id: number, scope: Scope): Scope;
}

function stampFragmentScopes(
  context: FragmentContext,
  ids: number[] | undefined,
) {
  if (ids) {
    for (const id of ids) context.stamp(context.getScope(id), id);
  }
}

export function applyFragment(
  context: FragmentContext,
  live: Scope,
  accessor: string,
  branch: BranchScope,
  markerPrefix: string,
  html: string,
  scopeIds?: number[],
) {
  stampFragmentScopes(context, scopeIds);
  const marker = live[accessor] as ChildNode;
  const old = live[AccessorPrefix.BranchScopes + accessor] as
    BranchScope | undefined;
  const tpl = document.createElement("template");
  tpl.innerHTML = html;
  const { touched, orphans } = walkFragment(tpl.content, markerPrefix, context);
  const first = tpl.content.insertBefore(new Text(), tpl.content.firstChild);
  const last = tpl.content.appendChild(new Text());
  marker.parentNode!.insertBefore(tpl.content, marker);
  if (old) removeAndDestroyBranch(old);
  context.stamp(branch, 0);
  branch[AccessorProp.StartNode] = first;
  branch[AccessorProp.EndNode] = last;
  // Force (not `||=`): a compiled closure inside the captured content may
  // have serialized an explicit "_" owner reference through the ordinary
  // (patch-local) fills path -- eg a nested `<const>` whose value signal
  // lives on an ancestor section (see core/if.ts's `persisted-update-
  // server-derived` fixture) -- which would otherwise stick as a stale
  // patch-scope placeholder instead of the real live scope this fragment
  // attaches to.
  branch[AccessorProp.Owner] = live;
  setParentBranch(
    branch,
    live[AccessorProp.ClosestBranch] as BranchScope | undefined,
  );
  live[AccessorPrefix.BranchScopes + accessor] = branch;
  for (const orphan of orphans) {
    if (!orphan[AccessorProp.ParentBranch]) setParentBranch(orphan, branch);
  }
  for (const scope of touched) scope[AccessorProp.ClosestBranch] ||= branch;
}

export function applyBoundaryBody(
  context: FragmentContext,
  tryBranch: BranchScope,
  markerPrefix: string,
  html: string,
  scopeIds?: number[],
  patchBranchId?: number,
) {
  if (!tryBranch[AccessorProp.Gen]) return;
  const placeholderBranch = tryBranch[AccessorProp.PlaceholderBranch];
  if (patchBranchId) context.adopt(patchBranchId, tryBranch);
  stampFragmentScopes(context, scopeIds);
  const tpl = document.createElement("template");
  tpl.innerHTML = html;
  const { touched, orphans } = walkFragment(tpl.content, markerPrefix, context);
  if (placeholderBranch) {
    tryBranch[AccessorProp.PlaceholderBranch] = 0;
    placeholderBranch[AccessorProp.StartNode].parentNode!.insertBefore(
      tpl.content,
      placeholderBranch[AccessorProp.StartNode],
    );
    removeAndDestroyBranch(placeholderBranch);
  } else {
    const start = tryBranch[AccessorProp.StartNode];
    const end = tryBranch[AccessorProp.EndNode];
    if (start !== end && start.nextSibling !== end) {
      removeChildNodes(
        start.nextSibling as ChildNode,
        end.previousSibling as ChildNode,
      );
    }
    end.parentNode!.insertBefore(tpl.content, end);
  }
  for (const orphan of orphans) {
    if (!orphan[AccessorProp.ParentBranch]) setParentBranch(orphan, tryBranch);
  }
  for (const scope of touched) scope[AccessorProp.ClosestBranch] ||= tryBranch;
}

/** Binds resume markers in server-rendered fragment HTML to patch scopes. */
export function walkFragment(
  root: ParentNode,
  prefix: string,
  { getScope, stamp }: FragmentContext,
) {
  const visits: Comment[] = [];
  const treeWalker = document.createTreeWalker(root, 128 /* comments */);
  for (let node; (node = treeWalker.nextNode());) {
    if ((node as Comment).data.startsWith(prefix)) visits.push(node as Comment);
  }

  const touched: Scope[] = [];
  const scopeOf = (id: string) => {
    const scope = getScope(+id);
    if (stamp(scope, +id)) touched.push(scope);
    return scope;
  };

  const branchStarts: Comment[] = [];
  const branchScopesStack: (BranchScope[] | undefined)[] = [];
  const orphanBranches: BranchScope[] = [];
  let curBranchScopes: BranchScope[] | undefined;
  let lastNodeScopeId = "";
  let visitText = "";
  let tokenIndex = 0;
  let lastToken = "";
  const nextToken = () =>
    (lastToken = visitText.slice(
      tokenIndex,
      (tokenIndex =
        visitText.indexOf(" ", tokenIndex) + 1 || visitText.length + 1) - 1,
    ));

  for (const visit of visits) {
    visitText = visit.data;
    tokenIndex = prefix.length;
    const visitType = visitText[tokenIndex++] as ResumeSymbol;

    if (visitType === ResumeSymbol.Node) {
      const scopeId = nextToken();
      const scope = scopeOf(
        scopeId ? (lastNodeScopeId = scopeId) : lastNodeScopeId,
      );
      const accessor = nextToken();
      const prev = visit.previousSibling;
      scope[accessor] =
        prev && (prev.nodeType < 8 || (prev as Comment).data)
          ? prev
          : visit.parentNode!.insertBefore(new Text(), visit);
      continue;
    }

    lastNodeScopeId = "";
    let visitScope: Scope | undefined;
    let accessor: string | undefined;
    let singleNode = false;
    let endedBranches: BranchScope[] | undefined;
    let startVisit: ChildNode = visit;
    const parent = visit.parentNode!;

    if (visitType !== ResumeSymbol.BranchStart) {
      visitScope = scopeOf(nextToken());
      if (nextToken() === "!") {
        accessor = AccessorProp.PlaceholderBranch;
      } else {
        visitScope[lastToken] =
          visitType === ResumeSymbol.BranchEndOnlyChildInParent ||
          visitType === ResumeSymbol.BranchEndSingleNodeOnlyChildInParent
            ? parent
            : visit;
        accessor = AccessorPrefix.BranchScopes + lastToken;
      }
      singleNode =
        visitType !== ResumeSymbol.BranchEnd &&
        visitType !== ResumeSymbol.BranchEndOnlyChildInParent;
      nextToken();
    } else {
      nextToken();
    }

    let i = orphanBranches.length;
    let branchId: number;
    while ((branchId = +lastToken)) {
      const branch = scopeOf(lastToken) as BranchScope;
      (endedBranches ||= []).push(branch);

      if (singleNode) {
        while (
          startVisit.previousSibling &&
          ~visits.indexOf((startVisit = startVisit.previousSibling) as Comment)
        );
        branch[AccessorProp.Owner] ??= visitScope!;
        branch[AccessorProp.EndNode] = branch[AccessorProp.StartNode] =
          startVisit;
        if (visitType === ResumeSymbol.BranchEndNativeTag) {
          branch[MARKO_DEBUG ? getDebugKey(0, startVisit) : "a"] = startVisit;
        }
      } else {
        curBranchScopes = curBranchScopes
          ? (curBranchScopes.push(branch), curBranchScopes)
          : [branch];
        if (accessor) {
          visitScope![accessor] =
            curBranchScopes.length > 1 ? curBranchScopes : curBranchScopes[0];
          for (const scope of curBranchScopes) {
            scope[AccessorProp.Owner] ??= visitScope!;
          }
          curBranchScopes = branchScopesStack.pop();
        }
        startVisit = branchStarts.pop()!;
        if (parent !== startVisit.parentNode) parent.prepend(startVisit);
        branch[AccessorProp.StartNode] = startVisit;
        branch[AccessorProp.EndNode] =
          visit.previousSibling === startVisit
            ? startVisit
            : parent.insertBefore(new Text(), visit);
      }

      while (i && orphanBranches[--i][AccessorProp.Id] > branchId) {
        setParentBranch(orphanBranches.pop()!, branch);
      }
      nextToken();
    }

    if (endedBranches) {
      for (const ended of endedBranches) orphanBranches.push(ended);
      if (singleNode) {
        visitScope![accessor!] =
          endedBranches.length > 1 ? endedBranches.reverse() : endedBranches[0];
      }
    }

    if (visitType === ResumeSymbol.BranchStart) {
      if (!endedBranches) {
        branchScopesStack.push(curBranchScopes);
        curBranchScopes = undefined;
      }
      branchStarts.push(visit);
    }
  }

  return { touched, orphans: orphanBranches };
}
