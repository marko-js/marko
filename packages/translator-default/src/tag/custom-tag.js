import { types as t } from "@marko/babel-types";
import { assertNoArgs, getTagDef } from "@marko/babel-utils";
import { getAttrs, buildEventHandlerArray } from "./util";
import nativeTag from "./native-tag";
import withPreviousLocation from "../util/with-previous-location";

// TODO: support transform and other entries.
const TAG_FILE_ENTRIES = ["template", "renderer"];

export default function(path) {
  const { hub, node } = path;
  const { meta, options } = hub;
  const { name, key, isNullable } = node;

  assertNoArgs(path);

  let tagIdentifier;

  if (t.isStringLiteral(name)) {
    const tagDef = getTagDef(path);
    const tagName = name.value;
    const relativePath = tagDef && resolveRelativePath(hub, tagDef);

    if (!relativePath) {
      if (options.ignoreUnrecognizedTags) {
        return nativeTag(path);
      }

      throw path
        .get("name")
        .buildCodeFrameError(
          `Unable to find entry point for custom tag <${tagName}>.`
        );
    }

    tagIdentifier = hub.importDefault(path, relativePath, tagName);

    if (!meta.tags.includes(relativePath)) {
      meta.tags.push(relativePath);
    }
  } else {
    tagIdentifier = name;
  }

  const foundAttrs = getAttrs(path);
  const customTagRenderCall = withPreviousLocation(
    t.expressionStatement(
      t.callExpression(
        hub.importDefault(
          path,
          "marko/src/runtime/helpers/render-tag",
          "marko_tag"
        ),
        [
          tagIdentifier,
          // TODO: this could be left as null if we froze input mutations and used a default object in the runtime.
          t.isNullLiteral(foundAttrs) ? t.objectExpression([]) : foundAttrs,
          t.identifier("out"),
          hub._componentDefIdentifier,
          key,
          ...buildEventHandlerArray(path)
        ]
      )
    ),
    node
  );

  if (isNullable) {
    let renderBodyIdentifier;
    const renderBodyProp =
      t.isObjectExpression(foundAttrs) &&
      foundAttrs.properties.find(
        prop => prop.key && prop.key.value === "renderBody"
      );

    if (renderBodyProp) {
      renderBodyIdentifier = path.scope.generateUidIdentifier("renderBody");
      path.insertBefore(
        t.variableDeclaration("const", [
          t.variableDeclarator(renderBodyIdentifier, renderBodyProp.value)
        ])
      );

      renderBodyProp.value = renderBodyIdentifier;
    }

    path.replaceWith(
      t.ifStatement(
        name,
        customTagRenderCall,
        renderBodyIdentifier &&
          t.expressionStatement(
            t.callExpression(renderBodyIdentifier, [t.identifier("out")])
          )
      )
    );
  } else {
    path.replaceWith(customTagRenderCall);
  }
}

function resolveRelativePath(hub, tagDef) {
  for (const entry of TAG_FILE_ENTRIES) {
    if (!tagDef[entry]) continue;
    return hub.resolveRelativePath(tagDef[entry]);
  }
}
