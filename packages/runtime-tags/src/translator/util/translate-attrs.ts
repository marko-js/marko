import { types as t } from "@marko/compiler";
import { isAttributeTag, isTransparentTag } from "@marko/compiler/babel-utils";

import { buildForRuntimeCall, getForType } from "../core/for";
import { scopeIdentifier } from "../visitors/program";
import { getSectionRendererIdentifier } from "./binding-has-prop";
import {
  type BindingPropTree,
  getKnownFromPropTree,
} from "./binding-prop-tree";
import { generateUidIdentifier } from "./generate-uid";
import { getAccessorProp } from "./get-accessor-enums";
import { getDeclaredBindingExpression } from "./get-declared-binding-expression";
import { getKnownAttrValues } from "./get-known-attr-values";
import { getAttributeTagParent, getParentTag } from "./get-parent-tag";
import { getTagName } from "./get-tag-name";
import { isOutputHTML } from "./marko-config";
import {
  type AttrTagLookup,
  getAttrTagIdentifier,
  getAttrTagPaths,
} from "./nested-attribute-tags";
import { type SortedOpt, toArray, toSet } from "./optional";
import { getScopeAccessor, propsUtil } from "./references";
import { callRuntime } from "./runtime";
import {
  getScopeIdIdentifier,
  getSection,
  getSectionRegisterReasons,
  type Section,
} from "./sections";
import { getScopeReasonStatement } from "./serialize-guard";
import { getContentClosureValues, getResumeRegisterId } from "./signals";
import { toObjectProperty } from "./to-property-name";

const contentProps = new WeakSet<t.Node>();
type ContentKey = "renderBody" | "content";

export function translateAttrs(
  tag: t.NodePath<t.MarkoTag>,
  propTree: BindingPropTree | true = true,
  skip?: SortedOpt<string>,
  statements: t.Statement[] = [],
  contentKey: ContentKey = "content",
) {
  const contentProperties: t.ObjectExpression["properties"] = [];
  const attrTagLookup = tag.node.extra?.attributeTags;
  const seen = toSet(skip);
  if (attrTagLookup) {
    for (const name in attrTagLookup) {
      const attrTagMeta = attrTagLookup[name];
      if (
        !seen.has(attrTagMeta.name) &&
        getKnownFromPropTree(propTree, attrTagMeta.name)
      ) {
        seen.add(attrTagMeta.name);
        if (attrTagMeta.dynamic) {
          statements.push(
            t.variableDeclaration("let", [
              t.variableDeclarator(getAttrTagIdentifier(attrTagMeta)),
            ]),
          );
          contentProperties.push(
            toObjectProperty(
              attrTagMeta.name,
              getAttrTagIdentifier(attrTagMeta),
            ),
          );
        }
      }
    }

    const attrTags = getAttrTagPaths(tag);
    for (let i = 0; i < attrTags.length; i++) {
      const child = attrTags[i];
      if (child.isMarkoTag()) {
        if (isAttributeTag(child)) {
          const attrTagMeta = attrTagLookup[getTagName(child)];

          if (propsUtil.has(skip, attrTagMeta.name)) continue;

          if (attrTagMeta.dynamic) {
            i = addDynamicAttrTagStatements(
              attrTags,
              i,
              attrTagLookup,
              statements,
              propTree,
              contentKey,
            );
          } else {
            const translatedAttrTag = translateAttrs(
              child,
              getKnownFromPropTree(propTree, attrTagMeta.name),
              undefined,
              statements,
              contentKey,
            );

            const prevProp = attrTagMeta.repeated
              ? findObjectProperty(attrTagMeta.name, contentProperties)
              : undefined;
            if (prevProp) {
              prevProp.value = callRuntime(
                "attrTags",
                prevProp.value as t.Expression,
                t.objectExpression(translatedAttrTag.properties),
              );
            } else {
              contentProperties.push(
                toObjectProperty(
                  attrTagMeta.name,
                  callRuntime(
                    "attrTag",
                    t.objectExpression(translatedAttrTag.properties),
                  ),
                ),
              );
            }
          }
        } else {
          i = addDynamicAttrTagStatements(
            attrTags,
            i,
            attrTagLookup,
            statements,
            propTree,
            contentKey,
          );
        }
      }
    }
  }

  if (!seen.has(contentKey) && getKnownFromPropTree(propTree, contentKey)) {
    const contentExpression = buildContent(tag.get("body"));
    if (contentExpression) {
      const contentProp = t.objectProperty(
        t.identifier(contentKey),
        contentExpression,
      );
      seen.add(contentKey);
      contentProps.add(contentProp);
      contentProperties.push(contentProp);
    }
  }

  const { attributes } = tag.node;
  const attrProperties: t.ObjectExpression["properties"] = [];
  for (let i = attributes.length; i--;) {
    const attr = attributes[i];
    const { value } = attr;
    if (t.isMarkoSpreadAttribute(attr)) {
      // Analysis drops a spread the child reads nothing from.
      if (!value.extra?.pruned) attrProperties.push(t.spreadElement(value));
    } else if (
      !seen.has(attr.name) &&
      getKnownFromPropTree(propTree, attr.name)
    ) {
      seen.add(attr.name);
      attrProperties.push(toObjectProperty(attr.name, value));
    }
  }

  return {
    properties: attrProperties.reverse().concat(contentProperties),
    statements,
  };
}

