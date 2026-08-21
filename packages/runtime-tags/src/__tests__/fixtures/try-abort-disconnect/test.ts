import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  // A fresh client render has no disconnect, so its bodies run and log.
  skip_csr: true,
  abort_ssr: true,
  steps: (signal) => [
    {
      a: afterAbort(signal, "A"),
      b: afterAbort(signal, "B"),
      c: afterAbort(signal, "C"),
    },
  ],
};

// Resolves only once the render has disconnected, so a stranded body that
// still runs is observable in the Console snapshot.
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
