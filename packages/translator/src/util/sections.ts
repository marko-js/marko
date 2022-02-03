import type { types as t } from "@marko/compiler";
import { currentProgramPath } from "../visitors/program";
import analyzeTagNameType, { TagNameTypes } from "./tag-name-type";

export interface Section {
  id: number;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    sections?: Section[];
    sectionId?: number;
  }

  export interface MarkoTagBodyExtra {
    sectionId?: number;
  }
}

export function getSection(path: t.NodePath<any>) {
  let cur = path;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (
      cur.type === "Program" ||
      (cur.type === "MarkoTagBody" &&
        analyzeTagNameType(cur.parentPath as t.NodePath<t.MarkoTag>) !==
          TagNameTypes.NativeTag)
    ) {
      return startSection(cur);
    }

    cur = cur.parentPath!;
  }
}

export function startSection(path: t.NodePath<t.MarkoTagBody | t.Program>) {
  const extra = (path.node.extra ??= {});
  if (extra.sectionId)
    return getSectionById(path, extra as ObjectWithSectionId);

  const programExtra = (path.hub.file.path.node.extra ??= {});
  const section: Section = {
    id: 0,
  };

  if (programExtra.sections) {
    section.id = programExtra.sections.push(section) - 1;
  } else {
    programExtra.sections = [section];
  }

  extra.sectionId = section.id;

  return section;
}

export function getParentSectionId(path: t.NodePath) {
  return getSectionId(path.parentPath!);
}

export function getSectionId(path: t.NodePath) {
  let sectionId: number;
  let currentPath = path;
  while (
    (sectionId = currentPath.node.extra?.sectionId as number) === undefined
  ) {
    currentPath = currentPath.parentPath!;
  }
  return sectionId;
}

type ObjectWithSectionId = {
  sectionId: number;
};

function getSectionById<S extends Section>(
  path: t.NodePath,
  reference: ObjectWithSectionId = path.state
) {
  const program = path.hub.file.path;
  const sections = program.node.extra.sections!;
  return sections[reference.sectionId] as S;
}

export function createSectionState<T = unknown>(key: string, init?: () => T) {
  return [
    (sectionId: number): T => {
      const arrayOfSectionData = (currentProgramPath.state[key] ??= []);
      const sectionData = (arrayOfSectionData[sectionId] ??= init && init());
      return sectionData as T;
    },
    (sectionId: number, value: T): void => {
      const arrayOfSectionData = (currentProgramPath.state[key] ??= []);
      arrayOfSectionData[sectionId] = value;
    },
  ] as const;
}
