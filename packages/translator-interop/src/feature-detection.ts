import { getTagDef, isDynamicTag } from "@marko/babel-utils";
import type { types as t } from "@marko/compiler";
import { taglibs as taglibs5 } from "@marko/translator-default";
import { taglibs as taglibs6 } from "@marko/translator-tags";
import { buildAggregateError } from "./build-aggregate-error";

const enum FEATURE_TYPE {
  CLASS = "class",
  TAGS = "tags",
}

type Feature = {
  name: string;
  path: t.NodePath;
  type: FEATURE_TYPE;
};
type FeatureState = {
  feature?: Feature;
};

const DEFAULT_FEATURE_TYPE = FEATURE_TYPE.CLASS;

export function isTagsAPI(path: t.NodePath) {
  const program = path.hub.file.path;
  let featureType = program.node.extra?.___featureType;
  if (!featureType) {
    const state = {} as FeatureState;
    program.node.extra ??= {};
    program.traverse(featureDetectionVisitor, state);
    featureType = program.node.extra.___featureType =
      state.feature?.type || DEFAULT_FEATURE_TYPE;
  }
  return featureType === FEATURE_TYPE.TAGS;
}

const featureDetectionVisitor = {
  MarkoComment(comment, state) {
    if (/^\s*use tags\s*$/.test(comment.node.value)) {
      addFeature(state, FEATURE_TYPE.TAGS, "<!-- use tags -->", comment);
    }
  },
  MarkoScriptlet(scriptlet, state) {
    if (!scriptlet.node.static) {
      addFeature(state, FEATURE_TYPE.CLASS, "Scriptlet", scriptlet);
    }
  },
  MarkoClass(markoClass, state) {
    addFeature(
      state,
      FEATURE_TYPE.CLASS,
      "Class block",
      markoClass.get("body"),
    );
  },
  ReferencedIdentifier(ref: t.NodePath<t.Identifier>, state: FeatureState) {
    const name = ref.node.name;

    if (
      (name === "component" || name === "out") &&
      !ref.scope.hasBinding(name)
    ) {
      addFeature(state, FEATURE_TYPE.CLASS, `${name} template global`, ref);
    }
  },
  MarkoTag(tag, state) {
    if (tag.node.var) {
      addFeature(
        state,
        FEATURE_TYPE.TAGS,
        "Tag variable",
        tag.get("var") as t.NodePath<t.LVal>,
      );
    }

    for (const attr of tag.get("attributes")) {
      if (attr.isMarkoAttribute()) {
        if (attr.node.arguments?.length) {
          addFeature(
            state,
            FEATURE_TYPE.CLASS,
            "Attribute arguments",
            (attr.get("arguments") as t.NodePath<t.Expression>[])[0],
          );
          break;
        } else if (attr.node.modifier) {
          addFeature(state, FEATURE_TYPE.CLASS, "Attribute modifier", attr);
          break;
        } else if (attr.node.bound) {
          addFeature(state, FEATURE_TYPE.TAGS, "Bound attribute", attr);
          break;
        } else {
          switch (attr.node.name) {
            case "key":
            case "no-update":
            case "no-update-if":
            case "no-update-body-if":
              addFeature(
                state,
                FEATURE_TYPE.CLASS,
                `"${attr.node.name}" attribute`,
                attr,
              );
              break;
          }
        }
      }
    }

    const tagDef = getTagDef(tag);

    if (tagDef) {
      const feature = getFeatureByTagName(tagDef.name);
      if (feature) {
        addFeature(state, feature, `<${tagDef.name}> tag`, tag.get("name"));
      }
    } else if (isDynamicTag(tag) && tag.node.arguments?.length) {
      addFeature(state, FEATURE_TYPE.CLASS, "Dynamic tag arguments", tag);
    }
  },
} as t.Visitor<FeatureState>;

const getFeatureByTagName = (() => {
  const taglib5UniqueTags = new Set(
    (taglibs5 as typeof taglibs6).flatMap((taglib) =>
      Object.keys(taglib[1]).map((key) => /^<(.*)>$/.exec(key)?.[1]),
    ),
  ) as Set<string | undefined>;
  const taglib6UniqueTags = new Set(
    taglibs6.flatMap((taglib) =>
      Object.keys(taglib[1]).map((key) => /^<(.*)>$/.exec(key)?.[1]),
    ),
  ) as Set<string | undefined>;

  for (const tagName of taglib5UniqueTags) {
    if (taglib6UniqueTags.has(tagName)) {
      taglib5UniqueTags.delete(tagName);
      taglib6UniqueTags.delete(tagName);
    }
  }

  return (tagName: string) => {
    if (taglib5UniqueTags.has(tagName)) return FEATURE_TYPE.CLASS;
    if (taglib6UniqueTags.has(tagName)) return FEATURE_TYPE.TAGS;
  };
})();

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
