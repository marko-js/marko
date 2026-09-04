import type { Section } from "../sections";
import { createProgramState } from "../state";

// Persisted analyze work needing resolved sources: runs inside reference
// finalization but BEFORE reason groups freeze and call sites classify.
const [getPersistedFinalizers] = createProgramState<(() => void)[]>(() => []);
export function onFinalizePersisted(finalize: () => void) {
  getPersistedFinalizers().push(finalize);
}
// Structure classification runs first (state-selection itself derives on
// demand from resolved sources; these callbacks record its consequences).
const [getStructureClassifiers] = createProgramState<
  [depth: number, classify: () => void][]
>(() => []);
export function onClassifyStructure(section: Section, classify: () => void) {
  getStructureClassifiers().push([section.depth, classify]);
}
// Both queues drain: a callback closes over analyzed nodes, and the
// program state outlives this pass.
export function finalizePersisted() {
  const classifiers = getStructureClassifiers();
  for (const [, classify] of classifiers.sort(([a], [b]) => a - b)) {
    classify();
  }
  classifiers.length = 0;
  const finalizers = getPersistedFinalizers();
  for (const finalize of finalizers) finalize();
  finalizers.length = 0;
}
