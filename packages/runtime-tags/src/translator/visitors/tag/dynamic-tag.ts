import { types as t } from "@marko/compiler";
import {
  assertAttributesOrArgs,
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
import {
  type DynamicNativeTagInfo,
  getDynamicNativeTagInfo,
} from "../../util/dynamic-native-tag";
import evaluate from "../../util/evaluate";
import { generateUidIdentifier } from "../../util/generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
} from "../../util/get-accessor-char";
import { isEventOrChangeHandler } from "../../util/is-event-or-change-handler";
import {
  knownTagAnalyze,
  knownTagTranslateDOM,
  knownTagTranslateHTML,
} from "../../util/known-tag";
import { isOptimize, isOutputHTML } from "../../util/marko-config";
import { analyzeAttributeTags } from "../../util/nested-attribute-tags";
import { type Opt, push } from "../../util/optional";
import {
  type Binding,
  BindingType,
  createBinding,
  getAllTagReferenceNodes,
  getScopeAccessor,
  getScopeAccessorLiteral,
  mergeReferences,
  trackParamsReferences,
  trackVarReferences,
} from "../../util/references";
import {
  callRuntime,
  getCompatRuntimeFile,
  getHTMLRuntime,
  importRuntime,
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
} from "../../util/sections";
import { getSerializeGuard } from "../../util/serialize-guard";
import {
  addSerializeExpr,
  getSerializeReason,
} from "../../util/serialize-reasons";
import { addSetupExpr, addSetupStatement } from "../../util/setup-statements";
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
import analyzeTagNameType, { TagNameType } from "../../util/tag-name-type";
import { toMemberExpression } from "../../util/to-property-name";
import {
  getTranslatedBodyContentProperty,
  propsToExpression,
  translateAttrs,
} from "../../util/translate-attrs";
import type { TemplateVisitor } from "../../util/visitors";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { scopeIdentifier } from "../program";
import { getTagRelativePath } from "./custom-tag";

const kDOMBinding = Symbol("dynamic tag dom binding");
const kDynamicNative = Symbol("dynamic tag native element info");
const kChildOffsetScopeBinding = Symbol("custom tag scope offset");
const importedDynamicTagResume = new WeakSet<t.Program>();
enum ClassHydration {
  Self = "self",
  Descendant = "descendant",
}

declare module "@marko/compiler" {
  export interface MarkoMeta {
    classHydration?: ClassHydration;
    hasComponentBrowser?: boolean;
  }
}

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
    [kDynamicNative]?: DynamicNativeTagInfo;
    [kChildOffsetScopeBinding]?: Binding;
    defineBodySection?: Section;
  }
}

