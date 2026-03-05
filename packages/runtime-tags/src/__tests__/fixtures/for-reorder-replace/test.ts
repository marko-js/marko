// Tests complete replacement — all old items removed, all new items inserted.
// No branch reuse between steps.
export const steps = [
  {
    children: [
      { id: 1, text: "a" },
      { id: 2, text: "b" },
      { id: 3, text: "c" },
    ],
  },
  // Replace all: entirely new keys
  {
    children: [
      { id: 10, text: "x" },
      { id: 11, text: "y" },
      { id: 12, text: "z" },
    ],
  },
  // Back to original
  {
    children: [
      { id: 1, text: "a" },
      { id: 2, text: "b" },
      { id: 3, text: "c" },
    ],
  },
  // Replace with fewer items
  {
    children: [{ id: 20, text: "only" }],
  },
  // Replace with more items
  {
    children: [
      { id: 30, text: "p" },
      { id: 31, text: "q" },
      { id: 32, text: "r" },
      { id: 33, text: "s" },
      { id: 34, text: "t" },
    ],
  },
];
