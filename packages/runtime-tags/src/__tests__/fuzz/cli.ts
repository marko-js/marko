import { fork } from "child_process";
import os from "os";
import path from "path";
import { parseArgs } from "util";

import { check, sameFailure, writeFixture } from "./check";
import { generate } from "./generate";
import { shrink } from "./shrink";

// `pnpm run fuzz -- [--seed 1] [--count 200] [--jobs <cores>]`: generates
// templates, checks each against the oracles, and writes every failure,
// shrunk, as a fixture under `--out`.
const argv = process.argv.slice(2).filter((arg, i) => i > 0 || arg !== "--");
const { values } = parseArgs({
  args: argv,
  options: {
    seed: { type: "string", default: "1" },
    count: { type: "string", default: "200" },
    jobs: { type: "string", default: String(os.availableParallelism()) },
    out: {
      type: "string",
      default: path.join(import.meta.dirname, "dist", "found"),
    },
    worker: { type: "string" },
  },
});
const seed = Number(values.seed);
const count = Number(values.count);
const jobs = Math.min(Number(values.jobs), count);
const out = path.resolve(values.out);
const work = path.join(import.meta.dirname, "dist");

interface Found {
  seed: number;
  oracle: string;
  dir: string;
}

if (values.worker === undefined) {
  await runAll();
} else {
  await runWorker(Number(values.worker));
}

async function runAll() {
  const started = Date.now();
  const found: Found[] = [];
  let checked = 0;
  await Promise.all(
    Array.from({ length: jobs }, (_, index) => {
      const child = fork(
        import.meta.filename,
        [...argv, "--worker", `${index}`],
        {
          execArgv: process.execArgv,
        },
      );
      child.on("message", (message: { checked?: number; found?: Found }) => {
        if (message.checked) checked += message.checked;
        if (message.found) {
          found.push(message.found);
          console.log(
            `seed ${message.found.seed}: ${message.found.oracle} -> ${path.relative(process.cwd(), message.found.dir)}`,
          );
        }
      });
      return new Promise((resolve) => child.on("exit", resolve));
    }),
  );
  const secs = (Date.now() - started) / 1000;
  console.log(
    `\n${checked} cases from seed ${seed} in ${secs.toFixed(1)}s (${(checked / secs).toFixed(1)}/s), ${found.length} failing`,
  );
  process.exitCode = found.length ? 1 : 0;
}

async function runWorker(index: number) {
  const caseDir = path.join(work, `worker-${index}`);
  for (let current = seed + index; current < seed + count; current += jobs) {
    const generated = generate(current);
    const failure = await check(generated, caseDir);
    process.send!({ checked: 1 });
    if (!failure) continue;
    const shrunk = await shrink(generated, async (candidate) =>
      sameFailure(failure, await check(candidate, caseDir)),
    );
    const dir = path.join(
      out,
      `${current}-${failure.oracle.replace("/", "-")}`,
    );
    writeFixture(shrunk, (await check(shrunk, caseDir)) ?? failure, dir);
    process.send!({ found: { seed: current, oracle: failure.oracle, dir } });
  }
}
