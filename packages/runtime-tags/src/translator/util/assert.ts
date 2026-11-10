import { types as t } from "@marko/compiler";
import { assertNoAttributeTags } from "@marko/compiler/babel-utils";

import { type ForType, getForType } from "./branch-tag";
import { getTagName } from "./get-tag-name";
import { isStaticNativeTag } from "./tag-name-type";

// Tags whose docs heading is not their bare name; "" links the page root
// for tags with no heading of their own, and a replaced tag links its successor.
const docsAnchors: Record<string, string | undefined> = {
  if: "if--else",
  "else-if": "if--else",
  else: "if--else",
  effect: "script",
  attrs: "",
};
const languageDocsURL = "https://markojs.com/docs/reference/language";
const nativeTagDocsURL = "https://markojs.com/docs/reference/native-tag";
const valueAttrLink = `[\`value=\` attribute](${languageDocsURL}#shorthand-value)`;

export function assertNoSpreadAttrs(tag: t.NodePath<t.MarkoTag>) {
  const { attributes } = tag.node;
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].type === "MarkoSpreadAttribute") {
      const attr = tag.get("attributes")[i];
      throw attr.buildCodeFrameError(
        `The ${coreTagLink(tag)} does not support [\`...spread\` attributes](${languageDocsURL}#spread-attributes).`,
      );
    }
  }
}

// The single `value=` attribute of a core tag that supports no other attribute,
// and with `change` its change handler; `hint` helps with an unsupported one.
export function assertOnlyValueAttr(
  tag: t.NodePath<t.MarkoTag>,
  required: true,
  change?: boolean,
  hint?: (attr: t.MarkoAttribute) => string | undefined,
): {
  valueAttr: t.MarkoAttribute;
  valueChangeAttr: t.MarkoAttribute | undefined;
};
export function assertOnlyValueAttr(
  tag: t.NodePath<t.MarkoTag>,
  required?: boolean,
  change?: boolean,
  hint?: (attr: t.MarkoAttribute) => string | undefined,
): {
  valueAttr: t.MarkoAttribute | undefined;
  valueChangeAttr: t.MarkoAttribute | undefined;
};
export function assertOnlyValueAttr(
  tag: t.NodePath<t.MarkoTag>,
  required?: boolean,
  change?: boolean,
  hint?: (attr: t.MarkoAttribute) => string | undefined,
) {
  let valueAttr: t.MarkoAttribute | undefined;
  let valueChangeAttr: t.MarkoAttribute | undefined;
  for (const attr of tag.node.attributes) {
    if (isValueAttr(attr)) {
      if (valueAttr) throw buildDuplicateAttrError(tag, attr);
      valueAttr = attr;
    } else if (change && isValueChangeAttr(attr)) {
      if (valueChangeAttr) throw buildDuplicateAttrError(tag, attr);
      valueChangeAttr = attr;
    } else {
      throw buildUnsupportedAttrsError(tag, change, hint);
    }
  }

  if (required && !valueAttr) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The ${coreTagLink(tag)} requires a ${valueAttrLink}.`,
      );
  }

  return { valueAttr, valueChangeAttr };
}

export function assertHasVar(
  tag: t.NodePath<t.MarkoTag>,
  hint?: string | ((tag: t.NodePath<t.MarkoTag>) => string),
) {
  if (!tag.node.var) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        withHint(
          `The ${coreTagLink(tag)} requires a [tag variable](${languageDocsURL}#tag-variables).`,
          typeof hint === "function" ? hint(tag) : hint,
        ),
      );
  }
}

export function assertIdentifierVar(tag: t.NodePath<t.MarkoTag>) {
  const tagVar = tag.node.var;
  if (tagVar && tagVar.type !== "Identifier") {
    throw tag
      .get("var")
      .buildCodeFrameError(
        `The ${coreTagLink(tag)} variable cannot be destructured.`,
      );
  }
}

export function assertNoTagVarMutation(tag: t.NodePath<t.MarkoTag>) {
  const tagVar = tag.node.var;
  if (tagVar?.type === "Identifier") {
    const constantViolations = tag.scope.getBinding(
      tagVar.name,
    )?.constantViolations;
    if (constantViolations?.length) {
      for (const assignment of constantViolations) {
        // Ignore duplicate declaration violations.
        if (assignment.type !== "MarkoTag") {
          throw assignment.buildCodeFrameError(
            `${tagVar.name} is readonly and cannot be mutated.`,
          );
        }
      }
    }
  }
}

export function assertHasBody(tag: t.NodePath<t.MarkoTag>) {
  if (!tag.node.body.body.length) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The ${coreTagLink(tag)} requires [body content](${languageDocsURL}#tag-content).`,
      );
  }
}

