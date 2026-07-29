// Shared codec facts for the persisted value-claim store. Digests and
// store caps are fixed protocol constants — not runtime-configurable.
// Keep in lockstep with @marko/run's `digestWidth` / `valueStoreCap`.

/** Hex chars per claim digest (16 → 64 bits). */
export const DIGEST_WIDTH = 16;

/** Committed-store entry cap, mirrored in run's `mergeValueFeedback`. */
export const VALUE_STORE_CAP = 256;

/** Merges a response's delta feedback into the committed value store:
 * absent entries mean keep; the store caps at VALUE_STORE_CAP entries,
 * oldest first (insertion order — a same-route session's groups are
 * stable). */
export function _merge_value_feedback(
  committed: string | undefined,
  feedback: string,
) {
  if (!committed) return feedback;
  const byKey = new Map<string, string>();
  for (const entry of committed.split(".")) {
    byKey.set(entry.slice(0, -DIGEST_WIDTH), entry);
  }
  for (const entry of feedback.split(".")) {
    const key = entry.slice(0, -DIGEST_WIDTH);
    byKey.delete(key);
    byKey.set(key, entry);
  }
  let out = "";
  let over = byKey.size - VALUE_STORE_CAP;
  for (const entry of byKey.values()) {
    if (over-- > 0) continue;
    out += (out && ".") + entry;
  }
  return out;
}
