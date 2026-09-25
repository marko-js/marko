import { types as t } from "@marko/compiler";
import {
  computeNode,
  getFile,
  loadFileForImport,
} from "@marko/compiler/babel-utils";

import { getImportFacts } from "../visitors/import-declaration";
import * as ValueKind from "./constants/value-kind";
import { createCyclicMemo } from "./cyclic-memo";
import { isAnalyzing } from "./get-compile-stage";
import { forEach, type SortedOneMany } from "./optional";
import { type Binding, bindingUtil, getReadBinding } from "./references";
import { skip, traverseContains } from "./traverse";

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    confident?: boolean;
    computed?: unknown;
    /** Evaluating it has no side effects, so an unread value can go. */
    pure?: boolean;
    possibleValues?: PossibleValues;
  }
}

/** What a value may be: the `ValueKind`s it may take, and the bindings and
 * imports whose values it may be. */
export interface PossibleValues {
  /** The kinds it may be besides its references' values. */
  kinds: number;
  /** The kinds its references' values are narrowed to (by `||` or `??`). */
  refKinds: number;
  bindings?: SortedOneMany<Binding>;
  imports?: ImportedValue[];
}

/** An export of a module this template imports. */
export interface ImportedValue {
  /** The import declaration's facts (`tagImport`, `loadImport`). */
  from: t.NodeExtra;
  /** `default`, `*` for the namespace, or the export's name. */
  name: string;
  /** The template a tag import's default export is, once it is analyzed. */
  template?: t.ProgramExtra;
}

export const ANY_VALUE: PossibleValues = { kinds: ValueKind.Any, refKinds: 0 };
const NO_VALUE: PossibleValues = { kinds: 0, refKinds: 0 };
const computingValues = new Set<t.Node>();

export default function evaluate<T extends t.Expression>(value: T) {
  let { extra } = value;

  if (!extra) {
    extra = value.extra = {};
  }

  if (extra.confident === undefined) {
    const computed = computeNode(value);
    if (computed) {
      extra.computed = computed.value;
      extra.confident = true;
      extra.pure = true;
    } else {
      extra.computed = undefined;
      extra.confident = false;
      extra.pure = !traverseContains(value, isImpure);
    }
  }

  return extra as T["extra"] & {
    confident: boolean;
    computed: unknown;
  };
}

// What an expression may evaluate to, following branches and `<const>` values
// to their bindings and imports; a `<const>` cycle may be anything.
export function getPossibleValues(
  path: t.NodePath<t.Expression>,
): PossibleValues {
  const extra = (path.node.extra ??= {});
  if (extra.possibleValues) return extra.possibleValues;
  if (computingValues.has(path.node)) return ANY_VALUE;
  computingValues.add(path.node);
  try {
    return (extra.possibleValues = computePossibleValues(path));
  } finally {
    computingValues.delete(path.node);
  }
}

// What a value may be once each binding whose assignments are all known (a
// param whose calls are) is replaced with what they assign.
export function resolvePossibleValues(values: PossibleValues) {
  if (!values.bindings) return values;
  let resolved: PossibleValues = {
    kinds: values.kinds,
    refKinds: values.imports ? values.refKinds : 0,
    imports: values.imports,
  };
  forEach(values.bindings, (binding) => {
    resolved = mergePossibleValues(
      resolved,
      narrowPossibleValues(getResolvedValues(binding), values.refKinds),
    );
  });
  return resolved;
}

export function getValueKinds(values: PossibleValues) {
  return values.kinds | values.refKinds;
}

export function getBindingValues(binding: Binding): PossibleValues {
  return { kinds: 0, refKinds: ValueKind.Any, bindings: binding };
}

export function mergePossibleValues(
  a: PossibleValues | undefined,
  b: PossibleValues,
): PossibleValues {
  if (!a || a === b) return b;
  return {
    kinds: a.kinds | b.kinds,
    refKinds: a.refKinds | b.refKinds,
    bindings: bindingUtil.union(a.bindings, b.bindings),
    imports: mergeImports(a.imports, b.imports),
  };
}

const getResolvedValues = createCyclicMemo(
  (binding: Binding): PossibleValues =>
    binding.passedValues
      ? resolvePossibleValues(binding.passedValues)
      : getBindingValues(binding),
  NO_VALUE,
);

