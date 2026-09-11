import { ready, readyFailed } from "./resume";

// Loaders of the lazy templates only frames construct, by channel: the ready
// feature starts one when a frame waits on its channel.
export const loads: Record<string, () => void> = {};

/**
 * The loader of a lazy template only frames construct. Never pure: it
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
