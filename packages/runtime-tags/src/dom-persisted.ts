// Persisted navigation applier. This is a separate entry from `dom` so page
// entries do not eagerly download update-only parsing, pairing, and fragment
// machinery merely because a lazy `?update` entry uses the same runtime.
import { createUpdate } from "./dom/update";

export { _have } from "./dom/update-fragment";
export {
  _load_ready,
  _update_branch,
  _update_content,
  _update_dynamic,
  _update_for,
  _update_for_keyed,
  _update_if,
  _update_load,
  _update_pair,
  _update_scope,
  _update_seed,
  _update_signal,
} from "./dom/update-merges";

type PatchScript = HTMLScriptElement & {
  $marko(value?: unknown): void;
};

/** Creates a streaming persisted-patch consumer for one navigation. */
export function createPatch(
  merge: Parameters<typeof createUpdate>[0],
  liveRoot?: Parameters<typeof createUpdate>[1],
) {
  const apply = createUpdate(merge, liveRoot);
  const nonce =
    document.querySelector<HTMLScriptElement>("script[nonce]")?.nonce;

  return (source: string) => {
    let ran: undefined | 1;
    let value: unknown;
    const script = document.createElement("script") as PatchScript;
    script.$marko = (next) => (ran ? (value = next) : (ran = 1));
    if (nonce) script.nonce = nonce;
    // The first call flags that the frame's script executed BEFORE the
    // payload expression evaluates: script errors do not propagate through
    // `appendChild`, so this is the only way to tell an executed-but-broken
    // frame from a body that is not a frame at all (a parse error runs
    // neither call).
    script.textContent = `document.currentScript.$marko(),document.currentScript.$marko(${source})`;
    document.head.appendChild(script).remove();

    const fills: unknown[] = [];
    if (Array.isArray(value)) {
      for (const item of value) {
        if (
          typeof item === "function" ||
          typeof item === "string" ||
          Array.isArray(item)
        ) {
          fills.push(item);
        }
      }
    }
    if (!fills.length) {
      // A frame that executed but delivered no fills (threw mid-payload, or
      // yielded a non-frame value) must not be silently skipped: a swallowed
      // frame is a half-applied navigation. Throwing reaches the router's
      // catch, which falls back to a full navigation. `false` remains the
      // clean pre-apply signal for a non-frame body (negotiation mismatch).
      if (ran) {
        throw new Error(
          MARKO_DEBUG
            ? "a persisted update frame executed without producing fills"
            : "update diverged",
        );
      }
      return false;
    }
    apply(fills as Parameters<typeof apply>[0]);
    return true;
  };
}