// Marko expressions treat reads (member access included) as pure, so only
// what runs other code or writes counts; a function or method body does not
// run where it is declared.
function isImpure(node: t.Node) {
  switch (node.type) {
    case "ArrowFunctionExpression":
    case "ClassPrivateMethod":
    case "ClassPrivateProperty":
    case "FunctionExpression":
      return skip;
    case "ClassMethod":
    case "ObjectMethod":
      // A computed key runs where the member is declared; the body does not.
      return (node.computed && traverseContains(node.key, isImpure)) || skip;
    case "ClassAccessorProperty":
    case "ClassProperty":
      // Only a static field's value runs where the class is declared.
      return node.static
        ? undefined
        : (node.computed && traverseContains(node.key, isImpure)) || skip;
    case "CallExpression":
      // An immediately invoked function is as pure as what its body runs.
      return node.callee.type === "ArrowFunctionExpression" ||
        node.callee.type === "FunctionExpression"
        ? traverseContains(node.arguments, isImpure) ||
            traverseContains(node.callee.params, isImpure) ||
            traverseContains(node.callee.body, isImpure) ||
            skip
        : true;
    case "AssignmentExpression":
    case "NewExpression":
    case "OptionalCallExpression":
    case "TaggedTemplateExpression":
    case "ThrowStatement":
    case "UpdateExpression":
      return true;
    case "UnaryExpression":
      return node.operator === "delete";
  }
}

function computePossibleValues(path: t.NodePath<t.Expression>): PossibleValues {
  const { node } = path;
  switch (node.type) {
    case "ConditionalExpression":
      return mergePossibleValues(
        getPossibleValues(path.get("consequent") as t.NodePath<t.Expression>),
        getPossibleValues(path.get("alternate") as t.NodePath<t.Expression>),
      );
    case "LogicalExpression":
      return getLogicalValues(
        node.operator,
        path.get("left") as t.NodePath<t.Expression>,
        path.get("right") as t.NodePath<t.Expression>,
      );
    case "AssignmentExpression":
      switch (node.operator) {
        case "=":
          return getPossibleValues(
            path.get("right") as t.NodePath<t.Expression>,
          );
        case "&&=":
        case "||=":
        case "??=":
          return getLogicalValues(
            node.operator.slice(0, -1) as t.LogicalExpression["operator"],
            path.get("left") as t.NodePath<t.Expression>,
            path.get("right") as t.NodePath<t.Expression>,
          );
        case "+=":
          return getKindValues(ValueKind.String | ValueKind.Numeric);
        default:
          return getKindValues(ValueKind.Numeric);
      }
    case "SequenceExpression":
      return getPossibleValues(
        (path.get("expressions") as t.NodePath<t.Expression>[]).at(-1)!,
      );
    case "ParenthesizedExpression":
      return getPossibleValues(
        path.get("expression") as t.NodePath<t.Expression>,
      );
    case "AwaitExpression": {
      const values = getPossibleValues(
        path.get("argument") as t.NodePath<t.Expression>,
      );
      // A thenable settles to anything.
      return getValueKinds(values) & (ValueKind.Function | ValueKind.Object)
        ? ANY_VALUE
        : values;
    }
    case "Identifier": {
      const binding = path.scope.getBinding(node.name);
      if (binding) return getDeclaredValues(binding);
      break;
    }
  }

  const binding = getReadBinding(node.extra);
  if (binding) return getBindingValues(binding);

  const computed = computeNode(node);
  if (computed) return getKindValues(getValueKind(computed.value));

  switch (node.type) {
    case "TemplateLiteral":
      return getKindValues(
        node.quasis.some((quasi) => quasi.value.cooked)
          ? ValueKind.NonEmptyString
          : ValueKind.String,
      );
    case "BinaryExpression":
      switch (node.operator) {
        case "+":
          return getKindValues(ValueKind.String | ValueKind.Numeric);
        case "-":
        case "*":
        case "/":
        case "%":
        case "**":
        case "&":
        case "|":
        case "^":
        case "<<":
        case ">>":
        case ">>>":
          return getKindValues(ValueKind.Numeric);
        default:
          return getKindValues(ValueKind.Boolean);
      }
    case "UnaryExpression":
      switch (node.operator) {
        case "void":
          return getKindValues(ValueKind.Undefined);
        case "typeof":
          return getKindValues(ValueKind.NonEmptyString);
        case "!":
        case "delete":
          return getKindValues(ValueKind.Boolean);
        default:
          return getKindValues(ValueKind.Numeric);
      }
    case "UpdateExpression":
      return getKindValues(ValueKind.Numeric);
    case "ArrowFunctionExpression":
    case "ClassExpression":
    case "FunctionExpression":
      return getKindValues(ValueKind.Function);
    case "ArrayExpression":
    case "NewExpression":
    case "ObjectExpression":
    case "RegExpLiteral":
      return getKindValues(ValueKind.Object);
  }

  return ANY_VALUE;
}

