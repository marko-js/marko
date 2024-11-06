import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const a = 0;
  _$.write(`<div${_$.attrs(input.value, "#div/0", _scope0_id, "div")}></div>${_$.markResumeNode(_scope0_id, "#div/0")}<div${_$.attrs({
    a: a,
    ...input.value
  }, "#div/1", _scope0_id, "div")}></div>${_$.markResumeNode(_scope0_id, "#div/1")}<div${_$.attr("a", a)}${_$.partialAttrs(input.value, {
    a: 1
  }, "#div/2", _scope0_id, "div")}></div>${_$.markResumeNode(_scope0_id, "#div/2")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input_a");
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input");
  _$.writeScope(_scope0_id, {
    "input": input,
    "a": a
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko");