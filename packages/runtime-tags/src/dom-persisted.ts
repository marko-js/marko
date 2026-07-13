// Persisted navigation applier. This is a separate entry from `dom` so page
// entries do not eagerly download update-only parsing, pairing, and fragment
// machinery merely because a lazy `?update` entry uses the same runtime.
import { createUpdate } from "./dom/update";

export {
  _load_ready,
  _update_branch,
  _update_content,
  _update_dynamic,
  _update_for,
  _update_html,
  _update_load,
  _update_pair,
  _update_scope,
  _update_seed,
  _update_signal,
  applyUpdate,
  createUpdate,
} from "./dom/update";
export { _have } from "./dom/update-fragment";

type PatchScript = HTMLScriptElement & {
  $marko(value: unknown): void;
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
    let value: unknown;
    const script = document.createElement("script") as PatchScript;
    script.$marko = (next) => (value = next);
    if (nonce) script.nonce = nonce;
    script.textContent = `document.currentScript.$marko(${source})`;
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
    if (!fills.length) return false;
    apply(fills as Parameters<typeof apply>[0]);
    return true;
  };
}
