import path from "path";
import { types as t } from "@marko/babel-types";
import { File } from "@babel/core";
import { parse, parseExpression } from "@babel/parser";
import { codeFrameColumns } from "@babel/code-frame";
import { getClientPath } from "lasso-modules-client/transport";
import { buildLookup } from "../taglib";
import { getLoc, getLocRange } from "./util/get-loc";
import checksum from "./util/checksum";
const CWD = process.cwd();

export class MarkoFile extends File {
  constructor(filename, code, jsParseOptions, markoOptions) {
    const start = { line: 0, column: 0 };
    const end = getLoc(code, code.length);
    const loc = { start, end, loc: { start, end } };
    super(
      {
        filename,
        code
      },
      {
        code,
        ast: {
          type: "File",
          ...loc,
          program: {
            type: "Program",
            sourceType: "module",
            ...loc,
            body: [],
            directives: []
          }
        }
      }
    );

    this._jsParseOptions = jsParseOptions;
    this._markoOptions = markoOptions;
    this._lookup = buildLookup(path.dirname(filename), markoOptions.translator);
    this._imports = Object.create(null);
    this._macros = Object.create(null);
    this._meta = {
      id: checksum(this.getClientPath(filename)),
      deps: [],
      tags: []
    };
  }

  addHelper() {
    throw new Error("addHelper is not supported during a Marko transform");
  }

  buildCodeFrameError(node, msg, Error = SyntaxError) {
    const start = getLoc(this.code, node.start);
    const end = node.end != null && getLoc(this.code, node.end);
    const frame = codeFrameColumns(
      this.code,
      { start, end },
      { highlightCode: true }
    );
    const position = start.column
      ? `(${start.line},${start.column})`
      : `:${start.line || 0}`;
    return new Error(
      `${path.relative(CWD, this.opts.filename)}${position}: ${msg}\n${frame}`
    );
  }

  // TODO: all methods not implemented by `@babel/core File` should be moved into helpers in `@marko/babel-utils`.
  getWhitespaceBefore(pos) {
    return (
      this._codeAsWhitespace ||
      (this._codeAsWhitespace = this.code.replace(/[^\n\r ]/g, " "))
    ).slice(0, pos);
  }

  getClientPath(filename) {
    return getClientPath(filename);
  }

  resolveRelativePath(filename) {
    const dir = path.dirname(this.opts.filename);
    let relativePath = path.isAbsolute(filename)
      ? path.relative(dir, filename)
      : filename;
    if (/^[^./]/.test(relativePath)) relativePath = `./${relativePath}`;
    return relativePath.replace(/^(?:\.{1,2}\/)+node_modules\//, "");
  }

  importDefault(path, filename, nameHint) {
    filename = remapProductionMarkoBuild(path, filename);
    const { _imports } = this;
    let importDeclaration = _imports[filename];

    if (!importDeclaration) {
      importDeclaration = _imports[filename] = this.path.pushContainer(
        "body",
        t.importDeclaration([], t.stringLiteral(filename))
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

  importNamed(path, filename, name, nameHint = name) {
    filename = remapProductionMarkoBuild(path, filename);
    const { _imports } = this;
    let importDeclaration = _imports[filename];

    if (!importDeclaration) {
      importDeclaration = _imports[filename] = this.path.pushContainer(
        "body",
        t.importDeclaration([], t.stringLiteral(filename))
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

  addStaticNode(node) {
    this.path.pushContainer("body", node);
  }

  createNode(type, start, end, ...args) {
    return {
      ...t[type](...args),
      ...getLocRange(this.code, start, end)
    };
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
      let { pos, message } = err;
      if (pos) {
        throw this.buildCodeFrameError(
          { start: pos },
          message.replace(/ *\(\d+:\d+\)$/, "")
        );
      } else {
        throw err;
      }
    }
  }
}

function remapProductionMarkoBuild(path, filename) {
  const {
    hub: {
      file: {
        _markoOptions: { isProduction }
      }
    }
  } = path;
  if (!isProduction) return filename;
  return filename.replace(/^marko\/src\//, "marko/dist/");
}
