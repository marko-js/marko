import { spawn } from "node:child_process";
import { mkdir, writeFile, readFile, readdir, cp, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { chromium } from "playwright-core";

export const ROOT = new URL("..", import.meta.url).pathname;
const MARKO_RUN_BIN = path.join(ROOT, "node_modules/.bin/marko-run");

// ---------- server ----------
export async function startServer(appDir, port) {
  const logChunks = [];
  const proc = spawn(MARKO_RUN_BIN, ["dev", "-p", String(port)], {
    cwd: appDir,
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, NO_COLOR: "1" },
  });
  proc.stdout.on("data", (d) => logChunks.push(d));
  proc.stderr.on("data", (d) => logChunks.push(d));
  const baseUrl = `http://localhost:${port}`;

  let ready = false;
  for (let i = 0; i < 80; i++) {
    if (proc.exitCode != null) break;
    try {
      // Any HTTP response (even 404/500) means vite is listening.
      await fetch(baseUrl + "/__ping__", { signal: AbortSignal.timeout(1000) });
      ready = true;
      break;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }

  return {
    baseUrl,
    ready,
    log: () => Buffer.concat(logChunks).toString(),
    async stop() {
      proc.kill("SIGTERM");
      await new Promise((r) => setTimeout(r, 150));
      if (proc.exitCode == null) proc.kill("SIGKILL");
    },
  };
}

// ---------- browser (shared instance) ----------
let browserP;
export function getBrowser() {
  return (browserP ??= chromium.launch({
    executablePath: "/opt/pw-browsers/chromium",
  }));
}
export async function closeBrowser() {
  if (browserP) await (await browserP).close();
  browserP = undefined;
}

// Strip tags/comments/markers from SSR html so dynamic-text assertions are robust.
export function htmlText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&#39;/g, "'").replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");
}

// ---------- grading ----------
// A task dir contains: spec.md, given/ (optional, files placed AFTER agent files),
// grade.mjs exporting `grade(ctx)` -> called with { baseUrl, fetchText, fetchRes, withPage, check }.
export async function gradeRun({ taskDir, runDir, port }) {
  const checks = [];
  let fatal = null;

  const givenDir = path.join(taskDir, "given");
  if (existsSync(givenDir)) await cp(givenDir, runDir, { recursive: true, force: true });

  const server = await startServer(runDir, port);
  if (!server.ready) {
    await server.stop();
    return {
      pass: false,
      fatal: { phase: "server-start", detail: trimLog(server.log()) },
      checks,
    };
  }

  const fetchRes = async (p, init) => {
    const res = await fetch(server.baseUrl + p, {
      redirect: "manual",
      signal: AbortSignal.timeout(15000),
      ...init,
    });
    const text = await res.text();
    return { status: res.status, headers: res.headers, text };
  };
  const fetchText = async (p, init) => {
    const { status, text } = await fetchRes(p, init);
    if (status >= 500) {
      const err = new Error(`GET ${p} -> ${status}`);
      err.serverError = extractError(text, server.log());
      throw err;
    }
    return text;
  };
  const withPage = async (fn, startPath = "/") => {
    const browser = await getBrowser();
    const context = await browser.newContext();
    const page = await context.newPage();
    const pageErrors = [];
    page.on("pageerror", (e) => pageErrors.push(String(e)));
    try {
      await page.goto(server.baseUrl + startPath, { waitUntil: "networkidle", timeout: 20000 });
      return await fn(page, { pageErrors });
    } finally {
      await context.close();
    }
  };
  const check = (name, pass, detail = "") => {
    checks.push({ name, pass: !!pass, detail: String(detail).slice(0, 500) });
    return !!pass;
  };
  // Source access for graders that assert structure (eg extraction tasks).
  const readSource = (rel) => readFile(path.join(runDir, rel), "utf8").catch(() => null);
  const listSource = async (dir = "src") => {
    const out = [];
    const walk = async (d) => {
      for (const ent of await readdir(path.join(runDir, d), { withFileTypes: true }).catch(() => [])) {
        if (ent.name === "node_modules") continue;
        const rel = path.join(d, ent.name);
        if (ent.isDirectory()) await walk(rel);
        else out.push(rel);
      }
    };
    await walk(dir);
    return out;
  };

  try {
    const { grade } = await import(path.join(taskDir, "grade.mjs") + `?t=${Date.now()}`);
    await grade({ baseUrl: server.baseUrl, fetchRes, fetchText, withPage, check, htmlText, readSource, listSource });
  } catch (err) {
    fatal = {
      phase: err.serverError ? "compile-or-runtime" : "grader-exception",
      detail: err.serverError || String(err.stack || err).slice(0, 2000),
    };
  }
  await server.stop();

  const pass = !fatal && checks.length > 0 && checks.every((c) => c.pass);
  return {
    pass,
    fatal,
    checks,
    guidance: guidanceLines(server.log()),
    serverLog: trimLog(server.log()),
  };
}

// Framework guidance lines (warnings) from the full, untrimmed server log.
export function guidanceLines(log) {
  const seen = new Set();
  const lines = [];
  for (const line of (log || "").split("\n")) {
    const trimmed = line.replace(/\u001b\[[0-9;]*[A-Za-z]/g, "").trim();
    if (!/\[marko-run\]|verb exports/i.test(trimmed)) continue;
    if (seen.has(trimmed)) continue;
    seen.add(trimmed);
    lines.push(trimmed);
    if (lines.length >= 6) break;
  }
  return lines.join("\n");
}

// Pull the useful part of a vite/marko error out of a 500 page / server log.
function extractError(html, log) {
  const fromLog = (log.match(/(?:Error|error):[\s\S]{0,1500}/) || [])[0];
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, "\n")
    .replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&")
    .replace(/\n{2,}/g, "\n")
    .trim()
    .slice(0, 1500);
  return [text, fromLog].filter(Boolean).join("\n---server log---\n").slice(0, 2500);
}
function trimLog(log) {
  return log.replace(/\[[0-9;]*[A-Za-z]|\[\d*[A-Z]/g, "").slice(-3000);
}

// ---------- materialization ----------
// files: [{ path, content }] from the agent. Refuses path escapes.
export async function materialize(runDir, files, { clean = true } = {}) {
  if (clean) await rm(runDir, { recursive: true, force: true });
  await mkdir(runDir, { recursive: true });
  const written = [];
  for (const f of files || []) {
    const rel = f.path.replace(/^\.?\//, "");
    const abs = path.join(runDir, rel);
    if (!abs.startsWith(runDir)) continue;
    await mkdir(path.dirname(abs), { recursive: true });
    await writeFile(abs, f.content);
    written.push(rel);
  }
  return written;
}

export async function readTask(taskId) {
  const taskDir = path.join(ROOT, "tasks", taskId);
  const spec = await readFile(path.join(taskDir, "spec.md"), "utf8");
  return { taskDir, spec };
}
