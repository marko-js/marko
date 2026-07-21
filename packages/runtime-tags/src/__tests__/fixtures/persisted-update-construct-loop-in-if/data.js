export const getTasks =
  typeof window === "undefined"
    ? (day) =>
        day === "mon"
          ? [
              { id: 1, name: "brew", eta: "5m" },
              { id: 2, name: "grind", eta: "2m" },
            ]
          : day === "tue"
            ? [
                { id: 3, name: "roast", eta: "45m" },
                { id: 2, name: "grind", eta: "3m" },
                { id: 1, name: "brew", eta: "6m" },
              ]
            : [
                { id: 2, name: "grind", eta: "4m" },
                { id: 1, name: "brew", eta: "7m" },
              ]
    : undefined;
export const serverTaskSentinel =
  typeof window === "undefined" ? () => "server-only task sentinel" : undefined;
