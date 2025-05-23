"use strict";
var EventEmitter = require("events-light");
var selfClosingTags = require("self-closing-tags");
var RenderResult = require("../RenderResult");
var parseHTML = require("../vdom/parse-html");
var BufferedWriter = require("./BufferedWriter");
var attrsHelper = require("./helpers/attrs");
var markoAttr = require("./helpers/data-marko");
var escapeXmlHelper = require("./helpers/escape-xml");
var StringWriter = require("./StringWriter");
var escapeXmlOrNullish = escapeXmlHelper.x;
var escapeXmlString = escapeXmlHelper.___escapeXML;
var missingSetTimeout = typeof setTimeout !== "function";

function noop() {}

var voidWriter = {
  write: noop,
  script: noop,
  merge: noop,
  clear: noop,
  get: function () {
    return [];
  },
  toString: function () {
    return "";
  },
};

function State(root, stream, writer, events) {
  this.root = root;
  this.stream = stream;
  this.writer = writer;
  this.events = events;

  this.finished = false;
}

function escapeEndingComment(text) {
  return text.replace(/(--!?)>/g, "$1&gt;");
}

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

function AsyncStream(global, writer, parentOut) {
  if (parentOut === null) {
    throw new Error("illegal state");
  }
  var finalGlobal = (this.attributes = global || {});
  var originalStream;
  var state;

  if (parentOut) {
    state = parentOut._state;
    originalStream = state.stream;
  } else {
    var events = (finalGlobal.events /* deprecated */ =
      writer && writer.on ? writer : new EventEmitter());

    if (writer) {
      originalStream = writer;
      writer = new BufferedWriter(writer);
    } else {
      writer = originalStream = new StringWriter();
    }

    state = new State(this, originalStream, writer, events);
    writer.state = state;
  }

  finalGlobal.runtimeId = finalGlobal.runtimeId || "M";
  this.global = finalGlobal;
  this.stream = originalStream;
  this._state = state;

  this._ended = false;
  this._remaining = 1;
  this._lastCount = 0;
  this._last = undefined; // Array
  this._parentOut = parentOut;

  this.data = {};
  this.writer = writer;
  writer.stream = this;

  this._sync = false;
  this._stack = undefined;
  this.name = undefined;
  this._timeoutId = undefined;

  this._node = undefined;

  this._elStack = undefined; // Array

  this.___components = null; // ComponentsContext

  this.___assignedComponentDef = null;
  this.___assignedKey = null;
  this.___assignedCustomEvents = null;
  this.___isLast = false;
}

AsyncStream.DEFAULT_TIMEOUT = 10000;

/**
 * If set to `true`, AsyncStream errors will include the full stack trace
 */
AsyncStream.INCLUDE_STACK =
  typeof process !== "undefined" &&
  (!process.env.NODE_ENV ||
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "dev");

AsyncStream.enableAsyncStackTrace = function () {
  AsyncStream.INCLUDE_STACK = true;
};

