import { types as t, NodePath } from "@marko/babel-types";
import {
  findParentTag,
  isTransparentTag,
  isLoopTag,
  isAttributeTag
} from "@marko/babel-utils";
import analyzeTagName, { TagNameTypes } from "../util/analyze-tag-name";
import attrsToObject from "../util/attrs-to-object";
import { flushInto, hasPendingHTML } from "../util/html-flush";

const HOISTED_NODES = new WeakSet<t.Node>();
const HOISTED_CHILDREN = new WeakSet<NodePath<t.MarkoTag>>();
const PARENT_TAGS = new WeakMap<NodePath<t.MarkoTag>, NodePath<t.MarkoTag>>();
const LOOKUPS = new WeakMap<NodePath<t.MarkoTag>, Lookup>();
type Lookup = Record<
  string,
  {
    identifier?: t.Identifier;
    dynamic: boolean;
    repeated: boolean;
  }
>;

export function hasHoistedChildren(tag: NodePath<t.MarkoTag>) {
  return HOISTED_CHILDREN.has(tag);
}

export function isHoistedNode(node: t.Node) {
  return HOISTED_NODES.has(node);
}

export function enter(tag: NodePath<t.MarkoTag>) {
  const parentTag = findParentTag(tag);

  if (!parentTag) {
    throw tag
      .get("name")
      .buildCodeFrameError("@tags must be nested within another tag.");
  }

  if (analyzeTagName(parentTag).type === TagNameTypes.NativeTag) {
    throw tag
      .get("name")
      .buildCodeFrameError("@tags cannot be nested under native tags.");
  }

  if (hasPendingHTML(tag)) {
    throw tag
      .get("name")
      .buildCodeFrameError("Dynamic @tags cannot be mixed with body content.");
  }

  PARENT_TAGS.set(tag, parentTag);

  if (!LOOKUPS.has(parentTag)) {
    const lookup = analyzeRoot(parentTag);
    LOOKUPS.set(parentTag, lookup);

    for (const attrName in lookup) {
      const info = lookup[attrName];
      if (info.dynamic) {
        info.identifier = parentTag.scope.generateUidIdentifier(attrName);
        parentTag.insertBefore(
          info.repeated
            ? t.variableDeclaration("const", [
                t.variableDeclarator(info.identifier, t.arrayExpression([]))
              ])
            : t.variableDeclaration("let", [
                t.variableDeclarator(info.identifier)
              ])
        );

        parentTag.pushContainer(
          "attributes",
          t.markoAttribute(attrName, info.identifier)
        );

        HOISTED_CHILDREN.add(parentTag);
      } else if (info.repeated) {
        parentTag.pushContainer(
          "attributes",
          t.markoAttribute(attrName, t.arrayExpression([]))
        );
      }
    }
  }
}

export function exit(tag: NodePath<t.MarkoTag>) {
  flushInto(tag);

  const attrName = (tag.node.name as t.StringLiteral).value.slice(1);
  const parentTag = PARENT_TAGS.get(tag)!;
  const info = LOOKUPS.get(parentTag)![attrName];
  const attrsObject = attrsToObject(tag, true) || t.objectExpression([]);

  if (info.identifier) {
    const replacement = t.expressionStatement(
      info.repeated
        ? t.callExpression(
            t.memberExpression(info.identifier, t.identifier("push")),
            [attrsObject]
          )
        : t.assignmentExpression("=", info.identifier, attrsObject)
    );

    HOISTED_NODES.add(replacement);
    tag.replaceWith(replacement);
  } else if (info.repeated) {
    (parentTag
      .get("attributes")
      .find(attr => (attr.node as t.MarkoAttribute).name === attrName)!
      .get("value") as NodePath<t.ArrayExpression>).pushContainer(
      "elements",
      attrsObject
    );
    tag.remove();
  } else {
    parentTag.pushContainer(
      "attributes",
      t.markoAttribute(attrName, attrsObject)
    );
    tag.remove();
  }
}

function analyzeRoot(tag: NodePath<t.MarkoTag>) {
  const lookup = {} as Lookup;
  analyzeChildren(lookup, false, false, tag);
  return lookup;
}

function analyzeChildren(
  lookup: Lookup,
  repeated: boolean,
  dynamic: boolean,
  tag: NodePath<t.MarkoTag>
) {
  for (const child of tag.get("body").get("body")) {
    if (child.isMarkoTag()) {
      analyzeChild(lookup, repeated, dynamic, child as NodePath<t.MarkoTag>);
    }
  }
}

function analyzeChild(
  lookup: Lookup,
  repeated: boolean,
  dynamic: boolean,
  tag: NodePath<t.MarkoTag>
) {
  if (isTransparentTag(tag)) {
    analyzeChildren(lookup, repeated || isLoopTag(tag), true, tag);
  } else if (isAttributeTag(tag)) {
    const attrName = (tag.node.name as t.StringLiteral).value.slice(1);
    const existing = lookup[attrName];
    const info =
      existing ||
      (lookup[attrName] = {
        dynamic: false,
        repeated: false
      });

    info.dynamic ||= dynamic;
    info.repeated ||= repeated || existing !== undefined;
  }
}
