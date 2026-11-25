import { types as t } from "@marko/compiler/internal/babel";

import { diagnosticError } from "../babel-utils/diagnostics";
import type { CompileFile } from "../util/compile-file";
import { forEachBindingId, forEachDeclaredId } from "./util/ast";

// One walk removes a template's TypeScript in place, with no paths, compiles its enums, namespaces
// and parameter properties, and inlines enum members, scoping only what those declare and hide.

type Node = { type: string } & Record<string, any>;
interface Member {
  /** Its value when constant, else `undefined`. */
  value: number | string | undefined;
  /** Whether it's a string, which TypeScript decides by syntax: it has no reverse mapping. */
  string: boolean;
}
type Members = Map<string, Member>;
/** An enum or namespace a scope declares, or a function or class a namespace of its name adds to. */
interface Entry {
  /** An enum's members so far. */
  members: Members;
  /** Whether a declaration of the name made its object, which later ones add to. */
  made: boolean;
  /** Whether a declaration of the name is exported. */
  exported: boolean;
  /** Whether it's a const enum that goes when its scope ends: unexported, every member folded, every read inlined. */
  drop: boolean;
  /** Where such a const enum's declarations went. */
  places: [list: Node[], node: Node][] | undefined;
}
/** A scope's entries by name, or `null` for a name it declares otherwise, which hides an outer entry. */
interface Scope {
  entries: Map<string, Entry | null>;
  parent: Scope | undefined;
  /** In an enum's initializers: the enum, whose members they read by name. */
  enum: { name: string; members: Members } | undefined;
}
/** What only a template with enums or namespaces needs. */
interface Enums {
  module: Scope;
  /** The scopes of `server` and `client` statements, which never share an output. */
  server: Scope;
  client: Scope;
  /** The scope of the root's template content: its `$` statements' and implicit names'. */
  render: Scope;
  /** Names an entry or member goes by, which a declaration of the name otherwise hides. */
  names: Set<string>;
  /** Member expressions written, deleted, called, bound or naming a tag, which stay as written. */
  targets: WeakSet<Node>;
  /** The module's enums, compiled before the walk so reads before them inline. */
  compiled: Map<Node, Node | typeof REMOVE>;
  /** Functions' bodies, which scope their `var`s. */
  bodies: WeakSet<Node>;
}

