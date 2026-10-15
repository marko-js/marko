import { types as t } from "@marko/compiler";
import { getFile, getProgram } from "@marko/compiler/babel-utils";

import { type Falsy } from "../../common/types";
import { type ReferencedBindings } from "./bindings";
import buildStringExpression from "./build-string-expression";
import { createCyclicMemo } from "./cyclic-memo";
import { isOptimize } from "./marko-config";
import { some } from "./optional";
import {
  contentIsPatched,
  contentMayCreate,
  isPatchFillBinding,
  sectionHasServerEffect,
} from "./patch/refresh";
import {
  inStatefulBranch,
  inUnreadCatch,
  isBranchPathSection,
  isStatefulBranch,
} from "./patch/structure";
import { getSourcesForRef } from "./reasons";
import { callRuntime, registerRuntimeValue } from "./runtime";
import {
  forEachSection,
  forEachSectionReverse,
  getRendererReason,
  type Section,
  StructureKind,
  type StructureOp,
} from "./sections";
import { getResumeRegisterId, getSignals } from "./signals";
import { getSectionMeta, trimTrailingExits } from "./structure";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** Patchable shells by id: the branch (or await body) section
     * whose structure the html output serializes as a shell. */
    shells?: Record<string, Section>;
  }
}

// The id a section ships its shell under (an await body may be kept as
// boundary content or through its enclosing shell's chain).
export function findShellId(
  section: Section,
  shells = getProgram().node.extra.shells,
) {
  for (const id in shells) if (shells[id] === section) return id;
}

// Runs at analyze exit: a caller composing these shells reads the decisions,
// and only this compile can make them (reasons resolve against its program).
export function buildShells() {
  const shells = (getProgram().node.extra.shells ??= {});
  // A content body nothing registers ships as a shell.
  forEachSectionReverse((section) => {
    // Kept root awaits let `Pending` carry a body shell id; the root
    // ships under the template id so a dynamic tag entry can create it.
    if (!section.parent) {
      const bodyShells: Record<string, Section> = {};
      if (buildAwaitBodyShells(section, bodyShells)) {
        Object.assign(shells, bodyShells);
        if (isShellExpressible(section)) {
          shells[getFile().metadata.marko.id] = section;
        }
      }
      return;
    }
    if (section.branch?.optional || isStatefulBranch(section)) {
      return;
    }
    // A boundary creates from its content shell (never inside a stateful
    // branch); an inexpressible one stays shell-less and a creation rejects.
    if (section.branch) {
      if (!inStatefulBranch(section.parent)) {
        addShell(shells, section, "content");
      }
      return;
    }
    // Boundary content always registers, so its slot resolves by id.
    if (
      !section.boundaryContent &&
      contentNeedsShell(section) &&
      addShell(shells, section, "content")
    ) {
      section.contentShell = true;
    }
  });
  forEachSection((section) => {
    // A flush may create a branch-path body, none stateful or in a catch the
    // client renders; a template including itself outside a branch has none.
    if (
      section.branch?.optional &&
      isBranchPathSection(section) &&
      !isStatefulBranch(section) &&
      !inUnreadCatch(section)
    ) {
      addShell(shells, section, "shell");
    }
  });
}

// Ships the section's shell, under its register id of `type`, with its await
// bodies', unless one is inexpressible.
function addShell(
  shells: Record<string, Section>,
  section: Section,
  type: "content" | "shell",
) {
  const bodyShells: Record<string, Section> = {};
  if (
    !isShellExpressible(section) ||
    !buildAwaitBodyShells(section, bodyShells)
  ) {
    return false;
  }
  Object.assign(shells, bodyShells);
  shells[getResumeRegisterId(section, type)] = section;
  return true;
}

// Body shells reuse the branch grammar; nested awaits recurse so a
// created body can itself create the awaits it contains.
function buildAwaitBodyShells(
  section: Section,
  shells: Record<string, Section>,
) {
  for (const body of section.children) {
    if (body.branch?.await) {
      if (!isShellExpressible(body) || !buildAwaitBodyShells(body, shells)) {
        return false;
      }
      shells[getResumeRegisterId(section, body.branch.nodeBinding, "await")] =
        body;
    }
  }
  return true;
}

export function getShellId(section: Section) {
  return getResumeRegisterId(section, "shell");
}

// An effect reading what a patch cannot keep current leaves a body shell-less.
// Translate only: `hasHTMLEffect` exists once translate registers effects.
export function getShippedShellId(section: Section) {
  const id = getShellId(section);
  if (
    getProgram().node.extra.shells?.[id] === section &&
    !sectionHasServerEffect(section)
  ) {
    return id;
  }
}

// The shell a patch creates a body from, as a writer's argument: `0` for none.
export function getShellIdArg(section: Section | undefined) {
  const id = section && getShippedShellId(section);
  return id ? t.stringLiteral(id) : t.numericLiteral(0);
}

