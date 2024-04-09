import {
  isAttributeTag,
  isNativeTag,
  loadFileForTag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { currentProgramPath } from "../visitors/program";
import { isStatefulReferences } from "./is-stateful";
import type { Binding } from "./references";
import { createSectionState } from "./state";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";

export enum ContentType {
  Static,
  Dynamic,
  Empty,
}

export type Section = {
  id: number;
  name: string;
  depth: number;
  parent?: Section;
  closures: Set<Binding>;
  bindings: Set<Binding>;
  startNodeContentType: ContentType;
  endNodeContentType: ContentType;
  upstreamExpression: t.NodeExtra | undefined;
};

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    section?: Section;
    sections?: Section[];
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
      closures: new Set(),
      bindings: new Set(),
      startNodeContentType: getStartNodeContentType(path),
      endNodeContentType: getEndNodeContentType(path),
      upstreamExpression: undefined,
    };
    sections.push(section);
  }

  return section;
}

export function getOrCreateSection(path: t.NodePath<any>) {
  let cur = path;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (
      cur.type === "Program" ||
      (cur.type === "MarkoTagBody" &&
        analyzeTagNameType(cur.parentPath as t.NodePath<t.MarkoTag>) !==
          TagNameType.NativeTag &&
        (cur.parent as { name: t.StringLiteral }).name.value !== "html-comment")
    ) {
      return startSection(cur)!;
    }

    cur = cur.parentPath!;
  }
}

export function hasSection(path: t.NodePath) {
  return path.node.extra?.section !== undefined;
}

export function getSection(path: t.NodePath) {
  let section: Section;
  let currentPath = path;
  while ((section = currentPath.node.extra?.section as Section) === undefined) {
    currentPath = currentPath.parentPath!;
  }

  _setSectionPath(
    section,
    currentPath as t.NodePath<t.MarkoTagBody | t.Program>,
  );
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

const [getSectionPath, _setSectionPath] =
  createSectionState<t.NodePath<t.MarkoTagBody | t.Program>>("sectionPath");
export { getSectionPath };

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

function getStartNodeContentType(path: t.NodePath<t.Program | t.MarkoTagBody>) {
  for (const child of path.get("body")) {
    const contentType = getNodeContentType(child, "startNodeContentType");
    if (contentType !== ContentType.Empty) {
      return contentType;
    }
  }
  return ContentType.Empty;
}

function getEndNodeContentType(path: t.NodePath<t.Program | t.MarkoTagBody>) {
  const body = path.get("body");
  for (let i = body.length; i--; ) {
    const contentType = getNodeContentType(body[i], "endNodeContentType");
    if (contentType !== ContentType.Empty) {
      return contentType;
    }
  }
  return ContentType.Empty;
}

export function getNodeContentType(
  path: t.NodePath<t.Statement>,
  extraMember: "startNodeContentType" | "endNodeContentType",
) {
  if (
    t.isMarkoText(path) ||
    t.isMarkoPlaceholder(path) ||
    t.isMarkoCDATA(path)
  ) {
    return ContentType.Static;
  }
  if (t.isMarkoScriptlet(path) || t.isMarkoComment(path)) {
    return ContentType.Empty;
  }
  if (t.isMarkoTag(path.node)) {
    const tag = path as t.NodePath<t.MarkoTag>;
    if (isNativeTag(tag)) {
      return ContentType.Static;
    }
    if (isAttributeTag(tag)) {
      return ContentType.Empty;
    }
    if (t.isStringLiteral(path.node.name)) {
      switch (path.node.name.value) {
        case "html-comment":
          return ContentType.Static;
        case "let":
        case "const":
        case "attrs":
        case "effect":
        case "lifecycle":
        case "return":
        case "id":
        case "context":
        case "define":
          return ContentType.Empty;
      }
      const tagSection = loadFileForTag(tag)?.ast.program.extra.section;
      if (tagSection) {
        return tagSection[extraMember] ?? ContentType.Empty;
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
  for (const binding of section.closures) {
    if (
      (!immediateOnly || section.parent === binding.section) &&
      isStatefulReferences(binding)
    ) {
      return true;
    }
  }
};
