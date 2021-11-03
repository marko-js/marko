import { DOMMethods, staticNodeMethods } from "./dom";
import { withQueueNext } from "./queue";
import { Scope, ScopeOffsets } from "../common/types";

export let currentScope: Scope;
export let currentOffset: number;
export let ownerOffset: number;
let scopeId = 0;

export function createScope(size: number, methods: DOMMethods): Scope {
  const scope = new Array(size) as Scope;
  scope[ScopeOffsets.ID] = "" + scopeId++;
  scope[ScopeOffsets.OWNER_SCOPE] = currentScope;
  scope[ScopeOffsets.OWNER_OFFSET] = currentOffset;
  return Object.assign(scope, methods);
}

const emptyScope = createScope(0, staticNodeMethods);
export function getEmptyScope(marker?: Comment) {
  emptyScope[ScopeOffsets.START_NODE] = emptyScope[ScopeOffsets.END_NODE] =
    marker;
  return emptyScope;
}

export function read<
  LocalScope extends Record<number, unknown>,
  I extends number = number
>(localIndex: I, scope = currentScope, offset = currentOffset) {
  return scope[offset + localIndex] as LocalScope[typeof localIndex];
}

export function write(
  localIndex: number,
  value: unknown,
  scope = currentScope,
  offset = currentOffset
) {
  if (scope[offset + localIndex] !== value) {
    scope[offset + localIndex] = value;
    return 1;
  }
  return 0;
}

export function readInOwner<
  S extends Record<number, unknown>,
  I extends number
>(localIndex: I, ownerLevel?: number) {
  return read<S, I>(localIndex, getOwnerScope(ownerLevel), ownerOffset);
}

export function writeInOwner(
  localIndex: number,
  value: unknown,
  ownerLevel?: number
) {
  write(localIndex, value, getOwnerScope(ownerLevel), ownerOffset);
}

export function getOwnerScope(ownerLevel = 1) {
  let scope = currentScope;
  ownerOffset = currentOffset;
  while (ownerLevel--) {
    const nextScope = scope[ownerOffset - 2]! as Scope;
    ownerOffset = scope[ownerOffset - 1]! as number;
    scope = nextScope;
  }
  return scope;
}

export function bind(fn: (...args: unknown[]) => unknown) {
  const boundScope = currentScope;
  const boundOffset = currentOffset;
  return fn.length
    ? (...args: unknown[]) => runWithScope(fn, boundOffset, boundScope, args)
    : () => runWithScope(fn, boundOffset, boundScope);
}

export function runWithScope(
  fn: (...args: unknown[]) => unknown,
  offset = ScopeOffsets.BEGIN_DATA,
  scope: Scope = currentScope,
  args?: unknown[]
) {
  const previousScope = currentScope;
  const previousOffset = currentOffset;
  currentScope = scope;
  currentOffset = offset;
  try {
    return args ? fn(...args) : fn();
  } finally {
    currentScope = previousScope;
    currentOffset = previousOffset;
  }
}

export function runInChild(fn: () => void, offset: number) {
  currentOffset += offset;
  try {
    fn();
  } finally {
    currentOffset -= offset;
  }
}

export function destroyScope(scope: Scope) {
  scope[ScopeOffsets.OWNER_SCOPE]?.[ScopeOffsets.CLEANUP]?.delete(scope);

  const cleanup = scope[ScopeOffsets.CLEANUP];
  if (cleanup) {
    for (const instance of cleanup) {
      if (typeof instance === "number") {
        withQueueNext(scope[instance] as () => void);
      } else {
        destroyScope(instance);
      }
    }
  }
  return scope;
}

export function onDestroy(localIndex: number) {
  const parentScope = currentScope[ScopeOffsets.OWNER_SCOPE];
  if (parentScope) {
    (parentScope[ScopeOffsets.CLEANUP] =
      parentScope[ScopeOffsets.CLEANUP] || new Set()).add(currentScope);
  }
  (currentScope[ScopeOffsets.CLEANUP] =
    currentScope[ScopeOffsets.CLEANUP] || new Set()).add(
    currentOffset + localIndex
  );
}
