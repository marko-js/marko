import path from "path";
import { types as t } from "@marko/babel-types";
import { File } from "@babel/core";
import { parse, parseExpression } from "@babel/parser";
import { codeFrameColumns } from "@babel/code-frame";
import { getRootDir } from "lasso-package-root";
import { buildLookup } from "../taglib";
import { getLoc, getLocRange } from "./util/pos-to-loc";
import checksum from "./util/checksum";
const CWD = process.cwd();
let ROOT;

try {
  ROOT = getRootDir(CWD);
} catch {
  ROOT = CWD;
}

const toPosix =
  path.sep === "/"
    ? v => v
    : v => {
        let result = "";
        for (let i = v.length; i--; ) {
          const c = v[i];
          result = (c === path.sep ? "/" : c) + result;
        }

        return result;
      };

export class MarkoFile extends File {
  constructor(filename, code, jsParseOptions, markoOptions) {
    super(
      {
        filename,
        code
      },
      {
        code,
        ast: {
          type: "File",
          program: {
            type: "Program",
            sourceType: "module",
            body: [],
            directives: []
          }
        }
      }
    );

    const id = path.relative(ROOT, filename);
    this.ast.start = this.ast.program.start = 0;
    this.ast.end = this.ast.program.end = code.length - 1;
    this.ast.loc = this.ast.program.loc = {
      start: { line: 0, column: 0 },
      end: getLoc(this, this.ast.end)
    };
    this._jsParseOptions = jsParseOptions;
    this._markoOptions = markoOptions;
    this._fs = markoOptions.fileSystem;
    this._lookup = buildLookup(path.dirname(filename), markoOptions.translator);
    this._imports = Object.create(null);
    this._macros = Object.create(null);
    this._seenTagDefs = new Set();
    this._watchFiles = new Set();
    this.metadata.marko = {
      id: markoOptions.isProduction ? checksum(id) : id,
      deps: [],
      tags: []
    };
  }

  addHelper() {
    throw new Error("addHelper is not supported during a Marko transform");
  }

  buildCodeFrameError(node, msg, Error = SyntaxError) {
    const { loc } = node;
    const frame = codeFrameColumns(
      this.code,
      loc && {
        start: {
          line: loc.start.line,
          column: loc.start.column + 1
        },
        end:
          loc.end && loc.start.line === loc.end.line
            ? {
                line: loc.end.line,
                column: loc.end.column + 1
              }
            : undefined
      },
      { highlightCode: true }
    );

    const position = loc ? `(${loc.start.line},${loc.start.column + 1})` : "";
    return new Error(
      `${path.relative(CWD, this.opts.filename)}${position}: ${msg}\n${frame}`
    );
  }

  // TODO: all methods not implemented by `@babel/core File` should be moved into helpers in `@marko/babel-utils`.
  getWhitespaceBefore(pos) {
    return (
      this._codeAsWhitespace ||
      (this._codeAsWhitespace = this.code.replace(/[^\s]/g, " "))
    ).slice(0, pos);
  }

  getTagDef(tagName) {
    const tagDef = this._lookup.getTag(tagName);

    if (tagDef) {
      if (!this._seenTagDefs.has(tagDef)) {
        this._seenTagDefs.add(tagName);
        const { filePath } = tagDef;
        const len = filePath.length;

        if (filePath[len - 14] === "m" && filePath.endsWith("marko-tag.json")) {
          this._watchFiles.add(filePath);
        }
      }
    }
    return tagDef;
  }

  resolveRelativePath(request) {
    if (request[0] === ".") {
      return request;
    }

    const { filename } = this.opts;
    let relativePath = toPosix(path.relative(path.dirname(filename), request));
    if (relativePath[0] !== ".") relativePath = `./${relativePath}`;
    return relativePath.replace(/^(?:\.{1,2}\/)+node_modules\//, "");
  }

  importDefault(path, request, nameHint) {
    request = remapProductionMarkoBuild(path, request);
    const { _imports } = this;
    let importDeclaration = _imports[request];

    if (!importDeclaration) {
      importDeclaration = _imports[request] = this.path.pushContainer(
        "body",
        t.importDeclaration([], t.stringLiteral(request))
      )[0];
    }

    if (!nameHint) {
      return;
    }

    const specifiers = importDeclaration.get("specifiers");
    const specifier = specifiers.find(specifier =>
      specifier.isImportDefaultSpecifier()
    );

    if (!specifier) {
      const identifier = path.scope.generateUidIdentifier(nameHint);
      importDeclaration.pushContainer(
        "specifiers",
        t.importDefaultSpecifier(identifier)
      );
      return identifier;
    }

    return t.identifier(specifier.node.local.name);
  }

  importNamed(path, request, name, nameHint = name) {
    request = remapProductionMarkoBuild(path, request);
    const { _imports } = this;
    let importDeclaration = _imports[request];

    if (!importDeclaration) {
      importDeclaration = _imports[request] = this.path.pushContainer(
        "body",
        t.importDeclaration([], t.stringLiteral(request))
      )[0];
    }

    const specifiers = importDeclaration.get("specifiers");
    const specifier = specifiers.find(
      specifier =>
        specifier.isImportSpecifier() && specifier.node.imported.name === name
    );

    if (!specifier) {
      const identifier = path.scope.generateUidIdentifier(nameHint);
      importDeclaration.pushContainer(
        "specifiers",
        t.importSpecifier(identifier, t.identifier(name))
      );
      return identifier;
    }

    return t.identifier(specifier.node.local.name);
  }

  createNode(type, start, end, ...args) {
    const node = t[type](...args);
    node.loc = getLocRange(this, start, end);
    node.start = start;
    node.end = end;
    return node;
  }

  parse(str, start) {
    return this._tryParseJS(false, str, start);
  }

  parseExpression(str, start) {
    return this._tryParseJS(true, str, start);
  }

  _tryParseJS(isExpression, str, start) {
    const opts = this._jsParseOptions;
    str = this.getWhitespaceBefore(start) + str;

    try {
      return isExpression
        ? parseExpression(str, opts)
        : parse(str, opts).program;
    } catch (err) {
      let { loc, message } = err;
      if (loc) {
        throw this.buildCodeFrameError(
          { loc: { start: loc } },
          message.replace(/ *\(\d+:\d+\)$/, "")
        );
      } else {
        throw err;
      }
    }
  }
}

function remapProductionMarkoBuild(path, request) {
  const {
    hub: {
      file: {
        _markoOptions: { isProduction }
      }
    }
  } = path;
  if (!isProduction) return request;
  return request.replace(/^marko\/src\//, "marko/dist/");
}
