import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  importNamed,
  loadFileForImport,
} from "@marko/compiler/babel-utils";

import {
  type Binding,
  bindingUtil,
  compareReferences,
  type ReferencedBindings,
  getCanonicalBinding,
} from "./bindings";
import buildStringExpression from "./build-string-expression";
import { createAnalysisMemo } from "./cyclic-memo";
import { isOptimize, isPatch } from "./marko-config";
import { forEach, some, type SortedOpt } from "./optional";
import {
  patchMayCreate,
  getCreatedSetup,
  getPatchFill,
  runsByEntry,
  namesBodyOwner,
  patchComposes,
  patchCreates,
  getPatchWrite,
  keepsHoles,
  readsKeptInputOnClient,
  writesSeed,
  runsSubscribersByWrite,
} from "./patch/refresh";
import {
  inStatefulStructure,
  isStatefulStructure,
  patchMayFillSection,
  patchFillsSection,
} from "./patch/structure";
import {
  getClosureContents,
  getClosureRenderGroups,
  hasCallerGroupsAt,
  mayHoldReturnedFnWithFilledReferencesIn,
  runsClosureByWrite,
} from "./patch/writers";
import { getSourcesForReferencedBindings } from "./reasons";
import { callRuntime, linkRuntimeFeature } from "./runtime";
import { getScopeAccessor } from "./scope-accessor";
import { isSectionRendererElided } from "./section-renderer";
import {
  forEachSection,
  forEachSectionReverse,
  getCallerParamGroups,
  getCallerParamGroupsAt,
  getRendererReason,
  isOptionalBranch,
  type ParamReasonGroup,
  type Section,
  sectionUtil,
  StructureKind,
  type StructureOp,
} from "./sections";
import {
  getCreatedSetupId,
  getGlobalSignals,
  getResumeRegistryId,
  getSignalRegistryId,
  getSignals,
  isEffectOutsideShell,
} from "./signals";
import { bindingReaders } from "./solve-reasons";
import { type Sources } from "./sources";
import {
  createAnalysisState,
  createOutputSectionState,
  createOutputState,
} from "./state";
import { getSectionMeta, trimTrailingExits } from "./structure";
import { TagNameType } from "./tag-name-type";
import { getWriteReason } from "./write-guard";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** Its module registers a `<try>`'s boundary content a page reaches by id:
     * a renderer no shell creates whole, or a created `@catch`'s subscriptions. */
    registersBoundaryContent?: true;
  }
}

// The id a section ships its shell under (an await body may be kept as
// boundary content or through its enclosing shell's chain).
export function findShellId(section: Section, shells = getShells()) {
  for (const id in shells) if (shells[id] === section) return id;
}

// Patchable shells by id (branch, content, boundary and await bodies, the
// root): what the html output serializes as shells, built when it first asks.
export const [getShells] = createOutputState(() => {
  const shells: Record<string, Section> = {};
  forEachSectionReverse((section) => {
    if (!section.parent) {
      // Kept root awaits let `Pending` carry a body shell id.
      buildAwaitBodyShells(section, shells);
      // Under the template id for a dynamic tag entry, with its markup even
      // where the page bundles the template, which only an importer knows.
      shells[getFile().metadata.marko.id] = section;
    } else if (
      !isOptionalBranch(section) &&
      (section.boundaryContent
        ? createsFromShell(section)
        : section.branch
          ? shipsBoundaryShell(section)
          : shipsContentShell(section) ||
            // A kept dynamic tag's entry names content by its shell: the params its
            // own client code reads ride the entry only to a page that registers it.
            (readsKeptInputOnClient(section) && !clientRegisters(section)))
    ) {
      addShell(shells, section, "content");
    }
  });
  forEachSection((section) => {
    if (shipsBranchShell(section)) addShell(shells, section, "shell");
  });
  return shells;
});

// At analyze exit, what a page links for the module's patches: the fills a
// caller's params decide (read in its compile) and the module's registrations.
export function linkPatchFills() {
  const programExtra = getProgram().node.extra;
  forEachSection((section) => {
    if (keepsHoles(section)) linkRuntimeFeature("patches/client-branch");
    if (
      // Boundary content no shell creates renders by the renderer its
      // module registers.
      (section.boundaryContent && !createsFromShell(section)) ||
      // No patch pairs a shown `@catch`, which client state lower in the tree shows: its
      // reads of what a patch fills or writes, `$global`'s too, update through its module.
      (inCreatedCatch(section) &&
        (some(section.referencedClosures, isPatchUpdated) ||
          getGlobalSignals(section).size > 0))
    ) {
      programExtra.registersBoundaryContent = true;
    }
    forEach(section.bindings, recordPatchEntries);
    forEach(section.bindings, recordClientBranchContents);
    recordIntersectionRenders(section);
    forEach(section.bindings, recordClosureRenders);
  });
}

