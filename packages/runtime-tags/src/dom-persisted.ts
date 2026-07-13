// Persisted navigation applier. This is a separate entry from `dom` so page
// entries do not eagerly download update-only parsing, pairing, and fragment
// machinery merely because a lazy `?update` entry uses the same runtime.
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
