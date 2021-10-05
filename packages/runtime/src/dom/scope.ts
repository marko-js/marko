import { DOMMethods, staticNodeMethods } from "./dom";
import { setQueued } from "./queue";

export let currentScope: Scope;
export let currentOffset: number;
export let ownerOffset: number;
let scopeId = 0;

const dirtyScopes: Set<Scope> = new Set();

export type Scope = unknown[] &
  DOMMethods & {
    ___id: number;
    ___startNode: Node | number | undefined;
    ___endNode: Node | number | undefined;
    ___parentScope: Scope | undefined;
    ___parentOffset: number | undefined;
    ___cleanup: Set<number | Scope> | undefined;
  };

export function createScope(size: number, methods: DOMMethods): Scope {
  const scope = new Array(size) as Scope;
  scope.___id = scopeId++;
  scope.___startNode = scope.___endNode = undefined;
  scope.___parentScope = currentScope;
  scope.___parentOffset = currentOffset;
  dirtyScopes.add(Object.assign(scope, methods));
  return scope;
}

const emptyScope = createScope(0, staticNodeMethods);
export function getEmptyScope(marker?: Comment) {
  emptyScope.___startNode = emptyScope.___endNode = marker;
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
  while (ownerLevel--) {
    scope = scope.___parentScope!;
    ownerOffset = scope.___parentOffset!;
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
  offset = 0,
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

export function writeQueued(
  localIndex: number,
  value: unknown,
  scope = currentScope,
  offset = currentOffset
) {
  setQueued(scope, offset + localIndex, value);
}

export function writeQueuedInOwner(
  localIndex: number,
  value: unknown,
  ownerLevel?: number
) {
  writeQueued(localIndex, value, getOwnerScope(ownerLevel), ownerOffset);
}

export function destroyScope(scope: Scope) {
  scope.___parentScope?.___cleanup?.delete(scope);

  const cleanup = scope.___cleanup;
  if (cleanup) {
    for (const instance of cleanup) {
      if (typeof instance === "number") {
        (scope[instance] as () => void)();
      } else {
        destroyScope(instance);
      }
    }
  }
  return scope;
}

export function onDestroy(localIndex: number) {
  const parentScope = currentScope.___parentScope;
  if (parentScope) {
    (parentScope.___cleanup = parentScope.___cleanup || new Set()).add(
      currentScope
    );
  }
  (currentScope.___cleanup = currentScope.___cleanup || new Set()).add(
    currentOffset + localIndex
  );
}
