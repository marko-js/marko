import {
  assertAttributesOrSingleArg,
  getTagTemplate,
  importDefault,
  importNamed,
  loadFileForTag,
  resolveRelativePath,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import attrsToObject, { getRenderBodyProp } from "../../util/attrs-to-object";
import { isOutputHTML } from "../../util/marko-config";
import {
  createBinding,
  trackVarReferences,
  trackParamsReferences,
  getScopeAccessorLiteral,
  type Binding,
  BindingType,
  mergeReferences,
} from "../../util/references";
import { callRuntime } from "../../util/runtime";
import { createScopeReadExpression } from "../../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  startSection,
} from "../../util/sections";
import {
  addStatement,
  addValue,
  getResumeRegisterId,
  getSerializedScopeProperties,
  initValue,
  setForceResumeScope,
  writeHTMLResumeStatements,
} from "../../util/signals";
import translateVar from "../../util/translate-var";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { currentProgramPath, scopeIdentifier } from "../program";

const kChildScopeBinding = Symbol("custom tag child scope");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kChildScopeBinding]?: Binding;
  }
}

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      const section = getOrCreateSection(tag);
      const tagBody = tag.get("body");

      startSection(tagBody);
      trackVarReferences(tag, BindingType.derived);
      trackParamsReferences(tagBody, BindingType.param);

      if (getTagTemplate(tag)) {
        const tagExtra = (tag.node.extra ??= {});
        tagExtra[kChildScopeBinding] = createBinding(
          "#childScope",
          BindingType.dom,
          section,
          undefined,
          tagExtra,
        );
      }

      const childFile = loadFileForTag(tag)!;
      const childProgramExtra = childFile?.ast.program.extra;
      const hasInteractiveChild =
        childProgramExtra?.isInteractive ||
        childProgramExtra?.hasInteractiveChild;

      // TODO: only if dynamic attributes
      mergeReferences(
        tag,
        tag.node.attributes.map((attr) => attr.value),
      );

      if (hasInteractiveChild) {
        (currentProgramPath.node.extra ?? {}).hasInteractiveChild = true;
        // TODO: should check individual inputs to see if they are intersecting with state
      }
    },
  },
  translate: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      assertAttributesOrSingleArg(tag);
      walks.visit(tag);
      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
      if (isOutputHTML()) {
        translateHTML(tag);
      } else {
        translateDOM(tag);
      }
    },
  },
};

function translateHTML(tag: t.NodePath<t.MarkoTag>) {
  const tagBody = tag.get("body");
  const { node } = tag;
  let tagIdentifier: t.Expression;

  writer.flushInto(tag);
  writeHTMLResumeStatements(tagBody);

  if (t.isStringLiteral(node.name)) {
    const { file } = tag.hub;
    const tagName = node.name.value;
    const relativePath = getTagRelativePath(tag);

    tagIdentifier = t.memberExpression(
      importDefault(file, relativePath, tagName),
      t.identifier("_"),
    );
  } else {
    tagIdentifier = t.memberExpression(node.name, t.identifier("_"));
  }

  const tagVar = node.var;
  const attrsObject = attrsToObject(tag, true);
  const renderBodyProp = getRenderBodyProp(attrsObject);
  const section = getSection(tag);
  const childScopeBinding = node.extra![kChildScopeBinding]!;
  const peekScopeId = tag.scope.generateUidIdentifier(childScopeBinding?.name);
  tag.insertBefore(
    t.variableDeclaration("const", [
      t.variableDeclarator(peekScopeId, callRuntime("peekSerializedScope")),
    ]),
  );

  getSerializedScopeProperties(section).set(
    getScopeAccessorLiteral(childScopeBinding),
    peekScopeId,
  );

  if (node.extra!.tagNameNullable) {
    let renderBodyId: t.Identifier | undefined = undefined;
    let renderTagExpr: t.Expression = callExpression(
      tagIdentifier,
      attrsToObject(tag),
    );

    if (renderBodyProp) {
      const renderBodySection = getSection(tag.get("body"));
      renderBodyId = tag.scope.generateUidIdentifier("renderBody");
      const [renderBodyPath] = tag.insertBefore(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            renderBodyId,
            // TODO: only register if needed (child template analysis)
            callRuntime(
              "register",
              callRuntime(
                "createRenderer",
                t.arrowFunctionExpression(
                  renderBodyProp.params,
                  renderBodyProp.body,
                ),
              ),
              t.stringLiteral(
                getResumeRegisterId(renderBodySection, "renderer"),
              ),
              getScopeIdIdentifier(section),
            ),
          ),
        ]),
      );

      renderBodyPath.skip();

      (attrsObject as t.ObjectExpression).properties[
        (attrsObject as t.ObjectExpression).properties.length - 1
      ] = t.objectProperty(t.identifier("renderBody"), renderBodyId);
    }

    if (tagVar) {
      translateVar(tag, t.unaryExpression("void", t.numericLiteral(0)), "let");
      renderTagExpr = t.assignmentExpression("=", tagVar, renderTagExpr);
    }

    tag
      .replaceWith(
        t.ifStatement(
          tagIdentifier,
          t.expressionStatement(renderTagExpr),
          renderBodyId && callStatement(renderBodyId),
        ),
      )[0]
      .skip();
  } else if (tagVar) {
    translateVar(
      tag,
      callExpression(
        tagIdentifier,
        attrsObject,
        callRuntime(
          "register",
          callRuntime(
            "createRenderer",
            t.arrowFunctionExpression([], t.blockStatement([])),
          ),
          t.stringLiteral(
            getResumeRegisterId(
              section,
              (node.var as t.Identifier).extra?.binding, // TODO: node.var is not always an identifier.
            ),
          ),
          getScopeIdIdentifier(section),
        ),
      ),
    );
    setForceResumeScope(section);
    tag.remove();
  } else {
    tag.replaceWith(callStatement(tagIdentifier, attrsObject))[0].skip();
  }
}

