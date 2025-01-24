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
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_input_value_a");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_input_value");
  _$.writeScope(_scope0_id, {
    "input_value": input.value,
    "a": a
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);