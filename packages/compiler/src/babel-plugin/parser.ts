import {
  diagnosticError,
  getTagDefForTagName,
  parseArgs,
  parseBlock,
  parseExpression,
  parseParams,
  parseTemplateLiteral,
  parseTypeArgs,
  parseTypeParams,
  parseVar,
} from "@marko/compiler/babel-utils";
import type { DiagnosticOptions } from "@marko/compiler/babel-utils";
import { NodePath, types as t } from "@marko/compiler/internal/babel";
import {
  createParser,
  getLines,
  getLocation,
  getPosition,
  type Range,
  type Ranges,
  TagType,
} from "htmljs-parser";

import {
  buildCodeFrameError,
  type CompileError,
} from "../util/build-code-frame";
import type { CompileFile, TagNode } from "../util/compile-file";
import throwAggregateError from "../util/merge-errors";

/**
 * An open tag while its children are built, or the program (`node` unset). The
 * builder moves nodes between bodies and attribute tag lists of either shape, so
 * it holds them loosely. Every frame is made with all of its fields, so frames
 * keep one shape.
 */
interface Frame {
  node: TagNode;
  body: { body: t.Node[] };
  parent: Frame | undefined;
  container: t.Node[] | undefined;
  listKey: "body" | "attributeTags" | undefined;
  path: t.NodePath<t.MarkoTag> | undefined;
  /** The parse hook of the tag's definition, which visits it once it is built. */
  visit: ParseVisit | undefined;
}

/** A taglib's parse hook, which the builder calls with just the tag's path. */
type ParseVisit = (tag: t.NodePath<t.MarkoTag>) => void;

const noop = (_next?: t.Node) => {};
const jsxStyleAttrValueReg = /^\{[\s\S]*\}$/;
const emptyRange = (part: Range) => part.start === part.end;
const isAttrTag = (tag: t.MarkoTag) =>
  (tag.name as t.StringLiteral).value?.[0] === "@";
const isStatementTag = (tag: TagNode) => tag.tagDef?.parseOptions?.statement;
const isControlFlowTag = (node: t.Node): node is TagNode =>
  !!(node as TagNode).tagDef?.parseOptions?.controlFlow;
const toBabelPosition = ({
  line,
  character,
}: {
  line: number;
  character: number;
}) => ({
  // Babel lines start at 1 and use "column" instead of "character".
  line: line + 1,
  column: character,
});

