import { types as t } from "@marko/babel-types";
import { assertNoArgs, getTagDef } from "@marko/babel-utils";
import { getAttrs, buildEventHandlerArray } from "./util";
import nativeTag from "./native-tag";
import withPreviousLocation from "../util/with-previous-location";

// TODO: support transform and other entries.
const TAG_FILE_ENTRIES = ["template", "renderer"];
const TAG_IDENTIFIER_LOOKUPS = new WeakMap();

export default function(path) {
  const { hub, node } = path;
  const { meta, options } = hub;
  const tagDef = getTagDef(path);
  const {
    name: { value: name },
    key
  } = node;
  const relativePath = tagDef && resolveRelativePath(hub, tagDef);

  if (!relativePath) {
    if (options.ignoreUnrecognizedTags) {
      return nativeTag(path);
    }

    throw path
      .get("name")
      .buildCodeFrameError(
        `Unable to find entry point for custom tag <${name}>.`
      );
  }

  assertNoArgs(path);

  let tagIdentifierLookup = TAG_IDENTIFIER_LOOKUPS.get(hub);
  if (!tagIdentifierLookup) {
    TAG_IDENTIFIER_LOOKUPS.set(hub, (tagIdentifierLookup = {}));
  }

  const tagImportIdentifier = hub.importDefault(path, relativePath, name);
  const tagIdentifier =
    tagIdentifierLookup[name] ||
    path.scope.generateUidIdentifier(`${name}_tag`);

  if (!meta.tags.includes(relativePath)) {
    tagIdentifierLookup[name] = tagIdentifier;
    hub.addStaticNode(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          tagIdentifier,
          t.callExpression(
            hub.importDefault(
              path,
              "marko/src/runtime/helpers/load-tag",
              "marko_load_tag"
            ),
            [tagImportIdentifier]
          )
        )
      ])
    );

    meta.tags.push(relativePath);
  }

  const foundAttrs = getAttrs(path);
  const customTagRenderCall = t.expressionStatement(
    t.callExpression(tagIdentifier, [
      // TODO: this could be left as null if we froze input mutations and used a default object in the runtime.
      t.isNullLiteral(foundAttrs) ? t.objectExpression([]) : foundAttrs,
      t.identifier("out"),
      hub._componentDefIdentifier,
      key,
      ...buildEventHandlerArray(path)
    ])
  );

  path.replaceWith(withPreviousLocation(customTagRenderCall, node));
}

function resolveRelativePath(hub, tagDef) {
  for (const entry of TAG_FILE_ENTRIES) {
    if (!tagDef[entry]) continue;
    return hub.resolveRelativePath(tagDef[entry]);
  }
}
