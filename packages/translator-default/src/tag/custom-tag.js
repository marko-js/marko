import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  getTagDef,
  importDefault,
  loadFileForTag,
  resolveRelativePath,
} from "@marko/babel-utils";
import { buildEventHandlerArray, getAttrs } from "./util";
import nativeTag from "./native-tag";
import dynamicTag from "./dynamic-tag";
import withPreviousLocation from "../util/with-previous-location";

export default function (path, isNullable) {
  const {
    hub: { file },
    node,
  } = path;
  const { markoOpts } = file;
  const { name, key } = node;

  assertNoArgs(path);

  let tagIdentifier;

  if (t.isStringLiteral(name)) {
    const tagName = name.value;
    let relativePath = node.extra && node.extra.relativePath;

    if (!relativePath) {
      const tagDef = getTagDef(path);
      if (
        tagDef &&
        tagDef.taglibId === "marko-default-core" &&
        tagDef.renderer
      ) {
        // Normally new tags should not be added in the translate stage.
        // We make an exception here for core tags, init-components & _preserve being the primary culprits.
        // TODO: in the future refactor so this is not needed.
        relativePath = resolveRelativePath(file, tagDef.renderer);
      }
    }

    let binding = path.scope.getBinding(tagName);
    if (binding && !binding.identifier.loc) binding = null;

    const childFile = loadFileForTag(path);
    const childProgram = childFile?.ast.program;

    if (childProgram?.extra?.___featureType === "tags") {
      path.set("name", importDefault(file, relativePath, path.node.name.value));
      return dynamicTag(path);
    } else if (relativePath) {
      if (binding) {
        // TODO: implement auto migration for conflicts here
        // and log below warning
        // console.warn(
        //   path.buildCodeFrameError(
        //     `The <${tagName}> tag has been resolved from the filesystem, however a local variable with the same name exists. In the next major version of Marko the local variable will tag precedence.`
        //   )
        // );
      }

      tagIdentifier = importDefault(file, relativePath, tagName);
    } else if (binding) {
      path.set("name", t.identifier(tagName));
      return dynamicTag(path);
    } else if (markoOpts.ignoreUnrecognizedTags) {
      return nativeTag(path);
    } else {
      throw path
        .get("name")
        .buildCodeFrameError(
          `Unable to find entry point for custom tag <${tagName}>.`
        );
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
          "marko/src/runtime/helpers/render-tag.js",
          "marko_tag"
        ),
        [
          tagIdentifier,
          // TODO: this could be left as null if we froze input mutations and used a default object in the runtime.
          t.isNullLiteral(foundAttrs) ? t.objectExpression([]) : foundAttrs,
          t.identifier("out"),
          file._componentDefIdentifier,
          key,
          ...buildEventHandlerArray(path),
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
        (prop) => prop.key && prop.key.value === "renderBody"
      );

    if (renderBodyProp) {
      renderBodyIdentifier = path.scope.generateUidIdentifier("renderBody");
      path.insertBefore(
        t.variableDeclaration("const", [
          t.variableDeclarator(renderBodyIdentifier, renderBodyProp.value),
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
