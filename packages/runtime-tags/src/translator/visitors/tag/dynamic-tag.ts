import { types as t } from "@marko/compiler";
import {
  assertAttributesOrArgs,
  getFile,
  getProgram,
  getTagTemplate,
  importDefault,
  importNamed,
  loadFileForTag,
} from "@marko/compiler/babel-utils";

import { isEventHandler } from "../../../common/helpers";
import { ReservedId } from "../../../common/types";
import {
  type Binding,
  BindingType,
  createBinding,
  reserveId,
} from "../../util/bindings";
import { setTagContentDerives } from "../../util/content-derives";
import {
  generateUidIdentifier,
  getUnusedParamIdentifier,
} from "../../util/generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
} from "../../util/get-accessor-enums";
import { getTagNameHint } from "../../util/get-tag-name";
import { isEventOrChangeHandler } from "../../util/is-event-or-change-handler";
import {
  knownTagAnalyze,
  knownTagTranslateDOM,
  knownTagTranslateHTML,
  nextIdSite,
} from "../../util/known-tag";
import { isOptimize, isOutputHTML, isPatch } from "../../util/marko-config";
import { analyzeAttributeTags } from "../../util/nested-attribute-tags";
import { concat, type Opt } from "../../util/optional";
import {
  keepsSeededMarker,
  linkHolePatcher,
  writesPatchHole,
  onReasonsSettled,
} from "../../util/patch/decisions";
import {
  getExprRootGroupArgs,
  getRendererGroupArgs,
} from "../../util/patch/writers";
import { addAlwaysReason, addReasonExprs } from "../../util/reasons";
import {
  getAllTagReferenceNodes,
  isTagVarUsed,
  mergeDynamicTagReferences,
  trackParamsReferences,
  trackVarReferences,
  getReferencedBindings,
} from "../../util/references";
import {
  absentArg,
  callRuntime,
  getCompatRuntimeFile,
  importRuntimeFeature,
  linkRuntimeFeature,
  registerRuntimeValue,
} from "../../util/runtime";
import {
  getScopeAccessor,
  getScopeAccessorLiteral,
  getScopeOffsetAccessorLiteral,
} from "../../util/scope-accessor";
import {
  createScopeReadExpression,
  getScopeExpression,
} from "../../util/scope-read";
import { getSectionRendererIdentifier } from "../../util/section-renderer";
import {
  ensureSection,
  ensureBodySection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  removeDroppedContent,
  type Section,
  StructureKind,
} from "../../util/sections";
import { namesRegisteredTemplates } from "../../util/shell";
import {
  addStatement,
  addValue,
  getResumeRegisterId,
  getSignal,
  initValue,
  type Signal,
  writeHTMLResumeStatements,
} from "../../util/signals";
import { ensureSlot } from "../../util/slots";
import { createOutputState } from "../../util/state";
import * as structure from "../../util/structure";
import { isControllableAttr } from "../../util/tag-facts";
import {
  getTagRelativePath,
  TagNameType,
  tagNotFoundError,
} from "../../util/tag-name-type";
import { toMemberExpression } from "../../util/to-property-name";
import {
  getTranslatedBodyContentProperty,
  propsToExpression,
  translateAttrs,
} from "../../util/translate-attrs";
import translateVar, {
  buildVarChange,
  isTagVarAssigned,
} from "../../util/translate-var";
import type { TemplateVisitor } from "../../util/visitors";
import { getWriteGuard, getWriteReason } from "../../util/write-guard";
import * as writer from "../../util/writer";
import * as ClassHydration from "./constants/class-hydration";

// Keys of the statements a program adds once: a Class-API interop registration
// is keyed by its shared renderer, however many tags reference it.
const [getAddedStatementKeys] = createOutputState(() => new Set<string>());
// This output renders a Class API tag, so it loads the compat runtime first.
export const [needsCompat, setNeedsCompat] = createOutputState(() => false);
const [getCompatBoundaryCalls] = createOutputState<
  Map<string, t.CallExpression>
>(() => new Map());
function pushStatementOnce(key: string, statement: t.Statement) {
  const keys = getAddedStatementKeys();
  if (keys.has(key)) return false;
  keys.add(key);
  getProgram().node.body.push(statement);
  return true;
}

