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
import { isAnalyzing } from "./get-compile-stage";
import { getTagName, getTagNameHint } from "./get-tag-name";
import { isCoreTag } from "./is-core-tag";
import { getImportFacts, type LoadImportConfig } from "./tag-import";

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
  // Written by `analyzeExpressionTagName`, on the tag whose name it types.
  export interface MarkoTagExtra {
    // Incomplete when `tagNameType` is `DynamicTag`, since that ends the
    // analysis early.
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

const MARKO_FILE_REG = /^<.*>$|\.marko$/;
// Matches `pre-analyze`, which rewrites a bound PascalCase tag to `<${Name}>`.
const TAG_NAME_IDENTIFIER_REG = /^[A-Z][a-zA-Z0-9_$]*$/;

export default function analyzeTagNameType(tag: t.NodePath<t.MarkoTag>) {
  const extra = (tag.node.extra ??= {});

  if (extra.tagNameType === undefined) {
    const name = tag.get("name");
    let load: LoadImportConfig | undefined;
    if (name.isStringLiteral()) {
      extra.tagNameType =
        name.node.value[0] === "@"
          ? TagNameType.AttributeTag
          : isNativeTag(tag)
            ? TagNameType.NativeTag
            : TagNameType.CustomTag;
      extra.tagNameNullable = extra[kTagNameDynamic] = false;
    } else if (name.isTemplateLiteral() && name.node.quasis.length === 1) {
      extra.tagNameType = TagNameType.NativeTag;
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
          getProgram().node.extra!.isInteractive = true;
        }
      } else if (!childFile) {
        extra.tagNameType = TagNameType.DynamicTag;
        extra[kTagNameDynamic] = true;
        // A PascalCase name with a binding is a local tag reference, so only
        // the rest is unresolvable. `DynamicTag.analyze` reports it: at
        // translate the scope its hint reads is already rewritten, and the
        // error escapes analyze batching.
        const tagName = (name.node as t.StringLiteral).value;
        extra.tagNameUnresolved = !(
          TAG_NAME_IDENTIFIER_REG.test(tagName) && tag.scope.hasBinding(tagName)
        );
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

// The load import a name resolving to one template names, if any.
function analyzeExpressionTagName(
  name: t.NodePath<t.Expression>,
  extra: t.MarkoTagExtra,
): LoadImportConfig | undefined {
  const pending = [name] as t.NodePath<t.Expression>[];
  const seen = new Set<t.Node>();
  let path: (typeof pending)[0] | undefined;
  let type: TagNameType | undefined;
  let nullable = false;
  let tagNameImported: string | false | undefined;
  let tagNameLoad: LoadImportConfig | undefined;
  let tagNameTemplates: t.ProgramExtra[] | undefined = [];

  while ((path = pending.pop()) && type !== TagNameType.DynamicTag) {
    // Following a `<const>` value can cycle (`<const/a=b><const/b=a>`); skip
    // nodes already visited so the traversal terminates instead of looping.
    if (seen.has(path.node)) continue;
    seen.add(path.node);

    if (path.isConditionalExpression()) {
      pending.push(path.get("consequent"));

      if (path.node.alternate) {
        pending.push(path.get("alternate"));
      }
    } else if (path.isLogicalExpression()) {
      if (path.node.operator === "&&") {
        nullable = true;
      } else {
        // `a || b` and `a ?? b` can both resolve to the left operand.
        pending.push(path.get("left"));
      }

      pending.push(path.get("right"));
    } else if (path.isAssignmentExpression()) {
      pending.push(path.get("right"));
    } else if (path.isBinaryExpression()) {
      type =
        path.node.operator !== "+" ||
        type === undefined ||
        type === TagNameType.NativeTag
          ? TagNameType.NativeTag
          : TagNameType.DynamicTag;
    } else if (path.isStringLiteral() || path.isTemplateLiteral()) {
      type =
        type === undefined || type === TagNameType.NativeTag
          ? TagNameType.NativeTag
          : TagNameType.DynamicTag;
    } else if (path.isNullLiteral()) {
      nullable = true;
    } else if (path.isIdentifier()) {
      if (path.node.name === "undefined") {
        nullable = true;
        continue;
      }

      const binding = path.scope.getBinding(path.node.name);

      if (!binding) {
        type = TagNameType.DynamicTag;
        continue;
      }

      if (binding.kind === "module") {
        const declPath = binding.path
          .parentPath as t.NodePath<t.ImportDeclaration>;
        const decl = declPath.node;
        if (
          MARKO_FILE_REG.test(decl.source.value) &&
          decl.specifiers.some((it) => t.isImportDefaultSpecifier(it))
        ) {
          const { tagImport, loadImport } = getImportFacts(declPath);
          const resolvedImport = tagImport!;
          if (tagNameTemplates) {
            const childFile = loadFileForImport(getFile(), resolvedImport);
            const childExtra = childFile?.ast.program.extra;
            // A template still analyzing (this one, or a cycle) has no
            // reasons to consult yet, so the name resolves to nothing known.
            if (!childExtra || isAnalyzing(childFile!)) {
              tagNameTemplates = undefined;
            } else if (!tagNameTemplates.includes(childExtra)) {
              tagNameTemplates.push(childExtra);
            }
          }
          if (type === undefined) {
            type = TagNameType.CustomTag;
            tagNameImported = resolvedImport;
            tagNameLoad = loadImport;
          } else if (type === TagNameType.NativeTag) {
            type = TagNameType.DynamicTag;
            tagNameImported = undefined;
          } else if (tagNameImported !== resolvedImport) {
            tagNameImported = undefined;
          }
        } else {
          type = TagNameType.DynamicTag;
        }

        continue;
      }

      const bindingTag = binding.path as t.NodePath<t.MarkoTag>;

      if (
        bindingTag.isMarkoTag() &&
        (binding.kind as typeof binding.kind & "local") === "local"
      ) {
        const bindingTagName = (bindingTag.get("name").node as t.StringLiteral)
          .value;

        if (bindingTagName === "const") {
          pending.push(
            (
              bindingTag.get("attributes")[0] as t.NodePath<t.MarkoAttribute>
            ).get("value"),
          );
          continue;
        }

        if (bindingTagName === "let") {
          // Deliberately dynamic: narrowing by every value assigned to a `<let>` is not worth it.
          type = TagNameType.DynamicTag;
          continue;
        }
      }

      // Any other tag variable (a `<define>`'s, a child's) may name a component.
      type = TagNameType.DynamicTag;
    } else {
      type = TagNameType.DynamicTag;
    }
  }

  // DOM implementation requires non strings actually be a dynamic tag call.
  extra.tagNameType = type ?? TagNameType.DynamicTag;
  extra.tagNameNullable = nullable;

  if (type === TagNameType.CustomTag) {
    extra.tagNameTemplates = tagNameTemplates;
    // A name that may be nullish renders the body in its place, so it stays dynamic.
    if (tagNameImported && !nullable) {
      extra.tagNameImported = tagNameImported;
      return tagNameLoad;
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
  if (tagName && tag.scope.hasBinding(tagName)) {
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
  for (const name in (lookup as any).merged.tags) {
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
