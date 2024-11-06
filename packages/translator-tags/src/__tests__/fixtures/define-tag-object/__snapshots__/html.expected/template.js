import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const myObj = {
    foo: 1,
    bar: x + 1
  };
  _$.write(`<div>${_$.escapeXML(JSON.stringify(myObj))}${_$.markResumeNode(_scope0_id, "#text/0")}</div><button>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/define-tag-object/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    "x": x
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/define-tag-object/template.marko", _renderer);