export default {
  analyze: {
    enter(tag) {
      assertAttributesOrArgs(tag);
      const { node } = tag;
      const definedBodySection = node.extra?.defineBodySection;
      if (definedBodySection) {
        // Dynamic tags (and locally invoked define bodies) initialize their
        // renderer with statements that can land in setup.
        addSetupStatement(getOrCreateSection(tag));
        knownTagAnalyze(
          tag,
          definedBodySection,
          definedBodySection.params &&
            getBindingPropTree(definedBodySection.params),
        );

        return;
      }

      // A dynamic tag whose name is provably a non-nullable enumerable set of
      // safe native tag names compiles as a real native element with a name
      // swap, avoiding the general dynamic tag branch/renderer runtime entirely.
      const dynamicNativeInfo = getDynamicNativeTagInfo(tag);
      if (dynamicNativeInfo) {
        analyzeDynamicNativeTag(tag, dynamicNativeInfo);
        return;
      }

      addSetupStatement(getOrCreateSection(tag));
      analyzeAttributeTags(tag);

      const tagSection = getOrCreateSection(tag);
      const tagExtra = mergeReferences(tagSection, node, [
        node.name,
        ...getAllTagReferenceNodes(node),
      ]);
      const tagBody = tag.get("body");
      const hasVar = !!tag.node.var;
      const nodeBinding = (tagExtra[kDOMBinding] = createBinding(
        "#text",
        BindingType.dom,
        tagSection,
      ));

      if (
        hasVar ||
        tag.node.attributes.some(
          (attr) =>
            t.isMarkoSpreadAttribute(attr) || isEventOrChangeHandler(attr.name),
        )
      ) {
        getProgram().node.extra.isInteractive = true;
      }

      if (hasVar) {
        trackVarReferences(tag, BindingType.derived);
        tag.node.var!.extra!.binding!.scopeOffset = tagExtra[
          kChildOffsetScopeBinding
        ] = createBinding("#scopeOffset", BindingType.dom, tagSection);
      }

      startSection(tagBody);
      trackParamsReferences(tagBody, BindingType.param);
      addSerializeExpr(tagSection, hasVar || tagExtra, nodeBinding);

      if (
        !hasVar &&
        !node.arguments &&
        !node.attributes.length &&
        !node.body.body.length
      ) {
        tagExtra[kDirectContent] = true;
      }
    },
  },
  translate: {
    enter(tag) {
      const tagExtra = tag.node.extra;
      const dynamicNativeInfo = tagExtra?.[kDynamicNative];
      if (dynamicNativeInfo) {
        translateDynamicNativeTagEnter(tag, dynamicNativeInfo);
        return;
      }

      if (
        tagExtra?.featureType === "class" &&
        !isOutputHTML() &&
        !getTagTemplate(tag)
      ) {
        tag.remove();
        return;
      }

      if (tagExtra?.defineBodySection) {
        if (isOutputHTML()) {
          writer.flushBefore(tag);
        }
        return;
      }

      walks.visit(
        tag,
        tag.node.var ? WalkCode.DynamicTagWithVar : WalkCode.Replace,
      );
      walks.enterShallow(tag);

      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag) {
      const { node } = tag;
      const dynamicNativeInfo = node.extra?.[kDynamicNative];
      if (dynamicNativeInfo) {
        translateDynamicNativeTagExit(tag, dynamicNativeInfo);
        return;
      }

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
          const write = writer.writeTo(tag);

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

          write`${() => writer.getSectionMetaIdentifiers(definedBodySection).writes || ""}`;
          walks.injectWalks(
            tag,
            tag.get("name").toString(),
            () => writer.getSectionMetaIdentifiers(definedBodySection).walks,
          );

          tag.remove();
        }

        return;
      }

      const tagExtra = node.extra!;
      const nodeBinding = tagExtra[kDOMBinding]!;
      const isClassAPI = tagExtra.featureType === "class";
      const tagsSerializeReason = getSerializeReason(tagSection, nodeBinding);
      const serializeReason = tagsSerializeReason;
      let tagExpression = node.name;

      if (isClassAPI) {
        const classTagTemplate = getTagTemplate(tag);
        const classFile = classTagTemplate ? loadFileForTag(tag)! : undefined;
        const classHydration = classFile?.metadata.marko.classHydration;

        // Optimized page hydration does not need inert Class API children that
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
            tag.hub.file,
            getTagRelativePath(tag),
            tagExpression.value,
          );
        }

        // This is the interop layer leaking into the translator
        // We use the dynamic tag when a custom tag from the class runtime is used

        if (classTagTemplate) {
          const preserveBoundary =
            !tagsSerializeReason &&
            (classHydration === ClassHydration.Descendant ||
              (classHydration === ClassHydration.Self &&
                !!classFile?.metadata.marko.hasComponentBrowser));
          if (
            isOutputHTML() ? serializeReason || classHydration : serializeReason
          ) {
            getProgram().node.body.push(
              isOutputHTML()
                ? t.markoScriptlet(
                    [
                      t.expressionStatement(
                        t.callExpression(
                          importNamed(
                            tag.hub.file,
                            getCompatRuntimeFile(),
                            "s",
                          ),
                          [
                            t.stringLiteral(
                              loadFileForTag(tag)!.metadata.marko.id,
                            ),
                            t.identifier((tagExpression as t.Identifier).name),
                            ...(preserveBoundary
                              ? [t.stringLiteral("preserve")]
                              : []),
                          ],
                        ),
                      ),
                    ],
                    true,
                  )
                : t.expressionStatement(
                    callRuntime(
                      "_resume",
                      t.stringLiteral(loadFileForTag(tag)!.metadata.marko.id),
                      t.identifier((tagExpression as t.Identifier).name),
                    ),
                  ),
            );
          }
        } else {
          getProgram().node.body.push(
            t.markoScriptlet(
              [
                t.expressionStatement(
                  t.assignmentExpression(
                    "??=",
                    t.memberExpression(
                      t.identifier((tagExpression as t.Identifier).name),
                      t.identifier("_"),
                    ),
                    t.identifier((tagExpression as t.Identifier).name),
                  ),
                ),
              ],
              true,
            ),
          );
        }
      } else if (t.isStringLiteral(tagExpression)) {
        tagExpression = importDefault(
          tag.hub.file,
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
      let hasTagArgs = false;

      if (node.arguments) {
        hasTagArgs = true;
        args.push(...node.arguments);

        if (properties.length) {
          args.push(propsToExpression(properties));
        }
      } else {
        const contentProp = getTranslatedBodyContentProperty(properties);
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
        const dynamicTagExpr = hasTagArgs
          ? callRuntime(
              "_dynamic_tag",
              getScopeIdIdentifier(tagSection),
              getScopeAccessorLiteral(nodeBinding),
              tagExpression,
              t.arrayExpression(args),
              t.numericLiteral(0),
              t.numericLiteral(1),
              serializeArg,
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
            );

        if (node.var) {
          const dynamicScopeIdentifier = generateUidIdentifier(
            tag.get("name").toString() + "_scope",
          );
          const mutatesTagVar = !!(
            tag.node.var!.type === "Identifier" &&
            tag.scope.getBinding(tag.node.var.name)?.constantViolations.length
          );
          statements.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                dynamicScopeIdentifier,
                callRuntime("_peek_scope_id"),
              ),
            ]),
          );
          statements.push(
            t.variableDeclaration("let", [
              t.variableDeclarator(node.var, dynamicTagExpr),
            ]),
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
                    (node.var as t.Identifier).extra?.binding, // TODO: node.var is not always an identifier.
                    "var",
                  ),
                ),
                mutatesTagVar
                  ? getScopeAccessorLiteral(nodeBinding)
                  : undefined,
              ),
            ),
          );
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
          tagVarSignal = initValue(
            // TODO: support destructuring
            varBinding,
          );
          tagVarSignal.register = true;
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
        }
        addValue(section, tagExtra.referencedBindings, signal, tagExpression);
        tag.remove();
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;

