import path from "path";

import { types as t } from "@marko/compiler/internal/babel";

import { diagnosticError } from "../babel-utils/diagnostics";
import type { CompileFile } from "../util/compile-file";
import { forEachBindingId, forEachDeclaredId, member } from "./util/ast";

/** A node or list holding a child at a key. */
type Container = object;
interface Scope {
  parent: Scope | undefined;
  /** The scope its `var`s belong to: a function's body, or the module. */
  fn: Scope;
  /** Whether `this` in it is the module's own. */
  moduleThis: boolean;
}
interface Site {
  container: Container;
  key: string | number;
  node: t.Node;
}
interface IdSite extends Site {
  node: t.Identifier;
  parent: t.Node;
  scope: Scope;
}
/** An assignment, update or `for` head writing to exported bindings. */
interface WriteSite extends Site {
  parent: t.Node | null;
  scope: Scope;
  names: string[];
}
type HelperKind = "interopDefault" | "interopNamespace";
type Declaration = t.Statement | t.VariableDeclarator;
interface Source {
  request: string;
  name: string;
  /** Whether a binding is imported from it by name or as its default. */
  hasImports: boolean;
  namespaces: string[];
  /** Each export of the module's: its name and import, or none for the module itself. */
  reexports: [name: string, imported: string | undefined][];
  reexportAll: boolean;
  needsDefault: boolean;
  needsNamed: boolean;
}

const { VISITOR_KEYS } = t;
// CommonJS's own names, which a module's top-level bindings can't take, nor, as the
// output reads them, any binding the first two.
const reservedNames = new Set([
  "exports",
  "require",
  "module",
  "__filename",
  "__dirname",
]);
/**
 * Converts a translated template to CommonJS as Babel's loose mode did: each export
 * assigned where it is declared, and again after each write to its binding.
 */