function translateDOM(tag: t.NodePath<t.MarkoTag>) {
  const tagSection = getSection(tag);
  const tagBody = tag.get("body");
  const tagBodySection = getSection(tagBody);
  const { node } = tag;
  const extra = node.extra!;
  const childScopeBinding = extra[kChildScopeBinding]!;
  const write = writer.writeTo(tag);
  const { file } = tag.hub;
  const tagName = t.isIdentifier(node.name)
    ? node.name.name
    : (node.name as t.StringLiteral).value;
  const relativePath = getTagRelativePath(tag);
  const childFile = loadFileForTag(tag)!;
  const childProgram = childFile.ast.program;
  const tagIdentifier = importNamed(file, relativePath, "setup", tagName);
  let tagAttrsIdentifier: t.Identifier | undefined;
  if (childProgram.params[0].extra?.binding?.downstreamExpressions.size) {
    tagAttrsIdentifier = importNamed(
      file,
      relativePath,
      "args",
      `${tagName}_args`,
    );
  }
  write`${importNamed(file, relativePath, "template", `${tagName}_template`)}`;
  walks.injectWalks(
    tag,
    importNamed(file, relativePath, "walks", `${tagName}_walks`),
  );

  let attrsObject = attrsToObject(tag); // TODO: need to build each attribute individually

  if (tagBodySection !== tagSection) {
    attrsObject ??= t.objectExpression([]);
    (attrsObject as t.ObjectExpression).properties.push(
      t.objectProperty(
        t.identifier("renderBody"),
        callRuntime(
          "bindRenderer",
          scopeIdentifier,
          writer.getRenderer(tagBodySection),
        ),
      ),
    );
  }

  if (node.var) {
    const source = initValue(
      // TODO: support destructuring
      node.var.extra!.binding!,
    );
    source.register = true;
    addStatement(
      "render",
      tagSection,
      undefined,
      t.expressionStatement(
        callRuntime(
          "setTagVar",
          scopeIdentifier,
          getScopeAccessorLiteral(childScopeBinding),
          source.identifier,
        ),
      ),
    );
  }
  addStatement(
    "render",
    tagSection,
    undefined,
    t.expressionStatement(
      t.callExpression(tagIdentifier, [
        createScopeReadExpression(tagSection, childScopeBinding),
      ]),
    ),
  );
  if (attrsObject && tagAttrsIdentifier) {
    addValue(
      tagSection,
      extra.referencedBindings,
      {
        identifier: tagAttrsIdentifier,
        hasDownstreamIntersections: () => true,
      },
      t.arrayExpression([attrsObject]),
      createScopeReadExpression(tagSection, childScopeBinding),
      callRuntime(
        "inChild",
        getScopeAccessorLiteral(childScopeBinding),
        t.identifier(tagAttrsIdentifier.name),
      ),
    );
  }
  tag.remove();
}

export function getTagRelativePath(tag: t.NodePath<t.MarkoTag>) {
  const {
    node,
    hub: { file },
  } = tag;
  const nameIsString = t.isStringLiteral(node.name);
  let relativePath: string | undefined;

  if (nameIsString) {
    const template = getTagTemplate(tag);
    relativePath = template && resolveRelativePath(file, template);
  } else if (node.extra?.tagNameImported) {
    relativePath = node.extra.tagNameImported;
  }

  if (!relativePath) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `Unable to find entry point for custom tag <${
          nameIsString ? (node.name as t.StringLiteral).value : node.name
        }>.`,
      );
  }

  const tags = file.metadata.marko.tags!;
  if (!tags.includes(relativePath)) {
    tags.push(relativePath);
  }

  return relativePath;
}

function callStatement(
  id: t.Expression,
  ...args: Array<t.Expression | undefined>
) {
  return t.expressionStatement(callExpression(id, ...args));
}

function callExpression(
  id: t.Expression,
  ...args: Array<t.Expression | undefined>
) {
  return t.callExpression(id, args.filter(Boolean) as t.Expression[]);
}