export function parseMarko(file: CompileFile) {
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
function createMarkoBuilder(file: CompileFile) {
  const { code } = file;
  const { htmlParseOptions = {} } = file.markoOpts as {
    htmlParseOptions?: { preserveWhitespace?: boolean };
  };
  const { watchFiles } = file.metadata.marko;
  const program = file.ast.program;
  // The program's frame has no tag.
  const root: Frame = {
    node: undefined as unknown as TagNode,
    body: program,
    parent: undefined,
    container: undefined,
    listKey: undefined,
    path: undefined,
    visit: undefined,
  };
  // The frames of the tags a parse hook visits, in the order they close.
  const parseVisits: Frame[] = [];
  let lines: number[] | undefined;
  let currentTag = root;
  let currentAttr: t.MarkoAttribute | undefined;
  let currentShorthandId: t.Expression | undefined;
  let currentShorthandClassNames: t.Expression[] | undefined;
  let currentOpenTagComments: t.Comment[] | undefined;
  let preservingWhitespaceUntil: boolean | TagNode | undefined =
    htmlParseOptions.preserveWhitespace;
  let onNext = noop;

  const read = (range: Range) => code.slice(range.start, range.end);
  const positionAt = (index: number) =>
    toBabelPosition(getPosition((lines ||= getLines(code)), index));
  // Just `start` and `end`, each a line and column: the builder sets no
  // `filename`, nor a position's `index`.
  const locationAt = (range: Range) => {
    const { start, end } = getLocation(
      (lines ||= getLines(code)),
      range.start,
      range.end,
    );
    return {
      start: toBabelPosition(start),
      end: toBabelPosition(end),
    } as t.SourceLocation;
  };
  const withLoc = <
    T extends {
      start?: number | null;
      end?: number | null;
      loc?: t.SourceLocation | null;
    },
  >(
    node: T,
    range: Range,
  ): T => {
    node.start = range.start;
    node.end = range.end;
    node.loc = locationAt(range);
    return node;
  };

  const enterTag = (node: TagNode) => {
    const parent = currentTag;
    let container: t.Node[];
    let listKey: Frame["listKey"];
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
        parent.node.attributeTags.push(siblings.pop() as t.MarkoComment);
      }
      container = parent.node.attributeTags;
      listKey = "attributeTags";
    } else {
      container = parent.body.body;
      listKey = "body";
    }
    container.push(node);
    currentTag = {
      node,
      body: node.body,
      parent,
      container,
      listKey,
      path: undefined,
      visit: undefined,
    };
    onNext(node);
  };
  const pushContent = (node: t.Node) => {
    currentTag.body.body.push(node);
    onNext(node);
  };
  const endAttr = () => {
    if (currentAttr) {
      currentAttr.loc = locationAt(currentAttr as Range);
      currentAttr = undefined;
    }
  };
  // An open tag comment leads the attribute after it, else trails the one
  // before it, else is inner to the tag.
  const addOpenTagComments = (next?: t.Node) => {
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
  const pushAttr = <T extends t.MarkoAttribute | t.MarkoSpreadAttribute>(
    attr: T,
  ) => {
    addOpenTagComments(attr);
    currentTag.node.attributes.push(attr);
    return attr;
  };
  // A brace wrapped attribute value that only parses once unwrapped is almost
  // certainly a JSX/Svelte style value (eg `onClick={handler}`); say so instead
  // of surfacing the bare expression parse error.
  const withWrappedAttrValueHint = (
    value: Range,
    rawValue: string,
    node: t.Expression,
  ) => {
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
  const toBlock = (start: number, end: number) =>
    parseBlock(file, code.slice(start, end), start, end);
  // A tag name or shorthand: a lone placeholder is its expression, other
  // placeholders make a template literal.
  const parseTemplateString = ({
    quasis,
    expressions,
  }: Ranges.Template): t.Expression => {
    switch (expressions.length) {
      case 0: {
        const [first] = quasis;
        return withLoc(t.stringLiteral(read(first)), first);
      }
      case 1: {
        if (emptyRange(quasis[0]) && emptyRange(quasis[1])) {
          const [{ value }] = expressions;
          const result = parseExpression<t.Expression>(
            file,
            read(value),
            value.start,
            value.end,
          );
          if (result.type === "StringLiteral") {
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
    error(part: Ranges.Error) {
      const err = buildCodeFrameError(
        file.opts.filename,
        file.code,
        locationAt(part),
        part.message,
      );

      if (!file.___hasParseErrors) {
        throw err;
      }

      const errors: CompileError[] = [];
      t.traverseFast(file.path.node, (node) => {
        if (node.type === "MarkoParseError") {
          errors.push(
            buildCodeFrameError(
              file.opts.filename,
              file.code,
              (node.errorLoc || node.loc) as CompileError["loc"],
              node.label,
            ),
          );
        }
      });

      errors.push(err);
      throwAggregateError(errors);
    },
    text(part: Range) {
      const rawValue = read(part);

      if (preservingWhitespaceUntil) {
        pushContent(withLoc(t.markoText(rawValue), part));
        return;
      }

      // Only HTML's ASCII whitespace collapses; `\s` would also eat NBSP, U+2028/9 and U+FEFF.
      if (/^(?:[\n\r][ \t\n\r\f]*)?(?:[\n\r][ \t\n\r\f]*)?$/.test(rawValue))
        return;

      const { body } = currentTag.body;
      let prev: t.Node | undefined;
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
    cdata(part: Ranges.Value) {
      pushContent(withLoc(t.markoCDATA(read(part.value)), part));
    },
    doctype(part: Ranges.Value) {
      pushContent(withLoc(t.markoDocumentType(read(part.value)), part));
    },
    declaration(part: Ranges.Value) {
      pushContent(withLoc(t.markoDeclaration(read(part.value)), part));
    },
    comment(part: Ranges.Value) {
      pushContent(
        withLoc(
          t.markoComment(read(part.value), getCommentKind(code, part)),
          part,
        ),
      );
    },
    openTagComment(part: Ranges.Value) {
      (currentOpenTagComments ||= []).push(
        withLoc<t.Comment>(
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
    tagTypeArgs({ value }: Ranges.Value) {
      // A parse error stands in for the type arguments, as for any node.
      currentTag.node.typeArguments = parseTypeArgs(
        file,
        read(value),
        value.start,
        value.end,
      ) as t.TSTypeParameterInstantiation;
    },
    tagTypeParams({ value }: Ranges.Value) {
      currentTag.node.body.typeParameters = parseTypeParams(
        file,
        read(value),
        value.start,
        value.end,
      ) as t.TSTypeParameterDeclaration;
    },
    placeholder(part: Ranges.Placeholder) {
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
    scriptlet(part: Ranges.Scriptlet) {
      const block = toBlock(part.value.start, part.value.end);
      const scriptlet = t.markoScriptlet(block.body);
      scriptlet.innerComments = block.innerComments;
      pushContent(withLoc(scriptlet, part));
    },
    /** Opens a tag; returns how the taglibs parse its body. */
    openTagName(part: Ranges.Template) {
      const tagName = parseTemplateString(part);
      const node = t.markoTag(tagName, [], t.markoTagBody()) as TagNode;
      let parseType: TagType = TagType.html;
      node.start =
        part.start - (part.start && code[part.start - 1] === "<" ? 1 : 0); // Account for leading `<` in html mode.
      node.end = part.end;

      if (tagName.type === "StringLiteral") {
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
          const err = file.___taglibLookup.getTagError(literalTagName);
          if (err) {
            diagnosticError(file.path, {
              label: err.message,
              // Kept even when null: a diagnostic then has no location.
              loc: tagName.loc as DiagnosticOptions["loc"],
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
    tagShorthandId(part: Ranges.Template) {
      currentShorthandId = parseTemplateString(part);
    },
    tagShorthandClass(part: Ranges.Template) {
      const className = parseTemplateString(part);
      if (currentShorthandClassNames) {
        currentShorthandClassNames.push(className);
      } else {
        currentShorthandClassNames = [className];
      }
    },
    // A bare `|` union in a tag-var type is intentionally unsupported (write
    // `(A | B)`): htmljs-parser reserves `|` as the body-params delimiter.
    tagVar({ value }: Ranges.Value) {
      currentTag.node.var = parseVar(
        file,
        read(value),
        value.start,
        value.end,
      ) as t.LVal;
    },
    tagParams({ value }: Ranges.Value) {
      currentTag.node.body.params = parseParams(
        file,
        read(value),
        value.start,
        value.end,
      ) as t.MarkoTagBody["params"];
    },
    tagArgs({ value }: Ranges.Value) {
      currentTag.node.arguments = parseArgs(
        file,
        read(value),
        value.start,
        value.end,
      ) as t.MarkoTag["arguments"];
    },
    attrName(part: Range) {
      let name = read(part);
      let modifier: string | null = null;
      const modifierIndex = name.lastIndexOf(":");
      if (~modifierIndex) {
        modifier = name.slice(modifierIndex + 1);
        name = name.slice(0, modifierIndex);
      }

      endAttr();
      const attr = (currentAttr = pushAttr(
        t.markoAttribute(
          name || "value",
          { type: "BooleanLiteral", value: true } as t.BooleanLiteral,
          modifier,
          null,
          !name,
        ),
      ));

      attr.start = part.start;
      attr.end = part.end;
    },
    // An attribute's arguments, value and method follow its name, so these
    // have the attribute it opened.
    attrArgs({ value, end }: Ranges.Value) {
      const attr = currentAttr!;
      attr.arguments = parseArgs(
        file,
        read(value),
        value.start,
        value.end,
      ) as t.MarkoAttribute["arguments"];
      attr.end = end;
    },
    attrValue(part: Ranges.AttrValue) {
      const attr = currentAttr!;
      attr.end = part.end;
      attr.bound = part.bound;
      const rawAttrValue = read(part.value);
      attr.value = withWrappedAttrValueHint(
        part.value,
        rawAttrValue,
        parseExpression(file, rawAttrValue, part.value.start, part.value.end),
      );
    },
    attrMethod(part: Ranges.AttrMethod) {
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
      ) as t.FunctionExpression["params"];

      if (part.typeParams) {
        method.typeParameters = parseTypeParams(
          file,
          read(part.typeParams.value),
          part.typeParams.value.start,
          part.typeParams.value.end,
        ) as t.TSTypeParameterDeclaration;
      }

      const attr = currentAttr!;
      attr.end = part.end;
      attr.value = withLoc(method, part);
    },
    attrSpread(part: Ranges.Value) {
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
    openTagEnd(part: Ranges.OpenTagEnd) {
      const { node } = currentTag;
      const { attributes } = node;
      const parseOptions = node.tagDef?.parseOptions;
      endAttr();

      if (currentShorthandClassNames) {
        let foundClassAttr = false;
        const classShorthandValue =
          currentShorthandClassNames.length === 1
            ? currentShorthandClassNames[0]
            : currentShorthandClassNames.every(
                  (expr): expr is t.StringLiteral =>
                    expr.type === "StringLiteral",
                )
              ? withLoc(
                  t.stringLiteral(
                    currentShorthandClassNames
                      .map((node) => node.value)
                      .join(" "),
                  ),
                  {
                    start: currentShorthandClassNames[0].start!,
                    end: currentShorthandClassNames[
                      currentShorthandClassNames.length - 1
                    ].end!,
                  },
                )
              : t.arrayExpression(currentShorthandClassNames);

        // A spread has no name, so it is neither.
        for (const attr of attributes as t.MarkoAttribute[]) {
          if (attr.name === "class") {
            foundClassAttr = true;
            if (
              attr.value.type === "StringLiteral" &&
              classShorthandValue.type === "StringLiteral"
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
              const value = attr.value;
              attr.value = t.arrayExpression(
                t.isArrayExpression(classShorthandValue)
                  ? classShorthandValue.elements.concat(
                      t.isArrayExpression(value) ? value.elements : value,
                    )
                  : t.isArrayExpression(value)
                    ? (
                        [classShorthandValue] as t.ArrayExpression["elements"]
                      ).concat(value.elements)
                    : [classShorthandValue, value],
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
        // A spread has no name, so it is neither.
        for (const attr of attributes as t.MarkoAttribute[]) {
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
          node.rawValue = read({ start: node.name.start!, end: part.start });
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
    closeTagEnd(part: Range) {
      const frame = currentTag;
      const { node } = frame;
      const tagDef = node.tagDef;
      const parserPlugin = tagDef?.parser;
      if (preservingWhitespaceUntil === node) {
        preservingWhitespaceUntil = undefined;
      }

      node.end = part.end;
      node.loc = locationAt(node as Range);

      if (parserPlugin) {
        const { hook } = parserPlugin;
        if (parserPlugin.path) watchFiles.push(parserPlugin.path);
        frame.visit = ((hook as { default?: unknown }).default ||
          hook) as ParseVisit;
        parseVisits.push(frame);
      }

      const parentTag = frame.parent === root ? undefined : frame.parent;
      const { attributeTags } = node;

      if (attributeTags.length) {
        const isControlFlow = tagDef?.parseOptions?.controlFlow;

        if (node.body.body.length) {
          const body: t.MarkoTagBody["body"] = [];
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
              isControlFlowTag(child) &&
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

            // Empty here: body content throws above.
            node.attributeTags = body as t.MarkoTag["attributeTags"];
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
                (child): child is t.MarkoTag =>
                  t.isMarkoTag(child) && isAttrTag(child),
              )?.name || node.name,
              "@tags must be nested within another element.",
            );
          }

          // An attribute tag of the tag the control flow sits in.
          frame.container!.splice(frame.container!.indexOf(node), 1);
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
      const pathOf = (frame: Frame): t.NodePath<t.MarkoTag> => {
        if (!frame.path) {
          const owner = frame.parent!;
          const parentPath: t.NodePath =
            owner === root
              ? file.path
              : frame.listKey === "body"
                ? pathOf(owner).get("body")
                : pathOf(owner);
          // Babel takes the list as `container`, which its typings take for
          // the parent node.
          frame.path = (NodePath.get as (opts: object) => t.NodePath)({
            parentPath,
            parent: parentPath.node,
            container: frame.container!,
            listKey: frame.listKey,
            key: frame.container!.indexOf(frame.node),
          }).setContext(parentPath.context) as t.NodePath<t.MarkoTag>;
        }
        return frame.path;
      };
      for (const frame of parseVisits) {
        frame.visit!(pathOf(frame));
      }

      const { ast } = file;
      ast.start = program.start = 0;
      ast.end = program.end = code.length - 1;
      ast.loc = program.loc = {
        start: { line: 1, column: 0 },
        end: positionAt(ast.end),
      } as t.SourceLocation;
    },
  };
  return builder;
}

function getCommentKind(code: string, part: Range) {
  switch (code.charCodeAt(part.start + 1)) {
    case 47 /* / */:
      return "line";
    case 42 /* * */:
      return "block";
    default:
      return "html";
  }
}

function sortByStart(a: t.Node, b: t.Node) {
  return a.start! - b.start!;
}

function templateElement(value: string, tail: boolean) {
  return t.templateElement({ raw: value, cooked: value }, tail);
}

const tagVarAfterNameReg = /^\/([A-Za-z_$][\w$]*)/;
const statementTagExample: Record<string, string> = {
  class: "class { … }",
  client: 'client console.log("…")',
  export: "export const value = …",
  import: 'import Tag from "<tag>"',
  server: 'server console.log("…")',
  static: "static const value = …",
};
function statementTagInHTMLModeError(
  tagName: string,
  code: string,
  nameEnd: number,
) {
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