export function assertNoBodyContent(tag: t.NodePath<t.MarkoTag>) {
  // Comments count as body content here (wont-fix): these tags support none.
  if (tag.node.body.body.length) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The ${coreTagLink(tag)} does not support body content.`,
      );
  }
}

// A tag that renders only native elements, whose content is its body or `content=`.
export function assertNoNativeAttrTags(tag: t.NodePath<t.MarkoTag>) {
  const takesContent = `take their content from their body or the [\`content=\` attribute](${nativeTagDocsURL}#content)`;
  assertNoAttributeTags(
    tag,
    isStaticNativeTag(tag)
      ? `[Native tags](${nativeTagDocsURL}) ${takesContent}.`
      : `This dynamic tag only renders [native tags](${nativeTagDocsURL}), which ${takesContent}.`,
  );
}

// A tag's `content` is its body, so no attribute tag may claim the name.
export function assertNotContentAttrTag(tag: t.NodePath<t.MarkoTag>) {
  if (getTagName(tag) === "@content") {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The \`<@content>\` [attribute tag](${languageDocsURL}#attribute-tags) is not supported, since a tag's \`content\` is its [body content](${languageDocsURL}#tag-content). Write it as the tag's body, or pass it with a \`content=\` attribute.`,
      );
  }
}

// An error spanning `attrs`, or at the tag name when they have no location.
export function buildAttrsError(
  tag: t.NodePath<t.MarkoTag>,
  attrs: t.MarkoTag["attributes"],
  msg: string,
) {
  return buildRangeError(
    tag,
    attrs[0].loc?.start,
    attrs[attrs.length - 1].loc?.end,
    msg,
  );
}

// An error at `attr`, or at the tag name when it has no location.
export function buildAttrError(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoTag["attributes"][number],
  msg: string,
) {
  return buildRangeError(tag, attr.loc?.start, attr.loc?.end, msg);
}

// An error at an attribute's name, or at the tag name when it has no location.
export function buildAttrNameError(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
  msg: string,
) {
  const start = attr.loc?.start;
  return buildRangeError(
    tag,
    start,
    start && { line: start.line, column: start.column + attr.name.length },
    msg,
  );
}

// An error at a second `value=` attribute or change handler.
export function buildDuplicateAttrError(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
) {
  return buildAttrError(
    tag,
    attr,
    `The ${coreTagLink(tag)} takes a single ${isValueAttr(attr) ? valueAttrLink : "`valueChange=` attribute"}.`,
  );
}

// An error spanning every attribute but the first `value=` (and, with `change`,
// its change handler).
function buildUnsupportedAttrsError(
  tag: t.NodePath<t.MarkoTag>,
  change: boolean | undefined,
  hint: ((attr: t.MarkoAttribute) => string | undefined) | undefined,
) {
  const { attributes } = tag.node;
  const valueAttr = attributes.find(isValueAttr);
  const changeAttr = change ? attributes.find(isValueChangeAttr) : undefined;
  const unsupported = attributes.filter(
    (attr) => attr !== valueAttr && attr !== changeAttr,
  );
  const [attr] = unsupported;
  return buildAttrsError(
    tag,
    unsupported,
    withHint(
      `The ${coreTagLink(tag)} only supports the ${valueAttrLink}${change ? " and its change handler" : ""}.`,
      attr.type === "MarkoAttribute" ? hint?.(attr) : undefined,
    ),
  );
}

function buildRangeError(
  tag: t.NodePath<t.MarkoTag>,
  start: { line: number; column: number } | undefined,
  end: { line: number; column: number } | undefined,
  msg: string,
) {
  return start && end
    ? tag.hub.buildError({ loc: { start, end } } as t.Node, msg, Error)
    : tag.get("name").buildCodeFrameError(msg);
}

/** The loop a `<for>` tag's attributes run, which it requires. */
export function assertForType(tag: t.NodePath<t.MarkoTag>) {
  const type = getForType(tag.node);
  if (!type) {
    throw tag.buildCodeFrameError(
      `The ${coreTagLink(tag)} requires an \`of=\`, \`in=\`, \`to=\`, or \`until=\` attribute.`,
    );
  }
  return type;
}

/** The attributes a loop of `type` takes, besides `by=`. */
export function getForAttrs(type: ForType) {
  return type === "of" || type === "in" ? [type] : [type, "from", "step"];
}

/** Throws for a param that a loop of `type` never supplies. */
export function assertForParams(tag: t.NodePath<t.MarkoTag>, type: ForType) {
  const extraParam =
    tag.node.body.params[type === "of" || type === "in" ? 2 : 1];
  if (extraParam && extraParam.type !== "RestElement") {
    throw tag.hub.buildError(
      extraParam,
      `The ${coreTagLink(tag)} only provides \`|${
        type === "of" ? "item, index" : type === "in" ? "key, value" : "num"
      }|\` with \`${type}=\`, so this parameter is never supplied.`,
    );
  }
}

export function coreTagLink(tag: t.NodePath<t.MarkoTag>) {
  const tagName = getTagName(tag)!;
  const anchor = docsAnchors[tagName] ?? tagName;
  return `[\`<${tagName}>\` tag](https://markojs.com/docs/reference/core-tag${anchor && "#" + anchor})`;
}

function withHint(msg: string, hint: string | undefined) {
  return hint ? `${msg} ${hint}` : msg;
}

export function isValueAttr(
  attr: t.MarkoTag["attributes"][number],
): attr is t.MarkoAttribute {
  return attr.type === "MarkoAttribute" && attr.name === "value";
}

export function isValueChangeAttr(
  attr: t.MarkoTag["attributes"][number],
): attr is t.MarkoAttribute {
  return attr.type === "MarkoAttribute" && attr.name === "valueChange";
}
