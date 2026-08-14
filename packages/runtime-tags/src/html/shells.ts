// Branch shells, pre-encoded at compile time as quoted frame chunks and
// shipped at most once per response for construct-on-divergence.
export const shells: Record<string, string> = {};

export function _shells(registered: Record<string, string>) {
  Object.assign(shells, registered);
}
