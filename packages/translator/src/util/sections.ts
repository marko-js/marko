import type { types as t } from "@marko/compiler";
import { currentProgramPath } from "../visitors/program";
import analyzeTagNameType, { TagNameTypes } from "./tag-name-type";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    nextSectionId?: number;
    sectionId?: number;
  }

  export interface MarkoTagBodyExtra {
    sectionId?: number;
  }
}

export function startSection(path: t.NodePath<t.MarkoTagBody | t.Program>) {
  const extra = (path.node.extra ??= {});
  let sectionId = extra.sectionId;

  if (sectionId === undefined) {
    const programExtra = (path.hub.file.path.node.extra ??= {});
    sectionId = extra.sectionId = programExtra.nextSectionId || 0;
    programExtra.nextSectionId = sectionId + 1;
  }

  return sectionId;
}

export function getOrCreateSectionId(path: t.NodePath<any>) {
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

export function getParentSectionId(path: t.NodePath) {
  return getSectionId(path.parentPath!);
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

export function forEachSectionId(fn: (id: number) => void) {
  const { nextSectionId } = currentProgramPath.node.extra;
  for (let sectionId = 0; sectionId < nextSectionId!; sectionId++) {
    fn(sectionId);
  }
}

export function forEachSectionIdReverse(fn: (id: number) => void) {
  const { nextSectionId } = currentProgramPath.node.extra;
  for (let sectionId = nextSectionId!; sectionId--; ) {
    fn(sectionId);
  }
}
