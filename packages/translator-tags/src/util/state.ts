import type { types as t } from "@marko/compiler";

import { currentProgramPath } from "../visitors/program";
import type { Section } from "./sections";

export const createProgramState = <T>(init: () => T) => {
  const map = new WeakMap<t.NodePath<t.Program>, T>();
  return [
    () => {
      let state = map.get(currentProgramPath);
      if (!state) {
        map.set(currentProgramPath, (state = init()));
      }
      return state;
    },
    (value: T) => {
      map.set(currentProgramPath, value);
    },
  ] as const;
};

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
