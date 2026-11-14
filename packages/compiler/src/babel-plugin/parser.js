import {
  diagnosticError,
  getTagDefForTagName,
  getTaglibLookup,
  parseArgs,
  parseBlock,
  parseExpression,
  parseParams,
  parseTemplateLiteral,
  parseTypeArgs,
  parseTypeParams,
  parseVar,
} from "@marko/compiler/babel-utils";
import { NodePath, types as t } from "@marko/compiler/internal/babel";
import {
  createParser,
  getLines,
  getLocation,
  getPosition,
  TagType,
} from "htmljs-parser";

import { buildCodeFrameError } from "../util/build-code-frame";
import throwAggregateError from "../util/merge-errors";

const noop = () => {};
const jsxStyleAttrValueReg = /^\{[\s\S]*\}$/;
const emptyRange = (part) => part.start === part.end;
const isAttrTag = (tag) => tag.name.value?.[0] === "@";
const isStatementTag = (tag) => tag.tagDef?.parseOptions?.statement;
const toBabelPosition = ({ line, character }) => ({
  // Babel lines start at 1 and use "column" instead of "character".
  line: line + 1,
  column: character,
});

export function parseMarko(file) {
  const builder = createMarkoBuilder(file);
  const parser = createParser({
    onError: builder.error,
    onText: builder.text,
    onCDATA: builder.cdata,
    onDoctype: builder.doctype,
    onDeclaration: builder.declaration,
    onComment: builder.comment,
    onOpenTagComment: builder.openTagComment,
    onTagTypeArgs: builder.tagTypeArgs,
    onTagTypeParams: builder.tagTypeParams,
    onPlaceholder: builder.placeholder,
    onScriptlet: builder.scriptlet,
    onOpenTagName: builder.openTagName,
    onTagShorthandId: builder.tagShorthandId,
    onTagShorthandClass: builder.tagShorthandClass,
    onTagVar: builder.tagVar,
    onTagParams: builder.tagParams,
    onTagArgs: builder.tagArgs,
    onAttrName: builder.attrName,
    onAttrArgs: builder.attrArgs,
    onAttrValue: builder.attrValue,
    onAttrMethod: builder.attrMethod,
    onAttrSpread: builder.attrSpread,
    onOpenTagEnd: builder.openTagEnd,
    onCloseTagEnd: builder.closeTagEnd,
  });
  parser.parse(file.code);
  builder.finish();
}

/**
 * Builds `file`'s Marko AST from htmljs-parser's parts, in source order, with
 * NodePaths only for the tags a taglib parse hook visits, once it is built.
 */
