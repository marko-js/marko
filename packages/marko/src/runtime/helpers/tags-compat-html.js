import initComponentsTag from "../../core-tags/components/init-components-tag";
import { ___getComponentsContext } from "../components/ComponentsContext";

const tagsAPI = require("@marko/runtime-fluurt/dist/debug/html"); // TODO: use the non-debug version when built for production
const createRenderer = require("../components/renderer");
const dynamicTag5 = require("./dynamic-tag");
const defaultCreateOut = require("../createOut");
const {
  patchDynamicTag,
  createRenderFn,
  fork,
  write,
  makeSerializable,
  register,
  writeScope,
  nextScopeId,
} = tagsAPI;

const w10NOOP = require("warp10/constants").NOOP;
const RENDER_BODY_TO_JSON = function () {
  // TODO: this should instead return an object that contains getRegistryInfo
  // then in the dom-compat, handle that object to lookup the function in the registry
  // (we also need to do this for events)
  return w10NOOP;
};

const isMarko6 = (fn) => !!fn.___isTagsAPI;
const isMarko5 = (fn) => !fn.___isTagsAPI;

export default dynamicTag5.___runtimeCompat = function tagsToVdom(
  tagsRenderer,
  renderBody,
  args
) {
  if (tagsRenderer ? isMarko5(tagsRenderer) : isMarko5(renderBody))
    return tagsRenderer;

  if (!tagsRenderer && renderBody) {
    renderBody.toJSON = RENDER_BODY_TO_JSON;
  }

  return (input, out) =>
    TagsCompat(
      { i: args ? { value: args } : input, r: tagsRenderer || renderBody },
      out
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
  {
    t: TagsCompatId,
    d: "MARKO_DEBUG",
  },
  {}
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

    return (input) => {
      const out = defaultCreateOut();
      out.global.streamData = tagsAPI.$_streamData;

      if (renderer5) {
        renderer5(input, out);
      } else {
        if (Array.isArray(input?.value)) {
          renderBody5(out, ...input.value);
        } else {
          renderBody5(out);
        }
      }

      const componentsContext = ___getComponentsContext(out);
      const componentId = componentsContext.___components[0]?.id;

      writeScope(nextScopeId(), {
        m5c: componentId,
      });

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
  }
);

function dummyCreate5to6Renderer() {}

register(dummyCreate5to6Renderer, "@marko/tags-compat-5-to-6");

export function serialized5to6(renderer, id) {
  const dummyRenderer = () => {};
  register(dummyRenderer, id);
  return makeSerializable(renderer, (s) =>
    s.value(dummyCreate5to6Renderer).code("(").value(dummyRenderer).code(",!0)")
  );
}
