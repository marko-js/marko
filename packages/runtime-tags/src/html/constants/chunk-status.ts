// Rendering, or rendered and not yet sent.
export const Open = 0;
// Waiting on an `<await>`, whose content renders into it once settled.
export const Pending = 1;
// Sent, apart from effects a held run keeps on it.
export const Streamed = 2;
// A caught `<try>`'s start marker, where the in-order stream waits until its body
// has something to send or settles; a reorder streams it as open.
export const Gated = 3;
// Pending behind a marker a reorder streamed, it streams as a reorder of its own
// once no `<await>` renders into it.
export const Requeued = 4;

type Self = typeof import("./chunk-status");
export type Value = Self[keyof Self];