function isPatchUpdated(closure: Binding) {
  const root = getCanonicalBinding(closure);
  return !!getPatchFill(root).fill || !!getPatchWrite(root).write;
}

// A patch's fills into the binding's scope: one a caller's param decides waits
// there for the caller; the rest link page-level, as the module may not load.
function recordPatchEntries(binding: Binding) {
  const write = writesSeed(binding) || getPatchWrite(binding).write;
  const { fill } = getPatchFill(binding);
  if (!write && !fill) return;
  // A fill carries what its `<let>`'s initial value read: a caller passing content or a
  // function there links the bind it ships as.
  if (fill) {
    for (const [section, params] of getCallerParamGroups(
      binding.initialValueSources?.param,
    )) {
      const entries = getParamEntries(section);
      entries.bound = bindingUtil.union(entries.bound, params);
    }
  }
  // A live write marks its change; a created scope's seed only sets it.
  const marked = !!getPatchWrite(binding).write;
  const groups = getCallerParamGroups(
    getSourcesForReferencedBindings(binding)?.param,
  );
  for (const [section, params] of groups) {
    const entries = getParamEntries(section);
    if (fill) addParamFill(section, { params, client: true });
    if (marked) {
      entries.marked = bindingUtil.union(entries.marked, params);
    } else if (write) {
      entries.written = bindingUtil.union(entries.written, params);
    }
  }
  if (!groups.length) {
    if (fill) linkRuntimeFeature("patches/fill");
    if (write)
      linkRuntimeFeature(marked ? "patches/marked-write" : "patches/write");
  }
  // A function with filled references a known child returns that it holds binds by its record.
  if (write && mayHoldReturnedFnWithFilledReferencesIn(binding)) {
    linkRuntimeFeature("patches/marked-bind");
  }
}

// The content whose closures a patch writes that each dynamic tag renders as a client branch where its
// renderer is a template (its body, or a value its input lands), by the tag's node.
export const [getClientBranchContents] = createAnalysisState(
  () => new Map<Binding, SortedOpt<Section>>(),
);

function recordClientBranchContents(binding: Binding) {
  if (!getPatchWrite(binding).write) return;
  const contents = getClosureContents(getCanonicalBinding(binding));
  if (!contents || contents === true) return;
  const branches = getClientBranchContents();
  const add = ({ nodeBinding }: t.NodeExtra, content: Section) => {
    if (nodeBinding) {
      branches.set(
        nodeBinding,
        sectionUtil.add(branches.get(nodeBinding), content),
      );
    }
  };
  forEach(contents, (content) => {
    const { branchExpr, derives } = content;
    if (branchExpr?.tagNameType === TagNameType.DynamicTag) {
      add(branchExpr, content);
    }
    forEach(derives?.binding, (held) => {
      forEach(bindingReaders(held, derives!.properties).asInput, (read) => {
        if (read.retained) add(read, content);
      });
    });
  });
}

// A mixed intersection's render a caller's groups decide ships where its group mixes, which
// a call's client state does: it links there, as a fill's client group does.
function recordIntersectionRenders(section: Section) {
  for (const [intersection, setup] of getCreatedSetup(section)) {
    const sources =
      Array.isArray(intersection) &&
      getSourcesForReferencedBindings(intersection);
    if (setup.setup !== "mixed" || !hasCallerGroupsAt(section, sources)) {
      continue;
    }
    for (const [paramSection, client] of getCallerParamGroupsAt(
      sources.param,
      section,
    )) {
      addParamFill(paramSection, {
        params: undefined,
        client,
        render: true,
      });
    }
  }
}

// A closure a write re-runs renders under the written value's group and its
// param-selected structure's; a caller's link it where sent, as a fill's do.
function recordClosureRenders(binding: Binding) {
  forEach(binding.closureSections, (closureSection) => {
    if (
      !runsClosureByWrite(binding, closureSection) &&
      !runsSubscribersByWrite(binding, closureSection)
    ) {
      return;
    }
    const { own, structure } = getClosureRenderGroups(binding, closureSection);
    // No caller decides it: the page links what it fills.
    if (!own.length) linkRuntimeFeature("patches/render");
    for (const [section, params] of own) {
      addParamFill(section, {
        params,
        client:
          structure.reduce<Sources["param"]>(
            (all, [other, group]) =>
              other === section ? bindingUtil.union(all, group) : all,
            undefined,
          ) || true,
        render: true,
      });
    }
  });
}

