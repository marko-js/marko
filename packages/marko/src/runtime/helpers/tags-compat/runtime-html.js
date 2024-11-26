const initComponentsTag = require("../../../core-tags/components/init-components-tag");
const {
  ___getComponentsContext,
} = require("../../components/ComponentsContext");
const createRenderer = require("../../components/renderer");
const defaultCreateOut = require("../../createOut");
const dynamicTag5 = require("../dynamic-tag");

exports.p = function (htmlCompat) {
  const isMarko6 = (fn) => !!fn.___isTagsAPI;
  const isMarko5 = (fn) => !fn.___isTagsAPI;
  const writeHTML = (result) => {
    const state = result.out._state;
    const writer = state.writer;
    state.events.emit("___toString", writer);
    htmlCompat.writeScript(writer._scripts);
    htmlCompat.write(writer._content);
  };

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
      const input = _.i;
      const tagsRenderer = _.r;
      const willRerender = componentDef._wrr;
      out.bf(out.___assignedKey, component, willRerender);
      htmlCompat.render(tagsRenderer, willRerender, out, component, input);
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

  htmlCompat.patchDynamicTag(
    function getRenderer(tag) {
      const renderer = tag._ || tag.renderBody || tag;
      if (isMarko6(renderer)) return renderer;

      const renderer5 =
        tag._ ||
        tag.render ||
        (tag.renderer && tag.renderer.renderer) ||
        tag.renderer;
      const renderBody5 = tag.renderBody || tag;

      return (input, ...args) => {
        const out = defaultCreateOut();
        let customEvents;

        if (renderer5) {
          const normalizedInput = {};

          for (const key in input) {
            let value = input[key];
            if (key.startsWith("on") && typeof value === "function") {
              const c = key[2];
              customEvents = customEvents || [];
              customEvents.push([
                (c === "-" ? "" : c.toLowerCase()) + key.slice(3),
                value,
              ]);
              value.toJSON = htmlCompat.toJSON;
            } else {
              normalizedInput[key] = input[key];
            }
          }
          renderer5(normalizedInput, out);
        } else {
          renderBody5(out, input, ...args);
        }

        const componentsContext = ___getComponentsContext(out);
        const component = componentsContext.___components[0];
        if (component) {
          component.___component.___customEvents = customEvents;
          htmlCompat.writeSetScopeForComponent(component.id);
        }

        initComponentsTag({}, out);

        let async;
        out.once("finish", (result) => {
          if (!async) {
            async = false;
            writeHTML(result);
          }
        });

        out.end();

        if (async !== false) {
          async = true;
          htmlCompat.fork(out, writeHTML);
        }
      };
    },
    function createRenderer(renderFn) {
      renderFn.___isTagsAPI = true;
      return renderFn;
    },
  );

  return htmlCompat.registerRenderer;
};
