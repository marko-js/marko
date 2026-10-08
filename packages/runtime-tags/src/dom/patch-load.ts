import { AccessorProp, type Scope } from "../common/types";
import { _load_signal, type LoadTrigger } from "./load";
import { creating, isReady, ready, readyFailed } from "./resume";
import type { Signal } from "./signals";

// By ready id, what a flush creating a lazy template waits for: its module
// and input signal loads, their promise once started, then `1` once landed.
const loads: Record<string, (() => Promise<unknown>)[] | Promise<unknown> | 1> =
  {};

// Ready by the page's own loads: a module the document loaded on a trigger
// still lands its signals before a flush creates from it.
export const isLoaded = (id: string) =>
  loads[id] ? loads[id] === 1 : isReady(id);

export function startLoad(id: string) {
  const pending = loads[id];
  if (Array.isArray(pending)) {
    loads[id] = Promise.all(pending.map((load) => load())).then(
      () => {
        loads[id] = 1;
        ready(id);
      },
      () => readyFailed(id),
    );
  }
}

/** A load a flush creating the lazy template `id` waits for. The page entry
 * registers the module's: a module registering its own would bundle it. */
export function _load_lazy(id: string, load: () => Promise<unknown>) {
  if (Array.isArray(loads[id])) loads[id].push(load);
  else if (loads[id]) load();
  else loads[id] = [load];
}

/** A lazy child's input signal on a patch page. In a scope a shell creates it
 * applies now, its module resident, instead of buffering for a clone. A
 * flush loads it untriggered; the page's own render waits for the trigger. */
export function _load_signal_patch(
  load: () => Promise<{ _: Signal }>,
  id: string,
  trigger?: LoadTrigger,
) {
  const buffered = _load_signal(trigger ? trigger(load) : load);
  const apply: Signal & { _?: Signal } = (scope: Scope, value: unknown) => {
    if (creating) scope[AccessorProp.Load] ??= 0 as never;
    (apply._ || buffered)(scope, value);
  };
  _load_lazy(id, () => load().then((mod) => (apply._ = mod._)));
  return apply;
}
