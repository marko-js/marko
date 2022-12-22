import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  onClick,
  text
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`${_markHydrateNode(_scope, 0)}<button>${_markHydrateNode(_scope, 1)}${_escapeXML(text)}</button>`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko_0_onClick");
  _writeHydrateScope(_scope, {
    2: onClick
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);