export function getTranslatedBodyContentProperty(
  props: t.ObjectExpression["properties"],
) {
  for (const prop of props) {
    if (contentProps.has(prop)) {
      return prop as unknown as t.ObjectProperty & { value: t.Expression };
    }
  }
}

export function addDynamicAttrTagStatements(
  attrTags: t.NodePath<t.MarkoTag["attributeTags"][number]>[],
  index: number,
  attrTagLookup: AttrTagLookup,
  statements: t.Statement[],
  propTree: BindingPropTree | true,
  contentKey: ContentKey = "content",
): number {
  const tag = attrTags[index];
  // Analysis drops control flow holding only attribute tags the child never reads.
  if (tag.isMarkoTag() && !tag.node.extra!.pruned) {
    if (isAttributeTag(tag)) {
      const attrTagMeta = attrTagLookup[getTagName(tag)];
      const attrTagExport = getKnownFromPropTree(propTree, attrTagMeta.name);
      if (attrTagExport && attrTagMeta.dynamic) {
        const translatedAttrTag = translateAttrs(
          tag,
          attrTagExport,
          undefined,
          statements,
          contentKey,
        );
        if (attrTagMeta.repeated) {
          statements.push(
            t.expressionStatement(
              t.assignmentExpression(
                "=",
                getAttrTagIdentifier(attrTagMeta),
                callRuntime(
                  "attrTags",
                  getAttrTagIdentifier(attrTagMeta),
                  t.objectExpression(translatedAttrTag.properties),
                ),
              ),
            ),
          );
        } else {
          statements.push(
            t.expressionStatement(
              t.assignmentExpression(
                "=",
                getAttrTagIdentifier(attrTagMeta),
                callRuntime(
                  "attrTag",
                  t.objectExpression(translatedAttrTag.properties),
                ),
              ),
            ),
          );
        }
      }
    } else {
      switch (getTagName(tag)) {
        case "if":
          return translateIfAttrTag(
            attrTags,
            index,
            attrTagLookup,
            statements,
            propTree,
            contentKey,
          );

        case "for": {
          return translateForAttrTag(
            attrTags,
            index,
            attrTagLookup,
            statements,
            propTree,
            contentKey,
          );
        }
      }
    }
  }

  return index;
}

/** Unwraps a lone spread to the spread argument itself, so the result may alias
 * a caller binding; anything the runtime writes to needs its own object. */
export function propsToExpression(
  props: t.ObjectExpression["properties"],
): t.Expression {
  return props.length === 1 && t.isSpreadElement(props[0])
    ? props[0].argument
    : t.objectExpression(props);
}

