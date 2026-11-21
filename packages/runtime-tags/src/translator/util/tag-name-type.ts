import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTagDef,
  getTaglibLookup,
  getTagTemplate,
  isNativeTag,
  loadFileForImport,
  loadFileForTag,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";
import { distance } from "fastest-levenshtein";

import * as ClassHydration from "../visitors/tag/constants/class-hydration";
import * as TagNameType from "./constants/tag-name-type";
import {
  getKinds,
  getUnknownKinds,
  getValueKind,
  KIND_FALSY,
  KIND_NULLISH,
  KIND_SCALAR,
  KIND_STRING,
  KIND_TEMPLATE,
} from "./evaluate";
import { isAnalyzing } from "./get-compile-stage";
import { getTagName, getTagNameHint } from "./get-tag-name";
import { isCoreTag } from "./is-core-tag";
import { first, forEach } from "./optional";
import type { LoadImportConfig } from "./tag-import";

const kTagNameDynamic = Symbol("tag name dynamic");
declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    featureType?: "class" | "tags";
    /** Set by the Class API translator when Tags content resumes below here. */
    hydratesTags?: boolean;
  }
  // A tag's extra is the expression root its attributes merge into, so what
  // reads that root (a read, a section's branch expression) reads this.
  export interface NodeExtra {
    tagNameType?: TagNameType;
  }
  // Written by `analyzeTagNameType`, on the tag whose name it types.
  export interface MarkoTagExtra {
    /** The name may be falsy, which renders the body in its place. */
    tagNameNullable?: boolean;
    tagNameImported?: string;
    /** Every template the name may resolve to, when it can resolve to
     * nothing else and none is still analyzing. */
    tagNameTemplates?: t.ProgramExtra[];
    tagNameLoad?: LoadImportConfig;
  }
  export interface MarkoTagExtra {
    [kTagNameDynamic]?: boolean;
    tagNameUnresolved?: boolean;
    featureType?: ProgramExtra["featureType"];
  }
}

type TagNameType = TagNameType.Value;
export { TagNameType };

const TAG_NAME_IDENTIFIER_REG = /^[A-Z][a-zA-Z0-9_$]*$/;

// The declared binding a PascalCase string tag name refers to, if any. Only
// `getBinding` is used: `hasBinding` is also true for built-in globals.
export function getTagNameBinding(tag: t.NodePath<t.MarkoTag>) {
  const tagName = getTagName(tag);
  return tagName && TAG_NAME_IDENTIFIER_REG.test(tagName)
    ? tag.scope.getBinding(tagName)
    : undefined;
}

export default function analyzeTagNameType(tag: t.NodePath<t.MarkoTag>) {
  const extra = (tag.node.extra ??= {});

  if (extra.tagNameType === undefined) {
    const name = tag.get("name");
    let load: LoadImportConfig | undefined;
    if (isStaticNativeTag(tag)) {
      extra.tagNameType = TagNameType.NativeTag;
      extra.tagNameNullable = extra[kTagNameDynamic] = false;
    } else if (name.isStringLiteral()) {
      extra.tagNameType =
        name.node.value[0] === "@"
          ? TagNameType.AttributeTag
          : TagNameType.CustomTag;
      extra.tagNameNullable = extra[kTagNameDynamic] = false;
    } else if (name.isIdentifier()) {
      load = analyzeExpressionTagName(name, extra);
      extra[kTagNameDynamic] = !extra.tagNameImported;
    } else {
      analyzeExpressionTagName(name, extra);
      extra[kTagNameDynamic] = true;
    }

    if (
      !extra[kTagNameDynamic] &&
      extra.tagNameType === TagNameType.CustomTag &&
      !isCoreTag(tag)
    ) {
      const childFile = loadFileForTag(tag);
      if (
        getTagDef(tag)?.renderer ||
        childFile?.ast.program.extra!.featureType === "class"
      ) {
        extra.tagNameType = TagNameType.DynamicTag;
        extra[kTagNameDynamic] = true;
        extra.featureType = "class";
        // Client work of its own: Tags descendants resume through the boundary,
        // or a Class component hydrates on the input this template sends it.
        if (
          childFile?.ast.program.extra?.hydratesTags ||
          (childFile?.metadata.marko.classHydration === ClassHydration.Self &&
            (tag.node.attributes.length || tag.node.body.body.length))
        ) {
          getProgram().node.extra.isInteractive = true;
        }
      } else if (!childFile) {
        extra.tagNameType = TagNameType.DynamicTag;
        extra[kTagNameDynamic] = true;
        // A PascalCase name with a binding is a local tag reference, so only
        // the rest is unresolvable. `DynamicTag.analyze` reports it: at
        // translate the scope its hint reads is already rewritten, and the
        // error escapes analyze batching.
        extra.tagNameUnresolved = !getTagNameBinding(tag);
      } else if (childFile !== getFile() && isAnalyzing(childFile)) {
        // Closing a cross-file cycle: the child's analysis is incomplete, so
        // the runtime path renders it rather than composing its template.
        extra.tagNameType = TagNameType.DynamicTag;
        extra[kTagNameDynamic] = true;
      }
    }

    // A custom tag its load import names renders through the load path; one
    // that turned dynamic renders the import's `_load_template` instead.
    if (load && !extra[kTagNameDynamic]) extra.tagNameLoad = load;
  }

  return extra[kTagNameDynamic] ? TagNameType.DynamicTag : extra.tagNameType!;
}

