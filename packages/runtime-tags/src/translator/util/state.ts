import { getProgram, type types as t } from "@marko/compiler";

import type { Section } from "./sections";

export const createProgramState = <T>(init: () => T) => {
  const map = new WeakMap<t.NodePath<t.Program>, T>();
  return [
    () => {
      let state = map.get(getProgram());
      if (!state) {
        map.set(getProgram(), (state = init()));
      }
      return state;
    },
    (value: T) => {
      map.set(getProgram(), value);
    },
  ] as const;
};

export function createSectionState<T = unknown>(
  key: string,
  init?: ((section: Section) => T) | (() => T),
) {
  return [
    (section: Section): T => {
      const arrayOfSectionData = (getProgram().state[key] ??= {});
      const sectionData = (arrayOfSectionData[section.id] ??=
        init && init(section));
      return sectionData as T;
    },
    (section: Section, value: T): void => {
      const arrayOfSectionData = (getProgram().state[key] ??= {});
      arrayOfSectionData[section.id] = value;
    },
  ] as const;
}