// A branch's shell is its resolved structure (known child templates
// included); anything else leaves it shell-less, so divergence fails closed.
const isShellExpressible = createCyclicMemo(
  // A template cycle never resolves to a finite shell.
  (section: Section) => !!section.structure && isStructureExpressible(section),
  false,
);

function isStructureExpressible(section: Section) {
  for (const op of section.structure!) {
    if (
      typeof op === "object" &&
      op.kind !== StructureKind.Node &&
      // Static text and a stylesheet module's class names are markup the
      // shell writes as the server module loads.
      op.kind !== StructureKind.Text &&
      op.kind !== StructureKind.ModuleRead &&
      // A known child (a template's root or a sibling define body) composes
      // when expressible; another template's root as its own compile decided.
      !(
        op.kind === StructureKind.Child &&
        (!op.renderer ||
          (op.renderer.kind === StructureKind.ExportRef &&
          op.renderer.program !== getProgram().node.extra
            ? // Decided by that template's own compile, since its reasons
              // resolve only against its own program.
              !!findShellId(
                op.renderer.program.section!,
                op.renderer.program.shells,
              )
            : isShellExpressible(
                op.renderer.kind === StructureKind.ExportRef
                  ? op.renderer.program.section!
                  : op.renderer.section,
              )))
      )
    ) {
      return false;
    }
  }
  // Nested branches, boundaries, content shells, and boundary content (a
  // slot, or the flush's html) arrive through the walk or entries.
  return !section.children.some(childNeedsShell);
}

// Content nothing names or creates leaves nothing for a shell to lack.
function childNeedsShell(child: Section) {
  return (
    !child.branch &&
    !child.contentShell &&
    !child.boundaryContent &&
    contentNeedsShell(child)
  );
}

// Unregistered content a tag names or a patch may create (a registered body
// resolves through its module), or a renderer that cannot mount its child.
function contentNeedsShell(section: Section) {
  return (
    (!getRendererReason(section) &&
      (contentIsPatched(section) || contentMayCreate(section))) ||
    (hasPatchedChild(section) && contentMayCreate(section))
  );
}

// A known child in a non-stateful section pairs from patches; the
// section's client renderer never mounts it, so a creation needs the shell.
function hasPatchedChild(section: Section) {
  return !!section.structure?.some(isChildOp);
}

function isChildOp(op: StructureOp) {
  return typeof op === "object" && op.kind === StructureKind.Child;
}

// A closure signal a body a flush creates runs by its init id (`shellInitId`):
// registered by assignment, so no tree-shaking drops what a shell names.
export function registerShellInit(
  shellInitId: string | Falsy,
  signal: t.Expression,
) {
  return shellInitId ? registerRuntimeValue(shellInitId, signal) : signal;
}

// A join a created scope runs as the init of `ref`, registered on the join.
export function wrapShellJoin(
  section: Section,
  ref: ReferencedBindings,
  value: t.Expression,
) {
  return callRuntime(
    "_shell_join",
    t.stringLiteral(getResumeRegisterId(section, ref, "init")),
    value,
  );
}

// An effect a created scope's own renders queue (an init, seed, or item
// write cascades into it): its setup ids leave it to those renders.
export function isQueuedOnCreate(section: Section, refs: ReferencedBindings) {
  return (
    !!getSourcesForRef(refs)?.state ||
    some(refs, (ref) => ref.section === section && isPatchFillBinding(ref))
  );
}

// The section's mount effects as space-joined register ids, in resume
// order, for its shell to ship.
export function getSectionEffectRegisterIds(
  section: Section,
  skip: (referencedBindings: ReferencedBindings) => boolean,
) {
  let ids = "";
  const allSignals = Array.from(getSignals(section).values());
  for (let i = allSignals.length; i--;) {
    const { hasHTMLEffect, referencedBindings } = allSignals[i];
    if (hasHTMLEffect && !skip(referencedBindings)) {
      ids += (ids && " ") + getResumeRegisterId(section, referencedBindings);
    }
  }
  return ids;
}

// The shell `id marker;walks;template` (`,` for `;walks;` when the
// walk is empty): the section's dom template parts, child imports included.
export function buildShell(id: string, section: Section, marker = "") {
  const { writes, walks } = getSectionMeta(section);
  const walkExpr = trimTrailingExits(walks);
  const walkless =
    !walkExpr || (walkExpr.type === "StringLiteral" && !walkExpr.value);
  const parts: (string | t.Expression)[] = [
    // A debug build marks content with a `<return>` for the client's check of
    // a dynamic tag variable over it.
    (section.returnValueExpr && !isOptimize() ? "^" : "") +
      id +
      (marker && " " + marker) +
      (walkless ? "," : ";"),
  ];
  if (!walkless) parts.push(walkExpr!, ";");
  if (writes) parts.push(writes);
  return buildStringExpression(parts, true)!;
}
