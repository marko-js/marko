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
import { createAnalysisMemo } from "./cyclic-memo";
import { isForSelectorClosure } from "./for-selector";
import { generateUid, generateUidIdentifier } from "./generate-uid";
import { isCoreTag, isCoreTagName } from "./is-core-tag";
import type { KnownTagExtra } from "./known-tag";
import {
  addSorted,
  find,
  findIndexSorted,
  type OneMany,
  type Opt,
  Sorted,
  reduce,
  some,
} from "./optional";
import {
  isGuardedReason,
  type KnownExprs,
  mapBodyParams,
  mapParamReason,
  type Reason,
  setParamReasonGroups,
} from "./reasons";
import { type Slot } from "./slots";
import {
  bindingLandsRetained,
  getContentSites,
  getReasonForBinding,
} from "./solve-reasons";
import { ALWAYS, mergeSources, type Sources } from "./sources";
import { createOutputSectionState } from "./state";
import { getPlaceholderContentType } from "./static-text";
import { getTagContentType, getTagFacts } from "./tag-facts";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";
import {
  getBranchWriteReason,
  getWriteBit,
  getWriteReason,
  isWrittenForCall,
} from "./write-guard";

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
  /** `undefined` for a text node at its section's edge: a marker where the
   * section is a known child (`isKnownChild`), known once calls are analyzed. */
  marker: boolean | undefined;
  /** A placeholder's text node, written as a space where it is no marker. */
  text?: true;
}

export interface StructureChild {
  kind: typeof StructureKind.Child;
  name: string;
  binding: Binding;
  renderer?: StructureRef;
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
  /** The closures it reads from enclosing sections, each notifying it through
   * its signal, which its setup subscribes to. */
  referencedClosures: ReferencedBindings;
  /** The loop keys it reads from enclosing sections, in place through its owner
   * chain: a key never changes, so it is no closure. */
  referencedConstants: ReferencedBindings;
  bindings: ReferencedBindings;
  hoisted: ReferencedBindings;
  /** The closures its `<for>` rows read only by comparing them to the row's
   * key, which a row selector updates. */
  selector: Set<Binding> | undefined;
  /** The canonical intersections its work waits on, once ids allocate. */
  intersections: Map<Intersection, IntersectionMeta> | undefined;
  /** The slots of its scope, its own and its bindings', which `slots.ts` keeps
   * sorted. */
  slots: Slot[];
  /** When client code reads anything in its scope: its slots' reasons merged. */
  reason: undefined | Reason;
  paramReasonGroups: ParamReasonGroups | undefined;
  returnValueExpr: t.NodeExtra | undefined;
  isHoistThrough: true | undefined;
  branchExpr: t.NodeExtra | undefined;
  /** For a `<define>` body or a template rendering itself, the known tags whose
   * direct calls render it (each in its child scope binding's section). */
  renderedBy: Opt<KnownTagExtra>;
  /** The known tags rendering in it, in analyze order. */
  knownTags: KnownTagExtra[] | undefined;
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
  readsOwner: boolean;
  /** Whether analysis found work keyed by setup in the section, or in a
   * `<define>` body or template it calls in place. */
  hasSetupWork: boolean;
  /** Its tag, which renders it in place into branch scopes at the tag's node
   * binding; an `<if>` chain's at `index`, the renderer index it renders as. */
  branch:
    | { kind: "if"; tag: ControlFlowTagExtra; index: number }
    | { kind: "for" | "await" | "try"; tag: ControlFlowTagExtra }
    | undefined;
  /** What renders at its edges, `null` for nothing; set once its body is
   * analyzed (`settleContent`). */
  content:
    | undefined
    | null
    | {
        startType: ContentType;
        endType: ContentType;
        singleChild: boolean;
      };
  // Null for a section compiled output never renders (class-API interop
  // bodies); recorders skip it and descendants inherit it.
  structure: StructureOp[] | null;
}

