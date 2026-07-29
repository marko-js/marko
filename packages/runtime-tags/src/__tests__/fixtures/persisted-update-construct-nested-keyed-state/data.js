const groups = [
  {
    id: "parent-alpha-marker",
    items: [{ id: "shared-item" }, { id: "alpha-item" }],
  },
  {
    id: "parent-beta-marker",
    items: [{ id: "shared-item" }, { id: "beta-item" }],
  },
];

export const getGroups =
  typeof window === "undefined"
    ? (filter) =>
        filter === "Beta"
          ? [{ ...groups[1], items: [groups[1].items[0]] }]
          : groups
    : undefined;