export function toCommonJS(file: CompileFile) {
  const program = file.ast.program;
  const { body } = program;
  // The bindings imported by name or as a default, whose reads become reads of the module.
  const imports = new Set<string>();
  // The bindings of namespace imports, whose reads stay as written.
  const namespaces = new Set<string>();
  const reserved: t.Identifier[] = [];
  // Exports named `__esModule`, which would overwrite the module's own.
  const esModule: t.Node[] = [];
  // The module's own bindings it exports by name.
  const exported = new Set<string>();
  // The statement, or a variable declaration's declarator, declaring each of the module's own
  // top-level bindings.
  const declarations = new Map<string, Declaration>();
  const walk = new Walk(imports, namespaces, exported, reserved);
  for (let i = 0; i < body.length; i++) {
    const node = body[i];
    if (node.type === "ImportDeclaration") {
      const { specifiers } = node;
      for (let j = 0; j < specifiers.length; j++) {
        const spec = specifiers[j];
        const { name } = spec.local;
        if (reservedNames.has(name)) reserved.push(spec.local);
        // The walk skips imports, so their names count here; a namespace's reads stay as written.
        walk.count(name);
        if (spec.type === "ImportNamespaceSpecifier") namespaces.add(name);
        else imports.add(name);
      }
    } else {
      const declaration =
        node.type === "ExportNamedDeclaration" ||
        node.type === "ExportDefaultDeclaration"
          ? node.declaration
          : node;
      if (declaration?.type === "VariableDeclaration") {
        const declarators = declaration.declarations;
        for (let j = 0; j < declarators.length; j++) {
          const declarator = declarators[j];
          forEachBindingId(
            declarator.id,
            setDeclaration,
            declarations,
            declarator,
          );
        }
      } else if (declaration) {
        forEachDeclaredId(
          declaration,
          setDeclaration,
          declarations,
          declaration as t.Statement,
        );
      }
      if (declaration) {
        if (node !== declaration) {
          forEachDeclaredId(declaration, addExported, exported, esModule);
        }
      } else if (node.type === "ExportNamedDeclaration") {
        const { specifiers } = node;
        for (let j = 0; j < specifiers.length; j++) {
          const spec = specifiers[j];
          if (nameOf(spec.exported) === "__esModule")
            esModule.push(spec.exported);
          if (!node.source) {
            exported.add(nameOf((spec as t.ExportSpecifier).local));
          }
        }
      }
    }
  }

  walk.visitStatements(body, functionScope(undefined, true));
  // A template that can't convert reports each reason and, as with any error, is left empty.
  let failed = false;
  for (const id of reserved) {
    failed = report(
      file,
      id,
      `"${id.name}" is CommonJS's own name, so a template compiled to CommonJS can't declare it.`,
    );
  }
  for (const node of esModule) {
    failed = report(
      file,
      node,
      `"__esModule" marks a module compiled from ES modules, so a template compiled to CommonJS can't export it.`,
    );
  }
  for (const { node, scope } of walk.importWrites) {
    if (!walk.isShadowed(node.name, scope)) {
      failed = report(
        file,
        node,
        `"${node.name}" is an import, which can't be assigned.`,
      );
    }
  }
  if (failed) {
    program.body = [];
    return;
  }

  const sources = new Map<string, Source>();
  // The sources in order, as arrays iterate without allocating.
  const sourceList: Source[] = [];
  // Each import's source, its name there (none for a namespace), and whether that name is an
  // identifier, read as `$m.name` rather than `$m["name"]`.
  const imported = new Map<
    string,
    [source: Source, name: string | undefined, isName: boolean]
  >();
  // Each export of a local binding: its name and the binding's.
  const locals: [name: string, local: string][] = [];

  // The program without its module syntax; what it imported and exported, recorded.
  const statements: t.Statement[] = [];
  for (let i = 0; i < body.length; i++) {
    const node = body[i];
    switch (node.type) {
      case "ImportDeclaration": {
        const s = getSource(sources, sourceList, node.source.value);
        const { specifiers } = node;
        for (let j = 0; j < specifiers.length; j++) {
          const spec = specifiers[j];
          if (spec.type === "ImportNamespaceSpecifier") {
            s.namespaces.push(spec.local.name);
            imported.set(spec.local.name, [s, undefined, false]);
            s.needsDefault = s.needsNamed = true;
          } else if (spec.type === "ImportDefaultSpecifier") {
            imported.set(spec.local.name, [s, "default", true]);
            s.hasImports = s.needsDefault = true;
          } else {
            const name = nameOf(spec.imported);
            imported.set(spec.local.name, [
              s,
              name,
              spec.imported.type === "Identifier" ||
                t.isValidIdentifier(name, false),
            ]);
            s.hasImports = true;
            if (name === "default") s.needsDefault = true;
            else s.needsNamed = true;
          }
        }
        break;
      }
      case "ExportAllDeclaration": {
        const s = getSource(sources, sourceList, node.source.value);
        s.reexportAll = s.needsNamed = true;
        break;
      }
      case "ExportNamedDeclaration":
        if (node.declaration) {
          forEachDeclaredId(node.declaration, pushLocal, locals);
          inheritComments(node.declaration, node);
          statements.push(node.declaration);
        } else if (node.source) {
          const s = getSource(sources, sourceList, node.source.value);
          for (const spec of node.specifiers) {
            const name = nameOf(spec.exported);
            if (spec.type === "ExportNamespaceSpecifier") {
              s.needsDefault = s.needsNamed = true;
              s.reexports.push([name, undefined]);
            } else {
              const importName = nameOf((spec as t.ExportSpecifier).local);
              if (importName === "default") s.needsDefault = true;
              else s.needsNamed = true;
              s.reexports.push([name, importName]);
            }
          }
        } else {
          for (const spec of node.specifiers as t.ExportSpecifier[]) {
            locals.push([nameOf(spec.exported), nameOf(spec.local)]);
          }
        }
        break;
      case "ExportDefaultDeclaration": {
        // Every template has one, assigned where it is declared.
        const { declaration } = node;
        if (
          declaration.type === "FunctionDeclaration" ||
          declaration.type === "ClassDeclaration"
        ) {
          statements.push(declaration);
          node.declaration = t.identifier(
            (declaration.id ||= t.identifier(walk.uid("default"))).name,
          );
        }
        statements.push(node);
        break;
      }
      default:
        statements.push(node);
    }
  }

  // Each source's binding, and each reference to an import read through it.
  for (let i = 0; i < sourceList.length; i++) {
    const s = sourceList[i];
    s.name =
      s.namespaces.length === 1 && !s.hasImports
        ? s.namespaces[0]
        : walk.uid(path.basename(s.request, path.extname(s.request)));
  }
  const { refs } = walk;
  for (let i = 0; i < refs.length; i++) {
    const site = refs[i];
    const binding = imported.get(site.node.name);
    if (
      binding?.[1] === undefined ||
      walk.isShadowed(site.node.name, site.scope)
    ) {
      continue;
    }
    const ref = member(t.identifier(binding[0].name), binding[1], binding[2]);
    ref.loc = site.node.loc;
    const { parent } = site;
    // `{ x }` reads `{ x: $m.x }`.
    if (parent.type === "ObjectProperty") parent.shorthand = false;
    replace(
      site,
      ((parent.type === "CallExpression" ||
        parent.type === "OptionalCallExpression") &&
        site.key === "callee") ||
        (parent.type === "TaggedTemplateExpression" && site.key === "tag")
        ? unbound(ref)
        : ref,
    );
  }
  for (const site of walk.thisSites) {
    replace(site, t.unaryExpression("void", t.numericLiteral(0), true));
  }

  // A function's export comes first, as it is hoisted; any other's follows its declaration,
  // and an import's its require.
  const headers: t.Statement[] = [
    exportAssignment("__esModule", t.booleanLiteral(true)),
  ];
  const after = new Map<Declaration, t.Statement[]>();
  // Each exported local binding's export names.
  const exportNames = new Map<string, string[]>();
  for (let i = 0; i < locals.length; i++) {
    const [name, localName] = locals[i];
    const binding = imported.get(localName);
    if (binding) {
      binding[0].reexports.push([name, binding[1]]);
      continue;
    }
    const names = exportNames.get(localName);
    if (names) names.push(name);
    else exportNames.set(localName, [name]);
    const declaration = declarations.get(localName);
    const assign = exportAssignment(name, t.identifier(localName));
    if (!declaration || declaration.type === "FunctionDeclaration") {
      headers.push(assign);
    } else {
      const list = after.get(declaration);
      if (list) list.push(assign);
      else after.set(declaration, [assign]);
    }
  }

  // Each write to an exported binding updates its exports, keeping the write's value.
  let temp: string | undefined;
  for (const site of walk.writes) {
    const updates: t.Expression[] = [];
    for (const name of site.names) {
      const names = exportNames.get(name);
      if (!names || walk.isShadowed(name, site.scope)) continue;
      for (const exportName of names) {
        updates.push(exportUpdate(exportName, t.identifier(name)));
      }
    }
    if (!updates.length) continue;
    const { node, parent } = site;
    if (node.type === "ForInStatement" || node.type === "ForOfStatement") {
      // The body keeps a block of its own, where it may declare the name again.
      const statements: t.Statement[] = updates.map(toStatement);
      if (node.body.type !== "EmptyStatement") statements.push(node.body);
      node.body = t.blockStatement(statements);
      continue;
    }
    let write = node as t.Expression;
    if (
      (node.type === "UpdateExpression" && !node.prefix) ||
      (node.type === "AssignmentExpression" && node.left.type !== "Identifier")
    ) {
      if (
        parent?.type !== "ExpressionStatement" &&
        !(parent?.type === "ForStatement" && site.key === "update")
      ) {
        // `(temp = write, exports.x = x, temp)`
        const value = t.identifier((temp ||= walk.uid("temp")));
        write = t.assignmentExpression("=", value, write);
        replace(
          site,
          t.sequenceExpression([write, ...updates, t.identifier(temp)]),
        );
        continue;
      }
      if (node.type !== "UpdateExpression") {
        replace(site, t.sequenceExpression([write, ...updates]));
        continue;
      }
      node.prefix = true;
    }
    // `exports.x = x = v`, `exports.x = ++x`
    for (const update of updates) {
      (update as t.AssignmentExpression).right = write;
      write = update;
    }
    replace(site, write);
  }
  if (temp) {
    headers.push(
      t.variableDeclaration("var", [t.variableDeclarator(t.identifier(temp))]),
    );
  }
  const helpers = new Map<HelperKind, string>();
  for (let i = 0; i < sourceList.length; i++) {
    const s = sourceList[i];
    let load: t.Expression = t.callExpression(t.identifier("require"), [
      t.stringLiteral(s.request),
    ]);
    if (!s.needsDefault && !s.needsNamed) {
      headers.push(t.expressionStatement(load));
      continue;
    }
    // Node's loader sees a re-export only from what `require` itself returned.
    let all = s.name;
    if (s.reexportAll && s.needsDefault) {
      all = walk.uid(path.basename(s.request, path.extname(s.request)));
      headers.push(
        t.variableDeclaration("var", [
          t.variableDeclarator(t.identifier(all), load),
        ]),
      );
      load = t.identifier(all);
    }
    headers.push(
      t.variableDeclaration("var", [
        t.variableDeclarator(
          t.identifier(s.name),
          s.needsDefault
            ? t.callExpression(
                helperId(
                  helpers,
                  walk,
                  s.needsNamed ? "interopNamespace" : "interopDefault",
                ),
                [load],
              )
            : load,
        ),
      ]),
    );
    for (const name of s.namespaces) {
      if (name !== s.name) {
        headers.push(
          t.variableDeclaration("var", [
            t.variableDeclarator(t.identifier(name), t.identifier(s.name)),
          ]),
        );
      }
    }
    for (const [name, importName] of s.reexports) {
      const namespace = t.identifier(s.name);
      headers.push(
        exportAssignment(
          name,
          importName === undefined ? namespace : member(namespace, importName),
        ),
      );
    }
    // Copies each export this module has not yet; its own default and the rest come later.
    if (s.reexportAll) headers.push(copyExports(all));
  }
  for (const [kind, name] of helpers) {
    headers.push(
      kind === "interopDefault" ? interopDefault(name) : interopNamespace(name),
    );
  }

  // The headers start the new body, which replaces the old one.
  for (let i = 0; i < statements.length; i++) {
    const statement = statements[i];
    if (statement.type === "ExportDefaultDeclaration") {
      headers.push(
        inheritComments(
          exportAssignment("default", statement.declaration as t.Expression),
          statement,
        ),
      );
    } else if (statement.type === "VariableDeclaration") {
      pushDeclaration(headers, statement, after);
    } else {
      headers.push(statement);
      const assigns = after.get(statement);
      if (assigns) for (const assign of assigns) headers.push(assign);
    }
  }
  program.body = headers;
  if (!hasUseStrict(program.directives)) {
    program.directives.unshift(t.directive(t.directiveLiteral("use strict")));
  }
  program.sourceType = "script";
}

