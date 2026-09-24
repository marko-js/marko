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

import { WalkCode } from "../../../common/types";
import {
  getBindingPropTree,
  kDirectContent,
} from "../../util/binding-prop-tree";
import { generateUidIdentifier } from "../../util/generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
} from "../../util/get-accessor-enums";
import { getStaticTagName } from "../../util/get-tag-name";
import { isEventOrChangeHandler } from "../../util/is-event-or-change-handler";
import {
  knownTagAnalyze,
  knownTagTranslateDOM,
  knownTagTranslateHTML,
} from "../../util/known-tag";
import { isOptimize, isOutputHTML, isPatch } from "../../util/marko-config";
import { analyzeAttributeTags } from "../../util/nested-attribute-tags";
import { type SortedOpt } from "../../util/optional";
import {
  isContentRenderTag,
  isServerOwnedDynamicTag,
} from "../../util/patch/decisions";
import { addPatchChildRenderer } from "../../util/patch/intrinsics";
import { onFinalizePatch } from "../../util/patch/lifecycle";
import {
  ensurePatchWriteGroups,
  inResumedStructure,
} from "../../util/patch/structure";
import {
  type Binding,
  BindingType,
  createBinding,
  FORCED,
  getAllTagReferenceNodes,
  getScopeAccessor,
  getScopeAccessorLiteral,
  mergeReferences,
  trackParamsReferences,
  setBindingDownstream,
  trackVarReferences,
  bindingUtil,
} from "../../util/references";
import {
  linkRuntimeFeature,
  callRuntime,
  getCompatRuntimeFile,
  importRuntime,
  importRuntimeFeature,
  registerRuntimeValue,
} from "../../util/runtime";
import {
  createScopeReadExpression,
  getScopeExpression,
} from "../../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  type Section,
  startSection,
  StructureKind,
} from "../../util/sections";
import {
  getExprWriteOwnership,
  getSerializeGuard,
} from "../../util/serialize-guard";
import {
  addSerializeExpr,
  addSerializeReason,
  getSerializeReason,
} from "../../util/serialize-reasons";
import { setTagDownstream } from "../../util/set-tag-sections-downstream";
import { addSetupStatement } from "../../util/setup-statements";
import {
  addStatement,
  addValue,
  getResumeRegisterId,
  getSignal,
  initValue,
  type Signal,
  signalHasStatements,
  writeHTMLResumeStatements,
} from "../../util/signals";
import { createProgramState } from "../../util/state";
import * as structure from "../../util/structure";
import analyzeTagNameType, { TagNameType } from "../../util/tag-name-type";
import { toMemberExpression } from "../../util/to-property-name";
import {
  getTranslatedBodyContentProperty,
  propsToExpression,
  translateAttrs,
} from "../../util/translate-attrs";
import translateVar from "../../util/translate-var";
import type { TemplateVisitor } from "../../util/visitors";
import * as writer from "../../util/writer";
import * as ClassHydration from "./constants/class-hydration";
import { getTagRelativePath, tagNotFoundError } from "./custom-tag";
import { controllableFeatureFor, enableControllable } from "./native-tag";

const kChildOffsetScopeBinding = Symbol("custom tag scope offset");
// Runtime helpers and features a program adds once, by what each enables.
const [getAddedRuntime] = createProgramState(() => new Set<string>());

// Class-API interop registrations are idempotent and keyed by the shared
// renderer, so one per program suffices no matter how many tags reference it.
const [getCompatRegistrations] = createProgramState<Set<string>>(
  () => new Set(),
);
const [getCompatBoundaryCalls] = createProgramState<
  Map<string, t.CallExpression>
>(() => new Map());
function pushCompatRegistration(key: string, statement: t.Statement) {
  const keys = getCompatRegistrations();
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
    [kChildOffsetScopeBinding]?: Binding;
    defineBodySection?: Section;
  }
}

