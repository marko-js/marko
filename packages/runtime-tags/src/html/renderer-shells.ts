// Branch shells, pre-encoded at compile time as quoted frame chunks and
// shipped at most once per response for construct-on-divergence.
export const serverRenderers: Record<string, string> = {};

export function _renderer_shells(shells: typeof serverRenderers) {
  Object.assign(serverRenderers, shells);
}