function translateForAttrTag(
  attrTags: t.NodePath<t.MarkoTag["attributeTags"][number]>[],
  index: number,
  attrTagLookup: AttrTagLookup,
  statements: t.Statement[],
  propTree: BindingPropTree | true,
  contentKey: ContentKey,
) {
  const forTag = attrTags[index] as t.NodePath<t.MarkoTag>;
  const bodyStatements: t.Statement[] = [];
  addAllAttrTagsAsDynamic(
    forTag,
    attrTagLookup,
    bodyStatements,
    propTree,
    contentKey,
  );
  statements.push(
    buildForRuntimeCall(
      getForType(forTag.node)!,
      getKnownAttrValues(forTag.node),
      forTag.node.body.params,
      bodyStatements,
    ),
  );

  return index;
}

function translateIfAttrTag(
  attrTags: t.NodePath<t.MarkoTag["attributeTags"][number]>[],
  index: number,
  attrTagLookup: AttrTagLookup,
  statements: t.Statement[],
  propTree: BindingPropTree | true,
  contentKey: ContentKey,
) {
  const ifTag = attrTags[index] as t.NodePath<t.MarkoTag>;
  const consequentStatements: t.Statement[] = [];
  let ifStatement = t.ifStatement(
    getConditionTestValue(ifTag)!,
    t.blockStatement(consequentStatements),
  );

  statements.push(ifStatement);
  addAllAttrTagsAsDynamic(
    ifTag,
    attrTagLookup,
    consequentStatements,
    propTree,
    contentKey,
  );

  let nextIndex = index + 1;
  while (nextIndex < attrTags.length) {
    const nextTag = attrTags[nextIndex];
    if (nextTag.isMarkoTag()) {
      switch (getTagName(nextTag)) {
        case "else-if":
        case "else": {
          const testValue = getConditionTestValue(nextTag);
          const alternateStatements: t.Statement[] = [];
          addAllAttrTagsAsDynamic(
            nextTag,
            attrTagLookup,
            alternateStatements,
            propTree,
            contentKey,
          );

          if (testValue) {
            ifStatement.alternate = ifStatement = t.ifStatement(
              testValue,
              t.blockStatement(alternateStatements),
            );

            nextIndex++;
            continue;
          } else {
            ifStatement.alternate = t.blockStatement(alternateStatements);
            break;
          }
        }
      }
    }

    break;
  }

  return nextIndex - 1;
}

function addAllAttrTagsAsDynamic(
  tag: t.NodePath<t.MarkoTag>,
  attrTagLookup: AttrTagLookup,
  statements: t.Statement[],
  propTree: BindingPropTree | true,
  contentKey: ContentKey,
) {
  const attrTags = getAttrTagPaths(tag);
  for (let i = 0; i < attrTags.length; i++) {
    i = addDynamicAttrTagStatements(
      attrTags,
      i,
      attrTagLookup,
      statements,
      propTree,
      contentKey,
    );
  }
}

function findObjectProperty(
  name: string,
  props: t.ObjectExpression["properties"],
) {
  for (const prop of props) {
    if (prop.type === "ObjectProperty") {
      switch (prop.key.type) {
        case "StringLiteral":
          if (prop.key.value === name) {
            return prop;
          }
          break;
        case "Identifier":
          if (prop.key.name === name) {
            return prop;
          }
          break;
      }
    }
  }

  return false;
}

function getConditionTestValue({
  node: { attributes },
}: t.NodePath<t.MarkoTag>) {
  return attributes.length === 1 ? attributes[0].value : undefined;
}

