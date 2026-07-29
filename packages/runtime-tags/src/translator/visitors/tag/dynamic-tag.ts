import { types as t } from "@marko/compiler";
import {
  assertAttributesOrArgs,
  getProgram,
  getTagTemplate,
  importDefault,
  importNamed,
  loadFileForImport,
  loadFileForTag,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../../common/types";
import {
  getBindingPropTree,
  kDirectContent,
} from "../../util/binding-prop-tree";
import { addConstructFragment } from "../../util/construct-pass";
import { generateUidIdentifier } from "../../util/generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
} from "../../util/get-accessor-char";
import { isEventOrChangeHandler } from "../../util/is-event-or-change-handler";
import {
  getKnownTagChildScopeBinding,
  knownTagAnalyze,
  knownTagTranslateDOM,
  knownTagTranslateHTML,
} from "../../util/known-tag";
import {
  getReadyId,
  isOptimize,
  isOutputHTML,
  isPersisted,
  isPersistedEntryBuild,
} from "../../util/marko-config";
import {
  isMembraneLive,
  markStateCapable,
  markUnknownChildren,
  MembraneCause,
} from "../../util/membranes";
import { analyzeAttributeTags } from "../../util/nested-attribute-tags";
import {
  type Binding,
  BindingType,
  createBinding,
  getAllTagReferenceNodes,
  getScopeAccessor,
  getScopeAccessorLiteral,
  mergeReferences,
  onFinalizeReferences,
  trackParamsReferences,
  trackVarReferences,
} from "../../util/references";
import {
  callRuntime,
  getCompatRuntimeFile,
  importRuntime,
} from "../../util/runtime";
import {
  createScopeReadExpression,
  getScopeExpression,
} from "../../util/scope-read";
import {
  addComposedShellSection,
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
import analyzeTagNameType, { TagNameType } from "../../util/tag-name-type";
import { toMemberExpression } from "../../util/to-property-name";
import {
  assertPersistedSpreadSupported,
  getTranslatedBodyContentProperty,
  propsToExpression,
  translateAttrs,
} from "../../util/translate-attrs";
import {
  addUpdateMerge,
  getUpdateAnchorRegisterId,
  isUpdateDynamicTagAnchor,
} from "../../util/update-merges";
import { recordPlanImport } from "../../util/update-plan-records";
import type { TemplateVisitor } from "../../util/visitors";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { scopeIdentifier } from "../program";
import * as ClassHydration from "./constants/class-hydration";
import {
  buildLoadSetupVirtualModule,
  getChildImportPath,
  getTagRelativePath,
} from "./custom-tag";
import { controllableScriptLatchFor, enableControllable } from "./native-tag";

const kDOMBinding = Symbol("dynamic tag dom binding");
const kChildOffsetScopeBinding = Symbol("custom tag scope offset");
const importedDynamicTagResume = new WeakSet<t.Program>();

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
    [kDOMBinding]?: Binding;
    [kChildOffsetScopeBinding]?: Binding;
    defineBodySection?: Section;
    dynamicTagImports?: string[];
    dynamicTagLoadImports?: string[];
  }
  export interface ProgramExtra {
    escapedTemplateImports?: string[];
  }
}