function analyzeDynamicNativeTag(
  tag: t.NodePath<t.MarkoTag>,
  info: DynamicNativeTagInfo,
) {
  const { node } = tag;
  const tagSection = getOrCreateSection(tag);
  // Track the name expression so the swap signal is reactive; attribute values
  // are tracked individually (like a native tag) for per-attribute signals.
  const tagExtra = mergeReferences(tagSection, node, [node.name]);
  tagExtra[kDynamicNative] = info;
  // The name swap keys on the name expression's references; when they resolve
  // empty (a constant name) it lands in setup, so register it like a native
  // tag's dynamic attribute does.
  addSetupExpr(tagSection, node.name);
  const nodeBinding = (tagExtra[kDOMBinding] = createBinding(
    "#" + info.default,
    BindingType.dom,
    tagSection,
  ));

  // The element scope must be serialized whenever the name or any attribute is
  // dynamic, so its client signals can resume onto the server-rendered element.
  let exprExtras: Opt<t.NodeExtra> = tagExtra;
  for (const attr of node.attributes as t.MarkoAttribute[]) {
    if (!evaluate(attr.value).confident) {
      exprExtras = push(exprExtras, (attr.value.extra ??= {}));
    }
  }
  addSerializeExpr(tagSection, exprExtras, nodeBinding);
}

