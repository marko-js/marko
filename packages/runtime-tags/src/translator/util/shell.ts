import { types as t } from "@marko/compiler";
import { getFile, getProgram } from "@marko/compiler/babel-utils";

import normalizeStringExpression from "./normalize-string-expression";
import { contentIsPatched, contentMayConstruct } from "./persisted/refresh";
import { isBranchPathSection, isStatefulBranch } from "./persisted/structure";
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
    // ships under the template id so a dynamic tag entry can construct it.
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
    // A boundary constructs from its content shell; an inexpressible one
    // stays shell-less, so a construct reaching it rejects.
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
    // stateful bodies: they never construct from a flush.
    if (
      !section.isBranch ||
      !isBranchPathSection(section) ||
      isStatefulBranch(section)
    ) {
      return;
    }
    // Structure composes to a finite shell unless a template includes
    // itself outside any branch, which never renders either.
    const chain: Section[] = [];
    const bodyShells: Record<string, Section> = {};
    if (
      !isShellExpressible(section) ||
      !buildAwaitBodyShells(section, bodyShells, chain)
    ) {
      throw new Error(
        "Invalid compiler state, a branch on the patch path has no expressible shell.",
      );
    }
    keep.add(section);
    for (const body of chain) keep.add(body);
    Object.assign(shells, bodyShells);
    shells[getShellId(section)] = section;
  });
  // Only kept sections' awaits construct: their `Pending` patches carry a
  // content id and (interactive) their body registers in the dom output.
  forEachSection((section) => {
    if (!keep.has(section)) section.constructSetups = undefined;
  });
}

// Body shells reuse the branch grammar; nested awaits recurse so a
// constructed body can itself construct the awaits it contains.
function buildAwaitBodyShells(
  section: Section,
  shells: Record<string, Section>,
  chain: Section[],
) {
  for (const { binding, body } of section.constructSetups || []) {
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
function isShellExpressible(section: Section, visiting = new Set<Section>()) {
  // A template cycle never resolves to a finite shell.
  if (!section.structure || visiting.has(section)) return false;
  visiting.add(section);
  const expressible = isStructureExpressible(section, visiting);
  visiting.delete(section);
  return expressible;
}

function isStructureExpressible(section: Section, visiting: Set<Section>) {
  for (const op of section.structure!) {
    if (
      typeof op === "object" &&
      op.kind !== StructureKind.Visit &&
      // Static text is plain markup, expressible like a markup string.
      op.kind !== StructureKind.Text &&
      // A known child (a template's root or a sibling define body) composes
      // when expressible; a lazy site expresses as its marker (the shell
      // composes a server-only one).
      !(
        op.kind === StructureKind.Child &&
        (op.load ||
          !op.renderer ||
          isShellExpressible(
            op.renderer.kind === StructureKind.ExportRef
              ? op.renderer.program.section!
              : op.renderer.section,
            visiting,
          ))
      )
    ) {
      return false;
    }
  }
  // Nested branches, boundaries, content shells, and (interactive) boundary
  // content arrive through the walk or entries; nothing else is expressible.
  const interactive = getProgram().node.extra.isInteractive;
  return !getChildSections(section).some(
    (child) =>
      !child.isBranch &&
      !child.isBoundary &&
      !child.contentShell &&
      !(child.boundaryContent && interactive) &&
      // Content nothing names or rebuilds leaves nothing for a shell to lack.
      contentNeedsShell(child, interactive),
  );
}

// A scriptless page has only shells; elsewhere a shell serves content a
// site names or a patch may rebuild, or a renderer that cannot mount a child.
function contentNeedsShell(section: Section, interactive: boolean | undefined) {
  return (
    !interactive ||
    (!getSectionRegisterReasons(section) &&
      (contentIsPatched(section) || contentMayConstruct(section))) ||
    (hasPatchedChild(section) && contentMayConstruct(section))
  );
}

// A known child site in a non-stateful section pairs from patches; the
// section's client renderer never mounts it, so a construct needs the shell.
function hasPatchedChild(section: Section) {
  return !!section.structure?.some(
    (op) => typeof op === "object" && op.kind === StructureKind.Child,
  );
}

// Await bodies ship as their construct's `await` shells, never as
// standalone content shells nothing references.
function isAwaitBody(section: Section) {
  return !!section.parent?.constructSetups?.some((s) => s.body === section);
}

// The shell's template and walk strings when both are fully static.
// A shell the client rebuilds from its template alone (no walk, no setup).
function isStaticShell(section: Section) {
  const shell = getStaticShell(section);
  return !!shell && !shell[1];
}

function getStaticShell(section: Section) {
  if (!isShellExpressible(section)) return;
  const { writes, walks } = getSectionMeta(section);
  const walkLiteral = trimTrailingExits(walks);
  if (!t.isStringLiteral(writes) || !writes.value) return;
  // A fully static branch claims nothing, so an empty walk string is valid.
  if (walkLiteral && !t.isStringLiteral(walkLiteral)) return;
  return [writes.value, walkLiteral?.value ?? ""] as const;
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
