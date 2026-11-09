import { types as t } from "@marko/compiler";
import {
  getFile,
  getTagDef,
  getTagDefForTagName,
  isNativeTag,
  type TagDefinition,
} from "@marko/compiler/babel-utils";

import {
  invalidAttrNameReg,
  invalidNativeAttrNameReg,
} from "../../../common/helpers";
import { _escape } from "../../../html/content";
import { flattenTextOnlyConditional } from "../../core/if";
import { preAnalyze as preAnalyzeTextarea } from "../../core/textarea";
import { buildAttrError, buildAttrNameError } from "../../util/assert";
import buildStringExpression from "../../util/build-string-expression";
import { generateUid, generateUidIdentifier } from "../../util/generate-uid";
import { getMarkoRoot, isMarkoRoot } from "../../util/get-root";
import {
  getTagNameBinding,
  isUnresolvedKnownWrongTag,
  tagNotFoundError,
} from "../../util/tag-name-type";
import { getLiteralName } from "../../util/to-property-name";
import { withPreviousLocation } from "../../util/with-previous-location";

declare module "@marko/compiler/dist/types" {
  export interface MarkoTag {
    tagDef?: TagDefinition | null;
  }
}

// Keyed per refining modifier (`value:parseInt:=x` vs `value:=x`), since the
// modifier is baked into the built handler.
const BINDING_CHANGE_HANDLER = new WeakMap<
  t.Identifier,
  Map<string, t.MarkoAttribute | t.Identifier>
>();

export function preAnalyze(program: t.NodePath<t.Program>) {
  normalizeBody(program.get("body"));
}

function normalizeBody(
  body:
    | undefined
    | t.NodePath<
        | t.Program["body"][number]
        | t.MarkoTagBody["body"][number]
        | t.MarkoTag["attributeTags"]
      >[],
) {
  if (body?.length) {
    for (const child of body) {
      if (child.isMarkoTag()) {
        // May replace a text-only `<if>` chain with a single placeholder.
        flattenTextOnlyConditional(child);
        if (child.isMarkoTag()) {
          normalizeTag(child);
        }
      } else if (child.isMarkoPlaceholder()) {
        splitStaticPlaceholderText(child);
      }
    }
  }
}

// Moves a placeholder's unconditional leading/trailing static text into adjacent
// text nodes so it writes statically; only escape-invariant text, since text is raw.
function splitStaticPlaceholderText(
  placeholder: t.NodePath<t.MarkoPlaceholder>,
) {
  const { node } = placeholder;
  const normalized = buildStringExpression([node.value]);
  if (!normalized || !t.isTemplateLiteral(normalized)) return;
  node.value = normalized;

  const { quasis } = normalized;
  const lastIndex = quasis.length - 1;
  const leading = quasis[0].value.cooked ?? "";
  const trailing = quasis[lastIndex].value.cooked ?? "";

  if (leading && _escape(leading) === leading) {
    insertStaticText(placeholder, leading, true);
    quasis[0].value = { raw: "", cooked: "" };
  }

  if (trailing && _escape(trailing) === trailing) {
    insertStaticText(placeholder, trailing, false);
    quasis[lastIndex].value = { raw: "", cooked: "" };
  }
}

function insertStaticText(
  placeholder: t.NodePath<t.MarkoPlaceholder>,
  value: string,
  before: boolean,
) {
  const sibling = before
    ? placeholder.getPrevSibling()
    : placeholder.getNextSibling();
  if (sibling.isMarkoText()) {
    sibling.node.value = before
      ? sibling.node.value + value
      : value + sibling.node.value;
  } else if (before) {
    placeholder.insertBefore(t.markoText(value));
  } else {
    placeholder.insertAfter(t.markoText(value));
  }
}

