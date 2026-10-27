import { types as t } from "@marko/compiler";
import { getProgram, loadFileForTag } from "@marko/compiler/babel-utils";

import {
  type Binding,
  bindingUtil,
  compareReferences,
  type Intersection,
  type IntersectionMeta,
  type ParamBinding,
  type ReferencedBindings,
} from "./bindings";
import * as ContentType from "./constants/content-type";
import type * as Step from "./constants/step";
import * as StructureKind from "./constants/structure-kind";
import { generateUid, generateUidIdentifier } from "./generate-uid";
import { isCoreTag, isCoreTagName } from "./is-core-tag";
import {
  addSorted,
  find,
  findIndexSorted,
  type OneMany,
  type Opt,
  Sorted,
  type SortedOpt,
  forEach,
  reduce,
} from "./optional";
import {
  isConditionalReason,
  type KnownExprs,
  mapBodyParams,
  mapParamReason,
  type Reason,
  setParamReasonGroups,
} from "./reasons";
import { type ReferencedExtra } from "./references";
import { type Slot } from "./slots";
import { getReasonForBinding } from "./solve-reasons";
import { ALWAYS, mergeSources, type Sources } from "./sources";
import { createOutputSectionState } from "./state";
import { getTagContentType, getTagFacts } from "./tag-facts";
import { type LoadImportConfig } from "./tag-import";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";
import { getSectionWriteReason, getSlotWriteReason } from "./write-guard";

// A set of the section's params that reasons wait on together; each
// call site passes whether the group changed.
export type ParamReasonGroup = NonNullable<Sources["param"]>;
export type ParamReasonGroups = [ParamReasonGroup, ...ParamReasonGroup[]];

type ContentType = ContentType.Value;
export { ContentType, StructureKind };

// Babel nodes and functions never enter the structure stream; a child's
// renderer is a plain descriptor resolution interprets per compile, deriving
// its template and walks identifiers.
export type StructureRef = StructureSectionRef | StructureExportRef;

// A sibling section's declared template/walks constants.
export interface StructureSectionRef {
  kind: typeof StructureKind.SectionRef;
  section: Section;
}

// A child template's exports, imported unless the child is this program.
export interface StructureExportRef {
  kind: typeof StructureKind.ExportRef;
  program: t.ProgramExtra;
  path: string;
  hint: string;
}

// One ordered stream of client structure ops per section, recorded in analyze
// traversal order; each output resolves what it needs from it.
export type StructureOp =
  | string // static markup
  | Step.Value // enter/exit a node
  | StructureText
  | StructureNode
  | StructureChild
  | StructureModuleRead;

// Static text written into the markup; distinguished from markup strings so
// resolution knows which template edges parse as text nodes.
export interface StructureText {
  kind: typeof StructureKind.Text;
  value: string;
}

// A node client code addresses, held in its dom binding: one the markup
// renders, or a `<!>` marker that what renders in its place replaces.
export interface StructureNode {
  kind: typeof StructureKind.Node;
  // Set at an element's exit, once only-child control flow may have bound it;
  // still unset there, the element is not addressed and the op drops.
  binding: Binding | undefined;
  marker: boolean;
}

export interface StructureChild {
  kind: typeof StructureKind.Child;
  name: string;
  binding: Binding;
  renderer?: StructureRef;
  // A lazy child: its import's load config. It renders at the marker before
  // it, which the walk steps over.
  load?: LoadImportConfig;
}

// A module read written into the markup, read when the module loads.
export interface StructureModuleRead {
  kind: typeof StructureKind.ModuleRead;
  read: string[];
}

