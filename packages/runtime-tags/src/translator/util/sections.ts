import { types as t } from "@marko/compiler";
import { getProgram, loadFileForTag } from "@marko/compiler/babel-utils";

import type { WalkCode } from "../../common/types";
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
  findSorted,
  type OneMany,
  type Opt,
  Sorted,
  type SortedOpt,
  forEach,
  reduce,
} from "./optional";
import {
  isConditionalReason,
  mapParamReason,
  mergeReasons,
  type Reason,
  setParamReasonGroups,
} from "./reasons";
import { type KnownExprs } from "./references";
import { type Slot } from "./slots";
import { getReasonForBinding } from "./solve-reasons";
import { type Sources } from "./sources";
import { createSectionState } from "./state";
import { getTagContentType, getTagFacts } from "./tag-facts";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";

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

// A sibling section's hoisted template/walks constants.
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
  | Step.Value // walk enter/exit step
  | StructureText
  | StructureVisit
  | StructureChild;

// Static text written into the markup; distinguished from markup strings so
// resolution knows which template edges parse as text nodes.
export interface StructureText {
  kind: typeof StructureKind.Text;
  value: string;
}

export interface StructureVisit {
  kind: typeof StructureKind.Visit;
  // A non-`Get` visit implies a `<!>` marker node in the markup.
  code:
    | typeof WalkCode.Get
    | typeof WalkCode.Replace
    | typeof WalkCode.DynamicTagWithVar;
  // A visit may start unclaimed until its tag's analyze exit settles the
  // only-child decision; unclaimed visits drop, letting steps collapse.
  claimed: boolean;
}

