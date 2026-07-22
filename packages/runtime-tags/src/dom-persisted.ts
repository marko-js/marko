// Kept separate so initial page entries do not load the navigation applier.
import { diverge } from "./common/errors";
import { createUpdate } from "./dom/update";

export {
  _load_ready,
  _update_attr,
  _update_branch,
  _update_content,
  _update_controllable,
  _update_details_or_dialog_open,
  _update_dynamic,
  _update_for,
  _update_for_keyed,
  _update_html,
  _update_if,
  _update_input_checked,
  _update_input_checkedValue,
  _update_input_value,
  _update_input_value_dynamic,
  _update_load,
  _update_loader,
  _update_named_attr,
  _update_pair,
  _update_region,
  _update_scopes,
  _update_seed,
  _update_select_value,
  _update_signal,
  _update_text,
} from "./dom/update-merges";

type PatchScript = HTMLScriptElement & {
  $(read: () => unknown): void;
};

/** Creates a streaming persisted-patch consumer for one navigation. */
export function patch(
  merge: Parameters<typeof createUpdate>[0],
  fail?: Parameters<typeof createUpdate>[1],
) {
  const apply = createUpdate(merge, fail);
  const nonce =
    document.querySelector<HTMLScriptElement>("script[nonce]")?.nonce;

  return (source: string) => {
    let value: unknown;
    const script = document.createElement("script") as PatchScript;
    script.$ = (read) => (value = read());
    if (nonce) script.nonce = nonce;
    script.textContent = `document.currentScript.$(()=>${source})`;
    document.head.appendChild(script).remove();

    if (!value) {
      diverge(MARKO_DEBUG && "a persisted update frame failed to execute");
    }

    const fills = value as Parameters<typeof apply>[0] & unknown[];
    if (fills.length) apply(fills as Parameters<typeof apply>[0]);
    return true;
  };
}
