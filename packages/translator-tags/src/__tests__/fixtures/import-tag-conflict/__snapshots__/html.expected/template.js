import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`${_escapeXML(asset1)}${_markResumeNode(_scope0_id, "#text/0")} <!>${_escapeXML(asset2)}${_markResumeNode(_scope0_id, "#text/1")}`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/import-tag-conflict/template.marko");