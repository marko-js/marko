"use strict";

var extend = require("raptor-util/extend");
var setImmediate = require("@internal/set-immediate").___setImmediate;
var defaultCreateOut = require("./createOut");

function safeRender(renderFunc, finalData, finalOut, shouldEnd) {
  try {
    renderFunc(finalData, finalOut);

    if (shouldEnd) {
      finalOut.end();
    }
  } catch (err) {
    var actualEnd = finalOut.end;
    finalOut.end = function () {};

    setImmediate(function () {
      finalOut.end = actualEnd;
      finalOut.error(err);
    });
  }
  return finalOut;
}

module.exports = function (target, renderer) {
  var renderFunc =
    renderer && (renderer.renderer || renderer.render || renderer);
  var createOut = target.createOut || renderer.createOut || defaultCreateOut;

  return extend(target, {
    _: renderFunc,
    createOut: createOut,

    renderToString: function (data, callback) {
      var localData = data || {};
      var render = renderFunc || this._;
      var globalData = localData.$global;
      var out = createOut(globalData);

      out.global.template = this;

      if (globalData) {
        localData.$global = undefined;
      }

      if (callback) {
        out
          .on("finish", function () {
            callback(null, out.toString(), out);
          })
          .once("error", callback);

        return safeRender(render, localData, out, true);
      } else {
        out.sync();
        render(localData, out);
        return out.toString();
      }
    },

    renderSync: function (data) {
      var localData = data || {};
      var render = renderFunc || this._;
      var globalData = localData.$global;
      var out = createOut(globalData);
      out.sync();

      out.global.template = this;

      if (globalData) {
        localData.$global = undefined;
      }

      render(localData, out);
      return out.___getResult();
    },

    /**
     * Renders a template to nodes and inserts them into the DOM relative
     * to the provided reference based on the optional position parameter.
     *
     * Supported signatures:
     *
     * mount(data, reference)
     * mount(data, reference, position)
     *
     * @param  {Object} data The view model data for the template
     * @param  {Node} reference DOM node to insert the rendered node(s) relative to
     * @param  {string} [position] A string representing the position relative to the `reference`; must match (case-insensitively) one of the following strings:
     *  'beforebegin': Before the targetElement itself.
     *  'afterbegin': Just inside the targetElement, before its first child.
     *  'beforeend': Just inside the targetElement, after its last child.
     *  'afterend': After the targetElement itself.
     * @return {TemplateInstance} Object with `update` and `dispose` methods
     */
    mount: function (data, reference, position) {
      const result = this.renderSync(data);

      switch (position) {
        case "afterbegin":
          result.prependTo(reference);
          break;
        case "afterend":
          result.insertAfter(reference);
          break;
        case "beforebegin":
          result.insertBefore(reference);
          break;
        default:
          result.appendTo(reference);
          break;
      }

      const component = result.getComponent();

      return {
        update(input) {
          component.input = input;
          component.update();
        },
        destroy() {
          component.destroy();
        },
      };
    },

    /**
     * Renders a template to either a stream (if the last
     * argument is a Stream instance) or
     * provides the output to a callback function (if the last
     * argument is a Function).
     *
     * Supported signatures:
     *
     * render(data)
     * render(data, out)
     * render(data, stream)
     * render(data, callback)
     *
     * @param  {Object} data The view model data for the template
     * @param  {AsyncStream/AsyncVDOMBuilder} out A Stream, an AsyncStream/AsyncVDOMBuilder instance, or a callback function
     * @return {AsyncStream/AsyncVDOMBuilder} Returns the AsyncStream/AsyncVDOMBuilder instance that the template is rendered to
     */
    render: function (data, out) {
      var callback;
      var finalOut;
      var finalData;
      var globalData;
      var render = renderFunc || this._;
      var shouldBuffer = this.___shouldBuffer;
      var shouldEnd = true;

      if (data) {
        finalData = data;
        if ((globalData = data.$global)) {
          finalData.$global = undefined;
        }
      } else {
        finalData = {};
      }

      if (out && out.___isOut) {
        finalOut = out;
        shouldEnd = false;
        extend(out.global, globalData);
      } else if (typeof out == "function") {
        finalOut = createOut(globalData);
        callback = out;
      } else {
        finalOut = createOut(
          globalData, // global
          out, // writer(AsyncStream) or parentNode(AsyncVDOMBuilder)
          undefined, // parentOut
          shouldBuffer, // ignored by AsyncVDOMBuilder
        );
      }

      if (callback) {
        finalOut
          .on("finish", function () {
            callback(null, finalOut.___getResult(), finalOut);
          })
          .once("error", callback);
      }

      globalData = finalOut.global;

      globalData.template = globalData.template || this;

      return safeRender(render, finalData, finalOut, shouldEnd);
    },
  });
};
