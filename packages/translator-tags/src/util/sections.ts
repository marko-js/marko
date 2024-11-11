import {
  isAttributeTag,
  isNativeTag,
  loadFileForTag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

import { currentProgramPath } from "../visitors/program";
import { isStatefulReferences } from "./is-stateful";
import { find } from "./optional";
import type { Binding, ReferencedBindings } from "./references";
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
  depth: number;
  parent: Section | undefined;
  params: undefined | Binding;
  closures: ReferencedBindings;
  bindings: ReferencedBindings;
  upstreamExpression: t.NodeExtra | undefined;
  hasCleanup: boolean;
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
    assignments?: [
      valueSection: Section,
      assignment:
        | t.NodePath<t.UpdateExpression>
        | t.NodePath<t.AssignmentExpression>,
    ][];
  }

  export interface MarkoTagBodyExtra {
    section?: Section;
  }
}

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
      : currentProgramPath.scope.generateUid(
          sectionNamePath.toString() + "Body",
        );
    const programExtra = (path.hub.file.path.node.extra ??= {});
    const sections = (programExtra.sections ??= []);
    section = extra.section = {
      id: sections.length,
      name: sectionName,
      depth: parentSection ? parentSection.depth + 1 : 0,
      parent: parentSection,
      params: undefined,
      closures: undefined,
      bindings: undefined,
      content: getContentInfo(path),
      upstreamExpression: undefined,
      hasCleanup: false,
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
        analyzeTagNameType(cur.parentPath as t.NodePath<t.MarkoTag>) !==
          TagNameType.NativeTag &&
        (cur.parent as { name: t.StringLiteral }).name.value !== "html-comment")
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
  (section) =>
    currentProgramPath.scope.generateUidIdentifier(`scope${section.id}_id`),
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
    scopeId.name = currentProgramPath.scope.generateUid(`scope${section.id}_`);
  }
  return scopeId;
};

export function forEachSection(fn: (section: Section) => void) {
  const { sections } = currentProgramPath.node.extra;
  sections?.forEach(fn);
}

export function forEachSectionReverse(fn: (section: Section) => void) {
  const { sections } = currentProgramPath.node.extra;
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
  if (t.isMarkoText(path)) {
    return ContentType.Text;
  }
  if (t.isMarkoPlaceholder(path)) {
    return ContentType.Placeholder;
  }
  if (t.isMarkoScriptlet(path) || t.isMarkoComment(path)) {
    return null;
  }
  if (t.isMarkoTag(path.node)) {
    const tag = path as t.NodePath<t.MarkoTag>;
    if (isNativeTag(tag)) {
      return ContentType.Tag;
    }
    if (isAttributeTag(tag)) {
      return null;
    }
    if (t.isStringLiteral(path.node.name)) {
      switch (path.node.name.value) {
        case "html-comment":
          return ContentType.Comment;
        case "let":
        case "const":
        case "attrs":
        case "effect":
        case "lifecycle":
        case "return":
        case "id":
        case "define":
          return null;
      }
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
  return ContentType.Dynamic;
}

export const isStatefulSection = (section: Section) => {
  const upstreamExpression = section.upstreamExpression;
  return (
    !upstreamExpression ||
    isStatefulReferences(upstreamExpression.referencedBindings)
  );
};

export const checkStatefulClosures = (
  section: Section,
  immediateOnly: boolean,
) => {
  return !!find(
    section.closures,
    (closure) =>
      (!immediateOnly || section.parent === closure.section) &&
      isStatefulReferences(closure),
  );
};
