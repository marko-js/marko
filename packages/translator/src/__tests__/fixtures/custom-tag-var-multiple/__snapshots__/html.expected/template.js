import { nextScopeId as _nextScopeId, register as _register, markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child.marko";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const data = _child({
    renderBody() {
      const _scope = _nextScopeId();
    }
  }, _register(() => {}, "packages/translator/src/__tests__/fixtures/custom-tag-var-multiple/template.marko_0_data", _scope));
  _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(data)}</div>`);
  _writeHydrateScope(_scope, {});
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);