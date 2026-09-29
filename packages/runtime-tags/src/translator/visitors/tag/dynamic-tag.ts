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
import { getSectionRendererIdentifier } from "../../util/binding-has-prop";
import {
  type Binding,
  BindingType,
  createBinding,
  reserveId,
} from "../../util/bindings";
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
import { isOptimize, isOutputHTML } from "../../util/marko-config";
import { analyzeAttributeTags } from "../../util/nested-attribute-tags";
import { concat, type Opt } from "../../util/optional";
import { addReasonExprs, addReason } from "../../util/reasons";
import {
  getAllTagReferenceNodes,
  isTagVarUsed,
  mergeReferences,
  trackParamsReferences,
  trackVarReferences,
  getReferencedBindings,
} from "../../util/references";
import {
  callRuntime,
  getCompatRuntimeFile,
  importRuntime,
  importRuntimeFeature,
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
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  removePrunedContent,
  type Section,
  startSection,
  StructureKind,
} from "../../util/sections";
import { setTagDerivedFrom } from "../../util/set-tag-derived-from";
import {
  addStatement,
  addValue,
  getResumeRegisterId,
  getSignal,
  initValue,
  type Signal,
  writeHTMLResumeStatements,
} from "../../util/signals";
import { findSlot, getSlot } from "../../util/slots";
import { ALWAYS } from "../../util/sources";
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
import { getWriteGuard } from "../../util/write-guard";
import * as writer from "../../util/writer";
import * as ClassHydration from "./constants/class-hydration";
import { getTagRelativePath, tagNotFoundError } from "./custom-tag";
import { controllableFeatureFor, enableControllable } from "./native-tag";

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
        knownTagAnalyze(tag, definedBodySection);

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
      if (inputNodes.length) tagExtra.retained = true;
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

      if (hasVar) {
        trackVarReferences(tag, BindingType.derived)!.returnedBy = nodeBinding;
        reserveId(nodeBinding, ReservedId.ScopeOffset);
      }

      const bodySection = startSection(tagBody);
      // The body depends on the whole tag, as a branch body on its condition.
      if (bodySection) {
        bodySection.branchExpr = tagExtra;
        // Known templates receive the body as `input.content`, as from a known
        // tag; arguments call them positionally, so the body never reaches them.
        if (
          analyzeTagNameType(tag, true) === TagNameType.CustomTag &&
          !node.arguments
        ) {
          // Every attribute merged into the tag's expression, so the tag is
          // the value any prop those templates read.
          setTagDerivedFrom(tag, getDynamicTagInputBindings(tagExtra), {
            value: tagExtra,
          });
        }
      }
      trackParamsReferences(tagBody, BindingType.param);
      if (usesVar) addReason(getSlot(nodeBinding), ALWAYS);
      addReasonExprs(getSlot(nodeBinding), tagExtra);

      if (
        !hasVar &&
        !node.arguments &&
        !node.attributes.length &&
        !node.body.body.length
      ) {
        tagExtra.directContent = true;
      }

      structure.marker(tag, nodeBinding);
      structure.enterShallow(tag);
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

      removePrunedContent(tag);
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
              if (definedBodySection.hasSetupWork) {
                addStatement(
                  "render",
                  section,
                  undefined,
                  t.expressionStatement(
                    t.callExpression(
                      t.memberExpression(
                        getSignal(definedBodySection, undefined).identifier,
                        t.identifier("_"),
                      ),
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
      const markerReason = findSlot(nodeBinding)?.reason;
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
        const markerGuard = getWriteGuard(tagSection, markerReason, true);
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
              markerGuard,
            )
          : callRuntime(
              "_dynamic_tag",
              getScopeIdIdentifier(tagSection),
              getScopeAccessorLiteral(nodeBinding),
              tagExpression,
              args[0],
              args[1] || (markerGuard ? t.numericLiteral(0) : undefined),
              markerGuard ? t.numericLiteral(0) : undefined,
              markerGuard,
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
                getScopeOffsetAccessorLiteral(nodeBinding),
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
        // Only a read or assigned variable resumes the scope offset its
        // branch's renders run before.
        if (tag.node.var && isTagVarResumed(tag)) {
          const varBinding = tag.node.var.extra!.binding!;
          tagVarSignal = initValue(varBinding);
          tagVarSignal.register = true;
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
            bodySection && getSectionRendererIdentifier(bodySection),
            tagVarSignal
              ? t.arrowFunctionExpression([], tagVarSignal.identifier)
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

        enableDynamicTagVar(tag);
        if (!isClassAPI) {
          enableDynamicTagResume(tag);
          enableDynamicTagControllables(tag);
        }
        addValue(
          section,
          getReferencedBindings(tagExtra),
          signal,
          tagExpression,
        );
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

// A branch the tag creates runs its renders before the variable's readers; a
// native one binds the element, resuming as a getter over the tag's node visit.
function enableDynamicTagVar(tag: t.NodePath<t.MarkoTag>) {
  if (!tag.node.var || !isTagVarResumed(tag)) return;

  importRuntimeFeature("dynamic-tag-var");

  // A returned or passed on value serializes in another template's scope.
  if (
    analyzeTagNameType(tag, true) !== TagNameType.CustomTag &&
    !tag.node.var.extra!.binding!.pruned
  ) {
    const accessor = getScopeAccessorLiteral(
      tag.node.extra!.nodeBinding!,
      true,
    );
    if (addRuntimeOnce(`_dynamic_tag_var_resume ${accessor.value}`)) {
      getProgram().node.body.push(
        t.expressionStatement(callRuntime("_dynamic_tag_var_resume", accessor)),
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

function isTagVarAssigned(tag: t.NodePath<t.MarkoTag>) {
  return !!(
    tag.node.var!.type === "Identifier" &&
    tag.scope.getBinding(tag.node.var.name)?.constantViolations.length
  );
}
