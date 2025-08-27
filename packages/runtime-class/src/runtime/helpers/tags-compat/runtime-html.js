const {
  ___getInitComponentsCodeForDefs,
  ___addComponentsFromContext,
} = require("@internal/components-entry");
const {
  ___getComponentsContext,
} = require("../../components/ComponentsContext");
const createRenderer = require("../../components/renderer");
const defaultCreateOut = require("../../createOut");
const dynamicTag5 = require("../dynamic-tag");

exports.p = function (htmlCompat) {
  const writersByGlobal = new WeakMap();
  const isMarko6 = (fn) => htmlCompat.isTagsAPI(fn);
  const isMarko5 = (fn) => !isMarko6(fn);
  const writeClassAPIResultToTagsAPI = (result) => {
    const { writer } = result.out._state;
    htmlCompat.write(writer._content);
    htmlCompat.writeScript(writer._script);
    writer._content = writer._scripts = "";
  };
  const flushScripts = ($global, flushDefs) => {
    const writers = writersByGlobal.get($global);
    if (!writers) return "";

    const { classAPI, tagsAPI } = writers;
    let scripts = "";
    let componentDefs = flushDefs;

    if (classAPI.length) {
      componentDefs = flushDefs ? flushDefs.concat(classAPI) : classAPI;
      writers.classAPI = [];
    }

    if (componentDefs) {
      scripts = ___getInitComponentsCodeForDefs($global, componentDefs);
    }

    if (tagsAPI.length) {
      const [chunk] = tagsAPI;
      for (let i = 1; i < tagsAPI.length; i++) {
        chunk.append(tagsAPI[i]);
      }

      if (!chunk.boundary.done) {
        throw new Error(
          "Cannot serialize promise across tags/class compat layer.",
        );
      }

      scripts = concatScripts(chunk.flushScript().scripts, scripts);
      writers.tagsAPI = [];
    }

    return scripts;
  };

  htmlCompat.onFlush((chunk) => {
    chunk.render(() => {
      chunk.writeScript(flushScripts(chunk.boundary.state.$global));
    });
  });

  dynamicTag5.___runtimeCompat = function tagsToVdom(
    tagsRenderer,
    renderBody,
    args,
  ) {
    if (tagsRenderer ? isMarko5(tagsRenderer) : isMarko5(renderBody)) {
      return tagsRenderer;
    }

    if (!tagsRenderer && renderBody) {
      renderBody.toJSON = htmlCompat.toJSON;
    }

    return (input, out) =>
      TagsCompat(
        args
          ? { i: args, r: (args) => (tagsRenderer || renderBody)(...args) }
          : { i: input, r: tagsRenderer || renderBody },
        out,
      );
  };

  const TagsCompatId = "tags-compat";
  const TagsCompat = createRenderer(
    function (_, out, componentDef, component) {
      // class to tags
      const $global = out.global;
      let writers = writersByGlobal.get($global);
      if (!writers) {
        writersByGlobal.set($global, (writers = { classAPI: [], tagsAPI: [] }));
        out.prependListener("___toString", (writer) => {
          const defs = writer._data?.componentDefs;
          const scripts = flushScripts($global, defs);
          if (scripts) {
            if (defs) writer._data.componentDefs = undefined;
            writer.script(scripts);
          }
        });
      }

      const input = _.i;
      const tagsRenderer = _.r;
      const willRerender = componentDef._wrr || htmlCompat.isInResumedBranch();
      out.bf("1", component, willRerender);
      htmlCompat.render(
        tagsRenderer,
        willRerender,
        out,
        component,
        input,
        writers.tagsAPI,
      );
      out.ef();
    },
    // eslint-disable-next-line no-constant-condition
    "MARKO_DEBUG"
      ? {
          t: TagsCompatId,
          i: true,
          d: true,
        }
      : {
          t: TagsCompatId,
          i: true,
        },
    {},
  );

  htmlCompat.patchDynamicTag(function getRenderer(scopeId, accessor, tag) {
    if (!tag || isMarko6(tag._ || tag.content || tag)) {
      return tag;
    }

    const renderer5 =
      tag._ ||
      tag.render ||
      (tag.renderer && tag.renderer.renderer) ||
      tag.renderer;
    const renderBody5 = tag.renderBody || tag;

    if (!renderer5 && renderBody5) {
      htmlCompat.registerRenderBody(renderBody5);
    }
    return (input, ...args) => {
      // tags to class
      const $global = htmlCompat.$global();
      htmlCompat.ensureState($global);
      let writers = writersByGlobal.get($global);
      if (!writers) {
        writersByGlobal.set($global, (writers = { classAPI: [], tagsAPI: [] }));
      }

      const out = defaultCreateOut($global);
      const branchId = htmlCompat.nextScopeId();
      let customEvents;

      if (renderer5) {
        const originalInput = input;
        input = {};

        for (const key in originalInput) {
          const value = originalInput[key];
          if (/^on[-A-Z]/.test(key)) {
            if (typeof value === "function") {
              (customEvents || (customEvents = [])).push([
                key[2] === "-" ? key.slice(3) : key.slice(2).toLowerCase(),
                value,
              ]);
              value.toJSON = htmlCompat.toJSON;
            }
          } else {
            input[key === "content" ? "renderBody" : key] = value;
          }
        }
      }

      if (renderer5) {
        renderer5(input, out);
      } else {
        renderBody5(out, input, ...args);
      }

      const componentsContext = ___getComponentsContext(out);
      const componentDef = componentsContext.___components[0];
      if (componentDef) {
        componentDef.___component.___customEvents = customEvents;
        componentDef._wrr = true;
        componentDef.___flags |= 1; // FLAG_WILL_RERENDER_IN_BROWSER
        htmlCompat.writeSetScopeForComponent(branchId, componentDef.id);
      }

      let async;
      out.once("finish", (result) => {
        if (result.out.___components) {
          ___addComponentsFromContext(
            result.out.___components,
            writers.classAPI,
          );
        }
        if (!async) {
          async = false;
          writeClassAPIResultToTagsAPI(result);
        }
      });

      out.end();

      if (async !== false) {
        async = true;
        htmlCompat.fork(scopeId, accessor, out, writeClassAPIResultToTagsAPI);
      }
    };
  });

  return htmlCompat.registerRenderer;
};

function concatScripts(a, b) {
  return a ? (b ? a + ";" + b : a) : b;
}
