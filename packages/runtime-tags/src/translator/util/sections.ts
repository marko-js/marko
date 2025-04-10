import { types as t } from "@marko/compiler";
import {
  getProgram,
  isAttributeTag,
  isNativeTag,
  loadFileForTag,
} from "@marko/compiler/babel-utils";

import type { AccessorPrefix } from "../../common/accessor.debug";
import { generateUid, generateUidIdentifier } from "./generate-uid";
import { isCoreTag } from "./is-core-tag";
import { filter, find, Sorted } from "./optional";
import type { Binding, ReferencedBindings } from "./references";
import {
  getBindingSerializeReason,
  type SerializeReason,
} from "./serialize-reasons";
import { createSectionState } from "./state";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";

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
  params: undefined | Binding;
  referencedClosures: ReferencedBindings;
  referencedHoists: ReferencedBindings;
  bindings: ReferencedBindings;
  hoisted: ReferencedBindings;
  serializeReason: undefined | SerializeReason;
  serializeReasons: Map<symbol, SerializeReason>;
  isHoistThrough: true | undefined;
  assignments: ReferencedBindings;
  upstreamExpression: t.NodeExtra | undefined;
  downstreamBinding: Binding | undefined;
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
    const parentSection = path.parentPath
      ? getOrCreateSection(path.parentPath)
      : undefined;
    const sectionNamePath = (path.parentPath as t.NodePath<t.MarkoTag>)?.get(
      "name",
    );
    const sectionName = path.isProgram()
      ? ""
      : generateUid(sectionNamePath.toString() + "_content");
    const programExtra = (path.hub.file.path.node.extra ??= {});
    const sections = (programExtra.sections ??= []);
    section = extra.section = {
      id: sections.length,
      name: sectionName,
      loc: sectionNamePath?.node.loc || undefined,
      depth: parentSection ? parentSection.depth + 1 : 0,
      parent: parentSection,
      sectionAccessor: undefined,
      params: undefined,
      referencedClosures: undefined,
      referencedHoists: undefined,
      bindings: undefined,
      hoisted: undefined,
      isHoistThrough: undefined,
      assignments: undefined,
      serializeReason: undefined,
      serializeReasons: new Map(),
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

export function getParentSection(path: t.NodePath) {
  return getSection(path.parentPath!);
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

export const isSerializedSection = (section: Section) => {
  if (section.isBranch) return false; // Branches handle wether to register their section/renderer.

  const { downstreamBinding } = section;
  if (downstreamBinding) {
    // TODO: this downstream is possible from another program.
    // This might make more sense to use "downstream sources" instead and resolve those sources
    // (accouting from resolving input sources from the child.
    return !!getBindingSerializeReason(
      downstreamBinding.section,
      downstreamBinding,
    );
  }

  return true;
};

export function isSectionWithHoists(section: Section) {
  return !!(
    section.hoisted ||
    section.isHoistThrough ||
    section.referencedHoists
  );
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