/** A native element by its name alone: the tag lookup's verdict on a string, or
 * a template literal without expressions. Loads no template, so pre-analyze may ask. */
export function isStaticNativeTag(tag: t.NodePath<t.MarkoTag>) {
  const { name } = tag.node;
  return t.isStringLiteral(name)
    ? isNativeTag(tag)
    : t.isTemplateLiteral(name) && name.quasis.length === 1;
}

// Types an expression name from its value kind. Returns the load import a name
// resolving to one template names, if any.
function analyzeExpressionTagName(
  name: t.NodePath<t.Expression>,
  extra: t.MarkoTagExtra,
): LoadImportConfig | undefined {
  const kind = getValueKind(name.node, name);
  const kinds = getKinds(kind);
  // A falsy name renders the body in its place.
  const nullable = (extra.tagNameNullable = !!(
    kinds &
    (KIND_FALSY | KIND_NULLISH)
  ));
  // Any other primitive is no tag to render, so the rest decides the type,
  // where the template shows all the name may be.
  const rendered = getUnknownKinds(kind)
    ? 0
    : kinds & ~(KIND_FALSY | KIND_NULLISH | KIND_SCALAR);

  // DOM implementation requires non strings actually be a dynamic tag call.
  extra.tagNameType = TagNameType.DynamicTag;

  if (rendered === KIND_STRING) {
    extra.tagNameType = TagNameType.NativeTag;
  } else if (rendered === KIND_TEMPLATE) {
    const template = first(kind.templates!);
    let tagNameImported = template.tagImport;
    let tagNameTemplates: t.ProgramExtra[] | undefined = [];
    forEach(kind.templates, ({ tagImport }) => {
      if (tagImport !== tagNameImported) tagNameImported = undefined;
      if (tagNameTemplates) {
        const childFile = loadFileForImport(getFile(), tagImport!);
        const childExtra = childFile?.ast.program.extra;
        // A template still analyzing (this one, or a cycle) has no
        // reasons to consult yet, so the name resolves to nothing known.
        if (!childExtra || isAnalyzing(childFile!)) {
          tagNameTemplates = undefined;
        } else if (!tagNameTemplates.includes(childExtra)) {
          tagNameTemplates.push(childExtra);
        }
      }
    });
    extra.tagNameType = TagNameType.CustomTag;
    extra.tagNameTemplates = tagNameTemplates;
    // A name that may be falsy, or a number or `true`, stays dynamic.
    if (tagNameImported && !nullable && !(kinds & KIND_SCALAR)) {
      extra.tagNameImported = tagNameImported;
      return template.loadImport;
    }
  }
}

export function getTagRelativePath(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const file = getFile();
  let relativePath: string | undefined;

  if (t.isStringLiteral(node.name)) {
    const tagDef = getTagDef(tag);
    const template =
      (node.extra?.featureType === "class" && tagDef?.renderer) ||
      getTagTemplate(tag);
    relativePath = template && resolveRelativePath(file, template, tagDef);
  } else if (node.extra?.tagNameImported) {
    relativePath = node.extra.tagNameImported;
  }

  if (!relativePath) throw tagNotFoundError(tag);

  return relativePath;
}

// Tags from other frameworks (or older Marko versions) that deserve a curated
// pointer instead of a nearest-name suggestion.
const staticHint =
  "To declare module level JavaScript, prefix the statement with `static`.";
