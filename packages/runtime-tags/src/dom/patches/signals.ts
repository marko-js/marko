import { decodeAccessor } from "../../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  ClosureSignalProp,
  type EncodedAccessor,
  PatchKey,
  RenderDataProp,
  type Scope,
} from "../../common/types";
import { queueRender } from "../queue";
import { _resumed, _var_resume, getRegisteredWithScope } from "../resume";
import {
  _closure_get,
  _const,
  _for_selector,
  _for_closure,
  _if_closure,
  _let,
  _let_change,
  _or,
  type Signal,
  type SignalFn,
} from "../signals";
import { readChanged, patchFills, renderData, setupPatchers } from "./apply";

// A declaration's fill run that leaves out a signal its scope renders marks its
// change for that render, as a write marks it.
export function _fill_mark(
  valueAccessor: EncodedAccessor,
  fillFn: SignalFn | 0,
) {
  return (scope: Scope) => {
    scope[
      AccessorPrefix.PatchChanged +
        (MARKO_DEBUG ? valueAccessor : decodeAccessor(valueAccessor as number))
    ] = renderData[RenderDataProp.PatchStop];
    if (fillFn) fillFn(scope);
  };
}

// A declaration doubles as its fill; `fillFn` (renders minus what the
// flush does itself) is the fill's run when it differs, `0` when nothing is left.
function fill<T extends Signal<any>>(
  key: string,
  signal: T,
  id: EncodedAccessor,
  fillFn: SignalFn | 0 | undefined,
) {
  patchFills[key] =
    fillFn === undefined
      ? signal
      : _const(
          MARKO_DEBUG
            ? (id as string).slice(0, (id as string).lastIndexOf("/"))
            : id,
          fillFn || undefined,
        );
  return signal;
}

// A dynamic tag's variable a patch writes takes the value through its own
// resume registration, under the same id.
export function _fill_var_resume<T extends Signal<unknown>>(
  id: string,
  signal: T,
): T {
  patchFills[id] = signal;
  return _var_resume(id, signal);
}
export function _fill_let<T>(
  key: string,
  id: EncodedAccessor,
  fn?: SignalFn,
  fillFn?: SignalFn | 0,
) {
  return fill(key, _let<T>(id, fn), id, fillFn);
}
// A fill is the controller's value, never an assignment the handler takes.
export function _fill_let_change<T>(
  key: string,
  id: EncodedAccessor,
  fn?: SignalFn,
  fillFn?: SignalFn | 0,
) {
  return fill(key, _let_change<T>(id, fn), id, fillFn ?? fn ?? 0);
}
// Registers a `<let>`'s fill only a patch's key reaches, keeping it and its
// value signal.
export {
  _fill_let as _fill_let_resume,
  _fill_let_change as _fill_let_change_resume,
};

// Per registration of a function with filled references: whether a patch changed one on its owner.
export const filledReferences: Record<string, (owner: Scope) => unknown> = {};

// A registration of a function with filled references (`patches/marked-bind`): `id read …`.
export function _bind_resume(key: string, factory: (owner: Scope) => unknown) {
  const sep = key.indexOf(" ");
  const id = key.slice(0, sep);
  const reads = key.slice(sep + 1);
  filledReferences[id] = (owner: Scope) => readChanged(owner, reads);
  _resumed[id] = factory;
}

// An intersection a flush renders by this id, after whatever members arrive: a created
// scope's setup, or a filled intersection's where its group mixes (`patches/render`).
export function _or_patch(
  setupId: string,
  id: number,
  fn: SignalFn,
  defaultPending?: number,
  scopeIdAccessor?: EncodedAccessor,
): Signal<never> {
  // A child's scope offset follows its node, so it is never accessor 0.
  const scopeIdKey = (
    scopeIdAccessor
      ? MARKO_DEBUG
        ? scopeIdAccessor
        : decodeAccessor(scopeIdAccessor as number)
      : AccessorProp.Id
  ) as Accessor;
  // Queued in the same order as the intersection's own renders.
  _resumed[setupId] = (scope: Scope) =>
    queueRender(scope, fn, id, 0, scope[scopeIdKey]);
  return _or(id, fn, defaultPending, scopeIdAccessor);
}

// Closure positions an owner's entry runs by id over its subscribed scopes, as main's
// `_closure` composite does; a position whose subscriber shook out is absent.
export const closureSubscribers: Record<
  string,
  ReturnType<typeof _closure_get>[]
> = {};
// A subscriber a flush names registers once, under its resume id: main's resume, with
// its setup as `._` (as `_if_closure`'s), and its position in its owner's walk.
export function _closure_get_patch(
  id: string,
  valueAccessor: EncodedAccessor,
  fn: SignalFn,
  getOwnerScope?: (scope: Scope) => Scope,
  walkId?: string,
  index?: number,
) {
  const closureSignal = _closure_get(valueAccessor, fn, getOwnerScope, id);
  (_resumed[id] as { _?: unknown })._ = closureSignal;
  // A created scope resumes the subscriber its setup envelope names (main's resume).
  setupPatchers[PatchKey.Subscribers] = getRegisteredWithScope;
  if (walkId) {
    closureSignal[ClosureSignalProp.Index] = index!;
    (closureSubscribers[walkId] ??= [])[index!] = closureSignal;
  }
  return closureSignal;
}
// The same, for a subscriber no shipped code reaches: its registration ships it.
export { _closure_get_patch as _closure_resume };

// An `<if>`/`<for>` closure a created scope sets up, registered under its id with
// the signal it runs, so it lives exactly as long.
export function _if_closure_patch(
  id: string,
  ownerConditionalNodeAccessor: EncodedAccessor,
  branch: number,
  fn: SignalFn,
) {
  return (_resumed[id] = _if_closure(ownerConditionalNodeAccessor, branch, fn));
}
export function _for_closure_patch(
  setupId: string,
  ownerLoopNodeAccessor: EncodedAccessor,
  fn: SignalFn,
  id: number,
  scopeIdAccessor?: EncodedAccessor,
) {
  return (_resumed[setupId] = _for_closure(
    ownerLoopNodeAccessor,
    fn,
    id,
    scopeIdAccessor,
  ));
}
export function _for_selector_patch(
  setupId: string,
  ownerLoopNodeAccessor: EncodedAccessor,
  ownerValueAccessor: EncodedAccessor,
  fn: SignalFn,
  id: number,
  scopeIdAccessor?: EncodedAccessor,
) {
  return (_resumed[setupId] = _for_selector(
    ownerLoopNodeAccessor,
    ownerValueAccessor,
    fn,
    id,
    scopeIdAccessor,
  ));
}