function normalizeTag(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const { name, attributes } = node;
  let invalidNameReg = invalidAttrNameReg;
  if (name.type === "StringLiteral") {
    const tagName = name.value;
    if (getTagNameBinding(tag)) {
      // Convert tags which have an associated binding to an identifier.
      // <MyTag> --> <${MyTag}>
      node.name = withPreviousLocation(t.identifier(tagName), name);
    }
  }
  normalizeBody(tag.get("body").get("body"));
  normalizeBody(tag.get("attributeTags"));

  if (node.var) {
    const insertions = moveDefaultsToConstTags(node.var);
    if (insertions) {
      tag.insertAfter(insertions);
    }
  }

  // An attribute tag loop's params are the loop callback's own, defaults kept.
  if (node.body.params.length && !node.body.attributeTags) {
    const insertions = moveElementDefaultsToConstTags(node.body.params);
    // Nothing reads the params of a tag with no body, so defaults are dropped.
    if (insertions && node.body.body.length) {
      node.body.body = [...insertions, ...node.body.body];
    }
  }

  const nativeTagDef = getStaticNativeTagDef(tag);
  if (nativeTagDef) {
    if (!t.isStringLiteral(node.name)) {
      node.name = withPreviousLocation(
        t.stringLiteral(nativeTagDef.name),
        node.name,
      );
      node.tagDef = nativeTagDef;
    }
    invalidNameReg = invalidNativeAttrNameReg;
    if (nativeTagDef.parseOptions?.openTagOnly && node.body.body.length) {
      throw tag.hub.buildError(
        node.body.body[0],
        `The \`<${nativeTagDef.name}>\` tag cannot have content, so it does not support a body.`,
      );
    }
    if (nativeTagDef.name === "textarea") {
      preAnalyzeTextarea(tag);
    }
  }

  for (let i = 0; i < attributes.length; i++) {
    const attr = attributes[i];
    if (t.isMarkoAttribute(attr)) {
      if (attr.bound) {
        // Inject change handler functions from the binding shorthand.
        attributes.splice(++i, 0, buildChangeHandlerAttr(tag, attr));
        attr.bound = false;
      } else if (attr.modifier != null) {
        attr.name += ":" + attr.modifier;
      }

      assertAttrName(tag, attr, invalidNameReg);
      attr.modifier = null;
    } else if (nativeTagDef) {
      const spreadAttrs = getObjectSpreadAttrs(tag, attr, invalidNameReg);
      if (spreadAttrs) {
        attributes.splice(i, 1, ...spreadAttrs);
        i += spreadAttrs.length - 1;
      }
    }
  }
}

function assertAttrName(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
  invalidNameReg: RegExp,
) {
  if (invalidNameReg.test(attr.name)) {
    if (isUnresolvedKnownWrongTag(tag)) throw tagNotFoundError(tag);
    throw buildAttrNameError(tag, attr, "Invalid attribute name.");
  }
}

// An object literal names each attribute it spreads, so each property is written
// as that attribute in place, where a later attribute still overrides it.
function getObjectSpreadAttrs(
  tag: t.NodePath<t.MarkoTag>,
  spread: t.MarkoSpreadAttribute,
  invalidNameReg: RegExp,
) {
  const { value } = spread;
  if (value.type !== "ObjectExpression") return;
  const attrs: t.MarkoAttribute[] = [];
  for (const prop of value.properties) {
    const name = prop.type !== "SpreadElement" && getStaticKeyName(prop);
    if (!name || name === "__proto__") return;
    let attrValue: t.Expression;
    if (prop.type === "ObjectProperty") {
      attrValue = prop.value as t.Expression;
    } else if (prop.kind === "method") {
      attrValue = withPreviousLocation(
        t.functionExpression(
          undefined,
          prop.params,
          prop.body,
          prop.generator,
          prop.async,
        ),
        prop,
      );
    } else {
      return;
    }
    const attr = withPreviousLocation(t.markoAttribute(name, attrValue), prop);
    assertAttrName(tag, attr, invalidNameReg);
    attrs.push(attr);
  }
  return attrs;
}

function getStaticNativeTagDef(tag: t.NodePath<t.MarkoTag>) {
  const { name } = tag.node;
  if (t.isStringLiteral(name)) {
    return isNativeTag(tag) ? getTagDef(tag) : undefined;
  }

  if (t.isTemplateLiteral(name) && name.quasis.length === 1) {
    const tagDef = getTagDefForTagName(getFile(), name.quasis[0].value.cooked!);
    if (
      // A string names an element, never a core tag or a discovered template.
      tagDef?.taglibId === "marko-html" &&
      tagDef.html &&
      !tagDef.template &&
      !tagDef.renderer
    ) {
      return tagDef;
    }
  }
}

