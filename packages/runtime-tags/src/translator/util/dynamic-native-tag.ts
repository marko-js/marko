import { types as t } from "@marko/compiler";

import { isEventOrChangeHandler } from "./is-event-or-change-handler";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";

export interface DynamicNativeTagInfo {
  // The set of possible tag names, all proven safe string literals.
  names: string[];
  // The name baked into the DOM clone template (SSR always writes the real one).
  default: string;
}

// Tag names that cannot be compiled as an inline native element with a
// runtime-swappable name: form controls (their value/checked live as element
// properties, not attributes, so a rename would drop state), void elements
// (they have no children to preserve), and the namespaced/document elements
// whose content model or serialization is special.
const UNSAFE_DYNAMIC_NATIVE_NAME =
  /* cspell:disable-next-line */
  /^(?:input|select|textarea|option|optgroup|progress|meter|output|area|base|br|col|embed|hr|img|link|meta|param|source|track|wbr|svg|math|html|head|body|script|style|template|title|iframe|object|slot)$/;

// When a dynamic tag's name is provably a non-nullable, enumerable set of safe
// native tag names, and the tag has no body/var/args/spread/handler attributes,
// it can compile as a real native element with a name-swap signal instead of the
// general `_dynamic_tag` branch runtime. Returns the info needed for that path,
// or undefined to fall back to the general dynamic tag.
export function getDynamicNativeTagInfo(
  tag: t.NodePath<t.MarkoTag>,
): DynamicNativeTagInfo | undefined {
  const { node } = tag;
  const extra = node.extra;

  if (
    !extra ||
    node.body.body.length ||
    node.var ||
    node.arguments ||
    extra.tagNameNullable ||
    analyzeTagNameType(tag, true) !== TagNameType.NativeTag
  ) {
    return;
  }

  for (const attr of node.attributes) {
    if (!t.isMarkoAttribute(attr) || isEventOrChangeHandler(attr.name)) {
      return;
    }
  }

  const names = collectLiteralNames(node.name);
  if (!names) {
    return;
  }

  for (const name of names) {
    if (UNSAFE_DYNAMIC_NATIVE_NAME.test(name)) {
      return;
    }
  }

  return { names, default: names[0] };
}

// Collects the string-literal tag names a name expression can evaluate to,
// walking through the conditional/logical shapes the tag-name analysis already
// treats as native. Returns undefined if any branch is not a plain string
// literal (i.e. not statically enumerable, so no default can be chosen).
function collectLiteralNames(name: t.Expression): string[] | undefined {
  const names: string[] = [];
  const pending: t.Expression[] = [name];
  let node: t.Expression | undefined;

  while ((node = pending.pop())) {
    switch (node.type) {
      case "StringLiteral":
        if (!names.includes(node.value)) {
          names.push(node.value);
        }
        break;
      case "ConditionalExpression":
        pending.push(node.consequent, node.alternate);
        break;
      case "LogicalExpression":
        // `a && "b"` / `a || "b"` — a nullish/false branch is excluded by the
        // non-nullable check upstream, so only the string operands matter.
        pending.push(node.left, node.right);
        break;
      default:
        return;
    }
  }

  return names.length ? names : undefined;
}
