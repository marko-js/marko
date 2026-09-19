import { types as t } from "@marko/compiler";
import { getFile, getProgram } from "@marko/compiler/babel-utils";

import { createCyclicMemo } from "./cyclic-memo";
import normalizeStringExpression from "./normalize-string-expression";
import { contentIsPatched, contentMayCreate } from "./patch/refresh";
import { isBranchPathSection, isStatefulBranch } from "./patch/structure";
import { addRuntimeFeatureAsset } from "./runtime";
import {
  forEachSection,
  getChildSections,
  forEachSectionReverse,
  getSectionRegisterReasons,
  type Section,
  StructureKind,
} from "./sections";
import { getResumeRegisterId } from "./signals";
import {
  getSectionMeta,
  resolveStructure,
  trimTrailingExits,
} from "./structure";

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
  const shells = getShells();
  for (const id in shells) if (shells[id] === section) return true;
  return false;
}

// Decides every branch shell (expressibility, blockers) so the html output
// serializes the kept sections as shells.
export function buildShells() {
  const interactive = getProgram().node.extra.isInteractive;
  const keep = new Set<Section>();
  const shells = (getProgram().node.extra.shells ??= {});
  // A content body nothing registers ships as a shell; static
  // boundary content is a shell too.
  forEachSectionReverse((section) => {
    // Kept root awaits let `Pending` carry a body shell id; the root
    // ships under the template id so a dynamic tag entry can create it.
    if (!section.parent) {
      const chain: Section[] = [];
      const bodyShells: Record<string, Section> = {};
      if (buildAwaitBodyShells(section, bodyShells, chain)) {
        keep.add(section);
        for (const body of chain) keep.add(body);
        Object.assign(shells, bodyShells);
        if (isShellExpressible(section)) {
          shells[getFile().metadata.marko.id] = section;
        }
      }
      return;
    }
    if (section.isBranch || isStatefulBranch(section)) {
      return;
    }
    // A boundary creates from its content shell; an inexpressible one
    // stays shell-less, so a creation reaching it rejects.
    if (section.isBoundary) {
      const chain: Section[] = [];
      const bodyShells: Record<string, Section> = {};
      if (
        isShellExpressible(section) &&
        buildAwaitBodyShells(section, bodyShells, chain)
      ) {
        keep.add(section);
        for (const body of chain) keep.add(body);
        Object.assign(shells, bodyShells);
        shells[getResumeRegisterId(section, "content")] = section;
      }
      return;
    }
    if (section.boundaryContent) {
      if (isStaticShell(section)) {
        section.contentShell = "static";
        shells[getResumeRegisterId(section, "content")] = section;
        addRuntimeFeatureAsset("patch-content");
      }
    } else if (
      !isAwaitBody(section) &&
      contentNeedsShell(section, interactive) &&
      isShellExpressible(section)
    ) {
      const chain: Section[] = [];
      const bodyShells: Record<string, Section> = {};
      if (buildAwaitBodyShells(section, bodyShells, chain)) {
        // Only a slot the client dereferences rides in-band.
        section.contentShell =
          getSectionRegisterReasons(section) && isStaticShell(section)
            ? "static"
            : true;
        if (section.contentShell === "static") {
          addRuntimeFeatureAsset("patch-content");
        }
        keep.add(section);
        for (const body of chain) keep.add(body);
        Object.assign(shells, bodyShells);
        shells[getResumeRegisterId(section, "content")] = section;
      }
    }
  });
  forEachSection((section) => {
    // Every branch-path body ships a shell, except
    // stateful bodies: a flush never creates them.
    if (
      !section.isBranch ||
      !isBranchPathSection(section) ||
      isStatefulBranch(section)
    ) {
      return;
    }
    // A template including itself outside any branch has no finite shell:
    // the branch ships none and a patch creating it fails closed.
    const chain: Section[] = [];
    const bodyShells: Record<string, Section> = {};
    if (
      !isShellExpressible(section) ||
      !buildAwaitBodyShells(section, bodyShells, chain)
    ) {
      return;
    }
    keep.add(section);
    for (const body of chain) keep.add(body);
    Object.assign(shells, bodyShells);
    shells[getShellId(section)] = section;
  });
}

// Body shells reuse the branch grammar; nested awaits recurse so a
// created body can itself create the awaits it contains.
function buildAwaitBodyShells(
  section: Section,
  shells: Record<string, Section>,
  chain: Section[],
) {
  for (const { binding, body } of section.awaits || []) {
    if (
      !isShellExpressible(body) ||
      !buildAwaitBodyShells(body, shells, chain)
    ) {
      return false;
    }
    shells[getResumeRegisterId(section, binding, "await")] = body;
    chain.push(body);
  }
  return true;
}

export function getShellId(section: Section) {
  return getResumeRegisterId(section, "shell");
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
      op.kind !== StructureKind.Visit &&
      // Static text is plain markup, expressible like a markup string.
      op.kind !== StructureKind.Text &&
      // A known child (a template's root or a sibling define body) composes
      // when expressible; a lazy child expresses as its marker (the shell
      // composes a server-only one).
      !(
        op.kind === StructureKind.Child &&
        (op.load ||
          !op.renderer ||
          isShellExpressible(
            op.renderer.kind === StructureKind.ExportRef
              ? op.renderer.program.section!
              : op.renderer.section,
          ))
      )
    ) {
      return false;
    }
  }
  // Nested branches, boundaries, content shells, and boundary content (a
  // slot, or the flush's html) arrive through the walk or entries.
  const interactive = getProgram().node.extra.isInteractive;
  return !getChildSections(section).some(
    (child) =>
      !child.isBranch &&
      !child.isBoundary &&
      !child.contentShell &&
      !child.boundaryContent &&
      // Content nothing names or creates leaves nothing for a shell to lack.
      contentNeedsShell(child, interactive),
  );
}

// A scriptless page has only shells; elsewhere a shell serves content a
// tag names or a patch may create, or a renderer that cannot mount a child.
function contentNeedsShell(section: Section, interactive: boolean | undefined) {
  return (
    !interactive ||
    (!getSectionRegisterReasons(section) &&
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
  return !!section.parent?.awaits?.some((s) => s.body === section);
}

// A shell the client creates from its template alone: static markup with
// no walk. A child always walks, so resolving never reaches its imports.
function isStaticShell(section: Section) {
  if (
    !isShellExpressible(section) ||
    section.structure!.some(
      (op) => typeof op === "object" && op.kind === StructureKind.Child,
    )
  ) {
    return false;
  }
  const { writes, walks } = resolveStructure(section);
  const writesLiteral = normalizeStringExpression(writes, true);
  return (
    t.isStringLiteral(writesLiteral) &&
    !!writesLiteral.value &&
    !trimTrailingExits(normalizeStringExpression(walks, true))
  );
}

// The shell `id marker;walks;template` (`,` for `;walks;` when the
// walk is empty): the section's dom template parts, child imports included.
export function buildShell(id: string, section: Section, marker = "") {
  const { writes, walks } = getSectionMeta(section);
  const walkExpr = trimTrailingExits(walks);
  const walkless =
    !walkExpr || (t.isStringLiteral(walkExpr) && !walkExpr.value);
  const parts: (string | t.Expression)[] = [
    id + (marker && " " + marker) + (walkless ? "," : ";"),
  ];
  if (!walkless) parts.push(walkExpr!, ";");
  if (writes) parts.push(writes);
  return normalizeStringExpression(parts, true)!;
}
