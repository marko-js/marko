import { types as t } from "@marko/compiler";
import { getFile, getProgram } from "@marko/compiler/babel-utils";

import { type ReferencedBindings } from "./bindings";
import buildStringExpression from "./build-string-expression";
import { createAnalysisMemo } from "./cyclic-memo";
import { isOptimize, isPatch } from "./marko-config";
import { some } from "./optional";
import {
  contentMayCreate,
  getPatchFill,
  namesBodyOwner,
  patchCreates,
  sectionHasServerEffect,
  writesSeed,
} from "./patch/refresh";
import {
  inStatefulBranch,
  isStatefulBranch,
  patchWrites,
} from "./patch/structure";
import { getSourcesForRef } from "./reasons";
import { linkRuntimeFeature } from "./runtime";
import { isSectionRendererElided } from "./section-renderer";
import {
  forEachSection,
  forEachSectionReverse,
  getRendererReason,
  type Section,
  StructureKind,
} from "./sections";
import {
  getResumeRegisterId,
  getSignalRegisterId,
  getSignals,
} from "./signals";
import { getSectionMeta, trimTrailingExits } from "./structure";
import { getWriteReason } from "./write-guard";

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
  forEachSectionReverse((section) => {
    // Kept root awaits let `Pending` carry a body shell id; the root
    // ships under the template id so a dynamic tag entry can create it.
    if (!section.parent) {
      buildAwaitBodyShells(section, shells);
      shells[getFile().metadata.marko.id] = section;
      return;
    }
    if (section.branch?.optional) return;
    if (
      section.branch ? shipsBoundaryShell(section) : shipsContentShell(section)
    ) {
      addShell(shells, section, "content");
    }
  });
  forEachSection((section) => {
    if (shipsBranchShell(section)) {
      addShell(shells, section, "shell");
    }
    // Shells settle which scopes a flush seeds, by plain writes; the link is
    // page-level, as a flush may seed a scope of a template whose module never loads.
    if (some(section.bindings, writesSeed)) {
      linkRuntimeFeature("patches/write");
    }
    // A `<define>` body's patch links name its owner where a flush may create
    // the call below where it is defined (`namesBodyOwner`).
    if (some(section.callSections, (call) => namesBodyOwner(call, section))) {
      linkRuntimeFeature("patches/child-owner");
    }
    if (shipsRendererShell(section)) {
      linkRuntimeFeature("patches/registered-content");
    }
  });
}

// Content a patch may create ships a shell unless stateful; boundary content's
// slot resolves by its registered id.
export function shipsContentShell(section: Section) {
  return (
    isPatch() &&
    !!section.parent &&
    !section.branch &&
    !section.boundaryContent &&
    !section.dropped &&
    contentMayCreate(section) &&
    !isStatefulBranch(section)
  );
}

// Content a patch creates from the renderer the page registers, so its shell ships
// no markup; a lazy child the shell composes renders behind a marker there.
export const [createsFromRenderer] = createAnalysisMemo(
  (section: Section) =>
    shipsContentShell(section) &&
    registersRenderer(section) &&
    !section.structure?.some(
      (op) =>
        typeof op === "object" && op.kind === StructureKind.Child && !!op.load,
    ),
  false,
);

// Whether `_content` registers the section's renderer whenever its module loads:
// by its own reason, or passed by a parent that does to a tag that isn't lazy.
const [registersRenderer] = createAnalysisMemo(
  (section: Section): boolean =>
    !!section.parent &&
    !section.branch &&
    !isSectionRendererElided(section) &&
    (!!getRendererReason(section) ||
      (!section.derives?.tag.tagNameLoad && registersRenderer(section.parent))),
  false,
);

// Content created from its renderer runs its shell's setup ids in place of the
// renderer's setup and params, so ships a shell only where it has either.
function shipsRendererShell(section: Section) {
  return (
    createsFromRenderer(section) && (section.hasSetupWork || !!section.params)
  );
}

// Ships the section's shell, under its register id of `type`, with its await
// bodies'.
function addShell(
  shells: Record<string, Section>,
  section: Section,
  type: "content" | "shell",
) {
  buildAwaitBodyShells(section, shells);
  shells[getResumeRegisterId(section, type)] = section;
}

// Body shells reuse the branch grammar; nested awaits recurse so a
// created body can itself create the awaits it contains.
function buildAwaitBodyShells(
  section: Section,
  shells: Record<string, Section>,
) {
  for (const body of section.children) {
    if (body.branch?.await) {
      buildAwaitBodyShells(body, shells);
      shells[getResumeRegisterId(section, body.branch.nodeBinding, "await")] =
        body;
    }
  }
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

// Whether a shell of the section ships its created scope's inits: a root's,
// a branch's shipped shell, or a content or boundary body's a patch creates.
export function shipsShellInits(section: Section) {
  return (
    !section.parent ||
    (section.branch?.optional
      ? shipsBranchShell(section) && !sectionHasServerEffect(section)
      : (section.branch
          ? shipsBoundaryShell(section)
          : shipsContentShell(section)) && patchCreates(section))
  );
}

// A flush may create a branch-path body outside stateful structure.
function shipsBranchShell(section: Section) {
  return !!section.branch?.optional && patchWrites(section);
}

// A boundary creates from its content shell, never inside a stateful branch.
function shipsBoundaryShell(section: Section) {
  return !isStatefulBranch(section) && !inStatefulBranch(section.parent!);
}

// The shell a patch creates a body from, as a writer's argument: `0` for none.
export function getShellIdArg(section: Section | undefined) {
  const id = section && getShippedShellId(section);
  return id ? t.stringLiteral(id) : t.numericLiteral(0);
}

// An effect a created scope's own renders queue (an init, seed, or item write cascades into
// it; its own `<let>` only where seeded whole): its setup ids leave it to those renders.
export function isQueuedOnCreate(section: Section, refs: ReferencedBindings) {
  return (
    some(
      getSourcesForRef(refs)?.state,
      (state) =>
        state.section !== section ||
        !!state.assignments ||
        !!getWriteReason(state),
    ) ||
    some(refs, (ref) => ref.section === section && !!getPatchFill(ref).fill)
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
      ids += (ids && " ") + getSignalRegisterId(allSignals[i]);
    }
  }
  return ids;
}

// The shell `id marker;walks;template` (`,` for `;walks;` when the walk is
// empty): the section's dom template parts, none where the client registers them.
export function buildShell(id: string, section: Section, marker = "") {
  // A debug build marks content with a `<return>` for the client's check of
  // a dynamic tag variable over it.
  const head =
    (section.returnValueExpr && !isOptimize() ? "^" : "") +
    id +
    (marker && " " + marker);
  if (createsFromRenderer(section)) {
    return t.stringLiteral(shipsRendererShell(section) ? head + "," : "");
  }
  const { writes, walks } = getSectionMeta(section);
  const walkExpr = trimTrailingExits(walks);
  const walkless =
    !walkExpr || (walkExpr.type === "StringLiteral" && !walkExpr.value);
  const parts: (string | t.Expression)[] = [head + (walkless ? "," : ";")];
  if (!walkless) parts.push(walkExpr!, ";");
  if (writes) parts.push(writes);
  return buildStringExpression(parts, true)!;
}
