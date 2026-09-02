import { types as t } from "@marko/compiler";
import {
  getProgram,
  isAttributeTag,
  isNativeTag,
  loadFileForTag,
} from "@marko/compiler/babel-utils";

import type { AccessorPrefix } from "../../common/accessor.debug";
import type { WalkCode } from "../../common/types";
import * as ContentType from "./constants/content-type";
import type * as ShellBlocker from "./constants/shell-blocker";
import type * as Step from "./constants/step";
import * as StructureKind from "./constants/structure-kind";
import { generateUid, generateUidIdentifier } from "./generate-uid";
import { isCoreTag, isCoreTagName } from "./is-core-tag";
import {
  addSorted,
  filter,
  find,
  findIndexSorted,
  findSorted,
  type OneMany,
  type Opt,
  Sorted,
} from "./optional";
import {
  type Binding,
  bindingUtil,
  compareReferences,
  getAllSerializeReasonsForBinding,
  getDebugNames,
  type InputBinding,
  type KnownExprs,
  type ParamBinding,
  type ReferencedBindings,
  type Sources,
} from "./references";
import {
  isReasonDynamic,
  mapCrossProgramReason,
  type SerializeKey,
  type SerializeReason,
  type SerializeReasons,
} from "./serialize-reasons";
import { createSectionState } from "./state";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";

export interface ParamSerializeReasonGroup {
  id: symbol;
  reason: NonNullable<Sources["param"]>;
}
export type ParamSerializeReasonGroups = [
  ParamSerializeReasonGroup,
  ...ParamSerializeReasonGroup[],
];

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
  program: Section;
  sectionAccessor: { binding: Binding; prefix: AccessorPrefix } | undefined;
  params: undefined | ParamBinding | InputBinding;
  referencedLocalClosures: ReferencedBindings;
  referencedClosures: ReferencedBindings;
  referencedHoists: ReferencedBindings;
  bindings: ReferencedBindings;
  hoisted: ReferencedBindings;
  hoistedTo: ReferencedBindings;
  serializeReason: undefined | SerializeReason;
  serializeReasons: Map<symbol, SerializeReason>;
  /** Pending serialize exprs, resolved into the reasons (and provenance)
   * once references finalize. */
  serializeExprs: Opt<t.NodeExtra>;
  propSerializeExprs: Map<SerializeKey, OneMany<t.NodeExtra>> | undefined;
  /** Whose values feed each serialization decision — survives force-`true`
   * and counts function-body reads; complete after reference finalize. */
  serializeProvenance: Sources | undefined;
  propSerializeProvenance: Map<SerializeKey, Sources> | undefined;
  /** Interned per-prop reason keys for string/symbol props. */
  serializePropKeys: Map<string | symbol, SerializeKey> | undefined;
  paramReasonGroups: ParamSerializeReasonGroups | undefined;
  returnValueExpr: t.NodeExtra | undefined;
  returnSerializeReason: SerializeReason | undefined;
  isHoistThrough: true | undefined;
  upstreamExpression: t.NodeExtra | undefined;
  /** For content a known tag consumes: that tag's extra (its input feeds
   * decide whether the consumer may hand the site to the client). */
  consumer: t.MarkoTagExtra | undefined;
  /** For a `<define>` body: the sections of its direct `<${var}>` sites. */
  defineSites: Section[] | undefined;
  downstreamBinding:
    | {
        binding: Binding;
        properties: Opt<string>;
        exprs: KnownExprs | undefined;
      }
    | false
    | undefined;
  hasAbortSignal: boolean;
  /** Count of distinct `$signal` expression roots; analyze allocates each
   * root's `abortId` from this so translates read, never re-derive. */
  abortSignalExprs: number;
  readsOwner: boolean;
  isBranch: boolean;
  /** An `<await>`/`<try>` body: always-rendered like the branch path, but
   * paired (never constructed) by patches. */
  isBoundary: boolean;
  /** A content renderer slot-serialized by register id (today only
   * `<try>` `@placeholder`/`@catch` bodies): `buildShells` re-registers
   * static ones from entry data; others load the dom module. */
  boundaryContent: boolean;
  /** A content body shipped as a shell record (set by `buildShells`): a
   * `"static"` one (template only) rides its slot in-band, a dynamic one
   * elides its slot and a dynamic tag entry constructs it by id. */
  contentRecord: false | true | "static";
  /** Awaits a construct must deliver body content for (marker binding +
   * body section); `buildShells` prunes those no shipped shell reaches. */
  constructSetups: { binding: Binding; body: Section }[] | undefined;
  /** Lazily loaded child sites in this section, by their marker binding. */
  loadSites: Binding[] | undefined;
  /** Branch whose shell would construct unfaithfully: the first blocker's
   * reason code sticks, no shell ships, patches fail closed. */
  shellBlocked: ShellBlocker.Value | undefined;
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
      program: undefined as unknown as Section,
      sectionAccessor: undefined,
      params: undefined,
      referencedLocalClosures: undefined,
      referencedClosures: undefined,
      referencedHoists: undefined,
      bindings: undefined,
      hoisted: undefined,
      hoistedTo: undefined,
      isHoistThrough: undefined,
      serializeReason: undefined,
      serializeReasons: new Map(),
      serializeExprs: undefined,
      propSerializeExprs: undefined,
      serializeProvenance: undefined,
      propSerializeProvenance: undefined,
      serializePropKeys: undefined,
      paramReasonGroups: undefined,
      returnValueExpr: undefined,
      returnSerializeReason: undefined,
      content: getContentInfo(path),
      upstreamExpression: undefined,
      consumer: undefined,
      defineSites: undefined,
      downstreamBinding: undefined,
      hasAbortSignal: false,
      abortSignalExprs: 0,
      readsOwner: false,
      isBranch: false,
      isBoundary: false,
      boundaryContent: false,
      contentRecord: false,
      constructSetups: undefined,
      loadSites: undefined,
      shellBlocked: undefined,
      structure: parentSection && !parentSection.structure ? null : [],
    };
    section.program = parentSection ? parentSection.program : section;
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
        !isNativeNode(cur.parentPath as t.NodePath<t.MarkoTag>))
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

