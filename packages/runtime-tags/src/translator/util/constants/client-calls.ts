// No call of the body gives its param group the client's bit.
export const None = 0;
// Some call gives it but not every one, or the body's callers are unknown.
export const Some = 1;
// Every call gives it, and no read outside known calls renders the body.
export const Every = 2;

type Self = typeof import("./client-calls");
export type Value = Self[keyof Self];
