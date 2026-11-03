// What a hop in an `<id>`'s address passes through (`pushIdHop`).
// A loop row, named by its key.
export const Row = 0;
// A call site rendering another scope's content, named by its number.
export const Site = 1;
// Content a flush renders once for the consumers keeping it (`renderWithheld`),
// named by its content id: one consumer may keep content from several templates.
export const Withheld = 2;

type Self = typeof import("./id-hop");
export type Value = Self[keyof Self];
