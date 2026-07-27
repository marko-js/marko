import assert from "assert/strict";
import path from "path";

import type { Template } from "@marko/runtime-tags/common/types";

import * as tagsTranslator from "../translator";
import { createServerRunner } from "./utils/bundle";
import createBrowser from "./utils/create-browser";

const dir = path.join(import.meta.dirname, "mounted-template");
// Each runner writes its own bundle into `<dir>/dist`, so a second fixture
// needs its own directory rather than sharing and clobbering the first.
const valueDir = path.join(import.meta.dirname, "mounted-template-value");
const spreadDir = path.join(import.meta.dirname, "mounted-template-spread");

describe("runtime-tags/dom mounted template", () => {
  let clientRunner: (ctx: any) => Promise<{ template: Template }>;
  let disposeServer: () => void;

  before(async function () {
    this.timeout(60000);
    const runner = await createServerRunner(
      dir,
      { lifecycle: "./lifecycle.marko" },
      {
        translator: tagsTranslator as any,
        optimize: false,
        babelConfig: {
          babelrc: false,
          configFile: false,
          browserslistConfigFile: false,
        },
      },
    );
    clientRunner = runner.clientRunner!;
    disposeServer = runner.disposeServer;
  });

  after(() => disposeServer?.());

  it("runs cleanup queued outside a render when destroyed", async () => {
    const browser = createBrowser();
    const { window } = browser;
    const log: string[] = ((window as any).log = []);
    const { template } = await clientRunner(browser.ctx);
    const instance = template.mount({}, window.document.body, "afterbegin");
    const signal = (window as any).signal as AbortSignal;

    assert.deepEqual(log, ["mount"]);
    assert.equal(signal.aborted, false);
    assert.equal(window.document.getElementById("out")?.textContent, "mounted");

    instance.destroy();

    assert.equal(window.document.getElementById("out"), null);
    assert.deepEqual(log, ["mount", "destroy"]);
    assert.equal(signal.aborted, true);
  });

  it("ignores an update for a template that takes no input", async () => {
    const browser = createBrowser();
    const { window } = browser;
    (window as any).log = [];
    const { template } = await clientRunner(browser.ctx);
    const instance = template.mount({}, window.document.body, "afterbegin");

    instance.update({ ignored: true });

    assert.equal(window.document.getElementById("out")?.textContent, "mounted");
  });

  it("refuses to render a template compiled for the DOM", async () => {
    const browser = createBrowser();
    (browser.window as any).log = [];
    const { template } = await clientRunner(browser.ctx);
    assert.throws(
      () => template.render({}),
      /render\(\) is not implemented for the DOM compilation/,
    );
  });

  for (const key of ["runtimeId", "renderId"]) {
    it(`rejects a ${key} that is not an identifier`, async () => {
      const browser = createBrowser();
      const { window } = browser;
      (window as any).log = [];
      const { template } = await clientRunner(browser.ctx);
      assert.throws(
        () =>
          template.mount(
            { $global: { [key]: "1-bad" } },
            window.document.body,
            "afterbegin",
          ),
        new RegExp(`Invalid ${key}`),
      );
    });
  }

  // `beforebegin`/`afterend` insert relative to the reference's parent, so the
  // reference needs one of its own rather than being the body.
  for (const [position, relation] of [
    ["beforebegin", "preceding"],
    ["afterend", "following"],
  ] as const) {
    it(`inserts ${relation} the reference for ${position}`, async () => {
      const browser = createBrowser();
      const { window } = browser;
      (window as any).log = [];
      const anchor = window.document.createElement("div");
      window.document.body.appendChild(anchor);
      const { template } = await clientRunner(browser.ctx);

      template.mount({}, anchor, position);

      const out = window.document.getElementById("out")!;
      assert.ok(out, "template did not mount");
      const mask =
        relation === "preceding"
          ? 2 /* DOCUMENT_POSITION_PRECEDING */
          : 4; /* DOCUMENT_POSITION_FOLLOWING */
      assert.ok(
        anchor.compareDocumentPosition(out) & mask,
        `expected the mounted output ${relation} the reference`,
      );
    });
  }
});

describe("runtime-tags/dom mounted template value", () => {
  let clientRunner: (ctx: any) => Promise<{ template: Template }>;
  let disposeServer: () => void;

  before(async function () {
    this.timeout(60000);
    const runner = await createServerRunner(
      valueDir,
      { value: "./value.marko" },
      {
        translator: tagsTranslator as any,
        optimize: false,
        babelConfig: {
          babelrc: false,
          configFile: false,
          browserslistConfigFile: false,
        },
      },
    );
    clientRunner = runner.clientRunner!;
    disposeServer = runner.disposeServer;
  });

  after(() => disposeServer?.());

  it("exposes the tag variable and writes back through it", async () => {
    const browser = createBrowser();
    const { window } = browser;
    const { template } = await clientRunner(browser.ctx);
    const instance = template.mount({}, window.document.body, "afterbegin");

    assert.equal(instance.value, 0);
    assert.equal(window.document.getElementById("out")?.textContent, "0");

    instance.value = 7;
    // The write is queued as a microtask, so the read back settles on the
    // next one rather than after any particular delay.
    await Promise.resolve();

    assert.equal(instance.value, 7);
    assert.equal(window.document.getElementById("out")?.textContent, "7");
  });
});

describe("runtime-tags/dom mounted template spread input", () => {
  let clientRunner: (ctx: any) => Promise<{ template: Template }>;
  let disposeServer: () => void;

  before(async function () {
    this.timeout(60000);
    const runner = await createServerRunner(
      spreadDir,
      { spread: "./spread.marko" },
      {
        translator: tagsTranslator as any,
        optimize: false,
        babelConfig: {
          babelrc: false,
          configFile: false,
          browserslistConfigFile: false,
        },
      },
    );
    clientRunner = runner.clientRunner!;
    disposeServer = runner.disposeServer;
  });

  after(() => disposeServer?.());

  it("keeps `$global` out of the input an update forwards", async () => {
    const browser = createBrowser();
    const { window } = browser;
    const { template } = await clientRunner(browser.ctx);
    const $global = { renderId: "r" };
    const instance = template.mount(
      { class: "a", $global },
      window.document.body,
      "afterbegin",
    );
    const div = window.document.querySelector("div")!;
    assert.equal(div.getAttribute("class"), "a");

    instance.update({ class: "b", $global });

    assert.equal(div.getAttribute("class"), "b");
    assert.equal(div.hasAttribute("$global"), false);
  });
});
