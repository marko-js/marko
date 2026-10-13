import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import zlib from "node:zlib";

import {
  buildEntry,
  buildHostRuntime,
  type BuildResult,
  type HostRuntime,
} from "./lib/build";
import { type CmsPage, generatePages } from "./lib/pages";
import { getShape, hashValue } from "./lib/shape";
import { type Variant, variants } from "./lib/variants";

const appDir = path.join(__dirname, "app");
const genDir = path.join(appDir, ".gen");
const pageCount = Number(process.env.PAGES ?? 24);
const renderRuns = Number(process.env.RUNS ?? 300);
const only = process.env.VARIANTS?.split(",");
const sharedRuntime = process.env.RUNTIME !== "bundled";

/** Rendered markup with resume markers, scripts, and asset tags removed: what every variant must agree on. */
const visibleHtml = (html: string) =>
  html.replace(/<!--.*?-->|<script\b.*?<\/script>/gs, "");
const reference = new Map<string, string>();
let mismatches = 0;

interface PageStats {
  html: number;
  resume: number;
  clientJs: number;
  clientFiles: number;
  renderUs: number;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

async function main() {
  const pages = generatePages(pageCount);
  const shapes = new Set(pages.map((page) => hashValue(getShape(page))));
  console.log(
    `${pages.length} pages, ${shapes.size} distinct shapes, ${renderRuns} renders per page\n`,
  );

  rmSync(genDir, { recursive: true, force: true });
  const host = sharedRuntime
    ? await buildHostRuntime(path.join(genDir, "host"))
    : undefined;
  if (host) {
    const { readFileSync } = await import("node:fs");
    console.log(
      `shared client runtime: ${zlib.brotliCompressSync(readFileSync(host.dom)).byteLength} B (br), not counted below\n`,
    );
  }
  const rows: Record<string, string | number>[] = [];
  for (const variant of variants) {
    if (only && !only.includes(variant.name)) continue;
    rows.push(await runVariant(variant, pages, host));
  }
  console.table(rows);
  console.log(
    mismatches
      ? `${mismatches} renders differ from generic-lazy`
      : "every variant renders the same visible markup",
  );
  writeFileSync(
    path.join(__dirname, "results.json"),
    JSON.stringify(
      {
        pages: pages.length,
        shapes: shapes.size,
        renderRuns,
        sharedRuntime,
        rows,
      },
      null,
      2,
    ) + "\n",
  );
}

async function runVariant(
  variant: Variant,
  pages: CmsPage[],
  host: HostRuntime | undefined,
) {
  const cache = new Map();
  const groups = Map.groupBy(pages, variant.key);
  const builds: BuildResult[] = [];
  const stats: PageStats[] = [];

  for (const [key, group] of groups) {
    const dir = path.join(genDir, variant.name, hashValue(key));
    const entryFile = writeEntry(dir, variant.files(group[0]));
    const result = await buildEntry(
      entryFile,
      path.join(dir, "dist"),
      cache,
      host,
    );
    builds.push(result);
    const { default: template } = await import(
      pathToFileURL(result.serverFile).href
    );
    for (const page of group) {
      const { stats: pageStats, html } = measurePage(
        template,
        variant.input(page),
        result,
      );
      stats.push(pageStats);
      const visible = visibleHtml(html);
      const expected = reference.get(page.slug);
      if (expected === undefined) reference.set(page.slug, visible);
      else if (expected !== visible) {
        mismatches++;
        console.error(`${variant.name} renders ${page.slug} differently`);
      }
    }
  }

  const avg = (pick: (s: PageStats) => number) =>
    Math.round(stats.reduce((sum, s) => sum + pick(s), 0) / stats.length);
  const buildMs = builds.map((b) => b.ms);
  return {
    variant: variant.name,
    builds: builds.length,
    "first build ms": Math.round(buildMs[0]),
    "warm build ms (avg)":
      buildMs.length > 1
        ? Math.round(
            buildMs.slice(1).reduce((a, b) => a + b, 0) / (buildMs.length - 1),
          )
        : "-",
    "html B": avg((s) => s.html),
    "resume B": avg((s) => s.resume),
    "client js B (br)": avg((s) => s.clientJs),
    "client files": avg((s) => s.clientFiles),
    "render µs": avg((s) => s.renderUs),
  };
}

function measurePage(
  template: { render(input: unknown): { toString(): string } },
  input: Record<string, unknown>,
  build: BuildResult,
): { stats: PageStats; html: string } {
  const flushed = new Set<string>();
  (globalThis as any).__onAssetFlush = (_id: string, file: string) =>
    flushed.add(file);
  const html = template.render(input).toString();
  (globalThis as any).__onAssetFlush = undefined;

  for (let i = 0; i < 20; i++) template.render(input).toString();
  const start = performance.now();
  for (let i = 0; i < renderRuns; i++) template.render(input).toString();
  const renderUs = ((performance.now() - start) * 1000) / renderRuns;

  const files = collectChunks(build, flushed);
  const stats: PageStats = {
    html: Buffer.byteLength(html),
    resume: [...html.matchAll(/<script>(.*?)<\/script>/gs)].reduce(
      (sum, [, code]) => sum + Buffer.byteLength(code),
      0,
    ),
    clientJs: [...files].reduce(
      (sum, file) =>
        sum + zlib.brotliCompressSync(build.chunks.get(file)!.code).byteLength,
      0,
    ),
    clientFiles: files.size,
    renderUs,
  };
  return { stats, html };
}

function collectChunks(build: BuildResult, entries: Iterable<string>) {
  const files = new Set<string>();
  const visit = (file: string) => {
    const chunk = build.chunks.get(file);
    if (!chunk || files.has(file)) return;
    files.add(file);
    chunk.imports.forEach(visit);
  };
  for (const file of entries) visit(file);
  return files;
}

function writeEntry(dir: string, files: Record<string, string>) {
  mkdirSync(dir, { recursive: true });
  const app = path.relative(dir, appDir);
  for (const [name, source] of Object.entries(files)) {
    writeFileSync(path.join(dir, name), source.replaceAll("<app>", app));
  }
  return path.join(dir, "page.marko");
}
