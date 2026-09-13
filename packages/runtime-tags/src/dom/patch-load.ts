import { ready, readyFailed } from "./resume";

// Loaders of the lazy templates that only flushes create, by channel: the ready
// feature starts one when a flush waits on its channel.
export const loads: Record<string, () => void> = {};

/**
 * The loader of a lazy template that only flushes create. Never pure: it
 * registers where no client code renders the tag.
 */
export function _load_lazy(id: string, load: () => Promise<unknown>) {
  let pending: Promise<unknown> | undefined;
  loads[id] = () => {
    pending ||= load().then(
      () => ready(id),
      () => readyFailed(id),
    );
  };
}
