import { types as t } from "@marko/babel-types";
import { assertNoArgs, getTagDef } from "@marko/babel-utils";
import { getAttrs, buildEventHandlerArray } from "./util";
import nativeTag from "./native-tag";
import withPreviousLocation from "../util/with-previous-location";

// TODO: support transform and other entries.
const TAG_FILE_ENTRIES = ["template", "renderer"];

export default function(path) {
  const {
    hub: { file },
    node
  } = path;
  const { metadata, _markoOptions } = file;
  const { name, key, isNullable } = node;

  assertNoArgs(path);

  let tagIdentifier;

  if (t.isStringLiteral(name)) {
    const tagDef = getTagDef(path);
    const tagName = name.value;
    const relativePath = tagDef && resolveRelativePath(file, tagDef);

    if (!relativePath) {
      if (_markoOptions.ignoreUnrecognizedTags) {
        return nativeTag(path);
      }

      throw path
        .get("name")
        .buildCodeFrameError(
          `Unable to find entry point for custom tag <${tagName}>.`
        );
    }

    tagIdentifier = file.importDefault(path, relativePath, tagName);

    if (!metadata.marko.tags.includes(relativePath)) {
      metadata.marko.tags.push(relativePath);
    }
  } else {
    tagIdentifier = name;
  }

  const foundAttrs = getAttrs(path);
  const customTagRenderCall = withPreviousLocation(
    t.expressionStatement(
      t.callExpression(
        file.importDefault(
          path,
          "marko/src/runtime/helpers/render-tag",
          "marko_tag"
        ),
        [
          tagIdentifier,
          // TODO: this could be left as null if we froze input mutations and used a default object in the runtime.
          t.isNullLiteral(foundAttrs) ? t.objectExpression([]) : foundAttrs,
          t.identifier("out"),
          file._componentDefIdentifier,
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

function resolveRelativePath(file, tagDef) {
  for (const entry of TAG_FILE_ENTRIES) {
    if (!tagDef[entry]) continue;
    return file.resolveRelativePath(tagDef[entry]);
  }
}
