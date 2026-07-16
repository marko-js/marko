export const getItems =
  typeof window === "undefined"
    ? (filter) =>
        Array.from(
          { length: filter === "Toys & Games" ? 10 : 50 },
          (_, i) => ({
            id: i + 1,
            name: i ? `item ${i + 1}` : "Elite Tool 1",
          }),
        )
    : undefined;
