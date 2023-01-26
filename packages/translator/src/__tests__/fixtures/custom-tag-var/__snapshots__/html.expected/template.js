import { nextScopeId as _nextScopeId, register as _register, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child.marko";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const data = _child({
    renderBody() {
      const _scope1_ = _nextScopeId();
    }
  }, _register(() => {}, "packages/translator/src/__tests__/fixtures/custom-tag-var/template.marko_0_data", _scope0_));
  _write(`<div>${_escapeXML(data)}${_markHydrateNode(_scope0_, "#text/1")}</div>`);
  _writeHydrateScope(_scope0_, {});
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);