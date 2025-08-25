import { types as t } from "@marko/compiler";
import { isAttributeTag, isTransparentTag } from "@marko/compiler/babel-utils";

import { buildForRuntimeCall, getForType } from "../core/for";
import { scopeIdentifier, type TemplateExports } from "../visitors/program";
import { getKnownAttrValues } from "./get-known-attr-values";
import { getParentTag } from "./get-parent-tag";
import { getTagName } from "./get-tag-name";
import { isOutputHTML } from "./marko-config";
// TODO: should this move here.
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
  isSerializedSection,
} from "./sections";
import { getResumeRegisterId } from "./signals";
import { toObjectProperty, toPropertyName } from "./to-property-name";

const contentProps = new WeakSet<t.Node>();
type ContentKey = "renderBody" | "content";

export function translateAttrs(
  tag: t.NodePath<t.MarkoTag>,
  templateExports?: TemplateExports,
  statements: t.Statement[] = [],
  contentKey: ContentKey = "content",
) {
  const seen = new Set<string>();
  const properties: t.ObjectExpression["properties"] = [];
  const attrTagLookup = tag.node.extra?.attributeTags;

  if (attrTagLookup) {
    for (const name in attrTagLookup) {
      const attrTagMeta = attrTagLookup[name];
      if (usesExport(templateExports, attrTagMeta.name)) {
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
          if (attrTagMeta.dynamic) {
            i = addDynamicAttrTagStatements(
              attrTags,
              i,
              attrTagLookup,
              statements,
              templateExports,
              contentKey,
            );
          } else {
            const translatedAttrTag = translateAttrs(
              child,
              templateExports?.[attrTagMeta.name]?.props,
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
            templateExports,
            contentKey,
          );
        }
      }
    }
  }

  if (!seen.has(contentKey) && usesExport(templateExports, contentKey)) {
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
    } else if (!seen.has(attr.name) && usesExport(templateExports, attr.name)) {
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
  templateExports: TemplateExports,
  contentKey: ContentKey = "content",
): number {
  const tag = attrTags[index];
  if (tag.isMarkoTag()) {
    if (isAttributeTag(tag)) {
      const attrTagMeta = attrTagLookup[getTagName(tag)];
      if (
        usesExport(templateExports, attrTagMeta.name) &&
        attrTagMeta.dynamic
      ) {
        const translatedAttrTag = translateAttrs(
          tag,
          templateExports?.[attrTagMeta.name]?.props,
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
            templateExports,
            contentKey,
          );

        case "for": {
          return translateForAttrTag(
            attrTags,
            index,
            attrTagLookup,
            statements,
            templateExports,
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
  templateExports: TemplateExports,
  contentKey: ContentKey,
) {
  const forTag = attrTags[index] as t.NodePath<t.MarkoTag>;
  const bodyStatements: t.Statement[] = [];
  addAllAttrTagsAsDynamic(
    forTag,
    attrTagLookup,
    bodyStatements,
    templateExports,
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
  templateExports: TemplateExports,
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
    templateExports,
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
            templateExports,
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
  templateExports: TemplateExports,
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
      templateExports,
      contentKey,
    );
  }
}

function usesExport(templateExports: TemplateExports, name: string) {
  return !templateExports || !!templateExports[name];
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
      const serialized = isSerializedSection(bodySection);
      return callRuntime(
        serialized ? "registerContent" : "createContent",
        t.stringLiteral(getResumeRegisterId(bodySection, "renderer")),
        t.arrowFunctionExpression(
          body.node.params,
          t.blockStatement(body.node.body),
        ),
        serialized
          ? getScopeIdIdentifier(
              getSection(
                getNonAttributeTagParent(
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
                  const accessor = getScopeAccessor(ref);
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

function getNonAttributeTagParent(
  tag: t.NodePath<t.MarkoTag>,
): t.NodePath<t.MarkoTag> {
  let cur: t.NodePath<t.MarkoTag> = tag;
  while (isAttributeTag(cur) || isTransparentTag(cur)) {
    cur = getParentTag(cur)!;
  }

  return cur;
}