const knownWrongTags = new Map([
  [
    "slot",
    "To render content passed to this tag, use a [dynamic tag](https://markojs.com/docs/reference/language#dynamic-tags): `<${input.content}/>`.",
  ],
  [
    "state",
    "Reactive state is declared with the [`<let>` tag](https://markojs.com/docs/reference/core-tag#let): `<let/name=initialValue>`.",
  ],
  [
    "fragment",
    "Marko templates and tag bodies may have multiple root nodes; no fragment wrapper is needed.",
  ],
  ["async", staticHint],
  ["class", staticHint],
  ["declare", staticHint],
  ["enum", staticHint],
  ["function", staticHint],
  ["interface", staticHint],
  ["type", staticHint],
]);

/**
 * A known wrong tag that resolves to nothing, eg `interface P { id: number }`,
 * whose body lands in attribute position before tag resolution would run.
 */
export function isUnresolvedKnownWrongTag(tag: t.NodePath<t.MarkoTag>) {
  const tagName = getTagName(tag);
  return !!tagName && knownWrongTags.has(tagName) && !getTagDef(tag);
}

export function tagNotFoundError(tag: t.NodePath<t.MarkoTag>) {
  const tagName = getTagName(tag);
  if (tagName && tag.scope.getBinding(tagName)) {
    return tag
      .get("name")
      .buildCodeFrameError(
        `Local variables must be in a [dynamic tag](https://markojs.com/docs/reference/language#dynamic-tags) unless they are PascalCase. Use \`<\${${tagName}}/>\` or rename to \`${tagName.charAt(0).toUpperCase() + tagName.slice(1)}\`.`,
      );
  }
  let didYouMean = "";
  const knownWrongTagHint = tagName && knownWrongTags.get(tagName);
  const proseText = tagName && getProseText(tag);
  if (knownWrongTagHint) {
    didYouMean = ` ${knownWrongTagHint}`;
  } else if (proseText) {
    // A bare line of words parses as a tag; the author likely meant text.
    didYouMean = ` If this line is meant to be text, prefix it with \`--\` (e.g. \`-- ${proseText}\`) or wrap it in an element such as \`<p>${proseText}</p>\`.`;
  } else if (tagName) {
    didYouMean = getSimilarTagHint(tagName);
  }
  return tag
    .get("name")
    .buildCodeFrameError(
      `Unable to find entry point for [custom tag](https://markojs.com/docs/reference/custom-tag#relative-custom-tags) \`<${tagName ?? getTagNameHint(tag.node)}>\`.${didYouMean}`,
    );
}

// A concise-mode word tag with only boolean word-attributes and no var/params/
// body is likely stray prose; returns the reconstructed sentence, else undefined.
const wordReg = /^[A-Za-z]+$/;
function getProseText(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const tagName = getTagName(tag);
  if (
    !tagName ||
    !wordReg.test(tagName) ||
    node.var ||
    node.body.params.length ||
    node.body.body.length ||
    !node.attributes.length ||
    // An explicit `<Modal open/>` is a deliberate tag, not prose.
    !isConciseModeTag(node)
  ) {
    return;
  }
  return collectProseWords(node, tagName);
}

// HTML mode: `loc` starts on `<`, before the name. Concise mode: they align.
function isConciseModeTag(node: t.MarkoTag) {
  const tagLoc = node.loc;
  const nameLoc = node.name.loc;
  if (!tagLoc || !nameLoc) return false;
  return (
    tagLoc.start.line === nameLoc.start.line &&
    tagLoc.start.column === nameLoc.start.column
  );
}

function collectProseWords(node: t.MarkoTag, tagName: string) {
  let text = tagName;
  for (const attr of node.attributes) {
    if (
      attr.type !== "MarkoAttribute" ||
      attr.default ||
      !wordReg.test(attr.name) ||
      attr.value.type !== "BooleanLiteral" ||
      attr.value.value !== true
    ) {
      return;
    }
    text += " " + attr.name;
  }
  return text;
}

function getSimilarTagHint(tagName: string) {
  const lookup = getTaglibLookup(getFile());
  if (lookup.getTag(tagName)) return "";
  const lowerTagName = tagName.toLowerCase();
  let closestTag: string | undefined;
  let closestDistance = 4;
  for (const { name } of lookup.getTagsSorted()) {
    // Edit distance is at least the length difference.
    const lengthDelta = Math.abs(name.length - tagName.length);
    if (lengthDelta < closestDistance) {
      if (!lengthDelta && name.toLowerCase() === lowerTagName) {
        return ` Tag names are case-sensitive: did you mean \`<${name}>\`?`;
      }
      const nameDistance = distance(tagName, name);
      if (nameDistance < closestDistance) {
        closestTag = name;
        closestDistance = nameDistance;
      }
    }
  }
  return closestTag ? ` Did you mean \`<${closestTag}>\`?` : "";
}