export interface Section {
  id: number;
  name: string;
  loc: t.SourceLocation | undefined;
  depth: number;
  parent: Section | undefined;
  children: Section[];
  program: Section;
  params: undefined | ParamBinding;
  /** The attribute tag `<for>` params this content reads, held as its own
   * bindings that the loop binds as it creates it. */
  localClosures: ReferencedBindings;
  referencedClosures: ReferencedBindings;
  bindings: ReferencedBindings;
  hoisted: ReferencedBindings;
  /** The closures its `<for>` rows read only by comparing them to the row's
   * key, which a row selector updates. */
  selector: { key: Binding; closures: Set<Binding> } | undefined;
  /** The canonical intersections its work waits on, once ids allocate. */
  intersections: Map<Intersection, IntersectionMeta> | undefined;
  /** The slots of its scope, its own and its bindings'. */
  slots: SortedOpt<Slot>;
  /** When client code reads anything in its scope: its slots' reasons merged. */
  reason: undefined | Reason;
  paramReasonGroups: ParamReasonGroups | undefined;
  /** Its params a branch expression derives from, here or in a child they are
   * passed to (structural params). */
  structuralParams: SortedOpt<Binding> | undefined;
  returnValueExpr: t.NodeExtra | undefined;
  isHoistThrough: true | undefined;
  branchExpr: t.NodeExtra | undefined;
  /** For a `<define>` body or a template rendering itself, the sections whose
   * direct calls render it. */
  callSections: SortedOpt<Section>;
  /** The known tags rendering in it, in analyze order. */
  knownTags: t.MarkoTagExtra[] | undefined;
  /** The content's rendering tag (its extra), and each child binding that
   * derives from the content, at `properties`. */
  derives:
    | {
        tag: t.MarkoTagExtra;
        binding: OneMany<Binding>;
        properties: Opt<string>;
        exprs: KnownExprs | undefined;
      }
    | undefined;
  /** Content a known child never reads, which no output renders. */
  dropped: boolean;
  hasAbortSignal: boolean;
  /** Count of distinct `$signal` expression roots; analyze allocates each
   * root's abort id from this so translates read, never re-derive. */
  abortSignalExprs: number;
  /** Its expressions that read `$global` keys as they evaluate. */
  globalReadExprs: ReferencedExtra[] | undefined;
  readsOwner: boolean;
  /** Whether analysis found work keyed by setup in the section, or in a
   * `<define>` body or template it calls in place. */
  hasSetupWork: boolean;
  /** Its tag, which renders it in place into branch scopes at the tag's node
   * binding, and whether its branch expression's value can leave it unrendered. */
  branch:
    | {
        nodeBinding: Binding;
        optional: boolean;
        /** An `<if>` branch's place in its chain, the renderer index it renders as. */
        index?: number;
        /** An `<await>` body, made with its owner: its promise settles into it. */
        await?: true;
      }
    | undefined;
  /** A `<try>`'s `@catch` or `@placeholder` body, which renders in the
   * try's place on an error or while its body is pending. */
  boundaryContent: false | "catch" | "placeholder";
  /** Where it sits among the sections around it, once bindings resolve. */
  enclosing: {
    /** On the branch path: no dropped content or boundary content reading no
     * params around it. */
    branchPath: boolean;
    /** Content a consumer or a `<try>` renders encloses it (inclusive). */
    inContentSection: boolean;
    /** The nearest section around it (inclusive) that is no optional branch:
     * only a chain of optional branches composes per-hop closure builders. */
    nonOptionalAncestor: Section;
    /** The nearest `<await>` or `<try>` body around it (inclusive). */
    awaitOrTryBody: Section | undefined;
  };
  content: null | {
    startType: ContentType;
    endType: ContentType;
    singleChild: boolean;
  };
  // Null for a section compiled output never renders (class-API interop
  // bodies); recorders skip it and descendants inherit it.
  structure: StructureOp[] | null;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    section?: Section;
    sections?: Section[];
  }

  export interface MarkoTagBodyExtra {
    section?: Section;
  }
}

export const sectionUtil = new Sorted(function compareSections(
  a: Section,
  b: Section,
) {
  return a.id - b.id;
});

