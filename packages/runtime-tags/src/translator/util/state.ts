import type { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import type { Section } from "./sections";

// One value per program: analyze runs on the cached file and each output
// translates its own clone, so analyze state never reaches translate.
export function createProgramState<T>(init: () => T) {
  const map = new WeakMap<t.NodePath<t.Program>, T>();
  return [
    () => {
      let state = map.get(getProgram());
      // Cached states are never falsy, so `!state` reliably means "not yet cached".
      if (!state) {
        map.set(getProgram(), (state = init()));
      }
      return state;
    },
    (value: T) => {
      map.set(getProgram(), value);
    },
  ] as const;
}

// Kept on `program.state`, which each traversal pass resets.
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
