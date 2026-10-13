import path from "path";

import { types as t } from "@marko/compiler";
import {
  assertAttributesOrSingleArg,
  getFile,
  getProgram,
  getTagTemplate,
  importDefault,
  importNamed,
  loadFileForTag,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import type { LoadTrigger } from "../../../html/assets";
import { type Binding } from "../../util/bindings";
import { BindingType, createBinding } from "../../util/bindings";
import { generateUidIdentifier, getSharedUid } from "../../util/generate-uid";
import { getStaticTagName, getTagName } from "../../util/get-tag-name";
import {
  knownTagAnalyze,
  knownTagTranslateDOM,
  knownTagTranslateHTML,
} from "../../util/known-tag";
import { getMarkoOpts, isOutputHTML } from "../../util/marko-config";
import {
  callRuntime,
  dynamicImport,
  importRuntimeFeature,
} from "../../util/runtime";
import {
  createScopeReadExpression,
  scopeIdentifier,
} from "../../util/scope-read";
import {
  getOrCreateSection,
  removePrunedContent,
  StructureKind,
} from "../../util/sections";
import { addStatement, getSignal } from "../../util/signals";
import { createProgramState } from "../../util/state";
import * as structure from "../../util/structure";
import {
  importOrSelfReferenceName,
  isCircularRequest,
  type LoadImportConfig,
} from "../../util/tag-import";
import { getTagRelativePath, tagNotFoundError } from "../../util/tag-name-type";
import type { TemplateVisitor } from "../../util/visitors";
import * as writer from "../../util/writer";

const kLoadTagBinding = Symbol("load tag binding");
// Caches the trigger and attr signal declarations for a load import so they
// are shared by all tags in a template using that import.
const [getLoadIdentifiers] = createProgramState(() => ({
  triggers: new Map<LoadImportConfig, t.Identifier>(),
  signals: new Map<string, t.Identifier>(),
  setups: new Map<string, t.Identifier>(),
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

      if (
        childSection === programSection &&
        getOrCreateSection(tag) === programSection
      ) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            `A template that renders itself outside a branch never terminates. Render \`<${getStaticTagName(tag.node)}>\` inside a branch that eventually stops, such as \`<if>\`.`,
          );
      }

      if (childExtra.page) {
        programExtra.page ??= true;
      }

      if (tagExtra.tagNameLoad) {
        if (tag.node.var) {
          throw tag
            .get("var")
            .buildCodeFrameError(
              `The \`${getStaticTagName(tag.node)}\` tag is lazily loaded, so it does not support a [tag variable](https://markojs.com/docs/reference/language#tag-variables). Remove the variable, or import the tag without \`load\`.`,
            );
        }

        tagExtra[kLoadTagBinding] = createBinding(
          "#text",
          BindingType.dom,
          getOrCreateSection(tag),
        );
      }

      knownTagAnalyze(tag, childSection, childExtra.paramsTree);

      const tagName = getStaticTagName(tag.node);
      if (tagExtra.tagNameLoad) {
        structure.marker(tag, tagExtra[kLoadTagBinding]!);
        structure.child(tag, tagName);
        structure.enterShallow(tag);
      } else {
        structure.child(tag, tagName, {
          kind: StructureKind.ExportRef,
          program: childExtra,
          path: getTagRelativePath(tag),
          hint: tagName,
        });
      }
    },
  },
  translate: {
    enter(tag) {
      removePrunedContent(tag);
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
  let tagIdentifier: t.Expression;
  if (t.isStringLiteral(node.name)) {
    const relativePath = getTagRelativePath(tag);
    tagIdentifier = isCircularRequest(getFile(), relativePath)
      ? t.identifier(getSharedUid("content"))
      : importDefault(getFile(), relativePath, getTagName(tag));
  } else {
    tagIdentifier = node.name;
  }

  knownTagTranslateHTML(tag, tagIdentifier);
}

function translateDOM(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const file = getFile();
  const relativePath = getTagRelativePath(tag);
  const programSection = getProgram().node.extra.section!;
  const childFile = loadFileForTag(tag)!;
  const childExtra = childFile.ast.program.extra;
  const childExports = childExtra.exportNames!;
  const childSection = childExtra.section!;
  const loadConfig = node.extra?.tagNameLoad;
  const isLoad = !!loadConfig;
  const tagName = getStaticTagName(node);

  if (isLoad) {
    const childFileName = childFile.opts.filename;
    const { triggers, signals, setups } = getLoadIdentifiers();
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
      (binding) => {
        const signalKey = `${triggerIdent ? triggerIdent.name : ""}\0${childFileName}\0${childExports.params.get(binding)!}`;
        return (
          signals.get(signalKey) ||
          createLoadIdentifier(
            signals,
            signalKey,
            `load_${tagName}_tag_${binding.name}`,
            "_load_signal",
            buildLoadSignalVirtualModule(
              file,
              childFileName,
              childExports.params.get(binding)!,
              binding.name,
            )!,
            triggerIdent,
          )
        );
      },
      (section, childBinding) => {
        const setupKey = `${triggerIdent ? triggerIdent.name : ""}\0${childFileName}`;
        let setupIdent = setups.get(setupKey);
        if (!setupIdent) {
          importRuntimeFeature("catch");
          setupIdent = createLoadIdentifier(
            setups,
            setupKey,
            `load_${tagName}_setup`,
            "_load_setup",
            buildLoadSetupVirtualModule(file, childFileName, childExports),
            triggerIdent,
          );
        }
        addStatement(
          "render",
          section,
          undefined,
          t.callExpression(setupIdent, [
            scopeIdentifier,
            createScopeReadExpression(childBinding, section),
            createScopeReadExpression(node.extra![kLoadTagBinding]!, section),
          ]),
        );
      },
    );
  } else if (programSection === childSection) {
    knownTagTranslateDOM(
      tag,
      (binding, preferredName) =>
        getSignal(programSection, binding, preferredName).identifier,
      childSection.hasSetupWork
        ? (section, childBinding) => {
            addStatement(
              "render",
              section,
              undefined,
              t.callExpression(t.identifier(childExports.setup), [
                createScopeReadExpression(childBinding, section),
              ]),
            );
          }
        : undefined,
    );
  } else {
    knownTagTranslateDOM(
      tag,
      (binding, preferredName, directContent) =>
        importOrSelfReferenceName(
          getFile(),
          relativePath,
          (directContent && childExports.directContent.get(binding)) ||
            childExports.params.get(binding)!,
          preferredName,
        ),
      childSection.hasSetupWork
        ? (section, childBinding) => {
            addStatement(
              "render",
              section,
              undefined,
              t.callExpression(
                importOrSelfReferenceName(
                  file,
                  relativePath,
                  childExports.setup,
                  tagName,
                ),
                [createScopeReadExpression(childBinding, section)],
              ),
            );
          }
        : undefined,
    );

    // Registered here only so imports land in document order; structure
    // resolution re-resolves them by name from the import cache.
    importNamed(
      file,
      relativePath,
      childExports.template,
      `${tagName}_template`,
    );
    importNamed(file, relativePath, childExports.walks, `${tagName}_walks`);
  }

  tag.remove();
}

