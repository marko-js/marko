import { spawn } from "node:child_process";
import { chromium } from "playwright-core";

const app = process.argv[2] || "hello";
const port = 4598;
const server = spawn(new URL("../node_modules/.bin/marko-run", import.meta.url).pathname, ["dev", "-p", String(port)], {
  cwd: new URL(`../${app}`, import.meta.url).pathname,
  stdio: "ignore",
});

// wait for ready
const url = `http://localhost:${port}/`;
for (let i = 0; i < 120; i++) {
  try { const r = await fetch(url); if (r.ok) break; } catch {}
  await new Promise(r => setTimeout(r, 500));
}

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle" });
const before = await page.locator("button").textContent();
await page.click("button");
await page.waitForTimeout(100);
const after = await page.locator("button").textContent();
console.log(JSON.stringify({ before, after }));
await browser.close();
server.kill();
process.exit(0);
