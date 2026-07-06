import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

// A member access whose object is a CSS module resolves to a class string at
// runtime (the bundler fills in the value). We can't know the string, but
// knowing it *is* a string lets the `class` attribute optimizer treat it like a
// static token instead of an opaque value handed to the runtime walker.
const CSS_MODULE_SOURCE_REG = /\.(css|less|s[ac]ss|styl|stylus|p?css)($|\?)/i;

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    styleModuleVars?: Set<string>;
  }
}

/**
 * Records that a `<style/name>` tag introduces `name` as a CSS module object.
 * Called from the `<style>` tag's analyze so the name is known before any
 * translate runs (translate removes the tag and emits the backing import, at
 * which point the binding is no longer inspectable).
 */
export function registerStyleModuleVar(name: string) {
  const program = getProgram().node;
  ((program.extra ??= {}).styleModuleVars ??= new Set()).add(name);
}

/**
 * True when `expr` is `obj.prop` / `obj["prop"]` with a statically known key and
 * `obj` is a CSS module: either a default/namespace import from a stylesheet
 * source, or the `var` of a `<style>` tag (which compiles to such an import).
 */
export function isCSSModuleClass(
  expr: t.Expression | t.PrivateName,
  scope: {
    getBinding(name: string): { kind: string; path: t.NodePath } | void;
  },
): expr is t.MemberExpression {
  if (!t.isMemberExpression(expr) || !t.isIdentifier(expr.object)) {
    return false;
  }

  // Require a statically known property (`styles.foo` / `styles["foo"]`) so the
  // access is a constant class string with no reactive dependency of its own.
  if (
    expr.computed
      ? !t.isStringLiteral(expr.property)
      : !t.isIdentifier(expr.property)
  ) {
    return false;
  }

  // A `<style/var>` matches by name in both phases. Checked before the binding
  // because analyze still sees the tag's local binding while translate (which
  // has removed the tag) sees none - relying on the binding would disagree.
  if (getProgram().node.extra?.styleModuleVars?.has(expr.object.name)) {
    return true;
  }

  const binding = scope.getBinding(expr.object.name);
  if (!binding || binding.kind !== "module") {
    return false;
  }

  const specifier = binding.path.node;
  const decl = binding.path.parent;
  return (
    t.isImportDeclaration(decl) &&
    (t.isImportDefaultSpecifier(specifier) ||
      t.isImportNamespaceSpecifier(specifier)) &&
    CSS_MODULE_SOURCE_REG.test(decl.source.value)
  );
}

/** The accessed class name, when statically known, for dev diagnostics. */
export function cssModuleClassName(
  expr: t.MemberExpression,
): string | undefined {
  if (!expr.computed && t.isIdentifier(expr.property)) {
    return expr.property.name;
  }
  if (expr.computed && t.isStringLiteral(expr.property)) {
    return expr.property.value;
  }
  return undefined;
}
