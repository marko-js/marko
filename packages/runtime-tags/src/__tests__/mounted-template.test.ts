import assert from "assert/strict";
import path from "path";

import type { Template } from "@marko/runtime-tags/common/types";

import * as tagsTranslator from "../translator";
import { createServerRunner } from "./utils/bundle";
import createBrowser from "./utils/create-browser";

const dir = path.join(import.meta.dirname, "mounted-template");

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
});