// Each interop helper is declared by `name` for one module.
// function $(m) { return m && m.__esModule ? m : { default: m }; }
function interopDefault(name: string) {
  return t.functionDeclaration(
    t.identifier(name),
    [t.identifier("m")],
    t.blockStatement([
      t.returnStatement(
        t.conditionalExpression(isESModule(), t.identifier("m"), wrapDefault()),
      ),
    ]),
  );
}

// As Babel's `_interopRequireWildcard`: function $(m) { if (m && m.__esModule) return m;
// var ns = { __proto__: null, default: m }; if (typeof m !== "string") for (var k in m)
// if (k !== "default" && Object.prototype.hasOwnProperty.call(m, k))
// Object.defineProperty(ns, k, Object.getOwnPropertyDescriptor(m, k)); return ns; }
function interopNamespace(name: string) {
  return t.functionDeclaration(
    t.identifier(name),
    [t.identifier("m")],
    t.blockStatement([
      t.ifStatement(isESModule(), t.returnStatement(t.identifier("m"))),
      t.variableDeclaration("var", [
        t.variableDeclarator(
          t.identifier("ns"),
          t.objectExpression([
            t.objectProperty(t.identifier("__proto__"), t.nullLiteral()),
            t.objectProperty(t.identifier("default"), t.identifier("m")),
          ]),
        ),
      ]),
      t.ifStatement(
        t.binaryExpression(
          "!==",
          t.unaryExpression("typeof", t.identifier("m")),
          t.stringLiteral("string"),
        ),
        t.forInStatement(
          t.variableDeclaration("var", [
            t.variableDeclarator(t.identifier("k")),
          ]),
          t.identifier("m"),
          t.ifStatement(
            t.logicalExpression(
              "&&",
              t.binaryExpression(
                "!==",
                t.identifier("k"),
                t.stringLiteral("default"),
              ),
              hasOwn(t.identifier("m"), t.identifier("k")),
            ),
            t.expressionStatement(
              objectCall("defineProperty", [
                t.identifier("ns"),
                t.identifier("k"),
                objectCall("getOwnPropertyDescriptor", [
                  t.identifier("m"),
                  t.identifier("k"),
                ]),
              ]),
            ),
          ),
        ),
      ),
      t.returnStatement(t.identifier("ns")),
    ]),
  );
}

