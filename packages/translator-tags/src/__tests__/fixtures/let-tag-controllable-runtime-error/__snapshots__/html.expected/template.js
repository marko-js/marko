import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const yChange = function (newValue) {
    x = newValue + 1;
  };
  const y = x;
  const _y_change = yChange;
  _write(`<button id=inc>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/1")}|<!>${_escapeXML(y)}${_markResumeNode(_scope0_id, "#text/2")}</button>${_markResumeNode(_scope0_id, "#button/0")}<button id=toggle>toggle</button>${_markResumeNode(_scope0_id, "#button/3")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-runtime-error/template.marko_0");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-runtime-error/template.marko_0__y_change_y");
  _writeScope(_scope0_id, {
    "_y_change": _y_change,
    "y": y
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-runtime-error/template.marko");