export const [getSectionParentIsOwner, setSectionParentIsOwner] =
  createSectionState<boolean>("parentIsOwner", () => false);

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
      if (isCoreTag(tag)) {
        switch (tag.node.name.value) {
          case "html-comment":
            return ContentType.Comment;
          case "html-script":
          case "html-style":
            return ContentType.Tag;
          case "style":
            return tag.node.body.body.some((child) =>
              t.isMarkoPlaceholder(child),
            )
              ? ContentType.Tag
              : null;
          case "for":
          case "if":
          case "await":
          case "try":
            return ContentType.Dynamic;
          case "show":
            // Optimizing a redundant `<show=true>` only saves its placeholder,
            // so all `<show>` tags intentionally remain dynamic here.
            return ContentType.Dynamic;
          default:
            return null;
        }
      } else if (isNativeTag(tag)) {
        return ContentType.Tag;
      } else if (isAttributeTag(tag)) {
        return null;
      } else if (t.isStringLiteral(tag.node.name)) {
        const tagSection = loadFileForTag(tag)?.ast.program.extra.section;
        if (tagSection) {
          if (tagSection.content) {
            if (contentInfo && !tagSection.content.singleChild) {
              if (extraMember === "endType") {
                contentInfo.startType = tagSection.content.startType;
                contentInfo.singleChild = false;
              }
            }
            return tagSection.content[extraMember];
          } else {
            return null;
          }
        }
      }
    }
  }

  return ContentType.Dynamic;
}

export function getSectionRegisterReasons(section: Section) {
  if (section.isBranch) return false; // Branches handle whether to register their section/renderer.

  const { downstreamBinding } = section;
  if (downstreamBinding) {
    let downstreamReasons = getAllSerializeReasonsForBinding(
      downstreamBinding.binding,
      downstreamBinding.properties,
    );
    if (downstreamReasons && downstreamReasons !== true) {
      downstreamReasons = mapCrossProgramReason(
        section.program,
        downstreamReasons,
        downstreamBinding.exprs,
      );
    }
    if (!downstreamReasons) return false;
    if (
      isReasonDynamic(downstreamReasons) &&
      !section.serializeReason &&
      !section.serializeReasons.size &&
      !section.parent?.serializeReason &&
      !section.parent?.serializeReasons.size
    ) {
      return false;
    }
    return downstreamReasons;
  } else if (downstreamBinding === false) {
    return false;
  }

  return true;
}

export function isImmediateOwner(section: Section, binding: Binding) {
  return section.parent?.id === binding.section.id;
}

export function isDirectClosure(section: Section, closure: Binding) {
  return section.isBranch && isImmediateOwner(section, closure);
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
  if (section.isBranch) {
    return filter(section.referencedClosures, (closure) =>
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

export function finalizeParamSerializeReasonGroups(section: Section) {
  ensureReasonGroups(section.serializeReason);

  for (const reason of section.serializeReasons.values()) {
    ensureReasonGroups(reason);
  }
}

export function ensureReasonGroups(reason: Section["serializeReason"]) {
  if (isReasonDynamic(reason)) {
    for (const [paramSection, params] of groupParamsBySection(reason.param)) {
      ensureParamReasonGroup(paramSection, params);
    }
  }
}

function ensureParamReasonGroup(
  section: Section,
  reason: ParamSerializeReasonGroup["reason"],
) {
  const { paramReasonGroups } = section;
  if (paramReasonGroups) {
    const found = findSorted(compareParamGroups, paramReasonGroups, { reason });
    if (found) return found;
  }

  const group: ParamSerializeReasonGroup = {
    id: Symbol(getDebugNames(reason)),
    reason,
  };
  section.paramReasonGroups = paramReasonGroups
    ? addSorted(compareParamGroups, paramReasonGroups, group)
    : [group];
}

export function getParamReasonGroupIndex(
  section: Section,
  reason: ParamSerializeReasonGroup["reason"],
) {
  const index =
    section.paramReasonGroups &&
    findIndexSorted(compareParamGroups, section.paramReasonGroups, { reason });
  if (index === undefined || index === -1) {
    throw new Error(
      "Invalid compiler state, cannot ask for a serialize reason group that was not analyzed.",
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

function compareParamGroups(
  a: Pick<ParamSerializeReasonGroup, "reason">,
  b: Pick<ParamSerializeReasonGroup, "reason">,
) {
  return compareReferences(a.reason, b.reason);
}

function isNativeNode(tag: t.NodePath<t.MarkoTag>) {
  if (isCoreTag(tag)) {
    // The `<show>` body, like the html-* tags' content, always renders exactly
    // once, so it compiles inline into the parent section rather than its own.
    switch (tag.node.name.value) {
      case "html-comment":
      case "html-script":
      case "html-style":
      case "show":
        return true;
      case "style":
        return tag.node.body.body.some((child) => t.isMarkoPlaceholder(child));
      default:
        return false;
    }
  }
  return analyzeTagNameType(tag) === TagNameType.NativeTag;
}
