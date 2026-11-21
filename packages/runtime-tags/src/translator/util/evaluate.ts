import type { types as t } from "@marko/compiler";

import { isCoreTagName } from "./is-core-tag";
import { concat, type Opt, reduce, some } from "./optional";
import { isReferenceHoisted } from "./references";
import { getImportFacts } from "./tag-import";
import { someChild } from "./traverse";

/** A non-empty string. */
export const KIND_STRING = 1;
/** `""`, `0`, `NaN`, `0n` or `false`. */
export const KIND_FALSY = 2;
export const KIND_NULLISH = 4;
/** A truthy number or bigint, or `true`. */
export const KIND_SCALAR = 8;
/** A function or class written in the template, or a hoisted read's getter. */
export const KIND_FUNCTION = 16;
/** An object, array or instance written in the template, which may hold content. */
const KIND_OBJECT = 32;
/** A template: each one the template shows is listed in `templates`. */
export const KIND_TEMPLATE = 64;
const KIND_PRIMITIVE = KIND_STRING | KIND_FALSY | KIND_NULLISH | KIND_SCALAR;
const KIND_ANY = 127;

// What the template does not show (a JS import, a call's result, a `<let>`)
// has the same bits above the kinds it shows: all of them, less what passes.
const UNKNOWN_SHIFT = 7;
const UNKNOWN_ANY = KIND_ANY << UNKNOWN_SHIFT;
const KIND_BITS = KIND_ANY | UNKNOWN_ANY;
/** It folds to the constant in `computed`. */
const CONFIDENT = 1 << 14;
/** Evaluating it may have a side effect. */
const IMPURE = 1 << 15;
/** It may be nullish, taking every name it reads as unknown. */
const NULLABLE = 1 << 16;
/** Its kind follows the names it reads; a fold is final. */
const FOLLOWED = 1 << 17;

/** What an expression computes to, and its value kind: what it may be. */
interface Evaluated {
  /** Its traits: the `KIND_*` bits, the unknown ones above them, and its own facts. */
  traits: number;
  /** The constant it folds to, set only when it is confident. */
  computed: unknown;
  /** Each `.marko` default import it may be, in the order a tag name tries them. */
  templates: Opt<t.ImportDeclarationExtra>;
}

const kEvaluated = Symbol("evaluated");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kEvaluated]?: Evaluated;
  }
}

const MARKO_FILE_REG = /^<.*>$|\.marko$/;

// What each operator computes, applied to folded operands.
const unaryFolds: {
  [operator in t.UnaryExpression["operator"]]?: (arg: any) => unknown;
} = {
  "+": (arg) => +arg,
  "-": (arg) => -arg,
  "~": (arg) => ~arg,
  "!": (arg) => !arg,
  typeof: (arg) => typeof arg,
  void: () => undefined,
};
const binaryFolds: {
  [operator in t.BinaryExpression["operator"]]?: (a: any, b: any) => unknown;
} = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
  "**": (a, b) => a ** b,
  "|": (a, b) => a | b,
  "&": (a, b) => a & b,
  "^": (a, b) => a ^ b,
  "<<": (a, b) => a << b,
  ">>": (a, b) => a >> b,
  ">>>": (a, b) => a >>> b,
  "==": (a, b) => a == b,
  "!=": (a, b) => a != b,
  "===": (a, b) => a === b,
  "!==": (a, b) => a !== b,
  "<": (a, b) => a < b,
  "<=": (a, b) => a <= b,
  ">": (a, b) => a > b,
  ">=": (a, b) => a >= b,
};

const traitsOnlyRecords: Evaluated[] = [];

// What the node `getKind` walked last folds to, while it is `CONFIDENT`, and
// its templates, while it has `KIND_TEMPLATE`: read before walking another.
let computed: unknown;
let templates: Opt<t.ImportDeclarationExtra>;

// What the expression computes to at compile time, computed on first use.
export default function evaluate(value: t.Expression): Evaluated {
  return ((value.extra ??= {})[kEvaluated] ??= computeEvaluated(value));
}

