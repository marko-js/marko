import type { types as t } from "@marko/compiler";
import { diagnosticError } from "@marko/compiler/babel-utils";

import { createProgramState } from "./state";

// Analyze failures are recorded as error diagnostics so one compile reports
// every mistake in the template (the compiler throws them together at the
// end of the analyze stage, and editors compiling with `errorRecovery` keep
// them as recoverable diagnostics instead of a thrown error). Code-frame
// errors built by the compiler carry their original `label`/`loc`, so
// nothing is lost converting a caught error into a diagnostic.

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
