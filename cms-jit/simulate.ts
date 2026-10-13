import {
  copyFileSync,
  mkdirSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { AppInstance } from "./jit/app";
import * as assets from "./jit/assets";
import { tagSpecifier } from "./jit/builder";
import { Bundler, keys } from "./jit/bundler";
import { MemoryKv } from "./jit/kv";
import { JitLoader, type Template } from "./jit/loader";
import {
  buildHostRuntime,
  buildHostTemplates,
  jitAssetsSpecifier,
} from "./lib/build";
import { type CmsPage, generatePages } from "./lib/pages";
import { getShape, hashValue } from "./lib/shape";
import { variants } from "./lib/variants";

const env = (name: string, fallback: number) =>
  Number(process.env[name] ?? fallback);
const config = {
  pages: env("PAGES", 3000),
  longTail: env("LONG_TAIL", 0.3),
  zipf: env("ZIPF", 1),
  rps: env("RPS", 2000),
  seconds: env("SECONDS", 16),
  deployAt: env("DEPLOY_AT", 8),
  instances: env("INSTANCES", 3),
  workers: env("WORKERS", 2),
  threshold: env("THRESHOLD", 3),
  windowMs: env("WINDOW_MS", 5000),
  prewarm: env("PREWARM", 32),
  lruBytes: env("LRU_BYTES", 2_000_000),
  linkTags: env("LINK_TAGS", 1),
  kvBytes: env("KV_BYTES", 20_000_000),
  artifactTtlMs: env("ARTIFACT_TTL_MS", 60_000),
};

const appDir = path.join(__dirname, "app");
const simDir = path.join(appDir, ".gen", "sim");
const cdnUrl = "/cdn/";

main().then(
  () => process.exit(0),
  (err) => {
    console.error(err);
    process.exit(1);
  },
);

async function main() {
  rmSync(simDir, { recursive: true, force: true });
  const cdnDir = path.join(simDir, "cdn");
  mkdirSync(path.join(cdnDir, "host"), { recursive: true });
  const host = await buildHostRuntime(path.join(simDir, "host"));
  const hostDomUrl = `${cdnUrl}host/${path.basename(host.dom)}`;
  copyFileSync(host.dom, path.join(cdnDir, "host", path.basename(host.dom)));
  const tagsDir = path.join(appDir, "tags");
  const hostModules: Record<string, unknown> = {
    "@marko/runtime-tags/html": await import(pathToFileURL(host.html).href),
    [jitAssetsSpecifier]: assets,
  };
  if (config.linkTags) {
    const files = Object.fromEntries(
      readdirSync(tagsDir).map((file) => [
        path.basename(file, ".marko"),
        path.join(tagsDir, file),
      ]),
    );
    const templates = await import(
      pathToFileURL(
        await buildHostTemplates(
          files,
          path.join(simDir, "host", "templates.mjs"),
          host,
        ),
      ).href
    );
    for (const name in files) {
      hostModules[tagSpecifier(name)] = {
        __esModule: true,
        default: templates[name],
      };
    }
  }

  const kv = new MemoryKv({ maxBytes: config.kvBytes });
  const bundler = new Bundler(kv, {
    workDir: path.join(simDir, "work"),
    appDir,
    cdnDir,
    cdnUrl,
    hostDomUrl,
    tagsDir: config.linkTags ? tagsDir : undefined,
    workers: config.workers,
    artifactTtlMs: config.artifactTtlMs,
    lockTtlMs: 60_000,
  });

  const pages = generatePages(config.pages, 1, config.longTail);
  const pick = zipfPicker(pages, config.zipf);
  printShapes(pages, pick.weights);

  const generic = variants.find((v) => v.name === "generic-lazy")!;
  const genericArtifact = await bundler.buildFiles(
    "generic",
    generic.files(pages[0]),
  );

  const start = (buildId: string) =>
    Array.from({ length: config.instances }, () => {
      const loader = new JitLoader(kv, hostModules, {
        maxBytes: config.lruBytes,
        missTtlMs: 1000,
        artifactTtlMs: config.artifactTtlMs,
      });
      const template: Template = loader.evaluate(genericArtifact);
      return {
        loader,
        app: new AppInstance(kv, loader, bundler, template, buildId, {
          threshold: config.threshold,
          windowMs: config.windowMs,
        }),
      };
    });

  let fleet = start("b1");
  const timeline: Record<string, number | string>[] = [];
  let second: Second = newSecond();
  let last = performance.now();
  let deployed = false;
  const tickMs = 50;
  const perTick = Math.round((config.rps * tickMs) / 1000);
  let request = 0;

  for (let tick = 0; tick < (config.seconds * 1000) / tickMs; tick++) {
    const now = (tick * tickMs) / 1000;
    if (!deployed && now >= config.deployAt) {
      deployed = true;
      await kv.zdecay(keys.hot);
      const prewarmStart = performance.now();
      const rebuilt = config.prewarm
        ? await bundler.prewarm("b2", config.prewarm)
        : 0;
      fleet = start("b2");
      const loaded = config.prewarm
        ? (
            await Promise.all(
              fleet.map(({ app }) => app.prewarm(config.prewarm)),
            )
          )[0]
        : 0;
      console.log(
        `\n— deploy b1 → b2 at ${now}s: prewarm rebuilt ${rebuilt} shapes, each instance loaded ${loaded} (${Math.round(performance.now() - prewarmStart)}ms)\n`,
      );
      last = performance.now();
    }

    for (let i = 0; i < perTick; i++) {
      const { app } = fleet[request++ % fleet.length];
      const rendered = await app.handle(pick.next());
      second.requests++;
      if (rendered.tier === "jit") second.jit++;
      const files = new Map<string, number>();
      for (const entry of rendered.flushed) {
        for (const [url, bytes] of Object.entries(entry.files)) {
          files.set(url, bytes);
        }
      }
      second.js += [...files.values()].reduce((a, b) => a + b, 0);
      second.scripts += files.size;
      for (const entry of rendered.flushed)
        second.entryJs += entry.files[entry.url];
    }

    const elapsed = performance.now() - last;
    if (elapsed < tickMs) await sleep(tickMs - elapsed);
    last = performance.now();

    if ((tick + 1) % (1000 / tickMs) === 0) {
      timeline.push({
        t: `${now + tickMs / 1000}s`,
        build: fleet[0].app.buildId,
        requests: second.requests,
        "jit %": Math.round((100 * second.jit) / second.requests),
        "page js B (br)": Math.round(second.js / second.requests),
        "entry js B (br)": Math.round(second.entryJs / second.requests),
        "scripts/page": +(second.scripts / second.requests).toFixed(1),
        builds: bundler.builds,
        building: bundler.inflight,
        "kv KB": Math.round(kv.bytes / 1024),
        "kv evictions": kv.evictions,
        "lru loads": fleet.reduce((sum, { loader }) => sum + loader.loads, 0),
        "lru evictions": fleet.reduce(
          (s, { loader }) => s + loader.evictions,
          0,
        ),
      });
      second = newSecond();
    }
  }

  console.table(timeline);
  console.log(
    `${bundler.builds} builds averaging ${Math.round(bundler.buildMs / bundler.builds)}ms, ${bundler.failures} failed`,
  );
  writeFileSync(
    path.join(
      __dirname,
      `simulation${config.prewarm ? "" : "-no-prewarm"}.json`,
    ),
    JSON.stringify({ config, timeline }, null, 2) + "\n",
  );
  await bundler.close();
}

interface Second {
  requests: number;
  jit: number;
  js: number;
  /** The bytes left once shared chunks are cached: each flushed entry's own file. */
  entryJs: number;
  scripts: number;
}

function newSecond(): Second {
  return { requests: 0, jit: 0, js: 0, entryJs: 0, scripts: 0 };
}

/** Requests follow a Zipf distribution over a shuffled page list, so popularity is independent of archetype. */
function zipfPicker(pages: CmsPage[], s: number) {
  const order = pages.map((_, i) => i);
  let seed = 7;
  for (let i = order.length - 1; i > 0; i--) {
    seed = (seed * 16807) % 2147483647;
    const j = seed % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  const weights = new Map<CmsPage, number>();
  const cdf: number[] = [];
  let total = 0;
  order.forEach((pageIndex, rank) => {
    const weight = 1 / (rank + 1) ** s;
    total += weight;
    cdf.push(total);
    weights.set(pages[pageIndex], weight);
  });
  for (const [page, weight] of weights) weights.set(page, weight / total);
  return {
    weights,
    next() {
      const target = Math.random() * total;
      let lo = 0;
      let hi = cdf.length - 1;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (cdf[mid] < target) lo = mid + 1;
        else hi = mid;
      }
      return pages[order[lo]];
    },
  };
}

/** How concentrated traffic is per shape, and how much smaller the keyspace gets per section. */
function printShapes(pages: CmsPage[], weights: Map<CmsPage, number>) {
  const traffic = new Map<string, number>();
  const sections = new Set<string>();
  for (const page of pages) {
    const shape = getShape(page);
    const hash = hashValue(shape);
    traffic.set(hash, (traffic.get(hash) ?? 0) + weights.get(page)!);
    for (const section of shape.sections) sections.add(hashValue(section));
  }
  const shares = [...traffic.values()].sort((a, b) => b - a);
  const top = (n: number) =>
    Math.round(100 * shares.slice(0, n).reduce((a, b) => a + b, 0));
  console.log(
    `${pages.length} pages · ${traffic.size} page shapes · ${sections.size} section shapes\n` +
      `traffic covered by the top 10 / 32 / 100 page shapes: ${top(10)}% / ${top(32)}% / ${top(100)}%\n`,
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
