// Server-only: the shared label never rides the request input, so its only
// first-flush emission is inside the diverted card fills.
const OPTS = { label: "PRIORITY-SUPPORT-TIER-LABEL" };
export const getOpts = typeof window === "undefined" ? () => OPTS : undefined;
export const getNoteLabel =
  typeof window === "undefined" ? () => OPTS.label : undefined;
