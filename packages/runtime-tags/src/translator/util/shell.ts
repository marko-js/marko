import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import normalizeStringExpression from "./normalize-string-expression";
import { isCapturePathSection } from "./persisted/structure";
import { forEachSection, type Section, StructureKind } from "./sections";
import { getResumeRegisterId } from "./signals";
import { createProgramState } from "./state";
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
  forEachSection((section) => {
    // Every capture-position branch body ships a shell, except
    // client-reselectable bodies: they never construct from a frame.
    if (
      !section.isBranch ||
      !isCapturePathSection(section) ||
      section.isClientReselectable
    ) {
      return;
    }
    const shell = buildSectionShell(section);
    // Frame headers reserve `;`/`,`/space, which neither ids (normalized
    // at the source) nor walk codes can carry; the template part is free.
    if (shell) {
      const id = getShellId(section);
      (getProgram().node.extra.persistedShells ??= {})[id] = shell[1]
        ? `${id};${shell[1]};${shell[0]}`
        : `${id},${shell[0]}`;
    }
  });
}

export function getShellId(section: Section) {
  return getResumeRegisterId(section, "shell");
}

// A construct blocker drops the section's shell: patches diverging to it
// fail closed to a document navigation. Enclosing branches of a
// client-reselectable selection derive as blocked; translate observations
// (state-fed holes/attrs, server effects) add theirs via the recorder.
const [getShellBlockers] = createProgramState(() => {
  const blocked = new Set<Section>();
  forEachSection((section) => {
    if (section.isClientReselectable) {
      for (let cur = section.parent; cur?.parent; cur = cur.parent) {
        if (cur.isBranch) blocked.add(cur);
      }
    }
  });
  return blocked;
});

export function recordConstructBlocker(section: Section, _reason: string) {
  getShellBlockers().add(section);
}

export function isShellDropped(section: Section) {
  return getShellBlockers().has(section);
}

export function getDroppedShellIds() {
  return [...getShellBlockers().keys()].map(getShellId);
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
  // A nested branch leaves only its marker in this shell (it constructs
  // from its own shell during the walk); any other child section carries
  // content the shell cannot express.
  let contentChild = false;
  forEachSection((child) => {
    contentChild ||= child.parent === section && !child.isBranch;
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
