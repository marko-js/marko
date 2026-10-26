// The two bits of a param group's value at render (`getUpdatesFrom`).
// The client contributes: client state, or a fill the client derives from.
export const Client = 1;
// The server contributes a value a patch writes.
export const Server = 2;

type Self = typeof import("./updates-from");
export type Value = Self[keyof Self];