export interface StructureChild {
  kind: typeof StructureKind.Child;
  name: string;
  hasVar: boolean;
  renderer?: StructureRef;
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
  referencedHoists: ReferencedBindings;
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
  returnValueExpr: t.NodeExtra | undefined;
  isHoistThrough: true | undefined;
  branchExpr: t.NodeExtra | undefined;
  /** For a `<define>` body or a template rendering itself, the sections whose
   * direct calls render it. */
  callSections: SortedOpt<Section>;
  /** The content's rendering tag (its extra), and each child binding the
   * content feeds, at `properties`. */
  derives:
    | {
        tag: t.MarkoTagExtra;
        binding: OneMany<Binding>;
        properties: Opt<string>;
        exprs: KnownExprs | undefined;
      }
    | undefined;
  /** Content a known child never reads, which no output renders. */
  pruned: boolean;
  hasAbortSignal: boolean;
  /** Count of distinct `$signal` expression roots; analyze allocates each
   * root's `abortId` from this so translates read, never re-derive. */
  abortSignalExprs: number;
  readsOwner: boolean;
  /** Whether analysis found work keyed by setup in the section, or in a
   * `<define>` body or template it calls in place. */
  hasSetupWork: boolean;
  /** Its tag, which renders it in place into branch scopes at the tag's node
   * binding, and whether its branch expression's value can leave it unrendered. */
  branch: { nodeBinding: Binding; optional: boolean } | undefined;
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

export function startSection(
  path: t.NodePath<t.MarkoTagBody | t.Program>,
): Section | undefined {
  const extra = (path.node.extra ??= {});
  let section = extra.section;

  if (!section && (path.type === "Program" || path.get("body").length)) {
    const parentTag = path.parentPath?.isMarkoTag()
      ? path.parentPath
      : undefined;
    const parentSection = path.parentPath
      ? getOrCreateSection(path.parentPath)
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
      referencedHoists: undefined,
      bindings: undefined,
      hoisted: undefined,
      selector: undefined,
      intersections: undefined,
      isHoistThrough: undefined,
      slots: undefined,
      reason: undefined,
      paramReasonGroups: undefined,
      returnValueExpr: undefined,
      content: getContentInfo(path),
      branchExpr: undefined,
      callSections: undefined,
      derives: undefined,
      pruned: !!extra.pruned,
      hasAbortSignal: false,
      abortSignalExprs: 0,
      readsOwner: false,
      hasSetupWork: false,
      branch: undefined,
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

export function getOrCreateSection(path: t.NodePath<any>) {
  let cur = path;

  while (true) {
    if (
      cur.type === "Program" ||
      (cur.type === "MarkoTagBody" &&
        !cur.node.attributeTags &&
        !getTagFacts(cur.parentPath as t.NodePath<t.MarkoTag>).inlineBody)
    ) {
      return startSection(cur)!;
    }

    cur = cur.parentPath!;
  }
}

export function getSectionForBody(
  body: t.NodePath<t.MarkoTagBody | t.Program>,
) {
  return body.node.extra?.section;
}

// Content analysis pruned is rendered by no output, so translate never visits it.
// Attribute tags are inputs, not content: an unread one is removed on its own.
export function removePrunedContent(tag: t.NodePath<t.MarkoTag>) {
  if (tag.node.body.extra?.pruned) tag.node.body.body = [];
}

export function getSection(path: t.NodePath) {
  let section: Section;
  let currentPath = path;
  while ((section = currentPath.node.extra?.section as Section) === undefined) {
    currentPath = currentPath.parentPath!;
  }

  return section;
}

export const [getScopeIdIdentifier] = createSectionState<t.Identifier>(
  "scopeIdIdentifier",
  (section) => generateUidIdentifier(`scope${section.id}_id`),
);

export const [getBranchRendererArgs, setBranchRendererArgs] =
  createSectionState<
    [
      template?: t.Expression,
      walks?: t.Expression,
      setup?: t.Expression,
      params?: t.Expression,
    ]
  >("rendererExpression");

export function forEachSection(fn: (section: Section) => void) {
  const { sections } = getProgram().node.extra;
  sections?.forEach(fn);
}

// For content a tag the analysis cannot resolve receives, which code it cannot
// see may render later, the closures read in it from outside it.
export function getContentClosures(section: Section) {
  if (section.branchExpr?.tagNameType === TagNameType.DynamicTag) {
    return getClosuresFromAbove(section, section.depth);
  }
}

function getClosuresFromAbove(
  section: Section,
  depth: number,
): ReferencedBindings {
  let closures = bindingUtil.filter(
    section.referencedClosures,
    (closure) => closure.section.depth < depth,
  );
  for (const child of section.children) {
    closures = bindingUtil.union(closures, getClosuresFromAbove(child, depth));
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

function getContentInfo(path: t.NodePath<t.Program | t.MarkoTagBody>) {
  const body = path.get("body");
  const contentInfo: Section["content"] = {
    startType: null!,
    endType: null!,
    singleChild: true,
  };
  for (let endIndex = body.length; endIndex--;) {
    const endType = getNodeContentType(body[endIndex], "endType", contentInfo);
    if (endType !== null) {
      contentInfo.endType = endType;

      if (endType === ContentType.Dynamic) {
        contentInfo.singleChild = false;
      }

      for (let startIndex = 0; startIndex < endIndex; startIndex++) {
        const startType = getNodeContentType(body[startIndex], "startType");
        if (startType !== null) {
          contentInfo.startType = startType;
          contentInfo.singleChild = false;
          return contentInfo;
        }
      }

      contentInfo.startType = getNodeContentType(body[endIndex], "startType")!;
      return contentInfo;
    }
  }

  return null;
}

export function getNodeContentType(
  path: t.NodePath<t.Statement>,
  extraMember: "startType" | "endType",
  contentInfo?: Section["content"],
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
      // The section `structure.child` inlines; a load tag renders behind a marker.
      const tagSection =
        tag.node.extra?.defineBodySection ||
        (!isCoreTag(tag) &&
          analyzeTagNameType(tag) === TagNameType.CustomTag &&
          !tag.node.extra!.tagNameLoad &&
          loadFileForTag(tag)!.ast.program.extra.section);
      if (!tagSection) return getTagContentType(tag);
      if (tagSection.content) {
        if (contentInfo && !tagSection.content.singleChild) {
          if (extraMember === "endType") {
            contentInfo.startType = tagSection.content.startType;
            contentInfo.singleChild = false;
          }
        }
        return tagSection.content[extraMember];
      }
      return null;
    }
  }

  return ContentType.Dynamic;
}

export function getRendererReason(section: Section) {
  // A branch's tag reads its renderer.
  if (isResumedBranch(section)) return false;

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
        return mergeReasons(
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

  return true;
}

// Resume restores an optional branch's scopes into its owner, so a change can
// remove them; an `<await>` or `<try>` body serializes its owner link instead.
export function isResumedBranch(
  section: Section,
): section is Section & { branch: NonNullable<Section["branch"]> } {
  return !!section.branch?.optional;
}

export function isImmediateOwner(section: Section, binding: Binding) {
  return section.parent?.id === binding.section.id;
}

export function isDirectClosure(section: Section, closure: Binding) {
  return !!isResumedBranch(section) && isImmediateOwner(section, closure);
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
  if (isResumedBranch(section)) {
    return bindingUtil.filter(section.referencedClosures, (closure) =>
      isImmediateOwner(section, closure),
    );
  }
}

export function isSameOrChildSection(section: Section, other: Section) {
  do {
    if (other === section) {
      return true;
    }
  } while ((other = other.parent!));
  return false;
}

export function getCommonSection(section: Section, other: Section) {
  let ancestor: Section | undefined = section;
  if (other.depth < section.depth) {
    ancestor = other;
    other = section;
  }
  while (ancestor) {
    if (other === ancestor || !other.parent) {
      return ancestor;
    }
    other = other.parent;
    if (other.depth < ancestor.depth) {
      ancestor = ancestor.parent;
    }
  }
  throw new Error("No common section");
}

export function finalizeParamReasonGroups(section: Section) {
  ensureReasonGroups(section.reason);

  forEach(section.slots, ensureSlotReasonGroups);
}

function ensureSlotReasonGroups(slot: Slot) {
  ensureReasonGroups(slot.reason);
}

export function ensureReasonGroups(reason: Section["reason"]) {
  if (isConditionalReason(reason)) {
    for (const [paramSection, params] of groupParamsBySection(reason.param)) {
      ensureParamReasonGroup(paramSection, params);
    }
  }
}

function ensureParamReasonGroup(section: Section, group: ParamReasonGroup) {
  const { paramReasonGroups } = section;
  if (!paramReasonGroups) {
    setParamReasonGroups(section, [group]);
  } else if (!findSorted(compareReferences, paramReasonGroups, group)) {
    setParamReasonGroups(
      section,
      addSorted(compareReferences, paramReasonGroups, group),
    );
  }
}

export function getParamReasonGroupIndex(
  section: Section,
  group: ParamReasonGroup,
) {
  const index =
    section.paramReasonGroups &&
    findIndexSorted(compareReferences, section.paramReasonGroups, group);
  if (index === undefined || index === -1) {
    throw new Error(
      "Invalid compiler state, cannot ask for a param reason group that was not analyzed.",
    );
  }
  return index;
}

export function groupParamsBySection(params: Sources["param"]) {
  return bindingUtil.groupBy(params, bindingToSection);
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
