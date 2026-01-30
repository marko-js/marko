import { types as t } from "@marko/compiler";
import {
  getProgram,
  isAttributeTag,
  isNativeTag,
  loadFileForTag,
} from "@marko/compiler/babel-utils";

import type { AccessorPrefix } from "../../common/accessor.debug";
import { generateUid, generateUidIdentifier } from "./generate-uid";
import { isCoreTag, isCoreTagName } from "./is-core-tag";
import {
  addSorted,
  filter,
  find,
  findIndexSorted,
  findSorted,
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
  type ParamBinding,
  type ReferencedBindings,
  type Sources,
} from "./references";
import { isReasonDynamic, type SerializeReason } from "./serialize-reasons";
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

export enum ContentType {
  Comment,
  Dynamic,
  Placeholder,
  Tag,
  Text,
}

export interface Section {
  id: number;
  name: string;
  loc: t.SourceLocation | undefined;
  depth: number;
  parent: Section | undefined;
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
  paramReasonGroups: ParamSerializeReasonGroups | undefined;
  returnSerializeReason: SerializeReason | undefined;
  isHoistThrough: true | undefined;
  upstreamExpression: t.NodeExtra | undefined;
  downstreamBinding: { binding: Binding; properties: Opt<string> } | undefined;
  hasAbortSignal: boolean;
  isBranch: boolean;
  content: null | {
    startType: ContentType;
    endType: ContentType;
    singleChild: boolean;
  };
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
    const programExtra = (path.hub.file.path.node.extra ??= {});
    const sections = (programExtra.sections ??= []);
    section = extra.section = {
      id: sections.length,
      name: sectionName,
      loc: parentTag?.node.name.loc || undefined,
      depth: parentSection ? parentSection.depth + 1 : 0,
      parent: parentSection,
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
      paramReasonGroups: undefined,
      returnSerializeReason: undefined,
      content: getContentInfo(path),
      upstreamExpression: undefined,
      downstreamBinding: undefined,
      hasAbortSignal: false,
      isBranch: false,
    };
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

const [_getScopeIdentifier] = createSectionState<t.Identifier>(
  "scopeIdentifier",
  () => t.identifier("undefined"),
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

export const getScopeIdentifier = (
  section: Section,
  ignoreDefault?: boolean,
) => {
  const scopeId = _getScopeIdentifier(section);
  if (!ignoreDefault && scopeId.name === "undefined") {
    scopeId.name = generateUid(`scope${section.id}`);
  }
  return scopeId;
};

export function forEachSection(fn: (section: Section) => void) {
  const { sections } = getProgram().node.extra;
  sections?.forEach(fn);
}

export function forEachSectionReverse(fn: (section: Section) => void) {
  const { sections } = getProgram().node.extra;
  for (let i = sections!.length; i--; ) {
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
  for (let endIndex = body.length; endIndex--; ) {
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
          case "for":
          case "if":
          case "await":
          case "try":
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
  if (section.isBranch) return false; // Branches handle wether to register their section/renderer.

  const { downstreamBinding } = section;
  if (downstreamBinding) {
    return getAllSerializeReasonsForBinding(
      downstreamBinding.binding,
      downstreamBinding.properties,
    );
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
  if (isReasonDynamic(section.serializeReason)) {
    for (const [paramSection, params] of groupParamsBySection(
      section.serializeReason.param,
    )) {
      ensureParamReasonGroup(paramSection, params);
    }
  }

  for (const reason of section.serializeReasons.values()) {
    if (isReasonDynamic(reason)) {
      for (const [paramSection, params] of groupParamsBySection(reason.param)) {
        ensureParamReasonGroup(paramSection, params);
      }
    }
  }
}

function ensureParamReasonGroup(
  section: Section,
  reason: ParamSerializeReasonGroup["reason"],
) {
  const { paramReasonGroups } = section;
  const group: ParamSerializeReasonGroup = {
    id: Symbol(getDebugNames(reason)),
    reason,
  };

  if (paramReasonGroups) {
    const found = findSorted(compareParamGroups, paramReasonGroups, group);
    if (found) return found;

    section.paramReasonGroups = addSorted(
      compareParamGroups,
      paramReasonGroups,
      group,
    );
  } else {
    section.paramReasonGroups = [group];
  }
}

export function getParamReasonGroupIndex(
  section: Section,
  reason: ParamSerializeReasonGroup["reason"],
) {
  const index =
    section.paramReasonGroups &&
    findIndexSorted(compareParamGroups, section.paramReasonGroups, {
      reason,
    } as ParamSerializeReasonGroup);
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
  a: ParamSerializeReasonGroup,
  b: ParamSerializeReasonGroup,
) {
  return compareReferences(a.reason, b.reason);
}

function isNativeNode(tag: t.NodePath<t.MarkoTag>) {
  if (isCoreTag(tag)) {
    switch (tag.node.name.value) {
      case "html-comment":
      case "html-script":
      case "html-style":
        return true;
      default:
        return false;
    }
  }
  return analyzeTagNameType(tag) === TagNameType.NativeTag;
}