// Declares a load import's signal or setup, cached under `key` for every tag
// using it.
function createLoadIdentifier(
  cache: Map<string, t.Identifier>,
  key: string,
  name: string,
  runtime: "_load_signal" | "_load_setup",
  request: string,
  trigger: t.Identifier | undefined,
) {
  const id = generateUidIdentifier(name);
  cache.set(key, id);
  const load = t.arrowFunctionExpression([], dynamicImport(request));
  getProgram().node.body.push(
    t.variableDeclaration("let", [
      t.variableDeclarator(
        id,
        callRuntime(
          runtime,
          trigger
            ? t.addComment(
                t.callExpression(trigger, [load]),
                "leading",
                "@__PURE__",
              )
            : load,
        ),
      ),
    ]),
  );
  return id;
}

function buildLoadSetupVirtualModule(
  file: t.BabelFile,
  childFileName: string,
  childExports: { template: string; walks: string; setup: string },
) {
  const parts = `${childExports.template}, ${childExports.walks}, ${childExports.setup}`;
  return getMarkoOpts().resolveVirtualDependency!(file.opts.filename, {
    virtualPath: `${resolveRelativePath(file, childFileName)}.setup.js`,
    code: `import { ${parts} } from "./${path.basename(childFileName)}"\nexport const _ = [${parts}]`,
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