// The value kind of `value` in `at`'s scope, following the `<const>` values
// and imports it names. Tags may ask while analyzed: it reads no `<let>`.
export function getValueKind(value: t.Expression, at: t.NodePath): Evaluated {
  const extra = (value.extra ??= {});
  const evaluated = (extra[kEvaluated] ??= computeEvaluated(value));
  if (evaluated.traits & FOLLOWED) return evaluated;
  // Marked first, so a `<const>` that reads itself (an error reported later)
  // gets the kind its node shows.
  extra[kEvaluated] = traitsOnly(evaluated.traits | FOLLOWED);
  const traits =
    (evaluated.traits & ~KIND_BITS) |
    (getKind(value, at) & KIND_BITS) |
    FOLLOWED;
  return (extra[kEvaluated] =
    traits & KIND_TEMPLATE
      ? { traits, computed: undefined, templates }
      : traitsOnly(traits));
}

export function isConfident(evaluated: Evaluated) {
  return !!(evaluated.traits & CONFIDENT);
}

export function isPure(evaluated: Evaluated) {
  return !(evaluated.traits & IMPURE);
}

export function isNullable(evaluated: Evaluated) {
  return !!(evaluated.traits & NULLABLE);
}

/** The `KIND_*` bits of what the template shows the value may be. */
export function getKinds(kind: Evaluated) {
  return kind.traits & KIND_ANY;
}

/** The `KIND_*` bits of what the template does not show that pass: an `||` or
 * `??` drops the falsy or nullish part. */
export function getUnknownKinds(kind: Evaluated) {
  return (kind.traits >> UNKNOWN_SHIFT) & KIND_ANY;
}

/** The `KIND_*` bits the value may be, shown or not. */
export function getAllKinds(kind: Evaluated) {
  return allKinds(kind.traits);
}

function computeEvaluated(value: t.Expression): Evaluated {
  const traits = getKind(value, undefined);
  return traits & CONFIDENT
    ? { traits, computed, templates: undefined }
    : traitsOnly(traits | (allKinds(traits) & KIND_NULLISH ? NULLABLE : 0));
}

// The traits of an expression folding to `value`, which it leaves in
// `computed`. It has no side effect, so its kind is final.
function foldTo(value: unknown) {
  const kinds = getComputedKinds(value);
  computed = value;
  return kinds | CONFIDENT | FOLLOWED | (kinds & KIND_NULLISH ? NULLABLE : 0);
}

function getComputedKinds(value: unknown) {
  return value == null
    ? KIND_NULLISH
    : !value
      ? KIND_FALSY
      : typeof value === "string"
        ? KIND_STRING
        : typeof value === "object"
          ? KIND_OBJECT
          : KIND_SCALAR;
}