function translateDynamicNativeTagEnter(
  tag: t.NodePath<t.MarkoTag>,
  info: DynamicNativeTagInfo,
) {
  const { node } = tag;
  const tagSection = getSection(tag);
  const nodeBinding = node.extra![kDOMBinding]!;
  const write = writer.writeTo(tag);

  if (isOutputHTML()) {
    writer.flushBefore(tag);
    write`<${t.cloneNode(node.name, true)}`;
    writeDynamicNativeAttrs(tag, tagSection, nodeBinding, true);
    write`>`;
  } else {
    walks.visit(tag, WalkCode.Get);
    write`<${info.default}`;
    writeDynamicNativeAttrs(tag, tagSection, nodeBinding, false);
    write`>`;
    walks.enter(tag);
  }
}

function translateDynamicNativeTagExit(
  tag: t.NodePath<t.MarkoTag>,
  info: DynamicNativeTagInfo,
) {
  const { node } = tag;
  const tagSection = getSection(tag);
  const nodeBinding = node.extra![kDOMBinding]!;
  const write = writer.writeTo(tag);

  if (isOutputHTML()) {
    write`</${t.cloneNode(node.name, true)}>`;
    writer.markNode(
      tag,
      nodeBinding,
      getSerializeReason(tagSection, nodeBinding),
    );
  } else {
    write`</${info.default}>`;
    // The name signal swaps the element in place when the tag name changes.
    addStatement(
      "render",
      tagSection,
      node.extra!.referencedBindings,
      t.expressionStatement(
        callRuntime(
          "_dynamic_native_tag",
          scopeIdentifier,
          getScopeAccessorLiteral(nodeBinding),
          node.name,
        ),
      ),
      undefined,
      true,
    );
    walks.exit(tag);
  }

  tag.remove();
}

// Writes each plain attribute of a dynamic native tag as it would for a static
// native element: static values fold into the template/markup, dynamic values
// become per-attribute signals (never `_attrs`, so the form-control runtime
// stays out of the bundle). The gate guarantees no spread/handler/controllable
// attributes reach here.
function writeDynamicNativeAttrs(
  tag: t.NodePath<t.MarkoTag>,
  tagSection: Section,
  nodeBinding: Binding,
  isHTML: boolean,
) {
  const write = writer.writeTo(tag);
  const htmlRuntime = getHTMLRuntime();
  for (const attr of tag.node.attributes as t.MarkoAttribute[]) {
    const { name, value } = attr;
    const { confident, computed } = evaluate(value);
    const helper =
      name === "class" || name === "style"
        ? (`_attr_${name}` as const)
        : "_attr";
    const isDelimited = helper !== "_attr";

    if (confident) {
      write`${
        isDelimited
          ? htmlRuntime[helper as "_attr_class" | "_attr_style"](computed)
          : htmlRuntime._attr(name, computed)
      }`;
    } else if (isHTML) {
      write`${
        isDelimited
          ? callRuntime(helper, value)
          : callRuntime("_attr", t.stringLiteral(name), value)
      }`;
    } else {
      addStatement(
        "render",
        tagSection,
        value.extra?.referencedBindings,
        t.expressionStatement(
          isDelimited
            ? callRuntime(helper, createScopeReadExpression(nodeBinding), value)
            : callRuntime(
                "_attr",
                createScopeReadExpression(nodeBinding),
                t.stringLiteral(name),
                value,
              ),
        ),
        undefined,
        true,
      );
    }
  }
}

function enableDynamicTagResume(tag: t.NodePath<t.MarkoTag>) {
  const program = getProgram().node;
  if (
    !importedDynamicTagResume.has(program) &&
    analyzeTagNameType(tag, true) !== TagNameType.CustomTag
  ) {
    for (const attr of tag.node.attributes) {
      if (
        attr.type === "MarkoSpreadAttribute" ||
        (attr.type === "MarkoAttribute" && isEventOrChangeHandler(attr.name))
      ) {
        importedDynamicTagResume.add(program);
        program.body.push(
          t.expressionStatement(callRuntime("_resume_dynamic_tag")),
        );
        return;
      }
    }
  }
}
