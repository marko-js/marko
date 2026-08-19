import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import * as ShellBlocker from "./constants/shell-blocker";
import normalizeStringExpression from "./normalize-string-expression";
import { isBranchPathSection, isStatefulBranch } from "./persisted/structure";
import { addRuntimeFeatureAsset } from "./runtime";
import {
  forEachSection,
  forEachSectionReverse,
  getSectionRegisterReasons,
  type Section,
  StructureKind,
} from "./sections";
import { getResumeRegisterId } from "./signals";
import { getSectionMeta, trimTrailingExits } from "./structure";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** Patchable shell records by id: the branch (or await body) section
     * whose structure the html output serializes as a frame record. */
    persistedShells?: Record<string, Section>;
  }
}

export function getShells() {
  return getProgram().node.extra.persistedShells;
}

// Decides every branch shell (expressibility, blockers) so the html output
// serializes the kept sections as frame records.
export function buildShells() {
  // Enclosing branches of stateful structure also construct
  // unfaithfully: the frame cannot reproduce the selection inside them.
  forEachSection((section) => {
    if (isStatefulBranch(section)) {
      for (let cur = section.parent; cur?.parent; cur = cur.parent) {
        if (cur.isBranch) {
          cur.shellBlocked ??= ShellBlocker.statefulEnclosure;
        }
      }
    }
  });
  const interactive = getProgram().node.extra.isInteractive;
  const keep = new Set<Section>();
  const records = (getProgram().node.extra.persistedShells ??= {});
  // A content body nothing registers ships as a shell record (a dynamic tag
  // entry constructs by id, a static one rides its slot); static boundary
  // content is a record too.
  forEachSectionReverse((section) => {
    if (
      !section.parent ||
      section.isBranch ||
      section.isBoundary ||
      isStatefulBranch(section)
    ) {
      return;
    }
    if (section.boundaryContent) {
      if (isStaticRecord(section)) {
        section.contentRecord = "static";
        records[getResumeRegisterId(section, "content")] = section;
        addRuntimeFeatureAsset("patch-content");
      }
    } else if (
      (!interactive || !getSectionRegisterReasons(section)) &&
      isShellExpressible(section)
    ) {
      const chain: Section[] = [];
      const bodyRecords: Record<string, Section> = {};
      if (interactive || buildAwaitBodyRecords(section, bodyRecords, chain)) {
        // Only a slot the client dereferences rides in-band.
        section.contentRecord =
          getSectionRegisterReasons(section) && isStaticRecord(section)
            ? "static"
            : true;
        if (section.contentRecord === "static") {
          addRuntimeFeatureAsset("patch-content");
        }
        keep.add(section);
        for (const body of chain) keep.add(body);
        Object.assign(records, bodyRecords);
        records[getResumeRegisterId(section, "content")] = section;
      }
    }
  });
  forEachSection((section) => {
    // Every branch-path body ships a shell, except
    // stateful bodies: they never construct from a frame.
    if (
      !section.isBranch ||
      !isBranchPathSection(section) ||
      isStatefulBranch(section)
    ) {
      return;
    }
    if (isShellExpressible(section)) {
      // The id interns even for a blocked shell so register ids stay stable.
      const id = getShellId(section);
      // An interactive page's dom module registers await body content. A
      // scriptless page never loads one, so each body ships as its own
      // record instead; an inexpressible body blocks the branch (fail
      // closed) rather than bundle more than a non-persisted page would.
      const chain: Section[] = [];
      const bodyRecords: Record<string, Section> = {};
      if (!interactive && !buildAwaitBodyRecords(section, bodyRecords, chain)) {
        section.shellBlocked ??= ShellBlocker.inexpressibleAwaitBody;
      }
      if (!section.shellBlocked) {
        keep.add(section);
        for (const body of chain) keep.add(body);
        Object.assign(records, bodyRecords);
        records[id] = section;
      }
    }
  });
  // Only kept sections' awaits construct: their `Pending` patches carry a
  // content id and (interactive) their body registers in the dom output.
  forEachSection((section) => {
    if (!keep.has(section)) section.constructSetups = undefined;
  });
}

// Body records reuse the shell record grammar; nested awaits recurse so a
// constructed body can itself construct the awaits it contains.
function buildAwaitBodyRecords(
  section: Section,
  records: Record<string, Section>,
  chain: Section[],
) {
  for (const { binding, body } of section.constructSetups || []) {
    if (
      body.shellBlocked ||
      !isShellExpressible(body) ||
      !buildAwaitBodyRecords(body, records, chain)
    ) {
      return false;
    }
    records[getResumeRegisterId(section, binding, "await")] = body;
    chain.push(body);
  }
  return true;
}

export function getShellId(section: Section) {
  return getResumeRegisterId(section, "shell");
}

// A branch's shell is its resolved structure (known child templates
// included); anything else leaves it shell-less, so divergence fails closed.
function isShellExpressible(section: Section) {
  if (!section.structure) return false;
  for (const op of section.structure) {
    if (
      typeof op === "object" &&
      op.kind !== StructureKind.Visit &&
      // A known child composes when a construct can wire it: no tag var
      // (only the branch's setup returns it), no boundary in its root.
      !(
        op.kind === StructureKind.Child &&
        !op.hasVar &&
        op.renderer?.kind === StructureKind.ExportRef &&
        isChildRootExpressible(op.renderer.program)
      )
    ) {
      return false;
    }
  }
  // Nested branches, boundaries and recorded content bodies arrive through
  // the walk or entry data; any other child section the shell cannot express.
  let contentChild = false;
  forEachSection((child) => {
    contentChild ||=
      child.parent === section &&
      !child.isBranch &&
      !child.isBoundary &&
      !child.contentRecord;
  });
  return !contentChild;
}

function isChildRootExpressible(program: t.ProgramExtra) {
  const root = program.section!;
  if (!isShellExpressible(root)) return false;
  for (const child of program.sections || []) {
    if (child.isBoundary) return false;
  }
  return true;
}

// The shell's template and walk strings when both are fully static.
// A record the client rebuilds from its template alone (no walk, no setup).
function isStaticRecord(section: Section) {
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

// The frame record `id marker;walks;template` (`,` for `;walks;` when the
// walk is empty): the section's dom template parts, child imports included.
export function buildShellRecord(id: string, section: Section, marker = "") {
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