export default {
  analyze: {
    enter(tag) {
      assertAttributesOrArgs(tag);
      const { node } = tag;
      // Dynamic tags (and locally invoked define bodies) initialize their
      // renderer with statements that can land in setup.
      addSetupStatement(getOrCreateSection(tag));
      if (isPersisted()) {
        // Runtime-selected renderers may render state-capable content this
        // compile cannot see; the section's subtree must stay nameable.
        markUnknownChildren(getOrCreateSection(tag));
      }
      const definedBodySection = node.extra?.defineBodySection;
      if (definedBodySection) {
        // A direct reference splices the body's own writes and walks into
        // this section (see the translate below), so it composes the body's
        // document frame exactly as an inlined child template does.
        addComposedShellSection(getOrCreateSection(tag), definedBodySection);
        knownTagAnalyze(
          tag,
          definedBodySection,
          definedBodySection.params &&
            getBindingPropTree(definedBodySection.params),
        );

        return;
      }

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
        if (isPersisted()) {
          let causes = hasVar ? MembraneCause.ref : 0;
          for (const attr of tag.node.attributes) {
            if (t.isMarkoSpreadAttribute(attr)) causes |= MembraneCause.spread;
            else if (isEventOrChangeHandler(attr.name)) {
              causes |= MembraneCause.effect;
            }
          }
          markStateCapable(tagSection, causes);
        }
      }

      if (hasVar) {
        trackVarReferences(tag, BindingType.derived);
        tag.node.var!.extra!.binding!.scopeOffset = tagExtra[
          kChildOffsetScopeBinding
        ] = createBinding("#scopeOffset", BindingType.dom, tagSection);
      }
      if (isPersisted() && tagExtra.featureType !== "class") {
        [tagExtra.dynamicTagImports, tagExtra.dynamicTagLoadImports] =
          getDynamicTagImports(tag);
      }
      onFinalizeReferences(() => {
        if (isUpdateDynamicTagAnchor(tagSection, nodeBinding, node.name)) {
          getUpdateAnchorRegisterId(
            tagSection,
            "dynamic",
            getScopeAccessor(nodeBinding),
          );
        }
      });

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

          // A live define body dispatches like a child template: its fills
          // route through the registered content merge and a constructed
          // parent wires ownership + recurses its construct pass. (The
          // invoking section is live via its unknown-children mark; the
          // define body's own membrane decides whether there is anything
          // to deliver.)
          const childScopeBinding = getKnownTagChildScopeBinding(tag);
          if (
            isPersisted() &&
            childScopeBinding &&
            isMembraneLive(definedBodySection)
          ) {
            const contentId = getResumeRegisterId(
              definedBodySection,
              "content",
            );
            addUpdateMerge(tagSection, {
              kind: "define-child",
              accessor: getScopeAccessorLiteral(childScopeBinding),
              contentId,
            });
            addConstructFragment(
              tagSection,
              "owner-wire",
              t.expressionStatement(
                callRuntime(
                  "_construct_child",
                  scopeIdentifier,
                  getScopeAccessorLiteral(childScopeBinding),
                  t.stringLiteral(contentId),
                  // The define body's owner is its definition site, resolved
                  // through the constructed branch's live-wired chain.
                  getScopeExpression(tagSection, definedBodySection.parent!),
                ),
              ),
            );
          }

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
          const classRequest = resolveRelativePath(
            tag.hub.file,
            getTagRelativePath(tag),
          );
          tagExpression = importDefault(
            tag.hub.file,
            classRequest,
            tagExpression.value,
          );
          if (isPersistedEntryBuild()) {
            // Interop class-api renderer request (non-census emission).
            recordPlanImport(tag.hub.file, classRequest, "external");
          }
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
                importNamed(tag.hub.file, getCompatRuntimeFile(), "s"),
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
                    callRuntime(
                      "_resume",
                      t.stringLiteral(classId),
                      t.identifier((tagExpression as t.Identifier).name),
                    ),
                  ),
            );
            if (pushed && registration) {
              getCompatBoundaryCalls().set(classId, registration);
            }
          }

          // The registration is per renderer but the mode is per call site, so
          // one that cannot preserve drops it for every other use of the class.
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
          tag.hub.file,
          getChildImportPath(tag.hub.file, getTagRelativePath(tag)),
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
      for (const arg of node.arguments || []) {
        if (t.isSpreadElement(arg)) {
          assertPersistedSpreadSupported(tag, arg.argument);
        }
      }
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
        const persistedAnchor = isPersisted() && isMembraneLive(tagSection);
        let serializeArg = getSerializeGuard(
          tagSection,
          serializeReason,
          !persistedAnchor,
        );
        if (persistedAnchor) {
          serializeArg = t.binaryExpression(
            "|",
            serializeArg!,
            callRuntime("_persisted_reason"),
          );
        }
        // This build-stable id addresses the hop in the opaque server token.
        const anchorId = isUpdateDynamicTagAnchor(
          tagSection,
          nodeBinding,
          node.name,
        )
          ? t.stringLiteral(
              getUpdateAnchorRegisterId(
                tagSection,
                "dynamic",
                getScopeAccessor(nodeBinding),
              ),
            )
          : undefined;
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
              anchorId,
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
              anchorId,
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
        } else {
          statements.push(t.expressionStatement(dynamicTagExpr));
        }

        for (const replacement of tag.replaceWithMultiple(statements)) {
          replacement.skip();
        }
      } else {
        const bodySection = getSectionForBody(tag.get("body"));
        const signal = getSignal(tagSection, nodeBinding, "dynamicTag");
        if (isUpdateDynamicTagAnchor(tagSection, nodeBinding, node.name)) {
          const accessor = getScopeAccessorLiteral(nodeBinding);
          // A `load=` candidate registers a demand loader instead of a
          // static link: a dispatch that needs its merge loads it then
          // (load= defers first-render bytes, never a patch's content).
          let candidateLoaders: [string, t.Expression][] | undefined;
          for (const request of tagExtra.dynamicTagLoadImports || []) {
            const childFile = loadFileForImport(tag.hub.file, request);
            const childExports = childFile?.ast.program.extra.domExports;
            const readyId = childFile && getReadyId(childFile);
            if (childFile && childExports && readyId) {
              // Loading the merge module alone leaves the child's parked
              // resume batches gated; the demand load must declare the
              // ready id exactly as the scheduled facade would.
              (candidateLoaders ||= []).push([
                childFile.metadata.marko.id,
                t.arrowFunctionExpression(
                  [],
                  t.callExpression(
                    t.memberExpression(
                      t.callExpression(t.import(), [
                        t.stringLiteral(
                          buildLoadSetupVirtualModule(
                            tag.hub.file,
                            childFile.opts.filename as string,
                            childExports,
                          ),
                        ),
                      ]),
                      t.identifier("then"),
                    ),
                    [
                      t.arrowFunctionExpression(
                        [],
                        callRuntime("readyPersisted", t.stringLiteral(readyId)),
                      ),
                    ],
                  ),
                ),
              ]);
            }
          }
          addUpdateMerge(tagSection, {
            kind: "dynamic",
            accessor,
            candidateLoaders,
          });
          // Runtime dispatch is by renderer id, so each known candidate
          // template's `?persisted` merge registration must load with this entry.
          for (const request of tagExtra.dynamicTagImports || []) {
            const importPath = getChildImportPath(tag.hub.file, request);
            if (importPath !== request) {
              importDefault(tag.hub.file, importPath);
              // Bare NON-load candidate: kind asserted here, 1:1 with its
              // EagerCandidateLink (census site 36; never seam-inferred).
              recordPlanImport(
                tag.hub.file,
                resolveRelativePath(tag.hub.file, importPath),
                "eager-candidate",
              );
            }
          }
        }
        let tagVarSignal: Signal | undefined;
        if (tag.node.var) {
          const varBinding = tag.node.var.extra!.binding!;
          tagVarSignal = initValue(varBinding);
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
          enableDynamicTagControllables(tag);
        }
        // Construct path: adopted renderer linkage via the dynamic merge.
        addValue(
          tagSection,
          tagExtra.referencedBindings,
          signal,
          tagExpression,
          "structural",
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
      enableControllable(controllableScriptLatchFor(undefined));
      return;
    }
  }
}

