import { nextScopeId as _nextScopeId, register as _register, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const data = _child({
    renderBody() {
      const _scope1_id = _nextScopeId();
    }
  }, _register(() => {}, "packages/translator/src/__tests__/fixtures/custom-tag-var/template.marko_0_data", _scope0_id));
  _write(`<div>${_escapeXML(data)}${_markHydrateNode(_scope0_id, "#text/1")}</div>`);
  _writeHydrateScope(_scope0_id, {}, _scope0_);
}, "packages/translator/src/__tests__/fixtures/custom-tag-var/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);