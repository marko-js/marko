import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTagDef,
  isNativeTag,
  loadFileForTag,
} from "@marko/compiler/babel-utils";

import type { LoadImportConfig } from "../visitors/import-declaration";
import * as TagNameType from "./constants/tag-name-type";
import * as ValueKind from "./constants/value-kind";
import {
  getPossibleValues,
  getValueKinds,
  type PossibleValues,
  resolvePossibleValues,
} from "./evaluate";
import { isAnalyzing } from "./get-compile-stage";
import { isCoreTag } from "./is-core-tag";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    featureType?: "class" | "tags";
    /** Set by the Class API translator when Tags content resumes below here. */
    hydratesTags?: boolean;
  }
  export interface NodeExtra {
    tagNameType?: TagNameType;
    /** What an expression name may be. */
    tagNameValues?: PossibleValues;
    // Kept unread for a planned nullable tag name optimization.
    tagNameNullable?: boolean;
    tagNameImported?: string;
    /** Every template the name may resolve to, when it can resolve to
     * nothing else and none is still analyzing. */
    tagNameTemplates?: t.ProgramExtra[];
    tagNameLoad?: LoadImportConfig;
  }
  export interface MarkoTagExtra {
    tagNameDynamic?: boolean;
    tagNameUnresolved?: boolean;
    featureType?: ProgramExtra["featureType"];
  }
}

type TagNameType = TagNameType.Value;
export { TagNameType };

const TRUTHY_TEXT = ValueKind.NonEmptyString | ValueKind.NonZero;
// Matches `pre-analyze`, which rewrites a bound PascalCase tag to `<${Name}>`.
const TAG_NAME_IDENTIFIER_REG = /^[A-Z][a-zA-Z0-9_$]*$/;

export default function analyzeTagNameType(
  tag: t.NodePath<t.MarkoTag>,
  allowDynamic?: boolean,
) {
  const extra = (tag.node.extra ??= {});

  if (extra.tagNameType === undefined) {
    const name = tag.get("name");
    if (name.isStringLiteral()) {
      extra.tagNameType =
        name.node.value[0] === "@"
          ? TagNameType.AttributeTag
          : isNativeTag(tag)
            ? TagNameType.NativeTag
            : TagNameType.CustomTag;
      extra.tagNameNullable = extra.tagNameDynamic = false;
    } else if (name.isTemplateLiteral() && name.node.quasis.length === 1) {
      extra.tagNameType = TagNameType.NativeTag;
      extra.tagNameNullable = extra.tagNameDynamic = false;
    } else if (name.isIdentifier()) {
      analyzeExpressionTagName(name, extra);
      extra.tagNameDynamic = !extra.tagNameImported;
    } else {
      analyzeExpressionTagName(name, extra);
      extra.tagNameDynamic = true;
    }

    if (
      !extra.tagNameDynamic &&
      extra.tagNameType === TagNameType.CustomTag &&
      !isCoreTag(tag)
    ) {
      const childFile = loadFileForTag(tag);
      if (
        getTagDef(tag)?.renderer ||
        childFile?.ast.program.extra!.featureType === "class"
      ) {
        extra.tagNameType = TagNameType.DynamicTag;
        extra.tagNameDynamic = true;
        extra.featureType = "class";
        // The interop rebuilds this boundary before its Tags descendants can
        // resume, which is client work of this template's own.
        if (childFile?.ast.program.extra?.hydratesTags) {
          getProgram().node.extra!.isInteractive = true;
        }
      } else if (!childFile) {
        extra.tagNameType = TagNameType.DynamicTag;
        extra.tagNameDynamic = true;
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
        extra.tagNameDynamic = true;
      }
    }
  }

  return !allowDynamic && extra.tagNameDynamic
    ? TagNameType.DynamicTag
    : extra.tagNameType!;
}

// Whether a tag named by these values may render a component, which receives
// its body as a value, rather than a native tag or the body itself.
export function mayNameComponent(values: PossibleValues) {
  return !!(
    getValueKinds(resolvePossibleValues(values)) &
    (ValueKind.Function | ValueKind.Object)
  );
}

function analyzeExpressionTagName(
  name: t.NodePath<t.Expression>,
  extra: t.NodeExtra,
) {
  const values = (extra.tagNameValues = getPossibleValues(name));
  const { kinds, bindings, imports } = values;
  const text = kinds & TRUTHY_TEXT;
  const nullable = !!(getValueKinds(values) & ValueKind.Falsy);
  let templates: t.ProgramExtra[] | undefined = [];
  let imported: string | false | undefined;
  extra.tagNameNullable = nullable;

  // DOM implementation requires non strings actually be a dynamic tag call.
  if (
    kinds & ~(TRUTHY_TEXT | ValueKind.Falsy) ||
    bindings ||
    (text && imports) ||
    !(text || imports)
  ) {
    extra.tagNameType = TagNameType.DynamicTag;
    return;
  }

  if (!imports) {
    extra.tagNameType = TagNameType.NativeTag;
    return;
  }

  for (const { from, name, template } of imports) {
    const { tagImport } = from;
    if (!tagImport || name !== "default") {
      extra.tagNameType = TagNameType.DynamicTag;
      return;
    }
    if (!template) {
      templates = undefined;
    } else if (templates && !templates.includes(template)) {
      templates.push(template);
    }
    imported =
      imported === undefined || imported === tagImport ? tagImport : false;
  }

  extra.tagNameType = TagNameType.CustomTag;
  extra.tagNameTemplates = templates;
  // A name that may be nullish renders the body in its place, so it stays dynamic.
  if (imported && !nullable) {
    extra.tagNameImported = imported;
    extra.tagNameLoad = imports[0].from.loadImport;
  }
}
