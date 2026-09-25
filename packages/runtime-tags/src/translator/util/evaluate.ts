import { types as t } from "@marko/compiler";
import {
  computeNode,
  getFile,
  loadFileForImport,
} from "@marko/compiler/babel-utils";

import {
  getImportFacts,
  type LoadImportConfig,
} from "../visitors/import-declaration";
import { isAnalyzing } from "./get-compile-stage";
import type { SortedOneMany } from "./optional";
import { type Binding, bindingUtil, getParamPropertyRead } from "./references";
import { skip, traverseContains } from "./traverse";

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    confident?: boolean;
    computed?: unknown;
    nullable?: boolean;
    /** Evaluating it has no side effects, so an unread value can go. */
    pure?: boolean;
    possibleValues?: PossibleValues;
  }
}

/** What an expression's value may be, as the kinds of value it may take. */
export interface PossibleValues {
  /** A string or number. */
  text?: true;
  /** `false`, `null` or `undefined`, or the falsy left of `&&`. */
  falsy?: true;
  /** The `.marko` templates it may be, or `false` while one is still analyzing. */
  templates?: t.ProgramExtra[] | false;
  /** The one import every template it may be comes from, `false` if several. */
  imported?: string | false;
  load?: LoadImportConfig;
  /** The params whose values it may be. */
  params?: SortedOneMany<Binding>;
  /** Anything else. */
  other?: true;
}

const MARKO_FILE_REG = /^<.*>$|\.marko$/;
const OTHER: PossibleValues = { other: true };
const TEXT: PossibleValues = { text: true };
const FALSY: PossibleValues = { falsy: true };
const computingValues = new Set<t.Node>();

// Follows branches and `<const>` values to what an expression may evaluate to;
// a `<const>` that cycles back to itself may be anything.
export function getPossibleValues(
  path: t.NodePath<t.Expression>,
): PossibleValues {
  const extra = (path.node.extra ??= {});
  if (extra.possibleValues) return extra.possibleValues;
  if (computingValues.has(path.node)) return OTHER;
  computingValues.add(path.node);
  try {
    return (extra.possibleValues = computePossibleValues(path));
  } finally {
    computingValues.delete(path.node);
  }
}

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
      extra.nullable = computed.value == null;
      extra.pure = true;
    } else {
      extra.computed = undefined;
      extra.confident = false;
      extra.nullable = isNullableExpr(value);
      extra.pure = !traverseContains(value, isImpure);
    }
  }

  return extra as T["extra"] & {
    confident: boolean;
    nullable: boolean;
    computed: unknown;
  };
}

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

function isNullableExpr(expr: t.Expression): boolean {
  switch (expr.type) {
    case "ArrayExpression":
    case "ArrowFunctionExpression":
    case "BigIntLiteral":
    case "BinaryExpression":
    case "BooleanLiteral":
    case "ClassExpression":
    case "FunctionExpression":
    case "NewExpression":
    case "NumericLiteral":
    case "ObjectExpression":
    case "RegExpLiteral":
    case "StringLiteral":
    case "TemplateLiteral":
    case "UpdateExpression":
      return false;
    case "AssignmentExpression":
      switch (expr.operator) {
        case "=":
          return isNullableExpr(expr.right);
        case "*=":
        case "/=":
        case "%=":
        case "+=":
        case "-=":
        case "<<=":
        case ">>=":
        case ">>>=":
        case "&=":
        case "^=":
        case "|=":
        case "**=":
          return false;
        case "||=":
        case "??=":
          // The left operand can only be the result when it is truthy
          // (`||=`) or non-nullish (`??=`), so only the right can be nullish.
          return isNullableExpr(expr.right);
        case "&&=":
          return (
            isNullableExpr(expr.left as t.Expression) ||
            isNullableExpr(expr.right)
          );
        default:
          return true;
      }
    case "AwaitExpression":
      return isNullableExpr(expr.argument);
    case "ConditionalExpression":
      return isNullableExpr(expr.consequent) || isNullableExpr(expr.alternate);
    case "LogicalExpression":
      switch (expr.operator) {
        case "||":
        case "??":
          // The left operand can only be the result when it is truthy (`||`)
          // or non-nullish (`??`), so only the right can be nullish.
          return isNullableExpr(expr.right);
        case "&&":
          return isNullableExpr(expr.left) || isNullableExpr(expr.right);
        default:
          return true;
      }
    case "ParenthesizedExpression":
      return isNullableExpr(expr.expression);
    case "SequenceExpression":
      return isNullableExpr(expr.expressions[expr.expressions.length - 1]);
    case "UnaryExpression":
      return expr.operator === "void";
    default:
      return true;
  }
}