// What a patch fills into a section's scopes by its params, here or in a child
// they are passed to (`linkKnownTagPatchEntries`).
export interface ParamEntries {
  fills: ParamFill[];
  written: SortedOpt<Binding>;
  marked: SortedOpt<Binding>;
  /** Params a fill carries the value of, as a bind where it is content or a function. */
  bound: SortedOpt<Binding>;
}

// A fill by its params (`params` unset: filled whatever they are), where `client`'s
// group may be the client's.
export interface ParamFill {
  params: ParamReasonGroup | undefined;
  client: ParamReasonGroup | true;
  /** A render the patch names (`patches/render`). */
  render?: true;
}

// Keyed by the section itself, which a caller's analysis reaches as the child's does.
const paramEntries = new WeakMap<Section, ParamEntries>();

export function getParamEntries(section: Section) {
  let entries = paramEntries.get(section);
  if (!entries) {
    paramEntries.set(
      section,
      (entries = {
        fills: [],
        written: undefined,
        marked: undefined,
        bound: undefined,
      }),
    );
  }
  return entries;
}

// Each fill once.
export function addParamFill(section: Section, fill: ParamFill) {
  const { fills } = getParamEntries(section);
  if (
    fills.some(
      ({ params, client, render }) =>
        !compareReferences(params, fill.params) &&
        render === fill.render &&
        (client === true
          ? fill.client === true
          : fill.client !== true && !compareReferences(client, fill.client)),
    )
  ) {
    return false;
  }
  fills.push(fill);
  return true;
}

// Boundary content a patch creates from its shell: a `@catch` a flush creates, or
// static content (no binding, closure, child section or setup) in a reachable `<try>`.
export function createsFromShell(section: Section) {
  return (
    patchCreates(section) ||
    (!section.bindings &&
      !section.referencedClosures &&
      !section.children.length &&
      !section.hasSetupWork &&
      patchMayFillSection(section.parent!))
  );
}

// Inside a `@catch` a flush creates (inclusive): the flush creates its scopes with
// the catch's, and the client renders them too, on its own errors.
export function inCreatedCatch(section: Section) {
  for (let cur: Section | undefined = section; cur; cur = cur.parent) {
    if (cur.boundaryContent === "catch" && patchCreates(cur)) return true;
  }
  return false;
}

// Content the page's bundle registers wherever this template renders: a page
// with it links the module, which registers it.
export function clientRegisters(section: Section) {
  return (
    !!getProgram().node.extra.includesClientWork &&
    registersOnClient(section) &&
    !includesLazyMarkup(section)
  );
}

// A dynamic tag whose templates the page registers: the client code that
// renders it names every template it may resolve to.
export function namesRegisteredTemplates(
  section: Section,
  tagExtra: t.MarkoTagExtra,
) {
  const programExtra = getProgram().node.extra;
  return (
    !!tagExtra.tagNameTemplates?.length &&
    !!programExtra.includesClientWork &&
    tagExtra.tagNameTemplates.every(hasRootMarkup) &&
    (registersOnClient(section) ||
      tagExtra.tagNameTemplates.every(isRegisteredImport))
  );
}

// A template whose client template is its root shell's markup.
function hasRootMarkup(template: t.ProgramExtra) {
  return !includesLazyMarkup(template.section!);
}

// A template this one's module registers (`register-default`) where it loads.
function isRegisteredImport(template: t.ProgramExtra) {
  return getRegisteredImports().has(template);
}

const [getRegisteredImports] = createAnalysisState(() => {
  const file = getFile();
  const templates = new Set<t.ProgramExtra>();
  for (const child of file.path.node.body) {
    const local =
      t.isImportDeclaration(child) &&
      child.specifiers.find(t.isImportDefaultSpecifier)?.local.name;
    if (local && child.extra?.registeredImports?.has(local)) {
      const extra = loadFileForImport(file, child.source.value)?.ast.program
        .extra;
      if (extra) templates.add(extra);
    }
  }
  return templates;
});

// Content the module registers: by its own reason, or as content its parent's
// registered renderer creates.
function registersOnClient(section: Section): boolean {
  return (
    !!section.parent &&
    !section.branch &&
    !isSectionRendererElided(section) &&
    (!!getRendererReason(section) || registersOnClient(section.parent))
  );
}

