"use strict";

require("../__util__/test-init");
var fs = require("fs");
var nodePath = require("path");
var PassThrough = require("stream").PassThrough;

var assert = require("assert/strict");
var fsReadOptions = { encoding: "utf8" };
var AsyncStream = require("marko/src/runtime/html/AsyncStream");

/* DEBUG INFO:
   ===========
   Want pretty debug statements and diagrams?
   Uncomment the following statement: */

// var asyncWriter = require('../debug');

function createAsyncStream(options) {
  if (typeof options.write === "function") {
    return new AsyncStream(null, options);
  } else if (typeof options === "object") {
    var name = options.name;
    var globalData = options.global;
    var out = new AsyncStream(globalData);
    if (name) {
      out.name = name;
    }
    return out;
  } else {
    return new AsyncStream();
  }
}

describe("AsyncStream", function () {
  beforeEach(function (done) {
    // for (var k in require.cache) {
    //     if (require.cache.hasOwnProperty(k)) {
    //         delete require.cache[k];
    //     }
    // }

    done();
  });

  it("should render a series of sync calls correctly", function (done) {
    var out = new AsyncStream();
    out.write("1");
    out.write("2");
    out.write("3");
    out.write("4");
    out.end();
    out.on("finish", function (result) {
      var output = result.getOutput();
      assert.equal(output, "1234");
      done();
    });
  });

  it("should resolve promise upon finish", function () {
    var out = new AsyncStream();

    out.write("1");
    out.write("2");

    return out.end().then((result) => {
      const output = result.getOutput();
      assert.equal(output, "12");
      assert.equal(result.toString(), "12");
    });
  });

  it("should render a series of sync and async calls correctly", function (done) {
    var out = new AsyncStream();
    out.write("1");

    var asyncOut1 = out.beginAsync();
    setTimeout(function () {
      asyncOut1.write("2");
      asyncOut1.end();
    }, 100);

    out.write("3");

    var asyncOut2 = out.beginAsync();
    setTimeout(function () {
      asyncOut2.write("4");
      asyncOut2.end();
    }, 10);

    out.end();
    out.on("finish", function (result) {
      var output = result.getOutput();
      assert.equal(output, "1234");
      done();
    });
  });

  it("should allow an async fragment to complete synchronously", function (done) {
    var out = new AsyncStream();
    out.write("1");

    var asyncOut = out.beginAsync();
    setTimeout(function () {
      asyncOut.write("2");
      asyncOut.end();
    }, 10);

    out.write("3");
    out.end();
    out.on("finish", function (result) {
      var output = result.getOutput();
      assert.equal(output, "123");
      done();
    });
  });

  it("should allow the async callback to provide data", function (done) {
    var out = new AsyncStream();
    out.write("1");

    var asyncOut = out.beginAsync();
    setTimeout(function () {
      asyncOut.end("2");
    }, 10);

    out.write("3");
    out.end();
    out.on("finish", function (result) {
      var output = result.getOutput();
      assert.equal(output, "123");
      done();
    });
  });

  it("should handle timeouts correctly", function (done) {
    var out = new AsyncStream();
    var errors = [];
    out.on("error", function (e) {
      errors.push(e);
    });

    out.write("1");

    var asyncOut = out.beginAsync({ timeout: 100, name: "test" });
    setTimeout(function () {
      asyncOut.write("2");
      asyncOut.end();
    }, 200);

    out.write("3");
    out.end();

    out.on("finish", function (result) {
      assert.equal(errors.length, 1);
      assert.equal(result.getOutput(), "13");
      done();
    });
  });

  it("should render nested async calls correctly", function (done) {
    var out = new AsyncStream();
    out.write("1");

    var asyncOut = out.beginAsync();
    setTimeout(function () {
      asyncOut.write("2a");

      var nestedAsyncContext = asyncOut.beginAsync();
      setTimeout(function () {
        nestedAsyncContext.write("2b");
        nestedAsyncContext.end();
      }, 10);

      asyncOut.write("2c");
      asyncOut.end();
    }, 10);

    out.write("3");

    var asyncOut2 = out.beginAsync();
    setTimeout(function () {
      var nestedAsyncContext = asyncOut2.beginAsync();
      setTimeout(function () {
        nestedAsyncContext.write("4a");
        nestedAsyncContext.end();
      }, 10);

      var nestedAsyncContext2 = asyncOut2.beginAsync();
      setTimeout(function () {
        nestedAsyncContext2.write("4b");
        nestedAsyncContext2.end();
      }, 10);

      asyncOut2.write("4c");
      asyncOut2.end();
    }, 10);

    out.end();
    out.on("finish", function (result) {
      var output = result.getOutput();
      assert.equal(output, "12a2b2c34a4b4c");
      done();
    });
  });

  it("should handle odd execution ordering", function (done) {
    var outA = createAsyncStream({ name: "outA" });

    outA.on("finish", function (result) {
      var output = result.getOutput();
      assert.equal(output, "1234567");
      done();
    });

    outA.write("1");

    var outB = outA.beginAsync({ name: "outB" });

    outA.write("3");

    var outC = outA.beginAsync({ name: "outC" });
    var outD = outC.beginAsync({ name: "outD" });

    outB.write("2");
    outB.end();

    outA.write("7");

    outC.write("5");

    outD.write("4");
    outD.end();

    outC.write("6");
    outC.end();

    outA.end();
  });

  it("should handle sync errors correctly", function (done) {
    var out = new AsyncStream();
    var errors = [];
    out.on("error", function (e) {
      errors.push(e);
    });

    out.write("1");

    var asyncOut = out.beginAsync();
    setTimeout(function () {
      asyncOut.error(new Error("test"));
    }, 10);
    out.write("3");
    out.end();
    out.on("finish", function (result) {
      var output = result.getOutput();
      assert.equal(errors.length, 1);
      assert.equal(output, "13");
      done();
    });
  });

  it("should catch error in promise catch", function (done) {
    const out = new AsyncStream();

    let errors = [];

    out.on("error", function (e) {
      errors.push(e);
    });

    out.write("1");

    let asyncOut = out.beginAsync();
    setTimeout(function () {
      asyncOut.error(new Error("test"));
    }, 10);

    out.write("3");
    out.end().catch((err) => {
      assert.equal(errors.length, 1);
      assert.ok(err instanceof Error);
      done();
    });
  });

  it("should catch error in promise catch if `error` listener only set inside mixin", function (done) {
    const out = new AsyncStream();

    out
      .catch((err) => {
        assert.ok(err instanceof Error);
        assert.equal(out.getOutput(), "1");
        done();
      })
      .then(() => {
        throw new Error("Should not get here!");
      });

    out.write("1");
    out.error(new Error("test"));
    out.write("2");
  });

  it("should support chaining", function (done) {
    var errors = [];
    var out = new AsyncStream()
      .on("error", function (e) {
        errors.push(e);
      })
      .on("finish", function (result) {
        var output = result.getOutput();
        assert.equal(errors.length, 1);
        assert.equal(output, "13");
        done();
      })
      .write("1");

    var asyncOut = out.beginAsync();
    setTimeout(function () {
      asyncOut.error(new Error("test"));
    }, 10);

    out.write("3").end();
  });

  it("should support writing to a passthrough stream", function (done) {
    var output = "";
    var passthrough = new PassThrough({ encoding: "utf8" }).on(
      "data",
      function (data) {
        output += data;
      },
    );

    var errors = [];
    var out = createAsyncStream(passthrough)
      .on("error", function (e) {
        errors.push(e);
      })
      .on("end", function () {
        assert.equal(errors.length, 0);
        assert.equal(output, "123");
        done();
      })
      .write("1");

    var asyncOut = out.beginAsync();
    setTimeout(function () {
      asyncOut.write("2");
      asyncOut.end();
    }, 10);

    out.write("3").end();
  });

  it("should support writing to a file output stream", function (done) {
    var outFile = nodePath.join(__dirname, "test.out");
    var out = fs.createWriteStream(outFile, fsReadOptions);
    var errors = [];

    out.on("close", function () {
      var output = fs.readFileSync(outFile, fsReadOptions);
      assert.equal(errors.length, 0);
      assert.equal(output, "123");
      fs.unlinkSync(outFile);
      done();
    });

    out = createAsyncStream(out)
      .on("error", function (e) {
        errors.push(e);
      })
      .on("finish", function () {})
      .write("1");

    var asyncOut = out.beginAsync();
    setTimeout(function () {
      asyncOut.write("2");
      asyncOut.end();
    }, 10);

    out.write("3").end();
  });

  it("should support piping to an async writer", function (done) {
    var out = new AsyncStream();
    out.write("1");

    var asyncOut = out.beginAsync();

    var helloReadStream = fs.createReadStream(
      nodePath.join(__dirname, "fixtures/hello.txt"),
      fsReadOptions,
    );
    helloReadStream.pipe(asyncOut);

    out.write("2");
    out.end();
    out.on("finish", function (result) {
      var output = result.getOutput();
      assert.equal(output, "1Hello World2");
      done();
    });
  });

  it("should support a writer being piped to another stream", function (done) {
    var passthrough = new PassThrough();
    var outStr = "";

    var out = new PassThrough({ encoding: "utf8" }).on("data", function (str) {
      outStr += str;
    });

    passthrough.pipe(out).on("error", function (e) {
      done(e);
    });

    out = createAsyncStream(passthrough);
    out.write("1");

    var asyncOut = out.beginAsync();

    var helloReadStream = fs.createReadStream(
      nodePath.join(__dirname, "fixtures/hello.txt"),
      fsReadOptions,
    );
    helloReadStream.pipe(asyncOut);

    out.write("2");

    out.on("end", function () {
      assert.equal(outStr, "1Hello World2");
      done();
    });

    out.end();
  });

  it("should allow an async fragment to flush last", function (done) {
    var out = new AsyncStream();
    out.write("1");

    var asyncOut = out.beginAsync({ last: true });
    out.once("last", function () {
      asyncOut.write("2");
      asyncOut.end();
    });

    out.write("3");
    out.end();
    out.on("finish", function (result) {
      var output = result.getOutput();
      assert.equal(output, "123");
      done();
    });
  });

  it("should allow an async fragment to flush last asynchronously", function (done) {
    var out = new AsyncStream();
    out.write("1");

    var asyncOut = out.beginAsync({ last: true });
    var lastFiredCount = 0;

    out.on("last", function () {
      lastFiredCount++;
    });

    out.once("last", function () {
      setTimeout(function () {
        asyncOut.write("2");
        asyncOut.end();
      }, 10);
    });

    out.write("3");
    out.end();
    out.on("finish", function (result) {
      assert.equal(lastFiredCount, 1);
      var output = result.getOutput();
      assert.equal(output, "123");
      done();
    });
  });

  it("should not crash the program if the underlying stream has an error listener", function (done) {
    var passthrough = new PassThrough();

    passthrough.on("error", function () {
      done();
    });

    var out = createAsyncStream(passthrough);
    out.write("hello");
    out.error("test");
  });

  it("should crash the program if the underlying stream does *not* have an error listener", function (done) {
    var passthrough = new PassThrough();

    var out = createAsyncStream(passthrough);
    out.write("hello");
    try {
      out.error("test");
      done("uncaught exception expected");
    } catch (e) {
      done();
    }
  });

  it("should allow multiple onLast calls", function (done) {
    var out = new AsyncStream();
    out.write("1");

    var asyncOut1 = out.beginAsync();
    setTimeout(function () {
      asyncOut1.write("2");
      asyncOut1.end();
    }, 20);

    var asyncOut2 = out.beginAsync({ last: true });
    var onLastCount = 0;
    var lastOutput = [];

    out.onLast(function (next) {
      onLastCount++;
      lastOutput.push("a");
      asyncOut2.write("3");
      asyncOut2.end();
      setTimeout(next, 10);
    });

    var asyncOut3 = out.beginAsync({ last: true });
    out.onLast(function (next) {
      onLastCount++;
      lastOutput.push("b");
      asyncOut3.write("4");
      asyncOut3.end();
      next();
    });

    out.write("5");
    out.end();
    out.on("finish", function (result) {
      var output = result.getOutput();
      assert.equal(output, "12345");
      assert.equal(onLastCount, 2);
      assert.deepEqual(lastOutput, ["a", "b"]);
      done();
    });
  });

  it("should handle timeout errors correctly", function (done) {
    var output = "";
    var errors = [];

    var passthrough = new PassThrough({ encoding: "utf8" })
      .on("data", function (data) {
        output += data;
      })
      .on("error", function (err) {
        errors.push(err);
      })
      .on("end", function () {
        assert.equal(output, "12");
        assert.equal(errors.length, 1);
        assert.match(errors[0].toString(), /timed out/);
        done();
      });

    var out = createAsyncStream(passthrough);
    out.write("1");

    var asyncOut1 = out.beginAsync();
    out.beginAsync({ timeout: 50 });

    setTimeout(function () {
      asyncOut1.write("2");
      asyncOut1.end();
    }, 100);

    out.end();
  });

  it("should avoid writes after end (a)", function (done) {
    var output = "";
    var errors = [];
    var ended = false;

    var passthrough = new PassThrough({ encoding: "utf8" })
      .on("data", function (data) {
        assert.equal(ended, false);
        output += data;
      })
      .on("error", function (err) {
        errors.push(err);
      })
      .on("end", function () {
        ended = true;
        assert.equal(output, "13");
        done();
      });

    var out = createAsyncStream(passthrough);
    out.write("1");

    var asyncOut1 = out.beginAsync({ timeout: 50 });

    setTimeout(function () {
      asyncOut1.write("2");
      asyncOut1.end();
    }, 100);

    var asyncOut2 = out.beginAsync();
    setTimeout(function () {
      asyncOut2.write("3");
      asyncOut2.end();
    }, 50);

    out.end();
  });

  it("should avoid writes after end (b)", function (done) {
    var output = "";
    var errors = [];
    var ended = false;

    var passthrough = new PassThrough({ encoding: "utf8" })
      .on("data", function (data) {
        assert.equal(ended, false);
        output += data;
      })
      .on("error", function (err) {
        errors.push(err);
      })
      .on("end", function () {
        ended = true;
        assert.equal(output, "12");
        done();
      });

    var out = createAsyncStream(passthrough);
    out.write("1");

    var asyncOut1 = out.beginAsync();

    setTimeout(function () {
      asyncOut1.write("2");
      asyncOut1.end();
    }, 75);

    var asyncOut2 = out.beginAsync({ timeout: 50 });
    // This async fragment will timeout but we will
    // still write to it after it ends
    setTimeout(function () {
      asyncOut2.write("3");
      asyncOut2.end();
    }, 100);

    out.end();
  });

  it("should avoid writes after end (c)", function (done) {
    var output = "";
    var errors = [];
    var ended = false;

    var passthrough = new PassThrough({ encoding: "utf8" })
      .on("data", function (data) {
        assert.equal(ended, false);
        output += data;
      })
      .on("error", function (err) {
        errors.push(err);
      })
      .on("end", function () {
        ended = true;
        assert.equal(output, "12");
        assert.equal(errors.length, 1);
        done();
      });

    var out = createAsyncStream(passthrough);
    out.write("1");

    var asyncOut1 = out.beginAsync();

    setTimeout(function () {
      asyncOut1.write("2");
      asyncOut1.end();
    }, 75);

    var asyncOut2 = out.beginAsync();
    // This async fragment will timeout but we will
    // still write to it after it ends
    setTimeout(function () {
      asyncOut2.error("TEST ERROR");
      asyncOut2.end();
    }, 100);

    out.end();
  });

  it("should track finished correctly", function (done) {
    var myGlobal = {};

    var out1 = createAsyncStream({ global: myGlobal });
    var out2 = createAsyncStream({ global: myGlobal });

    function handleFinished() {
      if (out1.data.__finishedFlag && out2.data.__finishedFlag) {
        done();
      }
    }

    out1.on("finish", function () {
      if (out1.data.__finishedFlag) {
        return done(new Error("finished invoked multiple times!"));
      }

      out1.data.__finishedFlag = true;
      handleFinished();
    });
    out2.on("finish", function () {
      if (out2.data.__finishedFlag) {
        return done(new Error("finished invoked multiple times!"));
      }

      out2.data.__finishedFlag = true;
      handleFinished();
    });

    out1.write("foo");
    out1.end();
    out1.end();

    out2.write("bar");
    out2.end();
  });

  it("should end correctly if top-level is ended asynchronously", function (done) {
    var out = new AsyncStream();
    out.name = "outer";

    out.on("finish", function (result) {
      var output = result.getOutput();
      assert.equal(output, "123");
      done();
    });

    out.write("1");

    setTimeout(function () {
      var asyncOut = out.beginAsync({ name: "inner" });
      setTimeout(function () {
        asyncOut.write("2");
        asyncOut.end();
      }, 50);

      out.write("3");

      out.end();
    }, 10);
  });

  it("should end correctly if top-level is ended asynchronously when providing custom globals", function (done) {
    var out = createAsyncStream({ global: { foo: "bar" } });
    out.name = "outer";

    out.on("finish", function (result) {
      var output = result.getOutput();
      assert.equal(output, "123");
      done();
    });

    out.write("1");

    setTimeout(function () {
      var asyncOut = out.beginAsync({ name: "inner" });
      setTimeout(function () {
        asyncOut.write("2");
        asyncOut.end();
      }, 50);

      out.write("3");

      out.end();
    }, 10);
  });

  it("should support out.stream for accessing the original stream", function (done) {
    var stream = new PassThrough().resume();

    var out = createAsyncStream(stream);
    assert.equal(out.stream, stream);

    var asyncOut1 = out.beginAsync();
    assert.equal(asyncOut1.stream, stream);
    setTimeout(function () {
      assert.equal(asyncOut1.stream, stream);
      asyncOut1.end();
    }, 100);

    var asyncOut2 = out.beginAsync();
    assert.equal(asyncOut2.stream, stream);
    setTimeout(function () {
      assert.equal(asyncOut2.stream, stream);
      asyncOut2.end();
    }, 50);

    out.on("end", function () {
      assert.equal(out.stream, stream);
      assert.equal(asyncOut1.stream, stream);
      assert.equal(asyncOut2.stream, stream);
      done();
    });

    out.end();
  });
  describe("async iteration", function () {
    it("yields each flushed chunk while writing is still in flight", async function () {
      var out = new AsyncStream();
      var chunks = [];
      var iterated = (async function () {
        for await (var chunk of out) chunks.push(chunk);
      })();

      out.write("a");
      var asyncOut = out.beginAsync();
      out.write("c");
      setTimeout(function () {
        asyncOut.write("b");
        asyncOut.end();
      }, 10);
      out.end();

      await iterated;
      assert.deepEqual(chunks, ["a", "bc"]);
    });

    it("yields the buffered output once writing has finished", async function () {
      var out = new AsyncStream();
      out.write("x");
      await out.end();

      var chunks = [];
      for await (var chunk of out) chunks.push(chunk);
      assert.deepEqual(chunks, ["x"]);
    });

    it("hands back the same iterator every time", function () {
      var out = new AsyncStream();
      assert.equal(out[Symbol.asyncIterator](), out[Symbol.asyncIterator]());
    });

    it("iterates the iterator itself", async function () {
      var out = new AsyncStream();
      var iterator = out[Symbol.asyncIterator]();
      out.write("only");
      out.end();

      var chunks = [];
      for await (var chunk of iterator) chunks.push(chunk);
      assert.deepEqual(chunks, ["only"]);
    });

    it("rejects the iteration when the stream errors", async function () {
      var out = new AsyncStream();
      out.on("error", function () {});
      var chunks = [];
      var iterated = (async function () {
        for await (var chunk of out) chunks.push(chunk);
      })();

      var asyncOut = out.beginAsync();
      setTimeout(function () {
        asyncOut.error(new Error("boom"));
      }, 10);
      out.end().catch(function () {});

      var caught;
      try {
        await iterated;
      } catch (err) {
        caught = err;
      }
      assert.ok(caught instanceof Error);
      assert.match(caught.message, /boom/);
      assert.deepEqual(chunks, []);
    });

    it("reports an error raised before the first read", async function () {
      var out = new AsyncStream();
      out.on("error", function () {});
      var iterator = out[Symbol.asyncIterator]();
      out.error(new Error("early"));

      var caught;
      try {
        await iterator.next();
      } catch (err) {
        caught = err;
      }
      assert.ok(caught instanceof Error);
      assert.match(caught.message, /early/);
    });

    it("ends the iteration on return", async function () {
      var out = new AsyncStream();
      var iterator = out[Symbol.asyncIterator]();
      out.write("a");
      out.end();
      assert.deepEqual(await iterator.return(), {
        value: undefined,
        done: true,
      });
    });
  });

  describe("toReadable", function () {
    it("streams the output as encoded chunks", async function () {
      var out = new AsyncStream();
      var readable = out.toReadable();

      out.write("hello ");
      var asyncOut = out.beginAsync();
      setTimeout(function () {
        asyncOut.write("world");
        asyncOut.end();
      }, 5);
      out.end();

      assert.equal(await new Response(readable).text(), "hello world");
    });

    it("stops enqueuing once the reader cancels mid-stream", async function () {
      var out = new AsyncStream();
      var reader = out.toReadable().getReader();

      out.write("first");
      var asyncOut = out.beginAsync();
      out.end();

      assert.equal(
        new TextDecoder().decode((await reader.read()).value),
        "first",
      );
      await reader.cancel();
      asyncOut.write("second");
      asyncOut.end();
    });

    it("ends the iteration when the reader cancels with nothing left to emit", async function () {
      var out = new AsyncStream();
      var iterator = out[Symbol.asyncIterator]();
      var reader = out.toReadable().getReader();

      out.write("first");
      var asyncOut = out.beginAsync();
      assert.equal(
        new TextDecoder().decode((await reader.read()).value),
        "first",
      );
      await reader.cancel();

      assert.deepEqual(await iterator.next(), {
        value: undefined,
        done: true,
      });

      asyncOut.end();
      out.end();
    });

    it("keeps the other consumers running when one cancels", async function () {
      var out = new AsyncStream();
      var cancelling = out.toReadable().getReader();
      var reader = out.toReadable().getReader();
      var decoder = new TextDecoder();

      out.write("a");
      var first = out.beginAsync();
      var second = out.beginAsync();
      await cancelling.cancel();
      // Several chunks after the cancel: the cancelled consumer must not close
      // the iterator when it stops on the first of them.
      setTimeout(function () {
        first.write("one");
        first.end();
      }, 5);
      setTimeout(function () {
        second.write("two");
        second.end();
        out.end();
      }, 20);

      var chunks = [];
      for (;;) {
        var read = await reader.read();
        if (read.done) break;
        chunks.push(decoder.decode(read.value));
      }
      assert.deepEqual(chunks, ["a", "onetwo"]);
    });

    it("ends the iteration once the last consumer cancels", async function () {
      var out = new AsyncStream();
      var iterator = out[Symbol.asyncIterator]();
      var first = out.toReadable().getReader();
      var second = out.toReadable().getReader();

      out.write("a");
      var asyncOut = out.beginAsync();
      await first.read();
      await first.cancel();
      await second.cancel();

      assert.deepEqual(await iterator.next(), {
        value: undefined,
        done: true,
      });

      asyncOut.end();
      out.end();
    });

    it("discards output produced after the last consumer cancels", async function () {
      var out = new AsyncStream();
      var iterator = out[Symbol.asyncIterator]();
      var reader = out.toReadable().getReader();

      out.write("first");
      var asyncOut = out.beginAsync();
      await reader.read();
      await reader.cancel();

      asyncOut.write("dropped");
      asyncOut.flush();
      assert.deepEqual(await iterator.next(), {
        value: undefined,
        done: true,
      });

      asyncOut.end();
      out.end();
    });

    it("errors the stream when the output errors", async function () {
      var out = new AsyncStream();
      out.on("error", function () {});
      var readable = out.toReadable();

      var asyncOut = out.beginAsync();
      setTimeout(function () {
        asyncOut.error(new Error("boom"));
      }, 5);
      out.end().catch(function () {});

      var caught;
      try {
        await new Response(readable).text();
      } catch (err) {
        caught = err;
      }
      assert.ok(caught instanceof Error);
    });
  });

  describe("html helpers", function () {
    it("writes an element with and without a closing tag", function () {
      var out = new AsyncStream();
      out.element("div", { class: "a" });
      out.element("input", { value: "1" }, true);
      assert.equal(out.toString(), "<div class=a></div><input value=1>");
    });

    it("closes the elements a begin/end pair opened, innermost first", function () {
      var out = new AsyncStream();
      out.beginElement("section", { id: "s" });
      out.beginElement("p");
      out.text("hi");
      out.endElement();
      out.endElement();
      assert.equal(out.toString(), "<section id=s><p>hi</p></section>");
    });

    it("keeps a comment from ending early", function () {
      var out = new AsyncStream();
      out.comment("a --> b --!> c");
      assert.equal(out.toString(), "<!--a --&gt; b --!&gt; c-->");
    });
  });

  describe("writer api", function () {
    it("refuses a null parent", function () {
      assert.throws(function () {
        new AsyncStream(null, null, null);
      }, /illegal state/);
    });

    it("drops a nullish write or script", function () {
      var out = new AsyncStream();
      out.write(null).write(undefined).script(null).script(undefined);
      assert.equal(out.toString(), "");
    });

    it("takes a bare number as the beginAsync timeout", function (done) {
      var out = new AsyncStream();
      var asyncOut = out.beginAsync(5000);
      assert.notEqual(asyncOut._timeoutId, undefined);
      asyncOut.end();
      out.on("finish", function () {
        done();
      });
      out.end();
    });

    it("skips the stack when tracing is off", function () {
      var previous = AsyncStream.INCLUDE_STACK;
      try {
        AsyncStream.INCLUDE_STACK = false;
        var out = new AsyncStream();
        var asyncOut = out.beginAsync();
        assert.equal(asyncOut._stack, null);
        asyncOut.end();
        out.end();
      } finally {
        AsyncStream.INCLUDE_STACK = previous;
      }
    });

    it("calls a finish listener added after the stream finished", async function () {
      var out = new AsyncStream();
      out.write("done");
      await out.end();

      var results = [];
      out.once("finish", function (result) {
        results.push(result.getOutput());
      });
      out.on("finish", function (result) {
        results.push(result.getOutput());
      });
      assert.deepEqual(results, ["done", "done"]);
    });

    it("pipes the underlying stream", function () {
      var piped = [];
      var source = {
        write: function () {},
        pipe: function (target) {
          piped.push(target);
        },
      };
      var sink = {};
      var out = createAsyncStream(source);
      assert.equal(out.pipe(sink), out);
      assert.deepEqual(piped, [sink]);
    });
  });

  describe("stack traces", function () {
    it("turns the async stack trace on", function () {
      var previous = AsyncStream.INCLUDE_STACK;
      try {
        AsyncStream.INCLUDE_STACK = false;
        AsyncStream.enableAsyncStackTrace();
        assert.equal(AsyncStream.INCLUDE_STACK, true);
      } finally {
        AsyncStream.INCLUDE_STACK = previous;
      }
    });
  });
});
