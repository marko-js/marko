import { types as t } from "@marko/compiler";
import { isAttributeTag } from "@marko/compiler/babel-utils";

import { getSectionRendererIdentifier } from "./binding-has-prop";
import {
  type BindingPropTree,
  getPropTreeAt,
  hasAllKnownProps,
} from "./binding-prop-tree";
import { type Binding, getCanonicalBinding, propsUtil } from "./bindings";
import { buildForRuntimeCall, getForType } from "./branch-tag";
import { getDeclaredBindingExpression } from "./get-declared-binding-expression";
import { getKnownAttrValues } from "./get-known-attr-values";
import { getAttributeTagParent } from "./get-parent-tag";
import { getTagName } from "./get-tag-name";
import { isOutputHTML } from "./marko-config";
import {
  type AttrTagMeta,
  type AttrTagLookup,
  getAttrTagIdentifier,
  getAttrTagPaths,
} from "./nested-attribute-tags";
import { type SortedOpt, toArray, toSet } from "./optional";
import { callRuntime } from "./runtime";
import { getScopeAccessor } from "./scope-accessor";
import { scopeIdentifier } from "./scope-read";
import {
  getScopeIdIdentifier,
  getSection,
  getRendererReason,
  type Section,
} from "./sections";
import { getContentClosureValues, getResumeRegisterId } from "./signals";
import { toObjectProperty } from "./to-property-name";
import { getScopeReasonStatement } from "./write-guard";

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
        getPropTreeAt(propTree, attrTagMeta.name)
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
              getPropTreeAt(propTree, attrTagMeta.name),
              undefined,
              statements,
              contentKey,
            );

            addAttrTag(
              contentProperties,
              attrTagMeta,
              t.objectExpression(translatedAttrTag.properties),
            );
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

  if (!seen.has(contentKey) && getPropTreeAt(propTree, contentKey)) {
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
  const knownSpread = getSingleKnownSpread(propTree, attributes);
  for (let i = attributes.length; i--;) {
    const attr = attributes[i];
    const { value } = attr;
    if (t.isMarkoSpreadAttribute(attr) && knownSpread) {
      // Analysis reads it prop by prop, so it spreads what those props read.
      if (!getCanonicalBinding(knownSpread).pruned) {
        attrProperties.push(
          t.spreadElement(getDeclaredBindingExpression(knownSpread, true)),
        );
      }
    } else if (!value.extra?.dropped) {
      // Analysis drops a value nothing reads, so neither output emits it.
      if (t.isMarkoSpreadAttribute(attr)) {
        attrProperties.push(t.spreadElement(value));
      } else if (!seen.has(attr.name) && getPropTreeAt(propTree, attr.name)) {
        seen.add(attr.name);
        attrProperties.push(toObjectProperty(attr.name, value));
      }
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
  if (tag.isMarkoTag() && !tag.node.extra!.dropped) {
    if (isAttributeTag(tag)) {
      const attrTagMeta = attrTagLookup[getTagName(tag)];
      const attrTagTree = getPropTreeAt(propTree, attrTagMeta.name);
      if (attrTagTree && attrTagMeta.dynamic) {
        const translatedAttrTag = translateAttrs(
          tag,
          attrTagTree,
          undefined,
          statements,
          contentKey,
        );
        statements.push(
          t.expressionStatement(
            t.assignmentExpression(
              "=",
              getAttrTagIdentifier(attrTagMeta),
              appendAttrTag(
                attrTagMeta.repeated && getAttrTagIdentifier(attrTagMeta),
                t.objectExpression(translatedAttrTag.properties),
              ),
            ),
          ),
        );
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

// Adds an attribute tag's props to its parent's: a repeated one folds into
// the property its earlier occurrences built.
export function addAttrTag(
  properties: t.ObjectExpression["properties"],
  { name, repeated }: AttrTagMeta,
  props: t.ObjectExpression,
) {
  const prev = repeated && findObjectProperty(name, properties);
  if (prev) prev.value = appendAttrTag(prev.value as t.Expression, props);
  else properties.push(toObjectProperty(name, appendAttrTag(undefined, props)));
}

// An attribute tag's value, with the occurrences of it before folded in.
export function appendAttrTag(
  prev: t.Expression | undefined | false,
  props: t.ObjectExpression,
) {
  return prev
    ? callRuntime("attrTags", prev, props)
    : callRuntime("attrTag", props);
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
    if (isOutputHTML()) {
      const serialized = getRendererReason(bodySection);
      body.node.body.unshift(getScopeReasonStatement(bodySection) as any);

      return callRuntime(
        serialized ? "_content_resume" : "_content",
        t.stringLiteral(getResumeRegisterId(bodySection, "content")),
        t.arrowFunctionExpression(
          body.node.params,
          t.blockStatement(body.node.body),
        ),
        getScopeIdIdentifier(
          getSection(
            getAttributeTagParent(body.parentPath as t.NodePath<t.MarkoTag>),
          )!,
        ),
        serialized && getRegisteredLocals(bodySection),
      );
    } else {
      // Nothing reads content whose renderer is elided, so it has no property.
      const renderer = getSectionRendererIdentifier(bodySection);
      if (renderer) {
        const localClosureValues = getLocalClosureValues(bodySection);
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

// What registered content reads that its scopes may lack, as a thunk the
// serializer calls only once the content is sent: its registered factory's args.
function getRegisteredLocals(bodySection: Section) {
  const contentClosureValues = getContentClosureValues(bodySection);
  const localClosureValues = getLocalClosureValues(bodySection);
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

// The attribute tag `<for>` params content reads, keyed by its local closures.
function getLocalClosureValues(bodySection: Section) {
  if (bodySection.localClosures) {
    return t.objectExpression(
      toArray(bodySection.localClosures, (closure) =>
        toObjectProperty(
          getScopeAccessor(closure, true),
          getDeclaredBindingExpression(closure),
        ),
      ),
    );
  }
}

// The one spread a child reading every prop by name reads, prop by prop.
export function getSingleKnownSpread(
  propTree: BindingPropTree | true,
  attributes: (t.MarkoAttribute | t.MarkoSpreadAttribute)[],
) {
  if (propTree === true || !hasAllKnownProps(propTree)) return;
  let binding: Binding | undefined;
  for (let i = attributes.length; i--;) {
    const attr = attributes[i];
    if (attr.type === "MarkoSpreadAttribute") {
      const spreadFrom = attr.value.extra?.spreadFrom;
      if (binding || !spreadFrom || Array.isArray(spreadFrom)) return;
      binding = spreadFrom;
    } else if (
      binding &&
      !propsUtil.has(binding.excludeProperties, attr.name)
    ) {
      return;
    }
  }
  return binding;
}