function buildChangeHandlerAttr(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
): t.MarkoAttribute {
  const attrName = attr.name;
  const changeAttrName = attrName + "Change";
  let refiningFn: undefined | t.Identifier;
  if (attr.modifier != null) {
    if (!t.isValidIdentifier(attr.modifier)) {
      const msg =
        "Bound attribute refinement shorthand must be a valid JavaScript identifier.";
      throw attr.value.loc
        ? tag.hub.buildError(
            {
              loc: {
                start: {
                  line: attr.value.loc.start.line,
                  column:
                    attr.value.loc.start.column - attr.modifier.length - 2,
                },
                end: {
                  line: attr.value.loc.start.line,
                  column: attr.value.loc.start.column - 2,
                },
              },
            } as any,
            msg,
          )
        : buildAttrError(tag, attr, msg);
    }
    refiningFn = withPreviousLocation(t.identifier(attr.modifier), attr);
  }

  if (t.isIdentifier(attr.value)) {
    const binding = tag.scope.getBinding(attr.value.name);
    if (!binding)
      return t.markoAttribute(
        changeAttrName,
        buildChangeHandlerFunction(attr.value, refiningFn),
      );

    const refiningFnKey = refiningFn?.name ?? "";
    let handlerByRefiningFn = BINDING_CHANGE_HANDLER.get(binding.identifier);
    if (!handlerByRefiningFn) {
      BINDING_CHANGE_HANDLER.set(
        binding.identifier,
        (handlerByRefiningFn = new Map()),
      );
    }
    const existingChangedAttr = handlerByRefiningFn.get(refiningFnKey);
    if (!existingChangedAttr) {
      const bindingIdentifierPath =
        binding.path.getOuterBindingIdentifierPaths()[binding.identifier.name];
      let changeAttrExpr: undefined | t.Expression = bindingIdentifierPath
        ? bindingIdentifierPath.parentPath === binding.path
          ? buildChangeHandlerFunction(attr.value, refiningFn)
          : bindingIdentifierPath.parentPath!.isObjectProperty()
            ? ensureDestructuredChangeHandler(bindingIdentifierPath.parentPath!)
            : undefined
        : undefined;

      if (!changeAttrExpr) {
        throw tag.hub.buildError(
          attr.value,
          bindingIdentifierPath?.parentPath?.isArrayPattern()
            ? `Cannot two-way bind to \`${attr.value.name}\` because it comes from array destructuring, which has no change handler. Use object destructuring or pass an explicit \`${changeAttrName}\` attribute.`
            : bindingIdentifierPath?.parentPath?.isObjectProperty({
                  computed: true,
                })
              ? `Cannot two-way bind to \`${attr.value.name}\` because it is destructured with a dynamically computed key, so its change handler cannot be derived. Use a static key or pass an explicit \`${changeAttrName}\` attribute.`
              : "Unable to bind to value.",
        );
      }

      if (refiningFn && t.isIdentifier(changeAttrExpr)) {
        changeAttrExpr = t.logicalExpression(
          "&&",
          changeAttrExpr,
          buildRefiningFnForwarder(t.cloneNode(changeAttrExpr), refiningFn),
        );
      }

      const changeHandlerAttr = t.markoAttribute(
        changeAttrName,
        changeAttrExpr,
      );
      handlerByRefiningFn.set(refiningFnKey, changeHandlerAttr);
      return changeHandlerAttr;
    }

    if (existingChangedAttr.type === "Identifier") {
      return t.markoAttribute(
        changeAttrName,
        withPreviousLocation(
          t.identifier(existingChangedAttr.name),
          attr.value,
        ),
      );
    }

    const markoRoot = isMarkoRoot(binding.path)
      ? binding.path
      : getMarkoRoot(binding.path);

    if (!(markoRoot?.isMarkoTag() || markoRoot?.isMarkoTagBody())) {
      throw tag.hub.buildError(attr.value, "Unable to bind to value.");
    }

    const changeHandlerId = generateUid(changeAttrName);
    const changeHandlerConst = toConstTag(
      t.identifier(changeHandlerId),
      existingChangedAttr.value,
    );
    handlerByRefiningFn.set(
      refiningFnKey,
      (existingChangedAttr.value = t.identifier(changeHandlerId)),
    );

    if (markoRoot.isMarkoTag()) {
      markoRoot.insertAfter(changeHandlerConst);
    } else {
      markoRoot.unshiftContainer("body", changeHandlerConst);
    }

    return t.markoAttribute(
      changeAttrName,
      withPreviousLocation(t.identifier(changeHandlerId), attr.value),
    );
  } else if (
    t.isMemberExpression(attr.value) ||
    t.isOptionalMemberExpression(attr.value)
  ) {
    const prop = attr.value.property;
    if (!t.isPrivateName(attr.value.property)) {
      const memberObj = t.cloneNode(attr.value.object);
      const memberProp =
        !attr.value.computed && prop.type === "Identifier"
          ? withPreviousLocation(t.identifier(prop.name + "Change"), prop)
          : t.binaryExpression(
              "+",
              t.cloneNode(prop),
              t.stringLiteral("Change"),
            );
      const computed = memberProp.type !== "Identifier";
      let changeAttrExpr: t.Expression = attr.value.optional
        ? t.optionalMemberExpression(memberObj, memberProp, computed, true)
        : t.memberExpression(memberObj, memberProp, computed);

      if (refiningFn) {
        changeAttrExpr = t.logicalExpression(
          "&&",
          changeAttrExpr,
          buildRefiningFnForwarder(
            t.memberExpression(memberObj, memberProp, computed),
            refiningFn,
          ),
        );
      }
      return t.markoAttribute(changeAttrName, changeAttrExpr);
    }
  }

  throw tag.hub.buildError(
    attr.value,
    "Attributes may only be bound to identifiers or member expressions",
  );
}

