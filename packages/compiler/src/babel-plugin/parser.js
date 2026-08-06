import {
  getTagDefForTagName,
  parseArgs,
  parseExpression,
  parseParams,
  parseStatements,
  parseTemplateLiteral,
  parseTypeArgs,
  parseTypeParams,
  parseVar,
} from "@marko/compiler/babel-utils";
import { types as t } from "@marko/compiler/internal/babel";
import { getLines, getPosition, NodeType, parse, TagType } from "@marko/parse";

import { buildCodeFrameError } from "../util/build-code-frame";
import throwAggregateError from "../util/merge-errors";

const noop = () => {};
const jsxStyleAttrValueReg = /^\{[\s\S]*\}$/;
// A brace wrapped attribute value that only parses once unwrapped is almost
// certainly a JSX/Svelte style value (eg `onClick={handler}`); say so instead
// of surfacing the bare expression parse error.
const withWrappedAttrValueHint = (file, part, rawValue, node) => {
  const trimmed = rawValue.trim();
  if (
    node.type === "MarkoParseError" &&
    jsxStyleAttrValueReg.test(trimmed) &&
    parseExpression(
      file,
      trimmed.slice(1, -1),
      part.value.start,
      part.value.end,
    ).type !== "MarkoParseError"
  ) {
    node.label += `${node.label.endsWith(".") ? "" : "."} Attribute values in Marko are plain JavaScript expressions, not JSX; remove the wrapping \`{ }\`.`;
  }
  return node;
};
const emptyRange = (part) => part.start === part.end;
const isAttrTag = (tag) => tag.name.value?.[0] === "@";
const isStatementTag = (tag) => tag.tagDef?.parseOptions?.statement;
const toBabelPosition = ({ line, character }) => ({
  // Babel lines start at 1 and use "column" instead of "character".
  line: line + 1,
  column: character,
});

