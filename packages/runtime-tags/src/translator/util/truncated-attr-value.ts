import { types as t } from "@marko/compiler";
import { diagnosticWarn } from "@marko/compiler/babel-utils";

// A top level `>` ends the open tag even mid expression, so an unenclosed
// attribute value truncates there and the rest of the line is read as body
// text. Both halves stay well formed, so only the source shape gives it away —
// and the same shape can be exactly what the author meant, hence a warning.
const enclosedAttrValueReg = /^[("'`]/;
const comparisonRHSReg = /=[ \t]*[\w$([{"'`!+~-]/y;
const typeArgsBodyReg = /^[\w$.,[\]|](?:[\w$.,[\]| \t]*[\w$.,[\]|])?$/;
const tsTypeKeywordReg =
  /^(?:any|bigint|boolean|never|number|object|string|symbol|undefined|unknown|void)$/;

export function warnOnTruncatedAttrValue(tag: t.NodePath<t.MarkoTag>) {
  const { attributes } = tag.node;
  const attr = attributes[attributes.length - 1];
  if (!t.isMarkoAttribute(attr) || !attr.value) return;

  const { code } = tag.hub.file;
  const start = attr.value.start!;
  const end = attr.value.end!;
  const value = code.slice(start, end);
  if (enclosedAttrValueReg.test(value)) return;

  // Only a `>` directly after the value can have cut it short.
  let gt = end;
  while (code[gt] === " " || code[gt] === "\t") gt++;
  if (code[gt] !== ">") return;

  // `new Set<string>()` leaves an orphan call behind; `count<MAX>(warning)` is
  // a whole comparison with body text, so only the empty call is worth naming.
  const openIndex = value.lastIndexOf("<");
  if (~openIndex && code.startsWith("()", gt + 1)) {
    const args = value.slice(openIndex + 1);
    if (isTypeArgsBody(args)) {
      diagnosticWarn(tag, {
        label: `The \`>\` in \`<${args}>\` ended this tag, so this value is \`${value}\` and \`()\` became body text. Wrap a value that contains type arguments in parentheses: \`=(${value}>())\`.`,
        loc: attr.loc ?? undefined,
      });
      return;
    }
  }

  comparisonRHSReg.lastIndex = gt + 1;
  if (comparisonRHSReg.test(code)) {
    diagnosticWarn(tag, {
      label: `A \`>\` ended this tag, so this value is just \`${value}\` and the rest of the line became body text. If a comparison was meant, wrap it in parentheses: \`${
        attr.default ? "" : attr.name
      }=(${value} >= …)\`.`,
      loc: attr.loc ?? undefined,
    });
  }
}

// Type arguments name types, so `Set<string>` and `Box<Item>` are type
// arguments while `a<b` stays an ordinary comparison.
function isTypeArgsBody(src: string) {
  if (!typeArgsBodyReg.test(src)) return false;
  for (const name of src.split(/[^\w$]+/)) {
    if (name && (/^[A-Z]/.test(name) || tsTypeKeywordReg.test(name))) {
      return true;
    }
  }
  return false;
}
