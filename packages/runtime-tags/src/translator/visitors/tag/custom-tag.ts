import path from "path";

import { types as t } from "@marko/compiler";
import {
  assertAttributesOrSingleArg,
  getProgram,
  getTagDef,
  getTaglibLookup,
  getTagTemplate,
  getTemplateId,
  importDefault,
  importNamed,
  loadFileForTag,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";
import { closest, distance } from "fastest-levenshtein";

import { WalkCode } from "../../../common/types";
import type { LoadTrigger } from "../../../html/assets";
import { getBindingPropTree } from "../../util/binding-prop-tree";
import { addConstructFragment } from "../../util/construct-pass";
import { generateUidIdentifier } from "../../util/generate-uid";
import { getTagName } from "../../util/get-tag-name";
import {
  getKnownTagChildScopeBinding,
  knownTagAnalyze,
  knownTagTranslateDOM,
  knownTagTranslateHTML,
} from "../../util/known-tag";
import {
  getMarkoOpts,
  getReadyId,
  isOutputHTML,
  isPersisted,
  isPersistedEntryBuild,
} from "../../util/marko-config";
import {
  addChildTree,
  isChildTreeLive,
  isMembraneLive,
} from "../../util/membranes";
import {
  PRELIMINARY_PLAN_VERSION,
  type PreliminaryPlan,
} from "../../util/preliminary-plan";
import type { Binding } from "../../util/references";
import {
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
} from "../../util/references";
import { callRuntime } from "../../util/runtime";
import { createScopeReadExpression } from "../../util/scope-read";
import {
  addComposedShellSection,
  getOrCreateSection,
  getSection,
} from "../../util/sections";
import { addSetupStatement } from "../../util/setup-statements";
import {
  addStatement,
  buildResumeRegisterKey,
  getSignal,
} from "../../util/signals";
import { createProgramState } from "../../util/state";
import { addUpdateMerge } from "../../util/update-merges";
import {
  recordPlanImport,
  recordPlanVirtual,
} from "../../util/update-plan-records";
import type { TemplateVisitor } from "../../util/visitors";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import type { LoadImportConfig } from "../import-declaration";
import { scopeIdentifier } from "../program";
import { getTemplateContentName } from "../program/html";
import { withChildTemplateId } from "../program/renderers";
import {
  buildFingerprintFields,
  GENERATED_STATEMENT_LINE,
} from "../program/update-plan";

const kLoadTagBinding = Symbol("load tag binding");
const kRegionAnchorBinding = Symbol("region anchor binding");
// Caches the trigger and attr signal declarations for a load import so they
// are shared by all tags in a template using that import.
const [getLoadIdentifiers] = createProgramState(() => ({
  triggers: new Map<LoadImportConfig, t.Identifier>(),
  signals: new Map<string, t.Identifier>(),
}));

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kLoadTagBinding]?: Binding;
    [kRegionAnchorBinding]?: Binding;
  }
}

