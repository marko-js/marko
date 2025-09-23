import { types as t } from "@marko/compiler";
import {
  assertAttributesOrSingleArg,
  getProgram,
  getTagTemplate,
  importDefault,
  importNamed,
  loadFileForTag,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";
import path from "path";

import { getTagName } from "../../util/get-tag-name";
import {
  knownTagAnalyze,
  knownTagTranslateDOM,
  knownTagTranslateHTML,
} from "../../util/known-tag";
import { isOutputHTML } from "../../util/marko-config";
import type { TemplateVisitor } from "../../util/visitors";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { getTemplateContentName } from "../program/html";

export default {
  analyze: {
    enter(tag) {
      const templateFile = getTagTemplate(tag);
      if (!templateFile) {
        const tagName = getTagName(tag);
        if (tagName && tag.scope.hasBinding(tagName)) {
          throw tag
            .get("name")
            .buildCodeFrameError(
              `Local variables must be in a [dynamic tag](https://markojs.com/docs/reference/language#dynamic-tags) unless they are PascalCase. Use \`<\${${tagName}}/>\` or rename to \`${tagName.charAt(0).toUpperCase() + tagName.slice(1)}\`.`,
            );
        }
        throw tag
          .get("name")
          .buildCodeFrameError(
            `Unable to find entry point for [custom tag](https://markojs.com/docs/reference/custom-tag#relative-custom-tags) \`<${tagName}>\`.`,
          );
      }

      assertAttributesOrSingleArg(tag);

      const childFile = loadFileForTag(tag);

      if (!childFile) {
        throw tag
          .get("name")
          .buildCodeFrameError("Unable to resolve file for tag.");
      }

      const childProgram = childFile.ast.program;
      const childExtra = childProgram.extra;

      knownTagAnalyze(tag, childExtra.section!, childExtra.domExports?.input);

      // TODO: should check individual inputs to see if they are intersecting with state
      getProgram().node.extra!.hasInteractiveChild =
        childExtra?.isInteractive || childExtra?.hasInteractiveChild || false;
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
  const childProgram = loadFileForTag(tag)!.ast.program;
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
    childExtra.domExports?.input,
  );
}

function translateDOM(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const { file } = tag.hub;
  const write = writer.writeTo(tag);
  const relativePath = getTagRelativePath(tag);
  const childFile = loadFileForTag(tag)!;
  const childExtra = childFile.ast.program.extra;
  const childExports = childExtra.domExports!;
  const tagName = t.isIdentifier(node.name)
    ? node.name.name
    : t.isStringLiteral(node.name)
      ? node.name.value
      : "tag";
  const tagIdentifier = importOrSelfReferenceName(
    file,
    relativePath,
    childExports.setup,
    tagName,
  );

  knownTagTranslateDOM(
    tag,
    tagIdentifier,
    childExtra.section!,
    childExports.input,
    (binding, perferedName) =>
      importOrSelfReferenceName(
        tag.hub.file,
        relativePath,
        binding.export!,
        perferedName,
      ),
  );

  write`${importNamed(file, relativePath, childExports.template, `${tagName}_template`)}`;
  walks.injectWalks(
    tag,
    importNamed(file, relativePath, childExports.walks, `${tagName}_walks`),
  );

  tag.remove();
}

export function getTagRelativePath(tag: t.NodePath<t.MarkoTag>) {
  const {
    node,
    hub: { file },
  } = tag;
  let relativePath: string | undefined;

  if (t.isStringLiteral(node.name)) {
    const template = getTagTemplate(tag);
    relativePath = template && resolveRelativePath(file, template);
  } else if (node.extra?.tagNameImported) {
    relativePath = node.extra.tagNameImported;
  }

  if (!relativePath) {
    const tagName = getTagName(tag);
    if (tagName && tag.scope.hasBinding(tagName)) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `Local variables must be in a [dynamic tag](https://markojs.com/docs/reference/language#dynamic-tags) unless they are PascalCase. Use \`<\${${tagName}}/>\` or rename to \`${tagName.charAt(0).toUpperCase() + tagName.slice(1)}\`.`,
        );
    }
    throw tag
      .get("name")
      .buildCodeFrameError(
        `Unable to find entry point for [custom tag](https://markojs.com/docs/reference/custom-tag#relative-custom-tags) \`<${tagName}>\`.`,
      );
  }

  return relativePath;
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
