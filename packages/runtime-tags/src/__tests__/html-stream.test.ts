import assert from "assert/strict";
import path from "path";

import type { Template } from "@marko/runtime-tags/common/types";

import { queueTick } from "../html/writer";
import * as tagsTranslator from "../translator";
import { createServerRunner } from "./utils/bundle";

const streamDir = path.join(import.meta.dirname, "html-stream");
const tick = () => new Promise((resolve) => setImmediate(resolve));
const deferred = <T>(ms: number, value: T) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(value), ms));

describe("runtime-tags/html async iterator", () => {
  let template: Template;
  let disposeServer: () => void;

  before(async function () {
    this.timeout(60000);
    const runner = await createServerRunner(
      streamDir,
      { template: "./template.marko" },
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
    ({ template } = await runner.runServer());
    disposeServer = runner.disposeServer;
  });

  after(() => disposeServer?.());

  // Staggered awaits flush on separate ticks, so a consumer that pauses
  // between reads must still receive every chunk the fast one does.
  it("does not drop chunks when the consumer is slower than a flush tick", async () => {
    const makeInput = () => ({
      a: deferred(10, "A"),
      b: deferred(20, "B"),
      c: deferred(30, "C"),
      d: deferred(40, "D"),
    });

    const fast: string[] = [];
    for await (const chunk of template.render(makeInput())) fast.push(chunk);

    const input = makeInput();
    const settled = Promise.allSettled(Object.values(input));
    const slow: string[] = [];
    for await (const chunk of template.render(input)) {
      slow.push(chunk);
      await settled;
      await tick();
      await tick();
    }

    assert.equal(slow.join(""), fast.join(""));
    for (const letter of ["A", "B", "C", "D"]) {
      assert.ok(
        slow.join("").includes(`${letter}:${letter}`),
        `slow consumer dropped ${letter}`,
      );
    }
  });
  it("isolates tick callbacks so one throwing sink cannot stall other renders", async () => {
    const errors: unknown[] = [];
    const onError = (err: Error) => {
      errors.push(err.message);
    };
    // Mocha's own uncaught handler would fail the test; the rethrow is the point.
    const prevListeners = process.listeners("uncaughtException");
    process.removeAllListeners("uncaughtException");
    process.on("uncaughtException", onError);
    try {
      let ran = false;
      queueTick(() => {
        throw new Error("boom");
      });
      queueTick(() => {
        ran = true;
      });
      // The rethrow rides a second tick after the flush; under a loaded CI
      // box a fixed sleep raced it, so wait for both outcomes (bounded).
      const deadline = Date.now() + 5000;
      while (!(ran && errors.length) && Date.now() < deadline) {
        await new Promise((resolve) => setImmediate(resolve));
      }
      assert.equal(ran, true);
      assert.deepEqual(errors, ["boom"]);
    } finally {
      process.off("uncaughtException", onError);
      for (const listener of prevListeners) {
        process.on("uncaughtException", listener);
      }
    }
  });
});