/** A control flow tag's extra once analyzed: its branches render at its node. */
export interface ControlFlowTagExtra extends t.MarkoTagExtra {
  nodeBinding: Binding;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    section?: Section;
    sections?: Section[];
  }

  export interface MarkoTagBodyExtra {
    section?: Section;
  }

  export interface MarkoTagExtra {
    /** For a tag rendering content in its place or through a template, whether
     * text may merge into it from before; `undefined` at its section's edge. */
    textBefore?: boolean;
  }

  export interface MarkoPlaceholderExtra {
    /** Whether text may merge into its text node from before; `undefined` at its
     * section's edge. */
    textBefore?: boolean;
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

  if (!section && (path.type === "Program" || path.node.body.length)) {
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
    const programExtra = getProgram().node.extra;
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
      referencedConstants: undefined,
      bindings: undefined,
      hoisted: undefined,
      selector: undefined,
      intersections: undefined,
      isHoistThrough: undefined,
      slots: [],
      reason: undefined,
      paramReasonGroups: undefined,
      returnValueExpr: undefined,
      content: undefined,
      branchExpr: undefined,
      renderedBy: undefined,
      knownTags: undefined,
      derives: undefined,
      dropped: !!extra.dropped,
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

// Content analysis dropped is rendered by no output, so translate never visits it.
// Attribute tags are inputs, not content: an unread one is removed on its own.
export function removeDroppedContent(tag: t.NodePath<t.MarkoTag>) {
  if (tag.node.body.extra?.dropped) tag.node.body.body = [];
}

export function getSection(path: t.NodePath) {
  let section: Section | undefined;
  let currentPath = path;
  while ((section = currentPath.node.extra?.section) === undefined) {
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

export function forEachSection(fn: (section: Section) => void) {
  const { sections } = getProgram().node.extra;
  sections!.forEach(fn);
}

// For content code the analysis cannot see may render later (a body or value a
// tag it cannot resolve receives), the closures and loop keys it reads that its
// owners may not write.
export function getDynamicTagContentClosures(section: Section) {
  const { derives } = section;
  if (
    section.branchExpr?.tagNameType === TagNameType.DynamicTag ||
    (derives &&
      some(derives.binding, (binding) =>
        bindingLandsRetained(binding, derives.properties),
      ))
  ) {
    return bindingUtil.filter(
      getClosuresFromAbove(section, section, new Set()),
      mayBeUnwritten,
    );
  }
}

function mayBeUnwritten(closure: Binding) {
  const reason = getWriteReason(closure);
  return !reason || isGuardedReason(reason);
}

// What a render of `section` reads from above `top`: its own and its nested
// sections' closures and loop keys, and those of each `<define>` body a direct
// call renders.
function getClosuresFromAbove(
  section: Section,
  top: Section,
  seen: Set<Section>,
): ReferencedBindings {
  // Closures are of ancestors, so those above `top` sort before it.
  let closures = bindingUtil.union(
    bindingUtil.leadingRun(
      section.referencedClosures,
      bindingToSection,
      sectionUtil.compare,
      top,
    ),
    bindingUtil.leadingRun(
      section.referencedConstants,
      bindingToSection,
      sectionUtil.compare,
      top,
    ),
  );
  for (const child of section.children) {
    closures = bindingUtil.union(
      closures,
      getClosuresFromAbove(child, top, seen),
    );
  }
  for (const tagExtra of section.knownTags || []) {
    const body = tagExtra.childSection;
    if (!seen.has(body)) {
      seen.add(body);
      // A body defined outside `top` sits in one of its ancestors, so what is
      // above the body is above `top` too.
      closures = bindingUtil.union(
        closures,
        getClosuresFromAbove(
          body,
          isSameOrAncestorSection(top, body) ? top : body,
          seen,
        ),
      );
    }
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

// Each `<define>` a body calls is analyzed before the call, so once the body is
// analyzed every call at its edges is known to render in place.
export function settleContent(body: t.NodePath<t.Program | t.MarkoTagBody>) {
  const section = getSectionForBody(body);
  if (section) section.content = getContentInfo(body);
}

export function getContentInfo(
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

      // A lone node's content is that of the known child section it renders,
      // or else its one type at both edges.
      return (
        (end.type === "MarkoTag" &&
          getKnownChildContent(end as t.NodePath<t.MarkoTag>)) || {
          startType: endType,
          endType,
          singleChild: endType !== ContentType.Dynamic,
        }
      );
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
      return getPlaceholderContentType(path.node as t.MarkoPlaceholder);
    case "MarkoScriptlet":
    case "MarkoComment":
    case "ImportDeclaration":
    case "ExportAllDeclaration":
    case "ExportNamedDeclaration":
    case "ExportDefaultDeclaration":
      return null;
    case "MarkoTag": {
      const tag = path as t.NodePath<t.MarkoTag>;
      const content = getKnownChildContent(tag);
      return content === undefined
        ? getTagContentType(tag)
        : content && content[edge];
    }
  }

  return ContentType.Dynamic;
}

// A section its callers render in place, so text beside its edges is theirs:
// a template, or a body its direct calls render.
export function isKnownChild(section: Section) {
  return !section.parent || !!section.renderedBy;
}

// Whether resumed text leading the section may follow text the server wrote with
// no mark; `undefined` at a template's root edge, which its caller decides.
export const [getSectionTextBefore] = createAnalysisMemo(
  (section: Section) => getTextBeforeIn(section, undefined),
  true,
);

// `getSectionTextBefore`, where `content` is given seen through the call passing it
// to the section's template, whose params then follow what that call passes.
function getTextBeforeIn(
  section: Section,
  content: Section | undefined,
): boolean | undefined {
  const { branch, derives } = section;
  if (branch) {
    const { tag } = branch;
    const tagSection = tag.nodeBinding.section;
    return (
      !isStartMarked(branch, section, content) &&
      // A row follows the one before, even one whose text ends in its own resume
      // mark and so needs no `<!>` after it: rows are not traced to their last text.
      ((isLoopBody(section) && mayEndWithText(section)) ||
        (tag.textBefore ??
          (content
            ? getTextBeforeIn(tagSection, content)
            : getSectionTextBefore(tagSection))))
    );
  }
  if (!section.parent) return undefined;
  return !derives || !!section.renderedBy || mayContentFollowText(section);
}

// Content follows text where the tags rendering it may, and at the root edge of a
// template it is passed to, where its own tag may.
function mayContentFollowText(section: Section) {
  const { tag } = section.derives!;
  const { unseen, sites, deepSites } = getContentSites(section.derives!);
  const tagFollowsText = () =>
    tag.textBefore ?? getSectionTextBefore(section.parent!) ?? true;
  return (
    unseen ||
    (!!tag.tagNameNullable && tagFollowsText()) ||
    some(
      sites,
      (site) => getSiteTextBefore(site, section) ?? tagFollowsText(),
    ) ||
    some(deepSites, mayDeepSiteFollowText)
  );
}

function mayDeepSiteFollowText(site: t.MarkoTagExtra) {
  return getSiteTextBefore(site, undefined) ?? true;
}

// What may come before a dynamic tag rendering content, `undefined` at its
// template's root edge.
function getSiteTextBefore(
  site: t.MarkoTagExtra,
  content: Section | undefined,
) {
  return site.textBefore ?? getTextBeforeIn(site.nodeBinding!.section, content);
}

// As the runtime marks a start: `<try>` where it resumes, `<await>` by its reason,
// others by branch and marker, whose reason an only child's branch expression shares.
function isStartMarked(
  branch: NonNullable<Section["branch"]>,
  section: Section,
  content: Section | undefined,
) {
  const { nodeBinding } = branch.tag;
  const tagSection = nodeBinding.section;
  return (
    branch.kind === "try" ||
    (branch.kind === "await"
      ? isAlwaysWritten(tagSection, section.reason, content)
      : isAlwaysWritten(tagSection, getBranchWriteReason(section), content) &&
        isAlwaysWritten(tagSection, getWriteReason(nodeBinding), content))
  );
}

// Whether `reason` is always written in `section`, or for the call passing
// `content` to its template where given.
function isAlwaysWritten(
  section: Section,
  reason: Reason | undefined,
  content: Section | undefined,
) {
  return content
    ? isWrittenForCall(section, reason, content.derives!.tag, content.parent!)
    : getWriteBit(section, reason) === 1;
}

// Whether the section's content may end with text.
function mayEndWithText(section: Section) {
  return !!section.content && mayRenderText(section.content.endType);
}

// Whether text may merge with what renders at `path` from one side, past what
// renders nothing and out through bodies rendered in place.
export function mayMergeWithText(
  path: t.NodePath,
  before: boolean,
): boolean | undefined {
  let sibling = getSibling(path, before);
  let parent: t.NodePath = path.parentPath!;
  for (;;) {
    if (!sibling.node) {
      const inlinedTag = getInlinedBodyTag(parent);
      if (!inlinedTag) {
        // An element's body ends at the element; beside its section's own edge
        // renders whatever inlines the section.
        return getSectionForBody(
          parent as t.NodePath<t.MarkoTagBody | t.Program>,
        )
          ? undefined
          : false;
      }
      sibling = getSibling(inlinedTag, before);
      parent = inlinedTag.parentPath;
    } else {
      const contentType = getNodeContentType(
        sibling as t.NodePath<t.Statement>,
        before ? "endType" : "startType",
      );
      if (contentType !== null) return mayRenderText(contentType);
      sibling = getSibling(sibling, before);
    }
  }
}

function getSibling(path: t.NodePath, before: boolean) {
  return before ? path.getPrevSibling() : path.getNextSibling();
}

// The tag rendering `parent` in its own place and section, so the body's
// edges render against the tag's own siblings.
function getInlinedBodyTag(parent: t.NodePath) {
  if (parent.isMarkoTagBody()) {
    const tag = parent.parentPath as t.NodePath<t.MarkoTag>;
    const facts = getTagFacts(tag);
    if (facts.controlFlow && facts.inlineBody) {
      return tag;
    }
  }
}

// Content of this type may render text at its edge.
function mayRenderText(contentType: ContentType) {
  return (
    contentType === ContentType.Text ||
    contentType === ContentType.Dynamic ||
    contentType === ContentType.Placeholder
  );
}

// The content of the known child section the tag renders in place, `undefined`
// to read the tag as its own (a load tag renders behind a marker).
function getKnownChildContent(tag: t.NodePath<t.MarkoTag>) {
  const section =
    tag.node.extra?.defineBodySection ||
    (!isCoreTag(tag) &&
      analyzeTagNameType(tag) === TagNameType.CustomTag &&
      !tag.node.extra!.tagNameLoad &&
      loadFileForTag(tag)!.ast.program.extra.section);
  if (!section) return;
  if (section.content !== undefined) return section.content;

  // A call nested in the body it renders reads what the body holds; one
  // directly in it would read itself, so it reads as its own tag.
  let body: t.NodePath = tag.parentPath;
  while (body.type === "MarkoTagBody") {
    body = body.parentPath!.parentPath!;
    if (body.node.extra?.section === section) {
      return getContentInfo(body as t.NodePath<t.Program | t.MarkoTagBody>);
    }
  }
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

// Resume restores an optional branch's scopes into its owner, so a change can
// remove them; an `<await>` or `<try>` body serializes its owner link instead.
export function isOptionalBranch(
  section: Section,
): section is Section & { branch: NonNullable<Section["branch"]> } {
  const kind = section.branch?.kind;
  return kind === "if" || kind === "for";
}

export function isLoopBody(section: Section) {
  return section.branch?.kind === "for";
}

export function isInParentSection(binding: Binding, section: Section) {
  return section.parent?.id === binding.section.id;
}

// A closure an optional branch's owner passes to its scopes: the owner's own,
// or one its loop's selector reads in the owner's scope.
export function isDirectClosure(section: Section, closure: Binding) {
  return (
    isOptionalBranch(section) &&
    (isInParentSection(closure, section) ||
      isForSelectorClosure(section, closure))
  );
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

// The `<for>` bodies of its own section reading the closure before
// `closureSection`, but for selectors, each rendering its rows in the next slot.
export function getForClosureIndex(closure: Binding, closureSection?: Section) {
  let index = 0;
  find(closure.closureSections, (section) => {
    if (section === closureSection) return true;
    if (
      isLoopBody(section) &&
      section.parent === closure.section &&
      !isForSelectorClosure(section, closure)
    ) {
      index++;
    }
    return false;
  });
  return index;
}

export function getDirectClosures(section: Section) {
  return bindingUtil.filter(section.referencedClosures, (closure) =>
    isDirectClosure(section, closure),
  );
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

export function ensureSectionReasonGroups(section: Section) {
  ensureReasonGroups(section, section.reason);

  for (const slot of section.slots) {
    ensureReasonGroups(slot.section, slot.reason);
  }
}

// The groups the section's guards test, in its own terms.
function ensureReasonGroups(section: Section, reason: Section["reason"]) {
  const ownReason = mapBodyParams(section, reason);
  if (isGuardedReason(ownReason)) {
    forEachParamGroup(ownReason.param, ensureParamReasonGroup);
  }
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
