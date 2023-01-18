import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const message = {
    text: "hi"
  };
  const show = true;
  _write(`<button>hide</button>${_markHydrateNode(_scope, 0)}`);
  if (show) {
    const _scope = _nextScopeId();
    _write(`${_escapeXML(message.text)}${_markHydrateNode(_scope, 0)}`);
  }
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-execution-order/template.marko_0");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);