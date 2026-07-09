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
import path from "path";

import { WalkCode } from "../../../common/types";
import type { LoadTrigger } from "../../../html/assets";
import { getBindingPropTree } from "../../util/binding-prop-tree";
import { generateUidIdentifier } from "../../util/generate-uid";
import { getTagName } from "../../util/get-tag-name";
import {
  getKnownTagChildScopeBinding,
  isKnownTagChildUpdateGeneric,
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
  isUpdateEntryBuild,
} from "../../util/marko-config";
import type { Binding } from "../../util/references";
import {
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
} from "../../util/references";
import { callRuntime } from "../../util/runtime";
import { createScopeReadExpression } from "../../util/scope-read";
import { getOrCreateSection, getSection } from "../../util/sections";
import { addSetupStatement } from "../../util/setup-statements";
import { addStatement, getSignal } from "../../util/signals";
import { createProgramState } from "../../util/state";
import { addUpdateMerge } from "../../util/update-merges";
import type { TemplateVisitor } from "../../util/visitors";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import type { LoadImportConfig } from "../import-declaration";
import { scopeIdentifier } from "../program";
import { getTemplateContentName } from "../program/html";

const kLoadTagBinding = Symbol("load tag binding");
// Caches the trigger and attr signal declarations for a load import so they
// are shared by all tags in a template using that import.
const [getLoadIdentifiers] = createProgramState(() => ({
  triggers: new Map<LoadImportConfig, t.Identifier>(),
  signals: new Map<string, t.Identifier>(),
}));

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kLoadTagBinding]?: Binding;
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

      if (childExtra.page) {
        programExtra.page ??= true;
      }

      if (tagExtra.tagNameLoad) {
        tagExtra[kLoadTagBinding] = createBinding(
          "#text",
          BindingType.dom,
          getOrCreateSection(tag),
        );
      }

      if (tagExtra.tagNameLoad || !childExtra.domExports?.setupEmpty) {
        // The child's setup call lands in this section's setup unless the
        // child template proved its setup export is a noop (a mid analysis
        // child, eg a circular reference, has no flag yet and is assumed to
        // have a setup). Load tags always wire up `_load_setup`.
        addSetupStatement(getOrCreateSection(tag));
      }

      knownTagAnalyze(
        tag,
        childSection,
        programSection === childSection
          ? programSection.params && getBindingPropTree(programSection.params)
          : childExtra.domExports?.params,
        // Final for a fully-analyzed child (the flag is set once at its
        // program exit); a mid-analysis circular child has no flag yet and
        // reads as non-generic on every pass, so all consumers agree.
        childExtra.domExports?.updateGeneric,
      );
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

  knownTagTranslateHTML(
    tag,
    tagIdentifier,
    childExtra.section!,
    childExtra.domExports?.params,
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
    // Persisted dispatch for a lazy child: the child's `?update` merge
    // module rides its lazy chunks (the load-entry wrapper and the setup
    // virtual module below import it), registering under an id BOTH
    // compiles derive as a compile constant — the child's template id plus
    // its root section's `update` key, the same recipe the child's own
    // `?update` entry registers with (`getResumeRegisterId(rootSection,
    // "update")` in program/update.ts). The parent's update entry
    // dispatches through `_update_load`, which merges when the module has
    // registered and parks the patch until it loads (see dom/update.ts).
    // The `?update` entry additionally records the child's asset/ready id
    // with a trigger-gated loader for the setup virtual module, registered
    // client-side under that id (`_load_ready`): a persisted update that
    // delivers this child's server-rendered markup inside a fragment fires
    // it to start the load, and the parked keyed resume batch replays when
    // the load declares ready -- the data-driven stand-in for the trigger
    // script a document render injects.
    recordChildUpdateMerge(
      tag,
      relativePath,
      tagName,
      getTemplateId(getMarkoOpts(), childFileName, `${childSection.id}_update`),
      isUpdateEntryBuild()
        ? buildLoadReadyConfig(file, childFile, childExports, loadConfig)
        : undefined,
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

    write`<!>`;
    walks.visit(tag, WalkCode.Replace);
    walks.injectWalks(tag, tagName);
    walks.enterShallow(tag);
  } else if (programSection === childSection) {
    recordChildUpdateMerge(tag, relativePath, tagName);
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

    write`${t.identifier(childExports.template)}`;
    walks.injectWalks(tag, tagName, t.identifier(childExports.walks));
  } else {
    recordChildUpdateMerge(tag, relativePath, tagName);
    const importPath = getChildImportPath(file, relativePath);
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

    write`${importNamed(file, importPath, childExports.template, `${tagName}_template`)}`;
    walks.injectWalks(
      tag,
      tagName,
      importNamed(file, importPath, childExports.walks, `${tagName}_walks`),
    );
  }

  tag.remove();
}