// Each read of an import and each export makes the nodes below, so they're built as Babel's
// builders build them but unchecked: valid by construction, and the checks cost more.

// `exports.name = value;`
function exportAssignment(
  name: string,
  value: t.Expression,
): t.ExpressionStatement {
  return { type: "ExpressionStatement", expression: exportUpdate(name, value) };
}

// `exports.name = value`
function exportUpdate(
  name: string,
  value: t.Expression,
): t.AssignmentExpression {
  return {
    type: "AssignmentExpression",
    operator: "=",
    left: member(t.identifier("exports"), name),
    right: value,
  };
}

// `(0, ref)`, which calls `ref` without its object as `this`.
function unbound(ref: t.Expression): t.SequenceExpression {
  return {
    type: "SequenceExpression",
    expressions: [{ type: "NumericLiteral", value: 0 }, ref],
  };
}

// `Object.keys(m).forEach(function (key) { if (key === "default" || key === "__esModule")
// return; if (Object.prototype.hasOwnProperty.call(exports, key)) return; exports[key] =
// m[key]; });`, as Babel wrote it, so Node's ES module loader sees each name it re-exports.
function copyExports(name: string) {
  return t.expressionStatement(
    t.callExpression(
      t.memberExpression(
        objectCall("keys", [t.identifier(name)]),
        t.identifier("forEach"),
      ),
      [
        t.functionExpression(
          null,
          [keyId()],
          t.blockStatement([
            t.ifStatement(
              t.logicalExpression("||", keyIs("default"), keyIs("__esModule")),
              t.returnStatement(),
            ),
            t.ifStatement(hasOwn(exportsId(), keyId()), t.returnStatement()),
            t.expressionStatement(
              t.assignmentExpression(
                "=",
                t.memberExpression(exportsId(), keyId(), true),
                t.memberExpression(t.identifier(name), keyId(), true),
              ),
            ),
          ]),
        ),
      ],
    ),
  );
}