export default {
  analyze: {
    enter(tag) {
      if (tag.node.extra?.tagNameUnresolved) throw tagNotFoundError(tag);

      assertAttributesOrArgs(tag);
      const { node } = tag;
      const definedBodySection = node.extra?.defineBodySection;
      if (definedBodySection) {
        addSetupStatement(getOrCreateSection(tag));
        knownTagAnalyze(
          tag,
          definedBodySection,
          definedBodySection.params &&
            getBindingPropTree(definedBodySection.params),
        );

        structure.child(tag, getStaticTagName(tag.node), {
          kind: StructureKind.SectionRef,
          section: definedBodySection,
        });

        return;
      }

      analyzeAttributeTags(tag);

      const tagSection = getOrCreateSection(tag);
      const inputNodes = getAllTagReferenceNodes(node);
      const tagExtra = mergeReferences(tagSection, node, [
        node.name,
        ...inputNodes,
      ]);
      // Name-only tags are left out: flagging them registers sibling attr-tag
      // props through `for` items, so a bare function as the name stays unregistered.
      if (inputNodes.length) tagExtra.forceRegister = true;
      const tagBody = tag.get("body");
      const hasVar = !!tag.node.var;
      const usesVar = hasVar && isTagVarUsed(tag);
      const nodeBinding = (tagExtra.nodeBinding = createBinding(
        "#text",
        BindingType.dom,
        tagSection,
      ));
      // The dynamic tag entry applies without this template's dom module;
      // decided once references and structure resolve, as translate decides.
      if (isPatch() && !t.isStringLiteral(node.name)) {
        onFinalizePatch(() => {
          if (isContentRenderTag(tag) || isServerOwnedDynamicTag(tag)) {
            ensurePatchWriteGroups(() => tagExtra);
            if (writesPatchDynamicTag(tag, tagSection)) {
              linkRuntimeFeature("patch-dynamic-tag");
            }
          }
        });
      }

      if (
        usesVar ||
        tag.node.attributes.some(
          (attr) =>
            t.isMarkoSpreadAttribute(attr) || isEventOrChangeHandler(attr.name),
        )
      ) {
        getProgram().node.extra.isInteractive = true;
      }

      if (hasVar) {
        const varBinding = trackVarReferences(tag, BindingType.derived)!;
        // A flush writes the variable from what the tag renders: its inputs
        // are its sources (a client render drives it through `_var`).
        if (isPatch()) setBindingDownstream(varBinding, tagExtra);
        tag.node.var!.extra!.binding!.scopeOffset = tagExtra[
          kChildOffsetScopeBinding
        ] = createBinding("#scopeOffset", BindingType.dom, tagSection);
      }

      const bodySection = startSection(tagBody);
      // The body depends on the whole tag, as a branch body on its condition.
      if (bodySection) {
        bodySection.upstreamExpression = tagExtra;
        // Known templates receive the body as `input.content`, as from a known
        // tag; arguments call them positionally, so the body never reaches them.
        if (
          analyzeTagNameType(tag, true) === TagNameType.CustomTag &&
          !node.arguments
        ) {
          // Every attribute merged into the tag's expression, so the tag is
          // the value any prop those templates read.
          setTagDownstream(tag, getDynamicTagInputBindings(tagExtra), {
            value: tagExtra,
          });
        }
      }
      trackParamsReferences(tagBody, BindingType.param);
      if (usesVar) addSerializeReason(tagSection, FORCED, nodeBinding);
      addSerializeExpr(tagSection, tagExtra, nodeBinding);

      if (
        !hasVar &&
        !node.arguments &&
        !node.attributes.length &&
        !node.body.body.length
      ) {
        tagExtra[kDirectContent] = true;
      }

      // A class API tag without a tags template renders only through the
      // interop: dom output removes it, so it and its body record nothing.
      if (tagExtra.featureType !== "class" || getTagTemplate(tag)) {
        structure.visit(
          tag,
          hasVar ? WalkCode.DynamicTagWithVar : WalkCode.Replace,
        );
        structure.enterShallow(tag);
      } else if (bodySection) {
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

      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
      // An unknown renderer defeats transitive `$global` knowledge; `input`
      // content is the parent's own, already counted where it was compiled.
      if (
        isPatch() &&
        !t.isStringLiteral(tag.node.name) &&
        !isContentRenderTag(tag)
      ) {
        addPatchChildRenderer(tag.node.name);
      }
    },
    exit(tag) {
      const { node } = tag;
      const tagSection = getSection(tag);
      const definedBodySection = node.extra?.defineBodySection;
      if (definedBodySection) {
        const paramsBinding = definedBodySection.params;
        const propTree = paramsBinding && getBindingPropTree(paramsBinding);

        if (isOutputHTML()) {
          knownTagTranslateHTML(
            tag,
            t.memberExpression(tag.node.name, t.identifier("content")),
            definedBodySection,
            propTree,
          );
        } else {
          knownTagTranslateDOM(
            tag,
            propTree,
            (binding, preferredName, directContent) =>
              directContent && binding.directContentExport
                ? t.identifier(binding.directContentExport)
                : getSignal(definedBodySection, binding, preferredName)
                    .identifier,
            (section, childBinding) => {
              const signal = getSignal(definedBodySection, undefined);
              if (signalHasStatements(signal)) {
                addStatement(
                  "render",
                  section,
                  undefined,
                  t.expressionStatement(
                    t.callExpression(
                      t.memberExpression(signal.identifier, t.identifier("_")),
                      [
                        createScopeReadExpression(childBinding, section),
                        getScopeExpression(section, definedBodySection.parent!),
                      ],
                    ),
                  ),
                );
              } else if (definedBodySection.readsOwner) {
                addStatement(
                  "render",
                  section,
                  undefined,
                  t.expressionStatement(
                    t.assignmentExpression(
                      "=",
                      toMemberExpression(
                        createScopeReadExpression(childBinding, section),
                        getAccessorProp().Owner,
                      ),
                      getScopeExpression(section, definedBodySection.parent!),
                    ),
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
      const tagsSerializeReason = getSerializeReason(tagSection, nodeBinding);
      const serializeReason = tagsSerializeReason;
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
          !tagsSerializeReason &&
          !classHydration
        ) {
          tag.remove();
          return;
        }

        (getProgram().node.extra ??= {}).needsCompat = true;

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
            !tagsSerializeReason &&
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
          if (
            isOutputHTML() ? serializeReason || classHydration : serializeReason
          ) {
            const pushed = pushCompatRegistration(
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
          pushCompatRegistration(
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
        writer.flushInto(tag);
        writeHTMLResumeStatements(tag.get("body"));
        const serializeArg = getSerializeGuard(
          tagSection,
          serializeReason,
          true,
        );
        // The dynamic tag entry rides the tag, ownership gated; the tag
        // marks its branch for it whatever the tag's own reason.
        // The entry writer returns how a patch treats the tag (`1` pairs,
        // `2` skips: a client-owned group upstream); the render takes it.
        let patchPairingArg: t.Expression | undefined;
        if (writesPatchDynamicTag(tag, tagSection)) {
          // The tag's renderer and input evaluate once: hoisted, both the
          // render and the entry read them.
          if (!t.isIdentifier(tagExpression)) {
            const tagId = generateUidIdentifier("tag");
            statements.push(
              t.variableDeclaration("const", [
                t.variableDeclarator(tagId, tagExpression),
              ]),
            );
            tagExpression = tagId;
          }
          // A statically empty input is no input.
          let input: t.Expression | undefined = hasTagArgs
            ? t.arrayExpression([...args])
            : (args[0] as t.Expression | undefined);
          if (t.isObjectExpression(input) && !input.properties.length) {
            input = undefined;
          }
          if (input && !t.isIdentifier(input)) {
            const inputId = generateUidIdentifier("input");
            statements.push(
              t.variableDeclaration("const", [
                t.variableDeclarator(inputId, input),
              ]),
            );
            if (hasTagArgs) {
              args.length = 0;
              args.push(t.spreadElement(inputId));
            } else {
              args[0] = inputId;
            }
            input = inputId;
          }
          patchPairingArg = callRuntime(
            "_patch_dynamic_tag",
            getScopeIdIdentifier(tagSection),
            getScopeAccessorLiteral(nodeBinding),
            t.cloneNode(tagExpression),
            input ? t.cloneNode(input) : t.numericLiteral(0),
            contentProp
              ? t.stringLiteral(
                  getResumeRegisterId(
                    getSectionForBody(tag.get("body"))!,
                    "content",
                  ),
                )
              : t.numericLiteral(0),
            node.var
              ? t.stringLiteral(
                  getResumeRegisterId(
                    tagSection,
                    node.var.extra?.binding,
                    "var",
                  ),
                )
              : t.numericLiteral(0),
            ...getExprWriteOwnership(tagExtra),
          );
        }
        const dynamicTagExpr = hasTagArgs
          ? callRuntime(
              "_dynamic_tag",
              getScopeIdIdentifier(tagSection),
              getScopeAccessorLiteral(nodeBinding),
              tagExpression,
              t.arrayExpression(args),
              // Fallback body for a null/string renderer; the DOM side already
              // passes it, so a hardcoded 0 here was an SSR/CSR mismatch.
              contentProp ? contentProp.value : t.numericLiteral(0),
              t.numericLiteral(1),
              serializeArg,
              patchPairingArg,
            )
          : callRuntime(
              "_dynamic_tag",
              getScopeIdIdentifier(tagSection),
              getScopeAccessorLiteral(nodeBinding),
              tagExpression,
              args[0],
              args[1] || (serializeArg ? t.numericLiteral(0) : undefined),
              serializeArg ? t.numericLiteral(0) : undefined,
              serializeArg,
              patchPairingArg,
            );

        if (node.var && isTagVarResumed(tag)) {
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
                getScopeAccessorLiteral(
                  tag.node.extra![kChildOffsetScopeBinding]!,
                ),
                dynamicScopeIdentifier,
                t.stringLiteral(
                  getResumeRegisterId(
                    tagSection,
                    node.var.extra?.binding,
                    "var",
                  ),
                ),
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
        if (tag.node.var) {
          const varBinding = tag.node.var.extra!.binding!;
          tagVarSignal = initValue(varBinding);
          tagVarSignal.register = isTagVarResumed(tag);
          tagVarSignal.referenced = true;
          tagVarSignal.buildAssignment = (valueSection, value) => {
            const changeArgs = [
              t.memberExpression(
                getScopeExpression(tagVarSignal!.section, valueSection),
                t.stringLiteral(
                  getAccessorPrefix().BranchScopes +
                    getScopeAccessor(nodeBinding),
                ),
                true,
              ),
              value,
            ];
            if (!isOptimize()) {
              changeArgs.push(t.stringLiteral(varBinding.name));
            }
            return t.callExpression(importRuntime("_var_change"), changeArgs);
          };
        }

        signal.build = () => {
          return callRuntime(
            "_dynamic_tag",
            getScopeAccessorLiteral(nodeBinding, true),
            bodySection && t.identifier(bodySection.name),
            tagVarSignal
              ? t.arrowFunctionExpression([], tagVarSignal.identifier)
              : undefined,
            hasTagArgs && t.numericLiteral(1),
          );
        };

        // Additional optimized export a known parent calls instead of the
        // general `_dynamic_tag` signal above.
        const directBinding = tagExtra.referencedBindings;
        if (
          directBinding &&
          !Array.isArray(directBinding) &&
          directBinding.directContentExport
        ) {
          getProgram().node.body.push(
            t.exportNamedDeclaration(
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  t.identifier(directBinding.directContentExport),
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
                [],
                statements.length
                  ? t.blockStatement(
                      statements.concat(t.returnStatement(argsOrInput)),
                    )
                  : argsOrInput,
              ),
            ];
          }
        }

        if (!isClassAPI) {
          enableDynamicTagResume(tag);
          enableDynamicTagVar(tag);
          enableDynamicTagControllables(tag);
        }
        addValue(section, tagExtra.referencedBindings, signal, tagExpression);
        tag.remove();
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;

// Any attr that `attrsInternal` may claim, which a spread can also carry.
const controlledAttrs = /^(?:value|checked(?:Value)?|open)(?:Change)?$/;
/** The name resolves at run time, so any control kind is possible. */
function enableDynamicTagControllables(tag: t.NodePath<t.MarkoTag>) {
  if (analyzeTagNameType(tag, true) === TagNameType.CustomTag) return;

  for (const attr of tag.node.attributes) {
    if (
      attr.type === "MarkoSpreadAttribute" ||
      (attr.type === "MarkoAttribute" && controlledAttrs.test(attr.name))
    ) {
      enableControllable(controllableFeatureFor(undefined));
      return;
    }
  }
}

// A native branch's tag variable binds the element as the branch renders, and
// resumes as a getter over the tag's node visit wherever its value serializes.
function enableDynamicTagVar(tag: t.NodePath<t.MarkoTag>) {
  if (
    !tag.node.var ||
    !isTagVarResumed(tag) ||
    analyzeTagNameType(tag, true) === TagNameType.CustomTag
  ) {
    return;
  }

  importRuntimeFeature("dynamic-tag-var");

  // A returned or passed on value serializes in another template's scope.
  if (!tag.node.var.extra!.binding!.pruned) {
    const accessor = getScopeAccessorLiteral(
      tag.node.extra!.nodeBinding!,
      true,
    );
    if (addRuntimeOnce(`_resume_dynamic_tag_var ${accessor.value}`)) {
      getProgram().node.body.push(
        t.expressionStatement(callRuntime("_resume_dynamic_tag_var", accessor)),
      );
    }
  }
}

function enableDynamicTagResume(tag: t.NodePath<t.MarkoTag>) {
  if (analyzeTagNameType(tag, true) === TagNameType.CustomTag) return;
  for (const attr of tag.node.attributes) {
    if (
      attr.type === "MarkoSpreadAttribute" ||
      (attr.type === "MarkoAttribute" && isEventOrChangeHandler(attr.name))
    ) {
      importRuntimeFeature("dynamic-tag-script");
      return;
    }
  }
}

function addRuntimeOnce(key: string) {
  const added = getAddedRuntime();
  return !added.has(key) && !!added.add(key);
}

// The input binding of every template the name may resolve to; none when
// any is a Class API template.
function getDynamicTagInputBindings(
  tagExtra: t.MarkoTagExtra,
): SortedOpt<Binding> {
  let inputBindings: SortedOpt<Binding>;
  for (const childExtra of tagExtra.tagNameTemplates || []) {
    if (childExtra.featureType === "class") return;
    const inputBinding = childExtra.domExports?.params?.props?.[0]?.binding;
    if (inputBinding)
      inputBindings = bindingUtil.add(inputBindings, inputBinding);
  }
  return inputBindings;
}

// Nothing reads or assigns the variable, so the tag need not resume for it.
function isTagVarUsed(tag: t.NodePath<t.MarkoTag>) {
  for (const name in t.getBindingIdentifiers(tag.node.var!)) {
    const binding = tag.scope.getBinding(name);
    if (binding?.referencePaths.length || binding?.constantViolations.length) {
      return true;
    }
  }
  return false;
}

// Whether the child's variable is wired back to this tag on resume: only once
// something reads the value, or writes it back through the tag.
function isTagVarResumed(tag: t.NodePath<t.MarkoTag>) {
  return !tag.node.var!.extra!.binding!.pruned || isTagVarAssigned(tag);
}

function isTagVarAssigned(tag: t.NodePath<t.MarkoTag>) {
  return !!(
    tag.node.var!.type === "Identifier" &&
    tag.scope.getBinding(tag.node.var.name)?.constantViolations.length
  );
}

// A tag whose dynamic tag entry re-renders it from the server's value:
// `input` content, or a fully server-owned renderer and input.
function writesPatchDynamicTag(tag: t.NodePath<t.MarkoTag>, section: Section) {
  return (
    isPatch() &&
    (isContentRenderTag(tag) || isServerOwnedDynamicTag(tag)) &&
    !inResumedStructure(section)
  );
}