export default {
  analyze: {
    enter(tag) {
      const templateFile = getTagTemplate(tag);

      if (!templateFile) throw tagNotFoundError(tag);

      assertAttributesOrSingleArg(tag);

      const childFile = loadFileForTag(tag);

      if (!childFile) {
        throw tag
          .get("name")
          .buildCodeFrameError("Unable to resolve file for tag.");
      }

      const tagExtra = (tag.node.extra ??= {});
      const programExtra = getProgram().node.extra;
      const programSection = programExtra.section!;
      const childProgram = childFile.ast.program;
      const childExtra = childProgram.extra;
      const childSection = childExtra.section!;

      if (isPersisted()) {
        addChildTree(getOrCreateSection(tag), childProgram);
      }

      if (childExtra.page) {
        programExtra.page ??= true;
      }

      // A statically inlined child splices its root template into this
      // section's shell; a load tag constructs from its own. Record the edge
      // rather than the child's frame status — a same-file or cyclic child is
      // still mid-analysis here, so only a later resolve sees the whole graph.
      if (childExtra.section && !tagExtra.tagNameLoad) {
        addComposedShellSection(getOrCreateSection(tag), childExtra.section);
      }

      if (tagExtra.tagNameLoad) {
        tagExtra[kLoadTagBinding] = createBinding(
          "#text",
          BindingType.dom,
          getOrCreateSection(tag),
        );
      }

      if (tagExtra.tagNameLoad || !childExtra.domExports?.setupEmpty) {
        // Add the child's setup call unless it proved its setup export a noop
        // (mid-analysis children assumed to have one); load tags always wire it up.
        addSetupStatement(getOrCreateSection(tag));
      }

      // Statically inlined children ride the parent's composed shell; a
      // load tag's child constructs separately from its own root shell (see
      // `_update_load`), so the parent section stays constructible.

      knownTagAnalyze(
        tag,
        childSection,
        programSection === childSection
          ? programSection.params && getBindingPropTree(programSection.params)
          : childExtra.domExports?.params,
      );

      if (isPersisted() && !tagExtra.tagNameLoad) {
        // A nucleus-free child delivers as region markup; a constructed
        // parent's shell omits that markup, so this `<!>` marker (walked
        // right after the child, where its markup ends) is the region's
        // only stable anchor. Created after `knownTagAnalyze` so its dense
        // walker index follows the child scope's.
        tagExtra[kRegionAnchorBinding] = createBinding(
          "#text",
          BindingType.dom,
          getOrCreateSection(tag),
        );
      }
    },
  },
  translate: {
    enter(tag) {
      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag) {
      if (isOutputHTML()) {
        translateHTML(tag);
      } else {
        translateDOM(tag);
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;

function translateHTML(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const childFile = loadFileForTag(tag)!;
  const childProgram = childFile.ast.program;
  const childExtra = childProgram.extra;
  let tagIdentifier: t.Expression;
  if (t.isStringLiteral(node.name)) {
    const relativePath = getTagRelativePath(tag);
    tagIdentifier = isCircularRequest(tag.hub.file, relativePath)
      ? t.identifier(getTemplateContentName())
      : importDefault(tag.hub.file, relativePath, getTagName(tag));
  } else {
    tagIdentifier = node.name;
  }

  const childScopeBinding = getKnownTagChildScopeBinding(tag);
  knownTagTranslateHTML(
    tag,
    tagIdentifier,
    childExtra.section!,
    childExtra.domExports?.params,
    isPersisted() &&
      !node.var &&
      childScopeBinding &&
      isMembraneLive(getSection(tag)) &&
      !isChildTreeLive(childProgram)
      ? getScopeAccessorLiteral(node.extra![kRegionAnchorBinding]!)
      : undefined,
  );
}

function translateDOM(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const { file } = tag.hub;
  const write = writer.writeTo(tag);
  const relativePath = getTagRelativePath(tag);
  const programSection = getProgram().node.extra.section!;
  const childFile = loadFileForTag(tag)!;
  const childExtra = childFile.ast.program.extra;
  const childExports = childExtra.domExports!;
  const childSection = childExtra.section!;
  const loadConfig = node.extra?.tagNameLoad;
  const isLoad = !!loadConfig;
  const tagName = t.isIdentifier(node.name)
    ? node.name.name
    : t.isStringLiteral(node.name)
      ? node.name.value
      : "tag";

  if (isLoad) {
    const childFileName = childFile.opts.filename;
    recordChildUpdateMerge(
      tag,
      relativePath,
      tagName,
      childExports.update,
      isPersisted()
        ? getTemplateId(
            getMarkoOpts(),
            childFileName,
            buildResumeRegisterKey(childSection, "update"),
          )
        : undefined,
      isPersistedEntryBuild()
        ? buildLoadReadyConfig(file, childFile, childExports, loadConfig)
        : undefined,
      isPersisted()
        ? getScopeAccessorLiteral(node.extra![kLoadTagBinding]!, true)
        : undefined,
      isPersisted() ? childFile.metadata.marko.id : undefined,
    );
    const { triggers, signals } = getLoadIdentifiers();
    let triggerIdent = triggers.get(loadConfig);
    if (!triggerIdent) {
      const triggerExpr = loadTriggersToExpression(loadConfig);
      if (triggerExpr) {
        triggerIdent = generateUidIdentifier(`load_${tagName}_trigger`);
        triggers.set(loadConfig, triggerIdent);
        getProgram().node.body.push(
          t.variableDeclaration("const", [
            t.variableDeclarator(triggerIdent, triggerExpr),
          ]),
        );
      }
    }

    knownTagTranslateDOM(
      tag,
      childExports.params,
      (binding) => {
        const signalKey = `${triggerIdent ? triggerIdent.name : ""}\0${childFileName}\0${binding.export!}`;
        let signalIdent = signals.get(signalKey);
        if (!signalIdent) {
          signalIdent = generateUidIdentifier(
            `load_${tagName}_tag_${binding.name}`,
          );
          signals.set(signalKey, signalIdent);
          const loadExpr = t.arrowFunctionExpression(
            [],
            t.callExpression(t.import(), [
              t.stringLiteral(
                buildLoadSignalVirtualModule(
                  file,
                  childFileName,
                  binding.export!,
                  binding.name,
                )!,
              ),
            ]),
          );
          getProgram().node.body.push(
            t.variableDeclaration("let", [
              t.variableDeclarator(
                signalIdent,
                callRuntime(
                  "_load_signal",
                  triggerIdent
                    ? t.addComment(
                        t.callExpression(triggerIdent, [loadExpr]),
                        "leading",
                        "@__PURE__",
                      )
                    : loadExpr,
                ),
              ),
            ]),
          );
        }
        return signalIdent;
      },
      (section, childBinding) => {
        const setupIdent = generateUidIdentifier(`load_${tagName}_setup`);
        const setupLoadExpr = t.arrowFunctionExpression(
          [],
          t.callExpression(t.import(), [
            t.stringLiteral(
              buildLoadSetupVirtualModule(file, childFileName, childExports),
            ),
          ]),
        );
        getProgram().node.body.push(
          t.variableDeclaration("let", [
            t.variableDeclarator(
              setupIdent,
              callRuntime(
                "_load_setup",
                getScopeAccessorLiteral(node.extra![kLoadTagBinding]!, true),
                getScopeAccessorLiteral(childBinding, true),
                triggerIdent
                  ? t.addComment(
                      t.callExpression(triggerIdent, [setupLoadExpr]),
                      "leading",
                      "@__PURE__",
                    )
                  : setupLoadExpr,
              ),
            ),
          ]),
        );
        addStatement(
          "render",
          section,
          undefined,
          t.expressionStatement(
            t.callExpression(setupIdent, [scopeIdentifier]),
          ),
        );
      },
    );

    walks.visit(tag, WalkCode.Replace);
    walks.injectWalks(tag, tagName);
    walks.enterShallow(tag);
  } else if (programSection === childSection) {
    recordChildUpdateMerge(tag, relativePath, tagName, childExports.update);
    knownTagTranslateDOM(
      tag,
      childExports.params,
      (binding, preferredName) =>
        getSignal(programSection, binding, preferredName).identifier,
      childExports.setupEmpty
        ? undefined
        : (section, childBinding) => {
            addStatement(
              "render",
              section,
              undefined,
              t.expressionStatement(
                t.callExpression(t.identifier(childExports.setup), [
                  createScopeReadExpression(childBinding, section),
                ]),
              ),
            );
          },
    );

    write`${withChildTemplateId(
      t.identifier(childExports.template),
      file.metadata.marko.id,
    )}`;
    walks.injectWalks(
      tag,
      tagName,
      withChildTemplateId(
        t.identifier(childExports.walks),
        file.metadata.marko.id,
      ),
    );
    writeRegionAnchor(tag);
  } else {
    const regionChild = recordChildUpdateMerge(
      tag,
      relativePath,
      tagName,
      childExports.update,
    );
    if (isPersisted() && !regionChild) {
      // Owner-wires the adopted child scope, then recurses into the child
      // template's construct pass (the fills of a live inlined child).
      addConstructFragment(
        getSection(tag),
        "structural",
        t.expressionStatement(
          callRuntime(
            "_construct_child",
            scopeIdentifier,
            getScopeAccessorLiteral(getKnownTagChildScopeBinding(tag)!),
            t.stringLiteral(
              getTemplateId(
                getMarkoOpts(),
                childFile.opts.filename as string,
                buildResumeRegisterKey(childSection, "update"),
              ),
            ),
          ),
        ),
      );
    }
    const importPath = getChildImportPath(file, relativePath);
    if (importPath !== relativePath) {
      // The `?persisted` rewrite marks every consumer import (setup,
      // template, walks, update) as one internalized-child request —
      // census site 35; a conflicting kind assertion would throw.
      recordPlanImport(
        file,
        resolveRelativePath(file, importPath),
        "internalized-child",
      );
    }
    // A nucleus-free child never registers its template id (that absence is
    // the dynamic-tag liveness signal); compose shells by the root update id
    // its renderers entry does register.
    const childShellId =
      !isPersisted() || isChildTreeLive(childFile.ast.program)
        ? childFile.metadata.marko.id
        : getTemplateId(
            getMarkoOpts(),
            childFile.opts.filename as string,
            buildResumeRegisterKey(childSection, "update"),
          );
    knownTagTranslateDOM(
      tag,
      childExports.params,
      (binding, preferredName, directContent) =>
        importOrSelfReferenceName(
          tag.hub.file,
          importPath,
          (directContent && binding.directContentExport) || binding.export!,
          preferredName,
        ),
      childExports.setupEmpty
        ? undefined
        : (section, childBinding) => {
            addStatement(
              "render",
              section,
              undefined,
              t.expressionStatement(
                t.callExpression(
                  importOrSelfReferenceName(
                    file,
                    importPath,
                    childExports.setup,
                    tagName,
                  ),
                  [createScopeReadExpression(childBinding, section)],
                ),
              ),
            );
          },
    );

    write`${withChildTemplateId(
      importNamed(
        file,
        importPath,
        childExports.template,
        `${tagName}_template`,
      ),
      childShellId,
      regionChild,
    )}`;
    walks.injectWalks(
      tag,
      tagName,
      withChildTemplateId(
        importNamed(file, importPath, childExports.walks, `${tagName}_walks`),
        childShellId,
        regionChild,
      ),
    );
    writeRegionAnchor(tag);
  }

  tag.remove();
}

// A region child's rendered markup arrives per response, so construct shells
// carry only this marker as its anchor. Emitted right after the child (where
// its walks end in every variant) and for every non-load child: region-ness
// is not knowable at analyze, and the walker's dense accessor indexes
// require walking every created dom binding.
function writeRegionAnchor(tag: t.NodePath<t.MarkoTag>) {
  if (tag.node.extra?.[kRegionAnchorBinding]) {
    walks.visit(tag, WalkCode.Replace);
    walks.enterShallow(tag);
  }
}

// Keep child render graphs out of eager page chunks; circular references
// stay local to avoid importing the entry from itself.
export function getChildImportPath(file: t.BabelFile, relativePath: string) {
  return isPersistedEntryBuild() &&
    relativePath.endsWith(".marko") &&
    !isCircularRequest(file, relativePath)
    ? `${relativePath}?persisted`
    : relativePath;
}

export function getTagRelativePath(tag: t.NodePath<t.MarkoTag>) {
  const {
    node,
    hub: { file },
  } = tag;
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
]);

function tagNotFoundError(tag: t.NodePath<t.MarkoTag>) {
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
    const closestTag = closest(
      tagName,
      Object.keys((getTaglibLookup(tag.hub.file) as any).merged.tags),
    );
    if (distance(tagName, closestTag) < 4) {
      didYouMean = ` Did you mean \`<${closestTag}>\`?`;
    }
  }
  return tag
    .get("name")
    .buildCodeFrameError(
      `Unable to find entry point for [custom tag](https://markojs.com/docs/reference/custom-tag#relative-custom-tags) \`<${tagName}>\`.${didYouMean}`,
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

function importOrSelfReferenceName(
  file: t.BabelFile,
  request: string,
  name: string,
  nameHint?: string,
): t.Identifier {
  if (isCircularRequest(file, request)) {
    return t.identifier(name);
  }

  return importNamed(file, request, name, nameHint);
}

function isCircularRequest(file: t.BabelFile, request: string) {
  const { filename } = file.opts;
  return (
    request === filename ||
    (request[0] === "." && path.resolve(filename, "..", request) === filename)
  );
}

export function buildLoadSetupVirtualModule(
  file: t.BabelFile,
  childFileName: string,
  childExports: { template: string; walks: string; setup: string },
) {
  const parts = `${childExports.template}, ${childExports.walks}, ${childExports.setup}`;
  const base = path.basename(childFileName);
  const updateImport = isPersisted() ? `\nimport "./${base}?persisted"` : "";
  const virtualId = getMarkoOpts().resolveVirtualDependency!(
    file.opts.filename,
    {
      virtualPath: `${resolveRelativePath(file, childFileName)}.setup.js`,
      code: `import { ${parts} } from "./${base}"${updateImport}\nexport const _ = [${parts}]`,
    },
  )!;
  if (isPersistedEntryBuild()) {
    // The virtual has no translate pass: its sibling mini-plan is recorded
    // at generation, published beside the entry (brief §2e.2); the virtual
    // OWNS the load-edge-child request, the parent owns the demand loader.
    recordPlanVirtual(
      file,
      virtualId,
      buildSetupVirtualPlan(file, virtualId, base, [
        childExports.template,
        childExports.walks,
        childExports.setup,
      ]),
    );
  }
  return virtualId;
}

function buildSetupVirtualPlan(
  file: t.BabelFile,
  virtualId: string,
  base: string,
  names: [string, string, string],
): PreliminaryPlan {
  const plainSpecifier = `./${base}`;
  const persistedSpecifier = `./${base}?persisted`;
  const importText = `import { ${names.join(", ")} } from "${plainSpecifier}"`;
  const persistedText = `import "${persistedSpecifier}"`;
  const exportText = `export const _ = [${names.join(", ")}]`;
  const emptyComments = () => ({ leading: [], internal: [], trailing: [] });
  const generatedOrigin = () => ({
    file: file.opts.filename as string,
    line: GENERATED_STATEMENT_LINE,
    column: GENERATED_STATEMENT_LINE,
  });
  const literalSpan = (text: string, specifier: string) => {
    const start = text.indexOf(`"${specifier}"`);
    return { start, end: start + specifier.length + 2 };
  };
  return {
    schemaVersion: PRELIMINARY_PLAN_VERSION,
    importer: virtualId,
    originFile: file.opts.filename as string,
    fingerprintFields: buildFingerprintFields(file),
    statements: [
      {
        ordinal: 0,
        evalOrdinal: 0,
        kind: "import",
        text: importText,
        nodeOffset: 0,
        spans: tokenSpans(importText, names),
        comments: emptyComments(),
        origin: generatedOrigin(),
      },
      {
        ordinal: 1,
        evalOrdinal: 1,
        kind: "import",
        text: persistedText,
        nodeOffset: 0,
        spans: [],
        comments: emptyComments(),
        origin: generatedOrigin(),
      },
      {
        ordinal: 2,
        evalOrdinal: 2,
        kind: "export-decl",
        text: exportText,
        nodeOffset: 0,
        innerOffset: exportText.indexOf("const"),
        spans: tokenSpans(exportText, ["_", ...names]),
        comments: emptyComments(),
        origin: generatedOrigin(),
      },
    ],
    symbols: {
      ...Object.fromEntries(
        names.map((name) => [
          `%${name}`,
          {
            name,
            kind: "import" as const,
            declKind: "module",
            refCount: 1,
            declOrdinal: 0,
            import: {
              specifier: plainSpecifier,
              imported: name,
              attributes: [],
            },
          },
        ]),
      ),
      "%_": {
        name: "_",
        kind: "local",
        declKind: "const",
        refCount: 0,
        declOrdinal: 2,
      },
    },
    requestedModules: [
      {
        specifier: plainSpecifier,
        attributes: [],
        kind: "external",
        form: "import",
        bare: false,
        ordinal: 0,
        firstOccurrence: true,
        plainTemplate: true,
        span: literalSpan(importText, plainSpecifier),
      },
      {
        specifier: persistedSpecifier,
        attributes: [],
        kind: "load-edge-child",
        form: "import",
        bare: true,
        ordinal: 1,
        firstOccurrence: true,
        plainTemplate: false,
        span: literalSpan(persistedText, persistedSpecifier),
      },
    ],
    exports: [
      { exported: "_", ordinal: 2, target: { kind: "local", symId: "%_" } },
    ],
    loaders: [],
    moduleStateLinks: [],
    eagerCandidates: [],
    // The virtual registers no shells and demands nothing itself.
    shellCapability: { shells: [] },
    shellPossession: { claimable: [], deferred: [] },
  };
}

const VIRTUAL_IDENT_CHAR = /[\p{ID_Continue}$]/u;

function tokenSpans(
  text: string,
  tokens: string[],
): [number, number, string][] {
  const spans: [number, number, string][] = [];
  for (const token of tokens) {
    let index = 0;
    while ((index = text.indexOf(token, index)) !== -1) {
      const end = index + token.length;
      if (
        (index === 0 || !VIRTUAL_IDENT_CHAR.test(text[index - 1])) &&
        (end === text.length || !VIRTUAL_IDENT_CHAR.test(text[end]))
      ) {
        spans.push([index, end, `%${token}`]);
      }
      index = end;
    }
  }
  return spans.sort((a, b) => a[0] - b[0]);
}

function buildLoadSignalVirtualModule(
  file: t.BabelFile,
  childFileName: string,
  childExport: string,
  childBinding: string,
) {
  return getMarkoOpts().resolveVirtualDependency!(file.opts.filename, {
    virtualPath: `${resolveRelativePath(file, childFileName)}.${childBinding}.js`,
    code: `export { ${childExport} as _ } from "./${path.basename(childFileName)}"`,
  });
}

function loadTriggersToExpression(loadConfig: LoadImportConfig | undefined) {
  if (!loadConfig || loadConfig.render) return;

  const triggers = loadConfig.triggers.map(toDOMTriggerExpression);
  return triggers.length === 1
    ? triggers[0]
    : callRuntime("_load_race_trigger", ...triggers);
}

function recordChildUpdateMerge(
  tag: t.NodePath<t.MarkoTag>,
  relativePath: string,
  tagName: string,
  updateName: string,
  loadId?: string,
  loadReady?: { id: string; loadExpr: t.Expression },
  loadMarker?: t.StringLiteral | t.NumericLiteral,
  loadTemplateId?: string,
) {
  const childScopeBinding = getKnownTagChildScopeBinding(tag);
  if (childScopeBinding) {
    const childProgram = loadFileForTag(tag)?.ast.program;
    // A nucleus-free child (no tag variable, not lazily loaded) delivers
    // as region markup; delegation would dispatch an empty update graph.
    const regionChild = !!(
      isPersisted() &&
      !tag.node.var &&
      !loadId &&
      childProgram &&
      !isChildTreeLive(childProgram)
    );
    addUpdateMerge(
      getSection(tag),
      regionChild
        ? {
            kind: "region",
            accessor: getScopeAccessorLiteral(
              tag.node.extra![kRegionAnchorBinding]!,
            ),
          }
        : {
            kind: "child",
            accessor: getScopeAccessorLiteral(childScopeBinding),
            relativePath,
            tagName,
            updateName,
            load: loadId,
            loadReady,
            loadMarker,
            loadTemplateId,
          },
    );
    return regionChild;
  }
}

function buildLoadReadyConfig(
  file: t.BabelFile,
  childFile: t.BabelFile,
  childExports: { template: string; walks: string; setup: string },
  loadConfig: LoadImportConfig | undefined,
) {
  const childFileName = childFile.opts.filename as string;
  const readyId = getReadyId(childFile);
  if (!readyId) return undefined;
  const loadExpr = t.arrowFunctionExpression(
    [],
    t.callExpression(t.import(), [
      t.stringLiteral(
        buildLoadSetupVirtualModule(file, childFileName, childExports),
      ),
    ]),
  );
  const triggerExpr = loadTriggersToExpression(loadConfig);
  return {
    id: readyId,
    loadExpr: triggerExpr
      ? t.callExpression(triggerExpr, [loadExpr])
      : loadExpr,
  };
}

function toDOMTriggerExpression(trigger: LoadTrigger) {
  switch (trigger.type) {
    case "visible":
      return callRuntime(
        "_load_visible_trigger",
        t.stringLiteral(trigger.selector),
        optionalValueToNode(trigger.options),
      );
    case "idle":
      return callRuntime(
        "_load_idle_trigger",
        optionalValueToNode(trigger.options),
      );
    case "media":
      return callRuntime(
        "_load_media_trigger",
        t.stringLiteral(trigger.selector),
      );
    default:
      return callRuntime(
        "_load_event_trigger",
        t.stringLiteral(trigger.type.slice("on-".length)),
        t.stringLiteral(trigger.selector),
      );
  }
}

function optionalValueToNode(value: unknown) {
  return value ? t.valueToNode(value) : undefined;
}
