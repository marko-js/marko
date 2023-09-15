import { types as t } from "@marko/compiler";
import {
  getTagDef,
  importDefault,
  importNamed,
  loadFileForTag,
  resolveRelativePath,
} from "@marko/babel-utils";
import attrsToObject, { getRenderBodyProp } from "../../util/attrs-to-object";
import translateVar from "../../util/translate-var";
import * as writer from "../../util/writer";
import * as walks from "../../util/walks";
import { isOutputHTML } from "../../util/marko-config";
import { callRuntime } from "../../util/runtime";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  startSection,
} from "../../util/sections";
import trackReferences, { mergeReferences } from "../../util/references";
import {
  addStatement,
  addValue,
  getClosures,
  getResumeRegisterId,
  initValue,
  setForceResumeScope,
  writeHTMLResumeStatements,
} from "../../util/signals";
import {
  ReserveType,
  getScopeAccessorLiteral,
  reserveScope,
} from "../../util/reserve";
import { currentProgramPath, scopeIdentifier } from "../program";
import { createScopeReadExpression } from "../../util/scope-read";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    hasInteractiveChild?: boolean;
  }
}

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      trackReferences(tag);

      const body = tag.get("body");
      if (body.get("body").length) {
        startSection(body);
      }

      if (getTagDef(tag)?.template) {
        reserveScope(
          ReserveType.Visit,
          getOrCreateSection(tag),
          tag.node,
          "#childScope"
        );
      }

      const childFile = loadFileForTag(tag)!;
      const childProgramExtra = childFile?.ast.program.extra;
      const hasInteractiveChild =
        childProgramExtra?.isInteractive ||
        childProgramExtra?.hasInteractiveChild;

      if (hasInteractiveChild) {
        (currentProgramPath.node.extra ?? {}).hasInteractiveChild = true;
      }
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
      // TODO: only if dynamic attributes
      const tagDef = getTagDef(tag);
      const template = tagDef?.template;
      const section = getOrCreateSection(tag);
      if (template) {
        tag.node.extra.attrsReferences = mergeReferences(
          section,
          tag.node.attributes
            .filter((attr) => attr.extra?.valueReferences)
            .map((attr) => [attr.extra, "valueReferences"])
        );
      }
    },
  },
  translate: {
    enter(tag: t.NodePath<t.MarkoTag>) {
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
      t.identifier("_")
    );
  } else {
    tagIdentifier = node.name;
  }

  const tagVar = node.var;
  const attrsObject = attrsToObject(tag, true);
  const renderBodyProp = getRenderBodyProp(attrsObject);

  if (node.extra.tagNameNullable) {
    let renderBodyId: t.Identifier | undefined = undefined;
    let renderTagExpr: t.Expression = callExpression(
      tagIdentifier,
      attrsToObject(tag)
    );

    if (renderBodyProp) {
      renderBodyId = tag.scope.generateUidIdentifier("renderBody");
      const [renderBodyPath] = tag.insertBefore(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            renderBodyId,
            callRuntime(
              "createRenderer",
              t.arrowFunctionExpression(
                renderBodyProp.params.length
                  ? [
                      t.objectPattern([
                        t.objectProperty(
                          t.identifier("value"),
                          t.arrayPattern(renderBodyProp.params)
                        ),
                      ]),
                    ]
                  : [],
                renderBodyProp.body
              )
            )
          ),
        ])
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
          renderBodyId && callStatement(renderBodyId)
        )
      )[0]
      .skip();
  } else if (tagVar) {
    const section = getSection(tag);
    translateVar(
      tag,
      callExpression(
        tagIdentifier,
        attrsObject,
        callRuntime(
          "register",
          callRuntime(
            "createRenderer",
            t.arrowFunctionExpression([], t.blockStatement([]))
          ),
          t.stringLiteral(
            getResumeRegisterId(
              section,
              (node.var as t.Identifier).extra?.reserve
            )
          ),
          getScopeIdIdentifier(section)
        )
      )
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
  const write = writer.writeTo(tag);
  const binding = node.extra.reserve!;
  const { file } = tag.hub;
  const tagName = (node.name as t.StringLiteral).value;
  const relativePath = getTagRelativePath(tag);
  const childFile = loadFileForTag(tag)!;
  const childProgram = childFile.ast.program;
  const tagIdentifier = importNamed(file, relativePath, "setup", tagName);
  let tagAttrsIdentifier: t.Identifier | undefined;
  if (childProgram.extra.attrs) {
    tagAttrsIdentifier = importNamed(
      file,
      relativePath,
      "attrs",
      `${tagName}_attrs`
    );
  }
  write`${importNamed(file, relativePath, "template", `${tagName}_template`)}`;
  walks.injectWalks(
    tag,
    importNamed(file, relativePath, "walks", `${tagName}_walks`)
  );

  if (childProgram.extra.closures) {
    getClosures(tagSection).push(
      callRuntime(
        "childClosures",
        importNamed(file, relativePath, "closures", `${tagName}_closures`),
        getScopeAccessorLiteral(binding)
      )
    );
  }

  let attrsObject = attrsToObject(tag);

  if (tagBodySection !== tagSection) {
    attrsObject ??= t.objectExpression([]);
    (attrsObject as t.ObjectExpression).properties.push(
      t.objectProperty(
        t.identifier("renderBody"),
        callRuntime(
          "bindRenderer",
          scopeIdentifier,
          writer.getRenderer(tagBodySection)
        )
      )
    );
  }

  if (node.var) {
    const source = initValue(
      // TODO: support destructuring
      (node.var as t.Identifier).extra.reserve!
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
          getScopeAccessorLiteral(binding),
          source.identifier
        )
      )
    );
  }
  addStatement(
    "render",
    tagSection,
    undefined,
    t.expressionStatement(
      t.callExpression(tagIdentifier, [
        createScopeReadExpression(tagSection, binding),
      ])
    )
  );
  if (attrsObject && tagAttrsIdentifier) {
    addValue(
      tagSection,
      tag.node.extra.attrsReferences,
      {
        identifier: tagAttrsIdentifier,
        hasDownstreamIntersections: () => true,
      },
      attrsObject,
      createScopeReadExpression(tagSection, binding),
      callRuntime(
        "inChild",
        getScopeAccessorLiteral(binding),
        t.identifier(tagAttrsIdentifier.name)
      )
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
    const tagDef = getTagDef(tag);
    const template = tagDef?.template;
    relativePath = template && resolveRelativePath(file, template);
  }

  if (!relativePath) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `Unable to find entry point for custom tag <${
          nameIsString ? (node.name as t.StringLiteral).value : node.name
        }>.`
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
