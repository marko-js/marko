import type { types as t } from "@marko/compiler";
import type {
  Diagnostic,
  DiagnosticOptions,
} from "@marko/compiler/babel-utils";

import type { CompileFile } from "../util/compile-file";

export const DiagnosticType = {
  Error: "error",
  Warning: "warning",
  Deprecation: "deprecation",
  Suggestion: "suggestion",
} as const;

type DiagnosticType = (typeof DiagnosticType)[keyof typeof DiagnosticType];

export function diagnosticError(path: t.NodePath, options: DiagnosticOptions) {
  add(DiagnosticType.Error, path, options);
}

// The three channels below never throw, in either mode. They reach
// `meta.diagnostics` only, so a consumer reading thrown errors alone sees none.
export function diagnosticWarn(path: t.NodePath, options: DiagnosticOptions) {
  add(DiagnosticType.Warning, path, options);
}

export function diagnosticDeprecate(
  path: t.NodePath,
  options: DiagnosticOptions,
) {
  add(DiagnosticType.Deprecation, path, options);
}

export function diagnosticSuggest(
  path: t.NodePath,
  options: DiagnosticOptions,
) {
  add(DiagnosticType.Suggestion, path, options);
}

function add(
  type: DiagnosticType,
  path: t.NodePath,
  options: DiagnosticOptions,
) {
  const file = path.hub.file as CompileFile;
  const { diagnostics } = file.metadata.marko;
  const { label, fix: rawFix, loc = getNearestLoc(path) } = options;
  let fix: Diagnostic["fix"] = false;

  if (rawFix) {
    switch (file.___compileStage) {
      case "parse":
      case "migrate":
        break;
      default:
        throw new Error(
          "Diagnostic fixes can only be registered up to and including the migrate stage.",
        );
    }

    const { applyFixes } = file.markoOpts;
    let apply: (value: unknown) => void;

    if (typeof rawFix === "function") {
      apply = rawFix as (value: unknown) => void;
      fix = true;
    } else {
      // strip off the apply function.
      ({ apply, ...fix } = rawFix as Exclude<typeof rawFix, Function> & {
        apply(value: unknown): void;
      });
    }

    if (applyFixes) {
      const i = diagnostics.length;
      if (applyFixes.has(i)) {
        apply(applyFixes.get(i));
      }
    } else {
      apply(undefined);
    }
  }

  diagnostics.push({
    type: type as Diagnostic["type"],
    label,
    // Kept as given: an explicit `null` says the diagnostic has no location.
    loc: loc as Diagnostic["loc"],
    fix,
  });
}

// A node a migrator or transform builds has no loc, so mark what contains it,
// short of the program: its loc is the whole file.
function getNearestLoc(path: t.NodePath) {
  let cur = path;
  while (!cur.node.loc && cur.parentPath && cur.parentPath.type !== "Program") {
    cur = cur.parentPath;
  }
  return cur.node.loc;
}
