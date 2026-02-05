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
import { createParser, TagType } from "htmljs-parser";

import { buildCodeFrameError } from "../util/build-code-frame";
import throwAggregateError from "../util/merge-errors";

const noop = () => {};
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
  let currentAttr = undefined;
  let currentShorthandId = undefined;
  let currentShorthandClassNames = undefined;
  let { preserveWhitespace } = htmlParseOptions;
  let preservingWhitespaceUntil = preserveWhitespace;
  let onNext = noop;
  const positionAt = (index) => toBabelPosition(parser.positionAt(index));
  const locationAt = (range) => {
    const { start, end } = parser.locationAt(range);
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

      let previousSiblingIndex = currentBody.length;
      while (previousSiblingIndex) {
        let previousSibling = currentBody[--previousSiblingIndex];
        if (!t.isMarkoComment(previousSibling)) {
          break;
        }
        currentTag.pushContainer("attributeTags", previousSibling.node);
        currentBody.get("body").get(previousSiblingIndex).remove();
      }

      currentTag = currentTag.pushContainer("attributeTags", node)[0];
    } else {
      currentTag = currentBody.pushContainer("body", node)[0];
    }
    currentBody = currentTag.get("body");
    onNext(node);
  };
  const pushContent = (node) => {
    currentBody.node.body.push(node);
    onNext(node);
  };
  const endAttr = () => {
    if (currentAttr) {
      currentAttr.loc = locationAt(currentAttr);
      currentAttr = undefined;
    }
  };
  const parseTemplateString = ({ quasis, expressions }) => {
    switch (expressions.length) {
      case 0: {
        const [first] = quasis;
        return withLoc(t.stringLiteral(parser.read(first)), first);
      }
      case 1: {
        if (emptyRange(quasis[0]) && emptyRange(quasis[1])) {
          const [{ value }] = expressions;
          const result = parseExpression(
            file,
            parser.read(value),
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
    return parseTemplateLiteral(file, parser.read({ start, end }), start, end);
  };

  const parser = createParser({
    onError(part) {
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
    },
    onText(part) {
      const rawValue = parser.read(part);

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

      const node = t.markoText(value);
      pushContent(node);
      onNext = (next) => {
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
            end: trimmedStart + rawValue.length,
          });
        } else {
          body.splice(body.indexOf(node), 1);
        }

        onNext = noop;
      };
    },
    onCDATA(part) {
      pushContent(withLoc(t.markoCDATA(parser.read(part.value)), part));
    },
    onDoctype(part) {
      pushContent(withLoc(t.markoDocumentType(parser.read(part.value)), part));
    },
    onDeclaration(part) {
      pushContent(withLoc(t.markoDeclaration(parser.read(part.value)), part));
    },
    onComment(part) {
      pushContent(withLoc(t.markoComment(parser.read(part.value)), part));
    },
    onTagTypeArgs(part) {
      currentTag.node.typeArguments = parseTypeArgs(
        file,
        parser.read(part.value),
        part.value.start,
        part.value.end,
      );
    },
    onTagTypeParams(part) {
      currentBody.node.typeParameters = parseTypeParams(
        file,
        parser.read(part.value),
        part.value.start,
        part.value.end,
      );
    },
    onPlaceholder(part) {
      pushContent(
        withLoc(
          t.markoPlaceholder(
            parseExpression(
              file,
              parser.read(part.value),
              part.value.start,
              part.value.end,
            ),
            part.escape,
          ),
          part,
        ),
      );
    },
    onScriptlet(part) {
      pushContent(
        withLoc(
          t.markoScriptlet(
            parseStatements(
              file,
              parser.read(part.value),
              part.value.start,
              part.value.end,
            ),
          ),
          part,
        ),
      );
    },
    onOpenTagName(part) {
      const tagName = parseTemplateString(part);
      const node = t.markoTag(tagName, [], t.markoTagBody());
      let parseType = TagType.html;
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

        if (parseOptions) {
          if (parseOptions.preserveWhitespace) {
            preservingWhitespaceUntil = node;
          }

          if (parseOptions.statement) {
            parseType = TagType.statement;
          } else if (parseOptions.openTagOnly) {
            parseType = TagType.void;
          } else if (parseOptions.text) {
            parseType = TagType.text;
          }
        }
      }

      enterTag(node);
      return parseType;
    },
    onTagShorthandId(part) {
      currentShorthandId = parseTemplateString(part);
    },
    onTagShorthandClass(part) {
      if (currentShorthandClassNames) {
        currentShorthandClassNames.push(parseTemplateString(part));
      } else {
        currentShorthandClassNames = [parseTemplateString(part)];
      }
    },

    onTagVar({ value }) {
      currentTag.node.var = parseVar(
        file,
        parser.read(value),
        value.start,
        value.end,
      );
    },

    onTagParams({ value }) {
      currentTag.node.body.params = parseParams(
        file,
        parser.read(value),
        value.start,
        value.end,
      );
    },

    onTagArgs({ value }) {
      currentTag.node.arguments = parseArgs(
        file,
        parser.read(value),
        value.start,
        value.end,
      );
    },

    onAttrName(part) {
      const [, name, modifier] = /^([^:]*)(?::(.*))?/.exec(parser.read(part));
      endAttr();
      currentTag.node.attributes.push(
        (currentAttr = t.markoAttribute(
          name || "value",
          t.booleanLiteral(true),
          modifier,
          undefined,
          !name,
        )),
      );

      currentAttr.start = part.start;
      currentAttr.end = part.end;
    },

    onAttrArgs({ value, end }) {
      currentAttr.arguments = parseArgs(
        file,
        parser.read(value),
        value.start,
        value.end,
      );

      currentAttr.end = end;
    },

    onAttrValue(part) {
      currentAttr.end = part.end;
      currentAttr.bound = part.bound;
      currentAttr.value = parseExpression(
        file,
        parser.read(part.value),
        part.value.start,
      );
    },

    onAttrMethod(part) {
      currentAttr.end = part.end;
      currentAttr.value = withLoc(
        t.functionExpression(
          undefined,
          parseParams(
            file,
            parser.read(part.params.value),
            part.params.value.start,
            part.params.value.end,
          ),
          t.blockStatement(
            parseStatements(
              file,
              parser.read(part.body.value),
              part.body.value.start,
              part.body.value.end,
            ),
          ),
        ),
        part,
      );
    },

    onAttrSpread(part) {
      endAttr();
      currentTag.node.attributes.push(
        withLoc(
          t.markoSpreadAttribute(
            parseExpression(file, parser.read(part.value), part.value.start),
          ),
          part,
        ),
      );
    },

    onOpenTagEnd(part) {
      const { node } = currentTag;
      const { attributes } = node;
      const parseOptions = node.tagDef?.parseOptions;
      endAttr();

      if (currentShorthandClassNames) {
        let foundClassAttr = false;
        const classShorthandValue =
          currentShorthandClassNames.length === 1
            ? currentShorthandClassNames[0]
            : currentShorthandClassNames.every((expr) =>
                  t.isStringLiteral(expr),
                )
              ? withLoc(
                  t.stringLiteral(
                    currentShorthandClassNames
                      .map((node) => node.value)
                      .join(" "),
                  ),
                  {
                    start: currentShorthandClassNames[0].start,
                    end: currentShorthandClassNames[
                      currentShorthandClassNames.length - 1
                    ].end,
                  },
                )
              : t.arrayExpression(currentShorthandClassNames);

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

        currentShorthandClassNames = undefined;
      }

      if (currentShorthandId) {
        for (const attr of attributes) {
          if (attr.name === "id") {
            throw file.buildCodeFrameError(
              attr,
              "Cannot have shorthand id and id attribute.",
            );
          }
        }
        attributes.push(t.markoAttribute("id", currentShorthandId));
        currentShorthandId = undefined;
      }

      if (parseOptions) {
        if (parseOptions.rawOpenTag) {
          node.rawValue = parser.read({
            start: node.name.start,
            end: part.start,
          });
        }

        if (
          part.selfClosed ||
          parseOptions.statement ||
          parseOptions.openTagOnly
        ) {
          this.onCloseTagEnd(part);
        }
      } else if (part.selfClosed) {
        this.onCloseTagEnd(part);
      }
    },
    onCloseTagEnd(part) {
      const { node } = currentTag;
      const tagDef = node.tagDef;
      const parserPlugin = tagDef?.parser;
      if (preservingWhitespaceUntil === node) {
        preservingWhitespaceUntil = undefined;
      }

      node.end = part.end;
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
              onNext();
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

      onNext();
    },
  });

  parser.parse(code);
  onNext();

  for (let i = 0; i < parseVisits.length; ) {
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