// `key === value`
function keyIs(value: string) {
  return t.binaryExpression("===", keyId(), t.stringLiteral(value));
}

function keyId() {
  return t.identifier("key");
}

function exportsId() {
  return t.identifier("exports");
}

// `Object.prototype.hasOwnProperty.call(object, key)`
function hasOwn(object: t.Expression, key: t.Expression) {
  return t.callExpression(
    t.memberExpression(
      t.memberExpression(
        t.memberExpression(t.identifier("Object"), t.identifier("prototype")),
        t.identifier("hasOwnProperty"),
      ),
      t.identifier("call"),
    ),
    [object, key],
  );
}

// `Object.name(...args)`
function objectCall(name: string, args: t.Expression[]) {
  return t.callExpression(
    t.memberExpression(t.identifier("Object"), t.identifier(name)),
    args,
  );
}

// `m && m.__esModule`
function isESModule() {
  return t.logicalExpression(
    "&&",
    t.identifier("m"),
    t.memberExpression(t.identifier("m"), t.identifier("__esModule")),
  );
}

// `{ default: m }`
function wrapDefault() {
  return t.objectExpression([
    t.objectProperty(t.identifier("default"), t.identifier("m")),
  ]);
}

// The record of what the module imports from and re-exports of `request`.
function getSource(
  sources: Map<string, Source>,
  sourceList: Source[],
  request: string,
) {
  let s = sources.get(request);
  if (!s) {
    sourceList.push(
      (s = {
        request,
        name: "",
        hasImports: false,
        namespaces: [],
        reexports: [],
        reexportAll: false,
        needsDefault: false,
        needsNamed: false,
      }),
    );
    sources.set(request, s);
  }
  return s;
}

// The uid naming the module's `kind` interop helper, declared once.
function helperId(
  helpers: Map<HelperKind, string>,
  walk: Walk,
  kind: HelperKind,
) {
  let name = helpers.get(kind);
  if (!name) helpers.set(kind, (name = walk.uid(kind)));
  return t.identifier(name);
}

function toStatement(expression: t.Expression) {
  return t.expressionStatement(expression);
}

// Babel's `inheritsComments`, which copies each of three lists through a `Set` even when
// both nodes have none, and then leaves empty lists that print as nothing.
function inheritComments<T extends t.Node>(child: T, parent: t.Node) {
  return parent.leadingComments ||
    parent.trailingComments ||
    parent.innerComments ||
    child.leadingComments ||
    child.trailingComments ||
    child.innerComments
    ? t.inheritsComments(child, parent)
    : child;
}

function hasUseStrict(directives: t.Directive[]) {
  for (const directive of directives) {
    if (directive.value.value === "use strict") return true;
  }
  return false;
}

// Puts `node` in the place of the child at `site`.
function replace(site: Site, node: t.Node) {
  (site.container as Record<string | number, t.Node>)[site.key] = node;
}

function nameOf(node: t.Node) {
  return node.type === "StringLiteral"
    ? node.value
    : (node as t.Identifier).name;
}

/** One walk over the program, reading what the conversion needs of it. */
class Walk {
  /** References to imports. */
  refs: IdSite[] = [];
  /** Writes to exported bindings. */
  writes: WriteSite[] = [];
  /** Writes to imports, which a module can't assign. */
  importWrites: { node: t.Identifier; scope: Scope }[] = [];
  /** The nested scopes declaring each import's or exported binding's name. */
  declared = new Map<string, Set<Scope>>();
  thisSites: Site[] = [];
  /** For each base name, how many `$base`, `$base2`, … names are in use. */
  counts = new Map<string, number>();
  #imports: Set<string>;
  #namespaces: Set<string>;
  #exported: Set<string>;
  /** Declarations by a name of CommonJS's own. */
  #reserved: t.Identifier[];
  /** The exported names the write being visited writes, if any. */
  #written: string[] | undefined;
  /** The imports the write being visited writes, if any. */
  #importWritten: t.Identifier[] | undefined;
  /** The `$` names counted already. */
  #counted = new Set<string>();

