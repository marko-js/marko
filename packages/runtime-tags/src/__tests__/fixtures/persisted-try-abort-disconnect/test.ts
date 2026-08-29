import type { TestConfig } from "../../main.test";

// A persisted page whose initial stream disconnects while an await pends:
// the shared abort signal strands the body (no broken pairing data flushes)
// and the resumed prefix stays interactive.
export const config: TestConfig = {
  persisted: true,
  abort_ssr: true,
  skip_fresh_render: true,
  steps: (signal) => [
    { a: afterAbort(signal, "A") },
    (document: Document) => {
      document.querySelector<HTMLButtonElement>("button")!.click();
    },
  ],
};

function afterAbort(signal: AbortSignal | undefined, value: string) {
  return new Promise<string>((resolve) => {
    if (!signal) return resolve(value);
    signal.addEventListener(
      "abort",
      () => setTimeout(() => resolve(value), 0),
      {
        once: true,
      },
    );
  });
}
