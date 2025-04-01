import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/FancyButton.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    content,
    ...attrs
  } = input;
  _$.write(`<button${_$.attrs(attrs, "#button/0", _scope0_id, "button")}>`);
  _$.dynamicTag(_scope0_id, "#text/1", content, {}, 0, 0, 1);
  _$.write(`</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/tags/FancyButton.marko_0_attrs");
  _$.writeScope(_scope0_id, {
    attrs
  }, "__tests__/tags/FancyButton.marko", 0, {
    attrs: "1:22"
  });
});