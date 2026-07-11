import type { types as t } from "@marko/compiler";

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    analyzeFailed?: boolean;
  }
}

// Collect analyze-stage errors per file so a template with several mistakes
// reports them together instead of one compile round-trip at a time. A single
// collected error is rethrown as-is, keeping today's output byte-identical.
// The aggregate formatting mirrors `@marko/compiler`'s CompileErrors
// (src/util/merge-errors.js), which is not importable from both the src and
// published layouts of the compiler package.

const analyzeErrors = new WeakMap<t.BabelFile, Error[]>();
const maxReportedErrors = 8;
const indent = "    ";
const compileErrorPrefix = `CompileError: \n`;
const compileErrorStackTracePrefix = `${compileErrorPrefix + indent}at `;

export function recordAnalyzeError(file: t.BabelFile, error: unknown): void {
  if (!(error instanceof Error)) throw error;
  let errors = analyzeErrors.get(file);
  if (!errors) analyzeErrors.set(file, (errors = []));
  if (errors.length >= maxReportedErrors) return;
  // The message embeds the code frame, so an identical message is the same
  // error reached through a second analysis path; reporting it twice adds
  // nothing.
  for (const existing of errors) {
    if (existing.message === error.message) return;
  }
  errors.push(error);
}

export function throwAnalyzeErrors(file: t.BabelFile): void {
  const errors = analyzeErrors.get(file);
  if (!errors) return;
  analyzeErrors.delete(file);
  if (errors.length === 1) throw errors[0];
  throw new AggregateAnalyzeErrors(errors);
}

class AggregateAnalyzeErrors extends Error {
  errors: Error[];
  constructor(errors: Error[]) {
    const message = `\n${errors
      .map(({ stack = "" }) => {
        if (stack.startsWith(compileErrorStackTracePrefix)) {
          return stack.slice(compileErrorPrefix.length);
        }
        return stack.replace(/^(?!\s*$)/gm, indent);
      })
      .join("\n\n")}`;
    const { stackTraceLimit } = Error;
    Error.stackTraceLimit = 0;
    super(message);
    this.name = "CompileErrors";
    this.errors = errors;
    Error.stackTraceLimit = stackTraceLimit;
  }

  override toString() {
    return `${this.name}: ${this.message}`;
  }
}
