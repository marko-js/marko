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
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
  mergeReferences,
  trackParamsReferences,
  trackVarReferences,
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
      const inputExport = childProgramExtra?.domExports?.params?.props?.[0];
      // TODO: any properties after a spread could still be optimized
      if (
        !inputExport?.props ||
        tag.node.attributes.find((attr) => t.isMarkoSpreadAttribute(attr))
      ) {
        mergeReferences(
          tag,
          tag.node.attributes.map((attr) => attr.value),
        );
      }

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
      t.variableDeclarator(peekScopeId, callRuntime("peekNextScope")),
    ]),
  );

  getSerializedScopeProperties(section).set(
    getScopeAccessorLiteral(childScopeBinding),
    callRuntime("writeExistingScope", peekScopeId),
  );

  if (node.extra!.tagNameNullable) {
    let renderBodyId: t.Identifier | undefined = undefined;
    let renderTagExpr: t.Expression = callExpression(
      tagIdentifier,
      attrsToObject(tag),
    );

    if (renderBodyProp) {
      renderBodyId = tag.scope.generateUidIdentifier("renderBody");
      const renderBodySection = getSection(tag.get("body"));
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
              renderBodySection.closures.size &&
                getScopeIdIdentifier(renderBodySection.parent!),
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
          t.arrowFunctionExpression([], t.blockStatement([])),
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
    : t.isStringLiteral(node.name)
      ? node.name.value
      : "tag";
  const relativePath = getTagRelativePath(tag);
  const childFile = loadFileForTag(tag)!;
  const childProgram = childFile.ast.program;
  const tagIdentifier = importNamed(
    file,
    relativePath,
    childProgram.extra.domExports!.setup,
    tagName,
  );
  const inputExport = childProgram.extra.domExports!.params?.props?.[0];
  if (inputExport) {
    // TODO: if we made inputExport undefined in the case of the child
    // not using input, we could skip creating an object here
    if (
      !inputExport.props ||
      tag.node.attributes.some((attr) => t.isMarkoSpreadAttribute(attr))
    ) {
      let attrsObject = attrsToObject(tag);

      if (tagBodySection !== tagSection) {
        attrsObject ??= t.objectExpression([]);
        (attrsObject as t.ObjectExpression).properties.push(
          t.objectProperty(
            t.identifier("renderBody"),
            callRuntime(
              "bindRenderer",
              scopeIdentifier,
              t.identifier(tagBodySection.name),
            ),
          ),
        );
      }

      const tagAttrsIdentifier = importNamed(
        file,
        relativePath,
        inputExport.id,
        `${tagName}_input`,
      );

      addValue(
        tagSection,
        extra.referencedBindings,
        {
          identifier: tagAttrsIdentifier,
          hasDownstreamIntersections: () => true,
        },
        attrsObject,
        createScopeReadExpression(tagSection, childScopeBinding),
        callRuntime(
          "inChild",
          getScopeAccessorLiteral(childScopeBinding),
          t.identifier(tagAttrsIdentifier.name),
        ),
      );
    } else {
      // TODO: we must pass undefined in `setup` for
      // attrExports that are not defined by this custom tag
      // TODO: handle attributeTags (<@>)
      for (const attrPath of tag.get(
        "attributes",
      ) as t.NodePath<t.MarkoAttribute>[]) {
        const attr = attrPath.node;
        const attrExport = inputExport.props[attr.name];
        if (attrExport) {
          const attrExportIdentifier = importNamed(
            file,
            relativePath,
            attrExport.id,
            `${tagName}_${attrExport.id}`,
          );
          const attrReferences = attr.value.extra?.referencedBindings;
          addValue(
            tagSection,
            attrReferences,
            {
              identifier: attrExportIdentifier,
              hasDownstreamIntersections: () => true,
            },
            attr.value,
            createScopeReadExpression(tagSection, childScopeBinding),
            callRuntime(
              "inChild",
              getScopeAccessorLiteral(childScopeBinding),
              t.identifier(attrExportIdentifier.name),
            ),
          );
        }
      }
      if (inputExport.props.renderBody && tagBodySection !== tagSection) {
        const renderBodyExportIdentifier = importNamed(
          file,
          relativePath,
          inputExport.props.renderBody.id,
          `${tagName}_renderBody`,
        );
        addValue(
          tagSection,
          undefined,
          {
            identifier: renderBodyExportIdentifier,
            hasDownstreamIntersections: () => true,
          },
          callRuntime(
            "bindRenderer",
            scopeIdentifier,
            t.identifier(tagBodySection.name),
          ),
          createScopeReadExpression(tagSection, childScopeBinding),
          callRuntime(
            "inChild",
            getScopeAccessorLiteral(childScopeBinding),
            t.identifier(renderBodyExportIdentifier.name),
          ),
        );
      }
    }
  }
  write`${importNamed(file, relativePath, childProgram.extra.domExports!.template, `${tagName}_template`)}`;
  walks.injectWalks(
    tag,
    importNamed(
      file,
      relativePath,
      childProgram.extra.domExports!.walks,
      `${tagName}_walks`,
    ),
  );

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
  tag.remove();
}

function toTitleCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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
    const nodeName = nameIsString
      ? (node.name as t.StringLiteral).value
      : node.name;
    if (nameIsString && tag.scope.getBinding(nodeName as string)) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `Local variables must in a dynamic tag unless they are PascalCase. Use \`<\${${nodeName}}/>\` or rename to \`${toTitleCase(nodeName as string)}\`.`,
        );
    }
    throw tag
      .get("name")
      .buildCodeFrameError(
        `Unable to find entry point for custom tag \`${nodeName}\`.`,
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
