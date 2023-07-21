export const DiagnosticType = {
  Error: "error",
  Warning: "warning",
  Deprecation: "deprecation",
  Suggestion: "suggestion",
};

export function diagnosticError(path, options) {
  add(DiagnosticType.Error, path, options);
}

export function diagnosticWarn(path, options) {
  add(DiagnosticType.Warning, path, options);
}

export function diagnosticDeprecate(path, options) {
  add(DiagnosticType.Deprecation, path, options);
}

export function diagnosticSuggest(path, options) {
  add(DiagnosticType.Suggestion, path, options);
}

function add(type, path, options) {
  const { file } = path.hub;
  const { diagnostics } = file.metadata.marko;
  const { label, fix: rawFix, loc = path.node.loc } = options;
  let fix = false;

  if (rawFix) {
    if (file.___compileStage !== "migrate") {
      throw new Error(
        "Diagnostic fixes can only be registered during the migrate stage."
      );
    }

    const { applyFixes } = file.markoOpts;
    let apply;

    if (typeof rawFix === "function") {
      apply = rawFix;
      fix = true;
    } else {
      // strip off the apply function.
      ({ apply, ...fix } = rawFix);
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

  diagnostics.push({ type, label, loc, fix });
}