  constructor(
    imports: Set<string>,
    namespaces: Set<string>,
    exported: Set<string>,
    reserved: t.Identifier[],
  ) {
    this.#imports = imports;
    this.#namespaces = namespaces;
    this.#exported = exported;
    this.#reserved = reserved;
  }

  /** As the runtime-tags translator names its own: `$name`, `$name2`, … past any in use. */
  uid(name: string) {
    // Its identifier characters, a leading digit not among them, less a leading `$` and the
    // trailing digits: a base of digits alone could end another's numbered name.
    let safe = "";
    let from = 0;
    for (let i = 0; i < name.length; i++) {
      const code = name.charCodeAt(i);
      if (!isIdentifierChar(code) || (!i && isDigit(code))) {
        safe += name.slice(from, i);
        from = i + 1;
      }
    }
    if (from) safe += name.slice(from);
    else safe = name;
    const start = safe.charCodeAt(0) === 36 /* $ */ ? 1 : 0;
    let end = safe.length;
    while (end > start && isDigit(safe.charCodeAt(end - 1))) end--;
    name = safe.slice(start, end) || "temp";
    const i = (this.counts.get(name) || 0) + 1;
    this.counts.set(name, i);
    return `$${i > 1 ? name + i : name}`;
  }

  // A name of the form new names take, `$base` or `$base<n>` (no leading 0), which they
  // must count past; each name counts once.
  count(name: string) {
    if (name.charCodeAt(0) !== 36 /* $ */ || this.#counted.has(name)) return;
    this.#counted.add(name);
    let end = name.length;
    while (end > 1 && isDigit(name.charCodeAt(end - 1))) end--;
    while (end < name.length && name.charCodeAt(end) === 48 /* 0 */) end++;
    const base = name.slice(1, end);
    const count = end < name.length ? +name.slice(end) + 1 : 1;
    if (count > (this.counts.get(base) || 0)) this.counts.set(base, count);
  }

  isShadowed(name: string, scope: Scope | undefined) {
    const declared = this.declared.get(name);
    if (declared) {
      for (; scope; scope = scope.parent) {
        if (declared.has(scope)) return true;
      }
    }
    return false;
  }

  visitStatements(nodes: t.Node[], scope: Scope) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      switch (node.type) {
        case "ImportDeclaration":
          break;
        case "ExportNamedDeclaration":
        case "ExportDefaultDeclaration":
          if (node.declaration) {
            this.visit(
              node.declaration,
              node,
              null,
              node,
              "declaration",
              scope,
            );
          }
          break;
        default:
          this.visit(node, null, null, nodes, i, scope);
      }
    }
  }

  visit(
    node: t.Node,
    parent: t.Node | null,
    grand: t.Node | null,
    container: Container,
    key: string | number,
    scope: Scope,
  ): void {
    switch (node.type) {
      case "Identifier":
        this.count(node.name);
        if (
          parent &&
          this.#imports.has(node.name) &&
          t.isReferenced(node, parent, grand ?? undefined)
        ) {
          this.refs.push({ container, key, node, parent, scope });
        }
        return;
      // After identifiers, literals are the most common nodes, and they hold no names.
      case "StringLiteral":
      case "NumericLiteral":
      case "BooleanLiteral":
      case "NullLiteral":
      case "TemplateElement":
        return;
      case "ThisExpression":
        if (scope.moduleThis) this.thisSites.push({ container, key, node });
        return;
      case "MemberExpression":
      case "OptionalMemberExpression":
        this.visit(node.object, node, parent, node, "object", scope);
        if (node.computed) {
          this.visit(node.property, node, parent, node, "property", scope);
        }
        return;
      case "ObjectProperty":
        if (node.computed) {
          this.visit(node.key, node, parent, node, "key", scope);
        }
        this.visit(node.value, node, parent, node, "value", scope);
        return;
      case "BlockStatement":
        this.visitStatements(node.body, blockScope(scope));
        return;
      case "AssignmentExpression":
        this.#write(node.left, node, parent, container, key, scope);
        break;
      case "UpdateExpression":
        this.#write(node.argument, node, parent, container, key, scope);
        break;
      case "ForInStatement":
      case "ForOfStatement":
        if (node.left.type !== "VariableDeclaration") {
          this.#write(node.left, node, parent, container, key, scope);
        }
        this.#visitChildren(node, parent, blockScope(scope));
        return;
      case "ForStatement":
        this.#visitChildren(node, parent, blockScope(scope));
        return;
      case "SwitchStatement": {
        // The discriminant is read before the cases' own scope.
        this.visit(
          node.discriminant,
          node,
          parent,
          node,
          "discriminant",
          scope,
        );
        const inner = blockScope(scope);
        for (let i = 0; i < node.cases.length; i++) {
          this.visit(node.cases[i], node, parent, node.cases, i, inner);
        }
        return;
      }
      case "VariableDeclaration": {
        const target = node.kind === "var" ? scope.fn : scope;
        const { declarations } = node;
        for (let i = 0; i < declarations.length; i++) {
          forEachBindingId(declarations[i].id, Walk.#declareId, this, target);
        }
        break;
      }
      case "FunctionDeclaration":
        if (node.id) this.#declare(node.id, scope);
        this.#visitFunction(node, parent, scope);
        return;
      case "ClassDeclaration":
        if (node.id) this.#declare(node.id, scope);
        this.#visitClass(node, parent, scope);
        return;
      case "CatchClause": {
        // The param has a scope apart from the body's, as a function's params do.
        const param = blockScope(scope);
        if (node.param) {
          forEachBindingId(node.param, Walk.#declareId, this, param);
          this.visit(node.param, node, parent, node, "param", param);
        }
        this.visitStatements(node.body.body, blockScope(param));
        return;
      }
      case "FunctionExpression":
      case "ArrowFunctionExpression":
      case "ObjectMethod":
      case "ClassMethod":
      case "ClassPrivateMethod":
        this.#visitFunction(node, parent, scope);
        return;
      case "ClassProperty":
      case "ClassPrivateProperty":
      case "ClassAccessorProperty":
        this.#visitKey(node, parent, scope);
        if (node.value) {
          const inner = functionScope(scope, false);
          this.visit(node.value, node, parent, node, "value", inner);
        }
        return;
      case "StaticBlock":
        this.visitStatements(node.body, functionScope(scope, false));
        return;
      case "ClassExpression":
        this.#visitClass(node, parent, scope);
        return;
      case "LabeledStatement":
        this.visit(node.body, node, parent, node, "body", scope);
        return;
      case "BreakStatement":
      case "ContinueStatement":
      case "MetaProperty":
      case "PrivateName":
        return;
    }
    this.#visitChildren(node, parent, scope);
  }

  #visitChildren(node: t.Node, parent: t.Node | null, scope: Scope) {
    const keys = VISITOR_KEYS[node.type];
    if (!keys) return;
    for (let k = 0; k < keys.length; k++) {
      const key = keys[k];
      const child = (node as unknown as Record<string, unknown>)[key] as
        | t.Node
        | t.Node[]
        | null
        | undefined;
      if (!child) continue;
      if (Array.isArray(child)) {
        for (let i = 0; i < child.length; i++) {
          const item = child[i];
          if (item) this.visit(item, node, parent, child, i, scope);
        }
      } else if (typeof child.type === "string") {
        this.visit(child, node, parent, node, key, scope);
      }
    }
  }

  #visitFunction(node: t.Function, parent: t.Node | null, scope: Scope) {
    if (
      node.type === "ObjectMethod" ||
      node.type === "ClassMethod" ||
      node.type === "ClassPrivateMethod"
    ) {
      this.#visitKey(node, parent, scope);
    }
    // The params have a scope of their own, which the body's declarations don't reach.
    const moduleThis =
      node.type === "ArrowFunctionExpression" && scope.moduleThis;
    const params = functionScope(scope, moduleThis);
    const { id } = node as { id?: t.Identifier | null };
    if (id) {
      const own = node.type === "FunctionExpression";
      if (own) this.#declare(id, params);
      this.visit(id, node, parent, node, "id", own ? params : scope);
    }
    const nodeParams = node.params;
    for (let i = 0; i < nodeParams.length; i++) {
      forEachBindingId(nodeParams[i], Walk.#declareId, this, params);
    }
    for (let i = 0; i < nodeParams.length; i++) {
      this.visit(nodeParams[i], node, parent, nodeParams, i, params);
    }
    if (node.body.type === "BlockStatement") {
      this.visitStatements(node.body.body, functionScope(params, moduleThis));
    } else {
      this.visit(node.body, node, parent, node, "body", params);
    }
  }

  #visitClass(
    node: t.ClassDeclaration | t.ClassExpression,
    parent: t.Node | null,
    scope: Scope,
  ) {
    const inner = blockScope(scope);
    if (node.id) {
      const own = node.type === "ClassExpression";
      if (own) this.#declare(node.id, inner);
      this.visit(node.id, node, parent, node, "id", own ? inner : scope);
    }
    if (node.superClass) {
      this.visit(node.superClass, node, parent, node, "superClass", inner);
    }
    const members = node.body.body;
    for (let i = 0; i < members.length; i++) {
      this.visit(members[i], node.body, node, members, i, inner);
    }
  }

  // A class member's or method's computed key, read where the class is.
  #visitKey(
    node:
      | t.ObjectMethod
      | t.ClassMethod
      | t.ClassPrivateMethod
      | t.ClassProperty
      | t.ClassPrivateProperty
      | t.ClassAccessorProperty,
    parent: t.Node | null,
    scope: Scope,
  ) {
    if ((node as { computed?: boolean }).computed) {
      this.visit(node.key, node, parent, node, "key", scope);
    }
  }

  #write(
    target: t.Node,
    node: t.Node,
    parent: t.Node | null,
    container: Container,
    key: string | number,
    scope: Scope,
  ) {
    forEachBindingId(target, Walk.#writeId, this);
    const names = this.#written;
    if (names) {
      this.#written = undefined;
      this.writes.push({ container, key, node, parent, scope, names });
    }
    const ids = this.#importWritten;
    if (ids) {
      this.#importWritten = undefined;
      for (let i = 0; i < ids.length; i++) {
        this.importWrites.push({ node: ids[i], scope });
      }
    }
  }

  static #writeId(id: t.Identifier, walk: Walk) {
    const { name } = id;
    if (walk.#exported.has(name)) (walk.#written ||= []).push(name);
    if (walk.#imports.has(name) || walk.#namespaces.has(name)) {
      (walk.#importWritten ||= []).push(id);
    }
  }

  static #declareId(id: t.Identifier, walk: Walk, scope: Scope) {
    walk.#declare(id, scope);
  }

  #declare(id: t.Identifier, scope: Scope) {
    const { name } = id;
    if (
      scope.parent
        ? name === "exports" || name === "require"
        : reservedNames.has(name)
    ) {
      this.#reserved.push(id);
    }
    if (
      !scope.parent ||
      !(
        this.#imports.has(name) ||
        this.#namespaces.has(name) ||
        this.#exported.has(name)
      )
    ) {
      return;
    }
    let declared = this.declared.get(name);
    if (!declared) this.declared.set(name, (declared = new Set()));
    declared.add(scope);
  }
}