// What `node` folds to, else its value kind, and whether evaluating it may have
// a side effect. With `at`, the path whose scope `node` reads from, it follows
// the names `node` reads; without, each is unknown.
function getKind(node: t.Node, at: t.NodePath | undefined): number {
  switch (node.type) {
    case "BooleanLiteral":
    case "NumericLiteral":
    case "StringLiteral":
      return foldTo(node.value);
    case "BigIntLiteral":
      return foldTo(BigInt(node.value));
    case "NullLiteral":
      return foldTo(null);
    case "RegExpLiteral":
      return foldTo(new RegExp(node.pattern, node.flags));
    case "TemplateLiteral": {
      let value = node.quasis[0].value.cooked;
      let folds = CONFIDENT;
      let traits = 0;
      for (let i = 0; i < node.expressions.length; i++) {
        const expr = getKind(node.expressions[i], at);
        folds &= expr;
        traits |= expr;
        // Only a part `computeNode` reaches is made a string.
        if (folds) value += computed + node.quasis[i + 1].value.cooked!;
      }
      return folds
        ? foldTo(value)
        : (node.quasis.some(isNonEmptyQuasi)
            ? KIND_STRING
            : KIND_STRING | KIND_FALSY) |
            (traits & IMPURE);
    }
    case "ArrowFunctionExpression":
    case "FunctionExpression":
      // A function's body does not run where it is declared.
      return KIND_FUNCTION;
    case "ClassExpression":
      return KIND_FUNCTION | (someChild(node, isImpure) ? IMPURE : 0);
    case "ObjectExpression": {
      const value: Record<string, unknown> = {};
      let folds = CONFIDENT;
      let traits = 0;
      for (let i = 0; i < node.properties.length; i++) {
        const prop = node.properties[i];
        if (prop.type === "SpreadElement") {
          const arg = getKind(prop.argument, at);
          folds &= arg;
          traits |= arg;
          if (folds) Object.assign(value, computed);
        } else if (prop.type === "ObjectProperty") {
          let key = "";
          if (prop.computed) {
            const keyKind = getKind(prop.key, at);
            folds &= keyKind;
            traits |= keyKind;
            // Only a key `computeNode` reaches is made a string.
            if (folds) key = computed + "";
          } else if (prop.key.type === "Identifier") {
            key = prop.key.name;
          } else if (prop.key.type === "StringLiteral") {
            key = prop.key.value;
          } else {
            folds = 0;
          }
          const propValue = getKind(prop.value, at);
          folds &= propValue;
          traits |= propValue;
          if (folds) {
            if (prop.computed && key === "__proto__") {
              // Only the literal `__proto__:` sets the prototype; computed, it
              // is an own property, which assigning would not define.
              Object.defineProperty(value, key, {
                value: computed,
                writable: true,
                enumerable: true,
                configurable: true,
              });
            } else {
              value[key] = computed;
            }
          }
        } else {
          // A method or accessor has no value to fold.
          folds = 0;
          traits |= getKind(prop, at);
        }
      }
      return folds ? foldTo(value) : KIND_OBJECT | (traits & IMPURE);
    }
    case "ArrayExpression": {
      const value: unknown[] = [];
      let folds = CONFIDENT;
      let traits = 0;
      for (let i = 0; i < node.elements.length; i++) {
        const element = node.elements[i];
        if (!element) {
          value.length++;
        } else if (element.type === "SpreadElement") {
          // Only a fold to an iterable spreads.
          const arg = getKind(element.argument, at);
          const items: any = computed;
          traits |= arg;
          if (folds & arg && typeof items?.[Symbol.iterator] === "function") {
            for (const item of items) value.push(item);
          } else {
            folds = 0;
          }
        } else {
          const item = getKind(element, at);
          folds &= item;
          traits |= item;
          if (folds) value.push(computed);
        }
      }
      return folds ? foldTo(value) : KIND_OBJECT | (traits & IMPURE);
    }
    case "UnaryExpression": {
      const arg = getKind(node.argument, at);
      const fold = unaryFolds[node.operator];
      if (fold && arg & CONFIDENT) {
        // An operator that throws (`+` on a bigint) does not fold.
        try {
          return foldTo(fold(computed));
        } catch {
          // Its kind follows.
        }
      }
      return (
        (node.operator === "void"
          ? KIND_NULLISH
          : node.operator === "typeof"
            ? KIND_STRING
            : KIND_SCALAR | KIND_FALSY) |
        (node.operator === "delete" ? IMPURE : arg & IMPURE)
      );
    }
    case "BinaryExpression": {
      const left = getKind(node.left, at);
      const leftComputed = computed;
      const right = getKind(node.right, at);
      const fold = binaryFolds[node.operator];
      if (fold && left & right & CONFIDENT) {
        // An operator that throws (a bigint beside a number) does not fold.
        try {
          return foldTo(fold(leftComputed, computed));
        } catch {
          // Its kind follows.
        }
      }
      // A non-empty string on either side of a `+` makes the result one.
      return (
        (node.operator !== "+"
          ? KIND_SCALAR | KIND_FALSY
          : isOnlyString(left) || isOnlyString(right)
            ? KIND_STRING
            : KIND_STRING | KIND_SCALAR | KIND_FALSY) |
        ((left | right) & IMPURE)
      );
    }
    case "ConditionalExpression": {
      const test = getKind(node.test, at);
      const testComputed = computed;
      const consequent = getKind(node.consequent, at);
      const consequentComputed = computed;
      const consequentTemplates = templates;
      const alternate = getKind(node.alternate, at);
      if (test & consequent & alternate & CONFIDENT) {
        if (!testComputed) return alternate;
        computed = consequentComputed;
        return consequent;
      }
      return (
        joinKinds(alternate, templates, consequent, consequentTemplates) |
        (test & IMPURE)
      );
    }
    case "LogicalExpression": {
      const left = getKind(node.left, at);
      const leftComputed = computed;
      const leftTemplates = templates;
      const right = getKind(node.right, at);
      return getLogicalKind(
        node.operator,
        left,
        leftComputed,
        leftTemplates,
        right,
      );
    }
    case "AssignmentExpression":
      switch (node.operator) {
        case "=":
          return withoutFold(getKind(node.right, at), IMPURE);
        case "||=":
        case "&&=":
        case "??=":
          // What is assigned to is a `<let>`, which is not followed; assigning
          // it is a side effect.
          return getLogicalKind(
            node.operator === "||="
              ? "||"
              : node.operator === "&&="
                ? "&&"
                : "??",
            UNKNOWN_ANY | IMPURE,
            undefined,
            undefined,
            getKind(node.right, at),
          );
        default:
          return KIND_STRING | KIND_SCALAR | KIND_FALSY | IMPURE;
      }
    case "UpdateExpression":
      return KIND_SCALAR | KIND_FALSY | IMPURE;
    case "AwaitExpression": {
      // A thenable settles to anything; a primitive awaits to itself.
      const kind = getKind(node.argument, at);
      return allKinds(kind) & ~KIND_PRIMITIVE
        ? UNKNOWN_ANY | (kind & IMPURE)
        : withoutFold(kind, 0);
    }
    case "ParenthesizedExpression":
      return getKind(node.expression, at);
    case "SequenceExpression": {
      const last = node.expressions.length - 1;
      let traits = 0;
      for (let i = 0; i < last; i++) {
        traits |= getKind(node.expressions[i], at);
      }
      return withoutFold(getKind(node.expressions[last], at), traits & IMPURE);
    }
    case "MemberExpression":
      return getMemberKind(node, at);
    case "OptionalMemberExpression":
      return getMemberKind(node, at) | KIND_NULLISH;
    case "Identifier":
      return getIdentifierKind(node, at);
    case "CallExpression":
      // An immediately invoked function runs its body, with its arguments.
      return (
        UNKNOWN_ANY |
        ((node.callee.type === "ArrowFunctionExpression" ||
          node.callee.type === "FunctionExpression") &&
        !someChild(node, isImpure) &&
        !someChild(node.callee, isImpure)
          ? 0
          : IMPURE)
      );
    case "NewExpression":
      return KIND_OBJECT | IMPURE;
    case "OptionalCallExpression":
    case "TaggedTemplateExpression":
    case "ThrowStatement":
      return UNKNOWN_ANY | IMPURE;
    case "ClassMethod":
    case "ObjectMethod":
      // A computed key runs where the member is declared; the body does not.
      return node.computed && isImpure(node.key) ? IMPURE : 0;
    case "ClassProperty":
      // Only a static field's value runs where the class is declared.
      return (
        node.static
          ? someChild(node, isImpure)
          : node.computed && isImpure(node.key)
      )
        ? IMPURE
        : 0;
    case "ClassPrivateMethod":
    case "ClassPrivateProperty":
      return 0;
    default:
      // Anything else has a side effect where a part of it does.
      return UNKNOWN_ANY | (someChild(node, isImpure) ? IMPURE : 0);
  }
}

