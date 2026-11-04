// What a hop in an `<id>`'s address passes through (`pushIdHop`).
// A loop row, named by its key.
export const Row = 0;
// A call site rendering another scope's content, named by its number.
export const Site = 1;

type Self = typeof import("./id-hop");
export type Value = Self[keyof Self];
