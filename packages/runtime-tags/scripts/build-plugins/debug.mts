import type { Plugin } from "rolldown";

/**
 * Rolldown plugin that resolves `.debug` import suffixes to their non-debug
 * counterparts, allowing debug-only modules to be stripped in production.
 */
export default function debugPlugin(): Plugin {
  return {
    name: "debug",
    resolveId: {
      filter: { id: { include: /^\..*\.debug$/ } },
      handler(id, importer, opts) {
        return this.resolve(id.replace(/\.debug$/, ""), importer, opts);
      },
    },
  };
}