export function ensureBodySection(
  path: t.NodePath<t.MarkoTagBody | t.Program>,
): Section | undefined {
  const extra = (path.node.extra ??= {});
  let section = extra.section;

  if (!section && (path.type === "Program" || path.get("body").length)) {
    const parentTag = path.parentPath?.isMarkoTag()
      ? path.parentPath
      : undefined;
    const parentSection = path.parentPath
      ? ensureSection(path.parentPath)
      : undefined;
    const sectionName = parentTag
      ? generateUid(
          (isCoreTagName(parentTag, "define") &&
          t.isIdentifier(parentTag.node.var)
            ? parentTag.node.var.name
            : parentTag.get("name").toString()) + "_content",
        )
      : "";
    const programExtra = (getProgram().node.extra ??= {});
    const sections = (programExtra.sections ??= []);
    section = extra.section = {
      id: sections.length,
      name: sectionName,
      loc: parentTag?.node.name.loc || undefined,
      depth: parentSection ? parentSection.depth + 1 : 0,
      parent: parentSection,
      children: [],
      program: undefined as unknown as Section,
      params: undefined,
      localClosures: undefined,
      referencedClosures: undefined,
      bindings: undefined,
      hoisted: undefined,
      selector: undefined,
      intersections: undefined,
      isHoistThrough: undefined,
      slots: undefined,
      reason: undefined,
      paramReasonGroups: undefined,
      structuralParams: undefined,
      returnValueExpr: undefined,
      content: getContentInfo(path),
      branchExpr: undefined,
      callSections: undefined,
      knownTags: undefined,
      derives: undefined,
      dropped: !!extra.dropped,
      hasAbortSignal: false,
      abortSignalExprs: 0,
      globalReadExprs: undefined,
      readsOwner: false,
      hasSetupWork: false,
      branch: undefined,
      boundaryContent: false,
      enclosing: undefined as unknown as Section["enclosing"],
      structure: parentSection && !parentSection.structure ? null : [],
    };
    if (parentSection) {
      section.program = parentSection.program;
      parentSection.children.push(section);
    } else {
      section.program = section;
    }
    sections.push(section);
  }

  return section;
}

export function ensureSection(path: t.NodePath<any>) {
  let cur = path;

  while (true) {
    if (
      cur.type === "Program" ||
      (cur.type === "MarkoTagBody" &&
        !cur.node.attributeTags &&
        !getTagFacts(cur.parentPath as t.NodePath<t.MarkoTag>).inlineBody)
    ) {
      return ensureBodySection(cur)!;
    }

    cur = cur.parentPath!;
  }
}

export function getSectionForBody(
  body: t.NodePath<t.MarkoTagBody | t.Program>,
) {
  return body.node.extra?.section;
}

// Where each section sits among those around it, recorded parents first once
// bindings resolve.
export function finalizeEnclosing(section: Section) {
  const enclosing = section.parent?.enclosing;
  section.enclosing = enclosing
    ? {
        branchPath:
          enclosing.branchPath &&
          !section.dropped &&
          !(
            section.boundaryContent &&
            (!section.params || section.params.pruned)
          ),
        inContentSection:
          enclosing.inContentSection ||
          (!section.branch &&
            (!!section.derives ||
              !!section.branchExpr ||
              !!section.boundaryContent)),
        nonOptionalAncestor: section.branch?.optional
          ? enclosing.nonOptionalAncestor
          : section,
        awaitOrTryBody:
          section.branch?.optional === false
            ? section
            : enclosing.awaitOrTryBody,
      }
    : {
        branchPath: true,
        inContentSection: false,
        nonOptionalAncestor: section,
        awaitOrTryBody: undefined,
      };
}

// Content analysis dropped is rendered by no output, so translate never visits it.
// Attribute tags are inputs, not content: an unread one is removed on its own.
export function removeDroppedContent(tag: t.NodePath<t.MarkoTag>) {
  if (tag.node.body.extra?.dropped) tag.node.body.body = [];
}

export function getSection(path: t.NodePath) {
  let section: Section;
  let currentPath = path;
  while ((section = currentPath.node.extra?.section as Section) === undefined) {
    currentPath = currentPath.parentPath!;
  }

  return section;
}