function isDigit(code: number) {
  return code >= 48 && code <= 57;
}

// [A-Za-z0-9$_]
function isIdentifierChar(code: number) {
  return (
    isDigit(code) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    code === 36 ||
    code === 95
  );
}

function setDeclaration(
  id: t.Identifier,
  declarations: Map<string, Declaration>,
  declaration: Declaration,
) {
  declarations.set(id.name, declaration);
}

// A variable declaration with each declarator's exports right after it, as a later initializer
// may read an earlier one's export; one exporting from its last declarator alone stays whole.
function pushDeclaration(
  headers: t.Statement[],
  node: t.VariableDeclaration,
  after: Map<Declaration, t.Statement[]>,
) {
  const { declarations } = node;
  let from = 0;
  for (let i = 0; i < declarations.length; i++) {
    const assigns = after.get(declarations[i]);
    if (!assigns) continue;
    headers.push(declarationPart(node, declarations, from, i + 1));
    for (let j = 0; j < assigns.length; j++) headers.push(assigns[j]);
    from = i + 1;
  }
  if (from < declarations.length) {
    headers.push(
      declarationPart(node, declarations, from, declarations.length),
    );
  }
}

// The declarators of a declaration from one to another; its first part keeps its comments.
function declarationPart(
  node: t.VariableDeclaration,
  declarations: t.VariableDeclarator[],
  from: number,
  to: number,
): t.VariableDeclaration {
  if (from)
    return t.variableDeclaration(node.kind, declarations.slice(from, to));
  if (to < declarations.length) node.declarations = declarations.slice(0, to);
  return node;
}

function addExported(
  id: t.Identifier,
  exported: Set<string>,
  esModule: t.Node[],
) {
  exported.add(id.name);
  if (id.name === "__esModule") esModule.push(id);
}

// Reports why a template can't convert, giving `true`.
function report(file: CompileFile, node: t.Node, label: string) {
  diagnosticError(file.path, { label, loc: node.loc || undefined });
  return true;
}

function pushLocal(id: t.Identifier, locals: [string, string][]) {
  locals.push([id.name, id.name]);
}

// A block's scope, whose `var`s belong to the function it is in.
function blockScope(parent: Scope): Scope {
  return { parent, fn: parent.fn, moduleThis: parent.moduleThis };
}

// A function's scope, or a class body's, which its `var`s belong to.
// Built in the shape `blockScope` builds, so a read of either's fields stays monomorphic.
function functionScope(parent: Scope | undefined, moduleThis: boolean) {
  const scope: Scope = { parent, fn: null as unknown as Scope, moduleThis };
  scope.fn = scope;
  return scope;
}
