import { ROOT_SCOPE_ID } from "../../common/meta";
import { PatchKey, RendererProp } from "../../common/types";
import {
  K_SCOPE_ID,
  ensureRefAccess,
  Reference,
  type Registered,
  SerializerState,
  quote,
  quoteRegistryId,
  toObjectKey,
  writeDeferred,
  writeLocalArgs,
  writeProp,
} from "../serializer";
import type { ScopeInternals } from "../writer";
import {
  type PatchLink,
  type PatchRenderState,
  resolveEntryReads,
  shipNamedShell,
} from "./writer";

// A patch flush is one flat entry tree per line: no fn wrapper, no list
// brackets, and no scope ids, since the live page maps none to its scopes.
export class PatchSerializerState extends SerializerState {
  // The response whose links a bound registration's path walks.
  declare render: PatchRenderState;
  constructor(render: PatchRenderState) {
    super();
    this.render = render;
  }

  // A flush's tree is no live scope, so a later flush references it by its
  // index here, which the client's response context counts the same way.
  trees = 0;

  // Kept content's holes are shared by every instance the client holds, so a
  // value owned inside one is written as `_`'s args from the instance, which
  // its holes list for each instance to bind (`patchInstance`).
  keptBinds = new Map<object, { val: WeakKey; ref: Reference }[]>();

  // Each flush is its own tree (the scope object is shared).
  override scopeRef() {
    return new Reference(
      null,
      null,
      this.flushId,
      null,
      "_(" + this.trees + ")",
    );
  }

  // The flush's tree, written as `writeObjectProps` would, without tracking
  // the identity of nodes the patch writers built (each appears once).
  override writeScopeProps(props: object, ref: Reference) {
    return writePatchProps(this, props, ref, this.render.patchTreeNodes!);
  }

  // A patch run has no cursor: its single flush is the page root, and an
  // empty one is never keyed.
  override scopesCursor() {
    this.trees++;
    return "";
  }

  // The assignments run on the built tree, which stays the flush's value:
  // `[{…},_.b.c=_.b][0]`.
  override writeTrailing(scopesIndex: number) {
    if (!~scopesIndex) return super.writeTrailing(scopesIndex);
    this.buf[scopesIndex] = "[" + this.buf[scopesIndex];
    writeDeferred(this);
    this.buf.push("][0]");
    return "";
  }

  override wrapPayload(result: string) {
    // Each bind was written with the kept holes it is in.
    if (this.keptBinds.size) {
      throw new Error(
        "A patch cannot send a value kept content owns outside it.",
      );
    }
    this.wroteUndefined = false;
    return result;
  }

  // Only content is marked, resolving to a renderer as the flush parses; a function
  // stays a call made on use (its module may load later), its render-only locals its scope.
  override writeScopedRegistration(
    val: WeakKey,
    parent: Reference | null,
    accessor: string,
    registered: Registered,
  ) {
    const ref = new Reference(parent, accessor, this.flushId, this.buf.length);
    const content = (val as { [RendererProp.Id]?: string })[RendererProp.Id];
    const [kept, path] = this.scopePath(
      (registered.scope as ScopeInternals)[K_SCOPE_ID]!,
      registered.id,
    );
    const args =
      "[" +
      path +
      "]," +
      quoteRegistryId(shipNamedShell(this.render, registered.id)) +
      (content ? ",1" : "");
    const locals = registered.locals?.(this.boundary.state.scope);
    if (kept !== ROOT_SCOPE_ID) {
      // One value is one set of args, which each instance binds once.
      const node = this.render.patchTree![kept]!;
      let binds = this.keptBinds.get(node);
      if (!binds) this.keptBinds.set(node, (binds = []));
      binds.push({ val, ref });
      this.refs.set(val, ref);
      this.buf.push("[" + args);
      if (locals) writeLocalArgs(this, ref, locals);
      this.buf.push("]");
      return;
    }
    // Content keeps one identity, as main's write does; a bind makes its function anew.
    if (content) this.refs.set(val, ref);
    this.buf.push("_(" + args);
    if (locals) writeLocalArgs(this, ref, locals);
    this.buf.push(")");
  }