export const [getScopeIdIdentifier] = createOutputSectionState<t.Identifier>(
  (section) => generateUidIdentifier(`scope${section.id}_id`),
);

export const [getBranchRendererArgs, setBranchRendererArgs] =
  createOutputSectionState<
    [
      template?: t.Expression,
      walks?: t.Expression,
      setup?: t.Expression,
      params?: t.Expression,
    ]
  >();

// The `<for>` body rendered at a node, once per item: an optional branch
// outside an `<if>` chain, which numbers its branches.
export function getLoopBody(binding: Binding) {
  return find(binding.branchBodies, isLoopBody);
}

export function isLoopBody(section: Section) {
  return !!section.branch?.optional && section.branch.index === undefined;
}

export function forEachSection(fn: (section: Section) => void) {
  const { sections } = getProgram().node.extra;
  sections?.forEach(fn);
}

// For content a tag the analysis cannot resolve receives, which code it cannot
// see may render later, the closures read in it from outside it.
export function getDynamicTagContentClosures(section: Section) {
  if (section.branchExpr?.tagNameType === TagNameType.DynamicTag) {
    return getClosuresFromAbove(section, section);
  }
}

function getClosuresFromAbove(
  section: Section,
  top: Section,
): ReferencedBindings {
  // Closures are of ancestors, so those above `top` sort before it.
  let closures = bindingUtil.leadingRun(
    section.referencedClosures,
    bindingToSection,
    sectionUtil.compare,
    top,
  );
  for (const child of section.children) {
    closures = bindingUtil.union(closures, getClosuresFromAbove(child, top));
  }
  return closures;
}

// Calls `fn` with `from` and each of its parents below `to`.
export function forEachAncestorSection<A>(
  from: Section,
  to: Section,
  fn: (section: Section, arg: A) => void,
  arg: A,
) {
  for (let cur = from; cur !== to && cur.parent; cur = cur.parent) fn(cur, arg);
}

export function forEachSectionReverse(fn: (section: Section) => void) {
  const { sections } = getProgram().node.extra;
  for (let i = sections!.length; i--;) {
    fn(sections![i]);
  }
}

function getContentInfo(
  path: t.NodePath<t.Program | t.MarkoTagBody>,
): Section["content"] {
  const body = path.get("body");
  for (let endIndex = body.length; endIndex--;) {
    const end = body[endIndex];
    const endType = getNodeContentType(end, "endType");
    if (endType !== null) {
      for (let startIndex = 0; startIndex < endIndex; startIndex++) {
        const startType = getNodeContentType(body[startIndex], "startType");
        if (startType !== null) {
          return { startType, endType, singleChild: false };
        }
      }

      // A lone node's content is that of the section it inlines, or else its
      // one type at both edges.
      const inlined =
        end.type === "MarkoTag" &&
        getInlinedSection(end as t.NodePath<t.MarkoTag>);
      return inlined
        ? inlined.content
        : {
            startType: endType,
            endType,
            singleChild: endType !== ContentType.Dynamic,
          };
    }
  }

  return null;
}

export function getNodeContentType(
  path: t.NodePath<t.Statement>,
  edge: "startType" | "endType",
) {
  switch (path.type) {
    case "MarkoText":
      return ContentType.Text;
    case "MarkoPlaceholder":
      return ContentType.Placeholder;
    case "MarkoScriptlet":
    case "MarkoComment":
    case "ImportDeclaration":
    case "ExportAllDeclaration":
    case "ExportNamedDeclaration":
    case "ExportDefaultDeclaration":
      return null;
    case "MarkoTag": {
      const tag = path as t.NodePath<t.MarkoTag>;
      const tagSection = getInlinedSection(tag);
      if (!tagSection) return getTagContentType(tag);
      return tagSection.content ? tagSection.content[edge] : null;
    }
  }

  return ContentType.Dynamic;
}

