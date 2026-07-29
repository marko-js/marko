// A module-shared array: both sheet instances serialize the SAME value,
// so its first emission (in one held group) is reused by the other —
// the reuse-site pin rule must keep it out of the live stream on holds.
export const SHEET_CLASSES = ["sheet", "sheet--wide", "sheet--persisted"];
