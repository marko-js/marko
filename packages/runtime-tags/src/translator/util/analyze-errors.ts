import type { types as t } from "@marko/compiler";
import { diagnosticError } from "@marko/compiler/babel-utils";

import { createProgramState } from "./state";

// Recorded as diagnostics rather than thrown so one compile reports every
// mistake, and `errorRecovery` editors keep them as recoverable diagnostics.

const [getHasAnalyzeErrors, setHasAnalyzeErrors] = createProgramState(
  () => false,
);

export function reportAnalyzeError(
  path: t.NodePath<t.Node>,
  error: unknown,
): void {
  if (!(error instanceof Error)) throw error;
  const { label = error.message, loc } = error as Error & {
    label?: string;
    loc?: t.SourceLocation;
  };
  setHasAnalyzeErrors(true);
  diagnosticError(path, { label, loc: loc ?? path.node.loc ?? undefined });
}

export function hasAnalyzeErrors(): boolean {
  return getHasAnalyzeErrors();
}
