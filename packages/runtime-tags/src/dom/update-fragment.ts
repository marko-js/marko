import {
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  FragmentContextProp,
  ResumeSymbol,
  type Scope,
} from "../common/types";
import { removeChildNodes } from "./dom";
import { setParentBranch } from "./renderer";
import { removeAndDestroyBranch } from "./scope";
import { getDebugKey } from "./walker";

export const BOUNDARY_SITE_PREFIX = MARKO_DEBUG ? "BoundarySite:" : "T";

export interface FragmentContext {
  [FragmentContextProp.GetScope](id: number): Scope;
  [FragmentContextProp.Stamp](scope: Scope, id: number): boolean;
  [FragmentContextProp.Adopt](id: number, scope: Scope): Scope;
}

function stampFragmentScopes(
  context: FragmentContext,
  ids: number[] | undefined,
) {
  if (ids) {
    for (const id of ids) {
      context[FragmentContextProp.Stamp](
        context[FragmentContextProp.GetScope](id),
        id,
      );
    }
  }
}

// Parses fragment markup and wraps its range in stable text anchors.
function parseFragmentContent(
  context: FragmentContext,
  markerPrefix: string,
  html: string,
) {
  const tpl = document.createElement("template");
  tpl.innerHTML = html;
  const [touched, orphans] = walkFragment(tpl.content, markerPrefix, context);
  const first = tpl.content.insertBefore(new Text(), tpl.content.firstChild);
  const last = tpl.content.appendChild(new Text());
  return [tpl.content, first, last, touched, orphans] as const;
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
  const [content, first, last, touched, orphans] = parseFragmentContent(
    context,
    markerPrefix,
    html,
  );
  marker.parentNode!.insertBefore(content, marker);
  if (old) removeAndDestroyBranch(old);
  context[FragmentContextProp.Stamp](branch, 0);
  branch[AccessorProp.StartNode] = first;
  branch[AccessorProp.EndNode] = last;
  // Replace any serialized patch-local owner with the live attachment scope.
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

/** Builds a keyed branch whose range remains detached for insertion. */
export function createFragmentBranch(
  context: FragmentContext,
  branch: BranchScope,
  owner: Scope,
  markerPrefix: string,
  html: string,
  scopeIds?: number[],
): BranchScope {
  stampFragmentScopes(context, scopeIds);
  const [, first, last, touched, orphans] = parseFragmentContent(
    context,
    markerPrefix,
    html,
  );
  context[FragmentContextProp.Stamp](branch, 0);
  branch[AccessorProp.StartNode] = first;
  branch[AccessorProp.EndNode] = last;
  branch[AccessorProp.Owner] = owner;
  setParentBranch(
    branch,
    owner[AccessorProp.ClosestBranch] as BranchScope | undefined,
  );
  for (const orphan of orphans) {
    if (!orphan[AccessorProp.ParentBranch]) setParentBranch(orphan, branch);
  }
  for (const scope of touched) scope[AccessorProp.ClosestBranch] ||= branch;
  return branch;
}

export function applyBoundaryBody(
  context: FragmentContext,
  tryBranch: BranchScope,
  markerPrefix: string,
  html: string,
  scopeIds: number[] | undefined,
  patchBranchId: number,
) {
  if (!tryBranch[AccessorProp.Gen]) return;
  const placeholderBranch = tryBranch[AccessorProp.PlaceholderBranch];
  context[FragmentContextProp.Adopt](patchBranchId, tryBranch);
  stampFragmentScopes(context, scopeIds);
  const tpl = document.createElement("template");
  tpl.innerHTML = html;
  const [touched, orphans] = walkFragment(tpl.content, markerPrefix, context);
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

/** Binds fragment markers; keep its grammar aligned with `dom/resume.ts`. */
export function walkFragment(
  root: ParentNode,
  prefix: string,
  context: FragmentContext,
) {
  const getScope = context[FragmentContextProp.GetScope];
  const stamp = context[FragmentContextProp.Stamp];
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

      // Keep rejected orphans available when one visit ends several branches.
      while (i && orphanBranches[i - 1][AccessorProp.Id] > branchId) {
        i--;
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

  return [touched, orphanBranches] as const;
}
