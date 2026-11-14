import type { types as t } from "@marko/compiler";
import {
  getFile,
  getTagDefForTagName,
  getTaglibLookup,
  hasMacro,
  isTransparentTag,
} from "@marko/compiler/babel-utils";

import runtimeInfo from "../util/runtime-info";
import { buildAggregateError } from "./build-aggregate-error";
import * as FeatureType from "./constants/feature-type";

type FeatureType = FeatureType.Value;

type Feature = {
  name: string;
  node: t.Node;
  type: FeatureType;
};
type FeatureState = {
  file: t.BabelFile;
  feature?: Feature;
};

export function isTagsAPI(file = getFile()) {
  const program = file.path;
  const programExtra = (program.node.extra ??= {});
  let { featureType } = programExtra;

  if (!featureType) {
    const lookup = getTaglibLookup(file);
    const tagsDir = getTagsDir(lookup, file.opts.filename);
    const state: FeatureState = { file };
    if (tagsDir && !lookup.manualTagsDirs?.has(tagsDir)) {
      addFeature(
        state,
        FeatureType.Tags,
        "Template file within a tags directory",
        program.node,
      );
    }

    scanBody(state, program.node.body, undefined);
    featureType =
      file.metadata.marko.api =
      programExtra.featureType =
        state.feature?.type ||
        (lookup.exclusiveTagDiscoveryDirs === "tags"
          ? FeatureType.Tags
          : FeatureType.Class);
  }

  return featureType === FeatureType.Tags;
}

// The nearest discovery dir containing the file, if it is a `tags` dir. The
// finder already discovered these bounded at the package root, so a package
// itself named `tags` doesn't flag every template under it — no fs work here.
function getTagsDir(
  lookup: ReturnType<typeof getTaglibLookup>,
  filename: string,
) {
  let nearest: string | undefined;
  for (const dir of lookup.discoveryDirs || []) {
    if (
      filename.startsWith(dir) &&
      (filename[dir.length] === "/" || filename[dir.length] === "\\") &&
      (!nearest || dir.length > nearest.length)
    ) {
      nearest = dir;
    }
  }
  return !!nearest && /[/\\]tags$/.test(nearest) && nearest;
}

/** Scans `body`, in the tag whose fully resolved name is `parentName`. */
function scanBody(
  state: FeatureState,
  body: (
    | t.Program["body"][number]
    | t.MarkoTagBody["body"][number]
    | t.MarkoTag["attributeTags"][number]
  )[],
  parentName: string | undefined,
) {
  for (const child of body) {
    switch (child.type) {
      case "MarkoTag":
        scanTag(state, child, parentName);
        break;
      case "MarkoComment":
        if (/^\s*use tags\s*$/.test(child.value)) {
          addFeature(state, FeatureType.Tags, "<!-- use tags -->", child);
        } else if (/^\s*use class\s*$/.test(child.value)) {
          addFeature(state, FeatureType.Class, "<!-- use class -->", child);
        }
        break;
      case "MarkoScriptlet":
        if (!child.static) {
          addFeature(state, FeatureType.Class, "Scriptlet", child);
        }
        break;
      case "MarkoClass":
        addFeature(state, FeatureType.Class, "Class block", child.body);
        break;
    }
  }
}

function scanTag(
  state: FeatureState,
  tag: t.MarkoTag,
  parentName: string | undefined,
) {
  if (tag.var) {
    addFeature(state, FeatureType.Tags, "Tag variable", tag.var);
  }

  const { name } = tag;
  // As `getFullyResolvedTagName` gives it (`*` for a dynamic tag).
  const fullName =
    name.type !== "StringLiteral"
      ? "*"
      : name.value[0] === "@"
        ? (parentName ? parentName + ":" : "") + name.value.slice(1)
        : name.value;
  const tagDef = getNodeTagDef(state.file, tag, fullName);
  if (tagDef) {
    if (tagDef.name === "style") {
      if (
        /^style(?:(?:\.[^.\s\\/:*?"<>|({]+)+)?\s*\{/.test(tag.rawValue || "")
      ) {
        addFeature(state, FeatureType.Class, `style block`, tag.name);
      }
    } else if (tagDef.taglibId === runtimeInfo.taglibId) {
      const feature = getFeatureTypeFromCoreTagName(tagDef.name);
      if (feature) {
        addFeature(state, feature, `<${tagDef.name}> tag`, tag.name);
      }
    }
  }

  if (!tagDef?.parseOptions?.rawOpenTag) {
    for (const attr of tag.attributes) {
      if (attr.type === "MarkoAttribute") {
        if (attr.arguments?.length) {
          addFeature(
            state,
            FeatureType.Class,
            "Attribute arguments",
            attr.arguments[0],
          );
          break;
        } else if (attr.bound) {
          addFeature(state, FeatureType.Tags, "Bound attribute", attr);
          break;
        }
      }
    }
  }

  // `isTransparentTag` reads only the node.
  const childParentName = isTransparentTag({
    node: tag,
  } as t.NodePath<t.MarkoTag>)
    ? parentName
    : fullName;
  scanBody(state, tag.body.body, childParentName);
  scanBody(state, tag.attributeTags, childParentName);
}

// What `getTagDef` gives (and caches on the node), from the node and its
// fully resolved name, since the scan builds no NodePath.
function getNodeTagDef(file: t.BabelFile, tag: t.MarkoTag, fullName: string) {
  if (tag.tagDef === undefined) {
    const { name } = tag;
    tag.tagDef =
      name.type !== "StringLiteral" || hasMacro(file.path, name.value)
        ? null
        : getTagDefForTagName(file, fullName) || null;
  }
  return tag.tagDef;
}

function getFeatureTypeFromCoreTagName(
  tagName: string,
): FeatureType | undefined {
  switch (tagName) {
    case "await-reorderer":
    case "class":
    case "include-html":
    case "include-text":
    case "init-components":
    case "macro":
    case "module-code":
    case "while":
      return FeatureType.Class;
    case "attrs":
    case "const":
    case "debug":
    case "define":
    case "effect":
    case "id":
    case "let":
    case "lifecycle":
    case "log":
    case "return":
    case "show":
    case "try":
      return FeatureType.Tags;
    default:
      // `<html-script>`/`<html-style>` fall through on purpose: they are being
      // backported to Marko 5, so they identify neither API.
      return undefined;
  }
}

function addFeature(
  state: FeatureState,
  type: Feature["type"],
  name: Feature["name"],
  node: t.Node,
) {
  if (state.feature) {
    if (state.feature.type !== type) {
      throw buildAggregateError(
        state.file,
        "Cannot mix Tags API and Class API features in the same file",
        [state.feature.name, state.feature.node],
        [name, node],
      );
    }
  } else {
    state.feature = {
      name,
      node,
      type,
    };
  }
}
