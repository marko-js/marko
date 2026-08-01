// Branch shells, pre-serialized at compile time as complete frame chunks
// (",[0,id,template,walks]") and registered at server module load; a patch
// ships each at most once per response so the client can construct branches
// without bundling conditional content.
export const serverRenderers: Record<string, string> = {};

export function _renderer_shells(shells: typeof serverRenderers) {
  Object.assign(serverRenderers, shells);
}