var proto = (AsyncStream.prototype = {
  constructor: AsyncStream,
  ___host: typeof document === "object" && document,
  ___isOut: true,

  [Symbol.asyncIterator]() {
    if (this.___iterator) {
      return this.___iterator;
    }

    const originalWriter = this._state.writer;
    let buffer = "";
    let iteratorNextFn;

    if (!originalWriter.stream) {
      // Writing has finished completely so we can use a simple iterator
      buffer = this.toString();
      iteratorNextFn = () => {
        const value = buffer;
        buffer = "";
        return { value, done: !value };
      };
    } else {
      let done = false;
      let error = noop; // Used as a identity object reference.
      let pending;
      const stream = {
        write(data) {
          buffer += data;
        },
        end() {
          done = true;

          if (pending) {
            pending.resolve(
              buffer
                ? {
                    value: buffer,
                    done: false,
                  }
                : {
                    value: undefined,
                    done: true,
                  },
            );
            pending = undefined;
          }
        },
        flush() {
          if (pending) {
            pending.resolve({
              value: buffer,
              done: false,
            });
            buffer = "";
            pending = undefined;
          }
        },
      };

      this.once("error", (err) => {
        error = err;

        if (pending) {
          pending.reject(error);
          pending = undefined;
        }
      });

      const writer = new BufferedWriter(stream);
      writer.stream = originalWriter.stream;
      writer.stream.writer = writer;
      writer.next = originalWriter.next;
      writer.state = this._state;
      writer.merge(originalWriter);
      writer.scheduleFlush();

      this._state.stream = stream;
      this._state.writer = writer;

      iteratorNextFn = async () => {
        if (error !== noop) {
          throw error;
        } else if (buffer) {
          const value = buffer;
          buffer = "";
          return { value, done: false };
        } else if (done) {
          return { value: undefined, done: true };
        }

        if (!pending) {
          pending = deferred();
        }

        return pending.promise;
      };
    }

    return (this.___iterator = {
      next: iteratorNextFn,
      return: iteratorReturnFn,
      throw: iteratorReturnFn,
      [Symbol.asyncIterator]() {
        return this;
      },
    });
  },

  toReadable() {
    let cancelled = false;
    return new ReadableStream({
      start: async (ctrl) => {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of this) {
            if (cancelled) {
              return;
            }
            ctrl.enqueue(encoder.encode(chunk));
          }
          ctrl.close();
        } catch (err) {
          if (!cancelled) {
            ctrl.error(err);
          }
        }
      },
      cancel() {
        cancelled = true;
      },
    });
  },

  sync: function () {
    this._sync = true;
  },

  isSync: function () {
    return this._sync === true;
  },

  write: function (str) {
    if (str != null) {
      this.writer.write(str.toString());
    }
    return this;
  },

  script: function (str) {
    if (str != null) {
      this.writer.script(str.toString());
    }
    return this;
  },

  ___getOutput: function () {
    return this._state.writer.toString();
  },

  /**
   * Legacy...
   */
  getOutput: function () {
    return this.___getOutput();
  },

  toString: function () {
    return this._state.writer.toString();
  },

  ___getResult: function () {
    this._result = this._result || new RenderResult(this);
    return this._result;
  },

  beginAsync: function (options) {
    if (this._sync) {
      throw new Error("beginAsync() not allowed when using renderSync()");
    }

    var state = this._state;

    var currentWriter = this.writer;

    /* ┏━━━━━┓               this
           ┃ WAS ┃               ↓↑
           ┗━━━━━┛  prevWriter → currentWriter → nextWriter  */

    var newWriter = new StringWriter();
    var newStream = new AsyncStream(this.global, currentWriter, this);
    newWriter.state = state;

    this.writer = newWriter;
    newWriter.stream = this;

    newWriter.next = currentWriter.next;
    currentWriter.next = newWriter;

    /* ┏━━━━━┓               newStream       this
           ┃ NOW ┃               ↓↑              ↓↑
           ┗━━━━━┛  prevWriter → currentWriter → newWriter → nextWriter  */

    var timeout;
    var name;

    this._remaining++;

    if (options != null) {
      if (typeof options === "number") {
        timeout = options;
      } else {
        timeout = options.timeout;

        if (options.last === true) {
          if (timeout == null) {
            // Don't assign a timeout to last flush fragments
            // unless it is explicitly given a timeout
            timeout = 0;
          }

          this._lastCount++;
          newStream.___isLast = true;
        }

        name = options.name;
      }
    }

    if (missingSetTimeout) {
      timeout = 0;
    } else if (timeout == null) {
      timeout = AsyncStream.DEFAULT_TIMEOUT;
    }

    newStream._stack = AsyncStream.INCLUDE_STACK ? new Error() : null;
    newStream.name = name;

    if (timeout > 0) {
      newStream._timeoutId = setTimeout(function () {
        newStream.error(
          new Error(
            "Async fragment " +
              (name ? "(" + name + ") " : "") +
              "timed out after " +
              timeout +
              "ms",
          ),
        );
      }, timeout);
    }

    state.events.emit("beginAsync", {
      out: newStream,
      parentOut: this,
    });

    return newStream;
  },

  _doFinish: function () {
    var state = this._state;

    state.finished = true;

    if (state.writer.end) {
      state.writer.end();
    }

    if (state.events !== state.stream) {
      state.events.emit("finish", this.___getResult());
    }
  },

  end: function (data) {
    if (this._ended === true) {
      return;
    }

    this._ended = true;

    var remaining = --this._remaining;

    if (data != null) {
      this.write(data);
    }

    var currentWriter = this.writer;

    /* ┏━━━━━┓  this            nextStream
           ┃ WAS ┃  ↓↑              ↓↑
           ┗━━━━━┛  currentWriter → nextWriter → futureWriter  */

    // Prevent any more writes to the current steam
    this.writer = voidWriter;
    currentWriter.stream = null;

    // Flush the contents of nextWriter to the currentWriter
    this._flushNext(currentWriter);

    /* ┏━━━━━┓    this        ╵  nextStream
           ┃     ┃    ↓           ╵  ↓↑
           ┃ NOW ┃    voidWriter  ╵  currentWriter → futureWriter
           ┃     ┃  ──────────────┴────────────────────────────────
           ┗━━━━━┛    Flushed & garbage collected: nextWriter  */

    var parentOut = this._parentOut;

    if (parentOut === undefined) {
      if (remaining === 0) {
        this._doFinish();
      } else if (remaining - this._lastCount === 0) {
        this._emitLast();
      }
    } else {
      var timeoutId = this._timeoutId;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (remaining === 0) {
        parentOut._handleChildDone(this);
      } else if (remaining - this._lastCount === 0) {
        this._emitLast();
      }
    }

    return this;
  },

  _handleChildDone: function (childOut) {
    var remaining = --this._remaining;

    if (remaining === 0) {
      var parentOut = this._parentOut;
      if (parentOut === undefined) {
        this._doFinish();
      } else {
        parentOut._handleChildDone(this);
      }
    } else {
      if (childOut.___isLast) {
        this._lastCount--;
      }

      if (remaining - this._lastCount === 0) {
        this._emitLast();
      }
    }
  },

  _flushNext: function (currentWriter) {
    // It is possible that currentWriter is the
    // last writer in the chain, so let's make
    // sure there is a nextWriter to flush.
    var nextWriter = currentWriter.next;
    if (nextWriter) {
      // Flush the contents of nextWriter
      // to the currentWriter
      currentWriter.merge(nextWriter);

      // Remove nextWriter from the chain.
      // It has been flushed and can now be
      // garbage collected.
      currentWriter.next = nextWriter.next;

      // It's possible that nextWriter is the last
      // writer in the chain and its stream already
      // ended, so let's make sure nextStream exists.
      var nextStream = nextWriter.stream;
      if (nextStream) {
        // Point the nextStream to currentWriter
        nextStream.writer = currentWriter;
        currentWriter.stream = nextStream;
      }
    }
  },

  on: function (event, callback) {
    var state = this._state;

    if (event === "finish" && state.finished === true) {
      callback(this.___getResult());
    } else if (event === "last") {
      this.onLast(callback);
    } else {
      state.events.on(event, callback);
    }

    return this;
  },

  once: function (event, callback) {
    var state = this._state;

    if (event === "finish" && state.finished === true) {
      callback(this.___getResult());
    } else if (event === "last") {
      this.onLast(callback);
    } else {
      state.events.once(event, callback);
    }

    return this;
  },

  onLast: function (callback) {
    var lastArray = this._last;

    if (lastArray === undefined) {
      this._last = [callback];
    } else {
      lastArray.push(callback);
    }

    return this;
  },

  _emitLast: function () {
    if (this._last) {
      var i = 0;
      var lastArray = this._last;
      this._last = undefined;
      (function next() {
        if (i === lastArray.length) {
          return;
        }
        var lastCallback = lastArray[i++];
        lastCallback(next);

        if (lastCallback.length === 0) {
          next();
        }
      })();
    }
  },

  emit: function (type, arg) {
    var events = this._state.events;
    switch (arguments.length) {
      case 1:
        events.emit(type);
        break;
      case 2:
        events.emit(type, arg);
        break;
      default:
        events.emit.apply(events, arguments);
        break;
    }
    return this;
  },

  removeListener: function () {
    var events = this._state.events;
    events.removeListener.apply(events, arguments);
    return this;
  },

  prependListener: function () {
    var events = this._state.events;
    events.prependListener.apply(events, arguments);
    return this;
  },

  pipe: function (stream) {
    this._state.stream.pipe(stream);
    return this;
  },

  error: function (e) {
    var name = this.name;
    var stack = this._stack;
    if (stack) stack = getNonMarkoStack(stack);

    if (!(e instanceof Error)) {
      e = new Error(JSON.stringify(e));
    }

    if (name || stack) {
      e.message +=
        "\nRendered by" +
        (name ? " " + name : "") +
        (stack ? ":\n" + stack : "");
    }
    try {
      this.emit("error", e);
    } finally {
      // If there is no listener for the error event then it will
      // throw a new here. In order to ensure that the async fragment
      // is still properly ended we need to put the end() in a `finally`
      // block
      this.end();
    }

    return this;
  },

  flush: function () {
    var state = this._state;

    if (!state.finished) {
      var writer = state.writer;
      if (writer && writer.scheduleFlush) {
        writer.scheduleFlush();
      }
    }
    return this;
  },

  createOut: function () {
    var newOut = new AsyncStream(this.global);
    // Forward error events to the parent out.
    newOut.on("error", this.emit.bind(this, "error"));
    this._state.events.emit("beginDetachedAsync", {
      out: newOut,
      parentOut: this,
    });
    return newOut;
  },

  ___elementDynamic: function (
    tagName,
    elementAttrs,
    key,
    componentDef,
    props,
  ) {
    var str =
      "<" +
      tagName +
      markoAttr(
        this,
        componentDef,
        props,
        key && key[0] === "@" ? key : undefined,
      ) +
      attrsHelper(elementAttrs);

    if (selfClosingTags.voidElements.indexOf(tagName) !== -1) {
      str += ">";
    } else if (selfClosingTags.svgElements.indexOf(tagName) !== -1) {
      str += "/>";
    } else {
      str += "></" + tagName + ">";
    }

    this.write(str);
  },

  element: function (tagName, elementAttrs, openTagOnly) {
    var str = "<" + tagName + attrsHelper(elementAttrs) + ">";

    if (openTagOnly !== true) {
      str += "</" + tagName + ">";
    }

    this.write(str);
  },

  ___beginElementDynamic: function (
    name,
    elementAttrs,
    key,
    componentDef,
    props,
  ) {
    var str =
      "<" +
      name +
      markoAttr(this, componentDef, props, key) +
      attrsHelper(elementAttrs) +
      ">";

    this.write(str);

    if (this._elStack) {
      this._elStack.push(name);
    } else {
      this._elStack = [name];
    }
  },

  beginElement: function (name, elementAttrs) {
    var str = "<" + name + attrsHelper(elementAttrs) + ">";

    this.write(str);

    if (this._elStack) {
      this._elStack.push(name);
    } else {
      this._elStack = [name];
    }
  },

  endElement: function () {
    var tagName = this._elStack.pop();
    this.write("</" + tagName + ">");
  },

  comment: function (str) {
    this.write("<!--" + escapeEndingComment(str) + "-->");
  },

  text: function (str) {
    this.write(escapeXmlOrNullish(str));
  },

  bf: function (key, component, preserve) {
    if (preserve) {
      this.write("<!--F#" + escapeXmlString(key) + "-->");
    }
    if (this._elStack) {
      this._elStack.push(preserve);
    } else {
      this._elStack = [preserve];
    }
  },

  ef: function () {
    var preserve = this._elStack.pop();
    if (preserve) {
      this.write("<!--F/-->");
    }
  },

  ___getNode: function (host) {
    var node = this._node;

    if (!node) {
      var nextEl;
      var fragment;
      var html = this.___getOutput();
      if (!host) host = this.___host;
      var doc = host.ownerDocument || host;

      if (html) {
        node = parseHTML(html);

        if (node && node.nextSibling) {
          // If there are multiple nodes, turn it into a document fragment.
          fragment = doc.createDocumentFragment();

          do {
            nextEl = node.nextSibling;
            fragment.appendChild(node);
          } while ((node = nextEl));

          node = fragment;
        }
      }

      // if HTML is empty use empty document fragment (so that we're returning a valid DOM node)
      this._node = node || doc.createDocumentFragment();
    }
    return node;
  },

  then: function (fn, fnErr) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var out = this;
    return new Promise(function (resolve, reject) {
      out.on("error", reject);
      out.on("finish", function (result) {
        resolve(result);
      });
    }).then(fn, fnErr);
  },

  catch: function (fnErr) {
    return this.then(undefined, fnErr);
  },

  finally: function (fn) {
    return this.then(undefined, undefined).finally(fn);
  },

  c: function (componentDef, key, customEvents) {
    this.___assignedComponentDef = componentDef;
    this.___assignedKey = key;
    this.___assignedCustomEvents = customEvents;
  },
});

// alias:
proto.w = proto.write;
proto.___endElement = proto.endElement;

module.exports = AsyncStream;

function getNonMarkoStack(error) {
  return error.stack
    .toString()
    .split("\n")
    .slice(1)
    .filter((line) => !/\/node_modules\/marko\//.test(line))
    .join("\n");
}

function iteratorReturnFn(value) {
  return Promise.resolve({
    value,
    done: true,
  });
}