const REMOVE = 1;
const NONE = new Map<string, Entry | null>();
// Every way to write an enum or namespace: its keyword before whitespace or a comment, or an
// escaped one. A template without one does no enum work; `declare global` is a type alone.
const MAY_DECLARE = /\b(?:enum|namespace|module)(?:\s|\/[/*])|\\u/;
/** Names the class API's template content has implicitly, over the module's. */
const IMPLICIT = ["input", "out", "component", "state"];
const { VISITOR_KEYS } = t;

/** Strips a template's TypeScript and compiles its enums, namespaces and parameter properties. */
export function stripTypes(file: CompileFile) {
  new Strip(file).program(file.ast.program as Node);
}

class Strip {
  #file: CompileFile;
  #body!: Node[];
  /** Names declared as types, which a local export drops unless they're values too. */
  #types: Set<string> | undefined;
  /** The root's local exports, whose specifiers naming types are known once the walk ends. */
  #localExports: Node[] | undefined;
  // The rest is set only when the template may declare enums or namespaces.
  #enums: Enums | undefined;
  #scope: Scope | undefined;
  /** The entries of the scope being entered. */
  #hoisting: Map<string, Entry | null> | undefined;
  /** Names a later exported declaration of a module enum or namespace exports. */
  #exports: string[] | undefined;

  constructor(file: CompileFile) {
    this.#file = file;
  }

  program({ body }: Node) {
    this.#body = body;
    const enums = MAY_DECLARE.test(this.#file.code)
      ? this.hoistModule(body)
      : undefined;
    this.list(body);
    if (enums) {
      for (const scope of [enums.render, enums.server, enums.client]) {
        if (scope !== enums.module) this.exit(scope, body);
      }
      this.exit(enums.module, body);
      const names = this.#exports;
      if (names) {
        const specifiers: t.ExportSpecifier[] = [];
        for (const name of names) {
          if (!exportsName(this.#localExports, name)) {
            specifiers.push(exportSpecifier(name));
          }
        }
        if (specifiers.length) {
          body.push(t.exportNamedDeclaration(null, specifiers));
        }
      }
    }
    const types = this.#types;
    const exports = this.#localExports;
    if (types && exports) {
      const values = moduleValues(body);
      for (const node of exports) {
        const kept: Node[] = [];
        for (const specifier of node.specifiers) {
          const { name } = specifier.local;
          if (!types.has(name) || values.has(name)) kept.push(specifier);
        }
        if (kept.length) node.specifiers = kept;
        else removeStatement(body, node);
      }
    }
  }

  // Hoists the module's enums and namespaces from the root's exports and `static`, `server` and
  // `client` statements, then the render scope's from its `$` statements and implicit names, and
  // compiles the module's enums first; one after a namespace of its name waits its turn.
  hoistModule(body: Node[]): Enums {
    const module = scopeOf(undefined);
    const enums: Enums = (this.#enums = {
      module,
      server: scopeOf(module),
      client: scopeOf(module),
      render: module,
      names: new Set(),
      targets: new WeakSet(),
      compiled: new Map(),
      bodies: new WeakSet(),
    });
    const first: [decl: Node, list: Node[], scope: Scope][] = [];
    const namespaces = new Set<string>();
    for (const node of body) {
      const scope = this.moduleScope(node);
      if (!scope) continue;
      this.#hoisting = scope.entries;
      const list = node.type === "MarkoScriptlet" ? node.body : body;
      for (const stmt of node.type === "MarkoScriptlet" ? node.body : [node]) {
        this.entry(stmt);
        const decl = stmt.declaration || stmt;
        const key = `${scope === module ? "" : node.target}:${decl.id?.name}`;
        if (decl.type === "TSModuleDeclaration") {
          // A namespace of types alone makes no object for an enum to wait on.
          if (!isTypeDeclaration(decl)) namespaces.add(key);
        } else if (
          decl.type === "TSEnumDeclaration" &&
          (!decl.declare || decl.const) &&
          !namespaces.has(key)
        ) {
          first.push([decl, list, scope]);
        }
      }
    }
    if (enums.names.size) {
      for (const node of body) {
        const scope = this.moduleScope(node);
        if (!scope) continue;
        this.#hoisting = scope.entries;
        for (const stmt of node.type === "MarkoScriptlet"
          ? node.body
          : [node]) {
          this.hideDeclared(stmt);
          // A `var` a module-level block declares is the module's too.
          vars(stmt, Strip.#hideId, this);
        }
      }
    }
    this.#hoisting = undefined;
    for (const node of body) {
      if (node.type === "MarkoScriptlet" && !node.static) {
        for (const stmt of node.body) this.entry(stmt);
      }
    }
    if (enums.names.size) {
      for (const node of body) {
        if (node.type === "MarkoScriptlet" && !node.static) {
          for (const stmt of node.body) {
            this.hideDeclared(stmt);
            vars(stmt, Strip.#hideId, this);
          }
        } else if (node.type === "MarkoTag") {
          forEachBindingId(node.var, Strip.#hideId, this);
        }
      }
      for (const name of IMPLICIT) this.hide(name);
    }
    enums.render = this.push(module) || module;
    for (const [decl, list, scope] of first) {
      this.#scope = scope;
      enums.compiled.set(
        decl,
        decl.declare
          ? this.ambient(decl, true)
          : this.object(decl, true, list, list === body),
      );
    }
    this.#scope = module;
    return enums;
  }

  /** The module scope a root node's statements are in, if it's the module's. */
  moduleScope(node: Node): Scope | undefined {
    const enums = this.#enums!;
    switch (node.type) {
      case "MarkoScriptlet":
        return node.static
          ? node.target === "server"
            ? enums.server
            : node.target === "client"
              ? enums.client
              : enums.module
          : undefined;
      case "ImportDeclaration":
      case "ExportNamedDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportAllDeclaration":
      case "MarkoClass":
        return enums.module;
    }
  }

  /** The scope of the entries hoisted since the last, inside `parent`, if any were. */
  push(parent: Scope): Scope | undefined {
    const entries = this.#hoisting;
    if (!entries) return;
    this.#hoisting = undefined;
    return { entries, parent, enum: undefined };
  }

  // Hoists the enum or namespace a statement declares into the scope being entered; a const enum
  // goes only if no declaration of its name is anything but an unexported const enum.
  entry(stmt: Node) {
    const exported = stmt.type === "ExportNamedDeclaration";
    const decl = exported ? stmt.declaration : stmt;
    // A declared const enum is a type alone, but its members still inline.
    if (
      decl?.type === "TSEnumDeclaration"
        ? decl.declare && !decl.const
        : decl?.type !== "TSModuleDeclaration" || isTypeDeclaration(decl)
    ) {
      return;
    }
    const hoisting = (this.#hoisting ||= new Map());
    const { name } = decl.id;
    const drop = decl.type === "TSEnumDeclaration" && decl.const && !exported;
    const entry = hoisting.get(name);
    if (entry) {
      if (!drop) entry.drop = false;
      return;
    }
    hoisting.set(name, {
      members: new Map(),
      made: false,
      exported: false,
      drop,
      places: undefined,
    });
    this.#enums!.names.add(name);
  }

  // Hoists the names a statement declares otherwise, each hiding an outer entry of its
  // name; a function or class makes the object of a namespace of its name.
  hideDeclared(stmt: Node) {
    const decl =
      stmt.type === "ExportNamedDeclaration" ? stmt.declaration : stmt;
    // A declaration of types alone binds nothing.
    if (!decl || decl.declare) return;
    if (
      decl.type === "FunctionDeclaration" ||
      decl.type === "ClassDeclaration"
    ) {
      const entry = this.#hoisting?.get(decl.id.name);
      if (entry) {
        entry.made = true;
        // An exported one exports the name already.
        if (decl !== stmt) entry.exported = true;
        return;
      }
    }
    forEachDeclaredId(decl as t.Node, Strip.#hideId, this);
  }

  static #hideId(id: t.Identifier, strip: Strip) {
    strip.hide(id.name);
  }

  // Hides an outer entry of a name; the scope's own entry of it adds to what the name
  // already binds instead, as Babel's namespaces did.
  hide(name: string) {
    if (this.#enums!.names.has(name)) {
      const hoisting = (this.#hoisting ||= new Map());
      const entry = hoisting.get(name);
      if (entry) entry.made = true;
      else hoisting.set(name, null);
    }
  }

  // Ends a scope: a const enum of it that may go does, as does a template statement it empties.
  exit(scope: Scope, body: Node[] | undefined) {
    let emptied = false;
    for (const entry of scope.entries.values()) {
      if (entry?.drop && entry.places) {
        for (const [list, node] of entry.places) {
          const index = list.indexOf(node);
          if (index === -1) continue;
          list.splice(index, 1);
          if (!list.length) emptied = true;
        }
      }
    }
    if (emptied && body) {
      let kept = 0;
      for (const node of body) {
        if (node.type !== "MarkoScriptlet" || node.body.length) {
          body[kept++] = node;
        }
      }
      body.length = kept;
    }
  }

  /** Strips a list in place, compacting out what goes; enums and namespaces are statements. */
  list(list: (Node | null)[], module = list === this.#body) {
    const root = list === this.#body;
    const enums = this.#enums;
    let kept = 0;
    for (let i = 0; i < list.length; i++) {
      const node = list[i];
      let stripped: Node | null | typeof REMOVE = node;
      // A hole, as in `[, a]`, stays.
      if (node) {
        if (root && enums) {
          this.#scope = this.moduleScope(node) || enums.render;
        }
        const decl = node.declaration || node;
        if (
          decl.type === "TSEnumDeclaration" ||
          decl.type === "TSModuleDeclaration"
        ) {
          let object =
            enums?.compiled.get(decl) ??
            this.declaration(decl, module, list as Node[], decl !== node);
          if (decl !== node && object !== REMOVE) {
            if (object.type === "VariableDeclaration") {
              node.declaration = object;
              object = node;
            } else {
              // The root holds other statements only as `static` ones.
              object = t.markoScriptlet([object as t.Statement], true);
            }
          }
          stripped = object;
        } else {
          stripped = this.visit(node);
          if (
            module &&
            stripped !== REMOVE &&
            stripped.type === "ExportNamedDeclaration" &&
            !stripped.declaration &&
            !stripped.source
          ) {
            (this.#localExports ||= []).push(stripped);
          }
        }
      }
      if (stripped !== REMOVE) list[kept++] = stripped;
    }
    // Setting `length` calls into the runtime, so only a list that shrank sets it.
    if (kept !== list.length) list.length = kept;
  }

  /** The node with its types stripped, or one standing in for it, or `REMOVE`. */
  visit(node: Node): Node | typeof REMOVE {
    let keys = VISITOR_KEYS[node.type];
    // A leaf, as most of a template's nodes are, has no types and reads no enum.
    if (!keys.length) return node;
    let result = this.enter(node);
    if (result !== undefined) {
      do {
        if (result === REMOVE) return REMOVE;
        node = inheritComments(node, result);
        result = this.enter(node);
      } while (result !== undefined);
      keys = VISITOR_KEYS[node.type];
    }

    const enums = this.#enums;
    let scope: Scope | undefined;
    let pending: Map<string, Entry | null> | undefined;
    let pushAt: string | undefined;
    if (enums) {
      if (enums.names.size) {
        if (node.type === "Identifier") {
          const read = this.read(node.name);
          if (read) return read;
        } else if (
          node.type === "MemberExpression" &&
          !enums.targets.has(node)
        ) {
          // A constant member read becomes its value.
          const value = this.member(node)?.value;
          if (value !== undefined) {
            return inheritComments(node, t.valueToNode(value) as Node);
          }
        }
      }
      scope = this.#scope;
      pushAt = this.track(node);
      pending = this.#hoisting;
      this.#hoisting = undefined;
    }

    let visited: Node | typeof REMOVE = node;
    const scriptlet = node.type === "MarkoScriptlet" && node.body.length > 0;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      // What a scope hoisted applies from where JavaScript evaluates inside it.
      if (pending && (!pushAt || key === pushAt)) {
        this.#scope = { entries: pending, parent: scope, enum: undefined };
        pending = undefined;
      }
      const child = node[key];
      // A non-computed key or property name carries no types and reads no member,
      // nor does a label, a private name, `import.meta`'s tokens or the outer name of an
      // import or export.
      if (
        !child ||
        ((key === "key" || key === "property") && !node.computed) ||
        (enums &&
          (key === "label" ||
            key === "exported" ||
            key === "imported" ||
            node.type === "PrivateName" ||
            node.type === "MetaProperty"))
      ) {
        continue;
      }
      if (Array.isArray(child)) {
        if (child.length) this.list(child, scriptlet && node.static);
        continue;
      }
      const stripped = this.visit(child);
      if (stripped === REMOVE) {
        // Only an export goes with its declaration; another statement's slot empties.
        if (
          node.type === "ExportNamedDeclaration" ||
          node.type === "ExportDefaultDeclaration"
        ) {
          visited = REMOVE;
          break;
        }
        node[key] = key === "alternate" ? null : t.emptyStatement();
      } else if (stripped !== child) {
        node[key] = stripped;
        if (node.shorthand) node.shorthand = false;
      }
    }
    if (enums && this.#scope !== scope) {
      this.exit(
        this.#scope!,
        node.type === "MarkoTagBody" ? node.body : undefined,
      );
      this.#scope = scope;
    }
    // A statement stripping empties goes too.
    return scriptlet && !node.body.length ? REMOVE : visited;
  }

  // A name read: an enum's member in its initializers, as `E["A"]`; a const enum
  // read other than through an inlined member stays.
  read(name: string): Node | undefined {
    const { server, client } = this.#enums!;
    let targeted = false;
    for (let scope = this.#scope; scope; scope = scope.parent) {
      if (scope.enum?.members.has(name)) {
        return enumMember(scope.enum.name, name);
      }
      const entry = scope.entries.get(name);
      if (entry !== undefined) {
        if (entry) entry.drop = false;
        return;
      }
      if (scope === server || scope === client) targeted = true;
    }
    if (!targeted) {
      const entry = this.targeted(name);
      if (entry) entry.drop = false;
    }
  }

  // Template content and the module's own statements see the enums of `server` and `client`
  // statements, as each output keeps the ones it runs: a name only one of them declares is
  // theirs; one both declare differs between the outputs, so neither inlines nor goes.
  targeted(name: string): Entry | null | undefined {
    const { server, client } = this.#enums!;
    const fromServer = server.entries.get(name);
    const fromClient = client.entries.get(name);
    if (fromServer === undefined) return fromClient;
    if (fromClient === undefined) return fromServer;
    if (fromServer) fromServer.drop = false;
    if (fromClient) fromClient.drop = false;
    return null;
  }

  // Hoists what a node's scope declares, giving the key its scope applies from if not its
  // first, and keeps as written members written, deleted, called, bound or naming a tag.
  track(node: Node): string | undefined {
    const enums = this.#enums!;
    switch (node.type) {
      case "BlockStatement":
      case "StaticBlock":
        for (const stmt of node.body) this.entry(stmt);
        if (enums.names.size) {
          // A function's body or a static block scopes its `var`s too.
          const scopesVars =
            node.type === "StaticBlock" || enums.bodies.has(node);
          for (const stmt of node.body) {
            this.hideDeclared(stmt);
            if (scopesVars) vars(stmt, Strip.#hideId, this);
          }
        }
        return;
      case "SwitchStatement":
        for (const { consequent } of node.cases) {
          for (const stmt of consequent) this.entry(stmt);
        }
        if (enums.names.size) {
          for (const { consequent } of node.cases) {
            for (const stmt of consequent) this.hideDeclared(stmt);
          }
        }
        // The discriminant is read outside the cases' scope.
        return "cases";
      case "MarkoTagBody":
        for (const child of node.body) {
          if (child.type === "MarkoScriptlet") {
            for (const stmt of child.body) this.entry(stmt);
          }
        }
        if (enums.names.size) {
          for (const param of node.params) {
            forEachBindingId(param, Strip.#hideId, this);
          }
          for (const child of node.body) {
            if (child.type === "MarkoScriptlet") {
              for (const stmt of child.body) {
                this.hideDeclared(stmt);
                vars(stmt, Strip.#hideId, this);
              }
            } else if (child.type === "MarkoTag") {
              forEachBindingId(child.var, Strip.#hideId, this);
            }
          }
        }
        return;
    }
    if (!enums.names.size) return;
    switch (node.type) {
      case "FunctionExpression":
        if (node.id) this.hide(node.id.name);
      // falls through
      case "FunctionDeclaration":
      case "ArrowFunctionExpression":
      case "ObjectMethod":
      case "ClassMethod":
      case "ClassPrivateMethod":
        for (const param of node.params) {
          forEachBindingId(param, Strip.#hideId, this);
        }
        if (node.body.type === "BlockStatement") enums.bodies.add(node.body);
        // A method's key, and the params' defaults against the body's declarations,
        // are read outside.
        return "params";
      case "ClassExpression":
        if (node.id) this.hide(node.id.name);
        return;
      case "ForStatement":
        if (node.init?.type === "VariableDeclaration") {
          this.hideDeclared(node.init);
        }
        return;
      case "ForInStatement":
      case "ForOfStatement":
        if (node.left.type === "VariableDeclaration") {
          this.hideDeclared(node.left);
        } else this.target(node.left);
        return;
      case "CatchClause":
        forEachBindingId(node.param, Strip.#hideId, this);
        return;
      case "MarkoTag":
        this.target(node.name);
        return;
      case "MarkoAttribute":
        if (node.bound) this.target(node.value);
        return;
      case "AssignmentExpression":
      case "AssignmentPattern":
        this.target(node.left);
        return;
      case "UpdateExpression":
      case "RestElement":
        this.target(node.argument);
        return;
      case "UnaryExpression":
        if (node.operator === "delete") this.target(node.argument);
        return;
      case "CallExpression":
      case "OptionalCallExpression":
      case "NewExpression":
        this.target(node.callee);
        return;
      case "TaggedTemplateExpression":
        this.target(node.tag);
        return;
      case "ArrayPattern":
        for (const element of node.elements) this.target(element);
        return;
      case "ObjectPattern":
        for (const prop of node.properties) {
          this.target(prop.type === "RestElement" ? prop.argument : prop.value);
        }
        return;
    }
  }

  target(node: Node | null) {
    node = node && unwrap(node);
    if (node?.type === "MemberExpression") this.#enums!.targets.add(node);
  }

  enter(node: Node): Node | typeof REMOVE | undefined {
    switch (node.type) {
      // A template's most common nodes come first: each case is a comparison.
      case "MarkoTag":
        if (node.typeArguments) node.typeArguments = null;
        return;
      case "MarkoAttribute":
        return;
      case "MarkoTagBody":
      case "CallExpression":
      case "OptionalCallExpression":
      case "NewExpression":
      case "TaggedTemplateExpression":
        if (node.typeParameters) node.typeParameters = null;
        return;
      case "Identifier":
        if (node.typeAnnotation) node.typeAnnotation = null;
        if (node.optional) node.optional = null;
        return;
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSNonNullExpression":
      case "TSInstantiationExpression":
        return node.expression;
      case "TSInterfaceDeclaration":
      case "TSTypeAliasDeclaration":
        this.recordTypes(node);
        return REMOVE;
      case "TSDeclareFunction":
        return node.id ? this.recordTypes(node) : REMOVE;
      case "TSDeclareMethod":
      case "TSIndexSignature":
      case "TSNamespaceExportDeclaration":
        return REMOVE;
      case "TSImportEqualsDeclaration":
        // `import type A = …` names a type alone.
        return node.importKind === "type"
          ? this.recordTypes(node)
          : this.error(
              node,
              "A template can't use `import … =`; write `import … from` or a `const` instead.",
            );
      case "TSExportAssignment":
        return this.error(
          node,
          "A template can't use `export =`; export by name instead.",
        );
      case "ImportDeclaration":
        return this.importDeclaration(node);
      case "ExportNamedDeclaration":
        return this.exportNamed(node);
      case "ExportAllDeclaration":
        return node.exportKind === "type" ? REMOVE : undefined;
      case "VariableDeclaration":
      case "ClassDeclaration":
        if (node.declare) {
          this.recordTypes(node);
          return REMOVE;
        }
        if (node.type === "ClassDeclaration") stripClass(node);
        return;
      case "VariableDeclarator":
        if (node.definite) node.definite = null;
        return;
      case "ClassExpression":
        stripClass(node);
        return;
      case "ClassProperty":
      case "ClassPrivateProperty":
        // A `declare` field only types one the constructor assigns.
        if (node.declare || node.abstract) return REMOVE;
        if (node.typeAnnotation) node.typeAnnotation = null;
        if (node.accessibility) node.accessibility = null;
        if (node.readonly) node.readonly = null;
        if (node.optional) node.optional = null;
        if (node.definite) node.definite = null;
        if (node.override) node.override = null;
        return;
      case "ClassMethod":
      case "ClassPrivateMethod":
        if (node.accessibility) node.accessibility = null;
        if (node.abstract) node.abstract = null;
        if (node.optional) node.optional = null;
        if (node.override) node.override = null;
        stripFunction(node);
        if (node.kind === "constructor") parameterProperties(node);
        return;
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "ArrowFunctionExpression":
      case "ObjectMethod":
        stripFunction(node);
        return;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        if (node.typeAnnotation) node.typeAnnotation = null;
        return;
    }
  }

  /** Records the names a removed type declaration declares, removing it. */
  recordTypes(decl: Node): typeof REMOVE {
    if (decl.type === "VariableDeclaration") {
      forEachDeclaredId(decl as t.Node, Strip.#typeId, this);
    } else if (decl.id.type === "Identifier") {
      this.type(decl.id);
    }
    return REMOVE;
  }

  static #typeId(id: t.Identifier, strip: Strip) {
    strip.type(id);
  }

  type(id: Node) {
    (this.#types ||= new Set()).add(id.name);
  }

  // A declared const enum emits nothing, but its members inline: the gate holds every enum.
  ambient(decl: Node, module: boolean): typeof REMOVE {
    const entry = this.#scope!.entries.get(decl.id.name)!;
    this.enum(decl, entry, t.objectExpression([]), module);
    return this.recordTypes(decl);
  }

  // As `verbatimModuleSyntax`: an import of types alone is kept for its effects.
  importDeclaration(node: Node) {
    const { specifiers } = node;
    if (node.importKind === "type") {
      for (const specifier of specifiers) this.type(specifier.local);
      return REMOVE;
    }
    if (hasTypeSpecifier(specifiers, "importKind")) {
      const kept: Node[] = [];
      for (const specifier of specifiers) {
        if (specifier.importKind === "type") this.type(specifier.local);
        else kept.push(specifier);
      }
      node.specifiers = kept;
    }
  }

  exportNamed(node: Node) {
    if (node.exportKind === "type") {
      if (node.declaration) this.recordTypes(node.declaration);
      return REMOVE;
    }
    let { specifiers } = node;
    // `export {} from "x"` loads its module, as an import of nothing would.
    if (node.source && !specifiers.length) return;
    if (hasTypeSpecifier(specifiers, "exportKind")) {
      const kept: Node[] = [];
      for (const specifier of specifiers) {
        if (specifier.exportKind !== "type") kept.push(specifier);
      }
      specifiers = node.specifiers = kept;
    }
    // An export left with nothing, or written with nothing, goes.
    if (!node.declaration && !specifiers.length) return REMOVE;
  }

  /** An enum or namespace compiled, or removed if it declares types alone. */
  declaration(
    decl: Node,
    module: boolean,
    list: Node[],
    exported: boolean,
    parent?: string,
  ): Node | typeof REMOVE {
    const values =
      !isTypeDeclaration(decl) ||
      (decl.type === "TSEnumDeclaration" && decl.const);
    if (!values) return this.recordTypes(decl);
    // The source gates the scopes enums need, so one a migrator added in a template whose
    // source has none can't compile.
    if (!this.#enums) {
      return this.error(
        decl,
        "An enum or namespace compiles only where a template's source declares one; a migrator can't add one to a template that has none.",
      );
    }
    return isTypeDeclaration(decl)
      ? this.ambient(decl, module)
      : this.object(decl, module, list, exported, parent);
  }

  // An enum or namespace: `var N = …` in the module, `let` below, or `N = …` adding to what an
  // earlier declaration of its scope made; `_P` exporting it starts from `_P.N`.
  object(
    decl: Node,
    module: boolean,
    list: Node[],
    exported: boolean,
    parent?: string,
  ): Node | typeof REMOVE {
    const { name } = decl.id;
    // Entering the scope hoisted the entry.
    const entry = this.#scope!.entries.get(name)!;
    const merge = entry.made;
    entry.made = true;
    // A merge the module first declared without `export` exports its name after.
    if (exported && merge && !entry.exported) (this.#exports ||= []).push(name);
    if (exported) entry.exported = true;
    const from = merge
      ? t.identifier(name)
      : parent
        ? t.logicalExpression(
            "||",
            t.memberExpression(t.identifier(parent), t.identifier(name)),
            t.objectExpression([]),
          )
        : t.objectExpression([]);
    const init =
      decl.type === "TSModuleDeclaration"
        ? this.namespace(decl, from)
        : this.enum(decl, entry, from, module);
    const object = merge
      ? t.expressionStatement(
          t.assignmentExpression("=", t.identifier(name), init),
        )
      : t.variableDeclaration(module ? "var" : "let", [
          t.variableDeclarator(t.identifier(name), init),
        ]);
    if (entry.drop) (entry.places ||= []).push([list, object]);
    return object;
  }

  // `(E => { E[E["A"] = 0] = "A"; return E; })(from)`, or for a const enum the
  // object `{ A: 0 }`, which goes if it may once its scope ends, or, when a member
  // doesn't fold, `(E => { E["A"] = f(); E["B"] = E["A"] + 1; return E; })(from)`.
  enum(
    decl: Node,
    entry: Entry,
    from: t.Expression,
    module: boolean,
  ): t.Expression {
    const { name } = decl.id;
    const { members } = entry;
    const outer = this.#scope!;
    this.#scope = { entries: NONE, parent: outer, enum: { name, members } };
    const body: t.Statement[] = [];
    const props: t.ObjectProperty[] = [];
    let pure = true;
    let prev: Member | undefined;
    let prevKey = "";
    for (const member of decl.members) {
      const key: string =
        member.id.type === "Identifier" ? member.id.name : member.id.value;
      let value: t.Expression;
      let constant: number | string | undefined;
      let string: boolean;
      if (member.initializer) {
        const init = this.visit(member.initializer) as t.Expression;
        const source =
          module && init.type === "Identifier" ? this.moduleConst(init) : init;
        constant = this.evaluate(source);
        string =
          constant === undefined
            ? this.isString(source)
            : typeof constant === "string";
        value = constant === undefined ? init : t.valueToNode(constant);
      } else {
        // A string has no next value, as TypeScript reports.
        if (prev?.string) {
          this.error(
            member,
            `Enum member "${key}" follows a string member, so it needs an initializer.`,
          );
        }
        string = false;
        constant =
          prev === undefined
            ? 0
            : typeof prev.value === "number"
              ? prev.value + 1
              : undefined;
        value =
          constant === undefined
            ? t.binaryExpression(
                "+",
                enumMember(name, prevKey),
                t.numericLiteral(1),
              )
            : (t.valueToNode(constant) as t.Expression);
      }
      if (constant === undefined) pure = false;
      members.set(key, (prev = { value: constant, string }));
      this.#enums!.names.add(key);
      prevKey = key;
      if (decl.const) {
        const id = t.isValidIdentifier(key, false)
          ? t.identifier(key)
          : t.stringLiteral(key);
        props.push(t.objectProperty(id, value));
        continue;
      }
      // Numeric members map back to their names; string members don't.
      const assign = t.assignmentExpression("=", enumMember(name, key), value);
      body.push(
        t.expressionStatement(
          string
            ? assign
            : t.assignmentExpression(
                "=",
                t.memberExpression(t.identifier(name), assign, true),
                t.stringLiteral(key),
              ),
        ),
      );
    }
    this.#scope = outer;
    if (decl.const) {
      if (pure) {
        const values = t.objectExpression(props);
        return from.type === "ObjectExpression"
          ? values
          : t.callExpression(
              t.memberExpression(
                t.identifier("Object"),
                t.identifier("assign"),
              ),
              [from, values],
            );
      }
      // A member that doesn't fold may read an earlier one, so each is assigned in order.
      entry.drop = false;
      for (const { key, value } of props) {
        body.push(
          t.expressionStatement(
            t.assignmentExpression(
              "=",
              enumMember(
                name,
                key.type === "Identifier"
                  ? key.name
                  : (key as t.StringLiteral).value,
              ),
              value as t.Expression,
            ),
          ),
        );
      }
    }
    body.push(t.returnStatement(t.identifier(name)));
    const init = t.callExpression(
      t.arrowFunctionExpression([t.identifier(name)], t.blockStatement(body)),
      [from],
    );
    if (pure) t.addComment(init, "leading", "#__PURE__");
    return init;
  }

  /** `(_N => { …; return _N; })(from)`, assigning `_N` each export as Babel did. */
  namespace(decl: Node, from: t.Expression): t.Expression {
    const { name } = decl.id;
    const param = this.#file.path.scope.generateUid(name);
    const { body } = decl;
    // `namespace A.B {}` is `A` exporting `namespace B {}`.
    const nodes: Node[] =
      body.type === "TSModuleBlock"
        ? body.body
        : [t.exportNamedDeclaration(body)];
    for (const node of nodes) this.entry(node);
    if (this.#enums!.names.size) {
      // Its body scopes its `var`s.
      for (const node of nodes) {
        this.hideDeclared(node);
        vars(node.declaration || node, Strip.#hideId, this);
      }
    }
    const outer = this.#scope!;
    const scope = this.push(outer);
    if (scope) this.#scope = scope;
    const statements: Node[] = [];
    for (const node of nodes) {
      if (
        node.type === "ExportNamedDeclaration"
          ? !node.declaration
          : node.type === "ExportDefaultDeclaration" ||
            node.type === "ExportAllDeclaration"
      ) {
        this.error(
          node,
          "A namespace exports only declarations; write `export` on the declaration instead.",
        );
        continue;
      }
      const exports = node.type === "ExportNamedDeclaration";
      const statement = exports ? node.declaration : node;
      let stripped: Node | typeof REMOVE;
      if (
        statement.type === "TSEnumDeclaration" ||
        statement.type === "TSModuleDeclaration"
      ) {
        stripped = this.declaration(
          statement,
          false,
          statements,
          false,
          exports ? param : undefined,
        );
      } else if (
        exports &&
        statement.type === "VariableDeclaration" &&
        statement.kind !== "const" &&
        !statement.declare
      ) {
        stripped = this.error(
          statement,
          "A namespace can't export `let` or `var`; export a `const` instead.",
        );
      } else {
        stripped = this.visit(statement);
      }
      if (stripped === REMOVE) continue;
      statements.push(stripped);
      if (exports) {
        forEachDeclaredId(stripped as t.Node, exportId, statements, param);
      }
    }
    if (scope) {
      this.exit(scope, undefined);
      this.#scope = outer;
    }
    statements.push(t.returnStatement(t.identifier(param)));
    return t.callExpression(
      t.arrowFunctionExpression(
        [t.identifier(param)],
        t.blockStatement(statements as t.Statement[]),
      ),
      [from],
    );
  }

  // An initializer's value when constant as TypeScript has it: literals, enum members
  // (the walk wrote each `A` as `E["A"]`), and templates and operators of them.
  evaluate(node: Node): number | string | undefined {
    switch (node.type) {
      case "NumericLiteral":
      case "StringLiteral":
        return node.value;
      case "TemplateLiteral": {
        const { quasis, expressions } = node;
        let text: string = quasis[0].value.cooked;
        for (let i = 0; i < expressions.length; i++) {
          const value = this.evaluate(expressions[i]);
          if (value === undefined) return;
          text += value + quasis[i + 1].value.cooked;
        }
        return text;
      }
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSNonNullExpression":
        return this.evaluate(node.expression);
      case "MemberExpression":
        return this.member(node)?.value;
      case "UnaryExpression": {
        const arg = this.evaluate(node.argument);
        if (typeof arg !== "number") return;
        switch (node.operator) {
          case "+":
            return arg;
          case "-":
            return -arg;
          case "~":
            return ~arg;
        }
        return;
      }
      case "BinaryExpression": {
        const left = this.evaluate(node.left);
        if (left === undefined) return;
        const right = this.evaluate(node.right);
        if (right === undefined) return;
        if (typeof left === "string" || typeof right === "string") {
          return node.operator === "+" ? `${left}${right}` : undefined;
        }
        switch (node.operator) {
          case "+":
            return left + right;
          case "-":
            return left - right;
          case "*":
            return left * right;
          case "/":
            return left / right;
          case "%":
            return left % right;
          case "**":
            return left ** right;
          case "<<":
            return left << right;
          case ">>":
            return left >> right;
          case ">>>":
            return left >>> right;
          case "&":
            return left & right;
          case "|":
            return left | right;
          case "^":
            return left ^ right;
        }
      }
    }
  }

  // As TypeScript: a string or template literal, a `+` with one, or a string member.
  isString(node: Node): boolean {
    switch (node.type) {
      case "StringLiteral":
      case "TemplateLiteral":
        return true;
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSNonNullExpression":
        return this.isString(node.expression);
      case "BinaryExpression":
        return (
          node.operator === "+" &&
          (this.isString(node.left) || this.isString(node.right))
        );
      case "MemberExpression":
        return !!this.member(node)?.string;
    }
    return false;
  }

  // A module enum's bare name reads what the module's `const` of the plain name holds, as
  // main did, through names that are such consts too; any other name reads as unknown.
  moduleConst(id: Node): Node {
    let node = id;
    const seen = new Set<string>();
    while (node.type === "Identifier" && !seen.has(node.name)) {
      seen.add(node.name);
      // Babel's scope binds the template's declarations too: only a module statement's count.
      const path = this.#file.path.scope.getBinding(node.name)?.path;
      const declarator = path?.node as Node | undefined;
      if (
        declarator?.type !== "VariableDeclarator" ||
        declarator.id.type !== "Identifier" ||
        !declarator.init ||
        (path!.parent as Node).kind !== "const" ||
        !isModuleStatement(path!.parentPath!.parent as Node)
      ) {
        return id;
      }
      node = unwrap(declarator.init);
    }
    return node.type === "Identifier" ? id : node;
  }

  /** The member `E.A` or `E["A"]` reads, of an enum in scope. */
  member({ object, property, computed }: Node): Member | undefined {
    object = unwrap(object);
    if (object.type !== "Identifier") return;
    const key = computed
      ? property.type === "StringLiteral"
        ? property.value
        : undefined
      : property.name;
    if (key === undefined) return;
    const { name } = object;
    const { server, client } = this.#enums!;
    let targeted = false;
    for (let scope = this.#scope; scope; scope = scope.parent) {
      const entry = scope.entries.get(name);
      if (entry !== undefined) return entry?.members.get(key);
      if (scope === server || scope === client) targeted = true;
    }
    if (!targeted) return this.targeted(name)?.members.get(key);
  }

  error(node: Node, label: string): typeof REMOVE {
    diagnosticError(this.#file.path, { label, loc: node.loc });
    return REMOVE;
  }
}

/** Whether a declaration declares types alone, as `declare` and type-only namespaces do. */
function isTypeDeclaration(node: Node): boolean {
  switch (node.type) {
    case "TSInterfaceDeclaration":
    case "TSTypeAliasDeclaration":
    case "TSDeclareFunction":
      return true;
    case "TSModuleDeclaration": {
      if (node.declare || node.id.type === "StringLiteral") return true;
      const { body } = node;
      if (body.type === "TSModuleDeclaration") return isTypeDeclaration(body);
      for (const stmt of body.body) {
        const decl =
          stmt.type === "ExportNamedDeclaration" ? stmt.declaration : stmt;
        if (decl ? !isTypeDeclaration(decl) : stmt.exportKind !== "type") {
          return false;
        }
      }
      return true;
    }
    default:
      return !!node.declare;
  }
}

/** Calls `cb(id, a)` with each `var` a statement declares outside nested functions. */
function vars<A>(
  stmt: Node | null | undefined,
  cb: (id: t.Identifier, a: A) => void,
  a: A,
): void {
  switch (stmt?.type) {
    case "VariableDeclaration":
      if (stmt.kind === "var") forEachDeclaredId(stmt as t.Node, cb, a);
      break;
    case "BlockStatement":
      for (const child of stmt.body) vars(child, cb, a);
      break;
    case "IfStatement":
      vars(stmt.consequent, cb, a);
      vars(stmt.alternate, cb, a);
      break;
    case "ForStatement":
      vars(stmt.init, cb, a);
      vars(stmt.body, cb, a);
      break;
    case "ForInStatement":
    case "ForOfStatement":
      vars(stmt.left, cb, a);
      vars(stmt.body, cb, a);
      break;
    case "WhileStatement":
    case "DoWhileStatement":
    case "LabeledStatement":
      vars(stmt.body, cb, a);
      break;
    case "TryStatement":
      vars(stmt.block, cb, a);
      vars(stmt.handler?.body, cb, a);
      vars(stmt.finalizer, cb, a);
      break;
    case "SwitchStatement":
      for (const { consequent } of stmt.cases) {
        for (const child of consequent) vars(child, cb, a);
      }
      break;
  }
}

/** The expression a TypeScript assertion wraps, or the node. */
function unwrap(node: Node): Node {
  while (
    node.type === "TSAsExpression" ||
    node.type === "TSSatisfiesExpression" ||
    node.type === "TSTypeAssertion" ||
    node.type === "TSNonNullExpression" ||
    node.type === "TSInstantiationExpression"
  ) {
    node = node.expression;
  }
  return node;
}

/** Whether a declaration's statement is the module's: an export, or a `static` statement. */
function isModuleStatement(node: Node) {
  return node.type === "ExportNamedDeclaration" || !!node.static;
}

function scopeOf(parent: Scope | undefined): Scope {
  return { entries: new Map(), parent, enum: undefined };
}

/** The names the module's statements declare as values, once its types are stripped. */
// Removes a statement from the root, or from the `static` statement holding it and that
// statement too if it empties.
function removeStatement(body: Node[], node: Node) {
  const at = body.indexOf(node);
  if (at !== -1) {
    body.splice(at, 1);
    return;
  }
  for (let i = 0; i < body.length; i++) {
    const statements: Node[] | undefined =
      body[i].type === "MarkoScriptlet" ? body[i].body : undefined;
    const j = statements ? statements.indexOf(node) : -1;
    if (j !== -1) {
      statements!.splice(j, 1);
      if (!statements!.length) body.splice(i, 1);
      return;
    }
  }
}

function moduleValues(body: Node[]) {
  const names = new Set<string>();
  for (const node of body) {
    switch (node.type) {
      case "ImportDeclaration":
        for (const specifier of node.specifiers)
          names.add(specifier.local.name);
        break;
      case "ExportNamedDeclaration":
        if (node.declaration) {
          forEachDeclaredId(node.declaration, addName, names);
        }
        break;
      case "MarkoScriptlet":
        if (node.static) {
          for (const stmt of node.body) {
            if (stmt.type === "ImportDeclaration") {
              for (const specifier of stmt.specifiers) {
                names.add(specifier.local.name);
              }
            } else {
              forEachDeclaredId(stmt, addName, names);
              vars(stmt, addName, names);
            }
          }
        }
        break;
    }
  }
  return names;
}

function addName(id: t.Identifier, names: Set<string>) {
  names.add(id.name);
}

/** Whether a list of import or export specifiers has one of types alone. */
function hasTypeSpecifier(specifiers: Node[], kind: string) {
  for (const specifier of specifiers) {
    if (specifier[kind] === "type") return true;
  }
  return false;
}

function exportId(id: t.Identifier, statements: Node[], param: string) {
  statements.push(
    t.expressionStatement(
      t.assignmentExpression(
        "=",
        t.memberExpression(t.identifier(param), t.identifier(id.name)),
        t.identifier(id.name),
      ),
    ),
  );
}

// Babel's parser adds these fields only when present: writing an absent one
// would change the node's shape, so each write is guarded.
function stripClass(node: Node) {
  if (node.typeParameters) node.typeParameters = null;
  if (node.superTypeParameters) node.superTypeParameters = null;
  if (node.implements) node.implements = null;
  if (node.abstract) node.abstract = null;
}

function stripFunction(node: Node) {
  if (node.typeParameters) node.typeParameters = null;
  if (node.returnType) node.returnType = null;
  const { params } = node;
  if (params[0]?.type === "Identifier" && params[0].name === "this") {
    params.shift();
  }
}

// An annotation such as `/*@__PURE__*/` on `(x as T)` belongs to `x`.
function inheritComments(node: Node, replacement: Node) {
  const { leadingComments, trailingComments } = node;
  if (leadingComments) {
    replacement.leadingComments = replacement.leadingComments
      ? leadingComments.concat(replacement.leadingComments)
      : leadingComments;
  }
  if (trailingComments) {
    replacement.trailingComments = replacement.trailingComments
      ? replacement.trailingComments.concat(trailingComments)
      : trailingComments;
  }
  return replacement;
}

// `constructor(public x)` assigns `this.x = x` first, or after its `super(…)` call,
// which TypeScript then requires be one of the constructor's statements.
function parameterProperties({ params, body }: Node) {
  let assigns: t.Statement[] | undefined;
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    if (param.type !== "TSParameterProperty") continue;
    const { parameter } = param;
    const { name } =
      parameter.type === "AssignmentPattern" ? parameter.left : parameter;
    params[i] = inheritComments(param, parameter);
    (assigns ||= []).push(
      t.expressionStatement(
        t.assignmentExpression(
          "=",
          t.memberExpression(t.thisExpression(), t.identifier(name)),
          t.identifier(name),
        ),
      ),
    );
  }
  if (!assigns) return;
  const statements: Node[] = body.body;
  statements.splice(statements.findIndex(isSuperCall) + 1, 0, ...assigns);
}

function isSuperCall({ type, expression }: Node) {
  return (
    type === "ExpressionStatement" &&
    expression.type === "CallExpression" &&
    expression.callee.type === "Super"
  );
}

// Whether one of the module's local export lists exports a name already.
function exportsName(exports: Node[] | undefined, name: string) {
  if (exports) {
    for (const node of exports) {
      for (const { exported } of node.specifiers) {
        if ((exported.name ?? exported.value) === name) return true;
      }
    }
  }
  return false;
}

// `name` in `export { name }`
function exportSpecifier(name: string) {
  return t.exportSpecifier(t.identifier(name), t.identifier(name));
}

function enumMember(name: string, key: string) {
  return t.memberExpression(t.identifier(name), t.stringLiteral(key), true);
}