function getIdentifierKind(
  id: t.Identifier,
  at: t.NodePath | undefined,
): number {
  const { name } = id;
  const binding = at?.scope.getBinding(name);

  if (!binding) {
    switch (name) {
      case "undefined":
        return foldTo(undefined);
      case "NaN":
        return foldTo(NaN);
      case "Infinity":
        return foldTo(Infinity);
    }
    return UNKNOWN_ANY;
  }

  switch (binding.kind as typeof binding.kind | "local") {
    case "module": {
      // Only a template's default export is the template.
      if (binding.path.isImportDefaultSpecifier()) {
        const importDecl = binding.path
          .parentPath as t.NodePath<t.ImportDeclaration>;
        if (MARKO_FILE_REG.test(importDecl.node.source.value)) {
          templates = getImportFacts(importDecl);
          return KIND_TEMPLATE;
        }
      }
      break;
    }
    case "local": {
      // The walk follows names only outside functions and classes, so a local
      // here is a tag variable.
      const tag = binding.path as t.NodePath<t.MarkoTag>;
      // A hoisted read is the variable's getter.
      if (isReferenceHoisted(tag, at!)) return KIND_FUNCTION;
      if (isCoreTagName(tag, "const")) {
        const attr = tag.node.attributes[0];
        // Only the value's kind passes: reading a name never folds and has no
        // side effect. A part a pattern destructures from it is unknown.
        if (attr && tag.node.var!.type === "Identifier") {
          const kind = getValueKind(attr.value, tag);
          templates = kind.templates;
          return kind.traits & KIND_BITS;
        }
      }
      break;
    }
  }

  return UNKNOWN_ANY;
}

