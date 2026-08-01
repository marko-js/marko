import { types as t } from "@marko/compiler";

import normalizeStringExpression from "./normalize-string-expression";
import { type Section, StructureKind } from "./sections";
import { getResumeRegisterId } from "./signals";
import { createProgramState } from "./state";
import { resolveStructure, trimTrailingExits } from "./structure";

declare module "@marko/compiler" {
  export interface MarkoMeta {
    /** Patchable branch shells, pre-serialized as frame chunks
     * (`,[id,template,walks]`), recorded during analyze so the html
     * output can register them without touching the dom compile. */
    persistedShells?: Record<string, string>;
  }
}

// Deferred until program analyze exit: branch child bindings do not exist
// yet when the conditional's own analyze runs.
const [getShellRoots] = createProgramState<Section[]>(() => []);

export function recordShellRoot(section: Section) {
  getShellRoots().push(section);
}

// Builds every recorded branch shell into `metadata.marko.persistedShells`
// (pre-serialized frame chunks the html output registers as data).
export function buildRecordedShells(file: t.BabelFile) {
  const sections = file.path.node.extra?.sections;
  for (const section of getShellRoots()) {
    const shell = buildSectionShell(section, sections);
    if (shell) {
      const id = getShellId(section);
      (file.metadata.marko.persistedShells ??= {})[id] =
        `,[${JSON.stringify(id)},${JSON.stringify(shell[0])},${JSON.stringify(shell[1])}]`;
    }
  }
}

export function getShellId(section: Section) {
  return getResumeRegisterId(section, "shell");
}

// A branch with a state-fed hole cannot construct faithfully from an inert
// shell (nothing re-renders the hole until its state next changes).
const [getDroppedShells] = createProgramState(() => new Set<Section>());

export function dropSectionShell(section: Section) {
  getDroppedShells().add(section);
}

export function isShellDropped(section: Section) {
  return getDroppedShells().has(section);
}

export function getDroppedShellIds() {
  return [...getDroppedShells()].map(getShellId);
}

// A branch's shell is its resolved structure — the same inert template and
// walk string its renderer would ship. Anything resolution cannot reduce to
// plain strings (child renderers, unresolved refs) leaves the branch
// shell-less: patches diverging to it fail closed to a document navigation.
function buildSectionShell(section: Section, sections?: Section[]) {
  if (!section.structure) return;
  for (const op of section.structure) {
    if (typeof op === "object" && op.kind !== StructureKind.Visit) return;
  }
  // A child section means content the shell cannot carry (nested control
  // flow or a tag with its own renderer), even though the branch's own ops
  // look inert.
  if (sections?.some((child) => child.parent === section)) return;

  // Every op is a string, step, or visit, so both projections are strings.
  const { writes, walks } = resolveStructure(section);
  const template = normalizeStringExpression(writes as string[], true);
  const walkLiteral = trimTrailingExits(
    normalizeStringExpression(walks as string[], true),
  );
  if (
    !t.isStringLiteral(template) ||
    !template.value ||
    !t.isStringLiteral(walkLiteral) ||
    !walkLiteral.value
  ) {
    return;
  }

  return [template.value, walkLiteral.value] as const;
}
