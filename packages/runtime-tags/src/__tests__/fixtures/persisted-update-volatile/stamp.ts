// A deterministic impure value source: each render observes a new value,
// like `new Date()` would.
let n = 0;
export const nextStamp = () => ++n;
