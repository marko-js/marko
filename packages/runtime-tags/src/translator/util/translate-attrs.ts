import { types as t } from "@marko/compiler";
import { isAttributeTag } from "@marko/compiler/babel-utils";

import { buildForRuntimeCall, getForType } from "../core/for";
import { scopeIdentifier } from "../visitors/program";
import {
  type BindingPropTree,
  getKnownFromPropTree,
} from "./binding-prop-tree";
import { getSharedUid } from "./generate-uid";
import { getKnownAttrValues } from "./get-known-attr-values";
import { getAttributeTagParent } from "./get-parent-tag";
import { getTagName } from "./get-tag-name";
import { isOutputHTML } from "./marko-config";
import {
  type AttrTagLookup,
  getAttrTagIdentifier,
} from "./nested-attribute-tags";
import { toArray } from "./optional";
import { getScopeAccessor } from "./references";
import { callRuntime } from "./runtime";
import {
  getScopeIdIdentifier,
  getSection,
  getSectionRegisterReasons,
} from "./sections";
import { isReasonDynamic } from "./serialize-reasons";
import { getResumeRegisterId } from "./signals";
import { toObjectProperty, toPropertyName } from "./to-property-name";

const contentProps = new WeakSet<t.Node>();
type ContentKey = "renderBody" | "content";

export function translateAttrs(
  tag: t.NodePath<t.MarkoTag>,
  propTree: BindingPropTree | true = true,
  skip?: Set<string>,
  statements: t.Statement[] = [],
  contentKey: ContentKey = "content",
) {
  const properties: t.ObjectExpression["properties"] = [];
  const attrTagLookup = tag.node.extra?.attributeTags;
  const seen = new Set(skip);
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
          properties.push(
            toObjectProperty(
              attrTagMeta.name,
              getAttrTagIdentifier(attrTagMeta),
            ),
          );
        }
      }
    }

    const attrTags = tag.node.body.attributeTags
      ? (tag.get("body").get("body") as ReturnType<
          typeof tag.get<"attributeTags">
        >)
      : tag.get("attributeTags");
    for (let i = 0; i < attrTags.length; i++) {
      const child = attrTags[i];
      if (child.isMarkoTag()) {
        if (isAttributeTag(child)) {
          const attrTagMeta = attrTagLookup[getTagName(child)];

          if (skip?.has(attrTagMeta.name)) continue;

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

            if (attrTagMeta.repeated) {
              const prevProp = findObjectProperty(attrTagMeta.name, properties);
              if (prevProp) {
                prevProp.value = callRuntime(
                  "attrTags",
                  prevProp.value as t.Expression,
                  propsToExpression(translatedAttrTag.properties),
                );
              } else {
                properties.push(
                  toObjectProperty(
                    attrTagMeta.name,
                    callRuntime(
                      "attrTag",
                      propsToExpression(translatedAttrTag.properties),
                    ),
                  ),
                );
              }
            } else {
              properties.push(
                toObjectProperty(
                  attrTagMeta.name,
                  callRuntime(
                    "attrTag",
                    propsToExpression(translatedAttrTag.properties),
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
      properties.push(contentProp);
    }
  }

  const { attributes } = tag.node;
  for (let i = attributes.length; i--; ) {
    const attr = attributes[i];
    const { value } = attr;
    if (t.isMarkoSpreadAttribute(attr)) {
      properties.push(t.spreadElement(value));
    } else if (
      !seen.has(attr.name) &&
      getKnownFromPropTree(propTree, attr.name)
    ) {
      seen.add(attr.name);
      properties.push(toObjectProperty(attr.name, value));
    }
  }

  properties.reverse();

  return { properties, statements };
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
  if (tag.isMarkoTag()) {
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
                  propsToExpression(translatedAttrTag.properties),
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
                  propsToExpression(translatedAttrTag.properties),
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
  const attrTags = tag.node.body.attributeTags
    ? (tag.get("body").get("body") as ReturnType<
        typeof tag.get<"attributeTags">
      >)
    : tag.get("attributeTags");
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
    if (isOutputHTML()) {
      const serialized = getSectionRegisterReasons(bodySection);
      let dynamicSerializeReason =
        !!bodySection.paramReasonGroups ||
        isReasonDynamic(bodySection.serializeReason);
      if (!dynamicSerializeReason) {
        for (const reason of bodySection.serializeReasons.values()) {
          if (isReasonDynamic(reason)) {
            dynamicSerializeReason = true;
            break;
          }
        }
      }

      if (dynamicSerializeReason) {
        body.node.body.unshift(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              t.identifier(
                getSharedUid(`scope${bodySection.id}_reason`, bodySection),
              ),
              callRuntime("_scope_reason"),
            ),
          ]) as any,
        );
      } else {
        body.node.body.unshift(
          t.expressionStatement(callRuntime("_scope_reason")) as any,
        );
      }

      return callRuntime(
        serialized ? "_content_resume" : "_content",
        t.stringLiteral(getResumeRegisterId(bodySection, "content")),
        t.arrowFunctionExpression(
          body.node.params,
          t.blockStatement(body.node.body),
        ),
        serialized
          ? getScopeIdIdentifier(
              getSection(
                getAttributeTagParent(
                  body.parentPath as t.NodePath<t.MarkoTag>,
                ),
              )!,
            )
          : undefined,
      );
    } else {
      return t.callExpression(
        t.identifier(bodySection.name),
        bodySection.referencedLocalClosures
          ? [
              scopeIdentifier,
              t.objectExpression(
                toArray(bodySection.referencedLocalClosures, (ref) => {
                  const accessor = getScopeAccessor(ref, true);
                  const isShorthand = accessor === ref.name;
                  return t.objectProperty(
                    toPropertyName(accessor),
                    t.identifier(ref.name),
                    false,
                    isShorthand,
                  );
                }),
              ),
            ]
          : [scopeIdentifier],
      );
    }
  }
}
