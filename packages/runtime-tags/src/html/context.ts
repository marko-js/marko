import { AccessorPrefix, AccessorProp } from "../common/types";
import {
  _resume,
  _scope,
  _scope_id,
  _scope_with_id,
  getBranchId,
  getContext,
  withContext,
} from "./writer";

// Boxed so "no provider above" is distinguishable from an explicitly
// provided `undefined`.
interface ContextBox {
  v: unknown;
  /** The provider's scope id; assigned lazily for immutable providers. */
  s?: number;
  /** Immutable only: provider id, containing branch, and open-chain link. */
  k?: string;
  b?: number;
  p?: ContextBox;
}

// Chain of open immutable boxes, for reserve-all at dynamic content holes.
const kOpenBoxes = Symbol();

export function _context_provide<T>(
  key: string,
  value: unknown,
  cb: () => T,
  scopeId?: number,
): T {
  const box: ContextBox = { v: value };
  if (scopeId === undefined) {
    // Immutable: serialized only if a `_context_reserve` names it.
    box.k = key;
    box.b = getBranchId() ?? 0;
    box.p = getContext(kOpenBoxes as never) as ContextBox | undefined;
    return withContext(key, box, () => withContext(kOpenBoxes, box, cb));
  }
  {
    // Mutable providers serialize their value, fan-out set, and a branch
    // entry (scope 0 for root providers) for client-created consumers.
    box.s = scopeId;
    const branchId = getBranchId() ?? 0;
    const providerScope = _scope(scopeId, {
      [AccessorProp.ContextValue]: value,
      [AccessorProp.ContextScopes]:
        (_scope_with_id(scopeId) as Record<string, unknown>)[
          AccessorProp.ContextScopes
        ] || new Set(),
    });
    if (MARKO_DEBUG) {
      assertSoleBranchInstance(branchId, key, providerScope);
    }
    _scope(branchId, {
      [AccessorPrefix.ContextLink + key]: providerScope,
    });
  }
  return withContext(key, box, cb);
}

// Compiler-emitted where client-re-renderable content may consume an
// immutable context: lazily serializes the named provider boxes (or every
// open one when called bare) so client-created consumers can resolve them.
export function _context_reserve(...keys: string[]) {
  if (keys.length) {
    for (const key of keys) {
      reserveBox(getContext(key) as ContextBox | undefined);
    }
  } else {
    for (
      let box = getContext(kOpenBoxes as never) as ContextBox | undefined;
      box;
      box = box.p
    ) {
      reserveBox(box);
    }
  }
}

function reserveBox(box: ContextBox | undefined) {
  if (box && box.k && box.s === undefined) {
    const providerScope = _scope((box.s = _scope_id()), {
      [AccessorProp.ContextValue]: box.v,
    });
    if (MARKO_DEBUG) {
      assertSoleBranchInstance(box.b!, box.k, providerScope);
    }
    _scope(box.b!, {
      [AccessorPrefix.ContextLink + box.k]: providerScope,
    });
  }
}

function assertSoleBranchInstance(
  branchId: number,
  key: string,
  providerScope: unknown,
) {
  const existing = (_scope_with_id(branchId) as Record<string, unknown>)[
    AccessorPrefix.ContextLink + key
  ];
  if (existing && existing !== providerScope) {
    throw new Error(
      `Multiple instances of the <context> provider ${JSON.stringify(key)} share the same branch; consumers created client-side cannot tell them apart. Wrap each provider instance in its own control flow (eg a keyed \`<for>\` iteration or an \`<if>\`).`,
    );
  }
}

export function _context_get(key: string, debugName?: string) {
  const box = getContext(key) as ContextBox | undefined;
  if (MARKO_DEBUG && !box) {
    throw missingProviderError(debugName ?? key);
  }

  return box && box.v;
}

// Mutable-provider consume: returns the value and serializes the link,
// registered fan-out signal, and fan-out set membership.
export function _context_link(
  scopeId: number,
  key: string,
  registryId: string,
  debugName?: string,
) {
  const box = getContext(key) as ContextBox | undefined;
  if (!box) {
    if (MARKO_DEBUG) {
      throw missingProviderError(debugName ?? key);
    }
    return undefined;
  }

  const providerScope = _scope_with_id(box.s!) as Record<string, unknown>;
  (providerScope[AccessorProp.ContextScopes] as Set<unknown>).add(
    _scope(scopeId, {
      [AccessorPrefix.ContextLink + key]: providerScope,
      [AccessorPrefix.ContextSignal + key]: _resume({}, registryId),
    }),
  );
  return box.v;
}

function missingProviderError(name: string) {
  return new Error(
    `No <context> provider found for ${JSON.stringify(name)}. Render a \`<context=value>\` (or \`<context:=value>\`) tag above this consumer in the render tree.`,
  );
}