// Markup a shell composes from a lazily loaded child, through any template or
// `<define>` body it renders: the client's renderer leaves it out.
const [includesLazyMarkup] = createAnalysisMemo(
  (section: Section): boolean => section.structure!.some(composesLazyMarkup),
  false,
);

function composesLazyMarkup(op: StructureOp) {
  return (
    typeof op === "object" &&
    op.kind === StructureKind.Child &&
    (!!op.load ||
      (!!op.renderer &&
        includesLazyMarkup(
          op.renderer.kind === StructureKind.SectionRef
            ? op.renderer.section
            : op.renderer.program.section!,
        )))
  );
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
    patchMayCreate(section) &&
    !isStatefulStructure(section)
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
  shells[getResumeRegistryId(section, type)] = section;
}

// Body shells reuse the branch grammar; nested awaits recurse so a
// created body can itself create the awaits it contains.
function buildAwaitBodyShells(
  section: Section,
  shells: Record<string, Section>,
) {
  for (const body of section.children) {
    if (body.branch?.kind === "await") {
      buildAwaitBodyShells(body, shells);
      shells[
        getResumeRegistryId(section, body.branch.tag.nodeBinding, "await")
      ] = body;
    }
  }
}

export function getBranchShellId(section: Section) {
  return getResumeRegistryId(section, "shell");
}

export function getShippedBranchShellId(section: Section) {
  const id = getBranchShellId(section);
  if (getShells()[id] === section) return id;
}

// A flush may create a branch-path body outside stateful structure.
function shipsBranchShell(section: Section) {
  return isOptionalBranch(section) && patchFillsSection(section);
}

// A boundary creates from its content shell, never inside a stateful branch.
function shipsBoundaryShell(section: Section) {
  return !isStatefulStructure(section) && !inStatefulStructure(section.parent!);
}

// The shell a patch creates a body from, as a writer's argument: `0` for none.
export function getShellIdArg(section: Section | undefined) {
  const id = section && getShippedBranchShellId(section);
  return id ? t.stringLiteral(id) : t.numericLiteral(0);
}

// An effect a created scope's own renders queue (a setup, seed, or item write cascades into
// it; its own `<let>` only where seeded whole): its setup ids leave it to those renders.
export function isQueuedOnCreate(section: Section, refs: ReferencedBindings) {
  return (
    some(
      getSourcesForReferencedBindings(refs)?.state,
      (state) =>
        state.section !== section ||
        !!getPatchFill(state).fill ||
        !!getWriteReason(state),
    ) ||
    // A fill's run leaves out an effect its entry re-runs.
    (some(refs, (ref) => ref.section === section && !!getPatchFill(ref).fill) &&
      !runsByEntry(refs))
  );
}

// The section's mount effects' register ids, in resume order, for its shell
// to ship.
export function getSectionEffectRegistryIds(
  section: Section,
  skip: (referencedBindings: ReferencedBindings) => boolean,
) {
  const ids: string[] = [];
  const allSignals = Array.from(getSignals(section).values());
  for (let i = allSignals.length; i--;) {
    const { hasHTMLEffect, referencedBindings } = allSignals[i];
    if (hasHTMLEffect && !skip(referencedBindings)) {
      ids.push(getSignalRegistryId(allSignals[i]));
    }
  }
  return ids;
}

// The shell `id[|section] setupIds;walks;template` (`,` for `;walks;` when the walk
// is empty): the section's dom template parts, none where the client registers them.
export function buildShell(
  id: string,
  section: Section,
  setupIds?: t.Expression,
) {
  // A debug build marks content with a `<return>` for the client's check of
  // a dynamic tag variable over it; kept content names its section after `|`,
  // whose scopes its owner holds (main's `ClosureScopes` key).
  const parts: (string | t.Expression)[] = [
    (section.returnValueExpr && !isOptimize() ? "^" : "") +
      id +
      (keepsHoles(section) ? "|" + section.id : ""),
  ];
  if (setupIds) parts.push(setupIds);
  // Content the page's bundle registers ships its setup ids, no markup.
  if (clientRegisters(section)) return buildStringExpression(parts)!;
  const { writes, walks } = getSectionMeta(section);
  const walkExpr = trimTrailingExits(walks);
  const walkless =
    !walkExpr || (walkExpr.type === "StringLiteral" && !walkExpr.value);
  parts.push(walkless ? "," : ";");
  if (!walkless) parts.push(walkExpr!, ";");
  if (writes) parts.push(writes);
  return buildStringExpression(parts)!;
}