// Persisted entry builds reference child template render graphs (template,
// walks, setup, value setters) from the child's own `?persisted` entry: the
// graphs exist for persisted updates, which only run once the `?update`/
// `?persisted` chunk loads, and importing them from the child's main module
// would pin every child's otherwise tree-shakeable render graph into the
// eager hydration chunks. Circular (self) references keep the plain path so
// they stay local identifiers.
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
    const template =
      (node.extra?.featureType === "class" && getTagDef(tag)?.renderer) ||
      getTagTemplate(tag);
    relativePath = template && resolveRelativePath(file, template);
  } else if (node.extra?.tagNameImported) {
    relativePath = node.extra.tagNameImported;
  }

  if (!relativePath) throw tagNotFoundError(tag);

  return relativePath;
}

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
  if (tagName) {
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

function buildLoadSetupVirtualModule(
  file: t.BabelFile,
  childFileName: string,
  childExports: { template: string; walks: string; setup: string },
) {
  const parts = `${childExports.template}, ${childExports.walks}, ${childExports.setup}`;
  // Persisted builds bundle the child's `?update` merge module into the
  // lazy chunk (a bare import — registration side effect only) so a
  // CSR-created lazy child can receive persisted update merges the moment
  // it loads; see `_update_load` in dom/update.ts and the matching import
  // in the load-entry wrapper (program/index.ts).
  const updateImport = isPersisted()
    ? `\nimport "./${path.basename(childFileName)}?update"`
    : "";
  return getMarkoOpts().resolveVirtualDependency!(file.opts.filename, {
    virtualPath: `${resolveRelativePath(file, childFileName)}.setup.js`,
    code: `import { ${parts} } from "./${path.basename(childFileName)}"${updateImport}\nexport const _ = [${parts}]`,
  })!;
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

// Update entries dispatch the child template's own merge function
// (`<tag>.marko?update` default export) for serialized child scopes --
// unless the child proved that module would be the bare generic
// interpreter (`updateGeneric`), in which case the dispatch inlines
// `_update_scope` and the module is never imported or built.
function recordChildUpdateMerge(
  tag: t.NodePath<t.MarkoTag>,
  relativePath: string,
  tagName: string,
  loadId?: string,
  loadReady?: { id: string; loadExpr: t.Expression },
) {
  const childScopeBinding = getKnownTagChildScopeBinding(tag);
  if (childScopeBinding) {
    addUpdateMerge(getSection(tag), {
      kind: "child",
      accessor: getScopeAccessorLiteral(childScopeBinding),
      relativePath,
      tagName,
      generic: !loadId && isKnownTagChildUpdateGeneric(tag),
      load: loadId,
      loadReady,
    });
  }
}

// The `loadReady` half of a lazy child's merge record (see
// `recordChildUpdateMerge` / update-merges.ts): the child's asset/ready id
// plus a standalone trigger-gated loader expression for its setup virtual
// module -- standalone because the update entry's program body keeps only
// imports and the statements program/update.ts assembles, so the shared
// trigger consts the main compile declares are unavailable there.
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
