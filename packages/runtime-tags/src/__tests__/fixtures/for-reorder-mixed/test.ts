export const steps = [
  {
    children: [
      { id: 1, text: "a" },
      { id: 2, text: "b" },
      { id: 3, text: "c" },
      { id: 4, text: "d" },
      { id: 5, text: "e" },
    ],
  },
  // Move + insert + remove: remove b,d; move e before a; insert x
  {
    children: [
      { id: 5, text: "e" },
      { id: 6, text: "x" },
      { id: 1, text: "a" },
      { id: 3, text: "c" },
    ],
  },
  // Interleave old and new items
  {
    children: [
      { id: 7, text: "p" },
      { id: 5, text: "e" },
      { id: 8, text: "q" },
      { id: 3, text: "c" },
      { id: 9, text: "r" },
      { id: 1, text: "a" },
    ],
  },
];
