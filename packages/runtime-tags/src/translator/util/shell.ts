import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import * as ShellBlocker from "./constants/shell-blocker";
import normalizeStringExpression from "./normalize-string-expression";
import { isBranchPathSection, isStateSelected } from "./persisted/structure";
import {
  forEachSection,
  getSectionRegisterReasons,
  type Section,
  StructureKind,
} from "./sections";
import { getResumeRegisterId } from "./signals";
import { resolveStructure, trimTrailingExits } from "./structure";

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
  // Enclosing branches of state-selected structure also construct
  // unfaithfully: the frame cannot reproduce the selection inside them.
  forEachSection((section) => {
    if (isStateSelected(section)) {
      for (let cur = section.parent; cur?.parent; cur = cur.parent) {
        if (cur.isBranch) {
          cur.shellBlocked ??= ShellBlocker.stateSelectedEnclosure;
        }
      }
    }
  });
  const interactive = getProgram().node.extra.isInteractive;
  const keep = new Set<Section>();
  forEachSection((section) => {
    // Every branch-path body ships a shell, except
    // state-selected bodies: they never construct from a frame.
    if (
      !section.isBranch ||
      !isBranchPathSection(section) ||
      isStateSelected(section)
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
        const records = (getProgram().node.extra.persistedShells ??= {});
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

  // `@placeholder`/`@catch` content slot-serializes by register id. A
  // static body re-registers from entry-emitted data; anything else keeps
  // the dom module loading (a shrinking stopgap).
  forEachSection((section) => {
    // Only a slot the document registers (`_content_resume`) is ever
    // dereferenced: an unregistered one needs no record and no module.
    if (!section.boundaryContent || !getSectionRegisterReasons(section)) {
      return;
    }
    const shell = getStaticShell(section);
    if (shell && !shell[1]) {
      section.contentTemplate = shell[0];
    }
    // A dynamic body sets no template: its slot elides at translate, so a
    // delivered catch rejects to navigation rather than bundling code.
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
  // A nested branch or boundary leaves only its marker in this shell
  // (it pairs or constructs during the walk); any other child section
  // carries content the shell cannot express.
  let contentChild = false;
  forEachSection((child) => {
    contentChild ||=
      child.parent === section && !child.isBranch && !child.isBoundary;
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
function getStaticShell(section: Section) {
  if (!isShellExpressible(section)) return;
  const { writes, walks } = resolveStructure(section);
  const template = normalizeStringExpression(writes, true);
  const walkLiteral = trimTrailingExits(normalizeStringExpression(walks, true));
  if (!t.isStringLiteral(template) || !template.value) return;
  // A fully static branch claims nothing, so an empty walk string is valid.
  if (walkLiteral && !t.isStringLiteral(walkLiteral)) return;
  return [template.value, walkLiteral?.value ?? ""] as const;
}

// The frame record `id marker;walks;template` (`,` for `;walks;` when the
// walk is empty) as an html-side expression; child parts import.
export function buildShellRecord(id: string, section: Section, marker = "") {
  const { writes, walks } = resolveStructure(section);
  const template = normalizeStringExpression(writes, true);
  const walkExpr = trimTrailingExits(normalizeStringExpression(walks, true));
  const walkless =
    !walkExpr || (t.isStringLiteral(walkExpr) && !walkExpr.value);
  const parts: (string | t.Expression)[] = [
    id + (marker && " " + marker) + (walkless ? "," : ";"),
  ];
  if (!walkless) parts.push(walkExpr!, ";");
  if (template) parts.push(template);
  return normalizeStringExpression(parts, true)!;
}