export function parseMarko(file) {
  const { code } = file;
  const { htmlParseOptions = {} } = file.markoOpts;
  const { watchFiles } = file.metadata.marko;
  const parseVisits = [];
  let currentTag = file.path;
  let currentBody = currentTag;
  let preservingWhitespaceUntil = htmlParseOptions.preserveWhitespace;
  // Trailing whitespace of a text node depends on what follows it, so its
  // final value resolves once the next sibling (or end of body) is known.
  let resolveText = noop;

  const parsed = parse(code, file.opts.filename, {
    getTagType(name, range) {
      const parseOptions = getTagDefForTagName(file, name)?.parseOptions;
      let type = TagType.html;

      if (parseOptions) {
        if (parseOptions.statement) {
          type = TagType.statement;
        } else if (parseOptions.openTagOnly) {
          type = TagType.void;
        } else if (parseOptions.text) {
          type = TagType.text;
        }
      }

      // Otherwise this reaches htmljs-parser's "reserved and cannot be used
      // as an HTML tag", which names neither the concise form nor the tag.
      if (type === TagType.statement && code[range.start - 1] === "<") {
        const lines = getLines(code);
        throw buildCodeFrameError(
          file.opts.filename,
          code,
          {
            start: toBabelPosition(getPosition(lines, range.start)),
            end: toBabelPosition(getPosition(lines, range.end)),
          },
          statementTagInHTMLModeError(name, code, range.end),
        );
      }

      return type;
    },
  });

  const read = (range) => parsed.read(range);
  const positionAt = (index) => toBabelPosition(parsed.positionAt(index));
  const locationAt = (range) => {
    const { start, end } = parsed.locationAt(range);
    return {
      start: toBabelPosition(start),
      end: toBabelPosition(end),
    };
  };
  const withLoc = (node, range) => {
    node.start = range.start;
    node.end = range.end;
    node.loc = locationAt(range);
    return node;
  };
  const enterTag = (node) => {
    if (isAttrTag(node)) {
      if (currentTag === file.path) {
        throw file.buildCodeFrameError(
          node.name,
          "@tags must be nested within another element.",
        );
      }

      // `currentBody` is the body's own path, so the siblings are the paths
      // it holds rather than anything indexable off it directly.
      const siblings = currentBody.get("body");
      let previousSiblingIndex = siblings.length;
      while (previousSiblingIndex) {
        const previousSibling = siblings[--previousSiblingIndex];
        if (!t.isMarkoComment(previousSibling.node)) {
          break;
        }
        currentTag.pushContainer("attributeTags", previousSibling.node);
        previousSibling.remove();
      }

      currentTag = currentTag.pushContainer("attributeTags", node)[0];
    } else {
      currentTag = currentBody.pushContainer("body", node)[0];
    }
    currentBody = currentTag.get("body");
    resolveText(node);
  };
  const pushContent = (node) => {
    currentBody.node.body.push(node);
    resolveText(node);
  };
  const parseTemplateString = ({ quasis, expressions }) => {
    switch (expressions.length) {
      case 0: {
        const [first] = quasis;
        return withLoc(t.stringLiteral(read(first)), first);
      }
      case 1: {
        if (emptyRange(quasis[0]) && emptyRange(quasis[1])) {
          const [{ value }] = expressions;
          const result = parseExpression(
            file,
            read(value),
            value.start,
            value.end,
          );
          if (t.isStringLiteral(result)) {
            // convert to template literal just so that we don't mistake it for a native tag if this is a tag name.
            return withLoc(
              t.templateLiteral([templateElement(result.value, true)], []),
              value,
            );
          } else {
            return result;
          }
        }
      }
    }

    const [{ start }] = quasis;
    const end = quasis[quasis.length - 1].end;
    return parseTemplateLiteral(file, read({ start, end }), start, end);
  };

  const reportError = (part) => {
    const err = buildCodeFrameError(
      file.opts.filename,
      file.code,
      locationAt(part),
      part.message,
    );

    if (!file.___hasParseErrors) {
      throw err;
    }

    const errors = [];
    t.traverseFast(file.path.node, (node) => {
      if (node.type === "MarkoParseError") {
        errors.push(
          buildCodeFrameError(
            file.opts.filename,
            file.code,
            node.errorLoc || node.loc,
            node.label,
          ),
        );
      }
    });

    errors.push(err);
    throwAggregateError(errors);
  };

  const visitBody = (body) => {
    for (const child of body) visitNode(child);
  };

  const visitNode = (node) => {
    switch (node.type) {
      case NodeType.Text:
        visitText(node);
        break;
      case NodeType.Placeholder:
        pushContent(
          withLoc(
            t.markoPlaceholder(
              parseExpression(
                file,
                read(node.value),
                node.value.start,
                node.value.end,
              ),
              node.escape,
            ),
            node,
          ),
        );
        break;
      case NodeType.Scriptlet:
        pushContent(
          withLoc(
            t.markoScriptlet(
              parseStatements(
                file,
                read(node.value),
                node.value.start,
                node.value.end,
              ),
            ),
            node,
          ),
        );
        break;
      case NodeType.CDATA:
        pushContent(withLoc(t.markoCDATA(read(node.value)), node));
        break;
      case NodeType.Doctype:
        pushContent(withLoc(t.markoDocumentType(read(node.value)), node));
        break;
      case NodeType.Declaration:
        pushContent(withLoc(t.markoDeclaration(read(node.value)), node));
        break;
      case NodeType.Comment:
        pushContent(withLoc(t.markoComment(read(node.value)), node));
        break;
      case NodeType.Static:
        visitStatic(node);
        break;
      case NodeType.Tag:
      case NodeType.AttrTag:
        visitTag(node);
        break;
      default:
        // The getTagType hook always returns a type, so the built in
        // Import/Export/Class/Style statement nodes cannot occur.
        throw new Error(`Unexpected Marko syntax tree node "${node.type}".`);
    }
  };

  const visitText = (part) => {
    const rawValue = read(part);

    if (preservingWhitespaceUntil) {
      pushContent(withLoc(t.markoText(rawValue), part));
      return;
    }

    if (/^(?:[\n\r]\s*)?(?:[\n\r]\s*)?$/.test(rawValue)) return;

    const { body } = currentBody.node;
    let prev;
    let prevIndex = body.length;
    // Find previous non-scriptlet or comment.
    while (prevIndex > 0) {
      prev = body[--prevIndex];

      if (t.isMarkoScriptlet(prev) || t.isMarkoComment(prev)) {
        prev = undefined;
      } else {
        break;
      }
    }

    let value = rawValue;
    switch (prev?.type) {
      case "MarkoPlaceholder":
        break;
      case "MarkoText":
        if (/\s$/.test(prev.value)) {
          value = value.replace(/^\s+/, "");
        }
        break;
      case "MarkoTag":
        if (isStatementTag(prev) || isAttrTag(prev)) {
          value = value.replace(/^[\n\r]\s*/, "");
        }
        break;
      default:
        value = value.replace(/^[\n\r]\s*/, "");
        break;
    }

    if (!value) return;

    const node = t.markoText(value);
    pushContent(node);
    resolveText = (next) => {
      switch (next?.type) {
        case "MarkoScriptlet":
        case "MarkoComment":
          return;
        case "MarkoPlaceholder":
          break;
        case "MarkoText":
          if (/^\s/.test(next.value)) {
            value = value.replace(/\s+$/, "");
          }
          break;
        case "MarkoTag":
          if (isStatementTag(next) || isAttrTag(next)) {
            value = value.replace(/[\n\r]\s*$/, "");
          }

          break;
        default:
          value = value.replace(/[\n\r]\s*$/, "");
          break;
      }

      node.value = value.replace(/\s+/g, " ");

      if (node.value) {
        const trimmedStart = part.start + rawValue.indexOf(value);
        withLoc(node, {
          start: trimmedStart,
          end: trimmedStart + value.length,
        });
      } else {
        body.splice(body.indexOf(node), 1);
      }

      resolveText = noop;
    };
  };

  const enterTagNode = (part) => {
    const tagName = parseTemplateString(part);
    const node = t.markoTag(tagName, [], t.markoTagBody());
    node.start =
      part.start - (part.start && code[part.start - 1] === "<" ? 1 : 0); // Account for leading `<` in html mode.
    node.end = part.end;

    if (t.isStringLiteral(tagName)) {
      const literalTagName = tagName.value || (tagName.value = "div");

      if (literalTagName === "%") {
        throw file.buildCodeFrameError(
          tagName,
          "<% scriptlets %> are no longer supported.",
        );
      }

      const parseOptions = (node.tagDef = getTagDefForTagName(
        file,
        literalTagName,
      ))?.parseOptions;

      if (parseOptions?.preserveWhitespace) {
        // Keep the outermost owner so a nested preserving tag (eg a
        // `<textarea>` in `<pre>`) doesn't end preservation when it closes.
        preservingWhitespaceUntil ||= node;
      }
    }

    enterTag(node);
    return node;
  };

  const visitStatic = (cst) => {
    const node = enterTagNode({
      start: cst.name.start,
      end: cst.name.end,
      quasis: [cst.name],
      expressions: [],
    });

    if (node.tagDef?.parseOptions?.rawOpenTag) {
      node.rawValue = read({ start: node.name.start, end: cst.end });
    }

    closeTag(cst.end);
  };

  const visitTag = (cst) => {
    const node = enterTagNode(cst.name);
    const shorthandId = cst.shorthandId
      ? parseTemplateString(cst.shorthandId)
      : undefined;
    const shorthandClassNames =
      cst.shorthandClassNames?.map(parseTemplateString);

    if (cst.typeArgs) {
      node.typeArguments = parseTypeArgs(
        file,
        read(cst.typeArgs.value),
        cst.typeArgs.value.start,
        cst.typeArgs.value.end,
      );
    }
    if (cst.typeParams) {
      node.body.typeParameters = parseTypeParams(
        file,
        read(cst.typeParams.value),
        cst.typeParams.value.start,
        cst.typeParams.value.end,
      );
    }
    // A bare `|` union in a tag-var type is intentionally unsupported (write
    // `(A | B)`): htmljs-parser reserves `|` as the body-params delimiter.
    if (cst.var) {
      node.var = parseVar(
        file,
        read(cst.var.value),
        cst.var.value.start,
        cst.var.value.end,
      );
    }
    if (cst.args) {
      node.arguments = parseArgs(
        file,
        read(cst.args.value),
        cst.args.value.start,
        cst.args.value.end,
      );
    }
    if (cst.params) {
      node.body.params = parseParams(
        file,
        read(cst.params.value),
        cst.params.value.start,
        cst.params.value.end,
      );
    }

    if (cst.attrs) {
      for (const attr of cst.attrs) {
        visitAttr(node, attr);
      }
    }

    const openEnd = cst.open.end;
    finishOpenTag(
      node,
      cst.selfClosed
        ? openEnd - 2
        : code[openEnd - 1] === ">"
          ? openEnd - 1
          : openEnd,
      shorthandId,
      shorthandClassNames,
    );

    if (cst.selfClosed || cst.bodyType === TagType.void) {
      closeTag(openEnd);
    } else {
      if (cst.body) visitBody(cst.body);
      closeTag(cst.end);
    }
  };

  const visitAttr = (node, attr) => {
    if (attr.type === NodeType.AttrSpread) {
      node.attributes.push(
        withLoc(
          t.markoSpreadAttribute(
            parseExpression(
              file,
              read(attr.value),
              attr.value.start,
              attr.value.end,
            ),
          ),
          attr,
        ),
      );
      return;
    }

    let name = read(attr.name);
    let modifier = null;
    const modifierIndex = name.lastIndexOf(":");
    if (~modifierIndex) {
      modifier = name.slice(modifierIndex + 1);
      name = name.slice(0, modifierIndex);
    }

    const attrNode = t.markoAttribute(
      name || "value",
      t.booleanLiteral(true),
      modifier,
      undefined,
      !name,
    );
    node.attributes.push(attrNode);
    attrNode.start = attr.name.start;
    attrNode.end = attr.name.end;

    if (attr.args) {
      attrNode.arguments = parseArgs(
        file,
        read(attr.args.value),
        attr.args.value.start,
        attr.args.value.end,
      );

      attrNode.end = attr.args.end;
    }

    const { value } = attr;
    if (value) {
      attrNode.end = value.end;
      if (value.type === NodeType.AttrMethod) {
        attrNode.value = withLoc(
          t.functionExpression(
            undefined,
            parseParams(
              file,
              read(value.params.value),
              value.params.value.start,
              value.params.value.end,
            ),
            t.blockStatement(
              parseStatements(
                file,
                read(value.body.value),
                value.body.value.start,
                value.body.value.end,
              ),
            ),
            false,
            value.async,
          ),
          value,
        );
      } else {
        attrNode.bound = value.bound;
        const rawAttrValue = read(value.value);
        attrNode.value = withWrappedAttrValueHint(
          file,
          value,
          rawAttrValue,
          parseExpression(
            file,
            rawAttrValue,
            value.value.start,
            value.value.end,
          ),
        );
      }
    }

    attrNode.loc = locationAt(attrNode);
  };

  const finishOpenTag = (
    node,
    openTagEndStart,
    shorthandId,
    shorthandClassNames,
  ) => {
    const { attributes } = node;

    if (shorthandClassNames) {
      let foundClassAttr = false;
      const classShorthandValue =
        shorthandClassNames.length === 1
          ? shorthandClassNames[0]
          : shorthandClassNames.every((expr) => t.isStringLiteral(expr))
            ? withLoc(
                t.stringLiteral(
                  shorthandClassNames.map((node) => node.value).join(" "),
                ),
                {
                  start: shorthandClassNames[0].start,
                  end: shorthandClassNames[shorthandClassNames.length - 1].end,
                },
              )
            : t.arrayExpression(shorthandClassNames);

      for (const attr of attributes) {
        if (attr.name === "class") {
          foundClassAttr = true;
          if (
            t.isStringLiteral(attr.value) &&
            t.isStringLiteral(classShorthandValue)
          ) {
            attr.value = t.templateLiteral(
              [
                templateElement("", false),
                templateElement(" ", false),
                templateElement("", true),
              ],
              [classShorthandValue, attr.value],
            );
          } else {
            attr.value = t.arrayExpression(
              t.isArrayExpression(classShorthandValue)
                ? classShorthandValue.elements.concat(
                    t.isArrayExpression(attr.value)
                      ? attr.value.elements
                      : attr.value,
                  )
                : t.isArrayExpression(attr.value)
                  ? [classShorthandValue].concat(attr.value.elements)
                  : [classShorthandValue, attr.value],
            );
          }
          break;
        }
      }

      if (!foundClassAttr) {
        attributes.push(t.markoAttribute("class", classShorthandValue));
      }
    }

    if (shorthandId) {
      for (const attr of attributes) {
        if (attr.name === "id") {
          throw file.buildCodeFrameError(
            attr,
            "Cannot have shorthand id and id attribute.",
          );
        }
      }
      attributes.push(t.markoAttribute("id", shorthandId));
    }

    if (node.tagDef?.parseOptions?.rawOpenTag) {
      node.rawValue = read({
        start: node.name.start,
        end: openTagEndStart,
      });
    }
  };

  const closeTag = (end) => {
    const { node } = currentTag;
    const tagDef = node.tagDef;
    const parserPlugin = tagDef?.parser;
    if (preservingWhitespaceUntil === node) {
      preservingWhitespaceUntil = undefined;
    }

    node.end = end;
    node.loc = locationAt(node);

    if (parserPlugin) {
      const { hook } = parserPlugin;
      if (parserPlugin.path) watchFiles.push(parserPlugin.path);
      parseVisits.push(hook.default || hook, currentTag);
    }

    const parentTag = isAttrTag(node)
      ? currentTag.parentPath
      : currentTag.parentPath.parentPath;
    const { attributeTags } = node;

    if (attributeTags.length) {
      const isControlFlow = tagDef?.parseOptions?.controlFlow;

      if (node.body.body.length) {
        const body = [];
        // When we have a control flow with mixed body and attribute tag content
        // we move any scriptlets, comments or empty nested control flow.
        // This is because they initially ambiguous as to whether
        // they are part of the body or the attributeTags.
        // Otherwise we only move scriptlets.
        for (const child of node.body.body) {
          if (
            t.isMarkoScriptlet(child) ||
            (isControlFlow && t.isMarkoComment(child))
          ) {
            attributeTags.push(child);
          } else if (
            isControlFlow &&
            child.tagDef?.controlFlow &&
            !child.body.body.length
          ) {
            child.body.attributeTags = true;
            attributeTags.push(child);
          } else {
            body.push(child);
          }
        }

        if (isControlFlow) {
          if (body.length) {
            resolveText();
            throw file.buildCodeFrameError(
              body[0],
              "Cannot have attribute tags and body content under a control flow tag.",
            );
          }

          node.attributeTags = body;
          node.body.body = attributeTags;
          node.body.attributeTags = true;
        } else {
          node.body.body = body;
        }

        attributeTags.sort(sortByStart);
      } else if (isControlFlow) {
        node.attributeTags = [];
        node.body.body = attributeTags;
        node.body.attributeTags = true;
      }

      if (isControlFlow) {
        if (!parentTag) {
          resolveText();
          throw file.buildCodeFrameError(
            attributeTags.find(
              (child) => t.isMarkoTag(child) && isAttrTag(child),
            )?.name || node.name,
            "@tags must be nested within another element.",
          );
        }

        currentTag.remove();
        parentTag.pushContainer("attributeTags", node);
      }
    }

    if (parentTag) {
      currentTag = parentTag;
      currentBody = currentTag.get("body");
    } else {
      currentTag = currentBody = file.path;
    }

    resolveText();
  };

  visitBody(parsed.program.body);
  resolveText();

  // The first syntax error throws (with any embedded expression parse errors
  // aggregated when error recovery is on), like the event based parser did.
  if (parsed.errors.length) {
    reportError(parsed.errors[0]);
  }

  for (let i = 0; i < parseVisits.length;) {
    parseVisits[i++](parseVisits[i++]);
  }

  const { ast } = file;
  const { program } = ast;
  ast.start = program.start = 0;
  ast.end = program.end = code.length - 1;
  ast.loc = program.loc = {
    start: { line: 1, column: 0 },
    end: positionAt(ast.end),
  };
}

function sortByStart(a, b) {
  return a.start - b.start;
}

function templateElement(value, tail) {
  return t.templateElement({
    tail,
    raw: value,
    cooked: value,
  });
}

const tagVarAfterNameReg = /^\/([A-Za-z_$][\w$]*)/;
const statementTagExample = {
  class: "class { … }",
  client: 'client console.log("…")',
  export: "export const value = …",
  import: 'import Tag from "<tag>"',
  server: 'server console.log("…")',
  static: "static const value = …",
};
function statementTagInHTMLModeError(tagName, code, nameEnd) {
  // `<export/value>` is what an author reaches for to publish a value to the
  // parent, and `<export>` is not that feature at all.
  if (tagName === "export") {
    const tagVar = tagVarAfterNameReg.exec(code.slice(nameEnd))?.[1];
    if (tagVar) {
      return `The \`export\` statement does not support a tag variable. To publish a value to the parent template, use a \`<return>\` tag instead — \`<return=${tagVar}>\` — and the parent names it with its own tag variable on this template's tag.`;
    }
  }

  return `\`${tagName}\` is a statement, not an html tag: write it at the root of the template without angle brackets, eg \`${
    statementTagExample[tagName] || `${tagName} …`
  }\`.`;
}
