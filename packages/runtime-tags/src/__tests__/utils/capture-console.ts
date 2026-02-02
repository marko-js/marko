import type { VirtualConsole } from "jsdom";

export interface ConsoleRecord {
  type: (typeof Keys)[number];
  args: any[];
}

const Keys = ["info", "log", "warn", "error"] as const;
const originals = { ...console };

function captureType(
  type: (typeof Keys)[number],
  fn: (...args: any) => void,
  virtualConsole?: VirtualConsole,
): () => void {
  if (virtualConsole) {
    virtualConsole.addListener(type, fn);
    return () => virtualConsole.removeListener(type, fn);
  }

  globalThis.console[type] = fn;
  return () => (globalThis.console[type] = originals[type]);
}

export function captureConsole(virtualConsole?: VirtualConsole) {
  let records: ConsoleRecord[] = [];
  const cleanups = Keys.map((type) =>
    captureType(
      type,
      (...args) => records.push({ type, args }),
      virtualConsole,
    ),
  );

  return {
    records() {
      try {
        return records;
      } finally {
        records = [];
      }
    },
    cleanup() {
      while (cleanups.length) {
        cleanups.pop()!();
      }
      return this.records();
    },
  };
}

export function formatConsoleRecord(record: ConsoleRecord) {
  return record.args.length
    ? `${record.type.toUpperCase()} ${record.args.map((arg) => JSON.stringify(arg)).join(" ")}`
    : "";
}
