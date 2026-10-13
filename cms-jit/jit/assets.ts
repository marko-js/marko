/**
 * The host's asset runtime. Marko keeps one asset flush per runtime instance,
 * so every module the host loads (its own pages, the generic renderer, each
 * JIT artifact) registers its client entries here instead of baking in a
 * manifest of its own.
 */
export interface AssetEntry {
  url: string;
  /** Every client file the entry loads (itself and its static imports, not the host runtime), with its brotli size. */
  files: Record<string, number>;
}

const entries = new Map<string, AssetEntry>();
let onFlush: ((entry: AssetEntry) => void) | undefined;

export function register(manifest: Record<string, AssetEntry>) {
  for (const id in manifest) entries.set(id, manifest[id]);
}

export function flush(_g: unknown, type: "block" | "defer", asset: string) {
  const entry = entries.get(asset);
  if (!entry || type !== "defer") return "";
  onFlush?.(entry);
  return `<script async type=module src="${entry.url}"></script>`;
}

/** Collects the client entries one render flushes. */
export function trackFlushes<T>(render: () => T) {
  const flushed: AssetEntry[] = [];
  onFlush = (entry) => flushed.push(entry);
  try {
    return { result: render(), flushed };
  } finally {
    onFlush = undefined;
  }
}