function buildContent(body: t.NodePath<t.MarkoTagBody>) {
  const bodySection = body.node.extra?.section;
  if (bodySection) {
    const tag = body.parentPath as t.NodePath<t.MarkoTag>;
    if (isOutputHTML()) {
      const loopKey = bodySection.localClosures && getLoopKey(tag);
      const serialized = getSectionRegisterReasons(bodySection);
      body.node.body.unshift(getScopeReasonStatement(bodySection) as any);
      const id = t.stringLiteral(getResumeRegisterId(bodySection, "content"));
      const renderer = t.arrowFunctionExpression(
        body.node.params,
        t.blockStatement(body.node.body),
      );
      const ownerId = getScopeIdIdentifier(
        getSection(getAttributeTagParent(tag))!,
      );

      return serialized
        ? callRuntime(
            "_content_resume",
            id,
            renderer,
            ownerId,
            getRegisteredLocals(bodySection, loopKey),
            loopKey && t.cloneNode(loopKey),
          )
        : callRuntime("_content", id, renderer, ownerId, loopKey);
    } else {
      // Nothing reads content whose renderer is elided, so it has no property.
      const renderer = getSectionRendererIdentifier(bodySection);
      if (renderer) {
        const localClosureValues = getLocalClosureValues(
          bodySection,
          bodySection.localClosures && getLoopKey(tag),
        );
        return t.callExpression(
          renderer,
          localClosureValues
            ? [scopeIdentifier, localClosureValues]
            : [scopeIdentifier],
        );
      }
    }
  }
}

// Content a loop creates is keyed by the iteration of each attribute tag
// `<for>` around it: by index for `of`, as `<for>` keys, else by its first param.
function getLoopKey(tag: t.NodePath<t.MarkoTag>) {
  let key: t.Expression | undefined;
  let parent = getParentTag(tag)!;
  while (isAttributeTag(parent) || isTransparentTag(parent)) {
    if (getTagName(parent) === "for") {
      const loopKey = getForKeyParam(parent.node);
      key = key
        ? t.binaryExpression(
            "+",
            t.binaryExpression("+", loopKey, t.stringLiteral(" ")),
            key,
          )
        : loopKey;
    }
    parent = getParentTag(parent)!;
  }
  return key!;
}

// The loop's key param, added when missing. Params that cannot name it move into
// a default after the loop's arguments, which binds them as the params would.
function getForKeyParam(tag: t.MarkoTag) {
  const forType = getForType(tag);
  const { params } = tag.body;
  const keyIndex = forType === "of" ? 1 : 0;
  const keyParam = params[keyIndex];
  if (keyParam?.type === "Identifier") return t.identifier(keyParam.name);

  const key = generateUidIdentifier("key");
  if (keyParam || params[0]?.type === "RestElement") {
    const args =
      forType === "of"
        ? [generateUidIdentifier("item"), key]
        : forType === "in"
          ? [key, generateUidIdentifier("value")]
          : [key];
    params.splice(
      0,
      params.length,
      ...args,
      t.assignmentPattern(
        t.arrayPattern(params.slice()),
        t.arrayExpression(args.map((arg) => t.cloneNode(arg))),
      ),
    );
  } else {
    if (keyIndex > params.length) params.push(generateUidIdentifier("item"));
    params.push(key);
  }
  return t.identifier(key.name);
}

// What registered content reads that its scopes may lack, as a thunk the
// serializer calls only once the content is sent: its registered factory's args.
function getRegisteredLocals(
  bodySection: Section,
  loopKey: t.Expression | undefined,
) {
  const contentClosureValues = getContentClosureValues(bodySection);
  const localClosureValues = getLocalClosureValues(bodySection, loopKey);
  if (contentClosureValues || localClosureValues) {
    return t.arrowFunctionExpression(
      contentClosureValues ? [contentClosureValues.scope] : [],
      t.arrayExpression([
        ...(localClosureValues ? [localClosureValues] : []),
        ...(contentClosureValues?.levels || []),
      ]),
    );
  }
}

// The attribute tag `<for>` params content reads, keyed by its local closures,
// and the loop key that tells its instances apart.
function getLocalClosureValues(
  bodySection: Section,
  loopKey: t.Expression | undefined,
) {
  if (bodySection.localClosures) {
    return t.objectExpression([
      ...toArray(bodySection.localClosures, (closure) =>
        toObjectProperty(
          getScopeAccessor(closure, true),
          getDeclaredBindingExpression(closure),
        ),
      ),
      toObjectProperty(getAccessorProp().LoopKey, loopKey!),
    ]);
  }
}