function buildRefiningFnForwarder(
  changeHandler: t.Expression,
  refiningFn: t.Identifier,
) {
  const newValueId = generateUid("next");
  return t.arrowFunctionExpression(
    [t.identifier(newValueId)],
    t.callExpression(changeHandler, [
      t.callExpression(t.cloneNode(refiningFn), [t.identifier(newValueId)]),
    ]),
  );
}

function buildChangeHandlerFunction(
  id: t.Identifier,
  refiningFn: undefined | t.Identifier,
) {
  const newId = "_new_" + id.name;
  let newValue: t.Expression = withPreviousLocation(t.identifier(newId), id);
  if (refiningFn) {
    newValue = t.callExpression(refiningFn, [newValue]);
  }
  return t.arrowFunctionExpression(
    [withPreviousLocation(t.identifier(newId), id)],
    t.assignmentExpression(
      "=",
      withPreviousLocation(t.identifier(id.name), id),
      newValue,
    ),
  );
}

function ensureDestructuredChangeHandler(parent: t.NodePath<t.ObjectProperty>) {
  let changeKey: t.Identifier | undefined;
  const pattern = parent.parentPath as t.NodePath<t.ObjectPattern>;
  const keyName = getStaticKeyName(parent.node);
  // A dynamically computed key has no derivable change handler; caller reports.
  if (keyName === undefined) return;

  const searchKey = `${keyName}Change`;
  for (const prop of pattern.get("properties")) {
    if (prop.isObjectProperty()) {
      const propValue = prop.get("value");
      if (
        getStaticKeyName(prop.node) === searchKey &&
        propValue.isIdentifier()
      ) {
        changeKey = propValue.node;
        break;
      }
    }
  }

  if (!changeKey) {
    pattern.unshiftContainer(
      "properties",
      t.objectProperty(
        t.stringLiteral(searchKey),
        (changeKey = generateUidIdentifier(searchKey)),
      ),
    );
  }

  return changeKey;
}

function getStaticKeyName(prop: t.ObjectMember) {
  return prop.computed && !t.isStringLiteral(prop.key)
    ? undefined
    : getLiteralName(prop.key);
}

function moveDefaultsToConstTags(
  node: t.Node,
  insertions?: t.MarkoTag[] | undefined,
) {
  switch (node.type) {
    case "ObjectPattern":
      for (const prop of node.properties) {
        if (prop.type === "ObjectProperty") {
          if (prop.value.type === "AssignmentPattern") {
            const { left, right } = prop.value;
            const sourceName = generateUid(
              getLiteralName(left) || getLiteralName(prop.key) || "pattern",
            );
            prop.shorthand = false;
            prop.value = t.identifier(sourceName);
            (insertions ||= []).push(
              toConstTag(left, toFallbackExpr(sourceName, right)),
            );
            moveDefaultsToConstTags(left, insertions);
          } else {
            insertions = moveDefaultsToConstTags(prop.value, insertions);
          }
        }
      }
      break;
    case "ArrayPattern":
      insertions = moveElementDefaultsToConstTags(node.elements, insertions);
      break;
  }

  return insertions;
}

// Tag params are positional like an array pattern's elements.
function moveElementDefaultsToConstTags(
  elements: (t.Node | null)[],
  insertions?: t.MarkoTag[] | undefined,
) {
  for (let i = 0, len = elements.length; i < len; i++) {
    const el = elements[i];
    if (el != null) {
      if (el.type === "AssignmentPattern") {
        const { left, right } = el;
        const sourceName = generateUid(getLiteralName(left) || "pattern");
        elements[i] = withPreviousLocation(t.identifier(sourceName), el);
        (insertions ||= []).push(
          toConstTag(left, toFallbackExpr(sourceName, right)),
        );
        moveDefaultsToConstTags(left, insertions);
      } else {
        insertions = moveDefaultsToConstTags(el, insertions);
      }
    }
  }

  return insertions;
}

function toFallbackExpr(id: string, fallback: t.Expression) {
  return t.conditionalExpression(
    t.binaryExpression("!==", t.buildUndefinedNode(), t.identifier(id)),
    t.identifier(id),
    fallback,
  );
}

/** A `<const>` tag declaring `id` as `expr`. */
export function toConstTag(id: t.LVal, expr: t.Expression) {
  return t.markoTag(
    t.stringLiteral("const"),
    [t.markoAttribute("value", expr, null, null, true)],
    t.markoTagBody(),
    null,
    id,
  );
}