// Collects the tag name expression's known template candidates (excluding load
// imports and class renderers); anything unresolvable is a runtime renderer.
function getDynamicTagImports(tag: t.NodePath<t.MarkoTag>) {
  const { file } = tag.hub;
  const pending = [tag.get("name")] as t.NodePath<t.Expression>[];
  const followed = new Set<t.NodePath>();
  let imports: string[] | undefined;
  let loadImports: string[] | undefined;
  let path: (typeof pending)[0] | undefined;

  while ((path = pending.pop())) {
    if (path.isConditionalExpression()) {
      pending.push(path.get("consequent"));
      if (path.node.alternate) {
        pending.push(path.get("alternate"));
      }
    } else if (path.isLogicalExpression()) {
      if (path.node.operator !== "&&") {
        pending.push(path.get("left"));
      }
      pending.push(path.get("right"));
    } else if (path.isAssignmentExpression()) {
      pending.push(path.get("right"));
    } else if (path.isIdentifier()) {
      const binding = path.scope.getBinding(path.node.name);
      if (!binding) continue;

      if (binding.kind === "module") {
        if (!t.isImportDefaultSpecifier(binding.path.node)) continue;
        const decl = binding.path.parent as t.ImportDeclaration;
        const lazy = !!decl.extra?.loadImport;
        const request = getTemplateImportRequest(decl, lazy);
        const into = lazy ? (loadImports ||= []) : (imports ||= []);
        if (
          request &&
          !into.includes(request) &&
          isTagsTemplate(file, request)
        ) {
          into.push(request);
        }
        continue;
      }

      const bindingTag = binding.path as t.NodePath<t.MarkoTag>;
      if (
        bindingTag.isMarkoTag() &&
        (binding.kind as typeof binding.kind & "local") === "local" &&
        (bindingTag.get("name").node as t.StringLiteral).value === "const" &&
        !followed.has(bindingTag)
      ) {
        followed.add(bindingTag);
        pending.push(
          (bindingTag.get("attributes")[0] as t.NodePath<t.MarkoAttribute>).get(
            "value",
          ),
        );
      }
    }
  }

  return [imports, loadImports] as const;
}