type ClassHydration = ClassHydration.Value;

declare module "@marko/compiler" {
  export interface MarkoMeta {
    classHydration?: ClassHydration;
    hasComponentBrowser?: boolean;
  }
}

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    defineBodySection?: Section;
  }
}

export default {
  analyze: {
    enter(tag) {
      if (tag.node.extra?.tagNameUnresolved) throw tagNotFoundError(tag);

      assertAttributesOrArgs(tag);
      const { node } = tag;
      // A class API template fails its own patch compile (`isTagsAPI`), so
      // only a legacy taglib `renderer` reaches here.
      if (node.extra!.featureType === "class" && isPatch()) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            `The Marko 5 (class API) tag \`${getTagNameHint(node)}\` cannot render with the experimental \`patches\` option, which compiles the tags API only. Migrate it to the tags API, stop rendering it, or turn \`patches\` off.`,
          );
      }
      if (node.var && node.extra!.featureType === "class") {
        throw tag
          .get("var")
          .buildCodeFrameError(
            `The Marko 5 (class API) tag \`${getTagNameHint(node)}\` cannot [\`<return>\`](https://markojs.com/docs/reference/core-tag#return) a value, so it does not support a [tag variable](https://markojs.com/docs/reference/language#tag-variables). Remove the variable, or migrate the tag to the tags API.`,
          );
      }
      const definedBodySection = node.extra?.defineBodySection;
      if (definedBodySection) {
        knownTagAnalyze(tag, definedBodySection);

        structure.child(tag, getTagNameHint(tag.node), {
          kind: StructureKind.SectionRef,
          section: definedBodySection,
        });

        return;
      }

      analyzeAttributeTags(tag);

      const tagSection = ensureSection(tag);
      const inputNodes = getAllTagReferenceNodes(node);
      const tagExtra = mergeDynamicTagReferences(tagSection, node, [
        node.name,
        ...inputNodes,
      ]);
      // Name-only tags are left out: flagging them registers sibling attr-tag
      // props through `for` items, so a bare function as the name stays unregistered.
      if (inputNodes.length) tagExtra.retained = true;
      if (node.name.type !== "StringLiteral") tagExtra.rendersContent = true;
      const tagBody = tag.get("body");
      const hasVar = !!tag.node.var;
      const usesVar = hasVar && isTagVarUsed(tag);
      let isInteractive = usesVar;
      for (const attr of node.attributes) {
        if (t.isMarkoSpreadAttribute(attr)) {
          isInteractive = true;
        } else if (isEventOrChangeHandler(attr.name)) {
          isInteractive = true;
          // It may resolve to an element, which retains a change handler.
          if (!isEventHandler(attr.name)) {
            (attr.value.extra ??= {}).retained = true;
          }
        }
      }
      if (isInteractive) getProgram().node.extra.isInteractive = true;
      const nodeBinding = (tagExtra.nodeBinding = createBinding(
        "#text",
        BindingType.dom,
        tagSection,
      ));
      // The dynamic tag entry applies without this template's dom module.
      linkHolePatcher(tagSection, tagExtra, "patches/dynamic-tag");
      // Fallback: a write a patch sends its params (a `<let>` its input seeds,
      // say) links page-level.
      if (
        isPatch() &&
        node.name.type !== "StringLiteral" &&
        inputNodes.length
      ) {
        linkRuntimeFeature("patches/write");
      }

      if (hasVar) {
        trackVarReferences(tag, BindingType.derived)!.returnedBy = {
          scope: nodeBinding,
        };
        reserveId(nodeBinding, ReservedId.ScopeOffset);
      }

      const bodySection = ensureBodySection(tagBody);
      // The body depends on the whole tag, as a branch body on its condition.
      if (bodySection) {
        bodySection.branchExpr = tagExtra;
        // Known templates receive the body as `input.content`, as from a known
        // tag; arguments call them positionally, so the body never reaches them.
        if (tagExtra.tagNameType === TagNameType.CustomTag && !node.arguments) {
          // Every attribute merged into the tag's expression, so the tag is
          // the value any prop those templates read.
          setTagContentDerives(tag, getDynamicTagInputBindings(tagExtra), {
            value: tagExtra,
          });
        }
      }
      trackParamsReferences(tagBody, BindingType.param);
      if (usesVar) addAlwaysReason(nodeBinding);
      addReasonExprs(ensureSlot(nodeBinding), tagExtra);

      if (
        !hasVar &&
        !node.arguments &&
        !node.attributes.length &&
        !node.body.body.length
      ) {
        tagExtra.nameOnly = true;
      }

      structure.marker(tag, nodeBinding);
      structure.enterShallow(tag);
      // A tag client state names is the patch's to create alone: its entry
      // rides a created scope's setup, with the child entry of what it renders.
      if (isPatch()) {
        onReasonsSettled(() => {
          if (keepsSeededMarker(tagSection, tagExtra)) {
            linkRuntimeFeature("patches/setup-child");
          }
        });
      }
      // A class API tag without a tags template renders only through the
      // interop: dom output renders nothing at its marker, nor its body.
      if (
        bodySection &&
        tagExtra.featureType === "class" &&
        !getTagTemplate(tag)
      ) {
        bodySection.structure = null;
      }
    },
  },
  translate: {
    enter(tag) {
      const tagExtra = tag.node.extra;
      if (
        tagExtra?.featureType === "class" &&
        !isOutputHTML() &&
        !getTagTemplate(tag)
      ) {
        tag.remove();
        return;
      }

      removeDroppedContent(tag);
      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag) {
      const { node } = tag;
      const tagSection = getSection(tag);
      const definedBodySection = node.extra?.defineBodySection;
      if (definedBodySection) {
        if (isOutputHTML()) {
          knownTagTranslateHTML(
            tag,
            t.memberExpression(tag.node.name, t.identifier("content")),
          );
        } else {
          const directContentNames =
            getProgram().node.extra.exportNames!.directContent;
          knownTagTranslateDOM(
            tag,
            (binding, preferredName, directContent) => {
              const directName =
                directContent && directContentNames.get(binding);
              return directName
                ? t.identifier(directName)
                : getSignal(definedBodySection, binding, preferredName)
                    .identifier;
            },
            (section, childBinding) => {
              if (definedBodySection.readsOwner) {
                addStatement(
                  "render",
                  section,
                  undefined,
                  t.assignmentExpression(
                    "=",
                    toMemberExpression(
                      createScopeReadExpression(childBinding, section),
                      getAccessorProp().Owner,
                    ),
                    getScopeExpression(section, definedBodySection.parent!),
                  ),
                );
              }
              if (definedBodySection.hasSetupWork) {
                addStatement(
                  "render",
                  section,
                  undefined,
                  t.callExpression(
                    getSignal(definedBodySection, undefined).identifier,
                    [createScopeReadExpression(childBinding, section)],
                  ),
                );
              }
            },
          );

          tag.remove();
        }

        return;
      }

      const tagExtra = node.extra!;
      const nodeBinding = tagExtra.nodeBinding!;
      const isClassAPI = tagExtra.featureType === "class";
      const markerReason = getWriteReason(nodeBinding);
      let tagExpression = node.name;

      if (isClassAPI) {
        const classTagTemplate = getTagTemplate(tag);
        const classFile = classTagTemplate ? loadFileForTag(tag)! : undefined;
        const classHydration = classFile?.metadata.marko.classHydration;

        // An optimized DOM page entry does not need inert Class API children that
        // have no Tags-side update path; SSR already produced their DOM.
        if (
          !isOutputHTML() &&
          isOptimize() &&
          classTagTemplate &&
          !markerReason &&
          !classHydration
        ) {
          tag.remove();
          return;
        }

        setNeedsCompat(true);

        if (t.isStringLiteral(tagExpression)) {
          tagExpression = importDefault(
            getFile(),
            getTagRelativePath(tag),
            tagExpression.value,
          );
        }

        // This is the interop layer leaking into the translator
        // We use the dynamic tag when a custom tag from the class runtime is used

        if (classTagTemplate) {
          // The `"preserve"` mode below is matched by beginComponent
          // (`___forceBoundary === "preserve"`) to emit a split component.
          const preserveBoundary =
            !markerReason &&
            (classHydration === ClassHydration.Descendant ||
              (classHydration === ClassHydration.Self &&
                !!classFile?.metadata.marko.hasComponentBrowser));
          const classId = classFile!.metadata.marko.id;
          const registration = isOutputHTML()
            ? t.callExpression(
                importNamed(getFile(), getCompatRuntimeFile(), "s"),
                [
                  t.stringLiteral(classId),
                  t.identifier((tagExpression as t.Identifier).name),
                  ...(preserveBoundary ? [t.stringLiteral("preserve")] : []),
                ],
              )
            : undefined;
          if (isOutputHTML() ? markerReason || classHydration : markerReason) {
            const pushed = pushStatementOnce(
              classId,
              registration
                ? t.markoScriptlet([t.expressionStatement(registration)], true)
                : t.expressionStatement(
                    registerRuntimeValue(
                      classId,
                      t.identifier((tagExpression as t.Identifier).name),
                    ),
                  ),
            );
            if (pushed && registration) {
              getCompatBoundaryCalls().set(classId, registration);
            }
          }

          // The registration is per renderer but the mode is per call site, so one
          // that cannot preserve drops it for the rest; preserving measured larger.
          if (!preserveBoundary) {
            const emitted = getCompatBoundaryCalls().get(classId);
            if (emitted) emitted.arguments.length = 2;
          }
        } else {
          const rendererName = (tagExpression as t.Identifier).name;
          pushStatementOnce(
            rendererName,
            t.markoScriptlet(
              [
                t.expressionStatement(
                  t.assignmentExpression(
                    "??=",
                    t.memberExpression(
                      t.identifier(rendererName),
                      t.identifier("_"),
                    ),
                    t.identifier(rendererName),
                  ),
                ),
              ],
              true,
            ),
          );
        }
      } else if (t.isStringLiteral(tagExpression)) {
        tagExpression = importDefault(
          getFile(),
          getTagRelativePath(tag),
          tagExpression.value,
        );
      }

      const { properties, statements } = translateAttrs(
        tag,
        undefined,
        undefined,
        undefined,
        isClassAPI ? "renderBody" : "content",
      );
      const args: (t.Expression | t.SpreadElement)[] = [];
      const contentProp = getTranslatedBodyContentProperty(properties);
      let hasTagArgs = false;

      if (node.arguments) {
        hasTagArgs = true;
        args.push(...node.arguments);

        if (properties.length) {
          args.push(propsToExpression(properties));
        }
      } else {
        if (contentProp) {
          properties.splice(properties.indexOf(contentProp), 1);
          args.push(propsToExpression(properties), contentProp.value);
        } else {
          args.push(propsToExpression(properties));
        }
      }

      if (isOutputHTML()) {
        writeHTMLResumeStatements(tag);
        const markerGuard = getWriteGuard(tagSection, markerReason, true);
        // For a debug build's check that the tag it renders is not lazy.
        const debugTagVar = !isOptimize() && node.var && t.numericLiteral(1);
        // The resumed variable's id: `_var` wires it, a patch entry fills it.
        const varId =
          node.var &&
          isTagVarResumed(tag) &&
          getResumeRegisterId(tagSection, node.var.extra?.binding, "var");
        // A patched tag writes its entry from what it renders (the entry ships
        // no statically empty input) and marks its branch whatever its reason.
        const input = args[0];
        const emptyInput =
          !hasTagArgs &&
          input.type === "ObjectExpression" &&
          !input.properties.length;
        let patched = 0;
        let patchArgs: (t.Expression | false)[] = [];
        if (writesPatchHole(tagSection, tag.node.extra)) {
          const groupArgs = getExprRootGroupArgs(tagSection, tagExtra);
          // A renderer the name hands unchanged pairs while its input changes.
          const rendererArgs = groupArgs.length
            ? getRendererGroupArgs(tagSection, tagExtra, groupArgs)
            : [];
          const createdOnly = keepsSeededMarker(tagSection, tagExtra);
          patched =
            (emptyInput ? 2 : 1) |
            (namesRegisteredTemplates(tagSection, tagExtra) ? 4 : 0);
          patchArgs = [
            groupArgs[0],
            groupArgs[1],
            createdOnly ? t.numericLiteral(1) : absentArg(0),
            rendererArgs[0],
            rendererArgs[1],
          ];
        }
        const tagVarArg =
          patched && varId ? t.stringLiteral(varId) : debugTagVar;
        const callArgs = hasTagArgs
          ? [
              getScopeIdIdentifier(tagSection),
              getScopeAccessorLiteral(nodeBinding),
              tagExpression,
              t.arrayExpression(args),
              // Fallback body for a null/string renderer; the DOM side already
              // passes it, so a hardcoded 0 here was an SSR/CSR mismatch.
              contentProp ? contentProp.value : t.numericLiteral(0),
              t.numericLiteral(1),
              markerGuard,
            ]
          : [
              getScopeIdIdentifier(tagSection),
              getScopeAccessorLiteral(nodeBinding),
              tagExpression,
              args[0],
              args[1] || (markerGuard ? t.numericLiteral(0) : undefined),
              markerGuard ? t.numericLiteral(0) : undefined,
              markerGuard,
            ];
        let dynamicTagExpr: t.Expression;
        if (isPatch()) {
          // `patched` (its flags, with the call site an `<id>` names above
          // them) follows the input: the order a patch build's calls are smallest in.
          patched |= nextIdSite() << 3;
          const [content, inputIsArgs, markerGuard] = callArgs.slice(4);
          const [mask, group, createdOnly, rendererGroup, rendererMask] =
            patchArgs;
          dynamicTagExpr = callRuntime(
            "_dynamic_tag",
            ...callArgs.slice(0, 4),
            patched ? t.numericLiteral(patched) : absentArg(0),
            content || absentArg(0),
            inputIsArgs || absentArg(0),
            markerGuard || absentArg(1),
            mask,
            group,
            createdOnly,
            rendererGroup,
            rendererMask || (!rendererGroup && absentArg(0)),
            tagVarArg,
          );
        } else {
          dynamicTagExpr = callRuntime("_dynamic_tag", ...callArgs, tagVarArg);
        }

        if (varId) {
          const dynamicScopeIdentifier = generateUidIdentifier(
            tag.get("name").toString() + "_scope",
          );
          const mutatesTagVar = isTagVarAssigned(tag);
          statements.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                dynamicScopeIdentifier,
                callRuntime("_peek_scope_id"),
              ),
            ]),
          );
          translateVar(tag, dynamicTagExpr, "let", statements);
          statements.push(
            t.expressionStatement(
              callRuntime(
                "_var",
                getScopeIdIdentifier(tagSection),
                getScopeOffsetAccessorLiteral(nodeBinding),
                dynamicScopeIdentifier,
                t.stringLiteral(varId),
                mutatesTagVar
                  ? getScopeAccessorLiteral(nodeBinding)
                  : undefined,
              ),
            ),
          );
        } else if (node.var) {
          translateVar(tag, dynamicTagExpr, "let", statements);
        } else {
          statements.push(t.expressionStatement(dynamicTagExpr));
        }

        for (const replacement of tag.replaceWithMultiple(statements)) {
          replacement.skip();
        }
      } else {
        const section = getSection(tag);
        const bodySection = getSectionForBody(tag.get("body"));
        const signal = getSignal(section, nodeBinding, "dynamicTag");
        let tagVarSignal: Signal | undefined;
        // Only a read or assigned variable resumes the scope offset its
        // branch's renders run before.
        if (tag.node.var && isTagVarResumed(tag)) {
          const varBinding = tag.node.var.extra!.binding!;
          tagVarSignal = initValue(varBinding);
          // A patch writes the variable's value by its resume id.
          tagVarSignal.register = writesPatchHole(section, tag.node.extra)
            ? "fill"
            : true;
          tagVarSignal.referenced = true;
          tagVarSignal.buildAssignment = (valueSection, value) =>
            buildVarChange(
              t.memberExpression(
                getScopeExpression(tagVarSignal!.section, valueSection),
                t.stringLiteral(
                  getAccessorPrefix().BranchScopes +
                    getScopeAccessor(nodeBinding),
                ),
                true,
              ),
              value,
              varBinding,
            );
        }

        signal.build = () => {
          return callRuntime(
            "_dynamic_tag",
            getScopeAccessorLiteral(nodeBinding, true),
            bodySection && getSectionRendererIdentifier(bodySection),
            tagVarSignal
              ? t.arrowFunctionExpression(
                  [getUnusedParamIdentifier()],
                  tagVarSignal.identifier,
                )
              : undefined,
            hasTagArgs && t.numericLiteral(1),
          );
        };

        // Additional optimized export a known parent calls instead of the
        // general `_dynamic_tag` signal above.
        const directBinding = getReferencedBindings(tagExtra);
        const directName =
          directBinding &&
          !Array.isArray(directBinding) &&
          getProgram().node.extra.exportNames!.directContent.get(directBinding);
        if (directName) {
          getProgram().node.body.push(
            t.exportNamedDeclaration(
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  t.identifier(directName),
                  callRuntime(
                    "_dynamic_tag_content",
                    getScopeAccessorLiteral(nodeBinding, true),
                  ),
                ),
              ]),
            ),
          );
        }

        if (args.length) {
          const argsOrInput = hasTagArgs
            ? t.arrayExpression(args)
            : (args[0] as t.Expression);
          if (
            !t.isObjectExpression(argsOrInput) ||
            argsOrInput.properties.length
          ) {
            signal.extraArgs = [
              t.arrowFunctionExpression(
                [getUnusedParamIdentifier()],
                statements.length
                  ? t.blockStatement(
                      statements.concat(t.returnStatement(argsOrInput)),
                    )
                  : argsOrInput,
              ),
            ];
          }
        }

        enableDynamicTagVar(tag);
        if (!isClassAPI) {
          if (mayHaveNativeAttr(tag, isEventOrChangeHandler)) {
            importRuntimeFeature("dynamic-tag-script");
          }
          // The name resolves at run time, so any control kind is possible.
          if (mayHaveNativeAttr(tag, isControllableAttr)) {
            importRuntimeFeature("controllable");
          }
        }
        addValue(section, tagExtra, signal, tagExpression);
        tag.remove();
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;

