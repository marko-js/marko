import assert from "assert/strict";
import { once } from "events";
import http from "http";
import type { AddressInfo } from "net";
import path from "path";
import { PassThrough } from "stream";
import { text } from "stream/consumers";
import zlib from "zlib";

import type {
  RenderedTemplate,
  Template,
} from "@marko/runtime-tags/common/types";

import * as tagsTranslator from "../translator";
import { createServerRunner } from "./utils/bundle";

type PipeTarget = {
  write(chunk: string): void;
  end(): void;
  flush?(): void;
  destroy?(): void;
  emit?(name: PropertyKey, ...args: unknown[]): unknown;
};

// `RenderedTemplate` declares `then`, async iteration and `toReadable` only,
// while the server result also implements these — see agent-feedback/bugs.md.
type ServerResult = RenderedTemplate & {
  pipe(stream: PipeTarget): void;
  catch<T>(onrejected: (reason: unknown) => T): Promise<string | T>;
  finally(onfinally: () => void): Promise<string>;
};

const dir = path.join(import.meta.dirname, "render-result");
const CONSUMED = /consumed render result/;
const HELLO = "<h1>Hello world</h1>";
// The bundle injects a module script ahead of the body; these assertions are
// about how a result is consumed, not about what the bundler emits.
const assertBody = (html: string, expected = HELLO) =>
  assert.ok(
    html.endsWith(expected),
    `expected html ending in ${expected}, got ${html}`,
  );
const iterate = (result: RenderedTemplate) =>
  result[Symbol.asyncIterator]() as Required<AsyncIterator<string>>;