// The section `structure.child` inlines; a load tag renders behind a marker.
function getInlinedSection(tag: t.NodePath<t.MarkoTag>) {
  return (
    tag.node.extra?.defineBodySection ||
    (!isCoreTag(tag) &&
      analyzeTagNameType(tag) === TagNameType.CustomTag &&
      !tag.node.extra!.tagNameLoad &&
      loadFileForTag(tag)!.ast.program.extra.section)
  );
}

export function getRendererReason(section: Section) {
  // A branch's tag reads its renderer.
  if (isOptionalBranch(section)) return false;

  // Only a component receives a dynamic tag's body as a value; SSR otherwise
  // writes just its id, to compare against the client's renderer.
  if (section.branchExpr?.tagNameType === TagNameType.NativeTag) {
    return false;
  }

  const { derives } = section;

  if (derives) {
    const derivedReasons = reduce(
      derives.binding,
      (reasons: Reason | undefined, binding) => {
        const reason = getReasonForBinding(binding, derives.properties);
        // A known call site resolves the callee's own params (a same-file
        // `<define>` included); without one only cross-file params are read
        // always.
        return mergeSources(
          reasons,
          reason &&
            (derives.exprs
              ? mapParamReason(
                  binding.section.program,
                  reason,
                  derives.exprs,
                  true,
                )
              : mapParamReason(section.program, reason, undefined, false)),
        );
      },
    );
    return derivedReasons || false;
  }

  return ALWAYS;
}

// The read renders the content it reads: as its body, or a tag named by it alone.
export function isContentRender(read: ReferencedExtra) {
  return !!(read.rendersContent || read.nameOnly);
}

export function isValueRead(read: ReferencedExtra) {
  return !isContentRender(read);
}

// Resume restores an optional branch's scopes into its owner, so a change can
// remove them; an `<await>` or `<try>` body serializes its owner link instead.
export function isOptionalBranch(
  section: Section,
): section is Section & { branch: NonNullable<Section["branch"]> } {
  return !!section.branch?.optional;
}

export function isInParentSection(binding: Binding, section: Section) {
  return section.parent?.id === binding.section.id;
}

export function isDirectClosure(section: Section, closure: Binding) {
  return !!isOptionalBranch(section) && isInParentSection(closure, section);
}

export function isDynamicClosure(section: Section, closure: Binding) {
  return !isDirectClosure(section, closure);
}

export function getDynamicClosureIndex(
  closure: Binding,
  closureSection: Section,
) {
  let index = 0;
  find(closure.closureSections, (section) => {
    if (section === closureSection) return true;
    if (isDynamicClosure(section, closure)) {
      index++;
    }

    return false;
  });
  return index;
}

export function getDirectClosures(section: Section) {
  if (isOptionalBranch(section)) {
    return bindingUtil.range(
      section.referencedClosures,
      bindingToSection,
      sectionUtil.compare,
      section.parent!,
    );
  }
}

export function isSameOrAncestorSection(section: Section, other: Section) {
  do {
    if (other === section) {
      return true;
    }
  } while ((other = other.parent!));
  return false;
}

// A section's ancestors have lower ids, so the higher id steps up.
export function getCommonSection(section: Section, other: Section) {
  let a = section;
  let b = other;
  while (a !== b) {
    if (a.id > b.id) a = a.parent!;
    else b = b.parent!;
  }
  return a;
}

// A group gates what a write reason leaves conditional; a write reason is
// conditional only where the reason is (patch keying adds `always`).
export function ensureSectionReasonGroups(section: Section) {
  if (isConditionalReason(section.reason)) {
    ensureReasonGroups(section, getSectionWriteReason(section));
  }

  forEach(section.slots, ensureSlotReasonGroups);
}

function ensureSlotReasonGroups(slot: Slot) {
  if (isConditionalReason(slot.reason)) {
    ensureReasonGroups(slot.section, getSlotWriteReason(slot));
  }
}

// The groups the section's guards test, in its own terms.
export function ensureReasonGroups(
  section: Section,
  reason: Section["reason"],
) {
  const ownReason = mapBodyParams(section, reason);
  if (isConditionalReason(ownReason)) {
    forEachParamGroup(ownReason.param, ensureParamReasonGroup);
  }
}

