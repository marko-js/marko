// Scaling measurement for persisted pages: drives real optimized builds of a
// synthetic keyed-list route through the fixture harness (server document +
// patch renders, jsdom resume + frame apply) at growing item counts, and a
// multi-await route at growing frame counts. Reports medians so the growth
// curve of each pipeline stage is visible. Run: node -r ~ts scripts/measure-persisted-scaling.ts
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { gzipSync } from "node:zlib";

import { createServerRunner } from "../packages/runtime-tags/src/__tests__/utils/bundle";
import createBrowser from "../packages/runtime-tags/src/__tests__/utils/create-browser";
import {
  persistedPatchFrom,
  persistedRenderFrom,
} from "../packages/runtime-tags/src/__tests__/utils/resolve";

// Structural copy of the runtime's `@internal` PersistedDescriptor, which
// `stripInternal` removes from the declarations this project references.
type PersistedDescriptor = readonly [
  sites: readonly string[],
  renderers: readonly string[],
];

const RUNS = 5;
const ITEM_COUNTS = [100, 1000, 5000];
const AWAIT_COUNTS = [1, 10, 25];

const listTemplate = `<ul>
  <for|item| of=input.items by="id">
    <li id=item.id><span>\${item.name}</span> <b>\${item.price}</b></li>
  </for>
</ul>
<let/count=0/>
<button onClick() { count++ }>\${count}</button>
`;

const awaitTemplate = (n: number) =>
  Array.from(
    { length: n },
    (_, i) => `<div><await|v|=input.p${i}><span>\${v}</span></await></div>`,
  ).join("\n") +
  `\n<h1>\${input.title}</h1>\n<let/n=0/>\n<button onClick() { n++ }>\${n}</button>\n`;

interface Sample {
  label: string;
  docMs: number;
  patchMs: number;
  patchRaw: number;
  patchGzip: number;
  frames: number;
  tokenLen: number;
  applyMs: number;
  applyPerFrameMs: number;
  // First/last frame medians expose per-frame growth across a navigation.
  applyFirstMs: number;
  applyLastMs: number;
  heapMb: number;
}

function median(nums: number[]) {
  const s = [...nums].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
}

function items(n: number, gen: number) {
  return Array.from({ length: n }, (_, i) => ({
    id: `k${i}`,
    name: `Item ${i} g${gen}`,
    price: ((i * 37 + gen * 13) % 1000) / 10,
  }));
}

// Second input: rotate order, replace 10% of ids, touch 20% of prices.
function mutate(base: ReturnType<typeof items>, gen: number) {
  const next = base.map((item, i) =>
    i % 5 === 0 ? { ...item, price: item.price + gen } : item,
  );
  for (let i = 0; i < next.length; i += 10) {
    next[i] = { ...next[i], id: `n${gen}-${i}`, name: `New ${gen}-${i}` };
  }
  const pivot = Math.floor(next.length / 3);
  return [...next.slice(pivot), ...next.slice(0, pivot)];
}

// Awaited promises resolve one per received chunk so every await settles in
// its own flush (frame) without timer waits polluting the measurements.
interface DrivenInput {
  input: Record<string, unknown>;
  tick?: () => void;
}

