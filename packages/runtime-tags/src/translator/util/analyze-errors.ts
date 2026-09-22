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
  const { filename } = error as { filename?: string };
  // A tag's template that fails to compile throws errors already framed
  // against that file; recording them here would frame them against this one.
  if (
    !(error instanceof Error) ||
    (filename !== undefined && filename !== path.hub.file.opts.filename)
  ) {
    throw error;
  }
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
