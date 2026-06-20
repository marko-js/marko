// End-to-end integration test: compile a real Marko page, hydrate it, then perform a
// server-first navigation by injecting a *second* real server render through the
// navigation controller and verifying it resumes to interactive via the REAL runtime
// (executeScripts runs the fragment's inline resume <script>s), with the original
// render staying live (continuity).
//
// This exercises the genuine compile -> render -> hydrate -> navigate -> resume path,
// not a mock. It requires the compiler (the @babel/types patch must be applied).

import assert from "node:assert/strict";
import path from "node:path";

import * as compiler from "@marko/compiler";

import { applyServerUpdate } from "../dom/navigate";
import * as tagsTranslator from "../translator";
import { createClientRunner, createServerRunner } from "./utils/bundle";
import createBrowser from "./utils/create-browser";

const FIXTURE = path.join(__dirname, "spa-e2e");

function config(): compiler.Config {
  return {
    translator: tagsTranslator as unknown as string,
    writeVersionComment: false,
    babelConfig: {
      babelrc: false,
      configFile: false,
      browserslistConfigFile: false,
    },
    optimize: false,
  };
}

async function render(
  template: { render(input: unknown): AsyncIterable<string> },
  input: unknown,
) {
  let html = "";
  for await (const chunk of template.render(input)) html += chunk;
  return html;
}

/** Pull the <body> inner HTML and drop external/module scripts (the page entry). */
function bodyFragment(fullHtml: string) {
  const body = /<body[^>]*>([\s\S]*)<\/body>/i.exec(fullHtml);
  return (body ? body[1] : fullHtml).replace(
    /<script[^>]*\bsrc=[^>]*><\/script>/gi,
    "",
  );
}

describe("spa-navigate e2e (real compile → hydrate → navigate → resume)", () => {
  it("resumes an injected server render to interactive while the original stays live", async function () {
    this.timeout(60000);

    const runner = await createServerRunner(
      FIXTURE,
      { template: "./template.marko" },
      config(),
    );
    // Ensure the dom bundle is built (createBrowser loads page entry scripts from it).
    await createClientRunner(path.join(FIXTURE, "template.marko"), config());

    const { template } = await runner.runServer();

    // --- initial page load + hydrate (render "A") ---
    const pageHtml = await render(template, { label: "A" });
    const browser = createBrowser(runner.assets);
    browser.stream([pageHtml])();
    await browser.runAsyncScripts();
    const { document } = browser.window;
    const run = (browser.ctx as { run(): void }).run;

    const original = document.getElementById("counter")!;
    assert.equal(original.textContent, "A:0");
    original.click();
    run();
    assert.equal(original.textContent, "A:1", "original render is interactive");

    // --- server-first navigation: inject a second real render ("B", unique renderId) ---
    const navHtml = await render(template, {
      label: "B",
      $global: { renderId: "nav1" },
    });
    const navRoot = document.createElement("div");
    navRoot.id = "nav-root";
    document.body.appendChild(navRoot);

    const applied = applyServerUpdate(
      { build: "b1", html: bodyFragment(navHtml) },
      {
        build: "b1",
        target: navRoot,
        doc: document,
        onReload: () => assert.fail("no reload"),
      },
    );
    run();

    assert.equal(applied, true);
    const injected = navRoot.querySelector("button")!;
    assert.equal(
      injected.textContent,
      "B:0",
      "injected server render is present with its own state",
    );

    // --- the injected render is genuinely interactive (resumed by the real runtime) ---
    injected.click();
    run();
    assert.equal(
      injected.textContent,
      "B:1",
      "injected render resumed to interactive",
    );

    // --- continuity: the original render kept its independent live state ---
    assert.equal(
      original.textContent,
      "A:1",
      "original render unaffected by navigation",
    );
    original.click();
    run();
    assert.equal(
      original.textContent,
      "A:2",
      "original render still interactive",
    );

    browser.window.close();
  });
});
