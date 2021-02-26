import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  getTagDef,
  resolveRelativePath,
  importDefault
} from "@marko/babel-utils";
import { getAttrs, buildEventHandlerArray } from "./util";
import nativeTag from "./native-tag";
import withPreviousLocation from "../util/with-previous-location";

// TODO: support transform and other entries.
const TAG_FILE_ENTRIES = ["template", "renderer"];

export default function(path, isNullable) {
  const {
    hub: { file },
    node
  } = path;
  const { metadata, markoOpts } = file;
  const { name, key } = node;

  assertNoArgs(path);

  let tagIdentifier;

  if (t.isStringLiteral(name)) {
    const tagDef = getTagDef(path);
    const tagName = name.value;
    const relativePath = tagDef && resolveRelativeTagEntry(file, tagDef);

    if (!relativePath) {
      if (markoOpts.ignoreUnrecognizedTags) {
        return nativeTag(path);
      }

      throw path
        .get("name")
        .buildCodeFrameError(
          `Unable to find entry point for custom tag <${tagName}>.`
        );
    }

    tagIdentifier = importDefault(file, relativePath, tagName);

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
        importDefault(
          file,
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

function resolveRelativeTagEntry(file, tagDef) {
  for (const entry of TAG_FILE_ENTRIES) {
    if (!tagDef[entry]) continue;
    return resolveRelativePath(file, tagDef[entry]);
  }
}
