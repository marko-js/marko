import { types as t } from "@marko/compiler";
import {
  getTagDef,
  importNamed,
  importDefault,
  resolveRelativePath,
  loadFileForTag,
} from "@marko/babel-utils";
import attrsToObject, { getRenderBodyProp } from "../../util/attrs-to-object";
import translateVar from "../../util/translate-var";
import * as writer from "../../util/writer";
import * as walks from "../../util/walks";
import { isOutputHTML } from "../../util/marko-config";
import { callRuntime, callRead } from "../../util/runtime";
import {
  startSection,
  getSectionId,
  getOrCreateSectionId,
  getScopeIdentifier,
} from "../../util/sections";
import trackReferences, {
  mergeReferenceGroups,
  ReferenceGroup,
} from "../../util/references";
import {
  addStatement,
  getClosures,
  getHydrateRegisterId,
  getSignal,
  initSource,
  setForceHydrateScope,
  writeHTMLHydrateStatements,
} from "../../util/signals";
import { getNodeLiteral, reserveScope, ReserveType } from "../../util/reserve";
import { currentProgramPath, scopeIdentifier } from "../program";

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
          getOrCreateSectionId(tag),
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
      const sectionId = getOrCreateSectionId(tag);
      if (template) {
        tag.node.extra.attrsReferences = mergeReferenceGroups(
          sectionId,
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
  writeHTMLHydrateStatements(tagBody);

  if (t.isStringLiteral(node.name)) {
    const { file } = tag.hub;
    const tagName = node.name.value;
    const relativePath = getTagRelativePath(tag);

    tagIdentifier = importDefault(file, relativePath, tagName);
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
        t.functionDeclaration(
          renderBodyId,
          renderBodyProp.params,
          renderBodyProp.body
        )
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
    const sectionId = getSectionId(tag);
    translateVar(
      tag,
      callExpression(
        tagIdentifier,
        attrsObject,
        callRuntime(
          "register",
          t.arrowFunctionExpression([], t.blockStatement([])),
          t.stringLiteral(
            getHydrateRegisterId(
              sectionId,
              (node.var as t.Identifier).extra?.reserve
            )
          ),
          getScopeIdentifier(sectionId)
        )
      )
    );
    setForceHydrateScope(sectionId);
    tag.remove();
  } else {
    tag.replaceWith(callStatement(tagIdentifier, attrsObject))[0].skip();
  }
}

function translateDOM(tag: t.NodePath<t.MarkoTag>) {
  const tagSectionId = getSectionId(tag);
  const tagBody = tag.get("body");
  const tagBodySectionId = getSectionId(tagBody);
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
    getClosures(tagSectionId).push(
      callRuntime(
        "inChildMany",
        importNamed(file, relativePath, "closures", `${tagName}_closures`),
        getNodeLiteral(binding)
      )
    );
  }

  let attrsObject = attrsToObject(tag);

  if (tagBodySectionId !== tagSectionId) {
    attrsObject ??= t.objectExpression([]);
    (attrsObject as t.ObjectExpression).properties.push(
      t.objectProperty(
        t.identifier("renderBody"),
        callRuntime(
          "bindRenderer",
          scopeIdentifier,
          writer.getRenderer(tagBodySectionId)
        )
      )
    );
  }

  if (node.var) {
    const source = initSource(
      // TODO: support destructuring
      (node.var as t.Identifier).extra.reserve!
    );
    source.register = true;
    addStatement(
      "apply",
      tagSectionId,
      undefined,
      t.expressionStatement(
        callRuntime(
          "setTagVar",
          scopeIdentifier,
          getNodeLiteral(binding),
          source.identifier
        )
      )
    );
  }
  addStatement(
    "apply",
    tagSectionId,
    undefined,
    t.expressionStatement(
      t.callExpression(tagIdentifier, [callRead(binding, tagSectionId)])
    )
  );
  if (attrsObject && tagAttrsIdentifier) {
    let attrsSubscriber: t.CallExpression | t.Identifier = callRuntime(
      "inChild",
      tagAttrsIdentifier,
      getNodeLiteral(binding)
    );

    if (!tag.node.extra.attrsReferences.references) {
      // hoist out the call to `inChild` if it's going into the setup function
      const tagAttrsIdentifierInChild =
        currentProgramPath.scope.generateUidIdentifier(
          `${tagName}_attrs_inChild`
        );
      currentProgramPath.pushContainer(
        "body",
        t.variableDeclaration("const", [
          t.variableDeclarator(tagAttrsIdentifierInChild, attrsSubscriber),
        ])
      );
      attrsSubscriber = tagAttrsIdentifierInChild;
    }

    getSignal(
      tagSectionId,
      (tag.node.extra.attrsReferences as ReferenceGroup).references
    ).subscribers.push(attrsSubscriber);
    addStatement(
      "apply",
      tagSectionId,
      tag.node.extra.attrsReferences,
      t.expressionStatement(
        callRuntime(
          "setSource",
          callRead(binding, tagSectionId),
          t.identifier(tagAttrsIdentifier.name),
          attrsObject
        )
      )
    );
  }
  tag.remove();
}

function getTagRelativePath(tag: t.NodePath<t.MarkoTag>) {
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

  const tags = file.metadata.marko.tags;
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