function computePossibleValues(path: t.NodePath<t.Expression>): PossibleValues {
  if (path.isConditionalExpression()) {
    return mergePossibleValues(
      getPossibleValues(path.get("consequent")),
      getPossibleValues(path.get("alternate")),
    );
  }

  if (path.isLogicalExpression()) {
    const right = getPossibleValues(path.get("right"));
    const left =
      path.node.operator === "&&" ? FALSY : getPossibleValues(path.get("left"));
    // `||` only results in a truthy left.
    return mergePossibleValues(
      path.node.operator === "||" && left.falsy
        ? { ...left, falsy: undefined }
        : left,
      right,
    );
  }

  if (path.isAssignmentExpression()) {
    return path.node.operator === "="
      ? getPossibleValues(path.get("right"))
      : OTHER;
  }

  const param = getParamPropertyRead(path.node.extra);
  if (param) return { params: param };

  const binding = path.isIdentifier() && path.scope.getBinding(path.node.name);
  if (binding) return getBindingPossibleValues(binding);

  const { confident, computed } = evaluate(path.node);
  if (confident) {
    return typeof computed === "string" || typeof computed === "number"
      ? TEXT
      : computed == null || computed === false
        ? FALSY
        : OTHER;
  }

  return path.isBinaryExpression() || path.isTemplateLiteral() ? TEXT : OTHER;
}

function getBindingPossibleValues(
  binding: NonNullable<ReturnType<t.Scope["getBinding"]>>,
): PossibleValues {
  if (binding.kind === "module") {
    const declPath = binding.path.parentPath as t.NodePath<t.ImportDeclaration>;
    const decl = declPath.node;
    if (
      !MARKO_FILE_REG.test(decl.source.value) ||
      !decl.specifiers.some((it) => t.isImportDefaultSpecifier(it))
    ) {
      return OTHER;
    }

    const { tagImport, loadImport } = getImportFacts(declPath);
    const childFile = loadFileForImport(getFile(), tagImport!);
    const childExtra = childFile?.ast.program.extra;
    return {
      // A template still analyzing (this one, or a cycle) has no reasons to
      // consult yet, so the value resolves to no known template.
      templates: childExtra && !isAnalyzing(childFile!) ? [childExtra] : false,
      imported: tagImport!,
      load: loadImport,
    };
  }

  const bindingTag = binding.path as t.NodePath<t.MarkoTag>;
  if (
    bindingTag.isMarkoTag() &&
    (binding.kind as typeof binding.kind & "local") === "local" &&
    (bindingTag.get("name").node as t.StringLiteral).value === "const"
  ) {
    return getPossibleValues(
      (bindingTag.get("attributes")[0] as t.NodePath<t.MarkoAttribute>).get(
        "value",
      ),
    );
  }

  // A `<let>` may be assigned anything, and any other tag variable (a
  // `<define>`'s, a child's) may name a component.
  return OTHER;
}

function mergePossibleValues(
  a: PossibleValues,
  b: PossibleValues,
): PossibleValues {
  if (a.other || b.other) return OTHER;
  const merged = { ...a };
  if (b.text) merged.text = true;
  if (b.falsy) merged.falsy = true;
  if (b.params) merged.params = bindingUtil.union(a.params, b.params);
  if (b.templates !== undefined) {
    merged.templates =
      a.templates === undefined
        ? b.templates
        : a.templates &&
          b.templates &&
          mergeTemplates(a.templates, b.templates);
    merged.imported =
      a.imported === undefined || a.imported === b.imported
        ? b.imported
        : false;
    merged.load ??= b.load;
  }
  return merged;
}

function mergeTemplates(a: t.ProgramExtra[], b: t.ProgramExtra[]) {
  let merged = a;
  for (const template of b) {
    if (!merged.includes(template)) {
      if (merged === a) merged = [...a];
      merged.push(template);
    }
  }
  return merged;
}
