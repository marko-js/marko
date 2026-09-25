import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTagDef,
  isNativeTag,
  loadFileForImport,
  loadFileForTag,
} from "@marko/compiler/babel-utils";

import {
  getImportFacts,
  type LoadImportConfig,
} from "../visitors/import-declaration";
import * as TagNameType from "./constants/tag-name-type";
import { isAnalyzing } from "./get-compile-stage";
import { isCoreTag } from "./is-core-tag";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    featureType?: "class" | "tags";
    /** Set by the Class API translator when Tags content resumes below here. */
    hydratesTags?: boolean;
  }
  // Written by `analyzeExpressionTagName`, on the tag whose name it types.
  export interface NodeExtra {
    tagNameType?: TagNameType;
    // Kept unread for a planned nullable tag name optimization; incomplete when
    // `tagNameType` is `DynamicTag`, since that ends the analysis early.
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

const MARKO_FILE_REG = /^<.*>$|\.marko$/;
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

function analyzeExpressionTagName(
  name: t.NodePath<t.Expression>,
  extra: t.NodeExtra,
) {
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
      extra.tagNameLoad = tagNameLoad;
    }
  }
}
