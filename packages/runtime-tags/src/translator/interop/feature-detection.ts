import type { types as t } from "@marko/compiler";
import {
  getFile,
  getTagDef,
  getTaglibLookup,
} from "@marko/compiler/babel-utils";

import runtimeInfo from "../util/runtime-info";
import { buildAggregateError } from "./build-aggregate-error";

const enum FeatureType {
  Class = "class",
  Tags = "tags",
}

type Feature = {
  name: string;
  path: t.NodePath;
  type: FeatureType;
};
type FeatureState = {
  feature?: Feature;
};

const DEFAULT_FEATURE_TYPE = FeatureType.Class;

export function isTagsAPI(file = getFile()) {
  const program = file.path;
  let featureType = program.node.extra?.featureType;

  if (!featureType) {
    const tagsDir = getTagsDir(file.opts.filename);
    const programExtra = (program.node.extra ??= {});

    if (tagsDir) {
      featureType = programExtra.featureType = getTaglibLookup(
        file,
      ).manualTagsDirs.has(tagsDir)
        ? FeatureType.Class
        : FeatureType.Tags;
    } else {
      const state = {} as FeatureState;
      scanBody(state, program.get("body"));
      featureType = programExtra.featureType =
        state.feature?.type || DEFAULT_FEATURE_TYPE;
    }
  }

  return featureType === FeatureType.Tags;
}

const PATH_SEPARATOR_REGEX = /\/|\\/;
const TAGS_LENGTH = "tags".length;
const COMPONENTS_LENGTH = "components".length;
function getTagsDir(filename: string) {
  const pathSeparator = PATH_SEPARATOR_REGEX.exec(filename)?.[0];
  if (pathSeparator) {
    let previousIndex = filename.length - 1;
    while (previousIndex > 0) {
      const index = filename.lastIndexOf(pathSeparator, previousIndex);
      switch (previousIndex - index) {
        case TAGS_LENGTH: {
          if (filename.startsWith("tags", index + 1)) {
            return filename.slice(0, index + 5);
          }
          break;
        }
        case COMPONENTS_LENGTH: {
          if (filename.startsWith("components", index + 1)) {
            return false;
          }
          break;
        }
      }
      previousIndex = index - 1;
    }
  }
  return false;
}

function scanBody(
  state: FeatureState,
  body:
    | undefined
    | t.NodePath<
        | t.Program["body"][number]
        | t.MarkoTagBody["body"][number]
        | t.MarkoTag["attributeTags"][number]
      >[],
) {
  if (body?.length) {
    for (const child of body) {
      switch (child.type) {
        case "MarkoTag":
          scanTag(state, child as t.NodePath<t.MarkoTag>);
          break;
        case "MarkoComment":
          if (/^\s*use tags\s*$/.test((child.node as t.MarkoComment).value)) {
            addFeature(state, FeatureType.Tags, "<!-- use tags -->", child);
          }
          break;
        case "MarkoScriptlet":
          if (!(child.node as t.MarkoScriptlet).static) {
            addFeature(state, FeatureType.Class, "Scriptlet", child);
          }
          break;
        case "MarkoClass":
          addFeature(
            state,
            FeatureType.Class,
            "Class block",
            (child as t.NodePath<t.MarkoClass>).get("body"),
          );
          break;
      }
    }
  }
}

function scanTag(state: FeatureState, tag: t.NodePath<t.MarkoTag>) {
  if (tag.node.var) {
    addFeature(
      state,
      FeatureType.Tags,
      "Tag variable",
      tag.get("var") as t.NodePath<t.LVal>,
    );
  }

  for (const attr of tag.get("attributes")) {
    if (attr.isMarkoAttribute()) {
      if (attr.node.arguments?.length) {
        addFeature(
          state,
          FeatureType.Class,
          "Attribute arguments",
          (attr.get("arguments") as t.NodePath<t.Expression>[])[0],
        );
        break;
      } else if (attr.node.modifier) {
        addFeature(state, FeatureType.Class, "Attribute modifier", attr);
        break;
      } else if (attr.node.bound) {
        addFeature(state, FeatureType.Tags, "Bound attribute", attr);
        break;
      }
    }
  }

  const tagDef = getTagDef(tag);
  if (tagDef?.taglibId === runtimeInfo.taglibId) {
    const feature = getFeatureTypeFromCoreTagName(tagDef.name);
    if (feature) {
      addFeature(state, feature, `<${tagDef.name}> tag`, tag.get("name"));
    }
  }

  scanBody(state, tag.get("body").get("body"));
  scanBody(state, tag.get("attributeTags"));
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
    case "const":
    case "debug":
    case "define":
    case "id":
    case "let":
    case "lifecycle":
    case "log":
    case "return":
    case "try":
      return FeatureType.Tags;
    default:
      return undefined;
  }
}

function addFeature(
  state: FeatureState,
  type: Feature["type"],
  name: Feature["name"],
  path: Feature["path"],
) {
  if (state.feature) {
    if (state.feature.type !== type) {
      throw buildAggregateError(
        path.hub.file,
        'Cannot mix "tags api" and "class api" features',
        [state.feature.name, state.feature.path],
        [name, path],
      );
    }
  } else {
    state.feature = {
      name,
      path,
      type,
    };
  }
}
