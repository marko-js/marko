import type { Section } from "./sections";
import { createProgramState, createSectionState } from "./state";

/**
 * Extension points for {@link finalizeReferences}.
 *
 * `finalizeReferences` runs a fixed sequence of resolution passes. Rather than
 * accumulating every feature's finalize logic in `references.ts`, a feature
 * declares its per-compile state with {@link createFinalizeState} /
 * {@link createSectionFinalizeState} and passes the finalize logic alongside it.
 * The hook is registered automatically the first time that state is created in a
 * compile, so it runs iff the feature is used — with no import-order dependency
 * and no manual registration. `finalizeReferences` drains each phase at the
 * matching point in its pipeline via {@link runFinalize} /
 * {@link runFinalizeSection}.
 */
export const enum FinalizePhase {
  /** Per section, before binding sources are resolved. */
  Downstreams,
  /**
   * Once, after bindings, sources, assignments, hoists, and closures are
   * resolved. Serialize reasons may still be added here — they are finalized per
   * section in a later pass.
   */
  Resolved,
  /**
   * Per section (deepest first), before that section's serialize reasons are
   * finalized.
   */
  KnownTags,
}

const [getOnceHooks] = createProgramState(
  () => new Map<FinalizePhase, Set<() => void>>(),
);
const [getSectionHooks] = createProgramState(
  () => new Map<FinalizePhase, Set<(section: Section) => void>>(),
);

export function runFinalize(phase: FinalizePhase) {
  getOnceHooks()
    .get(phase)
    ?.forEach((run) => run());
}

export function runFinalizeSection(phase: FinalizePhase, section: Section) {
  getSectionHooks()
    .get(phase)
    ?.forEach((run) => run(section));
}

/**
 * Program state whose `finalize` runs once during `phase`. The hook is registered
 * the first time the state is created in a compile.
 */
export function createFinalizeState<T>(
  phase: FinalizePhase,
  init: () => T,
  finalize: (state: T) => void,
) {
  return createProgramState<T>(() => {
    const state = init();
    addHook(getOnceHooks(), phase, () => finalize(state));
    return state;
  });
}

/**
 * Section state whose `finalize` runs per section during `phase`. The per-section
 * hook is registered the first time any section's state is created in a compile.
 */
export function createSectionFinalizeState<T>(
  key: string,
  phase: FinalizePhase,
  init: (section: Section) => T,
  finalize: (section: Section, state: T) => void,
) {
  const [isRegistered, setRegistered] = createProgramState(() => false);
  const [getState] = createSectionState<T>(key, (section) => {
    if (!isRegistered()) {
      setRegistered(true);
      addHook(getSectionHooks(), phase, (section) =>
        finalize(section, getState(section)),
      );
    }
    return init(section);
  });
  return [getState] as const;
}

function addHook<T>(
  map: Map<FinalizePhase, Set<T>>,
  phase: FinalizePhase,
  run: T,
) {
  const existing = map.get(phase);
  if (existing) {
    existing.add(run);
  } else {
    map.set(phase, new Set([run]));
  }
}