// The one record holding only `traits`, shared by every expression it describes.
function traitsOnly(traits: number): Evaluated {
  return (traitsOnlyRecords[traits] ||= {
    traits,
    computed: undefined,
    templates: undefined,
  });
}

function isNonEmptyQuasi(quasi: t.TemplateElement) {
  return !!quasi.value.cooked;
}

// The `KIND_*` bits of `traits`, shown or not.
function allKinds(traits: number) {
  return (traits | (traits >> UNKNOWN_SHIFT)) & KIND_ANY;
}

function isOnlyString(traits: number) {
  return (traits & KIND_BITS) === KIND_STRING;
}

// What either of two values may be, with the side effects of both. It leaves
// in `templates` those of `a`, then each of `b`'s that `a` does not list.
function joinKinds(
  a: number,
  aTemplates: Opt<t.ImportDeclarationExtra>,
  b: number,
  bTemplates: Opt<t.ImportDeclarationExtra>,
) {
  templates = !(b & KIND_TEMPLATE)
    ? aTemplates
    : !(a & KIND_TEMPLATE) || aTemplates === bTemplates
      ? bTemplates
      : reduce(bTemplates, addTemplate, aTemplates, aTemplates);
  return (a | b) & (KIND_BITS | IMPURE);
}

function addTemplate(
  joined: Opt<t.ImportDeclarationExtra>,
  template: t.ImportDeclarationExtra,
  listed: Opt<t.ImportDeclarationExtra>,
) {
  return some(listed, isSame, template) ? joined : concat(joined, template);
}

function isSame(a: unknown, b: unknown) {
  return a === b;
}

// What `left && right`, `left || right` or `left ?? right` may be, given what
// `left` folds to and its templates: `right` is the node `getKind` walked last.
function getLogicalKind(
  operator: t.LogicalExpression["operator"],
  left: number,
  leftComputed: unknown,
  leftTemplates: Opt<t.ImportDeclarationExtra>,
  right: number,
) {
  // When both fold, it folds to the one the operator picks.
  if (left & right & CONFIDENT) {
    if (
      operator === "&&"
        ? !leftComputed
        : operator === "||"
          ? leftComputed
          : leftComputed != null
    ) {
      computed = leftComputed;
      return left;
    }
    return right;
  }
  // From its left, an `&&` passes on the falsy part, and an `||` or `??` the
  // part it does not drop.
  const dropped = operator === "||" ? KIND_FALSY | KIND_NULLISH : KIND_NULLISH;
  return joinKinds(
    right,
    templates,
    operator === "&&"
      ? (allKinds(left) & (KIND_FALSY | KIND_NULLISH)) | (left & IMPURE)
      : left & ~(dropped | (dropped << UNKNOWN_SHIFT)),
    leftTemplates,
  );
}

// The kind of a value an expression passes on but does not fold to, with the
// side effects its other parts have.
function withoutFold(kind: number, impure: number) {
  return (kind & (KIND_BITS | IMPURE)) | impure;
}

// A property of a value: a primitive's is no template, and any other is unknown.
function getMemberKind(
  node: t.MemberExpression | t.OptionalMemberExpression,
  at: t.NodePath | undefined,
) {
  const object = getKind(node.object, at);
  return (
    (allKinds(object) & ~KIND_PRIMITIVE
      ? UNKNOWN_ANY
      : KIND_PRIMITIVE | KIND_FUNCTION) |
    ((object | (node.computed ? getKind(node.property, at) : 0)) & IMPURE)
  );
}

// Whether evaluating `node` may have a side effect. Marko treats reads, member
// access included, as having none.
function isImpure(node: t.Node) {
  return !!(getKind(node, undefined) & IMPURE);
}
