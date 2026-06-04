import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  getTagDef,
  importDefault,
  importNamed,
  loadFileForTag,
  resolveRelativePath,
  resolveTagImport,
} from "@marko/compiler/babel-utils";

import withPreviousLocation from "../util/with-previous-location";
import dynamicTag from "./dynamic-tag";
import nativeTag from "./native-tag";
import { buildEventHandlerArray, getAttrs } from "./util";

const loadTagsByFile = new WeakMap();
const withAssetsByFile = new WeakMap();

export default function (path, isNullable) {
  const {
    hub: { file },
    node,
  } = path;
  const { markoOpts } = file;
  const { name, key } = node;

  assertNoArgs(path);

  let tagIdentifier;

  if (node.extra?.featureType === "tags") {
    path.set(
      "name",
      path.scope.hasBinding(name.value)
        ? t.identifier(name.value)
        : importDefault(file, node.extra.relativePath, name.value),
    );
    return dynamicTag(path);
  }

  if (t.isStringLiteral(name)) {
    const tagName = name.value;
    let relativePath = node.extra && node.extra.relativePath;

    if (!relativePath) {
      const tagDef = getTagDef(path);
      if (tagDef && tagDef.renderer) {
        // Normally new tags should not be added in the translate stage.
        // We make an exception here for core tags, init-components & _preserve being the primary culprits.
        // TODO: in the future refactor so this is not needed.
        relativePath = resolveRelativePath(file, tagDef.renderer);
      }
    }

    let binding = !relativePath && path.scope.getBinding(tagName);
    if (binding && !binding.identifier.loc) binding = null;

    if (relativePath) {
      if (node.extra?.tagNameLoad && markoOpts.output === "dom") {
        const importBinding = path.scope.getBinding(tagName);
        if (importBinding?.path?.parentPath?.isImportDeclaration()) {
          importBinding.path.parentPath.remove();
        }
        let loadTags = loadTagsByFile.get(file);
        if (!loadTags) loadTagsByFile.set(file, (loadTags = new Map()));
        if (loadTags.has(relativePath)) {
          tagIdentifier = loadTags.get(relativePath);
        } else {
          const loadTagFn = importDefault(
            file,
            "marko/src/runtime/helpers/load-tag.js",
            "marko_load_tag",
          );
          const loadId = file.path.scope.generateUidIdentifier(
            `marko_load_${tagName}`,
          );
          loadTags.set(relativePath, loadId);
          file.path.unshiftContainer("body", [
            t.variableDeclaration("const", [
              t.variableDeclarator(
                loadId,
                t.callExpression(loadTagFn, [
                  t.arrowFunctionExpression(
                    [],
                    t.callExpression(t.import(), [
                      t.stringLiteral(relativePath),
                    ]),
                  ),
                ]),
              ),
            ]),
          ]);
          tagIdentifier = loadId;
        }
      } else {
        tagIdentifier = importDefault(file, relativePath, tagName);
      }
    } else if (binding) {
      path.set("name", t.identifier(tagName));
      return dynamicTag(path);
    } else if (markoOpts.ignoreUnrecognizedTags) {
      return nativeTag(path);
    } else {
      throw path
        .get("name")
        .buildCodeFrameError(
          `Unable to find entry point for custom tag <${tagName}>.`,
        );
    }
  } else {
    tagIdentifier = name;
  }

  if (
    node.extra?.tagNameLoad &&
    markoOpts.output === "html" &&
    markoOpts.linkAssets
  ) {
    const { linkAssets } = markoOpts;
    const childFile = loadFileForTag(path);
    if (childFile) {
      const assetId = childFile.metadata.marko.id;
      const loadRelativePath = node.extra.relativePath;
      const loadTagName = name.value;
      let withAssetsMap = withAssetsByFile.get(file);
      linkAssets.onAsset("load", childFile.opts.filename, assetId);

      if (!withAssetsMap) {
        withAssetsByFile.set(file, (withAssetsMap = new Map()));
      }

      if (withAssetsMap.has(loadRelativePath)) {
        tagIdentifier = withAssetsMap.get(loadRelativePath);
      } else {
        const withAssetsFn = importNamed(
          file,
          "marko/src/runtime/helpers/with-entry.js",
          "withAssets",
          "marko_with_assets",
        );
        const withAssetsId = file.path.scope.generateUidIdentifier(
          `marko_with_assets_${loadTagName}`,
        );
        withAssetsMap.set(loadRelativePath, withAssetsId);
        file.path.unshiftContainer("body", [
          t.variableDeclaration("const", [
            t.variableDeclarator(
              withAssetsId,
              t.callExpression(withAssetsFn, [
                tagIdentifier,
                t.stringLiteral(assetId),
              ]),
            ),
          ]),
        ]);
        tagIdentifier = withAssetsId;
      }
    }
  }

  const foundAttrs = getAttrs(path);
  const customTagRenderCall = withPreviousLocation(
    t.expressionStatement(
      t.callExpression(
        importDefault(
          file,
          "marko/src/runtime/helpers/render-tag.js",
          "marko_tag",
        ),
        [
          tagIdentifier,
          // TODO: this could be left as null if we froze input mutations and used a default object in the runtime.
          t.isNullLiteral(foundAttrs) ? t.objectExpression([]) : foundAttrs,
          t.identifier("out"),
          file._componentDefIdentifier,
          key,
          ...buildEventHandlerArray(path),
        ],
      ),
    ),
    node,
  );

  if (isNullable) {
    let renderBodyIdentifier;
    const renderBodyProp =
      t.isObjectExpression(foundAttrs) &&
      foundAttrs.properties.find(
        (prop) => prop.key && prop.key.value === "renderBody",
      );

    if (renderBodyProp) {
      renderBodyIdentifier = path.scope.generateUidIdentifier("renderBody");
      path.insertBefore(
        t.variableDeclaration("const", [
          t.variableDeclarator(renderBodyIdentifier, renderBodyProp.value),
        ]),
      );

      renderBodyProp.value = renderBodyIdentifier;
    }

    path.replaceWith(
      t.ifStatement(
        name,
        customTagRenderCall,
        renderBodyIdentifier &&
          t.expressionStatement(
            t.callExpression(renderBodyIdentifier, [t.identifier("out")]),
          ),
      ),
    );
  } else {
    path.replaceWith(customTagRenderCall);
  }
}
