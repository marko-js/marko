import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const yChange = _$.register(function (newValue) {
    x = newValue + 1;
  }, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-dynamic-change-handler/template.marko_0/yChange", _scope0_id);
  const y = x;
  const _y_change = yChange;
  _$.write(`<button id=inc>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}|<!>${_$.escapeXML(y)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}<button id=toggle>toggle</button>${_$.markResumeNode(_scope0_id, "#button/3")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-dynamic-change-handler/template.marko_0");
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-dynamic-change-handler/template.marko_0__y_change_y");
  _$.writeScope(_scope0_id, {
    "_y_change": _y_change,
    "y": y
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-dynamic-change-handler/template.marko", _renderer);