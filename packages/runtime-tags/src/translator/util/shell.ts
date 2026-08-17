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
    /** Patchable branch shells, pre-serialized as frame records during
     * analyze so the html output registers them without a dom compile. */
    persistedShells?: Record<string, string>;
  }
}

export function getShells() {
  return getProgram().node.extra.persistedShells;
}

// Builds every branch shell as pre-serialized frame chunks the html
// output registers as data.
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
    const shell = buildSectionShell(section);
    // Frame headers reserve `;`/`,`/space, which neither ids (normalized
    // at the source) nor walk codes can carry; the template part is free.
    if (shell) {
      // The id interns even for a blocked shell so register ids stay stable.
      const id = getShellId(section);
      // An interactive page's dom module registers await body content. A
      // scriptless page never loads one, so each body ships as its own
      // record instead; an inexpressible body blocks the branch (fail
      // closed) rather than bundle more than a non-persisted page would.
      const chain: Section[] = [];
      const bodyRecords: Record<string, string> = {};
      if (!interactive && !buildAwaitBodyRecords(section, bodyRecords, chain)) {
        section.shellBlocked ??= ShellBlocker.inexpressibleAwaitBody;
      }
      if (!section.shellBlocked) {
        keep.add(section);
        for (const body of chain) keep.add(body);
        const records = (getProgram().node.extra.persistedShells ??= {});
        Object.assign(records, bodyRecords);
        records[id] = shell[1]
          ? `${id};${shell[1]};${shell[0]}`
          : `${id},${shell[0]}`;
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
    const shell = buildSectionShell(section);
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
  records: Record<string, string>,
  chain: Section[],
) {
  for (const { binding, body } of section.constructSetups || []) {
    const shell = !body.shellBlocked && buildSectionShell(body);
    if (!shell || !buildAwaitBodyRecords(body, records, chain)) return false;
    const id = getResumeRegisterId(section, binding, "await");
    records[id] = shell[1]
      ? `${id};${shell[1]};${shell[0]}`
      : `${id},${shell[0]}`;
    chain.push(body);
  }
  return true;
}

export function getShellId(section: Section) {
  return getResumeRegisterId(section, "shell");
}

// A branch's shell is its resolved structure — the same inert template and
// walk string its renderer would ship. Anything resolution cannot reduce to
// plain strings (child renderers, unresolved refs) leaves the branch
// shell-less: patches diverging to it fail closed to a document navigation.
function buildSectionShell(section: Section) {
  if (!section.structure) return;
  for (const op of section.structure) {
    if (typeof op === "object" && op.kind !== StructureKind.Visit) return;
  }
  // A nested branch or boundary leaves only its marker in this shell
  // (it pairs or constructs during the walk); any other child section
  // carries content the shell cannot express.
  let contentChild = false;
  forEachSection((child) => {
    contentChild ||=
      child.parent === section && !child.isBranch && !child.isBoundary;
  });
  if (contentChild) return;

  // Every op is a string, step, or visit, so both projections are strings.
  const { writes, walks } = resolveStructure(section);
  const template = normalizeStringExpression(writes as string[], true);
  const walkLiteral = trimTrailingExits(
    normalizeStringExpression(walks as string[], true),
  );
  if (!t.isStringLiteral(template) || !template.value) return;
  // A fully static branch claims nothing, so an empty walk string is valid.
  if (walkLiteral && !t.isStringLiteral(walkLiteral)) return;

  return [template.value, walkLiteral?.value ?? ""] as const;
}