type ShellSetup = [setup: string[], scripts: string[]];
// Setup ids that compose an imported template's (its `$setup`, by name).
interface ComposedSetup {
  own: ShellSetup;
  composed: [hop: string, setup: ShellSetup | ComposedSetup | string][];
}

// A created scope's setup ids: those of each scope its markup composes, each
// addressed by its hop (`accessor>`, after a `>` per owner up), lead its own.
export const [getShellSetup] = createOutputSectionState<
  ShellSetup | ComposedSetup
>((section) => {
  const composed: ComposedSetup["composed"] = [];
  for (const op of section.structure!) {
    if (
      typeof op === "object" &&
      op.kind === StructureKind.Child &&
      op.renderer
    ) {
      const { renderer } = op;
      let hop = getScopeAccessor(op.binding) + ">";
      if (renderer.kind === StructureKind.SectionRef) {
        const body = renderer.section;
        // Only a body reading its owner climbs to it; else the call site owns
        // it, as its patch link names.
        if (body.readsOwner) {
          for (let cur = section; cur !== body.parent; cur = cur.parent!) {
            hop = ">" + hop;
          }
        }
        const setup = patchComposes(body) && getShellSetup(body);
        // A body reading its owner gets it from its hop: an id-less one
        // where the shell names none of its ids.
        if (
          namesBodyOwner(section, body) &&
          !(Array.isArray(setup) && hasIds(setup))
        ) {
          composed.push([hop, [[""], []]]);
        }
        if (setup) composed.push([hop, setup]);
      } else {
        const name = renderer.program.exportNames!.setup;
        // A template rendering itself composes its own export, as `resolveRef` reads it.
        composed.push([
          hop,
          renderer.program.section === getProgram().node.extra.section
            ? name
            : importNamed(
                getFile(),
                renderer.path,
                name,
                `${renderer.hint}_setup`,
              ).name,
        ]);
      }
    }
  }
  const own: ShellSetup = [
    getShellSetupIds(section),
    getSectionEffectRegistryIds(section, (refs) =>
      isEffectOutsideShell(section, refs),
    ),
  ];
  const setup: ShellSetup = [[], []];
  for (const [hop, ids] of composed) {
    if (!Array.isArray(ids)) return { own, composed };
    setup[0].push(...ids[0].map((id) => hop + id));
    setup[1].push(...ids[1].map((id) => hop + id));
  }
  setup[0].push(...own[0]);
  setup[1].push(...own[1]);
  return setup;
});

// The setup ids as the html module holds them (`[setup, scripts]`).
export function buildShellSetup(
  setup: ShellSetup | ComposedSetup | string,
): t.Expression {
  if (typeof setup === "string") return t.identifier(setup);
  if (Array.isArray(setup)) {
    return t.valueToNode(setup);
  }
  return callRuntime(
    "_shell_setup",
    buildShellSetup(setup.own),
    ...setup.composed.map(buildComposedSetup),
  );
}

function buildComposedSetup([hop, ids]: ComposedSetup["composed"][number]) {
  return t.arrayExpression([t.stringLiteral(hop), buildShellSetup(ids)]);
}

// The shell's setup marker (` setup…!scripts…`), at module load where it
// composes an imported template's; a root's reads its `$setup` export.
export function buildShellMarker(section: Section) {
  const setup = getShellSetup(section);
  if (!Array.isArray(setup)) {
    return section.parent
      ? callRuntime(
          "_shell_marker",
          buildShellSetup(setup.own),
          ...setup.composed.map(buildComposedSetup),
        )
      : callRuntime(
          "_shell_marker",
          t.identifier(getProgram().node.extra.exportNames!.setup),
        );
  }
  const [renders, scripts] = setup;
  if (hasIds(setup)) {
    return t.stringLiteral(
      " " + renders.join(" ") + (scripts.length ? "!" + scripts.join(" ") : ""),
    );
  }
}

function hasIds(setup: ShellSetup) {
  return !!(setup[0].length || setup[1].length);
}

// The setup every created scope of the section runs.
function getShellSetupIds(section: Section) {
  const ids: string[] = [];
  for (const [ref, setup] of getCreatedSetup(section)) {
    if (setup.setup === "always") {
      ids.push(getCreatedSetupId(section, ref));
    }
  }
  // No later patch pairs a created `@catch`: it subscribes its `$global` reads by
  // their ids, as a document's does on resume.
  if (inCreatedCatch(section)) {
    for (const id of getGlobalSignals(section).keys()) ids.push(id);
  }
  return ids;
}
