import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _layout from "./components/layout.marko";
const _renderer = _register(({
  name
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _layout({
    renderBody() {
      const _scope1_id = _nextScopeId();
      _write(`<h1>Hello <!>${_escapeXML(name)}${_markHydrateNode(_scope1_id, "#text/0")}</h1>`);
    }
  });
}, "packages/translator/src/__tests__/fixtures/basic-layout/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);