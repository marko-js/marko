import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  const dummy = {};
  _$.write(`<div>${_$.escapeXML((dummy, value))}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
  _$.writeScope(_scope0_id, {
    "value": value,
    "dummy": dummy
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/components/display-intersection.marko");