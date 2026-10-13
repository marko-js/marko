import { ROOT_SCOPE_ID } from "../../common/meta";
import { RendererProp } from "../../common/types";
import {
  K_SCOPE_ID,
  Reference,
  type Registered,
  SerializerState,
  quote,
  quoteRegisterId,
  toObjectKey,
  writeDeferred,
  writeProp,
} from "../serializer";
import type { ScopeInternals } from "../writer";
import type { PatchUpdateState } from "./writer";

// A patch flush is one flat entry tree per line: no fn wrapper, no list
// brackets, and no scope ids, since the live page maps none to its scopes.
export class PatchSerializerState extends SerializerState {
  // The response whose links a bound registration's path walks.
  declare render: PatchUpdateState;
  constructor(render: PatchUpdateState) {
    super();
    this.render = render;
  }

  // A flush's tree is no live scope, so a later flush references it by its
  // index here, which the client's response context counts the same way.
  trees = 0;

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
    return writePatchProps(this, props, ref, this.render.patchNodes!);
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
    this.wroteUndefined = false;
    return result;
  }

  // Only content is marked: it resolves to a renderer as the flush parses,
  // while a function stays a call made on use (its module may load later).
  override writeScopedRegistration(
    val: WeakKey,
    _parent: Reference | null,
    _accessor: string,
    registered: Registered,
  ) {
    this.buf.push("_([");
    this.writeScopePath(
      (registered.scope as ScopeInternals)[K_SCOPE_ID]!,
      registered.id,
    );
    this.buf.push(
      "]," +
        quoteRegisterId(registered.id) +
        ((val as { [RendererProp.Id]?: string })[RendererProp.Id]
          ? ",1)"
          : ")"),
    );
  }

  // Patch scope ids have no client-side map, so a bound registration names
  // its scope by the links down from the page root (written root first).
  writeScopePath(scopeId: number, id: string) {
    if (scopeId === ROOT_SCOPE_ID) return;
    const link = this.render.patchLinks?.[scopeId];
    if (!link) {
      if (MARKO_DEBUG) {
        throw new Error(
          `A patch cannot deliver the scoped registration "${id}".`,
        );
      }
      return;
    }
    this.writeScopePath(link.parent, id);
    if (link.parent !== ROOT_SCOPE_ID) this.buf.push(",");
    // Accessors are compiler-made (nothing to escape); a loop key is data.
    const hop = link.link;
    if (typeof hop === "string") {
      this.buf.push('"' + hop + '"');
    } else {
      const [accessor, at] = hop;
      this.buf.push(
        '["' +
          accessor +
          '",' +
          (typeof at === "number"
            ? at
            : "[" +
              at[0] +
              "," +
              (typeof at[1] === "number" ? at[1] : quote(at[1] + "", 0)) +
              "]") +
          "]",
      );
    }
  }
}

function writePatchProps(
  state: PatchSerializerState,
  node: object,
  ref: Reference,
  patchNodes: Set<object>,
) {
  let sep = "";
  for (const key in node) {
    const escapedKey = toObjectKey(key);
    const member = (node as Record<string, unknown>)[key];
    if (member === undefined) {
      state.wroteUndefined = true;
      state.buf.push(sep + escapedKey + ":$");
      sep = ",";
    } else {
      state.buf.push(sep + escapedKey + ":");
      if (typeof member === "object" && patchNodes.has(member as object)) {
        writePatchNode(state, member as object, ref, escapedKey, patchNodes);
        sep = ",";
      } else if (writeProp(state, member, ref, escapedKey)) {
        sep = ",";
      } else {
        state.buf.pop();
      }
    }
  }
  return sep;
}

// A node keeps a reference (a later flush may reach a value by its path) but
// needs no identity lookups: `writeArray` and `writePlainObject` without them.
function writePatchNode(
  state: PatchSerializerState,
  node: object,
  parent: Reference,
  accessor: string,
  patchNodes: Set<object>,
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
      } else if (typeof item === "object" && patchNodes.has(item)) {
        writePatchNode(state, item, ref, "" + i, patchNodes);
      } else {
        writeProp(state, item, ref, "" + i);
      }
    }
    state.buf.push(sep === "[" ? "[]" : "]");
  } else {
    state.buf.push("{");
    writePatchProps(state, node, ref, patchNodes);
    state.buf.push("}");
  }
}