describe("runtime-tags/html render result", () => {
  let sync: Template;
  let async: Template;
  const renderSync = () => sync.render({ name: "world" }) as ServerResult;
  const renderAsync = (value: Promise<string>) =>
    async.render({ value }) as ServerResult;
  let disposeServer: () => void;

  before(async function () {
    this.timeout(60000);
    const runner = await createServerRunner(
      dir,
      { sync: "./sync.marko", async: "./async.marko" },
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
    ({ sync, async } = await runner.runServer());
    disposeServer = runner.disposeServer;
  });

  after(() => disposeServer?.());

  describe("toString", () => {
    it("returns the html of a synchronous render", () => {
      assertBody(renderSync().toString());
    });

    it("throws once the result has been consumed", () => {
      const result = renderSync();
      result.toString();
      assert.throws(() => result.toString(), CONSUMED);
    });

    it("throws rather than truncate an asynchronous render", () => {
      assert.throws(
        () => renderAsync(Promise.resolve("a")).toString(),
        /Cannot consume asynchronous render/,
      );
    });
  });

  describe("promise interface", () => {
    it("resolves to the rendered html", async () => {
      assertBody(await renderSync());
    });

    it("awaits asynchronous content", async () => {
      const html = await renderAsync(Promise.resolve("a"));
      assert.match(html, /<p>a<\/p>/);
    });

    it("rejects through catch when the render aborts", async () => {
      const reason = new Error("boom");
      const caught = await renderAsync(Promise.reject(reason)).catch(
        (err) => err,
      );
      assert.equal(caught, reason);
    });

    it("rejects when the result has already been consumed", async () => {
      const result = renderSync();
      result.toString();
      await assert.rejects(async () => {
        await result;
      }, CONSUMED);
    });

    it("runs finally on success", async () => {
      let ran = false;
      await renderSync().finally(() => {
        ran = true;
      });
      assert.equal(ran, true);
    });

    it("caches the promise so a second read does not re-consume", async () => {
      const result = renderSync();
      assert.equal(await result, await result);
    });
  });

  describe("pipe", () => {
    it("writes the html and ends the stream", async () => {
      const stream = new PassThrough();
      const read = text(stream);
      renderSync().pipe(stream);
      assertBody(await read);
    });

    it("flushes each chunk so a buffering transform streams", async () => {
      // Only a flushed deflate block decompresses, so without the per-chunk
      // flush nothing readable arrives until the pending render settles.
      let settle!: (value: string) => void;
      const gzip = zlib.createGzip();
      const decoded = gzip.pipe(zlib.createGunzip());
      const firstChunk = once(decoded, "data");
      renderAsync(new Promise<string>((resolve) => (settle = resolve))).pipe(
        gzip,
      );
      assert.match(String((await firstChunk)[0]), /<script\b/);
      settle("a");
    });

    it("reports the error and destroys the target when the render aborts", async () => {
      const reason = new Error("boom");
      const stream = new PassThrough();
      const errored = once(stream, "error");
      renderAsync(Promise.reject(reason)).pipe(stream);
      assert.deepEqual(await errored, [reason]);
      assert.equal(stream.destroyed, true);
    });

    it("tears down the response socket when an http render aborts", async () => {
      const server = http.createServer((_req, res) => {
        // An unlistened `error` is fatal, so a real handler has to take it.
        res.on("error", () => {});
        renderAsync(Promise.reject(new Error("boom"))).pipe(res);
      });
      await once(server.listen(0, "127.0.0.1"), "listening");
      try {
        const { port } = server.address() as AddressInfo;
        await assert.rejects(
          fetch(`http://127.0.0.1:${port}/`).then((res) => res.text()),
        );
      } finally {
        server.close();
      }
    });

    it("closes the target before an unreportable error propagates", () => {
      const result = renderSync();
      result.toString();
      // Nothing listens for "error", so `emit` throws the way node defines it.
      const stream = new PassThrough();
      assert.throws(() => result.pipe(stream), CONSUMED);
      assert.equal(stream.destroyed, true);
    });

    it("throws on a sink that cannot report an error", () => {
      const result = renderSync();
      result.toString();
      let ended = false;
      const stream = {
        write() {},
        end: () => (ended = true),
      };
      assert.throws(() => result.pipe(stream), CONSUMED);
      assert.equal(ended, true);
    });

    it("reports a consumed result through the error path", async () => {
      const result = renderSync();
      result.toString();
      const stream = new PassThrough();
      const errored = once(stream, "error");
      result.pipe(stream);
      const [err] = await errored;
      assert.match(String((err as Error).message), CONSUMED);
    });
  });

  describe("toReadable", () => {
    it("streams the same html a string render produces", async () => {
      const expected = renderSync().toString();
      const stream = renderSync().toReadable();
      assert.equal(await new Response(stream).text(), expected);
    });

    it("does not start rendering until the stream is read", async () => {
      const result = renderSync();
      const stream = result.toReadable();
      // Untouched, so the render has not been consumed and toString still works.
      assertBody(result.toString());
      await stream.cancel();
    });

    it("errors the stream when the render aborts", async () => {
      const reason = new Error("boom");
      const stream = renderAsync(Promise.reject(reason)).toReadable();
      await assert.rejects(() => new Response(stream).text(), /boom/);
    });

    it("aborts the render when the reader cancels", async () => {
      const stream = renderAsync(Promise.resolve("a")).toReadable();
      const reader = stream.getReader();
      await reader.read();
      await reader.cancel(new Error("done here"));
      assert.deepEqual(await reader.read(), { value: undefined, done: true });
    });
  });

  describe("async iterator", () => {
    it("yields the html in chunks", async () => {
      const chunks: string[] = [];
      for await (const chunk of renderSync()) chunks.push(chunk);
      assertBody(chunks.join(""));
    });

    it("stops after the first chunk when the consumer breaks early", async () => {
      const chunks: string[] = [];
      for await (const chunk of renderAsync(Promise.resolve("a"))) {
        chunks.push(chunk);
        break;
      }
      assert.equal(chunks.length, 1);
    });

    it("reports done when the consumer returns early", async () => {
      const result = renderAsync(Promise.resolve("a"));
      const iterator = iterate(result);
      await iterator.next();
      assert.deepEqual(await iterator.return("stopped"), {
        value: "stopped",
        done: true,
      });
    });

    it("aborts the render when the consumer throws in", async () => {
      const result = renderAsync(Promise.resolve("a"));
      const iterator = iterate(result);
      await iterator.next();
      assert.deepEqual(await iterator.throw(new Error("boom")), {
        value: "",
        done: true,
      });
    });

    it("rejects when the result has already been consumed", async () => {
      const result = renderSync();
      result.toString();
      const iterator = iterate(result);
      await assert.rejects(() => iterator.next(), CONSUMED);
    });
  });
});
