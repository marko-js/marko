// Tests rotation — a classic reconciler case.
// Only 1 item should need to move per rotation step.
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
  // Rotate right by 1: move last to first
  {
    children: [
      { id: 5, text: "e" },
      { id: 1, text: "a" },
      { id: 2, text: "b" },
      { id: 3, text: "c" },
      { id: 4, text: "d" },
    ],
  },
  // Rotate left by 1: move first to last
  {
    children: [
      { id: 1, text: "a" },
      { id: 2, text: "b" },
      { id: 3, text: "c" },
      { id: 4, text: "d" },
      { id: 5, text: "e" },
    ],
  },
  // Rotate right by 2
  {
    children: [
      { id: 4, text: "d" },
      { id: 5, text: "e" },
      { id: 1, text: "a" },
      { id: 2, text: "b" },
      { id: 3, text: "c" },
    ],
  },
];