// A patch write asks the sources of each group its callers pass.
export function ensureCallerParamGroups(sources: Sources | undefined) {
  if (isConditionalReason(sources)) {
    for (const [section, group] of getCallerParamGroups(sources.param)) {
      ensureParamReasonGroup(section, group);
    }
  }
}

// The caller groups a patch guard asks of a set at `section`, those
// `ensureCallerParamGroups` records: client state or `always` answers it statically.
export function getConditionalCallerGroupsAt(
  sources: Sources,
  section: Section,
) {
  if (!isConditionalReason(sources)) {
    throw new Error(
      "Invalid compiler state, a patch guard cannot ask the caller groups of an unconditional set (client state or `always`).",
    );
  }
  return getCallerParamGroupsAt(sources.param, section);
}

function ensureParamReasonGroup(section: Section, group: ParamReasonGroup) {
  const { paramReasonGroups } = section;
  const groups: ParamReasonGroups = paramReasonGroups
    ? addSorted(compareReferences, paramReasonGroups, group)
    : [group];
  if (groups !== paramReasonGroups) setParamReasonGroups(section, groups);
}

export function getParamReasonGroupIndex(
  section: Section,
  group: ParamReasonGroup,
) {
  const index = findParamReasonGroupIndex(section, group);
  if (index === -1) {
    throw new Error(
      "Invalid compiler state, cannot ask for a param reason group that was not analyzed.",
    );
  }
  return index;
}

// The group's index, or `-1` where the section has none such.
export function findParamReasonGroupIndex(
  section: Section,
  group: ParamReasonGroup,
) {
  return section.paramReasonGroups
    ? findIndexSorted(compareReferences, section.paramReasonGroups, group)
    : -1;
}

// Params sort by section, so each section's are a run.
export function forEachParamGroup(
  params: Sources["param"],
  fn: (section: Section, group: ParamReasonGroup) => void,
) {
  bindingUtil.forEachRun(params, bindingToSection, sectionUtil.compare, fn);
}

// Each group of params a caller passes (`isKnownChild`), with its section:
// the call's mask reports where it updates from at render.
export function getCallerParamGroups(params: Sources["param"]) {
  return reduceParamGroups(
    params,
    addCallerParamGroup,
    [] as [Section, ParamReasonGroup][],
  );
}

function addCallerParamGroup(
  groups: [Section, ParamReasonGroup][],
  section: Section,
  group: ParamReasonGroup,
) {
  if (isKnownChild(section)) groups.push([section, group]);
  return groups;
}

// A template's root, or a `<define>` body its direct calls render: each call
// passes its params, as a known tag passes a child template's.
export function isKnownChild(section: Section) {
  return !section.parent || !!section.callSections;
}

// The caller groups a write in `section` gates on (`isCallerParamAt`).
export function getCallerParamGroupsAt(
  params: Sources["param"],
  section: Section,
) {
  return getCallerParamGroups(params).filter(([body]) =>
    isSameOrAncestorSection(body, section),
  );
}

// Whether a write in `section` gates on the param's group: a caller passes it
// to `section` or a body around it, whose scope reason `section` reads.
export function isCallerParamAt(param: Binding, section: Section) {
  return (
    isKnownChild(param.section) &&
    isSameOrAncestorSection(param.section, section)
  );
}

export function reduceParamGroups<R>(
  params: Sources["param"],
  fn: (acc: R, section: Section, group: ParamReasonGroup) => R,
  initial: R,
) {
  return bindingUtil.reduceRuns(
    params,
    bindingToSection,
    sectionUtil.compare,
    fn,
    initial,
  );
}

function bindingToSection(binding: Binding) {
  return binding.section;
}

export function setReadsOwner(from: Section, to: Section) {
  forEachAncestorSection(from, to, markReadsOwner, undefined);
}

function markReadsOwner(section: Section) {
  section.readsOwner = true;
}
