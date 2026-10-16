import { getProgram } from "@marko/compiler/babel-utils";

import type { Section } from "./sections";

// One value per output being built: each output translates its own clone, so
// what one output builds never reaches another (analyze's pass has its own).
export function createOutputState<T>(init: () => T) {
  return createKeyedState(getProgram, init);
}

// One value per analysis, which every output shares: a clone's program extra
// still holds the analyzed root section.
export function createAnalysisState<T>(init: () => T) {
  return createKeyedState(getAnalysisRoot, init);
}

function getAnalysisRoot() {
  return getProgram().node.extra!.section!;
}

function createKeyedState<K extends object, T>(getKey: () => K, init: () => T) {
  const map = new WeakMap<K, T>();
  return [
    () => {
      const key = getKey();
      let state = map.get(key);
      if (state === undefined && !map.has(key)) {
        map.set(key, (state = init()));
      }
      return state as T;
    },
    (value: T) => {
      map.set(getKey(), value);
    },
  ] as const;
}

// One value per section in each output being built.
export function createOutputSectionState<T = unknown>(
  init?: ((section: Section) => T) | (() => T),
) {
  return createSectionState(createOutputState, init);
}

// One value per section in the analysis, which every output shares.
export function createAnalysisSectionState<T = unknown>(
  init?: ((section: Section) => T) | (() => T),
) {
  return createSectionState(createAnalysisState, init);
}

function createSectionState<T>(
  createState: typeof createOutputState,
  init: ((section: Section) => T) | (() => T) | undefined,
) {
  const [getBySection] = createState(() => new Map<Section, T>());
  return [
    (section: Section): T => {
      const bySection = getBySection();
      let value = bySection.get(section);
      if (value == null && init)
        bySection.set(section, (value = init(section)));
      return value as T;
    },
    (section: Section, value: T): void => {
      getBySection().set(section, value);
    },
  ] as const;
}
