const initComponentsTag = require("../../../core-tags/components/init-components-tag");
const {
  ___getComponentsContext,
} = require("../../components/ComponentsContext");
const createRenderer = require("../../components/renderer");
const defaultCreateOut = require("../../createOut");
const dynamicTag5 = require("../dynamic-tag");

exports.p = function (tagsAPI) {
  const {
    patchDynamicTag,
    createRenderFn,
    fork,
    write,
    makeSerializable,
    register,
    writeScope,
    nextScopeId,
    getRegistryInfo,
  } = tagsAPI;
  const FN_TO_JSON = function () {
    // TODO: this should instead return an object that contains getRegistryInfo
    // then in the dom-compat, handle that object to lookup the function in the registry
    // (we also need to do this for events)
    return getRegistryInfo(this);
  };

  const isMarko6 = (fn) => !!fn.___isTagsAPI;
  const isMarko5 = (fn) => !fn.___isTagsAPI;

  dynamicTag5.___runtimeCompat = function tagsToVdom(
    tagsRenderer,
    renderBody,
    args,
  ) {
    if (tagsRenderer ? isMarko5(tagsRenderer) : isMarko5(renderBody))
      return tagsRenderer;

    if (!tagsRenderer && renderBody) {
      renderBody.toJSON = FN_TO_JSON;
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
      const renderFn = createRenderFn(tagsRenderer);
      const $global = out.global;
      const streamData = ($global.streamData = $global.streamData || {});

      $global.serializedGlobals = $global.serializedGlobals || {};
      $global.serializedGlobals.componentIdToScopeId = true;
      $global.componentIdToScopeId = $global.componentIdToScopeId || {};
      $global.componentIdToScopeId[component.id] = streamData.scopeId || 0;
      out.bf(out.___assignedKey, component, true);
      renderFn(out.beginAsync(), input, {}, streamData);
      out.ef();
    },
    // eslint-disable-next-line no-constant-condition
    "MARKO_DEBUG"
      ? {
          t: TagsCompatId,
          d: true,
        }
      : {
          t: TagsCompatId,
        },
    {},
  );

  patchDynamicTag(
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

        out.global.streamData = tagsAPI.getStreamData();

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
              value.toJSON = FN_TO_JSON;
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
          writeScope(nextScopeId(), {
            m5c: component.id,
          });
        }

        initComponentsTag({}, out);

        let async;
        out.once("finish", (result) => {
          if (!async) {
            async = false;
            write(result.toString());
          }
        });

        out.end();

        if (async !== false) {
          async = true;
          fork(out, (result) => {
            write(result.toString());
          });
        }
      };
    },
    function createRenderer(renderFn) {
      renderFn.___isTagsAPI = true;
      return renderFn;
    },
  );

  function dummyCreate5to6Renderer() {}

  register(dummyCreate5to6Renderer, "@marko/tags-compat-5-to-6");

  return function serialized5to6(renderer, id) {
    const dummyRenderer = () => {};
    register(dummyRenderer, id);
    return makeSerializable(renderer, (s) =>
      s
        .value(dummyCreate5to6Renderer)
        .code("(")
        .value(dummyRenderer)
        .code(",!0)"),
    );
  };
};
