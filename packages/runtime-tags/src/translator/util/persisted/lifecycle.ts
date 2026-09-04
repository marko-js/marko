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
export function finalizePersisted() {
  for (const [, classify] of getStructureClassifiers().sort(
    ([a], [b]) => a - b,
  )) {
    classify();
  }
  for (const finalize of getPersistedFinalizers()) finalize();
}