// Collects imported templates escaping as runtime values (reachable by dynamic
// tags unseen above); each gets a deferred `?persisted` loader registered.
export function getEscapedTemplateImports(program: t.NodePath<t.Program>) {
  const { file } = program.hub;
  let imports: string[] | undefined;
  for (const statement of program.get("body")) {
    if (!statement.isImportDeclaration()) continue;
    const decl = statement.node;
    const request = getTemplateImportRequest(decl);
    if (!request) continue;
    const specifier = decl.specifiers.find(t.isImportDefaultSpecifier);
    const binding = specifier && program.scope.getBinding(specifier.local.name);
    if (!binding?.referencePaths.some((ref) => isEscapedTemplateRef(ref))) {
      continue;
    }
    if (isTagsTemplate(file, request)) {
      (imports ||= []).push(request);
    }
  }
  return imports;
}

// A `load=` import pairs its `?persisted` entry through its ready channel, so
// only plain `.marko` default imports resolve to candidate requests.
function getTemplateImportRequest(decl: t.ImportDeclaration, load = false) {
  if (!!decl.extra?.loadImport !== load) return;
  const request = decl.extra?.tagImport || decl.source.value;
  if (request.endsWith(".marko")) return request;
}

// Class renderers dispatch through the interop layer, never a compiled merge.
function isTagsTemplate(file: t.BabelFile, request: string) {
  const childFile = loadFileForImport(file, request);
  return !!childFile && childFile.ast.program.extra.featureType !== "class";
}

// A reference is consumed only when every step up to a tag name is a chain the
// candidate analysis follows; anything less certain counts as an escape.
function isEscapedTemplateRef(
  ref: t.NodePath,
  followedVars = new Set<t.Node>(),
): boolean {
  let path = ref;
  for (;;) {
    const parent = path.parentPath;
    if (!parent) return true;
    if (parent.isMarkoTag()) {
      return path.node !== parent.node.name;
    }
    if (
      (parent.isConditionalExpression() && path.key !== "test") ||
      (parent.isLogicalExpression() &&
        (path.key === "right" || parent.node.operator !== "&&")) ||
      (parent.isAssignmentExpression() && path.key === "right")
    ) {
      path = parent;
      continue;
    }
    if (parent.isMarkoAttribute() && path.key === "value") {
      const tag = parent.parentPath as t.NodePath<t.MarkoTag>;
      const tagVar = tag.node.var;
      if (
        (tag.node.name as t.StringLiteral).value === "const" &&
        parent.node === tag.node.attributes[0] &&
        t.isIdentifier(tagVar) &&
        !followedVars.has(tag.node)
      ) {
        followedVars.add(tag.node);
        const varBinding = parent.scope.getBinding(tagVar.name);
        return (
          !varBinding ||
          varBinding.referencePaths.some((varRef) =>
            isEscapedTemplateRef(varRef, followedVars),
          )
        );
      }
    }
    return true;
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
