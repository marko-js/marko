import path from "path";
import { types as t } from "@marko/babel-types";
import { getClientPath } from "lasso-modules-client/transport";
import { parse, parseExpression } from "@babel/parser";
import createFile from "./util/create-file";
import codeFrameError from "./util/code-frame-error";
import codeFrameWarning from "./util/code-frame-warning";
import { getLocRange } from "./util/get-loc";
import checksum from "./util/checksum";
export class Hub {
  constructor(filename, code, options) {
    this._code = code;
    this.options = options;
    this.filename = filename;
    this.file = createFile(filename, code);
    this.lookup = this.options.lookup;
    this.macros = Object.create(null);
    this.meta = this.file.markoMeta = {
      id: checksum(this.getClientPath(this.filename)),
      deps: [],
      tags: []
    };
    this._imports = Object.create(null);
  }

  getCode() {
    return this._code;
  }

  getWhitespaceBefore(pos) {
    return (
      this._codeAsWhitespace ||
      (this._codeAsWhitespace = this._code.replace(/[^\n\r ]/g, " "))
    ).slice(0, pos);
  }

  buildError(node, msg) {
    return codeFrameError(this.filename, this._code, msg, node.start, node.end);
  }

  buildWarning(node, msg) {
    return codeFrameWarning(this.filename, this._code, msg, node);
  }

  getClientPath(file) {
    return getClientPath(file);
  }

  resolveRelativePath(filename) {
    const dir = path.dirname(this.filename);
    let relativePath = path.isAbsolute(filename)
      ? path.relative(dir, filename)
      : filename;
    if (/^[^./]/.test(relativePath)) relativePath = `./${relativePath}`;
    return relativePath.replace(/^(?:\.{1,2}\/)+node_modules\//, "");
  }

  importDefault(path, file, nameHint) {
    file = remapProductionMarkoBuild(path, file);
    const { _imports } = this;
    let importDeclaration = _imports[file];

    if (!importDeclaration) {
      importDeclaration = _imports[file] = this.program.pushContainer(
        "body",
        t.importDeclaration([], t.stringLiteral(file))
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

  importNamed(path, file, name, nameHint = name) {
    file = remapProductionMarkoBuild(path, file);
    const { _imports } = this;
    let importDeclaration = _imports[file];

    if (!importDeclaration) {
      importDeclaration = _imports[file] = this.program.pushContainer(
        "body",
        t.importDeclaration([], t.stringLiteral(file))
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
    this.program.pushContainer("body", node);
  }

  createNode(type, start, end, ...args) {
    return {
      ...t[type](...args),
      ...getLocRange(this._code, start, end)
    };
  }

  parse(str, start) {
    return this._tryParseJS(false, str, start);
  }

  parseExpression(str, start) {
    return this._tryParseJS(true, str, start);
  }

  _tryParseJS(isExpression, str, start) {
    const opts = this.options.jsParseOptions;
    str = this.getWhitespaceBefore(start) + str;

    try {
      return isExpression
        ? parseExpression(str, opts)
        : parse(str, opts).program;
    } catch (err) {
      let { pos, message } = err;
      if (pos) {
        throw codeFrameError(
          this.filename,
          this._code,
          message.replace(/ *\(\d+:\d+\)$/, ""),
          pos
        );
      } else {
        throw err;
      }
    }
  }
}

function remapProductionMarkoBuild(path, file) {
  const {
    hub: {
      options: { isProduction }
    }
  } = path;
  if (!isProduction) return file;
  return file.replace(/^marko\/src\//, "marko/dist/");
}
