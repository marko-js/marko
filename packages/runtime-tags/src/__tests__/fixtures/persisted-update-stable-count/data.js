// A module constant: the compiler proves the branch set never changes on
// its own, so the loop dispatches through `_update_for`'s index-paired
// merge (no keyed diff, no construction).
export const CHIPS = ["home", "tools", "toys"];