// `&&` results in a falsy left, `||` a truthy one, and `??` a non-nullish one.
function getLogicalValues(
  operator: t.LogicalExpression["operator"],
  left: t.NodePath<t.Expression>,
  right: t.NodePath<t.Expression>,
) {
  return mergePossibleValues(
    narrowPossibleValues(
      getPossibleValues(left),
      operator === "&&"
        ? ValueKind.Falsy
        : operator === "||"
          ? ValueKind.Any & ~ValueKind.Falsy
          : ValueKind.Any & ~ValueKind.Nullish,
    ),
    getPossibleValues(right),
  );
}

function getDeclaredValues(
  binding: NonNullable<ReturnType<t.Scope["getBinding"]>>,
): PossibleValues {
  if (binding.kind === "module") {
    return getImportedValues(binding.path);
  }

  const tag = binding.path as t.NodePath<t.MarkoTag>;
  if (
    tag.isMarkoTag() &&
    tag.node.var === binding.identifier &&
    (tag.node.name as t.StringLiteral).value === "const"
  ) {
    return getPossibleValues(
      (tag.get("attributes")[0] as t.NodePath<t.MarkoAttribute>).get("value"),
    );
  }

  const declared = binding.identifier.extra?.binding;
  return declared ? getBindingValues(declared) : ANY_VALUE;
}

function getImportedValues(specifier: t.NodePath): PossibleValues {
  const { node } = specifier as t.NodePath<
    t.ImportDeclaration["specifiers"][0]
  >;
  const from = getImportFacts(
    specifier.parentPath as t.NodePath<t.ImportDeclaration>,
  );
  const name = t.isImportDefaultSpecifier(node)
    ? "default"
    : t.isImportNamespaceSpecifier(node)
      ? "*"
      : t.isIdentifier(node.imported)
        ? node.imported.name
        : node.imported.value;
  if (!from.tagImport || name !== "default") {
    return { kinds: 0, refKinds: ValueKind.Any, imports: [{ from, name }] };
  }

  // A template still analyzing (this one, or a cycle) has no facts to consult
  // yet; either way the default export is a template or a tag's renderer.
  const childFile = loadFileForImport(getFile(), from.tagImport);
  const template =
    childFile && !isAnalyzing(childFile)
      ? childFile.ast.program.extra
      : undefined;
  return {
    kinds: 0,
    refKinds: ValueKind.Function | ValueKind.Object,
    imports: [{ from, name, template }],
  };
}

// References narrowed to falsy values are only those values.
function narrowPossibleValues(
  values: PossibleValues,
  kinds: number,
): PossibleValues {
  const refKinds = values.refKinds & kinds;
  return refKinds & ~ValueKind.Falsy
    ? {
        kinds: values.kinds & kinds,
        refKinds,
        bindings: values.bindings,
        imports: values.imports,
      }
    : getKindValues((values.kinds | refKinds) & kinds);
}

function mergeImports(
  a: ImportedValue[] | undefined,
  b: ImportedValue[] | undefined,
) {
  if (!a) return b;
  let merged = a;
  if (b) {
    for (const imported of b) {
      if (
        !merged.some(
          (it) => it.from === imported.from && it.name === imported.name,
        )
      ) {
        if (merged === a) merged = [...a];
        merged.push(imported);
      }
    }
  }
  return merged;
}

function getKindValues(kinds: number): PossibleValues {
  return { kinds, refKinds: 0 };
}

function getValueKind(value: unknown) {
  switch (typeof value) {
    case "undefined":
      return ValueKind.Undefined;
    case "boolean":
      return value ? ValueKind.True : ValueKind.False;
    case "number":
    case "bigint":
      return value ? ValueKind.NonZero : ValueKind.Zero;
    case "string":
      return value ? ValueKind.NonEmptyString : ValueKind.EmptyString;
    case "function":
      return ValueKind.Function;
    default:
      return value === null ? ValueKind.Null : ValueKind.Object;
  }
}
