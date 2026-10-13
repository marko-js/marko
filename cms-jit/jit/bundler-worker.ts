import { parentPort, workerData } from "node:worker_threads";

import { type BuilderOptions, createBuilder } from "./builder";

const build = createBuilder(workerData as BuilderOptions);
let queue = Promise.resolve();

parentPort!.on(
  "message",
  ({
    id,
    key,
    files,
  }: {
    id: number;
    key: string;
    files: Record<string, string>;
  }) => {
    queue = queue.then(async () => {
      try {
        parentPort!.postMessage({ id, artifact: await build(key, files) });
      } catch (err) {
        parentPort!.postMessage({ id, error: String((err as Error).stack) });
      }
    });
  },
);
