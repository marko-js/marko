import { types as t } from "@marko/compiler";
import { getFile, getProgram } from "@marko/compiler/babel-utils";

import { createCyclicMemo } from "./cyclic-memo";
import { isOptimize } from "./marko-config";
import normalizeStringExpression from "./normalize-string-expression";
import { contentIsPatched, contentMayCreate } from "./patch/refresh";
import {
  inStatefulBranch,
  isBranchPathSection,
  isStatefulBranch,
} from "./patch/structure";
import {
  forEachSection,
  forEachSectionReverse,
  getRendererReason,
  type Section,
  StructureKind,
} from "./sections";
import { getResumeRegisterId, sectionHasServerEffect } from "./signals";
import { getSectionMeta, trimTrailingExits } from "./structure";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** Patchable shells by id: the branch (or await body) section
     * whose structure the html output serializes as a shell. */
    shells?: Record<string, Section>;
  }
}

export function getShells() {
  return getProgram().node.extra.shells;
}

// Whether a section ships as a shell (under any id).
export function isShell(section: Section) {
  return !!findShellId(section);
}

// The id a section ships its shell under (an await body may be kept as
// boundary content or through its enclosing shell's chain).
export function findShellId(section: Section) {
  const shells = getShells();
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
      const bodyShells: Record<string, Section> = {};
      if (
        !inStatefulBranch(section.parent) &&
        isShellExpressible(section) &&
        buildAwaitBodyShells(section, bodyShells)
      ) {
        Object.assign(shells, bodyShells);
        shells[getResumeRegisterId(section, "content")] = section;
      }
      return;
    }
    // Boundary content always registers, so its slot resolves by id.
    if (
      !section.boundaryContent &&
      !isAwaitBody(section) &&
      contentNeedsShell(section) &&
      isShellExpressible(section)
    ) {
      const bodyShells: Record<string, Section> = {};
      if (buildAwaitBodyShells(section, bodyShells)) {
        section.contentShell = true;
        Object.assign(shells, bodyShells);
        shells[getResumeRegisterId(section, "content")] = section;
      }
    }
  });
  forEachSection((section) => {
    // Every branch-path body ships a shell, except
    // stateful bodies: a flush never creates them.
    if (
      !section.branch?.optional ||
      !isBranchPathSection(section) ||
      isStatefulBranch(section)
    ) {
      return;
    }
    // A template including itself outside any branch has no finite shell:
    // the branch ships none and a patch creating it fails closed.
    const bodyShells: Record<string, Section> = {};
    if (
      !isShellExpressible(section) ||
      !buildAwaitBodyShells(section, bodyShells)
    ) {
      return;
    }
    Object.assign(shells, bodyShells);
    shells[getShellId(section)] = section;
  });
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
  if (getShells()?.[id] === section && !sectionHasServerEffect(section)) {
    return id;
  }
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
            ? shipsRootShell(op.renderer.program)
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
  return !section.children.some(
    (child) =>
      !child.branch &&
      !child.contentShell &&
      !child.boundaryContent &&
      // Content nothing names or creates leaves nothing for a shell to lack.
      contentNeedsShell(child),
  );
}

// Whether a template ships its root as a shell: decided by its own
// compile, since its reasons resolve only against its own program.
function shipsRootShell(program: t.ProgramExtra) {
  for (const id in program.shells) {
    if (program.shells[id] === program.section) return true;
  }
  return false;
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
  return !!section.structure?.some(
    (op) => typeof op === "object" && op.kind === StructureKind.Child,
  );
}

// Await bodies ship as their await's `await` shells, never as
// standalone content shells nothing references.
function isAwaitBody(section: Section) {
  return !!section.branch?.await;
}

// The shell `id marker;walks;template` (`,` for `;walks;` when the
// walk is empty): the section's dom template parts, child imports included.
export function buildShell(id: string, section: Section, marker = "") {
  const { writes, walks } = getSectionMeta(section);
  const walkExpr = trimTrailingExits(walks);
  const walkless =
    !walkExpr || (t.isStringLiteral(walkExpr) && !walkExpr.value);
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
  return normalizeStringExpression(parts, true)!;
}