  // Patch scope ids have no client-side map, so a bound registration names its
  // scope by the links down to it from the page root, or from the kept instance
  // it is owned in, which each instance resolves as a bind: that scope and the path.
  scopePath(scopeId: number, id: string): [from: number, path: string] {
    let path = "";
    for (; scopeId !== ROOT_SCOPE_ID;) {
      const link = this.render.patchLinks[scopeId];
      if (MARKO_DEBUG && !link) {
        throw new Error(`A patch cannot send the scoped registration "${id}".`);
      }
      if (link.key?.startsWith(PatchKey.ClientBranch)) break;
      path = toHop(link.hop) + (path && "," + path);
      scopeId = link.parent;
    }
    return [scopeId, path];
  }
}

// Accessors are compiler-made (nothing to escape); a loop key is data.
function toHop(hop: PatchLink["hop"]) {
  if (typeof hop === "string") return '"' + hop + '"';
  const [accessor, at] = hop;
  return (
    '["' +
    accessor +
    '",' +
    (typeof at === "number"
      ? at
      : "[" +
        at[0] +
        "," +
        (typeof at[1] === "number" ? at[1] : quote(at[1], 0)) +
        "]") +
    "]"
  );
}

function writePatchProps(
  state: PatchSerializerState,
  node: object,
  ref: Reference,
  patchTreeNodes: Set<object>,
) {
  let sep = "";
  for (const key in node) {
    sep = writePatchProp(state, node, key, ref, patchTreeNodes, sep);
  }
  return sep;
}

function writePatchProp(
  state: PatchSerializerState,
  node: object,
  key: string,
  ref: Reference,
  patchTreeNodes: Set<object>,
  sep: string,
) {
  const escapedKey = toObjectKey(key);
  let member = (node as Record<string, unknown>)[key];
  // A created instance takes the holes from its owner's client branch entry instead,
  // where this flush writes that entry.
  const kept = (member as { [kKeptInstance]?: string } | undefined)?.[
    kKeptInstance
  ];
  const clientBranchId = kept
    ? state.render.clientBranchRendered?.get(kept)
    : undefined;
  if (
    clientBranchId !== undefined &&
    patchTreeNodes.has(state.render.patchTree![clientBranchId]!)
  ) {
    return sep;
  }
  const readsScope = state.render.entryReads?.get(member as string[]);
  if (readsScope !== undefined) {
    member = resolveEntryReads(state.render, readsScope, member as string[]);
  }
  if (member === undefined) {
    state.wroteUndefined = true;
    state.buf.push(sep + escapedKey + ":$");
    return ",";
  }
  state.buf.push(sep + escapedKey + ":");
  if (typeof member === "object" && patchTreeNodes.has(member as object)) {
    writePatchTreeNode(
      state,
      member as object,
      ref,
      escapedKey,
      patchTreeNodes,
    );
    return ",";
  }
  if (writeProp(state, member, ref, escapedKey)) return ",";
  state.buf.pop();
  return sep;
}

// The client branch entry a kept instance's patch repeats where its scope is created.
export const kKeptInstance = Symbol();

// A node keeps a reference (a later flush may reach a value by its path) but
// needs no identity lookups: `writeArray` and `writePlainObject` without them.
function writePatchTreeNode(
  state: PatchSerializerState,
  node: object,
  parent: Reference,
  accessor: string,
  patchTreeNodes: Set<object>,
) {
  const ref = new Reference(parent, accessor, state.flushId, state.buf.length);
  ref.channel = state.channel;
  if (Array.isArray(node)) {
    let sep = "[";
    for (let i = 0; i < node.length; i++) {
      const item = node[i];
      state.buf.push(sep);
      sep = ",";
      if (item === undefined) {
        state.wroteUndefined = true;
        state.buf.push("$");
      } else if (typeof item === "object" && patchTreeNodes.has(item)) {
        writePatchTreeNode(state, item, ref, "" + i, patchTreeNodes);
      } else {
        writeProp(state, item, ref, "" + i);
      }
    }
    state.buf.push(sep === "[" ? "[]" : "]");
  } else {
    const start = state.buf.push("{") - 1;
    writePatchProps(state, node, ref, patchTreeNodes);
    state.buf.push("}");
    const binds = state.keptBinds.get(node);
    if (binds) {
      // `[holes, ...args]`; a later write outside reaches no instance to bind it.
      state.keptBinds.delete(node);
      state.buf[start] = "[" + state.buf[start];
      for (const { val, ref } of binds) {
        state.buf.push("," + ensureRefAccess(state, ref));
        state.refs.delete(val);
      }
      state.buf.push("]");
    }
  }
}
