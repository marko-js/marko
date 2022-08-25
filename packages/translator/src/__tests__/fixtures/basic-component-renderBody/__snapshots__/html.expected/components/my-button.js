import { markHydrateNode as _markHydrateNode, write as _write, dynamicTag as _dynamicTag, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = ({
  onclick,
  renderBody
}) => {
  const _scope = _nextScopeId();

  _write(`${_markHydrateNode(_scope, 0)}<button>`);

  _dynamicTag(renderBody, null);

  _write("</button>");

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onclick");

  _writeHydrateScope(_scope, {
    1: onclick
  });
};

export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);