async function measure(
  label: string,
  source: string,
  makeInputA: () => DrivenInput,
  makeInputB: () => DrivenInput,
): Promise<Sample> {
  const cwd = path.join(
    __dirname,
    "../dist/scaling",
    label.replace(/\W+/g, "-"),
  );
  rmSync(cwd, { recursive: true, force: true });
  mkdirSync(cwd, { recursive: true });
  writeFileSync(path.join(cwd, "template.marko"), source);

  const runner = await createServerRunner(
    cwd,
    { template: "./template.marko" },
    { optimize: true, persisted: true },
  );
  const server = await runner.runServer();
  const rawTemplate = server.template as unknown as { default?: unknown };
  const template = (rawTemplate.default ??
    rawTemplate) as typeof server.template;
  const descriptor = (
    server as unknown as { templateDescriptor: PersistedDescriptor }
  ).templateDescriptor;

  const docMs: number[] = [];
  const patchMs: number[] = [];
  const applyTotals: number[] = [];
  const applyFirsts: number[] = [];
  const applyLasts: number[] = [];
  let frames!: string[];
  let have = "";

  for (let run = 0; run < RUNS; run++) {
    // Document render (the floor: ordinary streamed page).
    const { input: inputA, tick: tickA } = makeInputA();
    const globalA = { persisted: true, renderId: "page" };
    const persistedA = persistedRenderFrom(globalA, descriptor);
    const chunks: string[] = [];
    let start = performance.now();
    for await (const chunk of template.render(
      { ...inputA, $global: globalA },
      { persisted: persistedA },
    )) {
      chunks.push(chunk);
      tickA?.();
    }
    docMs.push(performance.now() - start);

    // Patch render of the mutated input against the page's token.
    const browser = createBrowser(runner.assets);
    const flushNext = browser.stream(chunks);
    while (flushNext()) await browser.runAsyncScripts();
    await browser.runAsyncScripts();
    const renders = (browser.window as any).M;
    const renderId = Object.keys(renders)[0];
    have = renders[renderId].h || "";

    const { input: inputB, tick: tickB } = makeInputB();
    const globalB = { persisted: true, renderId: "navigate" };
    const patchRender = persistedPatchFrom(globalB, descriptor, have);
    let html = "";
    start = performance.now();
    for await (const chunk of template.render(
      { ...inputB, $global: globalB },
      { persisted: patchRender },
    )) {
      html += chunk;
      tickB?.();
    }
    patchMs.push(performance.now() - start);
    frames = html.split("\n").filter(Boolean);

    // Client apply through the generated ?persisted entry.
    const updateEntry = await runner.updateRunner!(browser.ctx);
    updateEntry.__ready("__navigate");
    const applyFrame = updateEntry.patch((error) => {
      throw error;
    });
    start = performance.now();
    let frameStart = start;
    for (let i = 0; i < frames.length; i++) {
      applyFrame(frames[i]);
      const now = performance.now();
      if (!i) applyFirsts.push(now - frameStart);
      if (i === frames.length - 1) applyLasts.push(now - frameStart);
      frameStart = now;
    }
    applyTotals.push(performance.now() - start);
    browser.window.close();
  }

  const raw = frames.reduce((n, f) => n + Buffer.byteLength(f) + 1, 0);
  const gzip = gzipSync(frames.join("\n")).length;
  const applyMs = median(applyTotals);
  return {
    label,
    docMs: median(docMs),
    patchMs: median(patchMs),
    patchRaw: raw,
    patchGzip: gzip,
    frames: frames.length,
    tokenLen: have.length,
    applyMs,
    applyPerFrameMs: applyMs / frames.length,
    applyFirstMs: median(applyFirsts),
    applyLastMs: median(applyLasts),
    heapMb: process.memoryUsage().heapUsed / 1024 / 1024,
  };
}

async function main() {
  const results: Sample[] = [];
  for (const n of ITEM_COUNTS) {
    const a = items(n, 1);
    const b = mutate(a, 2);
    results.push(
      await measure(
        `keyed-${n}`,
        listTemplate,
        () => ({ input: { items: a } }),
        () => ({ input: { items: b } }),
      ),
    );
  }
  for (const n of AWAIT_COUNTS) {
    const inputs = (title: string) => (): DrivenInput => {
      const resolvers: ((value: string) => void)[] = [];
      const input: Record<string, unknown> = { title };
      for (let i = 0; i < n; i++) {
        input[`p${i}`] = new Promise<string>((resolve) =>
          resolvers.push(resolve),
        );
      }
      let next = 0;
      return {
        input,
        tick() {
          if (next < resolvers.length) resolvers[next](`v${next++}-${title}`);
        },
      };
    };
    results.push(
      await measure(`awaits-${n}`, awaitTemplate(n), inputs("a"), inputs("b")),
    );
  }

  const cols = [
    "label",
    "docMs",
    "patchMs",
    "patchRaw",
    "patchGzip",
    "frames",
    "tokenLen",
    "applyMs",
    "applyPerFrameMs",
    "applyFirstMs",
    "applyLastMs",
  ] as const;
  console.log(cols.join("\t"));
  for (const row of results) {
    console.log(
      cols
        .map((col) => {
          const value = row[col];
          return typeof value === "number" ? value.toFixed(2) : value;
        })
        .join("\t"),
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
