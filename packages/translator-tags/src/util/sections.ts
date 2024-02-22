import { isNativeTag, loadFileForTag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { currentProgramPath } from "../visitors/program";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";

export type Section = {
  id: number;
  name: string;
  depth: number;
  parent?: Section;
  hasDynamicStart: boolean;
  hasDynamicEnd: boolean;
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
): Section {
  const extra = (path.node.extra ??= {});
  let section = extra.section;

  if (!section) {
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
      hasDynamicStart: !!hasDynamicStart(path),
      hasDynamicEnd: !!hasDynamicEnd(path),
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
          TagNameType.NativeTag)
    ) {
      return startSection(cur);
    }

    cur = cur.parentPath!;
  }
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

export function createSectionState<T = unknown>(
  key: string,
  init?: ((section: Section) => T) | (() => T),
) {
  return [
    (section: Section): T => {
      const arrayOfSectionData = (currentProgramPath.state[key] ??= {});
      const sectionData = (arrayOfSectionData[section.id] ??=
        init && init(section));
      return sectionData as T;
    },
    (section: Section, value: T): void => {
      const arrayOfSectionData = (currentProgramPath.state[key] ??= {});
      arrayOfSectionData[section.id] = value;
    },
  ] as const;
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

function hasDynamicStart(path: t.NodePath<t.Program | t.MarkoTagBody>) {
  for (const child of path.get("body")) {
    const dynamic = isDynamic(child, hasDynamicStart);
    if (dynamic !== null) {
      return dynamic;
    }
  }
  return null;
}

function hasDynamicEnd(path: t.NodePath<t.Program | t.MarkoTagBody>) {
  const body = path.get("body");
  for (let i = body.length; i--; ) {
    const dynamic = isDynamic(body[i], hasDynamicEnd);
    if (dynamic !== null) {
      return dynamic;
    }
  }
  return null;
}

/**
 * @returns null if the node should be skipped
 */
function isDynamic(
  path: t.NodePath<t.Statement>,
  customTagCallback: (
    path: t.NodePath<t.Program | t.MarkoTagBody>,
  ) => boolean | null,
) {
  if (
    t.isMarkoText(path) ||
    t.isMarkoComment(path) ||
    t.isMarkoPlaceholder(path) ||
    t.isMarkoCDATA(path)
  ) {
    return false;
  }
  if (t.isMarkoScriptlet(path)) {
    return null;
  }
  if (t.isMarkoTag(path.node)) {
    if (isNativeTag(path as t.NodePath<t.MarkoTag>)) {
      return false;
    }
    if (t.isStringLiteral(path.node.name)) {
      switch (path.node.name.value) {
        case "let":
        case "const":
        case "attrs":
        case "effect":
        case "lifecycle":
        case "return":
        case "id":
          return null;
      }
      const tagFile = loadFileForTag(path as t.NodePath<t.MarkoTag>);
      if (tagFile) {
        return customTagCallback(tagFile.path);
      }
    }
  }
  return true;
}
