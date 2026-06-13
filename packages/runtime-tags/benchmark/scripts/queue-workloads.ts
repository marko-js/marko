// Workloads for the render-queue microbenchmark. This is bundled with
// MARKO_DEBUG=false and executed by queue-bench.ts. It imports the real queue
// module so the actual min-heap + dedup-map behavior is what gets measured,
// isolated from any DOM work.
import { queueRender, run } from "../../src/dom/queue";

const ID = "L"; // AccessorProp.Id — the default scope key read by queueRender.

type FakeScope = Record<string, unknown>;
function scopes(n: number): FakeScope[] {
  const out: FakeScope[] = [];
  for (let i = 0; i < n; i++) out.push({ [ID]: i });
  return out;
}

let sink = 0;
const signal = ((_scope: unknown, value: unknown) => {
  sink += (value as number) | 0;
}) as Parameters<typeof queueRender>[1];

function bench(name: string, totalFlushes: number, flush: () => void) {
  for (let i = 0; i < Math.min(totalFlushes, 2000); i++) flush(); // warmup
  const rounds = 15;
  const per = Math.max(1, Math.floor(totalFlushes / rounds));
  const samples: number[] = [];
  for (let r = 0; r < rounds; r++) {
    const start = performance.now();
    for (let i = 0; i < per; i++) flush();
    samples.push((performance.now() - start) / per);
  }
  samples.sort((a, b) => a - b);
  const median = samples[samples.length >> 1];
  console.log(`${name.padEnd(28)} ${(median * 1000).toFixed(3)} µs/flush`);
}

// One render per flush — fixed per-flush overhead (the common reactive update).
const one = scopes(1);
bench("single", 2_000_000, () => {
  queueRender(one[0], signal, 0, 1);
  run();
});

// N distinct renders queued in scope order, then flushed.
for (const n of [10, 100, 1000]) {
  const sc = scopes(n);
  bench(`batch-${n}`, Math.max(2000, 2_000_000 / n), () => {
    for (let i = 0; i < n; i++) queueRender(sc[i], signal, 0, 1);
    run();
  });
}

// N distinct renders queued in reverse scope order (worst case for sift-up).
for (const n of [100, 1000]) {
  const sc = scopes(n);
  bench(`reverse-${n}`, Math.max(2000, 2_000_000 / n), () => {
    for (let i = n; i--; ) queueRender(sc[i], signal, 0, 1);
    run();
  });
}

// N renders, each re-queued 3x before flushing (the dedup-map hit path).
for (const n of [100, 1000]) {
  const sc = scopes(n);
  bench(`dedup3-${n}`, Math.max(2000, 1_500_000 / n), () => {
    for (let pass = 0; pass < 3; pass++)
      for (let i = 0; i < n; i++) queueRender(sc[i], signal, 0, pass);
    run();
  });
}

if (sink === Infinity) console.log("unreachable"); // keep `sink` observable