// A branch the tag creates runs its renders before the variable's readers; a
// native one binds the element, resuming as a getter over the tag's node visit.
function enableDynamicTagVar(tag: t.NodePath<t.MarkoTag>) {
  if (!tag.node.var || !isTagVarResumed(tag)) return;

  importRuntimeFeature("dynamic-tag-var");

  // A returned or passed on value serializes in another template's scope.
  if (
    tag.node.extra!.tagNameType !== TagNameType.CustomTag &&
    !tag.node.var.extra!.binding!.pruned
  ) {
    const accessor = getScopeAccessorLiteral(
      tag.node.extra!.nodeBinding!,
      true,
    );
    pushStatementOnce(
      `_dynamic_tag_var_resume ${accessor.value}`,
      t.expressionStatement(callRuntime("_dynamic_tag_var_resume", accessor)),
    );
  }
}

// Whether a native element the name may resolve to gets a spread, or an
// attribute `test` accepts.
function mayHaveNativeAttr(
  tag: t.NodePath<t.MarkoTag>,
  test: (name: string) => boolean,
) {
  if (tag.node.extra!.tagNameType === TagNameType.CustomTag) return false;
  for (const attr of tag.node.attributes) {
    if (
      attr.type === "MarkoSpreadAttribute" ||
      (attr.type === "MarkoAttribute" && test(attr.name))
    ) {
      return true;
    }
  }
  return false;
}

// The input binding of every template the name may resolve to; none when any is
// a Class API template. They come from different programs, so the list is unsorted.
function getDynamicTagInputBindings(tagExtra: t.MarkoTagExtra): Opt<Binding> {
  let inputBindings: Opt<Binding>;
  for (const childExtra of tagExtra.tagNameTemplates || []) {
    if (childExtra.featureType === "class") return;
    const inputBinding = childExtra.paramsTree?.props?.[0]?.binding;
    if (inputBinding) inputBindings = concat(inputBindings, inputBinding);
  }
  return inputBindings;
}

// Whether the child's variable is wired back to this tag on resume: only once
// something reads the value, or writes it back through the tag.
function isTagVarResumed(tag: t.NodePath<t.MarkoTag>) {
  return !tag.node.var!.extra!.binding!.pruned || isTagVarAssigned(tag);
}
