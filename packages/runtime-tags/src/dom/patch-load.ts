import { ready, readyFailed } from "./resume";

// Loaders of the lazy templates only flushes construct, by channel: the ready
// feature starts one when a flush waits on its channel.
export const loads: Record<string, () => void> = {};

/**
 * The loader of a lazy template only flushes construct. Never pure: it
 * registers where no client code renders the site.
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