function createMarkoBuilder(file) {
  const { code } = file;
  const { htmlParseOptions = {} } = file.markoOpts;
  const { watchFiles } = file.metadata.marko;
  const program = file.ast.program;
  const root = { node: undefined, body: program, parent: undefined };
  const parseVisits = [];
  let lines;
  let currentTag = root;
  let currentAttr;
  let currentShorthandId;
  let currentShorthandClassNames;
  let currentOpenTagComments;
  let preservingWhitespaceUntil = htmlParseOptions.preserveWhitespace;
  let onNext = noop;

  const read = (range) => code.slice(range.start, range.end);
  const positionAt = (index) =>
    toBabelPosition(getPosition((lines ||= getLines(code)), index));
  const locationAt = (range) => {
    const { start, end } = getLocation(
      (lines ||= getLines(code)),
      range.start,
      range.end,
    );
    return { start: toBabelPosition(start), end: toBabelPosition(end) };
  };
  const withLoc = (node, range) => {
    node.start = range.start;
    node.end = range.end;
    node.loc = locationAt(range);
    return node;
  };

  const enterTag = (node) => {
    const parent = currentTag;
    let container;
    let listKey;
    if (isAttrTag(node)) {
      if (parent === root) {
        throw file.buildCodeFrameError(
          node.name,
          "@tags must be nested within another element.",
        );
      }
      // The comments right before an attribute tag go with it.
      const siblings = parent.body.body;
      while (
        siblings.length &&
        t.isMarkoComment(siblings[siblings.length - 1])
      ) {
        parent.node.attributeTags.push(siblings.pop());
      }
      container = parent.node.attributeTags;
      listKey = "attributeTags";
    } else {
      container = parent.body.body;
      listKey = "body";
    }
    container.push(node);
    currentTag = { node, body: node.body, parent, container, listKey };
    onNext(node);
  };
  const pushContent = (node) => {
    currentTag.body.body.push(node);
    onNext(node);
  };
  const endAttr = () => {
    if (currentAttr) {
      currentAttr.loc = locationAt(currentAttr);
      currentAttr = undefined;
    }
  };
  // An open tag comment leads the attribute after it, else trails the one
  // before it, else is inner to the tag.
  const addOpenTagComments = (next) => {
    if (!currentOpenTagComments) return;
    const { node } = currentTag;
    if (next) {
      next.leadingComments = currentOpenTagComments;
    } else if (node.attributes.length) {
      node.attributes[node.attributes.length - 1].trailingComments =
        currentOpenTagComments;
    } else {
      node.innerComments = currentOpenTagComments;
    }
    currentOpenTagComments = undefined;
  };
  const pushAttr = (attr) => {
    addOpenTagComments(attr);
    currentTag.node.attributes.push(attr);
    return attr;
  };
  // A brace wrapped attribute value that only parses once unwrapped is almost
  // certainly a JSX/Svelte style value (eg `onClick={handler}`); say so instead
  // of surfacing the bare expression parse error.
  const withWrappedAttrValueHint = (value, rawValue, node) => {
    const trimmed = rawValue.trim();
    if (
      node.type === "MarkoParseError" &&
      jsxStyleAttrValueReg.test(trimmed) &&
      parseExpression(file, trimmed.slice(1, -1), value.start, value.end)
        .type !== "MarkoParseError"
    ) {
      node.label += `${node.label.endsWith(".") ? "" : "."} Attribute values in Marko are plain JavaScript expressions, not JSX; remove the wrapping \`{ }\`.`;
    }
    return node;
  };
  const toBlock = (start, end) =>
    parseBlock(file, code.slice(start, end), start, end);
  // A tag name or shorthand: a lone placeholder is its expression, other
  // placeholders make a template literal.
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
          }
          return result;
        }
      }
    }
    const [{ start }] = quasis;
    const end = quasis[quasis.length - 1].end;
    return parseTemplateLiteral(file, read({ start, end }), start, end);
  };

  const builder = {
    error(part) {
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
    text(part) {
      const rawValue = read(part);

      if (preservingWhitespaceUntil) {
        pushContent(withLoc(t.markoText(rawValue), part));
        return;
      }

      // Only HTML's ASCII whitespace collapses; `\s` would also eat NBSP, U+2028/9 and U+FEFF.
      if (/^(?:[\n\r][ \t\n\r\f]*)?(?:[\n\r][ \t\n\r\f]*)?$/.test(rawValue))
        return;

      const { body } = currentTag.body;
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
          if (/[ \t\n\r\f]$/.test(prev.value)) {
            value = value.replace(/^[ \t\n\r\f]+/, "");
          }
          break;
        case "MarkoTag":
          if (isStatementTag(prev) || isAttrTag(prev)) {
            value = value.replace(/^[\n\r][ \t\n\r\f]*/, "");
          }
          break;
        default:
          value = value.replace(/^[\n\r][ \t\n\r\f]*/, "");
          break;
      }

      if (!value) return;

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
            if (/^[ \t\n\r\f]/.test(next.value)) {
              value = value.replace(/[ \t\n\r\f]+$/, "");
            }
            break;
          case "MarkoTag":
            if (isStatementTag(next) || isAttrTag(next)) {
              value = value.replace(/[\n\r][ \t\n\r\f]*$/, "");
            }

            break;
          default:
            value = value.replace(/[\n\r][ \t\n\r\f]*$/, "");
            break;
        }

        node.value = value.replace(/[ \t\n\r\f]+/g, " ");

        if (node.value) {
          const trimmedStart = part.start + rawValue.indexOf(value);
          withLoc(node, {
            start: trimmedStart,
            end: trimmedStart + value.length,
          });
        } else {
          body.splice(body.indexOf(node), 1);
        }

        onNext = noop;
      };
    },
    cdata(part) {
      pushContent(withLoc(t.markoCDATA(read(part.value)), part));
    },
    doctype(part) {
      pushContent(withLoc(t.markoDocumentType(read(part.value)), part));
    },
    declaration(part) {
      pushContent(withLoc(t.markoDeclaration(read(part.value)), part));
    },
    comment(part) {
      pushContent(
        withLoc(
          t.markoComment(read(part.value), getCommentKind(code, part)),
          part,
        ),
      );
    },
    openTagComment(part) {
      (currentOpenTagComments ||= []).push(
        withLoc(
          {
            type:
              code.charCodeAt(part.start + 1) === 42 /* * */
                ? "CommentBlock"
                : "CommentLine",
            value: read(part.value),
          },
          part,
        ),
      );
    },
    tagTypeArgs({ value }) {
      currentTag.node.typeArguments = parseTypeArgs(
        file,
        read(value),
        value.start,
        value.end,
      );
    },
    tagTypeParams({ value }) {
      currentTag.body.typeParameters = parseTypeParams(
        file,
        read(value),
        value.start,
        value.end,
      );
    },
    placeholder(part) {
      const { value } = part;
      pushContent(
        withLoc(
          t.markoPlaceholder(
            parseExpression(file, read(value), value.start, value.end),
            part.escape,
          ),
          part,
        ),
      );
    },
    scriptlet(part) {
      const block = toBlock(part.value.start, part.value.end);
      const scriptlet = t.markoScriptlet(block.body);
      scriptlet.innerComments = block.innerComments;
      pushContent(withLoc(scriptlet, part));
    },
    /** Opens a tag; returns how the taglibs parse its body. */
    openTagName(part) {
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

        const tagDef = (node.tagDef = getTagDefForTagName(
          file,
          literalTagName,
        ));
        const parseOptions = tagDef?.parseOptions;

        if (!tagDef) {
          // A tag that failed to load is reported where it is used.
          const err = getTaglibLookup(file).getTagError(literalTagName);
          if (err) {
            diagnosticError(file.path, {
              label: err.message,
              loc: tagName.loc,
            });
          }
        }

        if (parseOptions) {
          if (parseOptions.preserveWhitespace) {
            // Keep the outermost owner so a nested preserving tag (eg a
            // `<textarea>` in `<pre>`) doesn't end preservation when it closes.
            preservingWhitespaceUntil ||= node;
          }

          if (parseOptions.statement) {
            parseType = TagType.statement;
          } else if (parseOptions.openTagOnly) {
            parseType = TagType.void;
          } else if (parseOptions.text) {
            parseType = TagType.text;
          }
        }

        // Otherwise this reaches htmljs-parser's "reserved and cannot be used
        // as an HTML tag", which names neither the concise form nor `<return>`.
        if (parseType === TagType.statement && code[part.start - 1] === "<") {
          throw file.buildCodeFrameError(
            tagName,
            statementTagInHTMLModeError(literalTagName, code, part.end),
          );
        }
      }

      enterTag(node);
      return parseType;
    },
    tagShorthandId(part) {
      currentShorthandId = parseTemplateString(part);
    },
    tagShorthandClass(part) {
      const className = parseTemplateString(part);
      if (currentShorthandClassNames) {
        currentShorthandClassNames.push(className);
      } else {
        currentShorthandClassNames = [className];
      }
    },
    // A bare `|` union in a tag-var type is intentionally unsupported (write
    // `(A | B)`): htmljs-parser reserves `|` as the body-params delimiter.
    tagVar({ value }) {
      currentTag.node.var = parseVar(file, read(value), value.start, value.end);
    },
    tagParams({ value }) {
      currentTag.body.params = parseParams(
        file,
        read(value),
        value.start,
        value.end,
      );
    },
    tagArgs({ value }) {
      currentTag.node.arguments = parseArgs(
        file,
        read(value),
        value.start,
        value.end,
      );
    },
    attrName(part) {
      let name = read(part);
      let modifier = null;
      const modifierIndex = name.lastIndexOf(":");
      if (~modifierIndex) {
        modifier = name.slice(modifierIndex + 1);
        name = name.slice(0, modifierIndex);
      }

      endAttr();
      currentAttr = pushAttr(
        t.markoAttribute(
          name || "value",
          { type: "BooleanLiteral", value: true },
          modifier,
          null,
          !name,
        ),
      );

      currentAttr.start = part.start;
      currentAttr.end = part.end;
    },
    attrArgs({ value, end }) {
      currentAttr.arguments = parseArgs(
        file,
        read(value),
        value.start,
        value.end,
      );
      currentAttr.end = end;
    },
    attrValue(part) {
      currentAttr.end = part.end;
      currentAttr.bound = part.bound;
      const rawAttrValue = read(part.value);
      currentAttr.value = withWrappedAttrValueHint(
        part.value,
        rawAttrValue,
        parseExpression(file, rawAttrValue, part.value.start, part.value.end),
      );
    },
    attrMethod(part) {
      const method = t.functionExpression(
        null,
        [],
        toBlock(part.body.value.start, part.body.value.end),
        false,
        part.async,
      );
      method.params = parseParams(
        file,
        read(part.params.value),
        part.params.value.start,
        part.params.value.end,
      );

      if (part.typeParams) {
        method.typeParameters = parseTypeParams(
          file,
          read(part.typeParams.value),
          part.typeParams.value.start,
          part.typeParams.value.end,
        );
      }

      currentAttr.end = part.end;
      currentAttr.value = withLoc(method, part);
    },
    attrSpread(part) {
      const { value } = part;
      endAttr();
      pushAttr(
        withLoc(
          t.markoSpreadAttribute(
            parseExpression(file, read(value), value.start, value.end),
          ),
          part,
        ),
      );
    },
    openTagEnd(part) {
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

      addOpenTagComments();

      if (parseOptions) {
        if (parseOptions.rawOpenTag) {
          node.rawValue = read({ start: node.name.start, end: part.start });
        }

        if (
          part.selfClosed ||
          parseOptions.statement ||
          parseOptions.openTagOnly
        ) {
          builder.closeTagEnd(part);
        }
      } else if (part.selfClosed) {
        builder.closeTagEnd(part);
      }
    },
    closeTagEnd(part) {
      const frame = currentTag;
      const { node } = frame;
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
        parseVisits.push(hook.default || hook, frame);
      }

      const parentTag = frame.parent === root ? undefined : frame.parent;
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
              child.tagDef?.parseOptions?.controlFlow &&
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
          if (!parentTag) {
            onNext();
            throw file.buildCodeFrameError(
              attributeTags.find(
                (child) => t.isMarkoTag(child) && isAttrTag(child),
              )?.name || node.name,
              "@tags must be nested within another element.",
            );
          }

          // An attribute tag of the tag the control flow sits in.
          frame.container.splice(frame.container.indexOf(node), 1);
          frame.container = parentTag.node.attributeTags;
          frame.listKey = "attributeTags";
          frame.container.push(node);
        }
      }

      currentTag = parentTag || root;
      onNext();
    },
    finish() {
      onNext();

      // The path of a tag a parse hook visits, from the finished tree.
      const pathOf = (frame) => {
        if (!frame.path) {
          const owner = frame.parent;
          const parentPath =
            owner === root
              ? file.path
              : frame.listKey === "body"
                ? pathOf(owner).get("body")
                : pathOf(owner);
          frame.path = NodePath.get({
            parentPath,
            parent: parentPath.node,
            container: frame.container,
            listKey: frame.listKey,
            key: frame.container.indexOf(frame.node),
          }).setContext(parentPath.context);
        }
        return frame.path;
      };
      for (let i = 0; i < parseVisits.length; i += 2) {
        parseVisits[i](pathOf(parseVisits[i + 1]));
      }

      const { ast } = file;
      ast.start = program.start = 0;
      ast.end = program.end = code.length - 1;
      ast.loc = program.loc = {
        start: { line: 1, column: 0 },
        end: positionAt(ast.end),
      };
    },
  };
  return builder;
}

function getCommentKind(code, part) {
  switch (code.charCodeAt(part.start + 1)) {
    case 47 /* / */:
      return "line";
    case 42 /* * */:
      return "block";
    default:
      return "html";
  }
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
